# Müşteri deneyimi

Bu sayfa, ziyaretçi ve müşterilerinizin vitrinde gördüklerini sayfa sayfa anlatır: ne
gördüklerini, neyin nereden geldiğini ve hangi kurallarla çalıştığını. Ayarlar için
[Vitrin ayarları](/vitrin/ayarlar), içerik için [İçerik yönetimi](/vitrin/icerik-yonetimi).

## Üst bilgi {#ust-bilgi}

Her sayfanın üstünde:

| Parça | Açıklama | Nereden gelir |
|---|---|---|
| Duyuru bandı | Kayan duyurular | **İçerik › Üst & Alt Bilgi** |
| Logo | Ana sayfaya götürür | **Ayarlar › Genel Ayarlar** |
| Arama kutusu | "Aramak istediğiniz ürünü, markayı ya da stok kodunu yazınız" | Bkz. [Arama](#arama) |
| Hesap bağlantısı | Ziyaretçide **Giriş Yap**, giriş yapmışsa kişinin adı. Müşteriyi Hesabım'a, bayiyi bayi paneline götürür | — |
| **Teklif Listem** | Listedeki ürün sayısıyla | Bkz. [Teklif listesi](#teklif-listesi) |
| **Sepetim** | Sepetteki ürün sayısıyla | Bkz. [Sepet](#sepet) |
| **Tüm Kategoriler** | Açılır kategori menüsü | **İçerik › Menüler › Kategori Menüsü** |
| Üst menü | Menü öğeleri | **İçerik › Menüler › Ana Menü** |
| Para birimi seçici | Yalnız birden fazla para birimi aktifse | **Ayarlar › Tanımlamalar › Para Birimleri** |

Mobilde menü, kategoriler ve hesap bağlantıları açılır menüde toplanır. Alt bilginin içeriği için
bkz. [Alt bilgide neler görünür?](/vitrin/icerik-yonetimi#alt-bilgi-icerigi).

## Arama {#arama}

- Arama için **en az 3 karakter** gerekir.
- Yazarken öneri kutusu açılır: en çok 8 ürün (görsel, marka, stok kodu, fiyat), adı eşleşen en çok
  4 kategori ve 4 marka. **Tüm sonuçları gör (N)** tüm sonuç listesini açar.
- Ürün **adı**, **stok kodu**, **model numarası**, **barkod** ve ürün formundaki **arama
  kelimeleri** içinde aranır. Birden fazla kelime yazılırsa her kelimenin geçtiği ürünler
  bulunur.
- Öneri kutusunda stok kodu ya da adı aranan ifadeyle **başlayan** ürünler önce gelir.
- Arama sonuç sayfası (`/arama?q=…`) normal ürün listesi gibi filtrelenir ve sıralanır.
- Yalnız kişinin görebileceği ürünler aranır ("Bayi" ürünleri ziyaretçi aramasında çıkmaz).

## Ürün listeleri {#urun-listeleri}

Tüm Ürünler, Kampanyalı Ürünler, Yeni Ürünler, kategori, marka ve arama sayfaları aynı liste
düzenini kullanır: solda filtreler, üstte toplam ürün sayısı ve sıralama, sayfa başına **24 ürün**.

| Liste | İçerik |
|---|---|
| **Tüm Ürünler** | Kişinin görebildiği tüm ürünler |
| **Kampanyalı Ürünler** | Üstü çizili fiyatı olan ürünler **ve** şu an yayında, kişiye uygun bir kampanyanın kapsadığı ürünler (kupon kodlu kampanyalar hariç) |
| **Yeni Ürünler** | "Yeni ürünler" listesindeki ürünler, varsayılan olarak o listenin sırasıyla (bkz. [Yeni ürünler listesi](/vitrin/ana-sayfa#yeni-urunler-listesi)) |
| Kategori sayfası | Kategori ve tüm alt kategorilerindeki ürünler; kategorinin açıklaması ve kategori yolu (breadcrumb) |
| Marka sayfası | Markanın ürünleri; marka logosu ve açıklaması. Marka filtresi gösterilmez |

**Kategoriler** (`/kategoriler`) sayfası ana kategorileri görselleri, ürün sayıları ve alt
kategorileriyle; **Markalar** (`/markalar`) sayfası aktif markaları logoları ve ürün sayılarıyla
listeler.

### Filtreler ve sıralama {#filtreler}

| Filtre | Açıklama |
|---|---|
| **Kategoriler** | Birden çok seçilebilir; alt kategoriler dahil |
| **Fiyat Aralığı** | Hazır aralıklar (0–25, 25–50, … 25.000–50.000, 50.000+), ziyaretçinin seçtiği para biriminde, KDV gösterimine ve bayi indirimine göre. Fiyatı gösterilmeyen (teklif) ürünler bu filtreye girmez |
| **Markalar** | Birden çok seçilebilir |
| **Ürün Durumu** | **Yeni ürünler**, **Kampanyalı ürünler**, **Teklif ile satılanlar** |
| **Yalnızca stoktakiler** | Stoğu biten ürünleri gizler |

- Her seçeneğin yanındaki sayı, **diğer filtreler uygulanmış haliyle** hesaplanır.
- Ürün Durumu'nda yalnız sonucu gerçekten daraltan seçenekler görünür (ör. listedeki tüm ürünler
  yeniyse "Yeni ürünler" çıkmaz). Yeni Ürünler sayfasında "Yeni", Kampanyalı Ürünler sayfasında
  "Kampanyalı" seçeneği gösterilmez.
- **Filtreleri temizle** tüm seçimleri kaldırır. Sonuç yoksa "Aradığınız kriterlere uygun ürün
  bulunamadı." yazar ve iletişim sayfasına bağlantı verilir.

**Sırala:** **Önerilen** (varsayılan: stoktakiler önce, sonra ürün sırası ve satış adedi), **Fiyat
(Artan)**, **Fiyat (Azalan)**, **En Yeniler**, **Çok Satanlar**, **Ürün Adı (A-Z)**. Fiyat
sıralamasında farklı para birimindeki ürünler TL karşılığına göre sıralanır; fiyatı gösterilmeyen
ürünler sona kalır.

### Ürün kartı {#urun-karti}

Listelerde ve ana sayfa şeritlerinde her ürün bir kartla gösterilir:

- Görsel, marka, ürün adı, **Kod: stok kodu**.
- Fiyat (KDV hariç gösterimde yanında **+KDV**); üstü çizili fiyat ve **%** indirim etiketi.
  İndirim bayi indiriminden geliyorsa etiket **Bayi %…** olur.
- Kampanya varsa kampanya etiketi (ör. "2 Al 1 Öde") ve **Sepette** kampanyalı fiyat.
- **YENİ** ve **Ücretsiz Kargo** rozetleri (ürün formundaki işaretlere göre).
- Düğme: **Sepete Ekle**, fiyatı olmayan ya da yalnız teklifle satılan üründe **Teklif Al**;
  stoğu biten üründe **Stokta Yok**. Fiyatsız ürünlerde fiyat yerine "Fiyat için teklif alın"
  yazar.

## Ürün sayfası {#urun-sayfasi}

| Bölüm | İçerik |
|---|---|
| Görseller | Ürünün tüm görselleri, büyük görsel ve küçük resimler |
| Başlık alanı | Marka, ad, **Stok Kodu**, **Model**, stok durumu (**Stokta** / **Stokta yok**), kargo süresi ("N iş gününde kargoda"), **Ücretsiz Kargo** |
| Fiyat | Gösterim fiyatı; KDV dahil gösterimde KDV hariç fiyat da yazar. Kampanya varsa "Kampanyayla sepette …" |
| Not ve öne çıkanlar | Ürün formundaki ürün notu ve öne çıkan maddeler |
| Adet ve düğmeler | **Adet** (azalt / arttır), **Sepete Ekle**, **Teklif Al** |
| Güven maddeleri | "Orijinal ürün, yetkili satıcı", "256 bit SSL güvenli ödeme", "Toplu alımlarda özel teklif" (sabit metin) |
| **Ürün Açıklaması** | Ürün formundaki açıklama |
| **Ürün Bilgileri** | Stok Kodu, Model, Barkod, Marka, Birim, desi, **KDV Oranı** (dolu olanlar) |
| **Benzer Ürünler** | Aynı kategoriden (kategori yoksa aynı markadan) en çok 12 ürün, stoktakiler ve çok satanlar önce |

**Adet kuralları:**

- Adet kutusu ürünün **en az sipariş adedinden** başlar; altına inilmez.
- Ürünün **en fazla sipariş adedi** varsa "Bu üründen en fazla N adet sipariş verilebilir." yazar.
- Stok yetmezse "… için yeterli stok yok (mevcut: N). Daha fazla adet için teklif
  isteyebilirsiniz." uyarısı çıkar.
- Yalnız teklifle satılan ya da fiyatı olmayan ürün sepete eklenmez; **Teklif Al** ile teklif
  listesine eklenir.

Sepete eklenince sayfanın üstünde "… sepete eklendi." bildirimi ve **Sepete Git** bağlantısı
çıkar. Ürün sayfaları arama motorları için ürün, fiyat ve stok bilgisini de içerir.

## Sepet {#sepet}

**Sepetim** (`/sepet`):

- Her satırda ürün, **Kod**, birim fiyat, adet (azalt / artır, ya da yazarak), satır tutarı ve
  çıkarma düğmesi. Adet değişikliği anında kaydedilir.
- Adet en az sipariş adedinin altına inmez, en fazla sipariş adedini aşmaz; stok yetmezse adet
  stoğa düşürülür ve "… için en fazla N adet eklenebilir." uyarısı çıkar.
- Kampanyayla gelen ücretsiz ürün **Hediye** olarak, kampanyanın uygulandığı satır ve
  **Uygulanan kampanya** adı gösterilir. Sepete birden çok kampanya uyuyorsa "en avantajlı olan
  uygulandı" notu çıkar.
- Kampanyaya az kalmışsa "… daha ekleyin, "…" kampanyasından yararlanın." önerisi görünür.
- **Kupon kodu** kutusu (bkz. [Kupon kodu](/vitrin/ayarlar#kupon-kodu)).
- **Sipariş Özeti:** Ara Toplam (KDV hariç), Kampanya indirimi (KDV hariç), KDV, Kargo (toplam
  desiyle), **Genel Toplam**.
- **Siparişi Tamamla** ödeme ekranına geçirir. Kargo ücreti ödeme adımında seçilen kargo firmasına
  ve sepetin desisine göre kesinleşir.

Sepette yalnız teklifle satılan ya da stoğu yetersiz ürün kaldıysa sipariş tamamlanamaz; müşteriye
bu ürünleri çıkarması ya da teklif listesine eklemesi söylenir.

## Ödeme {#odeme}

**Ödeme** (`/odeme`) ekranı hem üyeler hem misafirler içindir. Sağda sipariş özeti, solda
numaralı adımlar vardır.

### 1. İletişim Bilgileri

| Alan | Açıklama |
|---|---|
| **E-posta** | Zorunlu. Sipariş e-postaları ve misafirin sipariş bağlantısı buraya gider |
| **Cep Telefonu** | Zorunlu, en az 10 karakter |

### 2. Teslimat Adresi

| Alan | Açıklama |
|---|---|
| **Kayıtlı teslimat adreslerim** | Üye müşteride kayıtlı adresler; **Yeni adres gir** ile yeni adres yazılır |
| **Teslim Alacak Kişi** | Zorunlu |
| **Telefon** | İsteğe bağlı |
| **Adres** | Zorunlu, en çok 500 karakter |
| **İl** / **İlçe** | Listeden seçilir, zorunlu |
| **Posta Kodu** | İsteğe bağlı |

### 3. Fatura Bilgileri

| Alan | Açıklama |
|---|---|
| **Fatura adresim teslimat adresimle aynı** | İşaretliyse fatura adresi olarak teslimat adresi kullanılır (sipariş iki adresi ayrı ayrı saklar) |
| **Kayıtlı fatura adreslerim** | Üye müşteride kayıtlı fatura adresleri |
| **Bireysel / Kurumsal** | Fatura tipi |
| **Ad Soyad** | Zorunlu |
| **Firma Ünvanı**, **Vergi Dairesi**, **Vergi Numarası** | Kurumsalda zorunlu (vergi numarası en çok 20 karakter) |
| **T.C. Kimlik No (isteğe bağlı)** | Girilirse 11 hane |
| **Fatura Adresi**, **İl**, **İlçe**, **Posta Kodu** | Fatura adresi teslimattan farklıysa |
| **Yeni adresleri Adreslerim'e kaydet** | Yalnız üye müşteride, yeni adres girildiyse. Teslimat ve fatura adresi ayrı ayrı kaydedilir |

### 4. Kargo Firması

Aktif kargo firmaları, tahmini teslim süresi ("Tahmini N iş günü") ve sepetin desisine göre
hesaplanan ücretle listelenir. Kargo firması tanımlı değilse bu adım görünmez. Bkz.
[Kargo](/satis/kargo).

### 5. Ödeme Yöntemi

Ödeme ekranında yalnız o an kullanılabilir yöntemler listelenir:

| Yöntem | Ne zaman görünür |
|---|---|
| **Havale / EFT** | Havale açıksa ve en az bir aktif banka hesabı varsa. Havale indirimi tanımlıysa "Havale indirimi (%…)" ve indirimli **Ödenecek tutar** gösterilir |
| **Kartla ödeme** | Kart ödeme modülü (ör. PayTR, iyzico) kurulu ve açıksa. Taksit seçenekleri bilgi amaçlı gösterilir; seçilince düğme **Ödemeye Geç** olur ve ödeme sağlayıcının sayfasına gidilir |
| **Cari hesaba (vadeli)** | Yalnız vadeli çalışan hesaplarda (genellikle bayiler) |

Hiç yöntem yoksa "Şu anda kullanılabilir ödeme yöntemi yok. Lütfen bizimle iletişime geçin."
yazar. Bkz. [Havale ve ödeme bildirimi](/cari/havale), [Kartla ödeme](/cari/kartla-odeme).

### Not ve onay

- **Sipariş Notu** — isteğe bağlı, en çok 2.000 karakter.
- Sözleşme onayı: **Ayarlar › Tanımlamalar › Sözleşmeler**'de **Ödeme formunda göster**
  işaretli aktif sözleşme varsa zorunlu bir onay kutusu çıkar, ör. "**Satış Sözleşmesi** ve
  **KVKK Aydınlatma Metni** metinlerini okudum, onaylıyorum." Her sözleşme adı metni bir
  pencerede açan bir bağlantıdır. İşaretli sözleşme yoksa onay kutusu çıkmaz (bkz.
  [Tanımlamalar › Sözleşmeler](/yonetim/tanimlamalar#sozlesmeler)).
- **Siparişi Onayla** (kartta **Ödemeye Geç**) siparişi oluşturur.

### Sipariş sonrası {#siparis-sonrasi}

Sipariş verilince müşteri **sipariş sayfasına** yönlendirilir ve "Siparişiniz alındı. Sipariş
numaranız: …" mesajını görür. Bu sayfa giriş gerektirmez; aynı bağlantı sipariş e-postasında da
vardır. Sayfada:

- Sipariş numarası ve **Ödeme** durumu.
- Havale / EFT seçildiyse **Havale / EFT bilgileri**: banka hesaplarınız ve açıklamaya sipariş
  numarasını yazma hatırlatması.
- **Kargo** firması ve **Takip No** (kargoya verilince eklenir).
- Ürünler, **Fatura Adresi**, **Teslimat Adresi**, **Sipariş Geçmişi** ve tutarlar.

Kartla ödemede müşteri önce ödeme sağlayıcısının sayfasına gider, ödemeden sonra sipariş sayfasına
döner. Sepette girilen kupon kodu sipariş verilince silinir.

## Teklif listesi {#teklif-listesi}

Fiyatı gösterilmeyen, yalnız teklifle satılan ya da toplu alım yapılacak ürünler için müşteri
**Teklif Al** ile ürünü **Teklif Listem**'e (`/teklif-listesi`) ekler. Eklenince "… teklif
listenize eklendi." bildirimi ve **Teklif Listesine Git** bağlantısı çıkar.

Teklif Listem'de ürünler ve adetleri düzenlenir, yanında **Teklif Talebi** formu vardır:

| Alan | Misafir | Üye müşteri |
|---|---|---|
| **Ad Soyad** | Zorunlu | Hesap bilgilerinden gelir |
| **Firma** | İsteğe bağlı | Hesap bilgilerinden |
| **E-posta** | Zorunlu | Hesap bilgilerinden |
| **Telefon** | Zorunlu | Hesap bilgilerinden |
| **Şehir** | İsteğe bağlı | — |
| **Notunuz** | İsteğe bağlı, en çok 2.000 karakter (ör. teslim yeri, istenen tarih, alternatif ürün) | Aynı |
| KVKK onayı | Zorunlu: "**KVKK Aydınlatma Metni**'ni okudum…" | Gerekmez |

Üye müşteri bilgilerini **Bilgilerimi düzenle** bağlantısından değiştirir. **Teklif İste**
talebi gönderir:

- **Misafir** "Teklif talebiniz alındı" sayfasını görür (**Talebi Görüntüle**, **Alışverişe Devam
  Et**); teklif hazır olunca e-postayla bildirilir.
- **Üye** doğrudan Hesabım'daki teklif sayfasına gider; teklifi **Hesabım › Tekliflerim**'den
  onaylar.

Kupon kodu teklif listesine uygulanmaz.

### Teklifi yanıtlama {#teklif-yanitlama}

Siz teklifi fiyatlandırıp gönderdiğinizde müşteri e-posta alır. Üye **Hesabım › Tekliflerim**'den,
misafir e-postadaki bağlantıyla (giriş gerekmez) teklifi açar ve:

| İşlem | Açıklama |
|---|---|
| **Onayla** | "Onayla ve ödemeye geç" — ödeme ekranı açılır; ödeme ile sipariş oluşur |
| **Revize iste** | **İsteğiniz** (zorunlu) notuyla değişiklik ister; güncel teklif e-postayla gelir |
| **Reddet** | **Neden (isteğe bağlı)** ile teklifi kapatır |
| **Talebi geri çek** | Henüz fiyatlanmamış talebi iptal eder |

Teklif geçerlilik süresi dolarsa onaylanamaz; müşteriye yeni talep oluşturması ya da sizinle
iletişime geçmesi söylenir. Süre **Ayarlar › Tanımlamalar › Satış Ayarları › Teklif geçerlilik
süresi** ile belirlenir. Panel tarafı için bkz. [Teklifler](/satis/teklifler).

## İletişim sayfası {#iletisim}

`/iletisim` firmanın adresini, telefonunu, WhatsApp'ını, e-postasını, çalışma saatlerini, şirket
bilgilerini, haritayı ve **Bize Yazın** formunu gösterir. Alanlar ve bilgilerin nereden geldiği:
[İçerik yönetimi › İletişim](/vitrin/icerik-yonetimi#iletisim).

## Müşteriye giden e-postalar {#e-postalar}

Vitrin müşterisine ve misafire şu e-postalar gider. E-postadaki bağlantı üyede Hesabım'daki
ilgili sayfayı, misafirde giriş gerektirmeyen sipariş / teklif sayfasını açar.

| E-posta konusu | Ne zaman |
|---|---|
| E-posta doğrulama | Kayıt olunca ve e-posta adresi değiştirilince |
| Siparişiniz alındı (no) | Sipariş verilince |
| Sipariş durumu: … (no) | Siparişin durumu değişince; ödeme alınınca "Ödemeniz alındı, siparişiniz hazırlanıyor." notuyla |
| Teklif talebiniz alındı (no) | Teklif istenince |
| Teklifiniz hazır | Teklifi fiyatlandırıp gönderdiğinizde |
| Teklif onayınız alındı / Revize isteğiniz alındı / Teklifi reddettiniz / Teklif talebiniz geri çekildi | Müşterinin yanıtından sonra |
| Teklifiniz iptal edildi | Teklifi siz iptal edince |
| İade talebiniz alındı (no) / İade talebiniz: … (no) | Üye iade talebi açınca ve durumu değişince |
| Havale bildiriminiz onaylandı / reddedildi | Havale bildirimi incelenince |
| Şifre sıfırlama | Şifremi unuttum ile |

E-postalarda logonuz ve firma adınız kullanılır. Yeni sipariş ve teklif bildirimleri ise size,
**Ayarlar › Tanımlamalar › Satış Ayarları › Bildirimler › Bildirim e-postası** adresine gider;
iletişim formu mesajları **Ayarlar › Genel Ayarlar › Kurumsal Bilgiler**'deki **E-posta**
adresine gelir.
