# Paylaşımlı hostinge kurulum

Bu sayfa cPanel'li bir paylaşımlı hosting üzerinden anlatılmıştır. Plesk, DirectAdmin gibi
panellerde menü adları farklıdır ama adımlar aynıdır.

::: info Neye ihtiyacınız var?
- PHP 8.4 seçilebilen bir hosting paketi
- MySQL / MariaDB veritabanı
- Alan adının kök klasörünü (document root) değiştirebilme
- Cron (zamanlanmış görev) tanımlayabilme
- Mümkünse **Terminal** (SSH). Kurulum terminalsiz yapılır, ama güncellemeler ve bazı onarımlar
  komut gerektirir.
:::

## 1. Kurulum paketini hazırlayın

Sunucuya yükleyeceğiniz paketin içinde PHP kütüphaneleri (`vendor`) ve derlenmiş ön yüz
dosyaları (`public/build`) **hazır** olmalıdır; paylaşımlı hostingde bunları oluşturamazsınız.

Hazır bir paketiniz yoksa kendi bilgisayarınızda (PHP 8.4, Composer ve Node.js 20+ kurulu):

```bash
git clone https://github.com/bs-internet/bayiyazilimi.git
cd bayiyazilimi
composer install --no-dev --optimize-autoloader
npm ci && npm run build
```

Ardından klasörü **`node_modules` hariç** zip olarak sıkıştırın.

## 2. PHP sürümünü ve eklentileri ayarlayın

1. **cPanel › MultiPHP Manager** (ya da **Select PHP Version**) ekranında alan adınız için
   **PHP 8.4**'ü seçin.
2. Eklentiler ekranında şunların açık olduğundan emin olun: pdo_mysql, mbstring, openssl,
   tokenizer, ctype, json, fileinfo, dom, xml, xmlreader, zip, iconv, curl.

Eklentileri açamıyorsanız hosting firmanızdan isteyin. Eksik eklenti kurulum sihirbazının ilk
adımında kırmızıyla gösterilir.

## 3. Veritabanını oluşturun

1. **cPanel › MySQL Databases** (MySQL Veritabanları) ekranında yeni bir veritabanı oluşturun
   (ör. `bayi` → tam adı `hesabim_bayi` olur).
2. Aynı ekranda yeni bir kullanıcı oluşturun ve güçlü bir şifre verin.
3. **Add User To Database** ile kullanıcıyı veritabanına ekleyin ve **ALL PRIVILEGES**
   (tüm yetkiler) seçin.
4. Tam veritabanı adını, tam kullanıcı adını ve şifreyi not edin.

## 4. Dosyaları yükleyin

1. **cPanel › File Manager** ile ev klasörünüzde (`public_html`'in **dışında**) yeni bir klasör
   açın, ör. `/home/hesabim/bayiyazilimi`.
2. Zip dosyasını bu klasöre yükleyin ve **Extract** ile açın. Klasörün içinde `app`, `public`,
   `vendor`, `artisan` gibi dosya ve klasörler görünmelidir.
3. `storage` ve `bootstrap/cache` klasörlerinin yazılabilir olduğundan emin olun (izin genellikle
   `755` yeterlidir; sihirbaz yazamıyorsa hosting firmanıza danışın).

::: warning Gizli dosyalar
`.env` ve `.htaccess` nokta ile başlayan dosyalardır. File Manager'da görmek için **Settings ›
Show Hidden Files** seçeneğini açın. `public/.htaccess` dosyası yüklenmezse site adresleri
çalışmaz.
:::

## 5. Alan adının kök klasörünü public yapın {#kok-klasor}

1. **cPanel › Domains** ekranında alan adınızın yanındaki **Manage** düğmesine basın.
2. **Document Root** alanını projenin `public` klasörü yapın, ör. `bayiyazilimi/public`.
3. Kaydedin.

Ana alan adınızın kök klasörü değiştirilemiyorsa sistemi bir alt alan adına (ör.
`bayi.firmaniz.com`) kurun; alt alan adı oluştururken kök klasörü doğrudan
`bayiyazilimi/public` olarak verebilirsiniz.

SSL sertifikasının (https) alan adı için etkin olduğundan emin olun (**cPanel › SSL/TLS Status**
ya da AutoSSL).

## 6. Kurulum sihirbazını çalıştırın

Tarayıcıda sitenizin adresini **https ile** açın. Sistem sizi `/kurulum` sihirbazına yönlendirir.
Gereksinimler, veritabanı ve yönetici adımlarını tamamlayın. Her alanın anlamı:
[Kurulum sihirbazı](/baslangic/kurulum#sihirbaz).

## 7. Cron ekleyin {#cron}

**cPanel › Cron Jobs** ekranında:

1. **Common Settings** listesinden **Once Per Minute (\* \* \* \* \*)** seçin.
2. **Command** alanına (yolları kendi hesabınıza göre değiştirerek):

```
cd /home/hesabim/bayiyazilimi && /usr/local/bin/php artisan schedule:run >> /dev/null 2>&1
```

3. **Add New Cron Job** ile kaydedin.

PHP'nin yolu hostinge göre değişir (`/usr/local/bin/php`, `/opt/cpanel/ea-php84/root/usr/bin/php`
gibi). Cron'da kullanılan PHP'nin de **8.4** olması gerekir; doğru yolu hosting firmanızdan
öğrenebilirsiniz.

## 8. E-posta ayarları {#e-posta}

**cPanel › Email Accounts** ile bir e-posta hesabı (ör. `bildirim@firmaniz.com`) açın ve
**Connect Devices** ekranından SMTP sunucu bilgilerini alın. Sonra File Manager'da proje
klasöründeki `.env` dosyasını düzenleyin:

```ini
MAIL_MAILER=smtp
MAIL_HOST=mail.firmaniz.com
MAIL_PORT=465
MAIL_SCHEME=smtps
MAIL_USERNAME=bildirim@firmaniz.com
MAIL_PASSWORD="e-posta-şifresi"
MAIL_FROM_ADDRESS="bildirim@firmaniz.com"
MAIL_FROM_NAME="Firma Adınız"
```

587 portu kullanıyorsanız `MAIL_PORT=587` yazın ve `MAIL_SCHEME` satırını `null` bırakın.

Paylaşımlı hostingde sürekli çalışan bir kuyruk işleyicisi olmadığı için e-postaların **anında**
gönderilmesini sağlayın:

```ini
QUEUE_CONNECTION=sync
```

Böylece e-posta, işlemi yapan kişinin isteği sırasında gönderilir (işlem biraz daha uzun
sürebilir). Alternatif olarak hosting izin veriyorsa ikinci bir cron satırıyla kuyruğu dakikada
bir boşaltabilirsiniz:

```
cd /home/hesabim/bayiyazilimi && /usr/local/bin/php artisan queue:work --stop-when-empty >> /dev/null 2>&1
```

::: tip .env değişikliğinden sonra
`.env` dosyasını değiştirdikten sonra **Ayarlar › Ön Bellek Yönetimi** ekranından
**Yapılandırma Önbelleği**'ni temizleyin. Bkz. [Ön bellek yönetimi](/yonetim/on-bellek).
:::

## 9. Giriş ve ilk ayarlar

`https://siteniz/login` adresinden kurulumda belirlediğiniz e-posta ve şifreyle giriş yapın.
Sırada [İlk ayarlar](/baslangic/ilk-ayarlar) var.

Bir adımda takıldıysanız: [Kurulumda sorun giderme](/baslangic/sorun-giderme).
