# Toplama listesi

Depo personelinin siparişleri raftan toplaması için yazdırılabilir liste. Birden çok siparişin
ürünlerini depo ve raf sırasına dizer. Personel depoyu bir kez dolaşarak hepsini toplar.

Toplama listesini görmek için **Toplama listesi oluştur / yazdır** yetkisi gerekir.

## Açma

İki yol vardır:

1. **Belirli siparişler:** **Mağaza › Siparişler** listesinde siparişleri işaretleyin. Başlıktaki
   düğme **Toplama listesi (n)** olur, basın. Seçilen siparişler durumlarına bakılmadan alınır.
2. **Tüm hazırlananlar:** **Mağaza › Stok › Toplama Listesi** menüsü ya da Siparişler'de hiçbir
   sipariş seçmeden **Toplama listesi** düğmesi. **Hazırlanıyor** durumundaki siparişler alınır.

Her iki durumda da siparişler **en eskiden başlayarak** alınır ve liste **en fazla 100
siparişle** sınırlıdır. Daha fazlası varsa üstte "Liste en eski 100 siparişle sınırlandı."
uyarısı çıkar.

Başlıkta sipariş sayısı, satır sayısı, toplam adet ve listenin oluşturulma tarihi-saati yazar.
Sağ üstte **Siparişler** (listeye dönüş), seçimle açıldıysa **Tüm hazırlananlar** ve **Yazdır**
düğmeleri vardır.

## Satırlar nasıl oluşur? {#satirlar}

- Satırlar, siparişlerin **stoktan düştüğü** depo, lokasyon ve lot bilgisinden gelir: yani
  sipariş verilirken sistemin ayırdığı yerden. Siparişte
  [lot değiştirdiyseniz](/stok/lot-seri-skt#siparis-lot-degistir) yeni lot görünür. İptal ve
  iade edilen adetler düşülür.
- **Aynı yerdeki aynı ürün** (aynı depo, lokasyon ve lot) **tek satırda** toplanır. **Siparişler**
  sütununda hangi siparişe kaç adet gideceği yazar (ör. `S2611070003 ×2`, `S2611070007 ×1`).
- Aynı ürün iki rafa ya da iki lota bölünmüşse iki ayrı satır olur.

## Bölümler

### Depo bölümleri

Her depo ayrı bir bölümdür (başlıkta `Depo Adı (KOD)`, satır ve adet sayısı). Depolar **Sıra**
numarasına göre dizilir.

| Sütun | Açıklama |
|---|---|
| (kutu) | Toplanan satırı kâğıt üzerinde işaretlemek için boş kutu |
| Lokasyon | Raf kodu. Yeri belirsiz stokta **Atanmamış** |
| Ürün | Ürün adı, SKU ve barkod |
| Lot / Seri | Lot ya da seri no ve SKT. Takipsiz üründe "—" |
| Adet | Toplanacak toplam adet ve birim |
| Siparişler | Sipariş numarası × adet |

Satırlar depo içinde **toplama sırasına** dizilir: lokasyon sırası (koridor → raf → göz,
Atanmamış en sonda), aynı lokasyonda ürün adı, aynı üründe SKT'si yakın lot önce. Bkz.
[Lokasyon sırası](/stok/#lokasyon-sirasi).

**"Stok yetmeden düşüldü"** etiketi: o lokasyon / lotta stok şu an **eksi**dir. Sipariş stok
yetmeden (ön sipariş) düşülmüştür ve ürün rafta olmayabilir. Mal gelene kadar bu satırı
toplayamayabilirsiniz.

### Lokasyonsuz

Stoktan düşülmeyen kalemler: **stok takibi kapalı** ürünler ve stoğu düşülmemiş siparişlerdeki
kalemler. Sütunlar: Ürün, Adet, Siparişler. Bu ürünlerin yeri sistemde yoktur.

### Siparişler özeti

Listenin sonunda, yazdırırken **yeni sayfada**, siparişlerin özeti: Sipariş, Müşteri, Şehir
(teslimat adresi), Durum, Adet. Toplanan ürünleri siparişlere ayırırken kullanılır.

## Yazdırma

**Yazdır** düğmesi tarayıcının yazdırma penceresini açar. Menüler ve düğmeler basılmaz. Satırlar
sayfa sonunda bölünmez. Liste boşsa düğme kapalıdır.

::: tip
Liste, açtığınız andaki durumu gösterir. Yazdırdıktan sonra yeni sipariş geldiyse ya da bir
siparişte lot değiştirdiyseniz sayfayı yenileyip yeniden yazdırın.
:::

## Liste boşsa

- Seçimle açtıysanız: "Seçilen siparişlerde toplanacak kalem bulunmadı."
- Menüden açtıysanız: "**Hazırlanıyor** durumunda sipariş yok." Ödemesi bekleyen siparişler
  listeye girmez. Önce durumlarının Hazırlanıyor olması gerekir. Bkz.
  [Siparişler](/satis/siparisler).

Toplama sonrası paketleme ve kargo adımları için bkz.
[Depo iş akışları › Siparişi topla ve kargola](/stok/is-akislari#topla-kargola).
