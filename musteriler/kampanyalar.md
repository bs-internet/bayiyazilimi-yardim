# Kampanyalar

Kampanya, koşulları sağlandığında **sepete** otomatik uygulanan bir indirim, hediye ya da kargo
avantajıdır. Kupon girmek gerekmez (kupon kodu koşulu yalnız vitrin eklentisiyle gelir).

Kampanyalar sol menüde **Kampanyalar** başlığının altındadır:

- **Kampanyalar › Kampanyalar**: liste
- **Kampanyalar › Yeni Kampanya**: yeni kampanya formu

## Kampanya listesi {#liste}

Başlıkta toplam kampanya sayısı ve **Yeni kampanya** düğmesi vardır.

| Filtre | Açıklama |
|---|---|
| Arama | Kampanya adında arar (**Ara**). |
| Durum | **Aktif** / **Pasif** (varsayılan "Durum: tümü"). |
| İşlem | İşlem türüne göre (ör. yalnız X Al Y Öde kampanyaları). |

| Sütun | Açıklama |
|---|---|
| Kampanya | Adı (tıklayınca düzenleme formu açılır). Aktif olduğu halde tarih aralığının dışındaysa **Süresi dışında** rozeti çıkar. |
| İşlem | Kısa özet (ör. "3 Al 2 Öde + ücretsiz kargo", "%10 indirim (en fazla ₺500,00)") ve altında işlem türü. |
| Tarih aralığı | Başlangıç: bitiş. İkisi de boşsa **Süresiz**. |
| Aktif | Aç / kapa anahtarı. Kampanyayı listeden aktif ya da pasif yaparsınız. |

Pasif kampanyalar soluk görünür.

## Kampanya formu {#form}

Yeni kampanya **pasif** oluşturulur ("… kampanyası oluşturuldu (pasif). Kontrol edip
aktifleştirin."). Ayarları kontrol ettikten sonra formun başlığındaki ya da listedeki anahtarla
aktif yapın. Düzenleme formunun altında kampanyayı **silme** düğmesi vardır. Silinen kampanya
geçmiş siparişlerde ve raporlarda kayıttaki adıyla görünmeye devam eder.

Form beş bölümden oluşur.

### 1. Genel {#genel}

| Alan | Açıklama |
|---|---|
| Kampanya adı | Zorunlu, en fazla 255 karakter. Sepette ve siparişte bu ad görünür (ör. "Zemin temizleyicilerde 2 Al 1 Öde"). |
| Vitrin etiketi | İsteğe bağlı, en fazla 40 karakter. Kampanyadaki ürünlerin kartında rozet olarak görünür. Boşsa işlemden üretilir: "2 Al 1 Öde", "%10 İndirim", "Hediyeli", "Kademeli İndirim", ücretsiz kargo kampanyasında "Kargo Bedava". |
| Başlangıç | Tarih ve saat. Boş = hemen. |
| Bitiş | Tarih ve saat. Başlangıçtan önce olamaz. Boş = süresiz. |
| Sıra | 0-9999, varsayılan 0. Eşit kazançta **küçük sıra** öne geçer. |

### 2. Kime / ne zaman {#kime}

Kampanyanın sepete uygulanma koşulları. Koşullar **gruplar** halinde girilir:

- Bir grubun içindeki koşulların **hepsi** sağlanmalı (**ve**).
- Gruplardan **biri** sağlanırsa yeter (**veya**).
- Hiç koşul girilmezse kampanya **herkese, her sepette** geçerlidir.

**Koşul ekle (ve)** gruba yeni satır, **Koşul grubu ekle (veya)** yeni grup ekler. En fazla
10 grup, her grupta en fazla 10 koşul olabilir. Her satırda üç alan vardır: **Alan** (koşul
türü), **Mantık** ve **Değer**.

| Koşul | Mantık | Değer | Notlar |
|---|---|---|---|
| Bayi grubu | şunlardan biri / hiçbiri değil | bir ya da birden çok grup | Yalnız bayilerde dolu. Misafir ve vitrin müşterisi hiçbir grupta değildir. |
| Belirli müşteri | şunlardan biri / hiçbiri değil | üyeler (ad ve e-posta ile) | Giriş yapmış bayi ya da müşteri. |
| Sepet tutarı (KDV dahil) | en az / en fazla | tutar, ana para biriminde | Kampanya öncesi KDV dahil sepet tutarı. Sepet başka para birimindeyse girilen tutar kurla çevrilerek karşılaştırılır. |
| Sepetteki ürün adedi | en az / en fazla | adet | Sepetteki tüm ürünlerin toplam adedi. |
| Para birimi | şunlardan biri / hiçbiri değil | para birimleri | Sepetin para birimi. |
| Ödeme yöntemi | şunlardan biri / hiçbiri değil | yöntemler (ör. Havale / EFT) | Yöntem ödeme adımında seçilir; **sepet ekranında sağlanmamış** sayılır. |
| Teslimat ili | şunlardan biri / hiçbiri değil | iller | Ödeme adımında seçilen teslimat adresinin ili. Bayide sepet ekranında **varsayılan teslimat adresinin ili** kullanılır. İl bilinmiyorsa koşul sağlanmamış sayılır. |
| Gün | şunlardan biri / hiçbiri değil | Pazartesi … Pazar | Sipariş anındaki gün. |
| Saat | en az / en fazla | 0-23 | "Saat en az 18" ve "saat en fazla 21" birlikte 18:00-21:59 demektir. |

[Vitrin eklentisi](/vitrin/) kuruluysa ayrıca **Müşteri tipi**, **İlk sipariş** ve **Kupon kodu**
koşulları gelir.

### 3. Hangi ürünlere {#urunler}

İndirimin uygulanacağı sepet ürünleri:

- **Tüm ürünler** (varsayılan): sepetteki her ürün.
- **Koşula uyan ürünler**: en az bir koşul girilmelidir. Girilen koşulların **hepsi** (ve)
  sağlanan ürünler kampanyaya girer. En fazla 10 koşul.

| Koşul | Mantık | Değer | Notlar |
|---|---|---|---|
| Kategori | şunlardan biri / hiçbiri değil | kategoriler ("Üst › Alt" biçiminde) | Seçilen kategorinin **alt kategorileri de** dahildir. |
| Marka | şunlardan biri / hiçbiri değil | markalar | |
| Ürün | şunlardan biri / hiçbiri değil | ürün seçiciyle seçilen ürünler | |
| Üründen alınan adet | en az / en fazla | adet | Sepetteki o satırın (aynı üründen) adedi. |

Ücretsiz / sabit kargo ve hediye ürün işlemlerinde: sepette bu ürünlerden **en az biri**
bulunmalıdır.

### 4. İşlem {#islem}

**İşlem türü** kampanyanın ne kazandıracağını belirler (varsayılan **Yüzde indirim**). Tutar
içeren işlemlerde ayrıca **Para birimi** seçilir (varsayılan ana para birimi). Sepet başka para
birimindeyse tutar kurla çevrilir.

| İşlem türü | Alanlar | Nasıl uygulanır |
|---|---|---|
| **Yüzde indirim** | **İndirim oranı** (%, 0'dan büyük, en fazla 100); **En fazla indirim (KDV hariç)**: boş = sınır yok | Koşula uyan her satıra oran uygulanır. Toplam indirim üst sınırı geçerse sınır kadar indirim yapılır ve satırlara indirimleri oranında dağıtılır. |
| **Tutar indirimi** | **İndirim tutarı (KDV hariç)**; **Uygulama**: **Sepete bir kez** ya da **Her ürün adedine** | Sepete bir kez: tutar, koşula uyan satırlara tutarları oranında dağıtılır (satırların toplamını geçemez). Her ürün adedine: koşula uyan her adet için tutar düşülür. |
| **X Al Y Öde** | **Al** (2-1000 adet), **Öde** (en az 1, Al'dan küçük) | Her satır (tek ürün) ayrı değerlendirilir. Farklı ürünlerin adetleri birleştirilmez. Ücretsiz adet = (adet ÷ Al, aşağı yuvarlanır) × (Al − Öde). |
| **Kargo kampanyası** | — | İndirim yoktur. Yalnız kampanyanın **Kargo** ayarı uygulanır (Ücretsiz ya da Sabit ücret). |
| **Hediye ürün** | **Hediye ürün** (ürün seçici), **Adet** (1-100) | Koşullar sağlanınca ürün sepete 0 tutarlı ayrı satır olarak eklenir. Siparişe geçer ve stoktan düşer. Ürün görünür, sepete eklenebilir ve (sepetteki adediyle birlikte) stokta değilse hediye verilmez. |
| **Kademeli indirim** | **Kademe ölçütü**: **Ürün adedi (her ürün ayrı)** ya da **Sepet tutarı (KDV dahil)**; **Kademeler**: en fazla 10 satır, her satırda **En az** ve **İndirim oranı** | Ulaşılan **en yüksek** kademenin oranı uygulanır. Ürün adedinde her satır kendi adediyle. Sepet tutarında kampanya öncesi KDV dahil sepet tutarına göre koşula uyan bütün satırlara. |

Bütün indirimler **KDV hariç** satır tutarından düşülür; KDV indirimli tutar üzerinden
hesaplanır.

**Kargo** alanı (her işlemde):

| Seçenek | Açıklama |
|---|---|
| Sepete göre hesaplansın | Varsayılan. Kargo normal kurallarla hesaplanır. Kargo kampanyasında seçilemez. |
| Ücretsiz | Kampanya uygulanınca kargo 0. |
| Sabit ücret | **Sabit kargo ücreti** girilir: ana para biriminde, KDV dahil. |

Normal kargo ücreti kampanyanınkinden düşükse (ör. ücretsiz kargo eşiği zaten aşıldıysa)
müşteri lehine normal ücret geçerlidir.

### 5. Kullanım {#kullanim}

| Alan | Açıklama |
|---|---|
| Toplam kullanım sınırı | Kampanya en fazla kaç **siparişte** kullanılsın (ör. ilk 100 sipariş). Boş = sınırsız. |
| Müşteri başına | Her müşteri en fazla kaç kez. Bayi hesabı, üye ya da (misafirde) e-posta başına sayılır. Boş = sınırsız. |
| Bütçe | Müşterilere sağlanan toplam kazanç (indirim + hediye + kargo), ana para biriminde. Bu siparişle bütçe aşılacaksa kampanya **uygulanmaz** (kısmen uygulanmaz). Boş = sınırsız. |
| Birlikte kullanılacak kampanyalar | Bu kampanyayla aynı sepette birlikte uygulanabilecek kampanyalar. Seçim **iki yönlüdür**: A'da B'yi seçmek B'de A'yı da seçer. |

Düzenleme ekranında "Şimdiye kadar N siparişte kullanıldı, toplam kazanç … (iptal edilenler
hariç)." bilgisi görünür. İptal edilen ve ödemesi başarısız siparişler kullanıma ve bütçeye
sayılmaz.

## Birden çok kampanya uyarsa {#secim}

1. Sepete uyan her kampanyanın müşteriye kazandırdığı hesaplanır: **indirim + hediye ürünün
   değeri + kargo kazancı** (ücretsizde kargonun tamamı, sabit ücrette normal ücretle farkı).
   Kazancı olmayan ya da sınırı / bütçesi dolmuş kampanya aday olmaz.
2. Normalde **tek kampanya** uygulanır: en çok kazandıran. Eşitlikte **Sıra**'sı küçük olan
   (sıra da eşitse önce oluşturulan) seçilir.
3. Birbirini **Birlikte kullanılacak kampanyalar**'da seçmiş kampanyalar aynı sepette birlikte
   uygulanabilir. Sistem birleşebilen kampanyalar arasından en çok kazandıran kümeyi seçer.
   Aynı satıra düşen indirimlerin toplamı satır tutarını geçemez. Kargoda en düşük ücret geçerlidir.

## Müşteri kampanyayı nasıl görür? {#musteri}

- **Ürün kartı:** kampanyadaki ürünlerde vitrin etiketi rozeti.
- **Sepet:** "Uygulanan kampanya: *ad* (*özet*)" kutusu. Başka uyan kampanyalar da varsa
  "Sepetinize N kampanya daha uyuyor; en avantajlı olan uygulandı." eklenir. İndirim alan satırda
  kampanya adı yazar. Toplamlarda **Kampanya indirimi (KDV hariç)** satırı görünür.
- **"Daha ekleyin" uyarısı:** bir kampanyanın tek eksiği sepet tutarıysa (ya da kademeli
  indirimde bir üst kademeye az kaldıysa) sepette ":amount daha ekleyin, "*ad*" kampanyasından
  yararlanın." yazar.
- **Ödeme ekranı:** ödeme yöntemi ve teslimat iline bağlı kampanyalar burada, seçim yapılınca
  görünür.
- **Sipariş:** "Kampanya indirimi" satırı. Hediye ürün 0 tutarlı satır.

## Nerede uygulanmaz?

- Teklif listesine ve tekliften oluşan siparişlere kampanya uygulanmaz.
- Kampanya sipariş anında yeniden denetlenir. Bu arada kullanım sınırı dolduysa sipariş
  kampanyasız hesaplanır.

## Örnekler {#ornekler}

### Havale ile ödeyene %3 {#ornek-havale}

| Bölüm | Değer |
|---|---|
| Genel | Ad: "Havale ile ödeyene %3", tarih boş, sıra 0 |
| Kime / ne zaman | Ödeme yöntemi · şunlardan biri · **Havale / EFT** |
| Hangi ürünlere | Tüm ürünler |
| İşlem | Yüzde indirim, oran **3**, en fazla boş; Kargo: Sepete göre hesaplansın |

İndirim sepette görünmez. Ödeme ekranında Havale / EFT seçilince KDV hariç satırlardan düşülür.

::: warning Havale indirimiyle karıştırmayın
**Banka Hesapları** ekranındaki **Havale indirimi** ayrı bir ayardır ve KDV ile kargo dahil
genel toplamdan düşer. İkisini birlikte açarsanız havaleyle ödeyen iki indirimi birden alır.
Genelde yalnız birini kullanın. Bkz. [Havale](/cari/havale#havale-indirimi).
:::

### 3 al 2 öde {#ornek-3al2}

| Bölüm | Değer |
|---|---|
| Kime / ne zaman | boş (herkese) |
| Hangi ürünlere | Koşula uyan ürünler · Kategori · şunlardan biri · "Temizlik" |
| İşlem | X Al Y Öde · Al **3** · Öde **2** |

Bayi "Temizlik" kategorisinden birim fiyatı 50,00 TL (KDV hariç) olan bir üründen **7 adet**
alırsa: 7 ÷ 3 = 2 (aşağı yuvarlanır) × (3 − 2) = **2 adet ücretsiz** → 100,00 TL indirim. Aynı
kategoriden başka bir üründen 2 adet alırsa o satırda indirim olmaz (adetler birleştirilmez).

### 1.000 TL üstü ücretsiz kargo {#ornek-kargo}

| Bölüm | Değer |
|---|---|
| Kime / ne zaman | Sepet tutarı (KDV dahil) · en az · **1000** |
| Hangi ürünlere | Tüm ürünler |
| İşlem | Kargo kampanyası · Kargo: **Ücretsiz** |

Sepet 850 TL iken sepette "150,00 TL daha ekleyin…" uyarısı çıkar. Herkese geçerli kalıcı bir eşik
istiyorsanız kampanya yerine **Kargo Ayarları**'ndaki ücretsiz kargo eşiğini de
kullanabilirsiniz (bkz. [Kargo](/satis/kargo)).

### Altın bayilere kademeli indirim (%3 / %5) {#ornek-kademeli}

| Bölüm | Değer |
|---|---|
| Kime / ne zaman | Bayi grubu · şunlardan biri · **Altın Bayi** |
| Hangi ürünlere | Tüm ürünler |
| İşlem | Kademeli indirim · ölçüt **Sepet tutarı (KDV dahil)** · kademeler: en az **10.000** → %**3**, en az **25.000** → %**5** |

KDV hariç 25.000 TL'lik (KDV dahil 30.000 TL) sepette ulaşılan en yüksek kademe 25.000'dir →
%5 → **1.250,00 TL** indirim. KDV dahil 20.000 TL'lik sepette %3 uygulanır ve sepette üst kademe
için "5.000,00 TL daha ekleyin…" uyarısı görünür.

### 20 adet üstüne hediye ürün {#ornek-hediye}

| Bölüm | Değer |
|---|---|
| Kime / ne zaman | Sepetteki ürün adedi · en az · **20** |
| Hangi ürünlere | Tüm ürünler |
| İşlem | Hediye ürün · ürün: "Mikrofiber bez" · Adet **1** |

Hediye stokta yoksa kampanya hediye vermez (ve kazancı olmadığı için uygulanmaz).

### Hafta sonu %10, en fazla 500 TL {#ornek-hafta-sonu}

| Bölüm | Değer |
|---|---|
| Genel | Başlangıç / bitiş: kampanya dönemi |
| Kime / ne zaman | Gün · şunlardan biri · **Cumartesi**, **Pazar** |
| İşlem | Yüzde indirim · oran **10** · En fazla indirim **500** (TL) |

KDV hariç 8.000 TL'lik sepette %10 = 800 TL olurdu. Üst sınır nedeniyle **500 TL** indirim
yapılır ve satırlara tutarları oranında dağıtılır.

### İki kampanyayı birleştirmek {#ornek-birlesim}

"3 al 2 öde" kampanyasının **Birlikte kullanılacak kampanyalar** alanında "Havale ile ödeyene
%3"ü seçin (diğerinde de otomatik seçilir). Havaleyle ödeyen bayi aynı sepette ikisini birden
alır. Aynı satıra düşen indirimlerin toplamı satır tutarını geçmez.

## Kampanya raporu

**Raporlar › Kampanya** her kampanyanın kaç siparişte kullanıldığını ve müşteriye ne
kazandırdığını gösterir. Bkz. [Raporlar](/yonetim/raporlar#kampanya).
