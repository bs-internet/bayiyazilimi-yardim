# Eklentiler

Bayi Yazılımı'nın çekirdeği ücretsiz ve açık kaynaklıdır. Tek başına eksiksiz bir B2B sistemidir.
Ek özellikler **eklentilerle** gelir.

## Sunulan eklentiler

| Eklenti | Ne yapar |
|---|---|
| **Vitrin** (ücretli) | Herkese açık e-ticaret sitesi: katalog, ana sayfa düzenleyici, müşteri kaydı, kupon. Bkz. [Vitrin eklentisi](/vitrin/) |
| **PayTR** (ücretsiz) | PayTR ile kartla ödeme, taksit, iade, kartla cari tahsilat. Bkz. [Kartla ödeme](/cari/kartla-odeme) |
| **iyzico** (ücretsiz) | iyzico ile kartla ödeme, taksit, iade, kartla cari tahsilat |
| **Paraşüt** | Satışları Paraşüt'e satış faturası olarak aktarır. İsteğe bağlı e-Fatura / e-Arşiv. Bkz. [Paraşüt](/muhasebe/parasut) |
| **BizimHesap** | Satışları BizimHesap'a satış faturası olarak aktarır. Bkz. [BizimHesap](/muhasebe/bizimhesap) |
| **Plasiyer** (ücretli) | Saha satış temsilcileri kendi mobil ekranından bayileri adına sipariş, teklif, tahsilat (yönetici onayıyla) ve ziyaret girer. Hedef ve prim. Bkz. [Plasiyer eklentisi](/plasiyer/) |

Mağaza ön yüzünün tasarımını değiştiren **temalar** da eklenti gibi kurulur. Bkz. [Temalar](/yonetim/temalar).

Güncel liste, fiyatlar ve destek paketleri: [bayiyazilimi.com](https://bayiyazilimi.com).

## Eklentiler ekranı {#eklentiler-ekrani}

**Ayarlar › Eklentiler**: "Kurulu eklentileri açıp kapatın. Kapatılan eklentinin menüsü,
sayfaları ve özellikleri devre dışı kalır. Verileri silinmez."

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
silinmez**. Anahtarı yeniden açtığınızda kaldığı yerden devam eder.

Bağımlılık kuralları:

- Başka bir açık eklentinin ihtiyaç duyduğu eklenti kapatılamaz ("… eklentisini şu eklentiler kullanıyor:
  … Önce onları kapatın.").
- Bir eklenti, ihtiyaç duyduğu eklentiler kapalıyken açılamaz ("… eklentisi için önce şu eklentiler
  açılmalı: …").

Açma / kapatma [etkinlik kayıtlarına](/yonetim/etkinlik-kayitlari) yazılır.

### Tüm eklentiler

"Sisteminize kurabileceğiniz eklentiler." Liste her açılışta bayiyazilimi.com'dan güncel haliyle
alınır ("Eklenti listesi yükleniyor…"). Sunucu internete çıkamazsa son alınan liste gösterilir.
Kurulu olanlar **Kurulu** rozetiyle işaretlidir. **İncele** eklentinin tanıtım sayfasını açar.

## Eklenti kurulumu {#eklenti-kurulumu}

Edindiğiniz eklenti sunucunuza kurulur. Kurulum sunucuda komut çalıştırmayı gerektirdiği için
eklentili kullanımda **en az 2 işlemci, 2 GB RAM ve 20 GB disk alanı** olan bir VPS öneririz.
Paylaşımlı hostingde hazır kurulum paketindeki **PayTR** ve **iyzico** kurulu gelir. Kurulumu
kendiniz yapacaksanız teknik adımlar [VPS'e kurulum](/baslangic/vps#eklenti) sayfasındadır.

Kurulan eklentinin yetkileri yetki listesine eklenir ama **hiçbir göreve atanmaz**. O zamana kadar
eklentinin ekranlarını yalnız Super Admin görür. Çalışanlarınıza açmak için **Ayarlar ›
Kullanıcılar › Görevler**'de yetkileri ilgili görevlere atayın (bkz.
[Görevler ve yetkiler](/yonetim/roller-yetkiler#nasil-yapilir)).

Eklentiler sistemle birlikte güncellenir: bkz.
[Güncelleme ve yedekleme](/baslangic/guncelleme-yedekleme#guncelleme).

## Eklentiyi kaldırma {#eklentiyi-kaldirma}

Bir eklentiyi geçici olarak durdurmak için kaldırmanız gerekmez. Eklentiler ekranından
**kapatmak** yeterlidir, verileri korunur.

Tümden kaldırmada da eklentinin tabloları ve kayıtları silinmez. Verilerin de silinmesi ayrıca
istenmelidir ve geri alınamaz, öncesinde [yedek alın](/baslangic/guncelleme-yedekleme#yedek).
Teknik adımlar: [VPS'e kurulum](/baslangic/vps#eklenti).

## Yetki

Eklentiler ekranının yetkileri (görüntüleme ve açma / kapatma) kurulumda **Admin** görevine atanır;
diğer görevlere **Görevler** ekranından eklenebilir.

Kurulumdan sonra eklenen bir eklentinin kendi ekranlarının yetkileri hiçbir göreve kendiliğinden
atanmaz. Atanana kadar bu ekranları yalnız Super Admin açabilir. Bkz. [Görevler ve yetkiler](/yonetim/roller-yetkiler#yeni-modul).
