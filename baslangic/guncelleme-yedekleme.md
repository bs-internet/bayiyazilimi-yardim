# Güncelleme ve yedekleme

## Neyi yedeklemelisiniz? {#neler}

Bayi Yazılımı'nın verisi üç yerde durur. Üçü birlikte yedeklenmezse geri yükleme eksik kalır:

| Ne | Nerede | İçinde ne var |
|---|---|---|
| **Veritabanı** | MySQL / MariaDB | Ürünler, siparişler, cari hareketler, kullanıcılar, ayarlar … her şey |
| **Yüklenen dosyalar** | `storage/app` klasörü (`public` ve `private` alt klasörleri) | Logo, ürün görselleri, dekontlar, çek / senet görselleri; ayrıca kapatılan eklentilerin listesi |
| **`.env` dosyası** | Proje klasörü | Veritabanı ve e-posta bilgileri, **uygulama anahtarı** (`APP_KEY`) |

::: danger APP_KEY'i kaybetmeyin
`.env` dosyasındaki `APP_KEY`, iki adımlı doğrulama anahtarları gibi şifrelenmiş verileri açan
anahtardır. Yedekten geri dönerken eski anahtarı kullanmazsanız iki adımlı doğrulama açık
kullanıcılar giriş yapamaz. `.env` dosyasını yedekle birlikte, güvenli bir yerde saklayın.
:::

## Yedek alma {#yedek}

### Paylaşımlı hosting (cPanel)

- **cPanel › Backup** (Yedekleme) ekranından hem **ana klasör** hem **MySQL veritabanı**
  yedeğini indirin. Ya da:
- **phpMyAdmin** ile veritabanını seçip **Dışa aktar** (Export) → SQL; **File Manager** ile
  `storage/app` klasörünü ve `.env` dosyasını zipleyip indirin.

### VPS

```bash
# Veritabanı
mysqldump -u bayi -p --single-transaction bayiyazilimi > yedek-$(date +%F).sql

# Yüklenen dosyalar ve .env
tar czf dosyalar-$(date +%F).tar.gz -C /var/www/bayiyazilimi storage/app .env
```

Bu komutları her gece çalışan bir cron'a bağlayın ve yedekleri **başka bir sunucuya** taşıyın;
aynı sunucudaki yedek, sunucu kaybında işe yaramaz.

::: tip Ne zaman yedek alınır?
En azından: her güncellemeden önce, toplu ürün aktarımı (Excel) gibi büyük işlemlerden önce ve
düzenli olarak her gün.
:::

## Yedekten geri dönme {#geri-yukleme}

1. Proje dosyalarını (aynı sürüm) yerine koyun.
2. Veritabanını boş bir veritabanına geri yükleyin (phpMyAdmin › İçe aktar ya da
   `mysql -u bayi -p bayiyazilimi < yedek.sql`).
3. `.env` dosyasını ve `storage/app` klasörünü yedekten geri koyun.
4. Gerekirse `.env` içindeki veritabanı bilgilerini yeni sunucuya göre düzeltin.
5. SSH varsa:

```bash
php artisan storage:link
php artisan optimize:clear
```

`.env` yedeğiyle birlikte sistem **kurulu** olarak tanınır; kurulum sihirbazı açılmaz.

## Sistemi güncelleme {#guncelleme}

Güncellemeler yeni dosyaları ve gerekiyorsa veritabanı değişikliklerini getirir. Veritabanı
değişiklikleri **otomatik uygulanmaz**; aşağıdaki `migrate` komutunu çalıştırmanız gerekir.

::: warning Önce yedek
Her güncellemeden önce veritabanının ve dosyaların [yedeğini](#yedek) alın.
:::

### VPS (git ile kurulduysa)

```bash
cd /var/www/bayiyazilimi
php artisan down                       # ziyaretçilere bakım sayfası (isteğe bağlı)
git pull
composer install --no-dev --optimize-autoloader
npm ci && npm run build
php artisan migrate --force            # veritabanı değişikliklerini uygula
php artisan optimize:clear             # eski önbellekleri temizle
php artisan queue:restart              # kuyruk işleyicisi yeni kodu alsın
php artisan up
```

- `php artisan down` siteyi (paneli de) herkese kapatır; işiniz bitince mutlaka `php artisan up`
  çalıştırın. Yalnız bayilere / ziyaretçilere kapatmak isterseniz panelden **Bakım modu**'nu
  kullanabilirsiniz; bkz. [Genel ayarlar › Site Erişimi](/yonetim/genel-ayarlar#site-erisimi).
- [Hızlandırma](/baslangic/vps#hizlandirma) için `php artisan optimize`
  kullanıyorsanız en sonda yeniden çalıştırın.
- SSR kullanıyorsanız `npm run build:ssr` ile derleyip SSR sürecini yeniden başlatın.

### Paylaşımlı hosting

1. Yeni sürümün hazır paketini (`vendor` ve `public/build` dahil) edinin.
2. Proje klasörüne yükleyip üzerine açın. **`.env` dosyasının ve `storage` klasörünün üzerine
   yazmayın.**
3. Veritabanı değişikliklerini uygulamak için **cPanel › Terminal**'de proje klasörüne geçip:

```bash
php artisan migrate --force
php artisan optimize:clear
```

Hostinginizde Terminal yoksa bu adım için destek alın; yeni dosyalar yüklenip `migrate`
çalıştırılmazsa sistem hata verebilir.

### Eklentileri güncelleme

Bir eklentinin yeni sürümünü kurduktan sonra eklentinin kurulum adımını yeniden çalıştırın:

```bash
composer update bsinternet/<eklenti>
php artisan bayi:install <eklenti>
npm run build
```

Bu adım çalıştırılmadıysa **Ayarlar › Eklentiler** ekranında eklentinin yanında
**Güncelleme tamamlanmadı** uyarısı ve çalıştırılacak komut görünür. Bkz.
[Eklentiler](/yonetim/moduller).

::: warning Vitrin 0.2.0'a geçiş
İçerik sayfaları ve İletişim Bilgileri ekranı çekirdekten Vitrin eklentisine taşındı. Vitrin
kurulu bir sistemde çekirdeği güncelledikten sonra Vitrin'i de güncelleyin; 0.2.0 sürümü kendi
sayfa tablosunu oluşturur:

```bash
composer update bsinternet/vitrin
php artisan bayi:install vitrin
npm run build
```
:::

## Güncellemeden sonra kontrol listesi

- Panele giriş yapılabiliyor mu, başlangıç ekranı açılıyor mu?
- **Ayarlar › Eklentiler** ekranında uyarı var mı?
- Bir test e-postası gidiyor mu (ör. kendi hesabınız için **Şifremi unuttum**)?
- Sorun varsa `storage/logs` altındaki günlük dosyasına bakın ve
  [sorun giderme](/baslangic/sorun-giderme) sayfasını inceleyin.
