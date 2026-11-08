# Ürünler

Ürünler **Mağaza › Katalog** altından yönetilir:

| Menü | Ne yapılır |
|---|---|
| **Ürünler** | Ürün listesi, arama ve süzgeçler. Bkz. [Ürün listesi](/satis/urun-listesi) |
| **Yeni Ürün** | Bu sayfada anlatılan ürün formu |
| **Kategoriler** | Bkz. [Kategoriler](/satis/kategoriler) |
| **Markalar** | Bkz. [Markalar](/satis/markalar) |
| **İçe / Dışa Aktar** | Excel ile toplu ekleme / güncelleme. Bkz. [Excel ile ürün aktarma](/satis/excel) |

Birimler **Ayarlar › Tanımlamalar › Birimler**'dedir. Bkz. [Birimler](/satis/birimler).

## Ürün formu

Yeni ürün için **Mağaza › Katalog › Yeni Ürün**, mevcut ürün için listede ürün adına tıklayın.
Form iki sütunludur: solda içerik kartları, sağda **Yayın** ve **Organizasyon** kartları.
Sayfanın üstünde (ve mevcut üründe altında da) **Kaydet** düğmesi vardır.

- Yeni ürün kaydedilince düzenleme ekranı açılır; **görseller ancak bu aşamada** eklenebilir.
- Hatalı alan varsa üstte "Ürün kaydedilemedi" uyarısı çıkar ve hatalı alanlar işaretlenir.
- Mevcut ürünün başlığında durum rozeti, stok kodu, toplam stok ve görsel sayısı görünür.
  Vitrin eklentisi kuruluysa ve ürün aktifse **Sitede gör** düğmesi ürünün sayfasını açar.

### Temel bilgiler

| Alan | Açıklama |
|---|---|
| **Ürün adı** * | En çok 255 karakter. |
| **URL (slug)** | Ürün sayfasının adresi. Boş bırakılırsa ürün adından üretilir; aynı adres başka üründe varsa sonuna sayı eklenir. Vitrin kuruluysa önünde sitenin ürün adresi öneki görünür. |
| **Kısa açıklama** | En çok 2000 karakter. Vitrin kuruluysa meta açıklama boşken arama motoru açıklaması olarak da kullanılır. |
| **Açıklama** | Biçimlendirilebilir metin (kalın, liste, bağlantı …). Uzunluk sınırı yoktur. |
| **Öne çıkan özellikler** | Her satır bir madde olarak ürün sayfasında listelenir. Boş satırlar atılır. Toplam en çok 5000 karakter. |
| **Uyarı notu** | Ürün sayfasında vurgulu gösterilen kısa not (ör. "Sipariş öncesi keşif zorunludur"). En çok 500 karakter. |

### Fiyatlandırma

Fiyatlar **KDV hariç** ve seçilen para biriminde girilir; müşteriye kendi para birimine
çevrilerek ve KDV eklenerek gösterilir (KDV dahil / hariç gösterim
[Satış Ayarları](/satis/satis-ayarlari)'ndan seçilir).

| Alan | Açıklama |
|---|---|
| **Satış fiyatı (KDV hariç)** * | 0 ya da büyük; 4 ondalığa kadar. Fiyatı 0 olan ürün sepete eklenemez, yalnız teklifle satılır. |
| **Karşılaştırma fiyatı** | Üstü çizili liste fiyatı. Satış fiyatından büyükse indirim yüzdesi gösterilir; küçük ya da eşitse indirim gösterilmez. |
| **Para birimi** * | Aktif para birimleri listelenir. Yeni üründe **Genel Ayarlar › Varsayılanlar**'daki para birimi gelir. Bkz. [Para birimleri](/yonetim/para-birimleri). |
| **KDV oranı** * | Vergi tanımlarındaki oranlar ile %0, %10, %20. Yeni üründe varsayılan vergi oranı gelir (tanımlı değilse %20). |

Kartın altındaki kutuda **KDV hariç**, **KDV dahil** tutar ve **İndirim** yüzdesi kaydetmeden
önce hesaplanıp gösterilir. Bayi ve bayi grubu indirimleri burada değil, müşteri tarafında
uygulanır; bkz. [Fiyat ve indirimler](/musteriler/fiyat-ve-indirimler).

### Stok

| Alan | Açıklama |
|---|---|
| **Stok takibi yap** | Varsayılan açık. Kapalıysa ürün stoktan bağımsız satılır, siparişte stok düşülmez. |
| **Stok yokken satışa izin ver (eksi stok)** | Açıksa stok bitse de sipariş alınır, stok eksiye düşer. Varsayılan kapalı. |
| **Kritik stok** | Toplam stok bu sayıya inince uyarı verilir. Boşsa **Stok Ayarları**'ndaki genel eşik geçerlidir (kutuda gri olarak görünür). 0–1.000.000. |
| **İzlenebilirlik** | *Takip yok*, *Lot / parti* ya da *Seri numarası*. Yalnız **Stok Ayarları**'nda izlenebilirlik açıksa görünür. Lot / seri takipli üründe giriş lot ya da seri no ile yapılır, siparişte son kullanma tarihi yakın olan önce çıkar. Kayıtlı lotu olan üründe değiştirirseniz mevcut kayıtlar korunur. |
| **Son kullanma tarihi (SKT) takibi** | İzlenebilirlik açıksa görünür. Girişte SKT zorunlu olur; süresi geçen lot satılmaz. |
| **Min. adet** * | Bir siparişte alınabilecek en az adet. En az 1, varsayılan 1. |
| **Maks. adet** | En çok adet. Boş = sınırsız. |
| **Birim** * | **Tanımlamalar › Birimler**'deki aktif birimler. Yeni üründe sıradaki ilk aktif birim gelir. |
| **Teslim süresi** * | Gün; 0–365, varsayılan 0. Vitrinde "… iş gününde kargoda" olarak gösterilir (0 ise gösterilmez). |

Kartta ürünün **satılabilir stoğu** ve depo depo miktarları görünür (satışa kapalı depolar
işaretlidir). Stok bu formdan değiştirilmez:

- Yeni ürün **0 stokla** oluşur; stok girişi **Mağaza › Stok** ekranlarından yapılır. Bkz.
  [Stok işlemleri](/stok/stok-islemleri) ve [Mal kabul](/stok/mal-kabul).
- **Stok ekranında yönet** bağlantısı ürünü Stok Durumu ekranında açar, **Hareketler**
  düğmesi ürünün stok hareketlerini gösterir.

Lot, seri no ve SKT için bkz. [Lot, seri no ve SKT](/stok/lot-seri-skt).

### Görseller

Yalnız kaydedilmiş üründe görünür.

- **Görsel yükle** ile seçin ya da dosyaları kutuya sürükleyip bırakın. Bir seferde en çok
  20 dosya; her biri en çok 8 MB, JPG / PNG / WebP gibi görsel dosyaları.
- **İlk görsel kapak görselidir** (listede ve vitrinde bu görünür). Sırayı sürükleyerek ya da
  **Öne al** / **Arkaya al** düğmeleriyle değiştirin.
- Görseli silmek için çöp kutusu simgesi; onay sorulur ve görsel kalıcı olarak silinir.

Excel aktarımında görsel bağlantıları verilip **Görsel bağlantılarını indir** seçilirse
görselsiz ürünlere görseller otomatik eklenir. Bkz. [Excel](/satis/excel#gorseller).

### Kargo

| Alan | Açıklama |
|---|---|
| **Desi** | Ürünün bir adedinin desisi; 0 ya da büyük, 2 ondalık. 0 bırakılırsa **Kargo Ayarları**'ndaki varsayılan ürün desisi kullanılır. |
| **Ücretsiz kargo** | İşaretliyse bu ürün için kargo ücreti alınmaz (desisi kargo hesabına katılmaz). |

Kargo ücretinin nasıl hesaplandığı için bkz. [Kargo](/satis/kargo#hesaplama).

### Arama motoru (Vitrin eklentisi)

Vitrin eklentisi kuruluysa formda bir **Arama motoru** kartı görünür. Üstteki kutu, ürünün arama
sonuçlarında nasıl görüneceğini önizler.

| Alan | Açıklama |
|---|---|
| **Meta başlık** | En çok 255 karakter. Boşsa ürün adı kullanılır. |
| **Meta açıklama** | En çok 500 karakter (sayaç gösterilir). Boşsa kısa açıklama kullanılır. |

### Arama

| Alan | Açıklama |
|---|---|
| **Arama kelimeleri** | Ürün aramasında (bayi paneli, hızlı sipariş, panel) eşleşmesi istenen ek kelimeler: eş anlamlılar, eski kodlar, yazım farkları. En çok 2000 karakter. |

Ürün araması ürün adı, stok kodu, model no, barkod ve bu kelimeler içinde yapılır.

### Yayın (sağ sütun)

| Alan | Açıklama |
|---|---|
| **Durum** * | *Aktif — vitrinde görünür* ya da *Pasif — gizli*. Yeni ürün aktif gelir. Pasif ürün müşterilere gösterilmez ve satılmaz. |
| **Kimler görsün?** | Yalnız Vitrin eklentisi kuruluysa. Bkz. [aşağıda](#kimler-gorsun). |
| **Satış biçimi** * | *Sepet (doğrudan satış)* ya da *Yalnızca teklif*. Bkz. [aşağıda](#satis-bicimi). Yeni üründe Sepet. |
| **Sıra** | Listelemede sıralama için sayı (küçük önce). Varsayılan 0. |

### Organizasyon (sağ sütun)

| Alan | Açıklama |
|---|---|
| **Kategori** | Kategoriler tam yoluyla listelenir (ör. *Temizlik › Deterjanlar*). Boş bırakılabilir. |
| **Marka** | Boş bırakılabilir (*— Marka yok —*). |
| **Stok kodu (SKU)** * | Ürünün tekil kodu, en çok 64 karakter. Excel aktarımında ürünler bu kodla eşleşir. Başka bir üründe (silinmiş ürünler dahil) kullanılan kod verilemez. |
| **Model no** | Üretici model numarası, en çok 128 karakter. Listede ve aramada görünür. |
| **Barkod** | EAN / barkod, en çok 64 karakter. Aramada ve sayımda kullanılır. |

## Satış biçimi {#satis-bicimi}

| Satış biçimi | Davranış |
|---|---|
| **Sepet (doğrudan satış)** | Fiyat gösterilir, ürün sepete eklenir ve doğrudan sipariş verilir. |
| **Yalnızca teklif** | Fiyat gösterilmez, sepete eklenemez; müşteri **Teklif Al** ile teklif listesine ekler ve size teklif talebi gelir. Bkz. [Teklifler](/satis/teklifler). |

- Satış biçimi Sepet olsa bile **fiyatı 0** olan ürün sepete eklenemez, teklifle istenir.
- Stoğu yetmeyen ürün (stok takibi açık ve eksi stok izni yoksa) sepete eklenemez ama teklif
  listesine eklenebilir.

## Kimler görsün? {#kimler-gorsun}

Ürün formundaki **Kimler görsün?** ayarı yalnız [Vitrin eklentisi](/vitrin/) kuruluysa görünür:

| Seçenek | Kim görür |
|---|---|
| **Vitrin** | Herkes: ziyaretçiler, müşteriler ve bayiler. Varsayılan. |
| **Bayi** | Yalnız giriş yapmış bayiler görür ve sipariş verir. Diğerleri ürünü listede, aramada, sepette ve ürün sayfasında göremez. |

Excel aktarımı bu alana dokunmaz; Excel'le eklenen yeni ürünler "Vitrin" olur. Ürün listesinde
bu ayara göre süzmek için **Kimler görsün** süzgeci vardır.

## Ürünü silme

Düzenleme ekranının altındaki **Sil** düğmesi onay sorar. Silinen ürün vitrinden ve listelerden
kaldırılır; **geçmiş sipariş ve teklif kayıtları korunur** (kalemlerdeki ad ve kod siparişte
saklıdır). Silinmiş ürünün stok kodu yeni ürüne verilemez; ancak bu kod
[Excel ile içe aktarımda](/satis/excel) dosyada geçerse silinmiş ürün geri getirilir.

::: tip Silmek yerine pasifleştirin
Bir ürünü geçici olarak satıştan kaldırmak için durumunu **Pasif** yapın; ürün listesindeki
**Aktif** anahtarıyla da tek tıkla açıp kapatabilirsiniz.
:::

## Nasıl yapılır?

### Yeni ürün eklemek

1. **Mağaza › Katalog › Yeni Ürün**'ü açın.
2. **Ürün adı**, **Stok kodu (SKU)** ve **Satış fiyatı**'nı girin; para birimi ve KDV'yi kontrol
   edin.
3. Kategori, marka, birim ve gerekiyorsa desi girin.
4. **Kaydet** deyin. Düzenleme ekranı açılır.
5. **Görseller** kartından görselleri yükleyin; ilk görsel kapak olur.
6. Stok girişini **Mağaza › Stok › Mal Kabul** ya da **Stok Durumu** ekranından yapın.

### Ürünü yalnız teklifle satmak

1. Ürünü açın, **Yayın** kartında **Satış biçimi**'ni *Yalnızca teklif* yapın.
2. **Kaydet** deyin. Fiyat müşteriye gösterilmez; talepler **Mağaza › Teklifler**'e düşer.

### Ürüne indirim göstermek

1. **Karşılaştırma fiyatı**'na eski (yüksek) fiyatı, **Satış fiyatı**'na yeni fiyatı girin.
2. Önizlemedeki **İndirim** yüzdesini kontrol edip kaydedin.

Süreli ya da koşullu indirimler için [Kampanyalar](/musteriler/kampanyalar)'ı kullanın.
