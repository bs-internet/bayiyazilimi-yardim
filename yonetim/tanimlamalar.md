# Tanımlamalar

**Ayarlar › Tanımlamalar** — sistemin her yerinde kullanılan temel listeler: diller, bölgeler,
para birimleri, vergi oranları, birimler, sözleşmeler ve satış / stok / cari ile ilgili tanımlar. Menüdeki
**Tanımlamalar**'a tıklayınca **Genel Bakış** açılır.

## Genel Bakış

Her tanım ekranı bir kart olarak listelenir; kartta kısa bir özet yazar (ör. "2 dil · varsayılan
Türkçe", "1 ülke · 81 il", "10 birim"). Dikkat isteyen durumlar uyarı rengiyle gösterilir (ör.
havale açık ama aktif banka hesabı yoksa). Kartlar kullanıcının yetkisine göre gösterilir.

İç menüdeki ekranlar:

| Ekran | Ne için | Anlatıldığı yer |
|---|---|---|
| **Diller** | Arayüz dilleri ve varsayılan dil | [Bu sayfa](#diller) |
| **Bölgeler** | Ülke, il ve ilçe listeleri | [Bu sayfa](#bolgeler) |
| **Para Birimleri** | Para birimleri, kurlar, TCMB ayarları | [Para birimleri](/yonetim/para-birimleri) |
| **Vergi Oranları** | Ürünlerde seçilen KDV oranları | [Bu sayfa](#vergi-oranlari) |
| **Birimler** | Ürün birimleri (Adet, Kutu, Litre …) | [Bu sayfa](#birimler) |
| **Tedarikçiler** | Mal kabulde seçilen tedarikçiler | [Stok](/stok/) |
| **Kargo Firmaları** | Kargo firmaları ve desi fiyat tabloları | [Kargo](/satis/kargo) |
| **Kargo Ayarları** | Sabit kargo ücreti, ücretsiz kargo eşiği, varsayılan desi | [Kargo](/satis/kargo) |
| **Satış Ayarları** | Fiyat gösterimi (KDV dahil / hariç), teklif geçerlilik ve iade süreleri, bildirim e-postası. Kartta bayi fiyat gösterimi özetlenir ("Bayi fiyatları KDV hariç" / "dahil") | [Satış ayarları](/satis/satis-ayarlari) |
| **Sözleşmeler** | Ödeme / üyelik formunda onaylatılan ve bayi panelinde okunan metinler | [Bu sayfa](#sozlesmeler) |
| **Banka Hesapları** | Havale / EFT hesapları ve ödeme seçeneği | [Havale ve ödeme bildirimi](/cari/havale) |
| **Cari Ayarları** | Ödeme yöntemlerinin en düşük tutarı, vade uyarısı, çek / senet | [Cari hesap](/cari/) |

## Ortak kurallar {#ortak-kurallar}

Diller, ülkeler, iller, ilçeler, para birimleri ve vergi oranları aynı şekilde çalışır.

### Yeni kayıtlar pasif başlar {#pasif}

Bu ekranlarda **Yeni** ile eklenen her kayıt **pasif** olarak oluşturulur; formda durum alanı
yoktur. Pasif kayıt seçim listelerinde (ürün formu, adres formu, varsayılan seçimleri …)
görünmez. Kaydı kullanıma açmak için listedeki **Aktif** anahtarını açın.

### Durum anahtarı {#durum}

Listenin ilk sütunundaki **Aktif** anahtarı kaydı tek tıkla aktif / pasif yapar. Durum
değişikliği ayrı bir işlem olarak [etkinlik kayıtlarına](/yonetim/etkinlik-kayitlari) yazılır.

### Silme ve geri alma {#silme}

- Satırın düzenleme penceresindeki silme düğmesi kaydı onay sorduktan sonra **siler**. Silinen
  kayıt listeden kalkar ama kalıcı olarak gitmez.
- Listenin üstündeki **Silinenler** düğmesi silinen kayıtları gösterir. Buradan **Geri al** ile
  kayıt listeye döner, **Kalıcı sil** ile veritabanından tamamen kaldırılır (geri alınamaz).

### Varsayılan kayıt kuralı {#varsayilan-kurali}

[Genel Ayarlar](/yonetim/genel-ayarlar#varsayilanlar)'da **varsayılan** olarak seçili ülke,
para birimi, vergi oranı ve dil, listede **Varsayılan** etiketiyle gösterilir ve:

- **pasifleştirilemez**,
- **silinemez** (kalıcı silme dahil).

Denerseniz "… varsayılan olarak seçili olduğu için pasifleştirilemez veya silinemez." uyarısı
çıkar. Önce Genel Ayarlar'da başka bir kaydı varsayılan yapın.

### Bağlı kayıt kuralı {#bagli-kayit}

Altında kayıt bulunan bir tanım silinemez: **ili olan ülke** ve **ilçesi olan il** silinemez
("… bağlı kayıtları olduğu için silinemez."). Silinenler sayfasındaki alt kayıtlar da sayılır;
önce alt kayıtları kalıcı silin.

### Sıra No

Her kayıtta isteğe bağlı bir **Sıra No** (0 veya büyük tam sayı) vardır. Listeler ve seçim
kutuları bu sıraya göre dizilir.

## Diller {#diller}

**Ayarlar › Tanımlamalar › Diller** — "Dil Tanımları": sistemde kullanılacak diller. Kurulumla
**Türkçe** (varsayılan) ve **English** gelir.

| Alan | Açıklama |
|---|---|
| Sıra No | İsteğe bağlı |
| Kod | **Zorunlu**, 2–5 karakter, benzersiz (ör. `tr`, `en`, `de`) |
| Ad | **Zorunlu.** Dilin adı (ör. Turkish) |
| Yerel ad | **Zorunlu.** Dilin kendi dilindeki adı (ör. Türkçe). Seçim listelerinde bu ad görünür |

Aktif diller kullanıcıların **Tercihler › Arayüz dili** listesinde ve Genel Ayarlar'daki
varsayılan dil listesinde görünür.

::: info Yeni dil eklemek çeviri getirmez
Buradan dil eklemek yalnız listeyi genişletir. Arayüzün o dilde görünmesi için o dilin çeviri
dosyası sisteme eklenmiş olmalıdır; çevirisi olmayan metinler Türkçe görünür.
:::

## Bölgeler (ülke, il, ilçe) {#bolgeler}

**Ayarlar › Tanımlamalar › Bölgeler** — adres formlarında kullanılan ülke, il ve ilçe listeleri.
Kurulumla **Türkiye**, **81 il** ve **ilçeleri** aktif olarak gelir.

Bölgeler üç kademelidir:

1. **Ülkeler** listesi açılır. Bir ülkenin illerini görmek için satırındaki **Şehirler**
   düğmesine basın.
2. **"*Ülke* şehirleri"** listesi açılır. Bir ilin ilçeleri için satırındaki **İlçeler**
   düğmesine basın. **Ülkelere dön** ile geri çıkılır.
3. **"*İl* ilçeleri"** listesi açılır. **Şehirlere dön** ile geri çıkılır.

Her kademede **Yeni**, **Silinenler**, düzenleme ve **Aktif** anahtarı [ortak
kurallara](#ortak-kurallar) göre çalışır.

### Ülke alanları

| Alan | Açıklama |
|---|---|
| Sıra No | İsteğe bağlı |
| Kod | **Zorunlu**, tam 2 harf, benzersiz (ör. `TR`, `DE`) |
| Ad | **Zorunlu.** Adres bağlantısı addan otomatik üretilir; aynı ada sahip iki ülke olamaz |

### İl alanları

| Alan | Açıklama |
|---|---|
| Sıra No | İsteğe bağlı |
| Kod | **Zorunlu**, en çok 16 karakter; aynı ülke içinde benzersiz. Türkiye'de plaka kodu kullanılır (ör. `34`) |
| Ad | **Zorunlu** |

### İlçe alanları

| Alan | Açıklama |
|---|---|
| Sıra No | İsteğe bağlı |
| Ad | **Zorunlu** |

::: tip Pasif il / ilçe
Hizmet vermediğiniz bir il ya da ilçeyi silmek yerine pasifleştirin: adres formlarından kalkar,
eski adreslerdeki kayıtlar bozulmaz.
:::

## Vergi Oranları {#vergi-oranlari}

**Ayarlar › Tanımlamalar › Vergi Oranları** — ürünlerde seçilen KDV oranları. Kurulumla
**KDV %20** (varsayılan), **KDV %10** ve **KDV %0** gelir.

| Alan | Açıklama |
|---|---|
| Sıra No | İsteğe bağlı |
| Ad | **Zorunlu.** Listelerde görünen ad (ör. "KDV %1") |
| Oran | **Zorunlu.** 0 ile 100 arasında bir yüzde (ör. `1`, `20`) |

Varsayılan vergi oranı yeni ürünlerde önce seçili gelir. Oranı değiştirmek mevcut ürünlerin
fiyatlarını kendiliğinden değiştirmez; geçmiş siparişler oluştukları andaki oranla kalır.

### Nasıl yapılır? Yeni bir KDV oranı eklemek

1. **Ayarlar › Tanımlamalar › Vergi Oranları**'nı açın, **Yeni**'ye basın.
2. **Ad** (ör. "KDV %1") ve **Oran** (`1`) girin, **Kaydet**'e basın.
3. Kayıt pasif oluşur; listede **Aktif** anahtarını açın. Artık ürün formunda seçilebilir.

## Birimler {#birimler}

**Ayarlar › Tanımlamalar › Birimler** — ürün birimleri. Ürün eklerken birim bu listedeki **aktif**
birimlerden seçilir. Kurulumla Adet, Paket, Kutu, Koli, Set, Takım, Rulo, Litre, Kg, Metre gelir.

Listede her birimin **kaç üründe kullanıldığı** (**Ürün sayısı**) görünür.

| Alan | Açıklama |
|---|---|
| Birim adı | **Zorunlu**, en çok 32 karakter, benzersiz (ör. Adet, Kutu, Litre) |
| Sıra | İsteğe bağlı, 0 veya büyük tam sayı |

Birimler diğer tanımlardan farklı çalışır:

- **Yeni birim** ile eklenen birim **aktif** oluşur.
- Birimin **adını değiştirirseniz** o birimi kullanan tüm ürünler de yeni adla güncellenir.
- **Ürünlerde kullanılan birim silinemez** (silinmiş ürünler dahil); silme düğmesi yerine
  pasifleştirin. Pasif birim yeni ürünlerde seçilemez, mevcut ürünlerde kalır.
- Silinen birim için "Silinenler" sayfası yoktur; silme kalıcıdır.

## Sözleşmeler {#sozlesmeler}

**Ayarlar › Tanımlamalar › Sözleşmeler** — satış sözleşmesi, KVKK aydınlatma metni, garanti ve
iade şartları gibi metinler. Aktif sözleşmeler bayi panelinin **Sözleşmeler** menüsünde
listelenir; isterseniz ödeme formunda (vitrin kuruluysa üyelik formunda da) onaylatılır.

### Liste

Başlıkta sözleşme ve aktif sözleşme sayısı yazar. Sütunlar: **Sıra**, **Başlık**, **Gösterildiği
yer**, **Güncelleme**, **Aktif** (anahtar) ve işlemler (**Düzenle**).

**Gösterildiği yer** sütunundaki rozetler:

| Rozet | Anlamı |
|---|---|
| **Ödeme formu** | Siparişin ödeme adımında onaylatılır |
| **Üyelik formu** | Vitrinin kayıt formunda onaylatılır (yalnız vitrin kuruluysa) |
| **Genel** | Hiçbir formda onaylatılmaz; aktifse yalnız bayi panelindeki **Sözleşmeler**'de okunur |

### Sözleşme formu

**Yeni sözleşme** ya da listede **Düzenle**:

| Alan | Açıklama |
|---|---|
| **Başlık** | Zorunlu, en çok 255 karakter. Onay kutusunda ve bayi panelinde bu ad görünür |
| **Kısa ad** | Bayi panelindeki adreste kullanılır. Boş bırakılırsa başlıktan üretilir |
| **Sözleşme metni** | Zengin metin editörü |
| **Gösterildiği yer › Ödeme formunda göster** | İşaretliyse sözleşme ödeme formunda onaylatılır |
| **Gösterildiği yer › Üyelik formunda göster** | Yalnız [Vitrin modülü](/vitrin/) kuruluysa görünür: işaretliyse vitrinin kayıt formunda onaylatılır. Çekirdekte üyelik formu yoktur; bayileri siz eklersiniz |
| **Sıra** | Listede, onay kutusunda ve bayi panelinde sıralama (küçük önce) |

İki kutu da işaretsizse sözleşme **genel** sözleşmedir. Ekrandaki açıklama: "İşaretliyse formda
onaylatılır. İşaretsizse genel sözleşmedir; aktifse yalnız bayi panelindeki Sözleşmeler'de
okunur."

Yeni sözleşme **pasif** başlar; metni hazır olunca listedeki **Aktif** anahtarıyla kullanıma
açın. Pasif sözleşme hiçbir formda ve bayi panelinde görünmez. Sözleşmeyi silmek için düzenleme
ekranındaki sil düğmesini kullanın (onay sorulur).

### Ödeme formunda nasıl görünür? {#sozlesme-onayi}

Ödeme formunda göster işaretli en az bir **aktif** sözleşme varsa bayinin sepet ödemesinde,
teklif ödemesinde ve (vitrin kuruluysa) vitrinin ödeme ekranında **tek bir zorunlu onay kutusu**
çıkar:

> **Satış Sözleşmesi** ve **KVKK Aydınlatma Metni** metinlerini okudum, onaylıyorum.

Her sözleşme adı bir bağlantıdır; tıklayınca metin bir pencerede açılır. İşaretli aktif sözleşme
yoksa onay kutusu hiç çıkmaz. Vitrinin kayıt formunda da **Üyelik formunda göster** işaretli
sözleşmeler için aynı şekilde çalışır.

::: info Onay ayrıca kaydedilmez
Onay kutusu işaretlenmeden sipariş (ya da üyelik) tamamlanmaz; ancak hangi sözleşmenin hangi
sürümünün onaylandığı ayrıca kaydedilmez.
:::

### Kurulumla gelen taslaklar {#hazir-sozlesmeler}

Kurulumda dört sözleşme **pasif taslak** olarak gelir. Metinlerinde "Bu sözleşmenin metni henüz
girilmedi." notu yazar:

| Sözleşme | Gösterildiği yer |
|---|---|
| Satış Sözleşmesi | Ödeme formu |
| Üyelik Sözleşmesi | Üyelik formu |
| KVKK Aydınlatma Metni | Ödeme formu ve üyelik formu |
| Garanti ve İade Şartları | Genel |

### Nasıl yapılır? Sözleşmeleri kullanıma açmak

1. **Ayarlar › Tanımlamalar › Sözleşmeler**'i açın.
2. Kullanacağınız sözleşmenin **Düzenle**'sine basın, **Sözleşme metni**'ne kendi metninizi
   yazın (taslak notunu silin) ve **Gösterildiği yer** kutularını kontrol edip **Kaydet**'e basın.
3. Listede sözleşmenin **Aktif** anahtarını açın.
4. Kullanmayacağınız taslakları pasif bırakın ya da silin.

## Yetkiler

Tanımlama ekranlarının her işlemi (listeleme, ekleme, güncelleme, durum değiştirme, silme, geri
alma, kalıcı silme) ayrı bir yetkidir. Birimler, Para Birimleri, Tedarikçiler, Kargo, Banka
Hesapları, Sözleşmeler ("Mağaza: Sözleşmeler" grubu) ve ayar ekranlarının ("Mağaza: Ayarlar"
grubu) yetkileri kurulumla hazır gelir. **Diller, Bölgeler ve Vergi
Oranları** ekranlarının yetkileri kurulumda yalnız **Admin** görevine atanır; diğer görevlere
**Görevler** ekranından eklenebilir. Genel Bakış sayfası herkese açıktır ama
yalnız yetkili olunan ekranların kartlarını gösterir. Bkz. [Görevler ve yetkiler](/yonetim/roller-yetkiler).
