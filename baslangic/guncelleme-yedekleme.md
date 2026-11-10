# Güncelleme ve yedekleme

## Neyi yedeklemelisiniz? {#neler}

Bayi Yazılımı'nın verisi üç yerde durur. Üçü birlikte yedeklenmezse geri yükleme eksik kalır:

| Ne | Nerede | İçinde ne var |
|---|---|---|
| **Veritabanı** | MySQL / MariaDB | Ürünler, siparişler, cari hareketler, kullanıcılar, ayarlar … her şey |
| **Yüklenen dosyalar** | `storage/app` klasörü (`public` ve `private` alt klasörleri) | Logo, ürün görselleri, dekontlar, çek / senet görselleri. Ayrıca kapatılan eklentilerin listesi |
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

`.env` yedeğiyle birlikte sistem **kurulu** olarak tanınır. Kurulum sihirbazı açılmaz.

## Sistemi güncelleme {#guncelleme}

Güncellemeler yeni dosyaları ve gerekiyorsa veritabanı değişikliklerini getirir. Güncelleme iki
adımdır:

1. **Yeni dosyaları yerine koymak**: `git pull` + `composer install` ya da hazır paketi yüklemek.
2. **Güncellemeyi tamamlamak**: veritabanı değişikliklerini uygulamak, eklentilerin kurulum
   adımlarını çalıştırmak, önbellekleri temizlemek. Bunu tek komut yapar: `php artisan bayi:update`.
   Terminal yoksa aynı işi paneldeki **Güncellemeyi tamamla** düğmesi yapar.

::: warning Önce yedek
Her güncellemeden önce veritabanının ve dosyaların [yedeğini](#yedek) alın. `bayi:update`
veritabanının yedeğini kendisi de alır (aşağıya bakın), ama yüklenen dosyaları ve `.env`'yi
yedeklemez.
:::

### bayi:update ne yapar? {#bayi-update}

Yeni dosyalar yerine konduktan sonra proje klasöründe:

```bash
php artisan bayi:update
```

Sırasıyla:

1. Siteyi **bakım moduna** alır (ziyaretçiler ve bayiler bakım sayfası görür).
2. **Veritabanı yedeği** alır: sunucuda `mysqldump` varsa SQL yedeği
   `storage/app/private/backups/` klasörüne yazılır (dosya adı tarih ve saat). `mysqldump`
   bulunamazsa güncelleme durmaz, "yedeği kendiniz alın" uyarısı verir.
3. Veritabanı değişikliklerini uygular (`migrate`).
4. Kurulum adımı bekleyen ya da yeni sürümü gelmiş açık eklentiler için `bayi:install` çalıştırır.
5. Önbellekleri temizler.
6. Kuyruk işleyicisine yeniden başlama sinyali gönderir (`queue:restart`). İşleyici yeni kodla
   devam eder.
7. Kurulu sürümü kaydeder ve siteyi yeniden açar. Bir adım hata verse de site bakımda kalmaz.

| Seçenek | Ne yapar |
|---|---|
| `--no-backup` | Veritabanı yedeği almaz (yedeği zaten kendiniz aldıysanız) |
| `--no-maintenance` | Siteyi bakıma almaz |
| `--build` | Ön yüzü de derler (`npm ci && npm run build`) |

`--build` vermezseniz komut sonunda ön yüz dosyaları değiştiyse derlemeniz hatırlatılır.

::: tip Yedek klasörü
`storage/app/private/backups/` altındaki yedekler zamanla birikir. Eskilerini silin ve önemli
olanları sunucunun dışına taşıyın. Aynı sunucudaki yedek sunucu kaybında işe yaramaz.
:::

### VPS (git ile kurulduysa)

```bash
cd /var/www/bayiyazilimi
git pull
composer install --no-dev --optimize-autoloader
php artisan bayi:update --build
```

- [Hızlandırma](/baslangic/vps#hizlandirma) için `php artisan optimize`
  kullanıyorsanız en sonda yeniden çalıştırın.
- SSR kullanıyorsanız `npm run build:ssr` ile derleyip SSR sürecini yeniden başlatın.

### Paylaşımlı hosting

1. Yeni sürümün hazır paketini (`vendor` ve `public/build` dahil, PayTR ve iyzico içinde)
   [GitHub › Sürümler](https://github.com/bs-internet/bayiyazilimi/releases) sayfasından indirin.
   Hazır paket yalnız PayTR ve iyzico'yu içerir: başka eklenti kurduysanız (Vitrin, Plasiyer …)
   paketi yüklemek o eklentilerin ekranlarını siler. Bu durumda güncellemeyi VPS'teki gibi komutla
   yapın ya da kurulumu yapan firmadan destek alın.
2. Proje klasörüne yükleyip üzerine açın. **`.env` dosyasının ve `storage` klasörünün üzerine
   yazmayın.**
3. Güncellemeyi tamamlayın:
   - **cPanel › Terminal** varsa proje klasörüne geçip `php artisan bayi:update` çalıştırın. Ya da
   - Terminal yoksa panele **Super Admin** olarak girin ve sarı uyarıdaki **Güncellemeyi tamamla**
     düğmesine basın (aşağıya bakın).

Yeni dosyalar yüklenip güncelleme tamamlanmazsa sistem hata verebilir.

### Paneldeki "Güncellemeyi tamamla" uyarısı {#panel-uyarisi}

Kod veritabanından yeniyse (yeni dosyalar yüklenmiş ama güncelleme tamamlanmamışsa) ya da bir
eklentinin kurulum adımı bekliyorsa, **Super Admin** panelin üstünde sarı bir uyarı görür:

> Sistem güncellemesi tamamlanmadı: veritabanı ya da eklenti kurulum adımları bekliyor.
> Güncellemeden önce yedek aldığınızdan emin olun.

**Güncellemeyi tamamla** düğmesi `bayi:update` ile aynı adımları çalıştırır (veritabanı yedeği,
veritabanı değişiklikleri, eklenti kurulum adımları, önbellek, kuyruk sinyali). Farkları: siteyi
bakıma almaz ve ön yüzü derlemez. Sonuç ekranın üstünde bildirilir ("Sistem … sürümüne
güncellendi."). İşlem kimin yaptığıyla birlikte [Etkinlik kayıtlarına](/yonetim/etkinlik-kayitlari)
yazılır.

Uyarı yalnız Super Admin'e görünür. Dosyalar yüklendikten sonra birkaç dakika içinde çıkar.

### Komutları tek tek çalıştırmak (alternatif) {#elle}

`bayi:update` yerine adımları kendiniz de çalıştırabilirsiniz:

```bash
php artisan down                       # ziyaretçilere bakım sayfası (isteğe bağlı)
npm ci && npm run build                # ön yüz (git ile kurulumda)
php artisan migrate --force            # veritabanı değişikliklerini uygula
php artisan bayi:install <eklenti>     # kurulum adımı bekleyen her eklenti için
php artisan optimize:clear             # eski önbellekleri temizle
php artisan queue:restart              # kuyruk işleyicisi yeni kodu alsın
php artisan up
```

- `php artisan down` siteyi (paneli de) herkese kapatır. İşiniz bitince mutlaka `php artisan up`
  çalıştırın. Yalnız bayilere / ziyaretçilere kapatmak isterseniz panelden **Bakım modu**'nu
  kullanabilirsiniz. Bkz. [Genel ayarlar › Site Erişimi](/yonetim/genel-ayarlar#site-erisimi).
- Bu yolla güncellediğinizde kurulu sürüm kaydedilmez. Paneldeki uyarı görünmeye devam ederse
  bir kez `php artisan bayi:update --no-backup` çalıştırın ya da **Güncellemeyi tamamla**'ya basın.

### Eklentileri güncelleme

Bir eklentinin yeni sürümünü kurduktan sonra kurulum adımını çalıştırın. En kolayı
`bayi:update`'tir. Kurulum adımı bekleyen bütün eklentileri kendisi bulur:

```bash
composer update bsinternet/<eklenti>
php artisan bayi:update --build
```

Tek bir eklenti için elle: `php artisan bayi:install <eklenti>` ve ardından `npm run build`.

Bu adım çalıştırılmadıysa **Ayarlar › Eklentiler** ekranında eklentinin yanında
**Güncelleme tamamlanmadı** uyarısı ve çalıştırılacak komut görünür; Super Admin ayrıca panelin
üstünde [Güncellemeyi tamamla](#panel-uyarisi) uyarısını görür. Bkz. [Eklentiler](/yonetim/moduller).

## Güncellemeden sonra kontrol listesi

- Panele giriş yapılabiliyor mu, başlangıç ekranı açılıyor mu?
- Panelin üstündeki sarı güncelleme uyarısı kalktı mı, **Ayarlar › Eklentiler** ekranında uyarı
  var mı?
- Bir test e-postası gidiyor mu (ör. kendi hesabınız için **Şifremi unuttum**)?
- Sorun varsa `storage/logs` altındaki günlük dosyasına bakın ve
  [sorun giderme](/baslangic/sorun-giderme) sayfasını inceleyin.
