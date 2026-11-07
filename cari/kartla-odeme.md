# Kartla ödeme

Kredi / banka kartıyla ödeme **ek modüllerle** gelir: **PayTR** ve **iyzico**. Bu modüller ücretlidir;
satın alma ve kurulum için: [bayiyazilimi.com](https://bayiyazilimi.com). Diğer ödeme kuruluşları ve
banka sanal POS'ları talep üzerine eklenir.

Modülün kurulumunu hizmet sağlayıcınız ya da geliştiriciniz yapar. Kurulu modülleri
[Modüller](/yonetim/moduller) ekranında görebilir, açıp kapatabilirsiniz. İki modül birlikte de
kurulabilir; ikisi de açıksa müşteri ödeme ekranında ikisini ayrı seçenek olarak görür.

## Neler sağlar?

- **3D Secure ödeme** — kart bilgisi ödeme kuruluşunun güvenli sayfasında girilir (PayTR'de iFrame,
  iyzico'da Checkout Form). Kart bilgisi sistemde saklanmaz.
- **Taksit** — en fazla taksit sayısını ve taksit farkını kimin ödeyeceğini siz belirlersiniz. Ödeme
  ekranında bilgi amaçlı bir taksit tablosu gösterilir. Ayrıntı: [Taksit](#taksit).
- **Kartla cari ödeme** — bayi, siparişten bağımsız olarak bakiyesini **Cari Hesabım** ekranından
  kartla öder. Ayrıntı: [Kartla cari ödeme](#cari-odeme).
- **İade** — sipariş detayındaki **Ödemeler** kartından tam ya da kısmi iade. Para ödeme kuruluşu
  üzerinden karta geri gönderilir. Ayrıntı: [İade](#iade).
- **Vade farkı ayrı görünür** — müşterinin taksit yüzünden fazladan ödediği tutar, ödeme kaydında
  "vade farkı" olarak ayrıca gösterilir.

## Ödeme akışı {#odeme-akisi}

### Müşteri tarafı

1. Müşteri sepetini tamamlar ve ödeme ekranında **Kredi / Banka Kartı** (iyzico için
   **Kredi / Banka Kartı (iyzico)**) seçeneğini seçer. Seçeneğin altında taksit tablosu görünür.
2. Siparişi verir. Sipariş oluşur, durumu **Ödeme Bekleniyor** olur ve ürünlerin stoğu düşülür.
3. Müşteri ödeme kuruluşunun güvenli ödeme sayfasına geçer; kart bilgisini ve taksit seçimini orada
   yapar, 3D Secure doğrulamasını tamamlar.
4. Ödemeden sonra sistem müşteriyi sipariş sayfasına geri getirir ve sonucu bildirir:
   - "Ödemeniz alındı. Sipariş numaranız: …"
   - "Ödemeniz işleniyor; birkaç dakika içinde sonuçlanacak." (sonuç henüz gelmediyse)
   - "Ödeme tamamlanamadı: …" (ödeme kuruluşunun verdiği sebeple)

### Yönetici tarafı

1. Ödeme başarılıysa siparişin ödeme durumu **Ödendi**, sipariş durumu **Hazırlanıyor** olur. Sipariş
   geçmişine "Kartla ödendi (…)" notu düşer; taksitli ödemede taksit sayısı da yazılır.
2. Sipariş tutarı müşterinin carisine **borç**, aynı tutardaki ödeme **alacak** olarak işlenir.
3. Ödeme başarısızsa sipariş durumu **Ödeme Başarısız** olur, düşülen stok geri eklenir ve sipariş
   geçmişine sebebi yazılır. Cariye bir şey işlenmez.
4. Sipariş detayındaki **Ödemeler** kartında yöntem, taksit sayısı, tutar ve (varsa) vade farkı
   görünür.

::: info Ödemenin sonucu nereden gelir?
Sonucu ödeme kuruluşu sisteme kendisi bildirir; müşterinin tarayıcısında sayfayı kapatması ödemeyi
etkilemez. PayTR'de bunun için mağaza panelinize bildirim adresi girmeniz gerekir
([PayTR ayarları](#paytr)).
:::

### Yöntemin kime sunulacağı

Kart seçeneği ödeme ekranında yalnız şu koşullarda görünür:

- Modülün ayar ekranında **… ile kartla ödemeyi aç** açık **ve** mağaza / API bilgileri girilmiş.
- Müşterinin bayi ya da bayi grubu ayarlarında **İzinli ödeme yöntemleri** işaretliyse, kart bu
  yöntemler arasında. Bayide hiçbiri işaretli değilse grubun ayarı geçerlidir; orada da hiçbiri
  işaretli değilse tüm yöntemler sunulur.
- **Ayarlar › Tanımlamalar › Cari Ayarları › Ödeme yöntemleri** bölümünde kart için en düşük sipariş
  tutarı girildiyse, sipariş tutarı (KDV dahil, ana para biriminde) bu tutara ulaşıyor.

Bu kurallar yalnız siparişte geçerlidir; [kartla cari ödemeyi](#cari-odeme) etkilemez.

## Taksit {#taksit}

### Ödeme ekranındaki taksit tablosu

Kart seçeneğinin altında **Taksit seçenekleri** tablosu yer alır. Tablo, ödeme kuruluşundan anlık
alınır ve kart ailesine göre (ör. Bonus, World, Maximum) şu sütunları gösterir:

| Sütun  | Açıklama                                       |
| ------ | ---------------------------------------------- |
| Kart   | Kart ailesi                                    |
| Taksit | **Tek çekim** ya da taksit sayısı              |
| Aylık  | Bir taksitin tutarı                            |
| Toplam | Müşterinin bu seçenekte ödeyeceği toplam tutar |

- Müşteri **Kartın ilk 6 hanesi** kutusuna kartının ilk hanelerini yazarsa yalnız o kartın taksitleri
  listelenir; üstte kartın bankası, ailesi ve türü (kredi kartı / banka kartı) görünür.
- Tablo **bilgi amaçlıdır**; taksit seçimi ödeme kuruluşunun güvenli sayfasında yapılır.
- Taksit bilgisi alınamazsa "Taksit seçenekleri ödeme sayfasında gösterilir." yazar; ödeme yine
  yapılabilir.

### En fazla taksit

Ayar ekranında **Taksit** alanından seçilir. **Taksit yok (tek çekim)** seçilirse yalnız tek çekim
sunulur. Tabloda bu sayının üstündeki taksitler gösterilmez; ödeme sayfasına da en fazla bu kadar
taksit iletilir.

| Modül  | Seçilebilen değerler                         |
| ------ | -------------------------------------------- |
| PayTR  | Tek çekim ya da en fazla 2, 3, 4 … 12 taksit |
| iyzico | Tek çekim ya da en fazla 2, 3, 6, 9, 12      |

### Taksit farkını kim öder?

| Seçenek                                          | Sonuç                                                                                         |
| ------------------------------------------------ | --------------------------------------------------------------------------------------------- |
| **Müşteri (vade farkı ödeme tutarına eklenir)** | Taksitli ödemede müşteri, sipariş tutarına ödeme kuruluşunun taksit oranı eklenmiş tutarı öder. |
| **Firma (müşteri sipariş tutarını öder)**       | Müşteri her taksitte sipariş tutarının aynısını öder; fark sizin hesabınızdan kesilir.          |

::: warning Ödeme kuruluşu panelindeki ayarla aynı olmalı
Bu seçim taksit tablosunun nasıl hesaplanacağını belirler. Müşteriden gerçekte ne kadar çekileceğini
ise PayTR / iyzico panelinizdeki taksit ayarı belirler. İkisi farklıysa müşteri tabloda başka, ödeme
sayfasında başka tutar görür. Aynı şekilde **en fazla taksit** de ödeme kuruluşu panelindeki ayarla
uyumlu olmalıdır.
:::

**Örnek (PayTR, taksit farkını müşteri öder):** Sipariş tutarı 10.000,00 TL ve kartın 3 taksit oranı
PayTR'de %5 ise tabloda 3 taksit için **Toplam 10.500,00 TL**, **Aylık 3.500,00 TL** görünür. Taksit
farkını firma öderse aynı satırda Toplam 10.000,00 TL, Aylık 3.333,33 TL görünür. (Oranlar ödeme
kuruluşundan gelir; buradaki oran yalnız örnektir. iyzico'da toplam tutar doğrudan iyzico'dan alınır.)

### Vade farkı nerede görünür?

Müşteri sipariş tutarından fazla öderse aradaki fark ödeme kaydına **vade farkı** olarak yazılır ve
sipariş detayındaki **Ödemeler** kartında tutarın altında "+… vade farkı" olarak görünür.

Cariye **yalnız sipariş tutarı** işlenir; vade farkı müşterinin carisine borç ya da alacak olarak
yazılmaz.

## Kartla cari ödeme {#cari-odeme}

Bayi, sipariş vermeden carisindeki borcu kartla ödeyebilir. **Kartla öde** düğmesi yalnız en az bir
kart modülü açık ve ayarları girilmişse, **bayi panelinde** görünür.

### Nasıl yapılır? (bayi)

1. Bayi panelinde **Cari Hesabım** ekranını açın.
2. **Kartla öde** düğmesine basın. **Kartla cari ödeme** penceresi açılır.
3. Birden çok kart modülü açıksa **Ödeme sağlayıcısı** listesinden birini seçin.
4. **Tutar** alanına ödemek istediğiniz tutarı yazın. Alan, borcunuz varsa güncel bakiyenizle dolu
   gelir; dilediğiniz tutarla değiştirebilirsiniz. Tutar ana para biriminde girilir.
5. **Ödemeye geç** düğmesine basın; ödeme kuruluşunun güvenli sayfasında kart bilgilerinizi girip 3D
   Secure doğrulamasını tamamlayın.
6. Ödeme bitince **Cari Hesabım** ekranına dönersiniz. Başarılıysa "Ödemeniz alındı ve carinize
   işlendi." mesajı görünür.

### Cariye nasıl işlenir?

- Başarılı ödeme carinize **alacak** olarak işlenir ve bakiyenizi düşürür. Hareketin açıklaması
  "Tahsilat — … · Cari tahsilat (kart)" şeklindedir.
- Ödeme önce **en eski vadeli borcunuzu** kapatır. Ayrıntı:
  [Ödemeler borçları nasıl kapatır?](/cari/#fifo)
- Bakiye düştüğü için vadeli çalışan bayinin kullanılabilir limiti de açılır. Ayrıntı:
  [Risk ve kullanılabilir limit](/cari/vadeli-calisma#risk)
- Başarısız ya da zaman aşımına uğrayan cari ödemesi cariye işlenmez; kayıt **Başarısız** olarak
  kalır.

::: info
Kartla cari ödemede bayinin **İzinli ödeme yöntemleri** ve Cari Ayarları'ndaki en düşük tutar
kuralları uygulanmaz; bunlar yalnız siparişte geçerlidir.
:::

## İade {#iade}

Kartla ödenmiş bir siparişin parasını ödeme kuruluşu üzerinden müşterinin kartına iade
edebilirsiniz. İade, sipariş detayından yapılır; bunun için **Kart ödemesini sağlayıcı üzerinden iade
et** yetkisi gerekir.

### Nasıl yapılır?

1. **Siparişler** menüsünden siparişi açın.
2. **Ödemeler** kartında ilgili ödeme satırındaki **İade et** düğmesine basın. Düğme yalnız durumu
   **Ödendi** olan kart ödemelerinde görünür.
3. **Kart ödemesini iade et** penceresinde **İade tutarı** alanı ödemenin tamamıyla dolu gelir. Kısmi
   iade için tutarı küçültün.
4. **İade et** düğmesine basın. İade ödeme kuruluşuna iletilir; başarılıysa "İade sağlayıcıya
   iletildi ve kaydedildi." mesajı görünür.

### Kurallar

- İade tutarı, ödemenin **henüz iade edilmemiş** kısmını geçemez. Birden çok kısmi iade yapılabilir;
  yapılan iadelerin toplamı ödeme satırında "İade: …" olarak görünür.
- Ödeme kuruluşu iadeyi reddederse hiçbir kayıt değişmez ve sebebi ekranda gösterilir (ör.
  "PayTR iadesi yapılamadı: …").
- İade edilebilir tutar sipariş tutarıdır; müşterinin ödediği vade farkı bu tutara dahil değildir.

### Siparişe ve cariye etkisi

| Durum                                   | Ödeme ve sipariş                                                                    | Cari                                                                  |
| --------------------------------------- | ----------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| Tamamı **tek seferde** iade edildi      | Ödeme ve siparişin ödeme durumu **İade Edildi** olur                                | Ödemenin alacak kaydı ters kayıtla kapatılır ("Kart iadesi: …")      |
| **Kısmi** iade                          | Ödeme **Ödendi** olarak kalır                                                       | İade tutarı cariye borç yazılır ("Kısmi kart iadesi: …")             |
| Kısmi iadelerle **kalanın tamamı** iade edildi | Ödeme ve siparişin ödeme durumu **İade Edildi** olur                         | Son iade de borç olarak yazılır                                       |

Her iade sipariş geçmişine not olarak düşer. İade, siparişin durumunu (ör. **Hazırlanıyor**) ve
stoğu değiştirmez; ürün iadesi ayrı bir işlemdir (bkz. [İadeler](/satis/iadeler)).

::: warning
Kartla cari ödemelerde (siparişe bağlı olmayanlar) **İade et** düğmesi yoktur. Böyle bir ödemeyi
iade etmeniz gerekirse iadeyi ödeme kuruluşunun panelinden yapın ve cari kaydını müşteri detayındaki
**Cari** sekmesinden (ör. **Borç / Alacak dekontu**) düzeltin. Bkz.
[Panelde cari işlemleri](/cari/).
:::

## PayTR ayarları {#paytr}

**Ayarlar › Tanımlamalar › PayTR**

Ekranı görmek ve kaydetmek için **PayTR ayarlarını görüntüle** ve **PayTR ayarlarını güncelle**
yetkileri gerekir (yetki grubu: **Ödeme: PayTR**).

### Mağaza bilgileri

| Alan                                      | Açıklama                                                                                                                         |
| ----------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| **PayTR ile kartla ödemeyi aç**           | Açık ve mağaza bilgileri girilmişse kart seçeneği ödeme ekranında sunulur. Varsayılan: kapalı.                                   |
| **Mağaza no (merchant_id)**               | PayTR mağaza panelinizdeki mağaza numarası. En fazla 32 karakter.                                                                |
| **Mağaza parolası (merchant_key)**        | PayTR'nin verdiği mağaza parolası. En fazla 64 karakter. Kaydedildikten sonra gizlenir; boş bırakırsanız kayıtlı değer değişmez. |
| **Mağaza gizli anahtarı (merchant_salt)** | PayTR'nin verdiği gizli anahtar. En fazla 64 karakter. Parola gibi gizlenir; boş bırakılırsa değişmez.                           |
| **Test modu**                             | PayTR test kartlarıyla deneme ödemesi alınır; canlıya geçince kapatın. Varsayılan: açık.                                         |

### Taksit

| Alan                        | Açıklama                                                                                                                         |
| --------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| **Taksit**                  | **Taksit yok (tek çekim)** ya da **En fazla 2 … 12 taksit**. Varsayılan: tek çekim.                                              |
| **Taksit farkını kim öder** | **Müşteri** ya da **Firma** ([Taksit](#taksit)). Varsayılan: Müşteri. PayTR panelinizdeki taksit ayarıyla aynı olmalıdır.         |

### PayTR mağaza panelinde yapılacaklar

PayTR mağaza panelinizde **Bildirim URL'si** olarak şu adresi tanımlayın (adres ayar ekranında da,
kendi alan adınızla birlikte gösterilir):

```
https://alanadiniz.com/odeme/bildirim/paytr
```

::: danger Bildirim adresi girilmezse
PayTR ödemenin sonucunu sisteme bu adresle bildirir. Adres tanımlı değilse müşteri ödemeyi yapsa da
sipariş **Ödeme Bekleniyor** olarak kalır ve 60 dakika sonra zaman aşımıyla **Ödeme Başarısız**
olur.
:::

### Nasıl yapılır? (canlıya geçiş)

1. Mağaza no, parola ve gizli anahtarı girin; **Test modu** açıkken kaydedin.
2. PayTR panelinde bildirim adresini tanımlayın.
3. PayTR test kartlarıyla bir deneme siparişi verin; siparişin **Ödendi** olduğunu kontrol edin.
4. **Test modu**nu kapatın, **PayTR ile kartla ödemeyi aç** açık olarak kaydedin.

## iyzico ayarları {#iyzico}

**Ayarlar › Tanımlamalar › iyzico**

Ekranı görmek ve kaydetmek için **iyzico ayarlarını görüntüle** ve **iyzico ayarlarını güncelle**
yetkileri gerekir (yetki grubu: **Ödeme: iyzico**).

### API bilgileri

| Alan                             | Açıklama                                                                                                                          |
| -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| **iyzico ile kartla ödemeyi aç** | Açık ve API anahtarları girilmişse kart seçeneği ödeme ekranında sunulur. Varsayılan: kapalı.                                     |
| **API anahtarı**                 | iyzico panelinizdeki API anahtarı. En fazla 128 karakter. Kaydedildikten sonra gizlenir; boş bırakırsanız kayıtlı değer değişmez. |
| **Gizli anahtar**                | iyzico panelinizdeki gizli anahtar. En fazla 128 karakter. Gizlenir; boş bırakılırsa değişmez.                                    |
| **Sandbox (test ortamı)**        | iyzico sandbox hesabının anahtarlarıyla deneme ödemesi alınır; canlıya geçince kapatın. Varsayılan: açık.                         |

::: tip
Sandbox açıkken sandbox hesabınızın anahtarlarını, kapattığınızda canlı hesabın anahtarlarını girin.
Anahtarlar iki ortamda farklıdır.
:::

### Taksit

| Alan                        | Açıklama                                                                                                                        |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| **Taksit**                  | **Taksit yok (tek çekim)** ya da **En fazla 2, 3, 6, 9 veya 12 taksit**. Varsayılan: tek çekim.                                  |
| **Taksit farkını kim öder** | **Müşteri** ya da **Firma** ([Taksit](#taksit)). Varsayılan: Müşteri. iyzico panelinizdeki taksit ayarıyla aynı olmalıdır.      |

### iyzico panelinde yapılacaklar

Dönüş adresi her ödemede otomatik gönderilir; müşteri ödeme sonrası siteye döndüğünde sonuç iyzico'dan
sorgulanıp doğrulanır. Bunun için ayrıca bir ayar gerekmez.

İsterseniz iyzico panelinizde bildirim (webhook) adresi olarak şunu da tanımlayabilirsiniz; müşteri
siteye dönmese bile sonuç bu adresle işlenir:

```
https://alanadiniz.com/odeme/bildirim/iyzico
```

::: info T.C. kimlik numarası
iyzico alıcının T.C. kimlik numarasını zorunlu tutar. Sistem müşteriden T.C. kimlik numarası istemez;
iyzico'ya onun kabul ettiği örnek değer gönderilir.
:::

## Sık karşılaşılan durumlar {#sik-durumlar}

### Ödeme yarıda kaldı

Müşteri güvenli ödeme sayfasında ödemeyi tamamlamadan çıkarsa sipariş **Ödeme Bekleniyor** olarak
kalır. **60 dakika** içinde sonuçlanmayan kart ödemesi zaman aşımına uğrar:

- Sipariş **Ödeme Başarısız** olur, stok geri eklenir, sipariş geçmişine "Ödeme zaman aşımına
  uğradı." yazılır.
- Kartla cari ödemede kayıt **Başarısız** olur; cariye bir şey işlenmez.

Kontrol her 5 dakikada bir otomatik çalışır; bu yüzden kapanma 60 dakikayı birkaç dakika geçebilir.
Ödemesi başarısız olan sipariş için müşteri yeni bir sipariş vermelidir.

### Müşteri ödedi ama sipariş "Ödeme Bekleniyor" görünüyor

- Dönüşte "Ödemeniz işleniyor; birkaç dakika içinde sonuçlanacak." yazıyorsa sonuç henüz ödeme
  kuruluşundan gelmemiştir; birkaç dakika bekleyin.
- **PayTR'de** uzun süre değişmiyorsa mağaza panelindeki **Bildirim URL'si**ni kontrol edin
  ([PayTR ayarları](#paytr)).
- Test modu / sandbox açık ve canlı kartla ödeme denendiyse ya da tersi, ödeme sonuçlanmaz; ayar
  ekranındaki modu ve anahtarları kontrol edin.

### Ödeme reddedildi

Banka ya da ödeme kuruluşu ödemeyi reddederse sipariş **Ödeme Başarısız** olur ve stok geri eklenir.
Ödeme kuruluşunun verdiği sebep müşteriye "Ödeme tamamlanamadı: …" mesajında gösterilir ve sipariş
geçmişine yazılır.

### Aynı ödeme iki kez bildirildi

Ödeme kuruluşu sonucu birden çok kez bildirse de ödeme yalnız bir kez işlenir; sipariş ve cari iki
kez etkilenmez. Sonuçlanmış bir ödemenin sayfası yeniden açılırsa "Bu ödeme zaten sonuçlanmış."
mesajı görünür.

### Kart seçeneği ödeme ekranında görünmüyor

- Modülün ayar ekranında **… ile kartla ödemeyi aç** açık mı ve tüm mağaza / API bilgileri girilmiş mi?
- Müşterinin bayi ya da bayi grubunda **İzinli ödeme yöntemleri** kartı dışarıda bırakıyor mu?
- **Cari Ayarları**'nda kart için girilen en düşük tutarın altında bir sipariş mi?
- Modül [Modüller](/yonetim/moduller) ekranında kapatılmış olabilir.
