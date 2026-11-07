# Vitrin nedir?

::: info Ek modül
Vitrin, ayrıca satılan bir modüldür. Bilgi ve satın alma için
[bayiyazilimi.com](https://bayiyazilimi.com).
:::

Bayi Yazılımı kendi başına bir **B2B** sistemidir: yalnız sizin eklediğiniz bayiler giriş yapıp
bayi panelinden sipariş verir. **Vitrin modülü** buna herkese açık bir **e-ticaret sitesi**
ekler: sitenizin ana adresi (`/`) mağazanın ana sayfası olur, ziyaretçiler ürünleri gezer,
üye olur ya da üye olmadan (misafir olarak) sipariş verir.

## Vitrinle neler gelir?

| Parça | Ne işe yarar | Ayrıntı |
|---|---|---|
| Herkese açık katalog | Kategori, marka, arama ve ürün sayfaları; filtreler ve sıralama | [Müşteri deneyimi](/vitrin/musteri-deneyimi) |
| Sepet ve ödeme | Üye ve misafir alışverişi, kargo ve ödeme seçimi, sözleşme onayları | [Müşteri deneyimi](/vitrin/musteri-deneyimi#odeme) |
| Teklif listesi | Fiyatsız ya da toplu alım ürünleri için teklif isteme | [Müşteri deneyimi](/vitrin/musteri-deneyimi#teklif-listesi) |
| Müşteri kaydı ve Hesabım | Siparişler, teklifler, adresler, ödemeler, iadeler | [Müşteri hesabı](/vitrin/musteri-hesabi) |
| Ana sayfa düzenleyici ve slider | Ana sayfayı bölüm bölüm kurma | [Ana sayfa ve slider](/vitrin/ana-sayfa) |
| Menüler, sayfalar, üst ve alt bilgi | Üst menü, kategori menüsü, kurumsal ve yasal sayfalar, duyuru bandı | [İçerik yönetimi](/vitrin/icerik-yonetimi) |
| Site erişimi, çerezler, ETBİS, kupon kodu, arama motoru | Vitrinin kimlere açık olduğu ve yasal gereklilikler | [Vitrin ayarları](/vitrin/ayarlar) |
| Ek kampanya koşulları | **Müşteri tipi**, **İlk sipariş**, **Kupon kodu** | [Kampanyalar](/musteriler/kampanyalar) |
| Ürün görünürlüğü | Ürün formunda **Kimler görsün?** (Vitrin / Bayi) | [Ürünler](/satis/urunler#kimler-gorsun) |

## Kim neyi görür? {#kim-neyi-gorur}

| Kişi | Vitrinde | Hesap alanı |
|---|---|---|
| **Ziyaretçi** (giriş yapmamış) | Yalnız "Vitrin" ürünlerini görür; sepete ekler, misafir olarak sipariş verir, teklif ister | Yok. Sipariş ve teklif sayfalarını e-postadaki bağlantıyla açar |
| **Müşteri** (vitrinden kayıt olmuş) | Ziyaretçiyle aynı ürünler; kayıtlı adreslerini ödeme ekranında seçer | Vitrin tasarımındaki **Hesabım** (`/hesabim`) |
| **Bayi** | "Vitrin" ürünlerine ek olarak "Bayi" ürünlerini de görür; kendi fiyatlarıyla (grup / bayi indirimi) | **Bayi paneli** (`/app`) |
| **Yönetici** | Vitrini her durumda görür (bakım modunda da) | Yönetim paneli (`/panel`) |

- Vitrinden kayıt olan ya da panelden üye olarak eklenen kişinin hesabı **müşteri** hesabıdır.
  Bayi hesabı panelden bayi olarak açılır (bkz. [Müşteriler ve bayiler](/musteriler/)).
- Müşteri bayi paneline (`/app`) girmeye çalışırsa vitrindeki Hesabım'a; bayi `/hesabim`
  adresine girmeye çalışırsa bayi paneline yönlendirilir.
- Vitrin üst bilgisindeki hesap bağlantısı da kişiye göre değişir: ziyaretçiyi giriş sayfasına,
  müşteriyi Hesabım'a, bayiyi bayi paneline, yöneticiyi yönetim paneline götürür.

## B2B ve B2C birlikte nasıl çalışır? {#b2b-b2c}

- **Bayiler her işi bayi panelinden yapar.** Vitrin kurulu olsa da bayinin siparişleri,
  teklifleri, cari hesabı ve iadeleri bayi panelindedir. Bayi panelinin menüsünde ayrıca
  **Mağazaya Git** bağlantısı görünür (vitrin bakım modundayken gizlenir).
- **Fiyat gösterimi ayrıdır.** KDV dahil / hariç gösterim ziyaretçi-müşteri için ve bayi için
  ayrı ayarlanır (bkz. [Fiyat gösterimi](/vitrin/ayarlar#fiyat-gosterimi)).
- **Kampanyalar** müşteri tipine göre ayrılabilir: misafir, müşteri ya da bayi. **İlk sipariş**
  ve **Kupon kodu** koşulları da yalnız vitrinle gelir; kupon kodu yalnız vitrin sepetinde girilir.
- **Raporlar** misafir ve müşteri siparişlerini bayi siparişlerinden ayrı gösterir.

## Misafir alışverişi

Ziyaretçi üye olmadan sepetini doldurup ödeme ekranında iletişim, teslimat ve fatura bilgilerini
girerek sipariş verebilir. Misafir siparişlerinde ve tekliflerinde:

- Sipariş / teklif e-postasındaki bağlantı, **giriş gerektirmeyen** özel bir sayfayı açar.
  Misafir siparişin durumunu, kargo takip numarasını ve havale bilgilerini buradan görür; teklifi
  buradan onaylar, revize ister, reddeder ve öder.
- Bu bağlantılar vitrin **Bayilere özel** yapılmışken de çalışır.
- İade talebi, ödeme geçmişi ve kayıtlı adres gibi işlemler yalnız üyelerin Hesabım'ındadır.

## Müşteri kaydı

Vitrin herkese açıkken giriş sayfasında kayıt bağlantısı görünür. Kayıt formu: **Ad soyad**,
**E-posta adresi**, **Şifre**, **Şifre tekrarı**. Kayıttan sonra e-posta adresine doğrulama
bağlantısı gider; müşteri hesabı **e-posta doğrulanınca açılır**. Ayrıntılar:
[Müşteri hesabı](/vitrin/musteri-hesabi).

## Bayilere özel vitrin

**Ayarlar › Genel Ayarlar › Site Erişimi** ekranında **Bayilere özel** açılırsa vitrin yalnız
giriş yapmış bayilere açılır; ziyaretçiler giriş sayfasına yönlendirilir ve yeni kayıt kapanır.
Aynı ekranda **Bakım modu** da vardır. Bkz. [Site erişimi](/vitrin/ayarlar#site-erisimi).

## Vitrin sayfa adresleri {#adresler}

| Adres | Sayfa |
|---|---|
| `/` | Ana sayfa |
| `/urunler` | Tüm Ürünler |
| `/kampanyali-urunler` | Kampanyalı Ürünler |
| `/yeni-urunler` | Yeni Ürünler |
| `/arama?q=…` | Arama sonuçları |
| `/kategoriler`, `/kategori/{adres}` | Kategori listesi, kategori sayfası |
| `/markalar`, `/marka/{adres}` | Marka listesi, marka sayfası |
| `/urun/{adres}` | Ürün sayfası |
| `/sepet` | Sepetim |
| `/teklif-listesi` | Teklif Listem |
| `/odeme` | Ödeme |
| `/sayfa/{adres}` | İçerik sayfaları (Hakkımızda, sözleşmeler …) |
| `/iletisim` | İletişim |
| `/hesabim` | Müşterinin Hesabım alanı |

Panelde ürün listesindeki **Sitede gör** işlemi (aktif "Vitrin" ürünlerinde) ve **İçerik ›
Sayfalar** listesindeki **Görüntüle** bağlantısı bu adresleri yeni sekmede açar.

## Modül kapatılırsa

Vitrin **Ayarlar › Genel Ayarlar › Modüller** ekranından kapatılabilir. Kapatınca sistem yeniden
yalnız B2B çalışır: herkese açık site, müşterinin Hesabım'ı ve vitrinin panel ekranları (Ana Sayfa,
Menüler, Slider, Üst & Alt Bilgi, Çerez Yönetimi) kaybolur; veriler **silinmez**. Bayiler bayi
panelini kullanmayı sürdürür. Bkz. [Modüller](/yonetim/moduller).
