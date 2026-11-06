# Kurulum

Bayi Yazılımı VPS'e de paylaşımlı hostinge de kurulabilir. Kurulum, tarayıcıdan açılan bir
sihirbazla ya da tek bir komutla yapılır; ikisi de aynı adımları izler.

## Gereksinimler

| | |
|---|---|
| PHP | 8.4 veya üstü |
| PHP eklentileri | pdo_mysql, mbstring, openssl, tokenizer, ctype, json, fileinfo, dom, xml, xmlreader, zip, iconv, curl |
| Veritabanı | MySQL 8+ ya da MariaDB 10.6+ |
| Yazma izni | `storage`, `bootstrap/cache` klasörleri ve `.env` dosyası |
| Zamanlanmış görev | cron (kurlar, ödeme zaman aşımı, SKT kontrolü için) |

Sihirbaz bu gereksinimleri kendisi kontrol eder; eksik olanı listeler.

::: warning Site kökü
Sunucunuzda sitenin kök klasörü (document root) projenin **`public`** klasörü olmalıdır.
Paylaşımlı hostingde bunu barındırma panelinizden (cPanel, Plesk …) alan adı ayarlarında
değiştirebilirsiniz.
:::

## Başlamadan önce

Barındırma panelinizden **boş bir veritabanı** ve bu veritabanına yetkili bir **kullanıcı**
oluşturun. Veritabanı adı, kullanıcı adı ve şifre kurulumda sorulacak.

## Tarayıcıdan kurulum

Paylaşımlı hosting için en kolay yol budur.

1. Kurulum paketini sunucuya yükleyip açın.
2. Site adresinizi tarayıcıda açın. Sistem henüz kurulmadığı için sizi **kurulum sihirbazına**
   (`/kurulum`) yönlendirir.
3. **Gereksinimler:** eksik bir şey varsa listelenir. Hepsi tamamsa devam edin.
4. **Veritabanı:** sunucu (genellikle `127.0.0.1` ya da `localhost`), port (`3306`),
   veritabanı adı, kullanıcı adı ve şifreyi girin. Bağlantı denenir; hata varsa nedeni
   gösterilir.
5. **Site ve yönetici:** firma / site adı, site adresi, yönetici adı, e-posta ve şifre.
6. **Başlangıç verileri:** iki seçenek vardır:
   - **Boş yükle** — yalnız temel veriler gelir. Gerçek kullanım için bunu seçin.
   - **Örnek verileri yükle** — sistemi tanımak için örnek ürünler (kategori, marka, stok),
     örnek bayi ve müşteri hesapları da yüklenir.
7. **Kur** düğmesine basın. Tablolar oluşturulur, veriler yüklenir, yönetici hesabınız açılır.

Kurulum bittikten sonra sihirbaz kapanır; `/kurulum` adresi artık açılmaz.

### Her kurulumda gelen temel veriler

Seçiminiz ne olursa olsun şunlar hazır gelir; yeniden girmeniz gerekmez:

- Türkiye, 81 il ve ilçeleri
- Para birimleri (TL, USD, EUR …) ve diller
- KDV oranları (%20, %10)
- Genel ayarlar ve mağaza ayarlarının varsayılanları
- Sistem rolleri ve hazır görev rolleri (Mağaza Yöneticisi, Satış Sorumlusu, Depo Sorumlusu …)

## Komutla kurulum (VPS)

Sunucuya SSH ile bağlanabiliyorsanız:

```bash
git clone https://github.com/bs-internet/bayiyazilimi.git
cd bayiyazilimi
composer install --no-dev --optimize-autoloader
npm ci && npm run build
php artisan bayi:setup
```

`bayi:setup` sihirbazla aynı soruları komut satırında sorar: veritabanı bilgileri, site adı,
yönetici hesabı ve başlangıç verileri.

## Kurulumdan sonra

### Zamanlanmış görevler (cron) {#cron}

Sunucunun cron ayarına şu satırı ekleyin (yolu kendi kurulumunuza göre değiştirin):

```
* * * * * cd /yol/bayiyazilimi && php artisan schedule:run >> /dev/null 2>&1
```

Bu satır şunları çalıştırır:

| Görev | Ne zaman |
|---|---|
| TCMB kurlarını güncelle | Hafta içi 09:05 ve 15:45 |
| Süresi dolan kart ödemelerini "başarısız" yap | 5 dakikada bir |
| Son kullanma tarihi geçen lotları satıştan çek | Her gece 00:10 |

### E-postalar

E-postalar arka planda (kuyrukta) gönderilir. VPS'te bir kuyruk çalıştırıcı (ör. supervisor
ile) tanımlayın:

```bash
php artisan queue:work
```

Kuyruk çalıştıramayan paylaşımlı hostingde `.env` dosyasında `QUEUE_CONNECTION=sync` yapın;
e-postalar anında gönderilir.

E-posta sunucusu bilgileri (`MAIL_*`) de `.env` dosyasına girilir.

### İlk giriş

Kurulumda belirlediğiniz e-posta ve şifreyle giriş yapın; yönetim paneli (`/panel`) açılır.
Sırada [ilk ayarlar](/baslangic/ilk-ayarlar) var.
