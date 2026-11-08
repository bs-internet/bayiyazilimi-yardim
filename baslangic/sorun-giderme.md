# Kurulumda sorun giderme

Kurulum sırasında ve hemen sonrasında en sık karşılaşılan sorunlar ve çözümleri.

::: tip Hatanın ayrıntısı nerede?
Kurulumdan sonra hata ayrıntıları ziyaretçilere gösterilmez. Gerçek hata mesajı proje
klasöründeki `storage/logs` altında, günün tarihini taşıyan dosyadadır (ör.
`laravel-2026-11-07.log`). Destek isterken bu dosyanın son satırlarını paylaşın.
:::

## Gereksinim ekranı geçilmiyor {#gereksinimler}

| Kırmızı satır | Çözüm |
|---|---|
| PHP 8.4 veya üstü | Barındırma panelinden (cPanel › MultiPHP Manager / Select PHP Version) alan adı için PHP 8.4 seçin. Parantez içinde yazan sürüm, sitenin gerçekten kullandığı sürümdür |
| PHP eklentisi: … | Aynı ekranın eklentiler bölümünden ilgili eklentiyi açın ya da hosting firmanızdan isteyin |
| Yazılabilir klasör: storage / bootstrap/cache | Klasör izinlerini düzeltin (genellikle `755`, bazı sunucularda `775`). VPS'te klasörlerin sahibi web sunucusu kullanıcısı olmalı |
| Yazılabilir dosya: .env | `.env` dosyası varsa yazılabilir olmalı; yoksa proje klasörünün kendisi yazılabilir olmalı |

Düzelttikten sonra **Tekrar kontrol et** düğmesine basın.

## Veritabanı bağlantı hataları {#veritabani}

Sihirbaz (ve `bayi:setup`) bağlanamazsa nedeni Türkçe bir uyarıyla gösterir:

| Uyarı | Anlamı | Çözüm |
|---|---|---|
| "Kullanıcı adı ya da şifre hatalı…" | Veritabanı kullanıcısının adı ya da şifresi yanlış | cPanel'de kullanıcı adının başında hesap adınız olduğunu unutmayın (`hesabim_kullanici`). Şifreyi yeniden belirleyip deneyin |
| "Bu kullanıcının "*ad*" veritabanına erişim izni yok." | Kullanıcı bu veritabanına ekli değil | **MySQL Databases › Add User To Database** ile kullanıcıyı veritabanına **ALL PRIVILEGES** ile ekleyin |
| "\"*ad*\" adında bir veritabanı bulunamadı…" | Veritabanı adı yanlış ya da veritabanı yok | Önce boş bir veritabanı oluşturun; adı tam (önekiyle) yazın |
| "Veritabanı sunucusuna ulaşılamadı…" | Sunucu adresi ya da port yanlış, veritabanı çalışmıyor ya da uzak sunucuya erişilemiyor | Sunucu alanında `localhost` ile `127.0.0.1`'i ayrı ayrı deneyin; portu `3306` bırakın. Uzak sunucuda hosting firmanızın verdiği adresi ve uzaktan erişim iznini kontrol edin |
| "Veritabanı kullanıcısının tablo oluşturma yetkisi yok…" | Kullanıcının yetkileri eksik | Kullanıcıya bu veritabanında **tüm yetkileri** (ALL PRIVILEGES) verin |
| "Veritabanı boş değil: içinde başka tablolar var…" | Veritabanında başka bir uygulamanın ya da eski bir denemenin tabloları var | Boş bir veritabanı seçin ya da içindeki tabloları silip yeniden deneyin |
| "Veritabanı işlemi başarısız oldu… (Ayrıntı: …)" | Yukarıdakilerin dışında bir hata | Parantez içindeki ayrıntıyla hosting firmanızdan destek isteyin |
| `.env dosyası yazılamadı` | Bağlantı kuruldu ama bilgiler kaydedilemedi | `.env` dosyasının (ya da proje klasörünün) yazma iznini düzeltin |

## Sihirbaz boş (beyaz) sayfa gösteriyor {#bos-sayfa}

Ön yüz dosyaları (`public/build` klasörü) yoktur. Hazır kurulum paketinde bu klasör bulunur;
kodu `git clone` ile indirdiyseniz proje klasöründe önce şunu çalıştırın, sonra sihirbazı
yeniden açın:

```bash
npm ci && npm run build
```

## Kurulum yarıda kaldı ya da hata verdi {#kurulum-hatasi}

- **"Kurulum tamamlanamadı"** uyarısının metnini okuyun; nedeni yukarıdaki
  [veritabanı uyarılarından](#veritabani) biriyse oradaki çözümü uygulayın. Çoğunlukla veritabanı
  kullanıcısının tablo oluşturma yetkisi yoktur (tüm yetkileri verin). Başka tabloları olan
  veritabanı zaten veritabanı adımında reddedilir.
- Sayfa uzun süre "Kuruluyor…" durumunda kalıp zaman aşımına uğradıysa: veritabanını boşaltın
  (tüm tabloları silin) ve sihirbazı yeniden açın. Sistem kurulu olarak işaretlenmediyse sihirbaz
  yeniden başlar.
- Eski bir denemeden kalma tablolar varsa önce temizleyin; kurulum **boş** veritabanı bekler.

## Site açılmıyor ya da dosya listesi görünüyor {#site-koku}

Alan adının kök klasörü (document root) `public` değildir. Kök klasörü projenin `public`
klasörü yapın: [Paylaşımlı hosting › Kök klasör](/baslangic/paylasimli-hosting#kok-klasor).

Ana sayfa açılıyor ama diğer adresler "404" veriyorsa `public/.htaccess` dosyası eksiktir ya da
sunucuda adres yeniden yazma (Apache `mod_rewrite`) kapalıdır.

## Kurulumdan sonra "500 Sunucu Hatası" {#hata-500}

Önce `storage/logs` altındaki günlük dosyasına bakın. Sık nedenler:

| Günlükte geçen | Çözüm |
|---|---|
| `Vite manifest not found` | `public/build` klasörü yüklenmemiş. Ön yüzü derleyin (`npm run build`) ya da hazır paketteki `public/build` klasörünü yükleyin |
| `Permission denied` (storage / bootstrap/cache) | Klasörlerin yazma iznini düzeltin |
| `No application encryption key` | `.env` dosyasında `APP_KEY` boş. SSH varsa `php artisan key:generate`; yoksa destek alın |
| `Class … not found` / `vendor/autoload.php` | `vendor` klasörü eksik ya da yarım yüklenmiş. Paketi yeniden yükleyin |
| `SQLSTATE` ile başlayan hatalar | Veritabanı bilgileri sonradan değişmiş olabilir; `.env` dosyasındaki `DB_*` satırlarını kontrol edin |

`.env` dosyasında değişiklik yaptıysanız ve panele girebiliyorsanız **Ayarlar › Ön Bellek
Yönetimi** ekranından **Tüm Önbellekleri Temizle**'yi kullanın; panele giremiyorsanız SSH'tan
`php artisan optimize:clear` çalıştırın.

## Görseller görünmüyor {#gorseller}

Logo, ürün görseli gibi yüklenen dosyalar `public/storage` bağlantısı üzerinden yayımlanır.
Kurulum bu bağlantıyı oluşturmaya çalışır; bazı hostinglerde sembolik bağlantıya izin
verilmediği için oluşmayabilir. SSH ya da cPanel Terminal varsa proje klasöründe:

```bash
php artisan storage:link
```

Terminal yoksa hosting firmanızdan `public/storage` → `storage/app/public` sembolik bağlantısını
oluşturmasını isteyin.

## E-postalar gitmiyor {#e-posta}

Sırayla kontrol edin:

1. **`MAIL_MAILER`** `.env` dosyasında `smtp` mi? Varsayılan `log` değeri e-posta göndermez,
   e-postaları günlük dosyasına yazar.
2. **SMTP bilgileri** doğru mu? Sunucu, port, kullanıcı adı ve şifre e-posta sağlayıcınızın
   verdiği değerlerle aynı olmalı. 465 portunda `MAIL_SCHEME=smtps` yazın.
3. **Kuyruk işleniyor mu?** `QUEUE_CONNECTION=database` ise e-postalar bir kuyruk işleyicisi
   çalışana kadar bekler. VPS'te [supervisor](/baslangic/vps#kuyruk) tanımlayın; paylaşımlı
   hostingde `QUEUE_CONNECTION=sync` yapın.
4. **Yapılandırma önbelleği** temizlendi mi? `.env` değişikliğinden sonra **Ön Bellek Yönetimi ›
   Yapılandırma Önbelleği**'ni temizleyin (VPS'te ayrıca `php artisan queue:restart`).
5. **Yönetici bildirimleri** gelmiyor ama müşteri e-postaları gidiyorsa: **Ayarlar ›
   Tanımlamalar › Satış Ayarları › Bildirimler › Bildirim e-postası** alanı boştur. Bkz.
   [E-posta ve bildirimler](/yonetim/e-posta-bildirimleri).
6. E-postalar gidiyor ama **spam'e düşüyorsa**: `MAIL_FROM_ADDRESS` SMTP hesabıyla aynı alan
   adında olmalı; alan adınız için SPF / DKIM kayıtlarını e-posta sağlayıcınızın tarifine göre
   ekleyin.

## Kurlar güncellenmiyor, kart ödemeleri "bekliyor"da kalıyor {#cron}

Cron tanımlı değildir ya da çalışmıyordur. [Cron](/baslangic/kurulum#cron) satırını ekleyin;
cron'daki PHP yolunun 8.4 sürümünü gösterdiğinden emin olun. Kurların TCMB'den çekilebilmesi
için sunucunun dışarıya (TCMB'nin sitesine) bağlanabilmesi gerekir.

## Giriş yapamıyorum {#giris}

Panelde **Şifremi unuttum** bağlantısı ile şifrenizi sıfırlayabilirsiniz (bağlantı 60 dakika
geçerlidir).


- **"Çok fazla deneme"**: aynı e-posta ve IP ile dakikada en çok 5 giriş denemesi yapılabilir.
  Bir dakika bekleyin.
- **Şifremi unuttum** e-postası gelmiyorsa yukarıdaki [e-posta](#e-posta) adımlarını kontrol
  edin.
- **"Hesabınız pasif durumda"** uyarısı: hesap pasif yapılmıştır; başka bir yönetici
  **Ayarlar › Kullanıcılar** ekranından aktifleştirmelidir.
- İki adımlı doğrulama kodunuza ulaşamıyorsanız kurtarma kodlarından birini kullanın; bkz.
  [Panel tanıtımı › İki adımlı doğrulama](/baslangic/panel-tanitimi#iki-adimli-dogrulama).

## /kurulum adresi "bulunamadı" diyor

Bu normaldir: sistem kurulduktan sonra sihirbaz kapanır. Giriş için `/login` adresini kullanın.
