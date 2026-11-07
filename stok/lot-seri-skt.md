# Lot, seri no ve SKT

Gıda, kozmetik, ilaç, elektronik gibi parti ya da seri numarasıyla izlenmesi gereken ürünler
için. **İsteğe bağlıdır** ve varsayılan olarak kapalıdır.

## Açma ve kapama {#acma}

**Mağaza › Stok › Stok Ayarları › Lot / seri no ve SKT takibi**

Açınca:

- ürün formunda **İzlenebilirlik** ve **Son kullanma tarihi (SKT) takibi** alanları,
- **Mağaza › Stok › Lot / Seri No** menüsü,
- Stok Durumu'nda **SKT'si yaklaşan** / **SKT'si geçmiş (stokta)** süzgeçleri,
- Stok Ayarları'nda **SKT uyarı süresi (gün)** alanı görünür.

Kapatırsanız tüm ürünler takipsiz davranır ve bu alanlar gizlenir. Ürünlerin ayarları ve kayıtlı
lotlar **silinmez**; yeniden açınca geri gelir.

## Ürün ayarı {#urun-ayari}

Ürün formunun **Stok** bölümünde:

| Alan | Açıklama |
|---|---|
| İzlenebilirlik | **Takip yok**, **Lot / parti** (parti numarasıyla) ya da **Seri numarası** (her adet ayrı numarayla) |
| Son kullanma tarihi (SKT) takibi | İşaretliyse girişte SKT zorunlu olur; süresi geçen lot satılmaz. Yalnız İzlenebilirlik "Lot / parti" ya da "Seri numarası" iken etkilidir |

- Ürünün kayıtlı lotları varken izlenebilirliği değiştirirseniz mevcut kayıtlar korunur
  (formda uyarı çıkar).
- Bir **seri numarası** tüm depolarda toplam en fazla 1 adet olabilir.
- Lot ve seri numaraları büyük harfe çevrilerek saklanır; en fazla 64 karakterdir.

## Lotlu stok nasıl girilir? {#giris}

| Yol | Ne zaman |
|---|---|
| [Mal kabul](/stok/mal-kabul) | Önerilen. Çok satır, çok seri numarası tek seferde |
| [Stok Durumu › Stok girişi](/stok/stok-islemleri#giris) | Tek lot ya da tek seri numarası + SKT |
| [Sayım](/stok/sayim) | Sayımda yeni lot açılabilir (SKT ile) |
| Depolar arası transfer | Lotlar hedef depoya aynen taşınır |

Excel ürün aktarımı lot / seri takipli ürünlerin stoğunu **değiştirmez**.

Lot seçimi işleme göre:

| İşlem | Lot |
|---|---|
| Giriş | Lot / seri no **yazılır** (zorunlu) |
| Çıkış, transfer | İsteğe bağlı; boşsa otomatik (FEFO) |
| Hızlı sayım, lokasyon değiştir | **Zorunlu**; var olan lotlardan seçilir |

## Çıkış ve sipariş: önce SKT'si yakın olan (FEFO) {#fefo}

Lot seçilmeden yapılan her düşümde (sipariş, çıkış, transfer) sıra şöyledir:

1. **SKT'si en yakın** lot önce; **SKT'si olmayan** lotlar en sonda.
2. SKT'ler eşitse **önce kaydedilen** lot.
3. Aynı lot birden çok raftaysa **toplama sırası** (koridor → raf → göz, Atanmamış en sonda).
4. **Süresi geçmiş lotlar atlanır.**
5. Hiç lot kalmazsa yetmeyen kısım **lot belirsiz** olarak Atanmamış'ta eksiye düşer (ön
   sipariş).

**Örnek.** Bugün 15 Şubat. Merkez Depo'daki lotlar:

| Lot | SKT | Miktar | Lokasyon |
|---|---|---|---|
| L0 | 1 Şubat | 4 | A-01 |
| L1 | 10 Mart | 5 | A-02 |
| L2 | 1 Mart | 3 | B-01 |
| L3 | (yok) | 10 | B-02 |

- Satılabilir stok 18'dir (L0 süresi geçtiği için sayılmaz).
- 6 adetlik sipariş: önce **L2**'den 3, sonra **L1**'den 3 düşülür. L1'de 2 kalır, L3'e
  dokunulmaz. Sipariş detayında ve toplama listesinde `B-01 · L2 ×3` ve `A-02 · L1 ×3` görünür.
- L0 hiçbir zaman otomatik seçilmez. İmha etmek için Stok Durumu'ndan **Stok çıkışı** yapıp
  **L0**'ı açıkça seçin.

İptal ve iade, stoğu siparişte düştüğü lota ve lokasyona geri ekler.

## SKT'si geçen stok ve gece işi {#skt-gecen}

- Son kullanma tarihi **bugünden önce** olan lot "süresi geçmiş" sayılır: satılabilir stoğa
  sayılmaz, otomatik seçilmez; Stok Durumu'nda ve depo detayında kırmızı görünür.
- Süresi geçen lot depoda **durmaya devam eder** (depo toplamında görünür); siz çıkış yapana
  kadar silinmez.
- SKT dolması bir stok hareketi değildir. Bu yüzden sistem **her gece 00:10'da** son iki günde
  süresi dolan lotların ürünlerinde satılabilir stoğu yeniden hesaplar. Böylece süresi gece
  dolan lot sabah sitede satılabilir görünmez.
- **SKT uyarı süresi** (Stok Ayarları, varsayılan 30 gün) içinde dolacak lotlar "SKT yaklaşan"
  sayılır.

::: info
Gece işinin çalışması için sunucuda zamanlanmış görevlerin açık olması gerekir. Bkz.
[Kurulum › Zamanlanmış görevler](/baslangic/kurulum#cron).
:::

## Stok yokken satılan ürünler: lot belirsiz {#lot-belirsiz}

Ön siparişle (ürün formunda **Stok yokken satışa izin ver** işaretli) stok yokken satılan ya da
lot seçilmeden stoktan fazla çıkılan adetler **lot belirsiz** olarak Atanmamış'ta eksiye düşer.
Sipariş detayında bu kalemde **"lot belirsiz"** (seri takiplide "seri numarası belirsiz") kırmızı
yazar.

Aynı **depoya** lotlu bir giriş yapıldığında (mal kabul, stok girişi, transfer girişi, sayım
fazlası) sistem bunu kendiliğinden düzeltir:

1. Önce eksik düşülmüş **siparişler**, en eskiden başlayarak gelen lota bağlanır.
2. Sonra kalan **sipariş dışı** lot belirsiz eksi, gelen lottan kapatılır.

Her iki adım **Lot Değişimi** hareketi yazar; depo toplamı değişmez. SKT'si geçmiş bir lotla
giriş yapılırsa düzeltme yapılmaz.

**Örnek.** Merkez Depo'da ürünün stoğu 0. Ön siparişle iki sipariş geldi: **S1** 3 adet, **S2**
2 adet. Atanmamış'ta lot belirsiz **−5** var.

- Mal kabulle **L100** lotundan 10 adet gelir:
  - S1'in 3 adedi L100'e bağlanır → L100'de 7 kalır.
  - S2'nin 2 adedi L100'e bağlanır → L100'de 5 kalır.
  - Lot belirsiz eksi 0 olur. Sipariş detaylarında ve toplama listesinde L100 görünür.
- Gelen lot yalnız **4 adet** olsaydı: S1'in 3 adedi ve S2'nin 1 adedi bağlanır; S2'nin kalan 1
  adedi **lot belirsiz** kalır ve bir sonraki lotlu girişte kapatılır.

## Lot / Seri No ekranı {#lot-ekrani}

**Mağaza › Stok › Lot / Seri No** (yalnız takip açıkken görünür). Lotlar SKT'ye göre sıralıdır
(en yakın üstte, SKT'siz en sonda), sayfa başına 50 kayıt.

| Sütun | Açıklama |
|---|---|
| Lot / Seri no | Kod ve türü (Lot / parti ya da Seri numarası) |
| Ürün | Ürün adı ve SKU |
| SKT | Son kullanma tarihi; **Süresi geçmiş** ya da **SKT yaklaşıyor** etiketi |
| Yer | Lotun bulunduğu depo ve lokasyonlar, her birinde miktar |
| Stok | Lotun toplam stoğu |
| İşlemler | **Hareketler (izlenebilirlik)** |

**Süzgeçler:**

- **Arama:** lot / seri no, ürün adı ya da SKU.
- **Durum:** **Stokta olanlar** (varsayılan), **SKT yaklaşan (N gün)**, **SKT geçmiş (stokta)**,
  **Tümü (geçmiş dahil)** — tükenmiş lotlar da listelenir.
- **Depo:** stoğun bu depoda olmasını şart koşar.

### Lot hareketleri ve geri çağırma

**Hareketler (izlenebilirlik)**, [Stok Hareketleri](/stok/stok-islemleri#stok-hareketleri)
ekranını bu lota süzülmüş açar: lotun hangi mal kabulle geldiği (referans MK…), hangi
siparişlerle çıktığı (sipariş numarası), transferler, sayım düzeltmeleri ve lot değişimleri.

Geri çağırma durumunda: lotu bu ekranda arayın, **Hareketler**'e basın, **Satış** türündeki
satırlardaki sipariş numaralarından müşterilere ulaşın.

Depo Excel'inde de **Lot / Seri No** ve **SKT** sütunları vardır.

## Siparişte lot değiştirme {#siparis-lot-degistir}

Sistem siparişe FEFO ile bir lot ayırır; depoda fiziksel olarak başka bir lot toplandıysa sipariş
detayından düzeltilir.

1. Sipariş detayında ürün satırının altındaki toplama etiketinde (`lokasyon · lot ×adet`)
   **Lotu değiştir** (seri takiplide **Seri numarasını değiştir**) simgesine basın.
2. Pencerede **Mevcut** lot ve adet yazar.
3. **Yeni** listesinden lotu seçin: yalnız **aynı depoda** stokta olan, süresi geçmemiş lotlar
   stok miktarıyla listelenir. Uygun lot yoksa "Bu depoda uygun stok yok" yazar.
4. **Miktar**: 1 ile o etiketteki adet arasında (seri takiplide 1 gelir).
5. **Kaydet**.

Sonuç: eski lot aynı lokasyona geri eklenir, yeni lot aynı depodan düşülür; iki **Lot Değişimi**
hareketi yazılır, sipariş tutarı ve depo toplamı değişmez, sipariş geçmişine "… için lot / seri
no değiştirildi." notu düşer. "Lot belirsiz" bir kalem de bu yolla gerçek lota bağlanabilir.

Bu işlem için **Siparişte lot / seri numarasını değiştir** yetkisi gerekir ve yalnız stoğu düşülmüş siparişlerde
yapılabilir.
