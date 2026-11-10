# Ana sayfa ve slider

Vitrinin ana sayfası **bölümlerden** oluşur. En üstte **slider** (büyük görsel geçişleri), altında
sizin eklediğiniz bölümler sırayla gösterilir. İkisi de **İçerik** menüsünden yönetilir:

- **İçerik › Ana Sayfa**: slider'ın altındaki bölümler.
- **İçerik › Slider**: slaytlar ve slider'ın ana sayfada gösterilip gösterilmeyeceği.

::: tip Başlangıç düzeni
Vitrin eklentisi kurulumda hazır bulunuyorsa ana sayfa örnek bir düzenle gelir: Popüler Kategoriler,
Fırsatlar (indirimdeki ürünler), Markalarımız, Öne Çıkan Ürünler, Yeni Ürünler, kurumsal teklif
alanı ve güven bandı. Bu bölümleri dilediğiniz gibi düzenleyin, kapatın ya da silin.
:::

## Ana Sayfa ekranı {#ana-sayfa-ekrani}

**İçerik › Ana Sayfa** bölümleri tablo halinde listeler. Başlıkta toplam bölüm ve aktif bölüm
sayısı yazar. Bölümler vitrinde slider'ın altında **bu sırayla** gösterilir.

| Sütun | Açıklama |
|---|---|
| **Sıra** | **Yukarı taşı** / **Aşağı taşı** okları. Sıra anında kaydedilir |
| **Bölüm** | Bölümün başlığı (başlığı yoksa "(başlıksız)") ve türü |
| **Aktif** | Anahtar: bölümü vitrinde gösterir / gizler. Ayarlar korunur |
| **İşlemler** | **Düzenle** |

### Nasıl yapılır? {#ana-sayfa-nasil}

**Bölüm eklemek**

1. **İçerik › Ana Sayfa**'da **Bölüm ekle**'ye basın.
2. Açılan pencerede **Bölüm türü**nü seçin (her türün kısa açıklaması yazar).
3. **Ekle ve düzenle**'ye basın. Bölüm **pasif** olarak eklenir ve düzenleme ekranı açılır.
4. Ayarları yapın, **Durum** kartında **Ana sayfada göster**'i açın ve **Kaydet**'e basın.

**Sırayı değiştirmek**: tablodaki **Yukarı taşı** / **Aşağı taşı** oklarını kullanın.

**Geçici olarak gizlemek**: tablodaki **Aktif** anahtarını kapatın ya da düzenleme ekranında
**Ana sayfada göster**'i kapatıp kaydedin.

**Silmek**: düzenleme ekranında sil düğmesine basın ve onaylayın. Bölüm ve yüklediğiniz
görselleri kalıcı olarak silinir.

::: info Boş bölümler görünmez
Gösterecek içeriği olmayan bölüm vitrinde kendiliğinden atlanır: ürünü olmayan ürün şeridi,
görseli yüklenmemiş banner, maddesi olmayan güven bandı, pasif ya da ürünsüz markaya bağlı marka
vitrini gibi. Bölümü "aktif" yaptığınız halde göremiyorsanız içeriğini kontrol edin.
:::

## Bölüm düzenleme ekranı {#bolum-duzenleme}

Her bölümün düzenleme ekranında şu kartlar vardır:

| Kart | Alanlar |
|---|---|
| **İçerik** | Bölüm türüne özel ayarlar (aşağıda tür tür) |
| **Özellikler** | Yalnız Kurumsal Teklif Alanı: metnin yanındaki ikonlu maddeler |
| **Görseller** | Görseli olan türlerde görsel yükleme alanları |
| **Durum** | **Ana sayfada göster**: kapalıyken bölüm gizlenir, ayarları korunur |
| **Başlık** | **Başlık** (en çok 255 karakter), **Alt başlık** (en çok 500 karakter). Bazı türlerde **Logo** |
| **Önizleme** | **Ana sayfayı aç**: kaydettikten sonra değişikliği vitrinde görürsünüz |

**Başlık logosu:** Kategori Vitrini, Ürün Şeridi, Marka Şeridi, Marka Vitrini ve Serbest İçerik
bölümlerinde başlığın soluna küçük bir **Logo** eklenebilir (isteğe bağlı, önerilen yükseklik
80 px). Marka Vitrini'nde logo yüklenmezse markanın kendi logosu kullanılır.

**Görseller:** Her görsel en çok **8 MB** olabilir. Yüklü bir görseli kaldırmak için altındaki
**Görseli kaldır** kutusunu işaretleyip kaydedin.

## Bölüm türleri {#bolum-turleri}

### Kategori Vitrini {#kategori-vitrini}

Seçtiğiniz kategorileri görselleriyle kutular halinde gösterir. Her kutuda kategorideki (alt
kategoriler dahil) ürün sayısı yazar. Kategoriye görsel yüklenmemişse içindeki ilk ürünün
görseli kullanılır. Başlığın yanında **Tüm Kategoriler** bağlantısı çıkar.

| Alan | Açıklama |
|---|---|
| **Kategoriler** | İşaretlediğiniz kategoriler, işaretleme sırasıyla. Hiçbiri seçilmezse **ana (kök) kategoriler** gösterilir |
| **En fazla** | Gösterilecek kategori sayısı: 1-24 (yeni bölümde 6) |

### Ürün Şeridi {#urun-seridi}

Bir ürün kaynağından şerit ya da ızgara oluşturur.

| Alan | Açıklama |
|---|---|
| **Ürün kaynağı** | Aşağıdaki tabloya bakın |
| **En fazla ürün** | 1-48 (yeni bölümde 10). **Seçili ürünler** kaynağında seçtiğiniz ürünlerin hepsi gösterilir |
| **Görünüm** | **Kayan şerit** ya da **Izgara** |
| **Kategori** | Kaynak "Bir kategoriden" ise zorunlu |
| **Marka** | Kaynak "Bir markadan" ise zorunlu |
| **Ürünler** | Kaynak "Seçili ürünler" ya da "Yeni ürünler" ise ürün seçici. Seçili ürünlerde en az bir ürün gerekir |

| Ürün kaynağı | Gösterilen ürünler | "Tümünü gör" bağlantısı |
|---|---|---|
| **Seçili ürünler** | Seçtiğiniz ürünler, sizin sıranızla | Gösterilmez |
| **Yeni ürünler (Excel + elle düzenleme)** | "Yeni ürünler" listesinin ilk N ürünü | Yeni Ürünler sayfası |
| **İndirimdeki ürünler** | Üstü çizili (karşılaştırma) fiyatı satış fiyatından yüksek ürünler, çok satandan aza | Kampanyalı Ürünler sayfası |
| **Çok satanlar** | Fiyatlı ürünler, satış adedine göre | Çok satanlara göre sıralı ürün listesi |
| **Bir kategoriden** | Seçilen kategori ve alt kategorilerindeki ürünler, çok satandan aza | Kategorinin sayfası |
| **Bir markadan** | Seçilen markanın ürünleri, çok satandan aza | Markanın sayfası |

Otomatik kaynaklarda (indirimdeki, çok satan, kategori, marka) stokta olan ürünler önce gelir.
Seçilen kategori silinmiş ya da marka pasifse bölüm gösterilmez.

#### Yeni ürünler listesi {#yeni-urunler-listesi}

"Yeni ürünler" kaynağı seçildiğinde **Ürünler** alanı sitenin tek **Yeni ürünler listesini**
gösterir:

- Liste, Excel ile aktarımda **"Yeni"** işaretli ürünlerle dolar; Excel'den yeni gelenler başa
  eklenir. Buradan ürün ekleyip çıkarabilirsiniz.
- Bu liste aynı zamanda ürün kartlarındaki **YENİ** rozetini ve **Yeni Ürünler** sayfasını
  belirler. Yani buradan çıkardığınız ürün rozeti de kaybeder.
- Şeritte listenin ilk **En fazla ürün** kadarı gösterilir.

Bkz. [Excel ile ürün aktarma](/satis/excel).

::: tip "Öne çıkan" işareti yoktur
Ürün, kategori ve marka formlarında "öne çıkan" işareti bulunmaz. Ana sayfada neyin öne çıkacağı
yalnız bu ekranda, bölümün kendi ayarında seçilir.
:::

### Marka Şeridi {#marka-seridi}

Marka logolarından kayan bir bant. Logoya tıklayan ziyaretçi markanın sayfasına gider. Başlığın
yanında **Tüm Markalar** bağlantısı çıkar.

| Alan | Açıklama |
|---|---|
| **Markalar** | İşaretlediğiniz aktif markalar. Hiçbiri seçilmezse aktif markalardan en çok 12'si gösterilir |

### Marka Vitrini (bant + ürünler) {#marka-vitrini}

Bir markanın geniş görsel bandı ve altında o markanın ürünleri. Bandın bağlantısı her zaman
markanın sayfasıdır.

| Alan | Açıklama |
|---|---|
| **Marka** | Zorunlu |
| **En fazla ürün** | 1-24 (yeni bölümde 10). Stoktakiler ve çok satanlar önce |
| **Bant görseli** | Önerilen 1920×400 px |

### Görsel Banner {#gorsel-banner}

Masaüstü ve mobil görseli olan, tıklanabilir tam genişlik banner.

| Alan | Açıklama |
|---|---|
| **Bağlantı** | Tıklanınca gidilecek adres, en çok 500 karakter (ör. `/urunler?sirala=indirim`) |
| **Masaüstü görseli** | Önerilen 1920×400 px. Yüklenmezse bölüm gösterilmez |
| **Mobil görsel** | Önerilen 800×800 px. Boşsa masaüstü görseli kullanılır |

### Kurumsal Teklif Alanı {#kurumsal-teklif-alani}

Kurumsal müşterileri teklif istemeye yönlendiren alan: başlık, metin, görsel, özellik maddeleri ve
iki düğme.

| Alan | Açıklama |
|---|---|
| **Üst etiket** | Başlığın üstündeki küçük yazı, en çok 64 karakter (yeni bölümde "KURUMSAL ÇÖZÜMLER") |
| **Metin** | Zengin metin editörü, en çok 20.000 karakter |
| **1. buton metni / bağlantısı** | Yeni bölümde "Kurumsal Teklif Al" → `/teklif-listesi`. Metin en çok 64, bağlantı en çok 500 karakter |
| **2. buton metni / bağlantısı** | Yeni bölümde "İletişim" → `/iletisim` |
| **Görsel** | Önerilen 800×600 px |
| **Özellikler › Maddeler** | En çok 8 madde. Her maddede **İkon**, **Başlık** (zorunlu, en çok 120 karakter), **Açıklama** (en çok 255 karakter) |

### Güven Bandı {#guven-bandi}

Kargo, güvenli ödeme, iade gibi kısa güven maddeleri.

| Alan | Açıklama |
|---|---|
| **Maddeler** | En çok 8 madde: **İkon**, **Başlık** (zorunlu, en çok 120 karakter), **Açıklama** (en çok 255 karakter). Madde yoksa bölüm gösterilmez |

**İkonlar:** Madde ekle'ye basınca ikon listesinden seçim yapılır (önizlemesiyle): boxes, network,
message-circle, wrench, badge-check, truck, lock, headset, shield-check, clock, phone, award, leaf,
factory, sparkles. **İkon yok** da seçilebilir.

### Serbest İçerik {#serbest-icerik}

Zengin metin editörüyle yazılan serbest alan (metin, bağlantı, görsel vb.).

| Alan | Açıklama |
|---|---|
| **İçerik** | En çok 100.000 karakter. Güvenlik için içerik kaydedilirken temizlenir. Çalıştırılabilir kodlar (script vb.) vitrine çıkmaz |

## Slider {#slider}

**İçerik › Slider** ana sayfanın en üstündeki slaytları yönetir. Başlıkta toplam slayt ve şu an
yayında olan slayt sayısı yazar.

**Slider ana sayfada gösterilsin**: ekranın üstündeki **Ana sayfada göster** anahtarı slider'ın
ana sayfada görünüp görünmeyeceğini belirler. Kapalıyken slaytlar korunur ama ana sayfada slider
çıkmaz.

| Sütun | Açıklama |
|---|---|
| **Sıra** | **Yukarı taşı** / **Aşağı taşı** okları |
| **Slayt** | Görsel ve başlık |
| **Yayın tarihi** | Başlangıç–bitiş ya da **Süresiz** |
| **Durum** | **Yayında** / **Yayında değil**. Anahtarla açılıp kapatılır |
| **İşlemler** | **Düzenle**, sil |

### Slayt alanları {#slayt-alanlari}

| Alan | Açıklama |
|---|---|
| **Başlık** | Zorunlu, en çok 255 karakter. Görselin alternatif metni olarak da kullanılır |
| **Alt başlık** | En çok 255 karakter |
| **Buton metni** | En çok 64 karakter (ör. "İncele") |
| **Bağlantı** | Slayta tıklanınca gidilecek adres, en çok 500 karakter |
| **Bağlantıyı yeni sekmede aç** | İşaretliyse bağlantı yeni sekmede açılır |
| **Masaüstü görseli** | Yeni slaytta zorunlu. Önerilen 1920×600 px, JPG/WebP, en çok 8 MB |
| **Mobil görsel (opsiyonel)** | Önerilen 800×800 px, en çok 4 MB. Boşsa masaüstü görseli kullanılır. Kaldırmak için **Mobil görseli kaldır** |
| **Yayın başlangıcı** | Tarih ve saat. Boşsa hemen |
| **Yayın bitişi** | Tarih ve saat. Başlangıçtan önce olamaz. Boşsa süresiz |
| **Durum** | **Aktif** / **Pasif** |

Bir slayt vitrinde ancak **Aktif** ise ve şu an yayın tarihleri arasındaysa görünür. Yayında
slayt kalmazsa slider alanı ana sayfada hiç gösterilmez.

### Nasıl yapılır? {#slider-nasil}

**Slayt eklemek**

1. **İçerik › Slider**'da **Yeni slayt**'a basın.
2. **Başlık** girin, **Masaüstü görseli**ni yükleyin. İsterseniz mobil görsel, buton metni ve
   bağlantı ekleyin.
3. **Kaydet**'e basın.
4. Slider ilk kez kullanılıyorsa üstteki **Ana sayfada göster** anahtarını açın.

**Belirli tarihlerde çalışan kampanya slaytı**: slaytı ekleyin, **Yayın başlangıcı** ve
**Yayın bitişi**ni girin. Slayt o tarihlerde kendiliğinden görünür ve kaybolur. Bitince silmenize
gerek yoktur.

**Silmek**: slaytın sil düğmesine basıp onaylayın. Görselleri kalıcı olarak silinir.
