# Raporlar

Raporlar, satışlarınızı, ürünlerinizi, müşterilerinizi, stoğunuzu, tekliflerinizi,
kampanyalarınızı ve iadelerinizi seçtiğiniz dönem için özetler. Her rapor ekranda incelenebilir
ve Excel'e aktarılabilir.

Raporlara yönetim panelinin sol menüsündeki **Raporlar** öğesinden ulaşılır (Kampanyalar'ın
hemen altında). **Raporlar**'a tıkladığınızda, görme yetkiniz olan ilk rapor açılır. Raporlar
sayfanın üstünde sekmeler halinde sıralanır; yalnızca yetkiniz olan raporların sekmesi görünür:

| Sekme | Rapor | Neyi gösterir |
|---|---|---|
| Satış | [Satış Raporu](#satis) | Ciro, sipariş sayısı, ortalama sepet, KDV |
| Ürün Satışları | [Ürün Satışları](#urun-satislari) | Ürün, kategori ya da marka bazında satılan adet ve tutar |
| Müşteri | [Müşteri Raporu](#musteri) | Müşteri ve bayi bazında sipariş ve ciro, yeni / tekrar eden müşteri |
| Stok | [Stok Raporu](#stok) | Stok adedi ve değeri, tükenen, kritik stoktaki ve satılmayan ürünler |
| Teklif | [Teklif Raporu](#teklif) | Teklif sayıları, onay ve siparişe dönüşme oranları |
| Kampanya | [Kampanya Raporu](#kampanya) | Kampanya bazında kullanım, müşteriye sağlanan kazanç ve ciro |
| İade | [İade Raporu](#iade) | İade talepleri, iade oranı, nedenler, en çok iade edilen ürünler |

Örneğin satış raporunun yolu: **Raporlar › Satış**.

## Rapor ekranının bölümleri {#ekran}

Her rapor yukarıdan aşağıya aynı düzendedir:

1. **Filtre çubuğu** — dönem ve rapora göre ek filtreler; sağda **Filtreleri temizle** ve
   **Excel'e aktar** düğmeleri.
2. **Dönem ve açıklama satırı** — filtre çubuğunun altında seçili tarih aralığı
   (ör. "08.10.2026 – 06.11.2026") ve raporun kısa açıklaması.
3. **Özet kutuları** — raporun ana göstergeleri.
4. **Grafik** — yalnızca Satış ve Teklif raporlarında.
5. **Kırılım tabloları** — küçük özet tablolar (ör. ödeme yöntemine göre).
6. **Ana tablo** — raporun ayrıntılı satırları; başlığının yanında toplam satır sayısı yazar.

### Filtreler {#filtreler}

| Filtre | Açıklama |
|---|---|
| Dönem | Hazır aralıklar: **Bugün**, **Son 7 gün**, **Son 30 gün**, **Bu ay**, **Geçen ay**, **Bu yıl**, **Özel aralık**. Varsayılan **Son 30 gün**dür. "Son 7 gün" ve "Son 30 gün" bugünü de içerir; "Bu ay" ve "Bu yıl" bugüne kadar olan kısımdır. |
| Başlangıç tarihi / Bitiş tarihi | Yalnızca **Özel aralık** seçildiğinde görünür. Başlangıç bitişten sonraysa ikisi yer değiştirir. Aralık en çok 1100 gün olabilir; daha uzunsa başlangıç, bitişten 1100 gün öncesine çekilir. |
| Gruplama | Yalnızca Ürün Satışları'nda: **Ürün bazında**, **Kategori bazında**, **Marka bazında**. |
| Müşteri | Satış, Ürün Satışları, Müşteri, Teklif, Kampanya ve İade raporlarında. Boşken **Müşteri: tümü**. Seçenekler: her bayi grubu için **Bayi: (grup adı)**. Vitrin modülü kuruluysa ayrıca **Bireysel müşteri**, **Misafir** ve **Tüm bayiler** seçenekleri çıkar. |
| Depo | Yalnızca Stok'ta. Boşken **Depo: tümü** (tüm depoların toplam stoğu). |
| Kategori | Ürün Satışları ve Stok'ta. Seçilen kategori **alt kategorileriyle birlikte** süzülür. |
| Marka | Ürün Satışları ve Stok'ta. |
| Stok durumu | Yalnızca Stok'ta: **Stokta olanlar**, **Kritik stoktakiler**, **Tükenenler**, **Dönemde satılmayanlar**. |
| Eşik ≤ | Yalnızca Stok'ta **Kritik stoktakiler** seçildiğinde görünür. Kendine özel kritik stok eşiği olmayan ürünler için kullanılacak eşiktir; varsayılanı **Stok Ayarları**'ndaki genel kritik stok eşiğidir. |

Hangi raporda hangi filtrenin olduğu:

| Rapor | Dönem | Müşteri | Gruplama | Depo | Kategori | Marka | Stok durumu |
|---|---|---|---|---|---|---|---|
| Satış | ✓ | ✓ | | | | | |
| Ürün Satışları | ✓ | ✓ | ✓ | | ✓ | ✓ | |
| Müşteri | ✓ | ✓ | | | | | |
| Stok | ✓ | | | ✓ | ✓ | ✓ | ✓ |
| Teklif | ✓ | ✓ | | | | | |
| Kampanya | ✓ | ✓ | | | | | |
| İade | ✓ | ✓ | | | | | |

**Nasıl yapılır? — Raporu süzmek**

1. **Raporlar**'a girin ve üstteki sekmeden raporu seçin.
2. Dönem kutusundan hazır bir aralık seçin ya da **Özel aralık** seçip başlangıç ve bitiş
   tarihlerini girin.
3. Gerekirse müşteri, depo, kategori, marka gibi diğer filtreleri seçin. Her seçimde rapor
   hemen yenilenir ve ana tablo ilk sayfaya döner.
4. Varsayılana dönmek için sağdaki **Filtreleri temizle** (geri ok simgesi) düğmesine basın. Bu
   düğme yalnızca varsayılandan farklı bir filtre seçiliyken görünür.

::: tip
Filtreler sayfanın adresine yazılır. Süzülmüş bir raporun adresini yer imlerine ekleyebilir ya da
yetkili bir çalışma arkadaşınıza gönderebilirsiniz.
:::

### Özet kutuları ve önceki döneme göre değişim {#degisim}

Özet kutularının çoğunda, değerin altında **önceki aynı uzunluktaki döneme göre** yüzde değişim
gösterilir. Önceki dönem, seçili dönemden hemen önce gelen ve aynı gün sayısına sahip dönemdir;
seçtiğiniz diğer filtreler (müşteri, kategori vb.) önceki döneme de uygulanır.

- Seçili dönem 1–30 Kasım (30 gün) ise önceki dönem 2–31 Ekim'dir (30 gün).
- Seçili dönem "Bugün" ise önceki dönem dündür.

Değişim = (bu dönem − önceki dönem) ÷ önceki dönem × 100, bir ondalıkla.

**Örnek:** Bu dönemin cirosu 120.000, önceki dönemin 100.000 ise değişim
(120.000 − 100.000) ÷ 100.000 × 100 = **%20** artıştır.

Önceki dönemin değeri sıfırsa değişim hesaplanamaz ve gösterilmez. Bazı kutularda (ör. ortalamalar,
stok kutuları) değişim hiç gösterilmez; bunlar aşağıda her raporun tablosunda belirtilmiştir.
Bazı kutuların altında küçük bir açıklama satırı da bulunur.

### Grafik {#grafik}

Satış ve Teklif raporlarında dönem grafiği vardır. Seçili dönem **92 gün ve daha kısaysa** grafik
günlük, **92 günden uzunsa** aylık gruplanır (ör. "Ekim 2026"). Hiç kayıt olmayan günler ya da aylar
grafikte sıfır olarak görünür. Satış raporunun ana tablosu da aynı kurala göre günlük ya da aylıktır.

### Kırılım tabloları ve ana tablo {#tablolar}

Kırılım tabloları raporun özetini farklı açılardan böler (ör. ödeme yöntemi, durum, depo). Kayıt
yoksa "Bu dönemde kayıt yok." yazar.

Ana tablo sayfalıdır: her sayfada **50 satır** gösterilir; altta sayfa geçişi vardır. Seçili dönem
ve filtrelerde veri yoksa "Kayıt yok" yazar.

### Hesaplama kuralları {#hesaplama}

- **Para birimi:** Tüm tutarlar **ana para birimine** çevrilerek gösterilir (bkz.
  [Para birimleri](/yonetim/para-birimleri)). Siparişlerde siparişin verildiği andaki kurlar
  kullanılır; sonradan kur değişse de rapor değişmez.
- **Ciro:** Siparişin genel toplamıdır (KDV ve kargo dahil, indirim düşülmüş). Ciroya
  **İptal Edildi** ve **Ödeme Başarısız** durumundaki siparişler ile **ödemesi iade edilmiş**
  siparişler **sayılmaz**. Diğer tüm durumlar (Ödeme Bekleniyor, Onay Bekliyor, Hazırlanıyor,
  Kargoya Verildi, Tamamlandı) sayılır. Başlangıç ekranındaki ciro da aynı tanımla hesaplanır.
- **Tarih:** Siparişler oluşturulma tarihine göre döneme girer; teklifler ve iade talepleri de
  kendi oluşturulma tarihlerine göre.
- **Misafir siparişler:** Hesabı olmayan (misafir) siparişler, müşteri sayılırken e-posta
  adresine göre tek müşteri kabul edilir.

## Excel'e aktarma {#excel}

Excel düğmesi, filtre çubuğunun sağındaki tablo simgesidir (üzerine gelince **Excel'e aktar**
yazar). Yalnızca o raporun Excel yetkisi olan kullanıcılara görünür.

**Nasıl yapılır?**

1. Raporu açın ve dönem ile filtreleri istediğiniz gibi ayarlayın.
2. **Excel'e aktar** düğmesine basın.
3. Dosya bilgisayarınıza iner. Dosya adı rapor adı ve dönemden oluşur, ör.
   `satis-raporu-20261008-20261106.xlsx`.

Excel ekrandakiyle **aynı filtrelerle** hazırlanır; ancak ana tablonun yalnızca o sayfası değil,
**tüm satırları** yazılır. Dosyada iki sayfa vardır:

| Sayfa | İçerik |
|---|---|
| Özet | Rapor adı, **Dönem**, **Oluşturma** (tarih ve saat); ardından **Gösterge**, **Değer**, **Önceki döneme göre %** sütunlarıyla özet kutuları; ardından her kırılım tablosu kendi başlığı ve sütunlarıyla. |
| (Ana tablonun başlığı) | Ana tablonun tüm satırları, ekrandaki sütunlarla. Sayfa adı ana tablonun başlığıdır (ör. "Günlük satışlar"); en çok 31 karakter. |

- Adet, tutar ve yüzdeler **sayı hücresi** olarak yazılır; Excel'de toplama, süzme ve sıralama
  yapabilirsiniz. Yüzdeler "12,5" gibi düz sayı olarak yazılır.
- Tarihler `gg.aa.yyyy`, tarih-saatler `gg.aa.yyyy ss:dd` biçimindedir.
- Grafik Excel'e aktarılmaz.

## Yetkiler {#yetkiler}

Raporlarda üç düzey yetki vardır:

| Yetki | Ne sağlar |
|---|---|
| Raporlar | Sol menüde **Raporlar** öğesini görmek ve rapor bölümüne girmek. |
| Her raporu görme (7 ayrı yetki) | O raporun sekmesini görmek ve raporu açmak. Raporlar yetkisini gerektirir. |
| Her raporun Excel'i (7 ayrı yetki) | O raporda **Excel'e aktar** düğmesi. O raporu görme yetkisini gerektirir. |

Böylece örneğin bir muhasebe çalışanına yalnızca Satış ve İade raporlarını, Excel'leriyle birlikte
açabilirsiniz. **Raporlar** yetkisi olup hiçbir raporu görme yetkisi olmayan kullanıcı menüye
tıkladığında erişim hatası alır. Super Admin tüm raporları görür. Yetkiler
**Yetkiler** ekranından rollere dağıtılır; bkz.
[Kullanıcılar, roller ve yetkiler](/yonetim/roller-yetkiler).

---

## Satış Raporu {#satis}

**Raporlar › Satış.** Seçili dönemdeki ciro, sipariş sayısı ve ortalama sepeti gösterir. Tutarlar
KDV ve kargo dahildir; ciroya sayılmayan siparişler [hesaplama kurallarında](#hesaplama)
anlatılmıştır.

**Filtreler:** Dönem, Müşteri.

### Özet kutuları

| Kutu | Açıklama | Değişim % |
|---|---|---|
| Ciro | Ciroya sayılan siparişlerin genel toplamlarının toplamı | Var |
| Sipariş | Ciroya sayılan sipariş sayısı | Var |
| Ortalama sepet | Ciro ÷ sipariş sayısı | Var |
| Kampanya indirimi | Bu siparişlerdeki indirim tutarlarının toplamı | Var |
| KDV | Bu siparişlerdeki KDV tutarlarının toplamı | Var |

**Örnek:** Dönemde 80 sipariş ve 120.000 ciro varsa ortalama sepet 120.000 ÷ 80 = **1.500**'dür.

### Grafik

**Günlük ciro** (dönem 92 günden uzunsa **Aylık ciro**): her gün ya da ay için ciro.

### Kırılım tabloları

| Tablo | Sütunlar | Not |
|---|---|---|
| Ödeme yöntemi | Yöntem, Sipariş, Ciro | Ciroya göre büyükten küçüğe. |
| Sipariş durumu (tümü) | Durum, Sipariş, Tutar | **Tüm** siparişleri gösterir; iptal edilen, ödemesi başarısız olan ve ödemesi iade edilen siparişler de burada sayılır (ciroya sayılmasalar da). Yedi durumun hepsi listelenir: Ödeme Bekleniyor, Onay Bekliyor, Hazırlanıyor, Kargoya Verildi, Tamamlandı, İptal Edildi, Ödeme Başarısız. |
| Müşteri tipi | Tip, Sipariş, Ciro | Tipler: Bayi, Bireysel müşteri, Misafir. |
| Para birimi | Para birimi, Sipariş, Tutar, TL karşılığı | **Tutar** siparişlerin kendi para birimindeki toplamı (ör. "1.234,50 USD"); **TL karşılığı** ana para birimine çevrilmiş toplamı. |

### Ana tablo — Günlük satışlar / Aylık satışlar

Dönem 92 günden uzunsa aylık, değilse günlük satırlar; **en yeni dönem en üstte**. Satış olmayan
günler / aylar da sıfırla listelenir.

| Sütun | Açıklama |
|---|---|
| Dönem | Gün (gg.aa.yyyy) ya da ay (ör. Ekim 2026) |
| Sipariş | O gün / ay ciroya sayılan sipariş sayısı |
| Ara toplam | Siparişlerin ara toplamları |
| İndirim | İndirim tutarları |
| KDV | KDV tutarları |
| Kargo | Kargo tutarları |
| Ciro | Genel toplamlar |

---

## Ürün Satışları {#urun-satislari}

**Raporlar › Ürün Satışları.** Ürün, kategori ya da marka bazında satılan adet ve tutarı gösterir.
Tutar, sipariş satırının **KDV dahil, kampanya indirimi düşülmüş** toplamıdır. Yalnızca ciroya
sayılan siparişlerin satırları hesaba girer.

**Filtreler:** Dönem, Gruplama, Müşteri, Kategori (alt kategorilerle), Marka.

### Özet kutuları

| Kutu | Açıklama | Değişim % |
|---|---|---|
| Satılan adet | Satırlardaki adetlerin toplamı | Var |
| Satış tutarı | Satır tutarlarının toplamı | Var |
| Satılan ürün çeşidi | Satılan farklı stok kodu sayısı | Var |
| Sipariş başına adet | Satılan adet ÷ bu ürünleri içeren sipariş sayısı (bir ondalık) | Yok |

Bu raporda grafik ve kırılım tablosu yoktur.

### Ana tablo

Başlık ve ilk sütunlar seçilen gruplamaya göre değişir; satırlar **tutara göre büyükten küçüğe**
sıralanır.

| Gruplama | Tablo başlığı | İlk sütunlar |
|---|---|---|
| Ürün bazında (varsayılan) | Ürün bazında satışlar | Ürün, Stok kodu, Kategori, Marka |
| Kategori bazında | Kategori bazında satışlar | Kategori, Ürün çeşidi |
| Marka bazında | Marka bazında satışlar | Marka, Ürün çeşidi |

Ardından her gruplamada aynı sütunlar gelir:

| Sütun | Açıklama |
|---|---|
| Adet | Satılan toplam adet |
| Sipariş | Bu satırı içeren sipariş sayısı |
| Tutar | Satış tutarı |
| Pay | Bu satırın tutarının, dönemin (filtrelere göre) toplam satış tutarı içindeki yüzdesi |

- Ürün bazında satırlar **stok koduna** göre birleştirilir.
- Kategorisi olmayan ürünler **Kategorisiz**, markası olmayanlar **Markasız** satırında toplanır.
- **Ürün çeşidi**, o kategori / markada satılan farklı stok kodu sayısıdır.

**Örnek:** Dönemin toplam satış tutarı 200.000, bir kategorinin tutarı 50.000 ise o kategorinin
payı **%25**'tir.

---

## Müşteri Raporu {#musteri}

**Raporlar › Müşteri.** Müşteri ve bayi bazında sipariş ve ciroyu, yeni ve tekrar eden müşterileri
gösterir. Yalnızca ciroya sayılan siparişler hesaba girer. Misafir siparişler e-posta adresine göre
gruplanır.

**Filtreler:** Dönem, Müşteri.

### Özet kutuları

| Kutu | Açıklama | Değişim % |
|---|---|---|
| Alışveriş yapan müşteri | Dönemde en az bir siparişi olan farklı müşteri sayısı (hesap; hesap yoksa e-posta) | Var |
| Yeni müşteri | İlk (ciroya sayılan) siparişi bu dönemde olan müşteriler. Alt not: "İlk siparişi bu dönemde" | Var |
| Tekrar eden müşteri | Alışveriş yapan − yeni müşteri. Alt not: "Daha önce de sipariş vermiş" | Var |
| Müşteri başına ciro | Ciro ÷ alışveriş yapan müşteri sayısı | Yok |
| Bayi cirosu payı | Bayi hesaplarının cirosunun toplam ciro içindeki yüzdesi | Yok |

**Örnek:** Dönemde 40 müşteri alışveriş yaptı ve bunların 10'unun ilk siparişi bu dönemde ise
Yeni müşteri 10, Tekrar eden müşteri 40 − 10 = **30**'dur.

### Kırılım tabloları

| Tablo | Sütunlar | Not |
|---|---|---|
| Müşteri tipi | Tip, Müşteri, Sipariş, Ciro | Tipler: Bayi, Bireysel müşteri, Misafir. |
| Bayi grupları | Grup, Bayi, Sipariş, Ciro | Yalnızca bayi hesapları. Gruba atanmamış bayiler **Grupsuz** satırındadır. |

### Ana tablo — Müşteriler (ciroya göre)

Satırlar **ciroya göre büyükten küçüğe** sıralanır.

| Sütun | Açıklama |
|---|---|
| Müşteri | Hesap adı; misafirde siparişteki müşteri adı |
| E-posta | Siparişteki e-posta adresi |
| Tip | Bayi, Bireysel müşteri ya da Misafir |
| Bayi grubu | Bayinin grubu |
| Sipariş | Dönemdeki sipariş sayısı |
| Ciro | Dönemdeki ciro |
| Ort. sepet | Ciro ÷ sipariş |
| Son sipariş | Dönemdeki son siparişin tarihi |

---

## Stok Raporu {#stok}

**Raporlar › Stok.** Stok adedini ve değerini, tükenen ve kritik stoktaki ürünleri, dönem içinde
hiç satılmayan ürünleri gösterir. Yalnızca **stok takibi yapılan** (ve silinmemiş) ürünler rapora
girer. Stok bilgisi bkz. [Stok](/stok/).

**Filtreler:** Dönem, Depo, Kategori (alt kategorilerle), Marka, Stok durumu (ve Kritik
stoktakiler seçiliyken Eşik ≤).

::: info Dönem bu raporda neyi etkiler?
Stok adetleri ve değerleri **bugünkü** durumdur; seçili dönem yalnızca "dönemde satış" ve "dönemde
satılmayan" hesaplarını etkiler.
:::

- **Depo** seçiliyse o deponun stoğu, seçili değilse ürünün toplam stoğu kullanılır.
- **Stok değeri** = stok × satış fiyatı (KDV hariç). Fiyatı başka para biriminde olan ürünler
  **para biriminin güncel kuruyla** ana para birimine çevrilir. Stoğu sıfır ya da eksi olan ürünlerin
  değeri sıfır sayılır.

**Örnek:** Satış fiyatı 10 USD olan bir ürün, USD kuru 40 TL iken 25 adet stoktaysa birim fiyat
400 TL, stok değeri 25 × 400 = **10.000 TL**'dir.

### Özet kutuları

Bu raporun kutularında değişim yüzdesi gösterilmez.

| Kutu | Açıklama |
|---|---|
| Toplam stok | Stoğu sıfırdan büyük ürünlerin stok adetleri toplamı. Alt not: kaç stok takipli ürün olduğu (ör. "1.250 stok takipli ürün") |
| Stok değeri | Stok değerlerinin toplamı. Alt not: "Satış fiyatıyla, KDV hariç" |
| Tükenen | Stoğu sıfır ya da eksi olan ürün sayısı |
| Kritik stokta | Stoğu sıfırdan büyük ama kritik stok eşiğinde ya da altında olan ürün sayısı. Eşik, üründe tanımlı kritik stok eşiğidir; yoksa **Eşik ≤** değeri (varsayılanı Stok Ayarları'ndaki genel eşik) |
| Dönemde satılmayan | Stokta olup seçili dönemde hiç satılmayan (ciroya sayılan siparişlerde yer almayan) ürün sayısı. Alt not: "Stokta olup hiç satılmayan" |

### Kırılım tabloları

| Tablo | Sütunlar | Not |
|---|---|---|
| Depolar | Depo, Ürün çeşidi, Adet, Değer | Her deponun stoğu olan ürünleri; değere göre büyükten küçüğe. Depo filtresinden etkilenmez, kategori ve marka filtresinden etkilenir. |
| Lokasyonlar | Lokasyon, Ürün çeşidi, Adet | Yalnızca bir **depo seçiliyken** görünür; o deponun raf / lokasyonları kod sırasıyla. Lokasyona yerleştirilmemiş stok **Atanmamış** satırındadır. |

### Ana tablo

Başlık Stok durumu filtresine göre değişir:

| Stok durumu | Tablo başlığı | Hangi ürünler | Sıralama |
|---|---|---|---|
| (seçili değil) | Ürünler (stok değerine göre) | Tüm stok takipli ürünler | Stok değeri büyükten küçüğe |
| Stokta olanlar | Stokta olanlar | Stoğu sıfırdan büyük | Stok değeri büyükten küçüğe |
| Kritik stoktakiler | Kritik stoktakiler | Stoğu sıfırdan büyük ve eşikte / altında | Stok adedi küçükten büyüğe |
| Tükenenler | Tükenenler | Stoğu sıfır ya da eksi | Son satışı en yeni olan üstte |
| Dönemde satılmayanlar | Dönemde satılmayanlar | Stokta olup dönemde satılmayan | Stok değeri büyükten küçüğe |

Eşit olanlar ürün adına göre sıralanır.

| Sütun | Açıklama |
|---|---|
| Ürün | Ürün adı |
| Stok kodu | Ürünün stok kodu |
| Kategori | Ürünün kategorisi |
| Marka | Ürünün markası |
| Stok | Toplam ya da seçili deponun stoğu |
| Birim fiyat | Satış fiyatı, KDV hariç, ana para biriminde |
| Stok değeri | Stok × birim fiyat (stok sıfır ya da eksiyse 0) |
| Dönemde satış | Seçili dönemde satılan adet |
| Son satış | Ürünün dönemden bağımsız en son satıldığı tarih |

---

## Teklif Raporu {#teklif}

**Raporlar › Teklif.** Dönemde açılan teklifleri (müşteri talepleri ve yönetici teklifleri), müşteri
onayı ve siparişe dönüşme oranlarını, fiyatlandırma süresini gösterir. Teklifler **oluşturulma
tarihine** göre döneme girer; **taslak** teklifler sayılmaz. Teklif ayrıntıları için bkz.
[Teklifler](/satis/teklifler).

**Filtreler:** Dönem, Müşteri.

Teklif tutarları teklifte kayıtlı kurla ana para birimine çevrilir (ana para birimi TL değilse ana
birimin güncel kuru kullanılır).

### Özet kutuları

| Kutu | Açıklama | Değişim % |
|---|---|---|
| Teklif | Dönemde açılan teklif sayısı | Var |
| Onaylanan | Durumu **Onaylandı** ya da **Siparişe dönüştü** olan teklifler. Alt not: "Onay oranı %…" (onaylanan ÷ teklif) | Var |
| Siparişe dönüşen | Siparişe bağlanmış teklifler. Alt not: "Dönüşüm oranı %…" (siparişe dönüşen ÷ teklif) | Var |
| Onaylanan tutar | Onaylanan tekliflerin toplam tutarı | Var |
| Ort. fiyatlandırma süresi (saat) | Müşteri taleplerinde, talebin geldiği andan teklifin müşteriye gönderildiği ana kadar geçen ortalama süre (saat, bir ondalık). Alt not: "Talepten müşteriye gönderime". Yalnızca müşteriye gönderilmiş müşteri talepleri hesaba girer | Yok |

**Örnek:** Dönemde 50 teklif gelmiş, 20'si onaylanmış ve 15'i siparişe dönüşmüşse onay oranı
%40, dönüşüm oranı **%30**'dur.

### Grafik

**Günlük teklifler** (dönem 92 günden uzunsa **Aylık teklifler**): sütun grafikte iki seri —
**Gelen** ve **Onaylanan**.

### Kırılım tablosu — Teklif durumu

Sütunlar: Durum, Teklif, Tutar. Taslak dışındaki tüm durumlar listelenir: **Fiyat bekliyor**,
**Revize istendi**, **Yanıt bekliyor**, **Onaylandı**, **Siparişe dönüştü**, **Reddedildi**,
**İptal edildi**.

### Ana tablo — Dönemdeki teklifler

Satırlar **en yeni teklif en üstte** sıralanır.

| Sütun | Açıklama |
|---|---|
| Teklif no | Teklif numarası |
| Tarih | Teklifin oluşturulma tarihi ve saati |
| Müşteri | Firma varsa "Firma (Ad Soyad)", yoksa ad soyad |
| Durum | Teklifin durumu |
| Tutar | Teklifin genel toplamı, ana para biriminde |
| Kaynak | **Müşteri talebi** ya da **Yönetici** |
| Fiyatlama (saat) | Yalnızca müşteri taleplerinde: talepten müşteriye gönderime kadar geçen süre |
| Sipariş no | Teklif siparişe dönüştüyse siparişin numarası |

---

## Kampanya Raporu {#kampanya}

**Raporlar › Kampanya.** Kampanya bazında kullanımı, müşteriye sağlanan kazancı ve kampanyalı
siparişlerin cirosunu gösterir. Yalnızca ciroya sayılan siparişler hesaba girer. Kampanyalar için
bkz. [Kampanyalar](/musteriler/kampanyalar).

**Filtreler:** Dönem, Müşteri.

### Özet kutuları

| Kutu | Açıklama | Değişim % |
|---|---|---|
| Kampanyalı sipariş | Kampanya uygulanmış sipariş sayısı. Alt not: "%… sipariş" (tüm siparişler içindeki payı) | Var |
| Verilen indirim | Kampanyalı siparişlerdeki indirim tutarlarının toplamı | Var |
| Kampanyalı ciro | Kampanyalı siparişlerin cirosu | Var |
| Ort. sepet (kampanyalı) | Kampanyalı ciro ÷ kampanyalı sipariş. Alt not: "Kampanyasız: …" (kampanyasız siparişlerin ortalama sepeti) | Yok |

**Örnek:** Dönemde 200 sipariş var, 50'sinde kampanya uygulanmışsa alt notta "%25 sipariş" yazar.
Bu 50 siparişin cirosu 100.000 ise kampanyalı ortalama sepet **2.000**'dir; kampanyasız 150
siparişin cirosu 225.000 ise alt notta "Kampanyasız: 1.500" görünür.

Bu raporda grafik ve kırılım tablosu yoktur.

### Ana tablo — Kampanyalar (kullanıma göre)

Satırlar **kullanım sayısına göre** (eşitse ciroya göre) büyükten küçüğe sıralanır.

| Sütun | Açıklama |
|---|---|
| Kampanya | Kampanyanın adı |
| İşlem | Kampanyanın işlem türü (kampanya silinmişse boş) |
| Kullanım | Kampanyanın uygulandığı sipariş sayısı |
| Müşteri | Kampanyayı kullanan farklı müşteri sayısı (hesap; hesap yoksa e-posta) |
| Kazanç | Kampanyanın müşteriye sağladığı toplam kazanç: indirim, hediye ve kargo kazancı; sipariş anında ana para biriminde kaydedilen değer |
| Ciro | Bu kampanyanın uygulandığı siparişlerin cirosu |
| Ort. sepet | Ciro ÷ kullanım |
| Son kullanım | Kampanyanın dönemdeki son kullanıldığı tarih |

- Bir siparişte **birlikte uygulanan kampanyaların her biri kendi satırında** sayılır. Bu yüzden
  aynı sipariş birden çok satırın Kullanım ve Ciro sütununa girebilir; satırların cirolarını
  toplamak kampanyalı ciroyu vermez.
- **Silinmiş bir kampanya**, kullanım kaydındaki adıyla tabloda görünmeye devam eder; yalnızca
  İşlem sütunu boş kalır.
- Özet kutusundaki **Verilen indirim** siparişlerdeki indirim tutarıdır; tablodaki **Kazanç** ise
  hediye ve kargo kazancını da içerir. Bu yüzden ikisi farklı olabilir.

---

## İade Raporu {#iade}

**Raporlar › İade.** İade taleplerini, iade oranını, iade edilen tutarı, nedenleri ve en çok iade
edilen ürünleri gösterir. İade talepleri **talebin oluşturulma tarihine** göre döneme girer. İade
süreci için bkz. [İadeler](/satis/iadeler).

**Filtreler:** Dönem, Müşteri.

### Özet kutuları

| Kutu | Açıklama | Değişim % |
|---|---|---|
| İade talebi | Dönemde açılan iade talebi sayısı | Var |
| İade oranı | İade talebi ÷ dönemde ciroya sayılan sipariş sayısı × 100. Alt not: "Talep / dönemdeki sipariş" | Var |
| İade edilen adet | Taleplerdeki ürün adetlerinin toplamı | Var |
| İade tutarı | Taleplere girilen iade tutarlarının toplamı (siparişin kuruyla ana para birimine çevrilir). Alt not: "Girilen iade tutarları" | Var |
| Bekleyen | Durumu **Beklemede** olan talep sayısı | Yok |

**Örnek:** Dönemde 400 sipariş ve 12 iade talebi varsa iade oranı 12 ÷ 400 × 100 = **%3**'tür.

### Kırılım tabloları

| Tablo | Sütunlar | Satırlar |
|---|---|---|
| İade nedeni | Neden, Talep | Hasarlı / kusurlu ürün, Yanlış ürün gönderildi, Vazgeçtim, Diğer |
| İade durumu | Durum, Talep | Beklemede, Onaylandı, Reddedildi, Ürün Teslim Alındı, İade Tamamlandı |

Her iki tabloda da tüm nedenler / durumlar, talep olmasa bile sıfırla listelenir.

### Ana tablo — En çok iade edilen ürünler

Ürünler stok koduna göre birleştirilir; satırlar **iade adedine göre büyükten küçüğe** sıralanır.

| Sütun | Açıklama |
|---|---|
| Ürün | Ürün adı |
| Stok kodu | Ürünün stok kodu |
| İade adedi | Dönemdeki taleplerde iade edilen toplam adet |
| Talep | Bu ürünü içeren talep sayısı |
| Dönemde satış | Aynı dönemde (aynı müşteri filtresiyle) ciroya sayılan siparişlerde satılan adet |
| İade / satış | İade adedi ÷ dönemde satış × 100; dönemde satış yoksa boş |

::: tip
İade / satış oranı, talebin açıldığı dönemdeki satışla karşılaştırır. Ürün önceki bir dönemde
satılıp bu dönemde iade edildiyse "Dönemde satış" düşük ya da boş görünebilir; uzun bir dönem
seçmek daha anlamlı bir oran verir.
:::
