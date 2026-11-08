# Cari Hesabım

Firmamızla olan cari hesabınızı buradan izlersiniz: bakiyeniz, (vadeli çalışıyorsanız) kredi
limitiniz, vadesi yaklaşan ve geçen borçlarınız, ödemeleriniz ve hesap ekstreniz. Havale
bildirimini ve kartla cari ödemeyi de bu ekrandan yaparsınız.

**Cari Hesabım** (sol menü).

## Özet kartlar {#ozet}

| Kart | Açıklama |
|---|---|
| **Bakiye** | Cari bakiyeniz. Altında **Borçlu** (bize borcunuz var), **Alacaklı** (alacağınız var) ya da **Bakiye yok** yazar |
| **Çalışma şekli** | **Peşin** ya da **Vadeli (açık hesap)**; vadeli çalışıyorsanız altında "N gün vade" |
| **Kullanılabilir limit** | Yalnız vadeli çalışıyorsanız. Altında limitiniz, riskiniz ve varsa onay bekleyen sipariş tutarı yazar. Limit tanımlı değilse **Limitsiz**. Limit aşıldıysa kırmızı görünür |
| **Vadesi geçen** | Yalnız vadeli çalışıyorsanız. Vadesi geçmiş borç tutarı ve kaç siparişe ait olduğu (yoksa **Yok**) |

Limit, risk ve vadenin nasıl hesaplandığı: [Peşin ve vadeli çalışma](/cari/vadeli-calisma).

## Açık borçlar {#acik-borclar}

Vadesi geçmiş ve vadesi yaklaşan borçlarınız sipariş bazında listelenir: sipariş numarası (tıklanınca
sipariş açılır), "Vade … · toplam …" ve bir etiket:

- **N gün geçti** (kırmızı) — vadesi geçmiş,
- **Bugün** — vadesi bugün,
- **N gün kaldı** — vadesi yaklaşan.

Ödemeleriniz en eski borcunuzdan başlayarak kapatır; listede borçların kalan tutarı görünür.
Açık borcunuz yoksa bu bölüm görünmez.

## Düğmeler

- **Havale bildirimi yap** — tanımlı banka hesabımız varsa görünür. Bkz.
  [Havale bildirimi](#havale-bildirimi).
- **Kartla öde** — kartla ödeme açıksa görünür. Bkz. [Kartla cari ödeme](#kartla-odeme).

## Havale bildirimi {#havale-bildirimi}

Havale / EFT ile ödeme yaptıktan sonra bize bildirirsiniz; bildiriminiz onaylanınca ödeme
carinize işlenir.

### Nasıl yapılır?

1. Ödemeyi banka hesaplarımızdan birine yapın. Açıklamaya sipariş numaranızı yazın.
2. **Cari Hesabım**'da **Havale bildirimi yap** düğmesine basın.
3. **Havale / EFT bildirimi** penceresini doldurun ve **Bildir**'e basın.
4. "Ödeme bildiriminiz alındı; onaylanınca carinize işlenecek." mesajı görünür.

| Alan | Açıklama |
|---|---|
| **Tutar** | Zorunlu, 0'dan büyük. Ana para biriminde (ör. TRY) girilir; etiketin yanında para birimi yazar |
| **Havale tarihi** | Zorunlu. Bugünden ileri bir tarih olamaz |
| **Gönderilen hesap** | Parayı gönderdiğiniz banka hesabımız. İsteğe bağlı (**Belirtmek istemiyorum**) |
| **Sipariş (isteğe bağlı)** | Ödemenin ait olduğu sipariş. Listede ödemesi beklenen siparişleriniz numara ve tutarıyla yer alır. Belirli bir sipariş için değilse **Cari bakiyeme** seçin |
| **Gönderen (hesap sahibi)** | Havaleyi gönderen hesabın sahibi. İsteğe bağlı, en fazla 255 karakter |
| **Dekont (görsel ya da PDF, en fazla 5 MB)** | İsteğe bağlı. JPG, PNG, WEBP ya da PDF |
| **Açıklama** | İsteğe bağlı, en fazla 500 karakter |

### Havale bildirimlerim

Son 20 bildiriminiz listelenir: tarih, havale tarihi, tutar, sipariş ve durum.

| Durum | Anlamı |
|---|---|
| **Onay bekliyor** | Bildiriminiz inceleniyor |
| **Onaylandı** | Ödeme carinize işlendi. Bildirim bir siparişe aitse ve tutar yetiyorsa sipariş ödenmiş olur |
| **Reddedildi** | Ödeme işlenmedi; ret nedeni satırda yazar |

Bildiriminiz onaylandığında ya da reddedildiğinde e-posta ve panel bildirimi alırsınız.

::: tip
Havaleyle verdiğiniz tek bir siparişi ödediyseniz bildirimi o siparişe bağlayın; bildirim
onaylanınca sipariş ödenmiş olur. Bir havaleyle birden fazla borcu ödediyseniz **Cari
bakiyeme** seçin; ödeme en eski borcunuzdan başlayarak kapatır.
:::

## Kartla cari ödeme {#kartla-odeme}

Sipariş vermeden carinizdeki borcu kartla ödersiniz.

1. **Kartla öde** düğmesine basın.
2. **Kartla cari ödeme** penceresinde, birden çok seçenek varsa **Ödeme sağlayıcısı**'nı seçin.
3. **Tutar** alanı borcunuz varsa güncel bakiyenizle dolu gelir; dilediğiniz tutarla
   değiştirebilirsiniz (ana para biriminde).
4. **Ödemeye geç**'e basın; güvenli ödeme sayfasında kart bilgilerinizi girip 3D Secure
   doğrulamasını tamamlayın.
5. Cari Hesabım'a dönersiniz. Başarılıysa "Ödemeniz alındı ve carinize işlendi." yazar.

Ödeme carinize alacak olarak işlenir ve en eski vadeli borçlarınızı kapatır. Ayrıntı:
[Kartla ödeme](/cari/kartla-odeme#cari-odeme).

## Havale / EFT bilgileri {#banka-hesaplari}

Ödemesi beklenen havale siparişiniz varsa ekranda **Havale / EFT bilgileri** kutusu ve banka
hesaplarımız (banka, hesap sahibi, IBAN) görünür. Açıklama kısmına sipariş numaranızı yazmayı
unutmayın. Banka hesaplarımız ayrıca havale siparişinizin e-postasında yazar.

## Ödemeler {#odemeler}

Siparişlerinize ait kart ödemeleri, havaleler ve cari tahsilatlar listelenir.

| Sütun | Açıklama |
|---|---|
| **Tarih** | |
| **Sipariş** | Ödemenin ait olduğu sipariş; siparişe bağlı değilse **Cari tahsilat** |
| **Yöntem** | Ödeme yöntemi |
| **Durum** | Ödeme durumu; havale siparişinde ödeme gelene kadar **Havale bekleniyor** |
| **Tutar** | |

## Hesap ekstresi {#ekstre}

Carinize işlenen bütün hareketler:

| Sütun | Açıklama |
|---|---|
| **Tarih** | |
| **Açıklama** | Hareketin açıklaması; siparişe aitse sipariş numarası bağlantı olarak |
| **Vade** | Vadeli borçlarda vade tarihi |
| **Borç** | Siparişleriniz hazırlanmaya alındığında yazılan tutar |
| **Alacak** | Ödemeleriniz alındığında yazılan tutar |
| **Bakiye** | O satırdan sonraki bakiye |

**Başlangıç** ve **Bitiş** tarihlerini seçip **Filtrele**'ye basarak belirli bir dönemi
görürsünüz; **Temizle** filtreyi kaldırır. Dönem seçildiğinde öncesinin bakiyesi **Devir**
olarak gösterilir; altta dönemin borç, alacak ve bakiye toplamları yazar. İptal edilen
hareketler **İptal edildi** olarak işaretlenir.

::: info Sipariş ne zaman cariye işlenir?
Sipariş tutarı, sipariş **hazırlanmaya alındığında** carinize borç yazılır. **Ödeme Bekleniyor**
durumundaki havale siparişi, ödeme onaylanana kadar ekstrede görünmeyebilir.
:::
