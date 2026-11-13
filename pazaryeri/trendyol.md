# Trendyol

**Trendyol** eklentisi firmanızın kendi Trendyol mağazasını sisteme bağlar. Menüde **Trendyol** başlığı
altında **Ürünler**, **Siparişler**, **Kategori Eşleştirme**, **Marka Eşleştirme**, **İşlem Günlüğü** ve
**Trendyol Ayarları** görünür. Ortak işleyiş için bkz. [Pazaryeri eklentileri](/pazaryeri/).

## Ayarlar {#ayarlar}

**Trendyol › Trendyol Ayarları**. Bağlantı bilgileri Trendyol satıcı panelinde **Hesap Bilgilerim ›
Entegrasyon Bilgileri** sayfasındadır.

| Alan | Açıklama |
|---|---|
| **Entegrasyon açık** | Kapalıyken otomatik eşitleme çalışmaz |
| **Ortam** | **Canlı** ya da Trendyol'un test ortamı |
| **Satıcı no**, **API key**, **API secret** | Secret şifreli saklanır, ekrana gelmez; boş bırakılırsa değişmez |
| **Fiyat farkı (%)** | Trendyol fiyatı: ürün fiyatı + KDV + bu yüzde (ana para birimine çevrilerek) |
| **Stok güvenlik payı** | Trendyol'a gösterilen stok: mevcut stok eksi bu adet |
| **Kargoya veriliş süresi (gün)** | Ürünle birlikte gönderilir |
| **Kargo firması kodu** | Boşsa mağazanızın Trendyol varsayılanı kullanılır |
| **Siparişleri içeri al** | Trendyol siparişleri sisteme sipariş olarak yazılır |

**Bağlantıyı test et** bilgilerin doğru olup olmadığını hemen gösterir. Ayarları kaydeden yönetici, otomatik
sipariş işlemlerinin kaydında görünen kullanıcı olur.

## Kategori ve marka eşleştirme {#eslestirme}

1. **Kategori Eşleştirme** ekranında önce **Kategorileri güncelle** ile Trendyol kategori ağacı alınır.
2. Her kategorinizi en alt seviyedeki bir Trendyol kategorisine bağlayın; kategorinin özellikleri ve
   seçilebilir değerleri ekrana gelir. Zorunlu özelliklerin varsayılan değerini girin.
3. **Marka Eşleştirme** ekranında markanızı Trendyol'da adıyla arayıp seçin. Trendyol'da olmayan marka için
   Trendyol satıcı panelinden marka başvurusu yapılır.

## Ürünler {#urunler}

**Trendyol › Ürünler**: ürünleri ad, stok kodu ya da barkodla arayıp listeye ekleyin. Listedeki ürünler
**Gönderilmedi**, **Onay bekliyor**, **Satışta** ve **Hata** durumlarındadır.

- **Gönder:** seçilen ürünler Trendyol'a gönderilir. Eksik bilgisi olan ürün gönderilmez, nedeni satırda yazar.
- **Ürün ayarları:** model kodu (varyant grubu), ürüne özel **Trendyol fiyatı** ve kategorinin varsayılanını
  ezen özellik değerleri.
- **Listeden çıkar:** yalnız gönderilmemiş ya da hatalı ürün çıkarılır. Satıştaki ürün Trendyol panelinden
  arşivlenir.

Silinen ya da pasif yapılan ürünün stoğu Trendyol'da sıfırlanır.

## Siparişler {#siparisler}

**Siparişleri içeri al** açıkken Trendyol siparişleri 15 dakikada bir alınır:

- Her sipariş paketi sistemde **Trendyol** adlı bayi hesabına sipariş olarak yazılır (hesap ilk siparişte
  kendiliğinden açılır). Trendyol'daki KDV dahil fiyat korunur, stok düşer, tutar bu hesabın carisine
  Trendyol'dan alacak olarak işlenir.
- Sipariş **Hazırlanıyor** durumunda açılır ve Trendyol'a "Hazırlanıyor" bildirilir.
- Trendyol'da kargoya verilen sipariş **Kargoya Verildi**, teslim edilen **Tamamlandı**, iptal edilen
  **İptal Edildi** olur.

**Trendyol › Siparişler** ekranı Trendyol sipariş numarasını, Trendyol durumunu ve sistemdeki siparişi
gösterir. Ürünü eşleşmediği için içeri alınamayan paketler **İçeri alınmadı** olarak işaretlenir;
**Yalnız alınamayanlar** ile süzülür.
