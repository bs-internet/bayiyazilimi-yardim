# Raporlar

**Müşteriler › Raporlar** altında yedi rapor vardır:

| Rapor | Neyi gösterir |
|---|---|
| Satış | Ciro, sipariş sayısı, ortalama sepet |
| Ürün Satışları | Ürün, kategori ve marka bazında satışlar |
| Müşteri | Müşteri / bayi bazında alışlar |
| Stok | Stok miktarı ve değeri, kritik stoktakiler |
| Teklif | Teklif sayıları ve sonuçları |
| Kampanya | Kampanyaların kullanımı ve müşteriye kazandırdığı |
| İade | İade talepleri ve nedenleri |

## Rapor ekranı

Her raporda:

- **Özet kutuları** — önceki aynı uzunluktaki döneme göre yüzde değişimle,
- varsa **grafik**,
- **kırılım tabloları** ve sayfalı **ana tablo**.

**Filtreler:** dönem (hazır aralıklar ya da özel tarih), müşteri tipi (bireysel / bayi / misafir),
bayi grubu; rapora göre depo, kategori, marka, stok durumu.

## Hesaplama kuralları

- Tutarlar, siparişteki kurla **ana para birimine** çevrilir (varsayılan TL).
- **Ciroya** iptal edilen, ödemesi başarısız olan ve ödemesi iade edilen siparişler dahil
  edilmez. Başlangıç ekranındaki ciro da aynı tanımla hesaplanır.
- **Stok değeri** = stok × satış fiyatı (KDV hariç, güncel kurla).
- Kampanya raporunda "kazanç" = indirim + hediye + kargo kazancı. Silinmiş bir kampanya
  kayıttaki adıyla görünmeye devam eder.

## Excel

**Excel'e aktar**: 1. sayfa özet (kutular ve kırılımlar), 2. sayfa ana tablonun tüm satırları.

## Yetkiler

Her raporun görüntüleme ve Excel yetkisi ayrıdır. Bir kullanıcı yalnız yetkili olduğu raporları
görür. Bkz. [Kullanıcılar, roller ve yetkiler](/yonetim/roller-yetkiler).
