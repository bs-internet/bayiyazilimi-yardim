# Hepsiburada

**Hepsiburada** eklentisi firmanızın kendi Hepsiburada mağazasını sisteme bağlar. Menüde **Hepsiburada**
başlığı altında **Ürünler**, **Siparişler**, **Kategori Eşleştirme**, **İşlem Günlüğü** ve
**Hepsiburada Ayarları** görünür. Ortak işleyiş için bkz. [Pazaryeri eklentileri](/pazaryeri/).

## Ayarlar {#ayarlar}

**Hepsiburada › Hepsiburada Ayarları**. Satıcı kimliği ve servis anahtarı Hepsiburada satıcı panelinde
**Bilgilerim › Entegrasyon › Entegratör Bilgileri** sayfasındadır.

| Alan | Açıklama |
|---|---|
| **Entegrasyon açık** | Kapalıyken otomatik eşitleme çalışmaz |
| **Ortam** | **Canlı** ya da Hepsiburada'nın test ortamı (SIT) |
| **Satıcı kimliği (Merchant ID)** | Hepsiburada'nın verdiği satıcı kimliği |
| **Entegratör kullanıcı adı** | İsteklerde kimlik olarak gönderilir |
| **Servis anahtarı** | Şifreli saklanır, ekrana gelmez; boş bırakılırsa değişmez |
| **Fiyat farkı (%)** | Hepsiburada fiyatı: ürün fiyatı + KDV + bu yüzde |
| **Stok güvenlik payı** | Hepsiburada'ya gösterilen stok: mevcut stok eksi bu adet |
| **Garanti süresi (ay)** | Ürünle birlikte gönderilir |
| **Siparişleri içeri al** | Ödemesi tamamlanan siparişler sisteme sipariş olarak yazılır |
| **Siparişi hemen paketle** | İçeri alınan siparişin kalemleri Hepsiburada'da paketlenir |

## Kategori eşleştirme {#eslestirme}

**Kategori Eşleştirme** ekranında **Kategorileri güncelle** ile Hepsiburada'nın ürün açılabilen kategorileri
alınır. Her kategorinizi bir Hepsiburada kategorisine bağlayıp zorunlu özelliklerin varsayılan değerlerini
girin. Hepsiburada markayı adıyla aldığı için marka eşleştirmesi yoktur; ürünün markası olması yeter.

## Ürünler {#urunler}

**Hepsiburada › Ürünler** ekranı Trendyol'dakiyle aynı çalışır (bkz. [Trendyol › Ürünler](/pazaryeri/trendyol#urunler)).
Durumlar **Gönderilmedi**, **İnceleniyor**, **Satışta** ve **Hata**'dır.

- Ürünler Hepsiburada'ya 100'erli dosyalar halinde gönderilir. Ürün giriş sonucu (Hepsiburada ürün kodu ya
  da ret nedenleri) eşitlemede gelir.
- Stok kodu Hepsiburada'ya büyük harfle ve boşluksuz gider; fiyat ve stok bu kodla güncellenir.
- Ürün ayarlarından **varyant grubu**, ürüne özel **Hepsiburada fiyatı** ve özellik değerleri girilir.

## Siparişler {#siparisler}

**Siparişleri içeri al** açıkken:

- Ödemesi tamamlanmış kalemler sipariş numarasına göre birleştirilir ve **Hepsiburada** adlı bayi hesabına
  tek sipariş olarak yazılır. Stok düşer, sipariş **Hazırlanıyor** durumunda açılır.
- **Siparişi hemen paketle** açıksa kalemler Hepsiburada'da paketlenir; kargo barkodu siparişin
  **takip numarası** olur.
- Kargoya verilen paket **Kargoya Verildi**, teslim edilen **Tamamlandı** olur.
- Siparişin tamamı iptal edilirse sistemdeki sipariş de iptal edilir. Kısmi iptal yalnız işlem günlüğüne
  yazılır; gerekirse sipariş elle düzenlenir.
