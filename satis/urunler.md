# Ürünler

Ürünler **Mağaza › Katalog** altından yönetilir: **Ürünler**, **Yeni Ürün**, **Kategoriler**,
**Markalar** ve **İçe / Dışa Aktar**.

## Ürün bilgileri

Bir ürünün başlıca alanları:

| Alan | Açıklama |
|---|---|
| Stok kodu | Ürünün tekil kodu; Excel aktarımında eşleşme bu kodla yapılır |
| Ad, marka, kategori | Kategoriler iki seviyelidir (ana › alt) |
| Model no, barkod | Barkod sayımda ve aramada kullanılır |
| Fiyat | **KDV hariç**, ürünün kendi para biriminde (TL, USD, EUR …) |
| İndirimsiz fiyat | Doluysa ve fiyattan yüksekse üstü çizili gösterilir (ürün indirimi) |
| KDV oranı | Yeni üründe varsayılan oran gelir |
| Birim | Adet, Paket, Koli … (**Ayarlar › Tanımlamalar › Birimler**) |
| En az / en çok sipariş | Bir siparişte alınabilecek adet sınırları |
| Desi | Kargo ücreti hesabında kullanılır |
| Kritik stok | Stok bu değere inince bildirim gelir; boşsa genel eşik geçerlidir |
| Durum | Aktif / pasif |

## Satış biçimi

Her ürünün bir satış biçimi vardır:

| Satış biçimi | Davranış |
|---|---|
| **Sepet** | Ürün sepete eklenir, doğrudan sipariş verilir |
| **Teklif** | Fiyat gösterilmez; ürün yalnız teklif listesine eklenir ve size teklif talebi gelir. Bkz. [Teklifler](/satis/teklifler) |

Stoğu olmayan ürün sepete eklenemez ama teklif listesine eklenebilir.

## Kimler görsün?

Ürün formundaki **Kimler görsün?** ayarı [Vitrin modülü](/vitrin/) kuruluysa anlam kazanır:

- **Vitrin** — herkes görür (ziyaretçi, müşteri ve bayiler).
- **Bayi** — yalnız giriş yapmış bayiler görür. Diğerleri bu ürünü listede, aramada, sepette
  ve ürün sayfasında göremez.

Excel aktarımı bu alana dokunmaz; yeni ürünler "Vitrin" olarak gelir.

## Stok takibi

Stok takibi açık ürünlerde stok, depolardaki miktarların toplamıdır; sipariş verilince düşer,
iptal ya da iadede geri eklenir. Stok takibi kapalı ürünler stoktan bağımsız satılır. Ayrıntılar
için [Stok ve depo](/stok/) bölümüne bakın.

İzlenebilirlik açıksa (Stok Ayarları) üründe **lot**, **seri numarası** ve **son kullanma tarihi**
takibi de seçilebilir. Bkz. [Lot, seri no ve SKT](/stok/lot-seri-skt).

## Görseller

Ürüne birden çok görsel yüklenebilir ve sıralanabilir. Excel aktarımında görsel adresleri
verilip "görsel bağlantılarını indir" seçilirse görseller otomatik indirilir.
