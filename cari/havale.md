# Havale ve ödeme bildirimi

Havale / EFT ile ödeme için üç parça birlikte çalışır: **banka hesaplarınız**, bayinin ödeme
ekranında seçtiği **Havale / EFT** yöntemi ve bayinin dekontla yaptığı **havale bildirimi**.

## Banka Hesapları {#banka-hesaplari}

**Ayarlar › Tanımlamalar › Banka Hesapları** — havale / EFT ile ödemede müşteriye gösterilen
hesaplar. Başlıkta hesap sayısı ve kaçının aktif olduğu yazar.

### Havale / EFT ile ödeme anahtarı

Ekranın üstündeki **Havale / EFT ile ödeme** anahtarı (varsayılan **açık**) yöntemi tümden açar ya
da kapatır. Altındaki açıklama durumu söyler:

| Açıklama | Anlamı |
|---|---|
| Ödeme sayfasında seçenek olarak sunuluyor. | Anahtar açık ve en az bir aktif hesap var. |
| Açık, ancak aktif hesap olmadığı için ödeme sayfasında gösterilmiyor. | Anahtar açık ama aktif hesap yok. |
| Kapalı; ödeme sayfasında gösterilmiyor. | Anahtar kapalı. |

### Havale indirimi {#havale-indirimi}

| Alan | Açıklama |
|---|---|
| Havale indirimi (%) | 0–50, varsayılan **0** (indirim yok). Ödeme ekranında havale / EFT seçilince **KDV dahil genel toplamdan** (kargo dahil) düşülür ve siparişe "Havale indirimi (%x)" satırı olarak yazılır. |

**Örnek:** Ara toplam 10.000 TL + KDV 2.000 TL + kargo 150 TL = 12.150 TL. Havale indirimi %2 →
243,00 TL indirim, genel toplam **11.907,00 TL**.

Havale indirimi tekliften oluşan siparişlerde de uygulanır; cari bakiye için yapılan havale
bildirimlerinde uygulanmaz. Yalnız belirli bayilere ya da koşullara bağlı bir havale indirimi
istiyorsanız bunun yerine bir [kampanya](/musteriler/kampanyalar#ornek-havale) kullanın; ikisini
birlikte açarsanız havaleyle ödeyen iki indirimi birden alır.

### Hesap ekleme ve düzenleme

**Yeni hesap** düğmesi (ya da satırdaki düzenle) bir yan pencere açar:

| Alan | Açıklama |
|---|---|
| Banka | Zorunlu, en fazla 255 karakter (ör. Ziraat Bankası). |
| Şube | İsteğe bağlı (ör. Nilüfer / 1234). |
| Hesap sahibi | Zorunlu, en fazla 255 karakter. |
| IBAN | Zorunlu. Boşluklar silinir, harfler büyütülür; iki harf + iki rakam + 10–30 harf/rakam olmalıdır (ör. TR12 0006 4000 0011 2345 6789 01). Listede gruplanmış gösterilir. |
| Hesap no | İsteğe bağlı, en fazla 32 karakter. |
| Para birimi | İsteğe bağlı, aktif para birimlerinden; boşsa "Belirtilmedi". |
| Sıra | Listede ve müşteriye gösterimde sıralama (küçük önce). |

Yeni hesap **aktif** olarak eklenir. Tablo sütunları: Sıra, Banka, Hesap sahibi, IBAN, Para
birimi, **Aktif** anahtarı ve işlemler. Aktif hesaplar havale / EFT ödemesinde, sipariş ekranında
ve sipariş e-postasında gösterilir; pasif hesaplar gösterilmez. Silme geri alınamaz; hesabı
yalnızca gizlemek için pasif yapın.

Aktif hesap yoksa havale seçeneği hiçbir yerde çıkmaz ve bayi havale bildirimi de yapamaz.

## Havaleyle verilen sipariş {#siparis}

1. Bayi ödeme ekranında **Havale / EFT**'yi seçer. Ekranda "Banka hesap bilgilerimiz sipariş onay
   sayfasında ve e-postanızda yer alır. Açıklamaya sipariş numaranızı yazmayı unutmayın." yazar.
2. Sipariş **Ödeme Bekleniyor** durumunda açılır. Bu aşamada cariye borç yazılmaz. Ödeme
   alınana kadar (sipariş iptal edilmediyse) bayinin sipariş detayında **Havale / EFT bilgileri**
   kartı aktif banka hesaplarınızı ve açıklamaya sipariş numarasını yazma hatırlatmasını gösterir.
   Vitrin modülü kuruluysa aynı kart vitrin müşterisinin **Hesabım › Siparişlerim** detayında da
   görünür.
3. Para hesabınıza geçince iki yoldan biriyle işaretlenir:
   - sipariş detayında ödemeyi alındı olarak işaretlersiniz (bkz. [Siparişler](/satis/siparisler)), ya da
   - bayinin gönderdiği **havale bildirimini** onaylarsınız.
4. Siparişin ödeme durumu **Ödendi**, sipariş durumu **Hazırlanıyor** olur; stok düşülür ve cariye
   siparişin borcu ile ödemenin alacağı birlikte yazılır (bakiye değişmez, sipariş kapanmış olur).

Cari Ayarları'nda havale için **en düşük tutar** girildiyse bu tutarın altındaki siparişte havale
seçeneği çıkmaz (bkz. [Cari Ayarları](/cari/#cari-ayarlari)). Bayinin izinli ödeme yöntemlerinde
havale işaretli değilse de çıkmaz.

## Bayinin havale bildirimi {#bayi-bildirimi}

Bayi, bayi panelindeki **Cari Hesabım** ekranında **Havale bildirimi yap** ile yaptığı ödemeyi
bildirir ("Yaptığınız ödemeyi dekontuyla bildirin; onaylanınca carinize işlenir."). Bu düğme
yalnız en az bir aktif banka hesabı varken görünür; vitrin müşterilerinde yoktur.

| Alan | Açıklama |
|---|---|
| Tutar | Zorunlu, 0'dan büyük, ana para biriminde. |
| Havale tarihi | Zorunlu; ileri tarih olamaz. |
| Gönderilen hesap | Aktif hesaplarınızdan biri ("Banka · IBAN") ya da **Belirtmek istemiyorum**. |
| Sipariş (isteğe bağlı) | Ödemesi bekleyen ya da kısmen ödenmiş, iptal edilmemiş siparişlerden biri ("numara · tutar") ya da **Cari bakiyeme**. |
| Gönderen (hesap sahibi) | İsteğe bağlı, en fazla 255 karakter. |
| Açıklama | İsteğe bağlı, en fazla 500 karakter. |
| Dekont | İsteğe bağlı; görsel ya da PDF (JPG, PNG, WEBP, PDF), en fazla 5 MB. |

**Bildir**'e basınca "Ödeme bildiriminiz alındı; onaylanınca carinize işlenecek." mesajı çıkar.
Mağazanın sipariş bildirim e-posta adresi girilmişse bu adrese yeni bildirim e-postası gider.
Bayi son 20 bildirimini **Havale bildirimlerim** listesinde durumu ve (reddedildiyse) ret
gerekçesiyle görür.

## Havale Bildirimleri ekranı {#bildirimler}

**Mağaza › Ödemeler › Havale Bildirimleri** — bayilerin bildirdiği havaleler.

| Alan | Açıklama |
|---|---|
| Durum filtresi | **Onay bekliyor** (varsayılan), **Onaylandı**, **Reddedildi** ya da **Tümü**. |
| Müşteri | Hesap (tıklayınca müşteri detayı) ve bildirimi yapan kullanıcı. |
| Havale | Havale tarihi, banka, gönderen, açıklama, bağlı sipariş. |
| Durum | Durum; sonuçlandıysa kimin, ne zaman yaptığı ve ret gerekçesi. |
| Tutar | Bildirilen (onaylandıysa işlenen) tutar. |
| İşlem | **Dekontu aç**, **Onayla**, **Reddet** (yalnız onay bekleyenlerde). |

Dekontlar herkese açık olmayan bir alanda saklanır; **Dekontu aç** kısa süreli bir bağlantıyla
açar.

### Onaylama

1. **Onayla**'ya basın. Pencerede **Hesaba geçen tutar** alanı bildirilen tutarla dolu gelir;
   hesabınıza farklı tutar geçtiyse düzeltin.
2. Onaylayın. "… ödeme cariye işlendi." mesajı çıkar. Sonuç:

| Durum | Ne olur |
|---|---|
| Bildirim bir siparişe bağlı, sipariş **Ödeme Bekleniyor** (ya da **Ödeme Başarısız**) durumunda, ödemesi bekliyor ve tutar sipariş tutarını karşılıyor | Sipariş ödenmiş olur ve hazırlanmaya alınır (geçmişe "Havale bildirimi onaylandı (tarih)." notu). |
| Diğer tüm durumlar (siparişe bağlı değil, tutar yetmiyor, sipariş vadeli ya da zaten hazırlanıyor …) | Tutar cariye **alacak** yazılır; önce bağlı siparişe, kalanı en eski borçtan başlayarak dağıtılır (bkz. [FIFO](/cari/#fifo)). |

Ödemenin tarihi bildirimdeki **havale tarihidir**.

### Reddetme

**Reddet**'e basın, **Ret gerekçesi**'ni yazın (zorunlu, en fazla 255 karakter; ör. "hesaba
ulaşmadı, tutar uyuşmuyor"). Cariye bir şey yazılmaz.

Onay ya da ret sonrası bildirimi yapan bayi kullanıcısına e-posta ve panel bildirimi gider.
Sonuçlanmış bir bildirim yeniden onaylanamaz ya da reddedilemez.

## Yetkiler

"Havale bildirimlerini listele", "Havale bildirimi dekontunu görüntüle", "Havale bildirimini
onayla", "Havale bildirimini reddet"; banka hesapları için "Banka hesaplarını listele", "Banka
hesabı ekle / güncelle / sil", "Banka hesabı durumunu değiştir", "Havale / EFT ödemesini aç /
kapat", "Havale indirimini düzenle". Bkz. [Kullanıcılar, roller ve yetkiler](/yonetim/roller-yetkiler).
