# Eklentiler

Bayi Yazılımı'nın çekirdeği ücretsiz ve açık kaynaklıdır; tek başına eksiksiz bir B2B sistemidir.
Ek özellikler **eklentilerle** gelir.

## Sunulan eklentiler

| Eklenti | Ne yapar |
|---|---|
| **Vitrin** (ücretli) | Herkese açık e-ticaret sitesi: katalog, ana sayfa düzenleyici, müşteri kaydı, kupon. Bkz. [Vitrin eklentisi](/vitrin/) |
| **PayTR** (ücretsiz) | PayTR ile kartla ödeme, taksit, iade, kartla cari tahsilat. Bkz. [Kartla ödeme](/cari/kartla-odeme) |
| **iyzico** (ücretsiz) | iyzico ile kartla ödeme, taksit, iade, kartla cari tahsilat |
| **Paraşüt** | Satışları Paraşüt'e satış faturası olarak aktarır; isteğe bağlı e-Fatura / e-Arşiv. Bkz. [Paraşüt](/muhasebe/parasut) |
| **BizimHesap** | Satışları BizimHesap'a satış faturası olarak aktarır. Bkz. [BizimHesap](/muhasebe/bizimhesap) |
| **Plasiyer** (ücretli) | Saha satış temsilcileri kendi mobil ekranından bayileri adına sipariş, teklif, tahsilat (yönetici onayıyla) ve ziyaret girer; hedef ve prim. Bkz. [Plasiyer eklentisi](/plasiyer/) |

Mağaza ön yüzünün tasarımını değiştiren **temalar** da eklenti gibi kurulur; bkz. [Temalar](/yonetim/temalar).

Güncel liste, fiyatlar ve destek paketleri: [bayiyazilimi.com](https://bayiyazilimi.com).

## Eklentiler ekranı {#eklentiler-ekrani}

**Ayarlar › Eklentiler** — "Kurulu eklentileri açıp kapatın. Kapatılan eklentinin menüsü,
sayfaları ve özellikleri devre dışı kalır; verileri silinmez."

Eklentiler, Ayarlar menüsünde kendi bölümüdür. Bölümün iç menüsünde iki sayfa vardır:

| İç menü | Ne yapılır |
|---|---|
| **Eklentiler** | Kurulu eklentileri açıp kapatma, kurulabilecek eklentileri inceleme (bu sayfa) |
| **Temalar** | Mağaza ön yüzünün temasını seçme. Bkz. [Temalar](/yonetim/temalar) |

Tema paketleri Eklentiler sayfasında değil, **Temalar** sayfasında listelenir.

### Kurulu eklentiler

Sunucuya kurulu her eklenti bir kart olarak listelenir. Hiç eklenti yoksa "Kurulu eklenti yok. Sistem
varsayılan B2B özellikleriyle çalışıyor." yazar.

| Kartta | Açıklama |
|---|---|
| Ad ve sürüm | Eklentinin adı ve kurulu sürüm numarası |
| **Kapalı** etiketi | Eklenti kapatılmışsa |
| **Kurulum tamamlanmadı** etiketi | Eklentinin dosyaları sunucuda ama kurulum adımı (veritabanı tabloları, yetkiler) hiç çalıştırılmamış. Altında çalıştırılacak komut yazar |
| **Güncelleme tamamlanmadı** etiketi | Eklentinin yeni sürümü yüklenmiş ama kurulum adımı yeni sürüm için çalıştırılmamış. Altında çalıştırılacak komut yazar |
| Açıklama | Eklentinin kısa tanımı |
| Kuruldu: *tarih* | İlk kurulum tarihi |
| Geliştiren | Eklentiyi geliştiren |
| Gerekli eklentiler | Bu eklentinin çalışması için açık olması gereken eklentiler |
| Kullanan eklentiler | Bu eklentiye ihtiyaç duyan eklentiler |
| Aç / kapat anahtarı | Eklentiyi açar ya da kapatır |

### Eklentiyi kapatmak / açmak {#eklentiyi-kapatmak-acmak}

1. Eklentinin anahtarını kapatın.
2. "*Eklenti* eklentisi kapatılsın mı?" penceresinde **Kapat**'a basın.

Kapatılan eklentinin **menüleri, ekranları ve özellikleri tamamen devre dışı** kalır. **Verileri
silinmez**; anahtarı yeniden açtığınızda kaldığı yerden devam eder.

Bağımlılık kuralları:

- Başka bir açık eklentinin ihtiyaç duyduğu eklenti kapatılamaz ("… eklentisini şu eklentiler kullanıyor:
  … Önce onları kapatın.").
- Bir eklenti, ihtiyaç duyduğu eklentiler kapalıyken açılamaz ("… eklentisi için önce şu eklentiler
  açılmalı: …").

Açma / kapatma [etkinlik kayıtlarına](/yonetim/etkinlik-kayitlari) yazılır.

### Tüm eklentiler

"Sisteminize kurabileceğiniz eklentiler." Liste her açılışta bayiyazilimi.com'dan güncel haliyle
alınır ("Eklenti listesi yükleniyor…"); sunucu internete çıkamazsa son alınan liste gösterilir.
Kurulu olanlar **Kurulu** rozetiyle işaretlidir. **İncele** eklentinin tanıtım sayfasını açar.

## Eklenti kurulumu

Edindiğiniz eklenti sunucunuza kurulur. Kurulumu kendiniz yapmak isterseniz (SSH gerekir):

**Ücretsiz eklentiler** (PayTR, iyzico) Packagist'te yayımlanır; doğrudan kurulur:

```bash
composer require bsinternet/<eklenti>
php artisan bayi:install <eklenti>
npm run build
```

**Ücretli eklentiler** (ör. Vitrin) özel depodadır. Satın aldığınızda size verilen depo erişimiyle,
önce depo adresini tanıtın, sonra aynı komutları çalıştırın:

```bash
composer config repositories.<eklenti> vcs https://github.com/bs-internet/bayiyazilimi-<eklenti>
composer require bsinternet/<eklenti>
php artisan bayi:install <eklenti>
npm run build
```

`bayi:install` eklentinin veritabanı tablolarını oluşturur, gerekli dosyaları yerleştirir ve
yetkilerini yetki listesine ekler. Yetkiler **hiçbir göreve atanmaz**: eklentinin ekranlarını
çalışanlarınıza açmak için **Ayarlar › Kullanıcılar › Görevler**'de ilgili görevlere atayın (bkz.
[Görevler ve yetkiler](/yonetim/roller-yetkiler#nasil-yapilir)). O zamana kadar ekranları yalnız
Super Admin görür.

Var olan dosyaların üzerine yazmak için `php artisan bayi:install <eklenti> --force`.

Eklenti güncellemesi: [Güncelleme ve yedekleme](/baslangic/guncelleme-yedekleme#guncelleme).
`php artisan bayi:update` kurulum adımı bekleyen bütün eklentiler için `bayi:install`'ı kendisi
çalıştırır; terminal yoksa Super Admin paneldeki **Güncellemeyi tamamla** düğmesini kullanabilir.

## Eklentiyi kaldırma {#eklentiyi-kaldirma}

Sıra önemlidir: **önce** `bayi:uninstall`, **sonra** `composer remove`.

```bash
php artisan bayi:uninstall <eklenti>
composer remove bsinternet/<eklenti>
npm run build
```

- Kaldırma **verileri silmez**; eklentinin tabloları ve kayıtları korunur. Verileri de silmek için
  `--purge-data` ekleyin (geri alınamaz; önce [yedek alın](/baslangic/guncelleme-yedekleme#yedek)).
- Eklentinin yetkileri görevlere atanmışsa etkilenecek görevler gösterilir ve onay sorulur
  (`--force` ile sorulmaz).
- Sizin değiştirdiğiniz eklenti dosyaları silinmez, rapor edilir.

Geçici olarak durdurmak için kaldırmak yerine Eklentiler ekranından **kapatmak** yeterlidir.

## Yetki

Eklentiler ekranının yetkileri (görüntüleme ve açma / kapatma) kurulumda **Admin** görevine atanır;
diğer görevlere **Görevler** ekranından eklenebilir.

Kurulumdan sonra eklenen bir eklentinin kendi ekranlarının yetkileri hiçbir göreve kendiliğinden
atanmaz; atanana kadar bu ekranları yalnız Super Admin açabilir. Bkz. [Görevler ve yetkiler](/yonetim/roller-yetkiler#yeni-modul).
