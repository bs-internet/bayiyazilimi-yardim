# İçerik yönetimi

Vitrinin içeriği panelde **İçerik** menüsünden yönetilir. **İçerik** grubu (Sayfalar dahil)
yalnız vitrin eklentisiyle gelir; vitrin kurulu değilse menüde görünmez.

| Menü | Ne yönetilir | Ayrıntı |
|---|---|---|
| **İçerik › Ana Sayfa** | Ana sayfanın bölümleri | [Ana sayfa ve slider](/vitrin/ana-sayfa) |
| **İçerik › Menüler › Ana Menü** | Sitenin üst menüsü | [Ana Menü](#ana-menu) |
| **İçerik › Menüler › Kategori Menüsü** | "Tüm Kategoriler" açılır menüsü | [Kategori Menüsü](#kategori-menusu) |
| **İçerik › Görünüm** | Tema renkleri, duyuru bandı ve alt bilgi metni | [Görünüm](#gorunum) |
| **İçerik › Slider** | Ana sayfanın en üstündeki slaytlar | [Slider](/vitrin/ana-sayfa#slider) |
| **İçerik › Sayfalar** | Hakkımızda, teslimat, gizlilik gibi içerik sayfaları | [Sayfalar](#sayfalar) |

Bu ekranlar, kullanıcının rolünde ilgili yetki varsa görünür. Yetkiler **Yetkiler** ekranında
"Mağaza: İçerik" ve "Mağaza: Menüler" gruplarında listelenir (bkz.
[Kullanıcılar, roller ve yetkiler](/yonetim/roller-yetkiler)).

## Menüler

Vitrinde iki menü vardır ve ayrı ayrı yönetilir. Her iki ekranda da öğeler tablo halinde, alt
öğeler üst öğelerinin hemen altında listelenir.

| Sütun | Açıklama |
|---|---|
| **Sıra** | **Yukarı taşı** / **Aşağı taşı** okları |
| **Öğe** | Menüde görünen ad ve bağlantı türü. Rozetler: **Vurgulu**, **Sağda**, **Alt kategoriler gizli**, **Kayıt silinmiş** |
| **Aktif** | Öğeyi vitrinde gösterir / gizler |
| **İşlemler** | **Düzenle**, sil |

**Kayıt silinmiş** rozeti, öğenin bağlı olduğu kategori, marka ya da sayfanın artık bulunmadığını
gösterir; bu öğe vitrinde gösterilmez. Düzenleyip yeni bir kayda bağlayın ya da silin. Bağlı
kategori / marka / sayfa **pasifse** de öğe vitrinde görünmez.

### Ana Menü {#ana-menu}

Vitrinin üst menüsü. Öğeler bu sırayla soldan sağa dizilir; **Sağa yasla** işaretli öğeler sağda
toplanır. **Üst öğe** seçilen öğeler, o öğenin açılır alt menüsünde gösterilir. Menü **iki
seviyelidir**.

| Alan | Açıklama |
|---|---|
| **Üst öğe** | **— Üst seviye —** ya da menüdeki üst seviye bir öğe. Seçilirse bu öğe, seçilen öğenin alt menüsünde gösterilir. Alt öğeleri olan bir öğe başka öğenin altına taşınamaz |
| **Bağlantı** | Bağlantı türü (aşağıdaki tablo) |
| **Kategori / Marka / Sayfa** | Bağlantı türü bunlardan biriyse bağlanacak kayıt (zorunlu) |
| **Menüde görünen ad** | En çok 120 karakter. Boş bırakılırsa kaydın kendi adı (ör. kategori adı) kullanılır. **Özel bağlantı**da zorunlu |
| **Adres** | Yalnız **Özel bağlantı**da, zorunlu, en çok 500 karakter. Site içi adres "/" ile başlar (ör. `/marka/abc`); dış adres `https://` ile yazılır |
| **Sağa yasla** | Öğe menünün sağ tarafında gösterilir |
| **Vurgulu (sarı düğme)** | Öğe düğme gibi vurgulanır |
| **Yeni sekmede aç** | Bağlantı yeni sekmede açılır |

| Bağlantı türü | Nereye gider |
|---|---|
| **Kategori**, **Marka**, **Sayfa** | Seçilen kaydın vitrin sayfası |
| **Ana Sayfa** | `/` |
| **Tüm Ürünler** | `/urunler` |
| **Tüm Kategoriler** | `/kategoriler` |
| **Kampanyalı Ürünler** | `/kampanyali-urunler` |
| **Yeni Ürünler** | `/yeni-urunler` |
| **Markalar** | `/markalar` |
| **İletişim** | `/iletisim` |
| **Teklif Listesi** | `/teklif-listesi` |
| **Hesabım** | Kişiye göre: ziyaretçide giriş sayfası, müşteride Hesabım, bayide bayi paneli |
| **Özel bağlantı** | **Adres** alanına yazdığınız adres |

Ana menüde hiç öğe yoksa üst menü boş görünür.

### Kategori Menüsü {#kategori-menusu}

Üst bilgideki **Tüm Kategoriler** açılır menüsü (mobilde menü içinde). Seçilen kategoriler bu
sırayla listelenir; alt kategorileri otomatik gelir ya da **Üst öğe** seçerek elle eklenir.

| Alan | Açıklama |
|---|---|
| **Üst öğe** | Boşsa ana seviye. Seçilirse bu kategori, seçilen öğenin altında elle eklenmiş alt öğe olur |
| **Kategori** | Zorunlu. Bu menüye yalnız kategori eklenir |
| **Menüde görünen ad** | Boşsa kategorinin adı |
| **Alt kategorileri göster** | Yalnız ana seviyedeki öğelerde. Açıksa kategorinin alt kategorileri otomatik listelenir. Elle eklenmiş alt öğe varsa onlar gösterilir |

- Tabloda **Otomatik alt kategori** olarak görünen satırlar bilgi amaçlıdır; kategori ağacından
  gelir, ayrıca düzenlenmez.
- Alt öğenin kendi alt kategorileri de (üçüncü seviye) otomatik gösterilir.
- **Menüde hiç öğe yoksa tüm ana kategoriler** alt kategorileriyle birlikte gösterilir.
- Alt bilgideki **Kategoriler** sütunu da bu menünün ilk 7 öğesini gösterir.

### Nasıl yapılır? {#menu-nasil}

**Üst menüye bir sayfa eklemek**

1. **İçerik › Menüler › Ana Menü**'yü açın, **Öğe ekle**'ye basın.
2. **Bağlantı** olarak **Sayfa**'yı seçin, ardından sayfayı seçin.
3. İsterseniz **Menüde görünen ad**'ı değiştirin, **Kaydet**'e basın.

**Açılır alt menü oluşturmak**

1. Önce üst öğeyi ekleyin (ör. "Kurumsal" adında bir **Özel bağlantı** ya da bir sayfa).
2. Alt öğeleri eklerken **Üst öğe** alanında bu öğeyi seçin.

**Kategori menüsünü kendi sıranızla kurmak**

1. **İçerik › Menüler › Kategori Menüsü**'nde **Öğe ekle** ile kategorileri istediğiniz sırada
   ekleyin.
2. Bir kategorinin alt kategorilerini göstermek istemiyorsanız **Alt kategorileri göster**'i
   kapatın; yalnız bazılarını göstermek için onları **Üst öğe** seçerek elle ekleyin.

**Silmek** — sil düğmesine basıp onaylayın. Alt menüdeki öğeler de kaldırılır; bağlı kategori,
marka ya da sayfa **silinmez**.

## Görünüm {#gorunum}

**İçerik › Görünüm** (eski adıyla Üst & Alt Bilgi) mağazanın renklerini, sitenin her sayfasında
görünen duyuru bandını ve alt bilgi metnini yönetir. Ekran üç bölümdür: **Tema renkleri**,
**Duyuru bandı** ve **Alt bilgi**. Değişiklikler **Kaydet** ile kaydedilir ("Görünüm ayarları
kaydedildi.").

### Tema renkleri {#tema-renkleri}

"Varsayılan temanın renkleri; diğer tonlar bunlardan hesaplanır. Başka bir tema etkinse o temanın
renkleri geçerli olabilir."

| Renk | Nerede kullanılır |
|---|---|
| **Ana renk** | Bağlantılar, düğmeler, fiyat vurguları |
| **Koyu renk** | Başlıklar, üst şerit ve koyu alanlar |
| **Vurgu rengi** | Rozetler, kampanyalar ve dikkat çeken öğeler |

- Her renk, renk seçiciyle ya da yanındaki kutuya **onaltılık kod** (ör. `#0a6cff`) yazılarak
  belirlenir. Üç rengin önizlemesi alanların altında yan yana görünür.
- **Başlangıç renkleri** düğmesi renkleri başlangıç değerlerine döndürür: Ana renk `#0a6cff`,
  Koyu renk `#001842`, Vurgu rengi `#ff751f` (Bayi Yazılımı logosuna yakın renkler). Kaydetmeden
  sitede değişmez.
- Diğer tonlar (açık / koyu tonlar) ve vurgu renginin üzerindeki yazı rengi bu üç renkten
  **kendiliğinden hesaplanır**.
- Bu renkler **varsayılan temaya** uygulanır. [Temalar](/yonetim/temalar) ekranından başka bir tema
  etkinleştirilmişse o tema kendi renklerini kullanabilir.

### Duyuru bandı {#duyuru-bandi}

Duyurular sitenin en üstünde, **koyu bir şeritte** gösterilir: aynı anda bir duyuru görünür,
birden fazla duyuru varsa birkaç saniyede bir sıradakine geçer.

- **Duyuru ekle** ile satır eklenir; her satır bir duyurudur. En çok 20 duyuru, her biri en çok
  200 karakter (ör. "2.500 ₺ üzeri kargo bedava").
- Boş satırlar kaydedilmez. Duyuru yoksa bant sitede gizlenir.

Kurulumda duyuru bandında "256BIT SSL İLE GÜVENLİ ALIŞVERİŞ YAPABİLİRSİNİZ" yazar; değiştirin ya da
silin.

### Alt bilgi {#alt-bilgi}

| Alan | Açıklama |
|---|---|
| **Hakkında metni** | Sayfa altında logonun yanında görünen kısa tanıtım, en çok 1.000 karakter |

Ekranın yetkileri **Görünümü görüntüle** ve **Görünümü güncelle**'dir.

### Alt bilgide başka neler görünür? {#alt-bilgi-icerigi}

Alt bilgi, birkaç ekrandaki bilgilerden kendiliğinden oluşur:

| Alt bilgideki yer | Nereden gelir |
|---|---|
| Logo | **Ayarlar › Genel Ayarlar** (markalama) |
| Hakkında metni | **İçerik › Görünüm** |
| Sosyal medya ikonları (Instagram, LinkedIn, YouTube, X, Facebook) | **Ayarlar › Genel Ayarlar › İletişim Bilgileri** (bkz. [Vitrin ayarları › İletişim Bilgileri](/vitrin/ayarlar#iletisim-bilgileri)); boş bırakılan hesap gizlenir |
| **Kurumsal** sütunu | **İçerik › Sayfalar**'da yerleşimi "Alt menü (Kurumsal)" olan sayfalar |
| **Müşteri Hizmetleri** sütunu | Yerleşimi "Alt menü (Müşteri Hizmetleri)" olan sayfalar |
| **Kategoriler** sütunu | Kategori Menüsü'nün ilk 7 öğesi |
| **İletişim** sütunu | Firma adresi, telefon ve e-posta (**Kurumsal Bilgiler**), çalışma saatleri (**İletişim Bilgileri**) ve ETBİS kare kodu |
| **Çerez Tercihleri** bağlantısı | Çerez tercih penceresini yeniden açar (bkz. [Çerez yönetimi](/vitrin/ayarlar#cerez-yonetimi)) |

## Sayfalar {#sayfalar}

**İçerik › Sayfalar** Hakkımızda, sipariş ve teslimat, gizlilik gibi içerik sayfalarını yönetir.
Sayfalar vitrinde `/sayfa/{adres}` adresinde yayınlanır.

::: info Sözleşmeler burada değil
Ödeme ve üyelik formunda onaylatılan sözleşmeler (satış sözleşmesi, üyelik sözleşmesi, KVKK
aydınlatma metni …) bu ekrandan değil, **Ayarlar › Tanımlamalar › Sözleşmeler**'den yönetilir;
bkz. [Tanımlamalar › Sözleşmeler](/yonetim/tanimlamalar#sozlesmeler). Banka hesapları da
**Banka Hesapları** ekranındadır (bkz. [Havale](/cari/havale)). Sayfalar bayi panelinde
listelenmez; bayiler sözleşmeleri kendi **Sözleşmeler** menüsünde görür.
:::

Liste sütunları: **Başlık**, **Yerleşim**, **Durum** (Yayında / Taslak), **Sıra**, **Güncelleme**,
**İşlemler** (**Görüntüle** — vitrindeki sayfayı açar, **Düzenle**, sil).

| Alan | Açıklama |
|---|---|
| **Başlık** | Zorunlu, en çok 255 karakter |
| **URL (slug)** | Sayfa adresi, en çok 255 karakter. Boş bırakılırsa başlıktan üretilir. Adres: `/sayfa/…` |
| **Sayfa metni** | Zengin metin editörü |
| **Durum** | **Yayında** ya da **Taslak (gizli)**. Taslak sayfa vitrinde açılmaz, menülerde görünmez |
| **Yerleşim** | **Alt menü (Müşteri Hizmetleri)**, **Alt menü (Kurumsal)** ya da **Menüde gösterme** |
| **Sıra** | Alt bilgi sütununda sıralama (küçük önce) |
| **Arama motoru (SEO) › Meta açıklama** | Arama sonuçlarında görünen kısa açıklama, en çok 500 karakter |

"Menüde gösterme" yerleşimli bir sayfayı üst menüye eklemek için **Ana Menü**'de **Sayfa**
bağlantısı kullanın.

### Hazır gelen sayfalar {#hazir-sayfalar}

Vitrin eklentisi kurulurken şu sayfalar **örnek metinle** gelir. Her birinde "Bu metin örnek
olarak eklenmiştir." uyarısı yazar; metni kendi firmanıza göre değiştirin.

| Sayfa | Adres | Yerleşim |
|---|---|---|
| Hakkımızda | `hakkimizda` | Kurumsal |
| Müşteri Hizmetleri | `musteri-hizmetleri` | Müşteri Hizmetleri |
| Sipariş ve Teslimat | `siparis-ve-teslimat` | Müşteri Hizmetleri |
| Garanti ve İade Şartları | `garanti-ve-iade-sartlari` | Müşteri Hizmetleri |
| Güvenlik | `guvenlik` | Müşteri Hizmetleri |
| Kişisel Verilerin Korunması | `kvkk-aydinlatma-metni` | Müşteri Hizmetleri |
| Gizlilik ve Çerez Politikası | `gizlilik-ve-cerez-politikasi` | Müşteri Hizmetleri |

Satış sözleşmesi, mesafeli satış sözleşmesi, ön bilgilendirme formu ve banka hesap numaraları
sayfa olarak gelmez: ödeme formundaki onay metinleri **Sözleşmeler**'den, banka hesapları
**Banka Hesapları**'ndan gelir. Ödeme ekranı hiçbir sayfanın adresine bağlı değildir.

::: warning Bu adresleri değiştirmeyin
Bazı ekranlar bu sayfalara **adresiyle** bağlanır:

- Teklif listesi ve iletişim formundaki **KVKK Aydınlatma Metni** bağlantısı
  `kvkk-aydinlatma-metni` sayfasını açar.
- Çerez şeridindeki **Gizlilik ve Çerez Politikası** bağlantısı yalnız
  `gizlilik-ve-cerez-politikasi` adresli sayfa yayındaysa ve yerleşimi bir alt menü ise görünür.

Bu sayfaların **URL (slug)** alanını değiştirirseniz ya da silerseniz bağlantılar boşa çıkar.
Başlığı ve metni serbestçe değiştirebilirsiniz.
:::

::: tip Örnek metin uyarısını silin
Sistem güncellemelerinde, metninde hâlâ "Bu metin örnek olarak eklenmiştir." cümlesi bulunan
hazır sayfalar yeniden örnek metinle yazılabilir. Kendi metninizi girerken bu cümleyi silin;
düzenlediğiniz sayfaya güncellemelerde dokunulmaz.
:::

::: tip Eski siteden geçiş
Eski sitenizin sayfa adresleri farklıysa arama motorlarındaki sıranızı kaybetmemek için eski
adreslerden yenilerine 301 yönlendirmesi yaptırın.
:::

### Nasıl yapılır? {#sayfa-nasil}

**Yeni sayfa eklemek**

1. **İçerik › Sayfalar**'da **Yeni sayfa**'ya basın.
2. **Başlık** ve **Sayfa metni**ni girin; adresi kendiniz belirlemek istiyorsanız **URL (slug)**
   yazın.
3. **Yerleşim**'i seçin: alt bilgide hangi sütunda görüneceği ya da hiç görünmeyeceği.
4. **Durum**'u **Yayında** yapıp **Kaydet**'e basın.

Bayilerinizin görmesi gereken metinleri (iade şartları, satış sözleşmesi …) sözleşme olarak
ekleyin: aktif sözleşmeler bayi panelinde **Sözleşmeler** menüsünde listelenir. Bkz.
[Bayi paneli › Sözleşmeler](/bayi-paneli/sozlesmeler).

## İletişim sayfası ve iletişim bilgileri {#iletisim}

Vitrinin **İletişim** sayfası (`/iletisim`) içeriğini iki ayar ekranından alır:

| Sayfada | Nereden gelir |
|---|---|
| Giriş metni | **Ayarlar › Genel Ayarlar › İletişim Bilgileri › Giriş metni** |
| Adres, telefon, e-posta | **Ayarlar › Genel Ayarlar › Kurumsal Bilgiler** |
| WhatsApp, çalışma saatleri | **İletişim Bilgileri** |
| Şirket bilgileri (ünvan, vergi dairesi, vergi no, MERSİS) | **Kurumsal Bilgiler** |
| Konum haritası | **İletişim Bilgileri › Harita (Google Maps embed URL)**: Google Haritalar → Paylaş → Harita yerleştir → src adresi |

**Bize Yazın** formu: **Ad Soyad** (zorunlu), **E-posta** (zorunlu), telefon, **Konu**,
**Mesajınız** (zorunlu, en çok 5.000 karakter) ve KVKK onayı (zorunlu). Gönderilen mesaj
firma e-postasına (**Kurumsal Bilgiler › E-posta**) "İletişim formu: …" konulu e-postayla gelir. Bu adres
boşsa mesaj kimseye iletilmez.
