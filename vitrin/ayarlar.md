# Vitrin ayarları

Vitrinin davranışını belirleyen ayarlar birkaç ekrana dağılmıştır. Bu sayfa hepsini bir arada
anlatır.

| Ayar | Menü yolu |
|---|---|
| Bakım modu, bayilere özel vitrin | **Ayarlar › Genel Ayarlar › Site Erişimi** |
| Çerez şeridi, Google Analytics, Meta Pixel | **Ayarlar › Genel Ayarlar › Çerez Yönetimi** |
| ETBİS kare kodu | **Ayarlar › Genel Ayarlar › Kurumsal Bilgiler** |
| KDV dahil / hariç fiyat gösterimi | **Ayarlar › Tanımlamalar › Satış Ayarları** |
| Para birimleri | **Ayarlar › Tanımlamalar › Para Birimleri** |
| Stokta olmayan ürünlerin listelenmesi | **Stok › Stok Ayarları** |
| Ürünün vitrinde mi yalnız bayilere mi görüneceği | Ürün formu › **Kimler görsün?** |
| Kupon kodu, müşteri tipi, ilk sipariş | **Kampanyalar › Kampanyalar** |
| Arama motoru (SEO) bilgileri | Ürün, kategori ve sayfa formları |

## Site erişimi {#site-erisimi}

**Ayarlar › Genel Ayarlar › Site Erişimi** vitrinin kimlere açık olduğunu belirler. Yönetim paneli
her durumda yöneticilere açıktır.

| Alan | Açıklama |
|---|---|
| **Bakım modu** | Açıkken site kapalıdır; ziyaretçiler, müşteriler ve bayiler bakım sayfasını görür. Yalnız yöneticiler girebilir |
| **Bakım sayfası mesajı** | Bakım sayfasında gösterilecek metin, en çok 1.000 karakter |
| **Bayilere özel** | Açıkken vitrin yalnız oturum açmış bayilere açılır |

**Bakım modu açıkken:**

- Giriş, şifre sıfırlama ve e-posta doğrulama sayfaları açık kalır; yöneticiler giriş yapabilir.
- Bayi panelindeki **Mağazaya Git** bağlantısı gizlenir.
- Kartla ödemenin banka dönüş ve bildirim adresleri çalışmayı sürdürür.
- Bayi paneli de bakım sayfasını gösterir; bakım süresince bayiler de sipariş veremez.

**Bayilere özel açıkken:**

- Ziyaretçi hangi vitrin sayfasını açarsa açsın giriş sayfasına yönlendirilir.
- Yeni kayıt kapanır: kayıt bağlantısı giriş sayfasından kalkar, kayıt adresi giriş sayfasına
  yönlendirir.
- Bayi olmayan bir üye (vitrin müşterisi) giriş yaparsa oturumu kapatılır ve "Bu site yalnızca
  bayilerimize açıktır." uyarısını görür.
- Misafirlere daha önce gönderilmiş sipariş ve teklif bağlantıları çalışmayı sürdürür.

### Nasıl yapılır? {#site-erisimi-nasil}

**Siteyi bakıma almak**

1. **Ayarlar › Genel Ayarlar › Site Erişimi**'ni açın.
2. **Bakım modu**'nu açın, **Bakım sayfası mesajı**nı yazın (ör. "Sitemiz yenileniyor, kısa süre
   sonra yeniden açılacağız.").
3. **Kaydet**'e basın. Bitince **Bakım modu**'nu kapatıp kaydedin.

**Vitrini yalnız bayilere açmak** — **Bayilere özel**'i açıp kaydedin. Bayi olmayanlar artık siteyi
göremez; kayıtlı müşterilerinizin verileri silinmez, ayarı kapattığınızda yeniden giriş yapabilirler.

## Çerez yönetimi {#cerez-yonetimi}

**Ayarlar › Genel Ayarlar › Çerez Yönetimi** vitrindeki çerez şeridini ve ziyaretçinin onayına
bağlı yüklenen ölçüm kodlarını yönetir. Kodlar, ziyaretçi ilgili çerez grubunu kabul etmedikçe
yüklenmez.

| Alan | Açıklama |
|---|---|
| **Çerez şeridi › Şerit metni** | En çok 500 karakter. Boş bırakılırsa varsayılan metin gösterilir. **Gizlilik ve Çerez Politikası** bağlantısı otomatik eklenir |
| **Google Analytics › Ölçüm kimliği** | Google Analytics 4 › Yönetici › Veri akışları'ndaki ölçüm kimliği, `G-XXXXXXXXXX` biçiminde. Boşsa kod eklenmez |
| **Meta (Facebook) Pixel › Pixel kimliği** | Meta Events Manager'daki veri kaynağı (Pixel) kimliği; yalnız rakam (6–20 hane). Boşsa kod eklenmez |

Genel Ayarlar ana ekranındaki **Çerez Yönetimi** kartı hangi kodların eklendiğini özetler
("Google Analytics · Meta Pixel" ya da "Ölçüm kodu eklenmedi").

### Ziyaretçi ne görür? {#cerez-ziyaretci}

- Ziyaretçi tercih yapana kadar sayfanın altında şerit görünür: **Kabul et**, **Reddet**,
  **Tercihler**.
- **Tercihler** penceresinde gruplar ayrı ayrı seçilir:
  - **Zorunlu çerezler** — oturum, sepet ve para birimi; kapatılamaz.
  - **Analitik çerezler** (Google Analytics) — yalnız ölçüm kimliği girilmişse listelenir.
  - **Pazarlama çerezleri** (Meta / Facebook Pixel) — yalnız Pixel kimliği girilmişse listelenir.
  - Düğmeler: **Tümünü reddet**, **Seçimi kaydet**, **Tümünü kabul et**.
- Tercih tarayıcıda bir yıl saklanır. Alt bilgideki **Çerez Tercihleri** bağlantısı pencereyi
  yeniden açar.
- Ziyaretçi daha önce verdiği onayı geri alırsa ilgili çerezler (Google Analytics için `_ga`,
  `_gid`, `_gat`; Pixel için `_fbp`, `_fbc`) silinir ve sayfa yenilenir.
- Şeritteki **Gizlilik ve Çerez Politikası** bağlantısı, adresi `gizlilik-ve-cerez-politikasi` olan
  sayfa yayında ve bir alt menüde ise görünür (bkz. [Hazır gelen sayfalar](/vitrin/icerik-yonetimi#hazir-sayfalar)).

## ETBİS {#etbis}

**Ayarlar › Genel Ayarlar › Kurumsal Bilgiler › ETBİS** kartında:

| Alan | Açıklama |
|---|---|
| **Kare kod** | ETBİS'ten indirdiğiniz kare kod görseli: JPG / PNG, en çok 1 MB |
| **Doğrulama bağlantısı** | İsteğe bağlı. Girilirse kare koda tıklayan ziyaretçi bu adrese gider |

Kare kod yüklenince vitrin alt bilgisinde **İletişim** sütununda görünür.

## Fiyat gösterimi {#fiyat-gosterimi}

**Ayarlar › Tanımlamalar › Satış Ayarları › Fiyat gösterimi**:

| Alan | Seçenekler | Varsayılan |
|---|---|---|
| **Ziyaretçi / müşteri** | **KDV dahil** ya da **KDV hariç (girildiği gibi)** | KDV dahil |
| **Bayi** | Aynı seçenekler | KDV hariç |

Vitrinde ürün kartında KDV hariç gösterimde fiyatın yanında "+KDV" yazar. Ürün sayfasında KDV
dahil gösterimde altında KDV hariç fiyat, KDV hariç gösterimde "KDV hariç (+%… KDV)" notu yer alır.
Bayiler vitrinde kendi grup / bayi indirimli fiyatlarını görür. İndirimli ürünlerde kartta
"%10" gibi bir indirim etiketi, indirim bayi indiriminden geliyorsa "Bayi %10" etiketi çıkar. Ayrıntılar: [Fiyat ve indirimler](/musteriler/fiyat-ve-indirimler).

## Para birimi {#para-birimi}

**Ayarlar › Tanımlamalar › Para Birimleri**'nde birden fazla para birimi aktifse vitrin üst
bilgisinde para birimi seçici görünür. Ziyaretçi seçtiği para biriminde fiyat görür; fiyat
filtresi de bu para biriminde çalışır. Tek para birimi aktifse seçici görünmez. Bkz.
[Para birimleri](/yonetim/para-birimleri).

## Stokta olmayan ürünler {#stoksuz-urunler}

**Stok › Stok Ayarları › Stokta olmayan ürünleri vitrinde göster**:

- **Açık:** stoğu bitmiş ürünler de listelenir; kartta **Stokta Yok** yazar, sepete eklenmez.
- **Kapalı:** stoğu bitmiş ürünler kategori, marka, arama ve diğer ürün listelerinden çıkar.
  Stok takibi yapılmayan ürünler ve **yalnız teklifle satılan** ürünler listelenmeye devam eder.

Ziyaretçi listede **Yalnızca stoktakiler** kutusunu işaretleyerek de stoksuzları gizleyebilir.

## Ürün görünürlüğü: Kimler görsün? {#kimler-gorsun}

Vitrin kuruluyken ürün formunda **Kimler görsün?** alanı çıkar:

- **Vitrin** — herkes görür (ziyaretçi, müşteri, bayi).
- **Bayi** — yalnız giriş yapmış bayiler görür ve sipariş verir. Ziyaretçi ve müşteriler bu ürünü
  listelerde, aramada ve ana sayfada görmez; adresini bilse de açamaz.

Ürün listesinde **Kimler görsün** süzgeci ve "Bayi" rozeti bulunur. Bkz.
[Ürünler](/satis/urunler#kimler-gorsun).

## Kupon kodu {#kupon-kodu}

Kupon kodu ayrı bir ekran değil, kampanyanın bir koşuludur.

1. **Kampanyalar › Kampanyalar**'da kampanyayı oluşturun ya da düzenleyin.
2. Kime koşullarına **Kupon kodu** · **eşittir** · `YAZ2026` gibi bir kod ekleyin.
3. Kampanyayı yayına alın.

**Müşteri tarafında:**

- Kod sepet sayfasındaki **Kupon kodu** kutusuna yazılıp **Uygula**'ya basılır (en çok 40
  karakter). Büyük / küçük harf ve baştaki / sondaki boşluk önemsenmez.
- Kod şu an yayında olan bir kampanyaya ait değilse "Bu kupon kodu geçerli değil ya da süresi
  dolmuş." hatası çıkar.
- Kod geçerli ama sepet kampanyanın diğer koşullarını (ör. en az tutar) sağlamıyorsa kod kaydedilir
  ve uyarı verilir; koşullar sağlanınca indirim sepete kendiliğinden uygulanır.
- Girilen kod sepette **Kupon: KOD** olarak görünür ve **Kaldır** ile kaldırılır.
- Sipariş verilince kod silinir; bir sonraki sepete taşınmaz. Kaç kez kullanılabileceğini
  kampanyanın kullanım sınırları belirler.

**Kurallar:**

- Kupon kodlu kampanya kod girilmeden **hiçbir yerde görünmez**: ürün kartındaki kampanya etiketi
  ve "sepette" fiyatı çıkmaz, Kampanyalı Ürünler sayfasında sayılmaz.
- Kupon kodu yalnız vitrin **sepetinde** geçerlidir; teklif listesine uygulanmaz.
- Bayi paneli kupon kullanmaz.

## Vitrine özel kampanya koşulları {#kampanya-kosullari}

Vitrin, kampanyalara kupon kodunun yanında iki koşul daha ekler:

| Koşul | Seçenekler | Not |
|---|---|---|
| **Müşteri tipi** | **Misafir**, **Müşteri**, **Bayi** | Misafir = giriş yapmamış; Müşteri = giriş yapmış, bayi olmayan üye |
| **İlk sipariş** | **İlk siparişi**, **Daha önce sipariş vermiş** | İptal edilmiş ya da başarısız siparişler sayılmaz |

İlk sipariş üyede üyeliğe, misafirde e-posta adresine göre kontrol edilir. Misafirin e-postası
ödeme ekranında öğrenildiği için "İlk siparişi" indirimi misafirin **sepet** sayfasında
görünmez; ödeme adımında uygulanır. Ürün kartlarındaki kampanya etiketinde bu koşul sağlanmış
sayılır. Bkz. [Kampanyalar](/musteriler/kampanyalar).

## Arama motoru (SEO) {#seo}

Vitrin sayfaları sunucuda hazırlanır; arama motorları içeriği doğrudan okur. Her sayfada başlık,
açıklama, kanonik adres ve sosyal medya paylaşım bilgileri (Open Graph) bulunur. Arama motoru
için ayrıca bir ayar yapmanız gerekmez: aşağıdaki dosyalar ve yapılandırılmış veri kendiliğinden
üretilir.

| Nerede | Alanlar |
|---|---|
| Ürün formu › **Arama motoru** | **Meta başlık** (en çok 255 karakter; boşsa ürün adı), **Meta açıklama** (en çok 500 karakter; boşsa kısa açıklama) |
| Kategori formu | Meta başlık (en çok 255), meta açıklama (en çok 500) |
| **İçerik › Sayfalar** › **Arama motoru (SEO)** | **Meta açıklama** (en çok 500) |

- **Arama sonuç sayfaları** arama motorlarına "dizine ekleme" (noindex) olarak işaretlenir.

### Tarayıcı dosyaları {#seo-dosyalari}

| Adres | İçerik |
|---|---|
| `/robots.txt` | Arama motorlarına hangi bölümlerin taranmayacağını söyler. Vitrin sayfaları açıktır; yönetim paneli, bayi paneli, Hesabım, sepet, ödeme, teklif listesi, imzalı sipariş / teklif bağlantıları, arama sonuçları, giriş / kayıt / şifre sayfaları ve kurulum sihirbazı kapalıdır (`Disallow`). Dosyanın sonunda site haritasının adresi yazar |
| `/sitemap.xml` | Site haritası: ana sayfa, liste sayfaları (Tüm Ürünler, Kategoriler, Markalar, Kampanyalı Ürünler, Yeni Ürünler, İletişim), aktif kategoriler, markalar ve sayfalar, aktif ve **Kimler görsün?** alanı **Vitrin** olan ürünler. Ürün, kategori, marka ve sayfalarda son güncelleme tarihi de yazar. Toplam 10.000 adresi aşarsa site haritası parçalara bölünür (`/sitemap-pages.xml`, `/sitemap-products-1.xml` …) ve `/sitemap.xml` bu parçaların listesi olur |
| `/llms.txt` | Yapay zekâ araçları için mağaza özeti ([llmstxt.org](https://llmstxt.org) biçiminde): mağaza adı, slogan ya da alt bilgideki tanıtım metni, iletişim bilgileri (e-posta, telefon, adres, çalışma saatleri), ana kategoriler, aktif sayfalar ve önemli bağlantılar |

- Site haritası ve `llms.txt` en çok **1 saat** önbellekte tutulur; ürün, kategori, marka,
  sayfa ya da ayar değişikliği bir sonraki istekte yansır.
- **Bakım modu** ya da **Bayilere özel** açıkken `robots.txt` tüm siteyi kapatır
  (`Disallow: /`); site haritası ve `llms.txt` içerik vermez. Bkz. [Site erişimi](#site-erisimi).
- Vitrin modülü kurulu değilse (yalnız bayi sistemi) `robots.txt` tüm siteyi kapatır; site
  haritası ve `llms.txt` yoktur.

Site haritasını arama motorlarına bildirmek için Google Search Console gibi araçlara
`https://alanadiniz/sitemap.xml` adresini ekleyebilirsiniz.

### Yapılandırılmış veri (Schema.org) {#yapilandirilmis-veri}

Sayfalara arama motorlarının anladığı yapılandırılmış veri (JSON-LD) eklenir:

| Sayfa | Veri |
|---|---|
| Ana sayfa | Firma (Organization: mağaza adı, logo, e-posta, telefon, adres, sosyal medya hesapları) ve site araması (WebSite + SearchAction) |
| Ürün sayfası | Ürün (Product: ad, stok kodu, model no, barkod, görseller, açıklama, marka, kategori; fiyat varsa Offer: fiyat, para birimi ve stok durumu) ve gezinti yolu (BreadcrumbList) |
| Ürün listeleri (tüm ürünler, kategori, marka …) | Koleksiyon sayfası (CollectionPage), gezinti yolu ve listedeki ürünler (ItemList) |
| İçerik sayfaları | Sayfa (WebPage) ve gezinti yolu |
| İletişim | İletişim sayfası (ContactPage) ve firma bilgileri |

Firma bilgileri **Ayarlar › Genel Ayarlar** › **Kurumsal Bilgiler** ve **İletişim Bilgileri**
ekranlarından, logo Genel Ayarlar'dan gelir; bu alanları doldurmanız yeterlidir.

## Arama ve filtreler

Vitrin araması ve ürün listesi filtreleri ayar gerektirmez; ürün bilgilerinden kendiliğinden
çalışır. Nasıl çalıştıkları: [Müşteri deneyimi › Arama](/vitrin/musteri-deneyimi#arama) ve
[Filtreler ve sıralama](/vitrin/musteri-deneyimi#filtreler).
