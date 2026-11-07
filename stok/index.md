# Depolar ve lokasyonlar

Stok menüsü **Mağaza › Stok** altındadır:

| Menü | Ne işe yarar |
|---|---|
| **Stok Durumu** | Ürünlerin depo depo miktarı; giriş, çıkış, sayım, transfer, lokasyon değişimi. Bkz. [Stok işlemleri](/stok/stok-islemleri) |
| **Toplama Listesi** | Siparişleri raftan toplamak için yazdırılabilir liste. Bkz. [Toplama listesi](/stok/toplama-listesi) |
| **Mal Kabul** | Tedarikçi irsaliyesi / faturasıyla stok girişi. Bkz. [Mal kabul](/stok/mal-kabul) |
| **Sayım** | Depo ya da raf sayım oturumları. Bkz. [Sayım](/stok/sayim) |
| **Stok Hareketleri** | Stoğa yapılan her değişikliğin kaydı. Bkz. [Stok hareketleri](/stok/stok-islemleri#stok-hareketleri) |
| **Lot / Seri No** | Yalnız lot / seri no takibi açıksa görünür. Bkz. [Lot, seri no ve SKT](/stok/lot-seri-skt) |
| **Depolar** | Depo tanımları, lokasyonlar ve depo detayı (bu sayfa) |
| **Stok Ayarları** | Varsayılan depo, kritik stok, izlenebilirlik. Bkz. [Stok ayarları](/stok/stok-ayarlari) |

Gündelik işlerin adım adım anlatımı için [Depo iş akışları](/stok/is-akislari) sayfasına bakın.

::: info Maliyet tutulmaz
Sistem stok miktarını ve hareketlerini izler; alış fiyatı, maliyet ve muhasebe kaydı tutmaz.
Bunlar muhasebe programınızın (ERP) işidir.
:::

## Stok nasıl tutulur? {#stok-nasil-tutulur}

Stok üç katmanda tutulur:

1. **Lokasyon** — ürünün bir rafta (ve lot takipliyse belirli bir lotta) kaç adet olduğu.
2. **Depo toplamı** — ürünün o depodaki tüm lokasyonlarının toplamı.
3. **Satılabilir stok** — **aktif** ve **satılabilir** depoların toplamı; lot / seri no takibi
   açıksa son kullanma tarihi geçmiş lotlar bu toplama sayılmaz. Sitede, bayi panelinde ve
   sepette görünen stok budur.

Lokasyon kullanmasanız da sistem çalışır: her deponun bir **Atanmamış** lokasyonu vardır ve
lokasyon seçilmeden yapılan ilk girişler oraya düşer.

## Depolar listesi

**Mağaza › Stok › Depolar**

Sayfa başlığında depo sayısı ve tüm depolardaki toplam stok adedi yazar.

| Sütun | Açıklama |
|---|---|
| Sıra | Deponun sıra numarası. Sipariş düşümünde öncelikli depodan sonra diğer depolar bu sırayla denenir |
| Depo | Depo adı (tıklayınca depo detayı açılır), kodu ve adresi. **Varsayılan** ve **Satışa kapalı** etiketleri burada görünür |
| Telefon | Deponun telefonu |
| Durum | Aktif / Pasif |
| Toplam stok | Depodaki tüm ürünlerin toplam adedi (eksi bakiyeler dahil) |

Satır sonundaki **⋯** menüsünde: **Detay** (depo detayı), **Düzenle** (depo formu) ve **Stok
durumu** (Stok Durumu ekranını bu depoya süzülmüş açar).

## Depo ekleme ve düzenleme {#depo-formu}

**Yeni depo** düğmesi ya da satırdaki **Düzenle** sağdan bir panel açar.

| Alan | Açıklama |
|---|---|
| Kod | Zorunlu, en fazla 32 karakter. Her depoda farklı olmalıdır. Stok Durumu'nda sütun başlığı olarak görünür |
| Sıra | 0 ya da daha büyük tam sayı; boş bırakılırsa 0. Listelerde ve sipariş düşümünde depoların sırası |
| Ad | Zorunlu, en fazla 255 karakter |
| Adres | İsteğe bağlı, en fazla 1000 karakter |
| Telefon | İsteğe bağlı, en fazla 32 karakter |
| Durum | **Aktif** (varsayılan) ya da **Pasif** |
| Satılabilir depo | Varsayılan olarak işaretli. İşaretliyse deponun stoğu satılabilir stoğa dahil edilir ve siparişler buradan düşebilir |

### Nasıl yapılır? — Yeni depo eklemek

1. **Mağaza › Stok › Depolar** ekranında **Yeni depo**'ya basın.
2. Kod ve adı yazın; gerekiyorsa sıra, adres ve telefonu girin.
3. Depo satışa açık olmayacaksa (hurda, karantina, iade deposu gibi) **Satılabilir depo**
   işaretini kaldırın.
4. **Kaydet**. Depo için **Atanmamış** lokasyonu kendiliğinden açılır.

### Varsayılan depo

- Sistemdeki **ilk depo kendiliğinden varsayılan** olur. Kurulumda **Merkez Depo** (kod `DEPO`)
  oluşturulur ve varsayılan olarak işaretlenir.
- Varsayılan depo **yalnız** [Stok Ayarları](/stok/stok-ayarlari) ekranından değiştirilir; depo
  formunda yalnız "Varsayılan satış deposu. Değiştirmek için Stok Ayarları." notu görünür.
- Varsayılan depo **pasif yapılamaz** ve **silinemez**. Önce başka bir depoyu varsayılan yapın.
- Siparişlerde stok önce siparişin deposundan (bayinin bölge deposu, yoksa varsayılan depo),
  yetmezse diğer aktif ve satılabilir depolardan **Sıra** numarasına göre düşülür.

### Satılabilir ve pasif depo

- **Satılabilir** işareti kaldırılan ya da **pasif** yapılan deponun stoğu satılabilir stoktan
  hemen çıkar; ürünlerin sitede görünen stoğu yeniden hesaplanır.
- Satışa kapalı depo, Stok Durumu'nda sütun başlığında **\*** ile işaretlenir.
- Pasif depo mal kabul, sayım başlatma ve Stok Ayarları'ndaki depo listelerinde çıkmaz.

### Depo silme

Silme, depo düzenleme panelindeki sil düğmesiyle yapılır ve onay ister. Depo yalnız şu üç koşul
birlikte sağlanırsa silinir:

1. Varsayılan depo değildir.
2. Hiçbir üründe sıfırdan farklı stoğu yoktur — varsa önce stokları
   [transfer edin](/stok/stok-islemleri#transfer).
3. Hiç stok hareketi olmamıştır.

Hareket geçmişi denetim kaydıdır ve silinmez; bir kez kullanılmış depoyu silmek yerine
**pasife alın**.

## Depo detayı {#depo-detayi}

Depolar listesinde depo adına ya da **⋯ › Detay**'a basınca açılır.

**Başlık:** depo adı, Aktif / Pasif, **Varsayılan** ve **Satışa kapalı** etiketleri; altında
kod, lokasyon sayısı (Atanmamış hariç), stoğu olan ürün sayısı ve toplam adet. Sağ üstte
**Depolar** (listeye dönüş) ve **Excel'e aktar** düğmeleri vardır.

Sayfada dört bölüm vardır:

### 1. Lokasyonlar

| Sütun | Açıklama |
|---|---|
| Lokasyon | Lokasyon kodu. Koda tıklayınca aşağıdaki **Depodaki ürünler** listesi yalnız bu lokasyondaki ürünlere süzülür; yeniden tıklayınca süzme kalkar |
| Koridor / Raf / Göz | Kodu oluşturan parçalar |
| Ürün | Lokasyonda stoğu olan ürün çeşidi |
| Adet | Lokasyondaki toplam adet; eksi ise kırmızı |
| Aktif | Lokasyonu açıp kapatan anahtar. Atanmamış'ta "Sistem" yazar |
| İşlemler | Düzenle (kalem simgesi) |

Üstte **Toplu oluştur** ve **Lokasyon ekle** düğmeleri vardır. Bkz.
[Lokasyonlar](#lokasyonlar).

### 2. Depo bilgileri

Kod, adres, telefon, satış durumu (Satışa açık / Satışa kapalı), lokasyon sayısı, ürün çeşidi
ve toplam adet.

### 3. Depodaki ürünler

Depoda stoğu sıfırdan farklı olan ürünler, ada göre sıralı, sayfa başına 50 ürün.

- **Süzme:** lokasyon seçimi ("Tüm lokasyonlar") ve **Ürün adı veya SKU ara** kutusu.
- **Ürün:** görsel, ürün adı (ürün formuna gider), SKU ve kategori.
- **Lokasyonlar:** ürünün bu depodaki her lokasyonu ayrı etiket olarak: `lokasyon · lot: miktar`.
  Eksi miktarlı ya da son kullanma tarihi geçmiş lot etiketi kırmızıdır; etiketin üzerine
  gelince SKT görünür.
- **Miktar:** depo toplamı; eksi ise kırmızı.
- **İşlemler:** çift ok simgesi **Stok işlemi** panelini açar — bu ekrandan açıldığında depo bu
  depo, işlem türü **Lokasyon değiştir** olarak gelir (değiştirilebilir). Saat simgesi ürünün
  bu depodaki hareketlerini açar.

### 4. Stok hareketleri

Depoya ait son hareketler (sayfa başına 50): Tarih, Ürün, Lokasyon, Tür, Miktar, Bakiye,
Referans / Not, Kullanıcı. Referanstaki numaraya tıklanınca hareketin kaynağına göre siparişin,
mal kabulün ya da sayımın detayı açılır. **Filtreli hareket ekranı** düğmesi
[Stok Hareketleri](/stok/stok-islemleri#stok-hareketleri) ekranını bu depoya süzülmüş açar.

## Lokasyonlar (koridor → raf → göz) {#lokasyonlar}

Lokasyon, ürünün depodaki yeridir. Kodu **koridor-raf-göz** parçalarından oluşur (ör.
`A-03-2`). Parçalardan yalnız biri ya da ikisi de kullanılabilir (ör. göz kullanmayan bir
depoda `A-03`).

### Atanmamış lokasyonu

Her deponun silinemeyen bir **Atanmamış** lokasyonu vardır:

- Lokasyon kullanmıyorsanız tüm stok burada durur; hiçbir şey yapmanız gerekmez.
- Yeri belirsiz girişler ve stok yetmeden yapılan düşümler (eksi bakiye) buraya yazılır.
- Düzenlenemez, kapatılamaz, silinemez. Listelerde ve toplama sırasında **her zaman en
  sondadır**.

### Tek lokasyon ekleme

Depo detayında **Lokasyon ekle**:

| Alan | Açıklama |
|---|---|
| Koridor | Ör. `A`. En fazla 10 karakter, yalnız harf ve rakam |
| Raf | Ör. `03`. En fazla 10 karakter, yalnız harf ve rakam |
| Göz | Ör. `2`. En fazla 10 karakter, yalnız harf ve rakam |

- En az bir parça girilmelidir. Parçalar büyük harfe çevrilip `-` ile birleştirilir.
- Aynı depoda aynı kod iki kez olamaz. `ATANMAMIS` kodu sisteme ayrılmıştır.
- Tek eklenen lokasyon toplama sırasında **en sona** (Atanmamış'tan önce) eklenir.

::: tip Biçimi tutarlı tutun
Toplu oluşturucu raf numarasını sıfırla doldurur (`A-03`). Elle eklerken de aynı biçimi
kullanın; `A-3` ile `A-03` farklı lokasyonlardır.
:::

### Toplu lokasyon oluşturma {#toplu-lokasyon}

Depo detayında **Toplu oluştur**: **koridorlar × raf aralığı × göz aralığı** kadar lokasyon
açılır; zaten var olan kodlar atlanır.

| Alan | Açıklama |
|---|---|
| Koridorlar | Zorunlu. Virgül ya da boşlukla ayırın (ör. `A, B, C`). Büyük harfe çevrilir; tekrarlar bir kez sayılır |
| İlk raf | Zorunlu, 0–999. Varsayılan 1 |
| Son raf | Zorunlu, ilk raftan küçük olamaz, en fazla 999. Varsayılan 10 |
| İlk göz | İsteğe bağlı, 0–99 |
| Son göz | İsteğe bağlı, ilk gözden küçük olamaz, en fazla 99 |

- Göz alanları **ya ikisi birden doldurulur ya ikisi birden boş bırakılır**. Boşsa lokasyonlar
  koridor-raf düzeyinde açılır (`A-01`, `A-02` …).
- Raf numarası en az iki basamağa sıfırla doldurulur (`01`); son raf 100 ve üstündeyse üç
  basamağa (`001`). Göz numarası son gözün basamak sayısına doldurulur (son göz 12 ise `01`
  … `12`).
- Tek seferde **en fazla 2000** lokasyon oluşturulabilir.

**Örnek.** Koridorlar `A, B`, ilk raf 1, son raf 10, ilk göz 1, son göz 4:

- 2 koridor × 10 raf × 4 göz = **80 lokasyon**.
- Kodlar: `A-01-1`, `A-01-2`, `A-01-3`, `A-01-4`, `A-02-1` … `A-10-4`, `B-01-1` … `B-10-4`.
- Toplama sırası da bu sıradır: A koridorunun tüm rafları, sonra B koridoru.
- Aynı işlemi daha sonra son raf 12 ile tekrarlarsanız yalnız eksik olan `A-11-*`, `A-12-*`,
  `B-11-*`, `B-12-*` (16 lokasyon) açılır ve sıranın sonuna eklenir.

### Lokasyon sırası = toplama sırası {#lokasyon-sirasi}

Lokasyonlar **oluşturuldukları sırayla** dizilir (toplu oluşturmada koridor → raf → göz
sırasıyla). Bu sıra:

- depo detayındaki lokasyon listesinin,
- [toplama listesinin](/stok/toplama-listesi),
- sipariş ve çıkışta stoğun hangi raftan düşüleceğinin,
- [Depo Excel'inin](#depo-exceli) sırasıdır. **Atanmamış** her zaman en sondadır.

Ekranda sonradan sıra değiştirme yoktur ve bir lokasyonun kodunu düzenlemek sırasını
değiştirmez. Bu yüzden lokasyonları depo içindeki yürüyüş rotanıza göre oluşturun.

### Lokasyon düzenleme, kapatma, silme

- **Düzenle** (kalem simgesi): koridor, raf, göz değiştirilir; kod yeniden oluşur. İçindeki
  stok yerinde kalır.
- **Aktif anahtarı:** kapatılan lokasyon stok işlemi, mal kabul ve sayım formlarındaki lokasyon
  listelerinde çıkmaz. İçindeki stok silinmez ve depo toplamında kalır; kapatmadan önce
  ürünleri başka lokasyona taşıyın.
- **Silme:** düzenleme panelindeki sil düğmesiyle. Yalnız **stoğu olmayan** lokasyon silinir;
  stok varsa düğme kapalıdır ve önce ürünleri
  [başka lokasyona taşımanız](/stok/stok-islemleri#lokasyon-degistir) gerekir.

### Lokasyon seçilmezse ne olur?

| İşlem | Lokasyon boşsa |
|---|---|
| Giriş (hızlı giriş, mal kabul, transfer girişi, iade) | Ürünün o depoda **en çok bulunduğu** lokasyona; ürün depoda henüz hiçbir rafta yoksa **Atanmamış**'a |
| Çıkış, sipariş, transfer çıkışı | Toplama sırasıyla stoğu olan lokasyonlardan (lot takipli üründe önce SKT'si en yakın lot). Stok yetmezse kalan kısım Atanmamış'ta eksiye düşer |

## Depo Excel'i {#depo-exceli}

Depo detayında **Excel'e aktar** deponun stoğunu indirir (`depo-KOD-tarih.xlsx`). Yalnız
miktarı sıfırdan farklı satırlar gelir; sıralama lokasyon sırasına, sonra SKU'ya göredir.

| Sütun | Açıklama |
|---|---|
| Lokasyon | Lokasyon kodu (ya da Atanmamış) |
| SKU | Ürün stok kodu |
| Ürün | Ürün adı |
| Marka | Ürünün markası |
| Kategori | Ürünün kategorisi |
| Barkod | Ürün barkodu |
| Lot / Seri No | Lot takipli üründe lot ya da seri numarası |
| SKT | Lotun son kullanma tarihi (gg.aa.yyyy) |
| Birim | Ürünün birimi |
| Miktar | O lokasyondaki (ve lottaki) adet |
| Kritik Stok | Ürünün kritik stok eşiği (ürüne özel, yoksa genel eşik) |

Aynı ürün birden çok lokasyonda ya da lotta duruyorsa her biri ayrı satırdır. Liste sayım
öncesi kontrol listesi olarak da kullanılabilir.

## Bayinin bölge deposu {#bolge-deposu}

Farklı bölgelerde depolarınız varsa her bayiye bir **bölge deposu** atayabilirsiniz:
**Müşteriler › bayi detayı › Bayi ayarları › Bölge deposu**. Listede yalnız aktif ve satılabilir
depolar çıkar; **Atanmamış (tüm depolar)** seçeneği atamayı kaldırır.

- Bayinin siparişi önce bölge deposundan, yetmezse diğer satılabilir depolardan (Sıra
  numarasına göre) düşülür.
- Bayi panelindeki sipariş ekranında toplam stoğun yanında **"bölge deponuzda N"** görünür.
- Bayinin ne kadar sipariş verebileceği toplam satılabilir stoktan hesaplanır.

Bölge deposu atanmamış bayi ve müşterilerde önce varsayılan depo kullanılır. Atanan depo pasife
alınırsa ya da satılamaz yapılırsa atama yok sayılır.

## Stok ayarları

Varsayılan satış deposu, kritik stok eşiği ve lot / seri no takibi gibi ayarlar ayrı sayfada
anlatılır: [Stok ayarları](/stok/stok-ayarlari).
