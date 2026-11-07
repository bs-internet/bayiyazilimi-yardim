# VPS'e kurulum

Bu sayfa SSH ile bağlanabildiğiniz bir Linux sunucu (VPS) içindir. Komutlar Ubuntu / Debian
örneğidir; paket adları dağıtıma göre değişebilir.

## Sunucuda gerekenler

- PHP **8.4** (PHP-FPM) ve eklentiler: pdo_mysql, mbstring, openssl, tokenizer, ctype, json,
  fileinfo, dom, xml, xmlreader, zip, iconv, curl
- MySQL 8+ ya da MariaDB 10.6+
- Nginx ya da Apache
- Composer ve Node.js 20+ (ön yüz derlemesi için)
- Supervisor (kuyruk işleyicisi için)

## 1. Veritabanı

```sql
CREATE DATABASE bayiyazilimi CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER 'bayi'@'localhost' IDENTIFIED BY 'güçlü-bir-şifre';
GRANT ALL PRIVILEGES ON bayiyazilimi.* TO 'bayi'@'localhost';
FLUSH PRIVILEGES;
```

## 2. Dosyalar ve kurulum

```bash
cd /var/www
git clone https://github.com/bs-internet/bayiyazilimi.git
cd bayiyazilimi
composer install --no-dev --optimize-autoloader
npm ci && npm run build
php artisan bayi:setup
```

`bayi:setup` veritabanı bilgilerini, firma adını, site adresini, yönetici hesabını ve başlangıç
verilerini sorar. Her sorunun anlamı: [Komutla kurulum](/baslangic/kurulum#bayi-setup).
Tarayıcıdan kurmayı tercih ederseniz bu komutu çalıştırmadan web sunucusunu ayarlayıp siteyi
açın; [kurulum sihirbazı](/baslangic/kurulum#sihirbaz) başlar.

Dosya sahipliğini web sunucusu kullanıcısına verin (Ubuntu'da genellikle `www-data`):

```bash
sudo chown -R www-data:www-data storage bootstrap/cache .env
```

## 3. Web sunucusu

Sitenin kökü projenin **`public`** klasörüdür. Nginx için örnek:

```nginx
server {
    listen 80;
    server_name bayi.firmaniz.com;
    root /var/www/bayiyazilimi/public;
    index index.php;
    client_max_body_size 20M;

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    location ~ \.php$ {
        include snippets/fastcgi-php.conf;
        fastcgi_pass unix:/run/php/php8.4-fpm.sock;
    }

    location ~ /\.(?!well-known) {
        deny all;
    }
}
```

Apache kullanıyorsanız `DocumentRoot` değerini `public` klasörü yapın; `public/.htaccess`
dosyası adres yönlendirmelerini kendisi yapar (`mod_rewrite` açık olmalı).

SSL için Let's Encrypt (ör. `certbot --nginx`) kullanabilirsiniz. SSL'den sonra `.env`
dosyasındaki `APP_URL` değerinin `https://` ile başladığından emin olun.

## 4. Cron

```bash
sudo crontab -u www-data -e
```

Şu satırı ekleyin:

```
* * * * * cd /var/www/bayiyazilimi && php artisan schedule:run >> /dev/null 2>&1
```

Hangi görevlerin çalıştığı: [Kurulum › Cron](/baslangic/kurulum#cron).

## 5. Kuyruk işleyicisi (supervisor) {#kuyruk}

Bildirim e-postaları ve bazı arka plan işleri kuyruktan gönderilir. Kuyruğu sürekli işleyen bir
süreç tanımlayın. `/etc/supervisor/conf.d/bayiyazilimi.conf`:

```ini
[program:bayiyazilimi-queue]
command=php /var/www/bayiyazilimi/artisan queue:work --sleep=3 --tries=3 --max-time=3600
user=www-data
autostart=true
autorestart=true
stopwaitsecs=3600
redirect_stderr=true
stdout_logfile=/var/www/bayiyazilimi/storage/logs/queue.log
```

```bash
sudo supervisorctl reread
sudo supervisorctl update
sudo supervisorctl start bayiyazilimi-queue
```

Sistemi her güncellediğinizde işleyicinin yeni kodu alması için `php artisan queue:restart`
çalıştırın (supervisor süreci kendiliğinden yeniden başlatır).

## 6. E-posta {#e-posta}

`.env` dosyasında e-posta sunucusu bilgilerini girin:

| Anahtar | Açıklama |
|---|---|
| `MAIL_MAILER` | `smtp` yazın. Varsayılan `log` değeri e-posta göndermez, yalnız günlük dosyasına yazar |
| `MAIL_HOST` | SMTP sunucusu (ör. `smtp.yandex.com`, `mail.firmaniz.com`) |
| `MAIL_PORT` | Genellikle `587` ya da `465` |
| `MAIL_SCHEME` | 465 portunda `smtps`; 587'de `null` bırakın |
| `MAIL_USERNAME` / `MAIL_PASSWORD` | SMTP hesabı. Şifrede boşluk ya da özel karakter varsa çift tırnak içine alın |
| `MAIL_FROM_ADDRESS` | Gönderen adresi; SMTP hesabıyla aynı alan adında olmalı |
| `MAIL_FROM_NAME` | Gönderen adı (ör. firma adınız) |
| `QUEUE_CONNECTION` | `database` (varsayılan): e-postalar kuyruktan gider, işleyici gerekir. `sync`: anında gönderilir |

Değişiklikten sonra yapılandırma önbelleğini temizleyin:

```bash
php artisan config:clear
php artisan queue:restart
```

Hangi e-postaların kime gittiği: [E-posta ve bildirimler](/yonetim/e-posta-bildirimleri).

## 7. İsteğe bağlı: sunucu tarafı ön yüz (SSR) {#ssr}

Sistem SSR olmadan da eksiksiz çalışır. Sayfaların ilk açılışta sunucuda hazırlanmasını
isterseniz:

```bash
npm run build:ssr
```

ve supervisor'a ikinci bir süreç ekleyin:

```ini
[program:bayiyazilimi-ssr]
command=php /var/www/bayiyazilimi/artisan inertia:start-ssr
user=www-data
autostart=true
autorestart=true
```

SSR süreci çalışmıyorsa sayfalar normal şekilde tarayıcıda oluşturulur.

## 8. İsteğe bağlı: hızlandırma {#hizlandirma}

Canlı sunucuda yapılandırma, rota ve görünüm dosyalarını önbelleğe almak için:

```bash
php artisan optimize
```

Bu komutu kullanıyorsanız `.env` değişikliğinden ve her güncellemeden sonra yeniden çalıştırın;
önbelleği kaldırmak için `php artisan optimize:clear`.

Sonraki adımlar: [Panel tanıtımı](/baslangic/panel-tanitimi) ·
[İlk ayarlar](/baslangic/ilk-ayarlar) · [Güncelleme ve yedekleme](/baslangic/guncelleme-yedekleme).
