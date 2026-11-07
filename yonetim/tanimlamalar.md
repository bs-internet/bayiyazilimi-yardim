# Tanımlamalar

**Ayarlar › Tanımlamalar** — sistemin her yerinde kullanılan temel listeler: diller, bölgeler,
para birimleri, vergi oranları, birimler ve satış / stok / cari ile ilgili tanımlar. Menüdeki
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
| **Satış Ayarları** | Fiyat gösterimi (KDV dahil / hariç), teklif geçerlilik ve iade süreleri | Satış bölümü |
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

## Yetkiler

Tanımlama ekranlarının her işlemi (listeleme, ekleme, güncelleme, durum değiştirme, silme, geri
alma, kalıcı silme) ayrı bir yetkidir. Birimler, Para Birimleri, Tedarikçiler, Kargo, Banka
Hesapları ve ayar ekranlarının yetkileri kurulumla hazır gelir. **Diller, Bölgeler ve Vergi
Oranları** ekranlarının yetkileri kurulumda yalnız **Admin** görevine atanır; diğer görevlere
**Görevler** ekranından eklenebilir. Genel Bakış sayfası herkese açıktır ama
yalnız yetkili olunan ekranların kartlarını gösterir. Bkz. [Görevler ve yetkiler](/yonetim/roller-yetkiler).
