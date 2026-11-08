# Kurulum

Bayi Yazılımı VPS'e de paylaşımlı hostinge de kurulur. Kurulum iki yoldan yapılır; ikisi de
aynı adımları izler ve aynı sonucu verir:

| Yol | Kimin için |
|---|---|
| **Kurulum sihirbazı** (tarayıcıdan, `/kurulum`) | Paylaşımlı hosting, SSH erişimi olmayanlar |
| **`php artisan bayi:setup`** (komut satırından) | SSH ile bağlanabildiğiniz VPS / sunucu |

Sunucu türünüze göre adım adım anlatım:
[Paylaşımlı hostinge kurulum](/baslangic/paylasimli-hosting) ·
[VPS'e kurulum](/baslangic/vps). Bir sorunla karşılaşırsanız:
[Kurulumda sorun giderme](/baslangic/sorun-giderme).

## Gereksinimler

| | |
|---|---|
| PHP | **8.4** veya üstü |
| PHP eklentileri | pdo_mysql, mbstring, openssl, tokenizer, ctype, json, fileinfo, dom, xml, xmlreader, zip, iconv, curl |
| Veritabanı | MySQL 8+ ya da MariaDB 10.6+ (başka veritabanı desteklenmez) |
| Yazma izni | `storage` ve `bootstrap/cache` klasörleri ile `.env` dosyası |
| Site kökü | Alan adının kök klasörü (document root) projenin **`public`** klasörü olmalı |
| Zamanlanmış görev | Sunucuda cron (kurlar, kart ödemesi zaman aşımı, son kullanma tarihi kontrolü) |
| E-posta | Bir SMTP hesabı (bildirim e-postaları için) |

Sihirbaz PHP sürümünü, eklentileri ve yazma izinlerini kendisi kontrol eder. PHP
kütüphanelerinin (`vendor` klasörü) ve derlenmiş ön yüz dosyalarının (`public/build` klasörü)
yüklediğiniz dosyalar arasında hazır bulunması gerekir; bunları sihirbaz kontrol etmez.

::: warning Git ile indirdiyseniz önce ön yüzü derleyin
Hazır kurulum paketinde `public/build` klasörü bulunur. Kodu `git clone` ile indirdiyseniz bu
klasör yoktur: sihirbazı açmadan önce proje klasöründe `npm ci && npm run build` çalıştırın.
Derlemeden açılan sihirbaz **boş (beyaz) bir sayfa** gösterir.
:::

::: warning Site kökü public olmalı
Alan adınız projenin ana klasörünü değil **`public`** klasörünü göstermelidir. Aksi halde site
açılmaz ya da proje dosyaları dışarıdan erişilebilir hale gelir.
:::

## Başlamadan önce

Barındırma panelinizden (cPanel, Plesk, DirectAdmin …):

1. **Boş bir MySQL / MariaDB veritabanı** oluşturun. İçinde başka bir uygulamanın tabloları
   bulunan veritabanı kabul edilmez (bkz. aşağıda **Veritabanı** adımı).
2. Bir **veritabanı kullanıcısı** oluşturup bu veritabanına **tüm yetkilerle** ekleyin.
3. Veritabanı adını, kullanıcı adını ve şifreyi not edin; kurulumda sorulacak.

## Kurulum sihirbazı {#sihirbaz}

Sistem henüz kurulmamışsa sitenin hangi adresini açarsanız açın **kurulum sihirbazına**
(`/kurulum`) yönlendirilirsiniz. Sihirbaz üç adımdır: **Gereksinimler › Veritabanı › Site ve
yönetici**.

### 1. Gereksinimler

**Sunucu gereksinimleri** listesi gösterilir. Her satırın yanında yeşil tik (tamam) ya da kırmızı
çarpı (eksik) vardır; eksikler listenin en üstündedir.

| Kontrol | Ne anlama gelir |
|---|---|
| PHP 8.4 veya üstü | Parantez içinde sunucudaki PHP sürümü yazar |
| PHP eklentisi: … | Her zorunlu eklenti için ayrı satır |
| Yazılabilir klasör: storage | Yüklenen dosyalar, günlükler, önbellek |
| Yazılabilir klasör: bootstrap/cache | Sistemin hızlandırma dosyaları |
| Yazılabilir dosya: .env | Veritabanı ve site ayarlarının yazıldığı dosya. Dosya yoksa proje klasörünün yazılabilir olması yeterlidir; sihirbaz dosyayı kendisi oluşturur |

Eksik varsa kurulum ilerlemez. Hosting firmanızdan PHP eklentilerini açmasını ve klasör
izinlerini düzeltmesini isteyin, ardından **Tekrar kontrol et** düğmesine basın. Her şey tamamsa
sihirbaz kendiliğinden sonraki adıma geçer.

### 2. Veritabanı

| Alan | Açıklama |
|---|---|
| Sunucu | Veritabanı sunucusunun adresi. Varsayılan `127.0.0.1`; paylaşımlı hostingde genellikle `localhost` ya da `127.0.0.1`. En çok 255 karakter |
| Port | Varsayılan `3306`. 1 ile 65535 arasında bir sayı |
| Veritabanı adı | Oluşturduğunuz boş veritabanı. cPanel'de başında hesap adınız olur (ör. `hesabim_bayi`). En çok 64 karakter |
| Kullanıcı adı | Veritabanı kullanıcısı (cPanel'de ör. `hesabim_kullanici`) |
| Şifre | Veritabanı kullanıcısının şifresi. Şifresiz kullanıcı için boş bırakılabilir |

**Bağlan ve devam et** düğmesine bastığınızda bağlantı denenir:

- Bağlantı kurulursa bilgiler `.env` dosyasına yazılır ve üçüncü adıma geçilir.
- Kurulamazsa **Bağlantı kurulamadı** uyarısıyla nedeni Türkçe açıklanır (ör. "Kullanıcı adı ya
  da şifre hatalı…"). Uyarıların anlamı ve çözümü:
  [Veritabanı bağlantı hataları](/baslangic/sorun-giderme#veritabani).
- Veritabanında başka tablolar varsa (ör. başka bir uygulamanın kurulu olduğu veritabanı)
  "**Veritabanı boş değil: içinde başka tablolar var…**" uyarısı çıkar ve bu adımda durulur.
  Böylece kurulum tabloların bir kısmını oluşturup yarıda kalmaz. Boş bir veritabanı seçin ya
  da içindeki tabloları silin.

::: tip Bu adım atlanabilir
`.env` dosyasına veritabanı bilgilerini önceden elle yazdıysanız ve bağlantı çalışıyorsa sihirbaz
bu adımı atlar, doğrudan **Site ve yönetici** adımını açar. Farklı bir veritabanı kullanmak için
o adımdaki **Veritabanını değiştir** düğmesine basın.
:::

### 3. Site ve yönetici

| Alan | Açıklama |
|---|---|
| Firma / site adı | Zorunlu, en çok 100 karakter. Panelde, tarayıcı sekmesinde ve e-posta konularında görünür. Panelde ve e-postalarda görünen ad sonradan **Genel Ayarlar › Uygulama adı**'ndan değiştirilebilir |
| Yönetici adı | Zorunlu. İlk yönetici hesabının adı |
| Yönetici e-postası | Zorunlu, geçerli bir e-posta adresi. Panele bu adresle girersiniz |
| Şifre / Şifre (tekrar) | Zorunlu; iki alan aynı olmalı. En az 12 karakter; büyük ve küçük harf, rakam ve sembol içermeli (ör. `Firma-Bayi-2026`) |
| Başlangıç verileri | **Boş yükle** (varsayılan) ya da **Örnek verileri yükle** |

**Başlangıç verileri** seçenekleri:

- **Boş yükle** — yalnız temel veriler: ülke, il / ilçe, para birimleri, vergiler, roller ve
  ayarlar. **Gerçek kullanım için bunu seçin.**
- **Örnek verileri yükle** — temel verilere ek olarak örnek ürünler (kategori, marka, stok) ile
  örnek bayi hesabı ve siparişi ([Vitrin eklentisi](/vitrin/) kuruluysa örnek müşteri hesabı da).
  Sistemi denemek için.

Site adresi ayrıca sorulmaz: sihirbazı hangi adresten açtıysanız o adres kaydedilir. Bu yüzden
sihirbazı **sitenin gerçek adresinden** (ör. `https://bayi.firmaniz.com`) açın.

**Kurulumu başlat** düğmesine basın. "Kuruluyor…" yazısı görünür; tablolar oluşturulup veriler
yüklenirken **sayfayı kapatmayın** (birkaç dakika sürebilir).

Bir hata olursa **Kurulum tamamlanamadı** uyarısıyla nedeni gösterilir; girdiğiniz bilgiler
(şifre hariç) formda kalır.

### Kurulum tamamlandı

Son ekranda yönetici e-postanız ve **Sıradaki adımlar** listesi görünür:

- Logo, iletişim ve firma bilgilerini girin (**Ayarlar › Genel Ayarlar**).
- Ürünleri ekleyin ya da Excel ile içe aktarın.
- Sunucunuzda zamanlanmış görev (cron) tanımlayın.
- (Örnek verileri yüklediyseniz) Örnek hesaplar **rastgele şifreyle** oluşturulur; denemek için
  panelden şifrelerini belirleyin.

**Giriş yap** düğmesiyle giriş ekranına geçin.

### Kurulum sırasında arka planda yapılanlar

- Veritabanı tabloları oluşturulur, temel veriler (ve seçildiyse örnek veriler) yüklenir.
- Girdiğiniz hesap **Super Admin** görevli, e-postası onaylı, Türkçe ve İstanbul saat dilimli
  bir yönetici olarak açılır.
- Panelin bütün ekranlarının yetkileri yetki listesine eklenir ve hepsi **Admin** görevine
  atanır. Diğer hazır görevler yalnız kendi alanlarının yetkilerini alır. Bkz.
  [Görevler ve yetkiler](/yonetim/roller-yetkiler#hazir-gorevler).
- Yüklenen görsellerin sitede görünmesi için `public/storage` bağlantısı oluşturulur. Hosting
  buna izin vermezse kurulum yine tamamlanır; bkz. [Görseller görünmüyor](/baslangic/sorun-giderme#gorseller).
- `.env` dosyası canlı kullanıma alınır: site adı ve adresi yazılır, hata ayrıntıları
  ziyaretçilere gösterilmez, kayıt düzeyi `warning` olur (ayrıntılı hata ayıklama kayıtları tutulmaz), sistem **kurulu** olarak işaretlenir. Veritabanı bilgileri `.env` dosyasındaki yorum satırlarının (`# DB_HOST=…`) yerine yazılır.

Kurulumdan sonra sihirbaz kapanır: `/kurulum` adresi artık açılmaz (sayfa bulunamadı hatası
verir). Kurulu bir sistem sihirbazla yeniden kurulamaz.

## Komutla kurulum (bayi:setup) {#bayi-setup}

SSH ile bağlanabildiğiniz sunucuda:

```bash
git clone https://github.com/bs-internet/bayiyazilimi.git
cd bayiyazilimi
composer install --no-dev --optimize-autoloader
npm ci && npm run build
php artisan bayi:setup
```

`bayi:setup` önce gereksinimleri kontrol eder; eksik varsa listeler ve durur. Ardından sırayla
sorar:

| Soru | Açıklama |
|---|---|
| Veritabanı | `.env`'deki bağlantı çalışıyorsa "*kullanıcı@sunucu/veritabanı* kullanılsın mı?" diye sorar. Hayır derseniz ya da bağlantı yoksa: **Veritabanı sunucusu**, **Port**, **Veritabanı adı**, **Kullanıcı adı**, **Şifre**. Bağlanamazsa ya da veritabanı boş değilse nedeni sihirbazdaki gibi Türkçe yazıp yeniden sorar |
| Firma / site adı | Zorunlu |
| Site adresi | Varsayılan `.env`'deki adres. Sitenin gerçek adresini girin (ör. `https://bayi.firmaniz.com`) |
| Yönetici adı | Zorunlu |
| Yönetici e-postası | Geçerli bir e-posta olmalı |
| Yönetici şifresi | Web sihirbazıyla aynı kural: en az 12 karakter; büyük ve küçük harf, rakam ve sembol. Uymazsa eksik olan kural yazılır |
| Başlangıç verileri | **Boş yükle (yalnız temel veriler)** ya da **Örnek verileri yükle** (örnek ürünler ve bayi hesabı; vitrin kuruluysa müşteri hesabı da) |

Kurulum bitince giriş e-postası ile ön yüz derlemesi, cron ve kuyruk çalıştırıcı hatırlatmaları
yazdırılır. Sistem zaten kuruluysa komut "Sistem zaten kurulu." deyip hiçbir şey yapmaz.

## Her kurulumda gelen temel veriler

"Boş yükle" seçseniz de şunlar hazır gelir; yeniden girmeniz gerekmez:

| Veri | İçerik |
|---|---|
| Bölgeler | Türkiye, 81 il ve ilçeleri (hepsi aktif) |
| Diller | Türkçe (varsayılan), English |
| Para birimleri | Türk Lirası (varsayılan, ana para birimi), Amerikan Doları ve Euro (TCMB kaynaklı, yaklaşık başlangıç kuruyla) |
| Vergi oranları | KDV %20 (varsayılan), KDV %10, KDV %0 |
| Birimler | Adet, Paket, Kutu, Koli, Set, Takım, Rulo, Litre, Kg, Metre |
| Depo | Merkez Depo (varsayılan depo) |
| Sözleşmeler | Satış Sözleşmesi, Üyelik Sözleşmesi, KVKK Aydınlatma Metni, Garanti ve İade Şartları: **pasif taslaklar**, metinleri henüz girilmemiştir. Bkz. [Tanımlamalar › Sözleşmeler](/yonetim/tanimlamalar#sozlesmeler) |
| Kargo | Yurtiçi, Aras ve MNG Kargo; örnek desi fiyatlarıyla (kendi anlaşmanıza göre düzenleyin) |
| Ayarlar | Genel ayarların ve mağaza ayarlarının varsayılanları; zaman dilimi İstanbul |
| Görevler | Super Admin, Admin ve hazır görevler (Mağaza Yöneticisi, Satış Sorumlusu, Depo Sorumlusu, Katalog Sorumlusu). Bkz. [Görevler ve yetkiler](/yonetim/roller-yetkiler) |

Vitrin eklentisinin kendi verileri (örnek içerik sayfaları, **İçerik Editörü** görevi) eklenti
kurulurken eklenir; bkz. [Vitrin eklentisi](/vitrin/).

**Örnek verileri yükle** seçilirse ayrıca: örnek kategoriler, markalar ve stoklu ürünler,
"Standart Bayi" grubu (%10 indirim), örnek bayi hesabı (`user@user.com`), örnek bayinin adresi,
siparişi ve iade talebi. Örnek müşteri hesabı (`musteri@musteri.com`) yalnız vitrin eklentisi
kuruluysa oluşturulur.

## Kurulumdan sonra

### Zamanlanmış görevler (cron) {#cron}

Sunucunun cron ayarına **her dakika** çalışan şu satırı ekleyin (yolu kendi kurulumunuza göre
değiştirin):

```
* * * * * cd /yol/bayiyazilimi && php artisan schedule:run >> /dev/null 2>&1
```

Bu satır şu görevleri zamanı gelince çalıştırır:

| Görev | Ne zaman |
|---|---|
| TCMB kurlarını güncelle (Para Birimleri ekranında otomatik güncelleme açıksa) | Hafta içi 09:05 ve 15:45 |
| Yarım kalan kart ödemelerini "başarısız" yap, stoğu geri ekle | 5 dakikada bir |
| Son kullanma tarihi geçen lotları satılabilir stoktan düş | Her gece 00:10 |

Paylaşımlı hostingde cron ekleme: [Paylaşımlı hosting › Cron](/baslangic/paylasimli-hosting#cron).

### E-posta ve kuyruk {#e-posta}

Bildirim e-postaları varsayılan olarak **kuyrukta** (arka planda) gönderilir. Bunun için:

1. `.env` dosyasına e-posta sunucusu bilgilerini girin (`MAIL_*`). Kurulumdan çıkan dosyada
   e-postalar gönderilmez, yalnız günlük dosyasına yazılır.
2. Kuyruğu işleyecek bir süreç tanımlayın (VPS'te supervisor) ya da paylaşımlı hostingde
   e-postaları anında gönderecek şekilde ayarlayın.

Ayrıntılar: [VPS › E-posta](/baslangic/vps#e-posta) ve
[Paylaşımlı hosting › E-posta](/baslangic/paylasimli-hosting#e-posta). Sistemin hangi
e-postaları gönderdiği: [E-posta ve bildirimler](/yonetim/e-posta-bildirimleri).

### İlk giriş

Kurulumda belirlediğiniz e-posta ve şifreyle `/login` adresinden giriş yapın; yönetim paneli
(`/panel`) açılır. Panelin tanıtımı için [Panel tanıtımı](/baslangic/panel-tanitimi); sırada
[İlk ayarlar](/baslangic/ilk-ayarlar) var.
