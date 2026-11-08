# Fiyat ve indirimler

Bu sayfa bir ürünün fiyatının sepette ve siparişte hangi sırayla hesaplandığını anlatır:
ürün fiyatı → ürün indirimi ya da bayi indirimi → para birimi çevirisi → kampanya → KDV →
kargo → havale indirimi.

## Ürün fiyatı {#urun-fiyati}

Ürün formundaki **Fiyatlandırma** bölümünde girilir (bkz. [Ürünler](/satis/urunler)):

| Alan | Açıklama |
|---|---|
| Satış fiyatı (KDV hariç) | Ürünün KDV hariç satış fiyatı, ürünün kendi para biriminde. |
| Karşılaştırma fiyatı | Üstü çizili liste fiyatı. Satış fiyatından **yüksek** girilirse ürün "indirimli" sayılır. |
| Para birimi | Ürünün fiyat para birimi (ör. bir ürün TL, bir başkası EUR). |
| KDV oranı | Fiyata eklenecek KDV yüzdesi. |

Fiyatlar her gösterimde güncel ürün ve kur bilgisinden yeniden hesaplanır; sepet ve sipariş
aynı hesabı kullanır.

## İndirim türleri

| İndirim | Nerede tanımlanır | Nasıl uygulanır |
|---|---|---|
| **Ürün indirimi** | Ürünün karşılaştırma fiyatı | Satış fiyatı zaten indirimli fiyattır; karşılaştırma fiyatı üstü çizili gösterilir |
| **Bayi grubu indirimi** | **Bayiler › Bayi Grupları** — grubun tek indirim oranı | Satış fiyatından yüzde düşülür |
| **Bayiye özel indirim** | Müşteri detayı › **Bayi ayarları** | Girilirse grubun oranının yerine geçer |
| **Kampanya** | **Kampanyalar**. Bkz. [Kampanyalar](/musteriler/kampanyalar) | Sepette, koşullar sağlanınca |
| **Havale indirimi** | **Ayarlar › Tanımlamalar › Banka Hesapları**. Bkz. [Havale](/cari/havale#havale-indirimi) | Ödemede havale / EFT seçilince genel toplamdan |

### Ürün indirimi mi, bayi indirimi mi? {#oncelik}

Ürün indirimi ile bayi indirimi **birikmez**:

1. Üründe karşılaştırma fiyatı satış fiyatından yüksekse **ürün indirimi** geçerlidir; bayi
   indirimi bu ürüne **uygulanmaz**.
2. Değilse giriş yapmış bayinin **bayiye özel oranı**, o da yoksa **grubunun oranı** uygulanır.
3. Giriş yapmamış ziyaretçiye, vitrin müşterisine ve grubu / özel oranı olmayan bayiye bayi
   indirimi uygulanmaz.

Ekranda gösterilen indirim yüzdesi tam sayıya yuvarlanır; hesap ise kesin oranla yapılır.

**Örnek:** Satış fiyatı 100 TL, karşılaştırma fiyatı 125 TL olan ürün %20 indirimli görünür
(üstü çizili 125 TL). %15 indirimli Altın Bayi de bu ürünü **100 TL**'ye görür; ek %15 düşülmez.

Kampanyalar ve havale indirimi bunlardan **ayrıdır**: ürün / bayi indirimi uygulanmış fiyatın
üzerine sepette ayrıca uygulanır.

## Para birimi çevirisi {#para-birimi}

Fiyat, ürünün para biriminden sepetin (seçili) para birimine **güncel kurla** çevrilir. Çeviri
TL kurları üzerinden yapılır: tutar × ürün para biriminin kuru ÷ hedef para biriminin kuru.
Kurlar **Ayarlar › Tanımlamalar › Para Birimleri** ekranından yönetilir. Bkz.
[Para birimleri](/yonetim/para-birimleri).

Sipariş verildiği anda kullanılan kur siparişe kaydedilir. Sonradan kur değişse de siparişin
tutarı ve cariye yazılan karşılığı değişmez (bkz. [Cari hesap](/cari/#para-birimi)).

## Hesaplama sırası {#hesaplama-sirasi}

| Adım | Ne olur | Yuvarlama |
|---|---|---|
| 1 | Ürünün KDV hariç satış fiyatı alınır | — |
| 2 | Ürün indirimi yoksa bayi indirimi düşülür | birim fiyat 4 hane |
| 3 | Sepet para birimine çevrilir | birim fiyat 4 hane |
| 4 | Satır tutarı = birim fiyat × adet | 2 hane |
| 5 | Kampanya indirimi satırdan düşülür (KDV hariç) | 2 hane |
| 6 | KDV, indirim düşülmüş satır tutarı üzerinden hesaplanır | 2 hane |
| 7 | Kargo ücreti eklenir (ücretsiz kargo eşiği KDV dahil sepet tutarına göre) | 2 hane |
| 8 | Ödemede havale / EFT seçildiyse havale indirimi **genel toplamdan** (KDV ve kargo dahil) düşülür | 2 hane |

Ara hesaplar kesin yapılır, yalnız sonuç yuvarlanır (yarım kuruş yukarı).

### Örnek hesap {#ornek}

Varsayımlar:

- Ürün: satış fiyatı **100,00 EUR** (KDV hariç), karşılaştırma fiyatı yok, KDV **%20**.
- Kur: 1 EUR = **35,00 TL**. Sepet TL.
- Bayi: **Altın Bayi** grubunda, grup indirimi **%15**, bayiye özel oran yok.
- Bayi **10 adet** alıyor.
- Aktif kampanya: tüm ürünlerde **%5 yüzde indirim**.
- Sepet, ücretsiz kargo eşiğinin üstünde (kargo 0).
- Havale indirimi **%2**; bayi havale / EFT ile ödüyor.

| Adım | Hesap | Sonuç |
|---|---|---|
| Bayi indirimi | 100,00 EUR × (100 − 15) % | 85,0000 EUR |
| TL'ye çeviri | 85,0000 × 35,00 | 2.975,0000 TL (birim, KDV hariç) |
| Satır tutarı | 2.975,0000 × 10 | 29.750,00 TL |
| Kampanya indirimi | 29.750,00 × %5 | − 1.487,50 TL |
| Ara toplam (KDV hariç) | 29.750,00 − 1.487,50 | 28.262,50 TL |
| KDV | 28.262,50 × %20 | 5.652,50 TL |
| Kargo | eşik aşıldı | 0,00 TL |
| Toplam | 28.262,50 + 5.652,50 + 0 | 33.915,00 TL |
| Havale indirimi (%2) | 33.915,00 × %2 | − 678,30 TL |
| **Genel toplam** | | **33.236,70 TL** |

Siparişte "Kampanya indirimi" ve "Havale indirimi (%2)" ayrı satırlar olarak görünür.

::: tip Kampanya koşullarındaki sepet tutarı
"Sepet tutarı" koşulları ve sepet tutarına göre kademeli indirim, **kampanya öncesi KDV dahil**
sepet tutarına bakar (örnekte 29.750,00 × 1,20 = 35.700,00 TL).
:::

## Fiyat gösterimi (KDV dahil / hariç) {#gosterim}

**Ayarlar › Tanımlamalar › Satış Ayarları** › **Fiyat gösterimi** bölümünde bayi için bir ayar
vardır; [Vitrin eklentisi](/vitrin/) kuruluysa ziyaretçi / müşteri için ikinci bir ayar çıkar:

| Alan | Varsayılan | Açıklama |
|---|---|---|
| Bayi | **KDV hariç (girildiği gibi)** | Giriş yapmış bayi için ürün fiyatları |
| Ziyaretçi / müşteri | **KDV dahil** | Yalnız vitrin kuruluysa: giriş yapmamış ziyaretçi ve vitrin müşterisi için ürün fiyatları |

Bu ayar yalnız ürün listesi ve ürün kartındaki fiyatın nasıl **gösterileceğini** belirler;
hesabı değiştirmez. Sepet ve ödeme ekranında ara toplam (KDV hariç), KDV ve genel toplam her
zaman ayrı gösterilir.

## Teklif ürünleri ve tekliften sipariş

Satış biçimi **Teklif** olan ürünlerin fiyatı gösterilmez; fiyat teklifte belirlenir. Tekliften
oluşan siparişte teklifteki fiyatlar ve para birimi kullanılır; **kampanya uygulanmaz**, havale
ile ödenirse havale indirimi uygulanır. Bkz. [Teklifler](/satis/teklifler).
