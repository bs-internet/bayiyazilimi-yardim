# Cari hesap

Her bayinin (ve vitrin müşterisinin) **aldı / verdi** kayıtları sistemde tutulur. Siz panelde
anlık bakiyeyi, ekstreyi ve açık borçları görürsünüz; bayi de kendi panelinde
(**Cari Hesabım**) aldıklarını ve ödediklerini görür.

Muhasebe programı (ERP) bağlantısı gerekmez; sistem tek başına çalışır. İsterseniz bir ERP
modülü hareketleri muhasebe programınıza aktarabilir; modülden gelen kayıtlar ekstrede kaynak
etiketiyle görünür.

## Bakiye {#bakiye}

**Bakiye = toplam borç − toplam alacak.**

| Gösterim | Anlamı |
|---|---|
| **(B)** / **Borçlu** — kırmızı | Müşteri size borçlu |
| **(A)** / **Alacaklı** — yeşil | Müşterinin sizden alacağı var (fazla ödeme, iade …) |
| **Bakiye yok** | Borç ve alacak eşit |

### Para birimi {#para-birimi}

Cari, sistemin **ana para birimiyle** tutulur (varsayılan TL). Başka para birimindeki bir sipariş
ya da ödeme, **siparişin kendi kuruyla** çevrilerek yazılır; ekstrede satırın altında asıl tutar
(ör. "1.250,00 EUR") ayrıca görünür. Elle girilen tahsilat ve dekontlar her zaman ana para
birimindedir.

## Hareketler ne zaman yazılır? {#hareketler}

| Olay | Ekstredeki tür | Yön |
|---|---|---|
| Sipariş **Hazırlanıyor**'a geçer (ya da kargoya verilir / tamamlanır) | Satış | Borç (vadeli siparişte vade tarihiyle) |
| Sipariş iptal edilir | Satış (iptal) | Borcun ters kaydı |
| Ödeme alınır: kart, onaylanan havale bildirimi, siparişte "ödendi", elle tahsilat | Tahsilat | Alacak |
| Ödeme iptal / iade edilir | Tahsilat (iptal) | Alacağın ters kaydı |
| İade talebi tamamlanır (iade tutarı girilmişse) | İade | Alacak |
| … ve para da müşteriye geri ödendiyse | Para iadesi | Borç |
| Elle düzeltme | Dekont | Borç ya da alacak |
| Sisteme geçişte devir | Açılış bakiyesi | Borç ya da alacak |
| Çek / senet karşılıksız çıkar ya da iade edilir | Karşılıksız çek / senet | Borç |

Yarım kalan kart ödemeleri ve ödenmeyen havale siparişleri ekstreye girmez (sipariş
Hazırlanıyor'a geçmeden borç yazılmaz). Üye olmadan verilen (misafir) siparişler cariye yazılmaz.

::: info Kayıtlar silinmez
Yanlış bir kayıt silinmez, **iptal** edilir: sistem aynı tutarda ters kayıt yazar. Ekstrede asıl
kayıt üstü çizili ve **İptal edildi** rozetiyle, ters kayıt **İptal** rozetiyle görünür. Böylece
geçmiş her zaman izlenebilir.
:::

## Cari Durum {#cari-durum}

**Bayiler › Cari Durum** — tüm hesapların bakiyesi tek listede. Başlıkta **toplam
alacağınız** (borçlu hesapların bakiyeleri toplamı) yazar.

| Filtre | Açıklama |
|---|---|
| Arama | Ünvan, hesap kodu, üye adı ya da e-posta. |
| Bakiye | **Hareketi olanlar** (varsayılan: en az bir cari hareketi olan hesaplar), **Borçlular**, **Alacaklılar**. |
| Tür | Yalnız vitrin kuruluyken görünür: **Tüm hesaplar** ya da hesap türü (Bayi, Müşteri). |

| Sütun | Açıklama |
|---|---|
| Hesap | Ünvan (yoksa üye adı) ve hesap kodu. Tıklayınca müşteri detayı açılır. |
| Tür | Bayi / Müşteri ve bayi grubu. |
| Son hareket | Son cari hareketin tarihi. |
| Bakiye | Tutar ve (B) / (A). |

Liste **bakiyesi en büyük** (borç ya da alacak, mutlak değerce) hesaptan başlayarak sıralanır.

## Müşterinin carisi {#musteri-carisi}

Müşteri detayı › **Cari** sekmesi. "Cari durumu ve müşteri carisini görüntüle" yetkisi gerekir.

### Özet kartları

| Kart | Ne zaman | İçerik |
|---|---|---|
| Bakiye | Her zaman | Tutar ve Borçlu / Alacaklı / Bakiye yok |
| Çalışma şekli | Her zaman | Peşin ya da Vadeli (açık hesap); vadelide "30 gün vade" gibi |
| Kullanılabilir limit | Vadelide | Kredi limiti − risk; altında "Limit … · risk … · onayda …". Limit aşıldıysa kırmızı. Limit yoksa "Limitsiz". |
| Vadesi geçen | Vadelide | Vadesi geçmiş açık sipariş borcu ve sipariş sayısı; yoksa "Yok". |

Risk ve kullanılabilir limit: [Peşin ve vadeli çalışma](/cari/vadeli-calisma#risk).

### Açık borçlar

Vadesi **geçmiş** ve vadesine **Cari Ayarları'ndaki vade uyarı süresi** kadar ya da daha az gün
kalmış sipariş borçları listelenir: sipariş numarası, "Vade … · toplam …" ve **N gün geçti**
(kırmızı) / **Bugün** / **N gün kaldı** rozeti. Açık borç yoksa bu kart görünmez.

### Ekstre {#ekstre}

| Bölüm | Açıklama |
|---|---|
| Tarih filtresi | **Başlangıç** ve **Bitiş** seçip **Filtrele**; **Temizle** tüm hareketlere döner. Boşsa tüm hareketler. |
| Sütunlar | **Tarih**, **Açıklama** (tür rozeti, açıklama, sipariş numarası bağlantısı, döviz tutarı, kaydı giren kullanıcı), **Vade**, **Borç**, **Alacak**, **Bakiye** (yürüyen bakiye), **İşlem** (iptal düğmesi). |
| Sıralama | En yeni hareket en üstte. |
| Alt satır | **Devir** (başlangıç tarihinden önceki bakiye), dönemin **Borç** ve **Alacak** toplamları, **Bakiye** (dönem sonu). |

Ekstrenin üstündeki düğmeler (yetkiye göre): **Tahsilat ekle**, **Dekont**, **Excel**, **Yazdır**.

## Tahsilat ekle {#tahsilat}

Müşteriden siparişten bağımsız alınan ödemeyi cariye işler. Ekstre › **Tahsilat ekle**.

| Alan | Açıklama |
|---|---|
| Tür | **Nakit**, **Havale / EFT**, **POS (Kart)**, **Mahsup / Virman**; çek / senet portföyü açıksa **Çek** ve **Senet**. Varsayılan Nakit. |
| Tutar | Zorunlu, 0'dan büyük, ana para biriminde. |
| Tarih | Varsayılan bugün; ileri tarih girilemez. |
| Seri no | Yalnız çek / senette, zorunlu, en fazla 64 karakter. |
| Vade | Yalnız çek / senette, zorunlu. |
| Banka, Şube | Yalnız çekte, isteğe bağlı. |
| Keşideci (çekte) / Borçlu (senette) | İsteğe bağlı. |
| Görsel (isteğe bağlı) | Yalnız çek / senette. JPG, PNG, WEBP ya da PDF, en fazla 5 MB. |
| Açıklama | İsteğe bağlı, en fazla 255 karakter (ör. dekont no, banka). |

**Kaydet**'e basınca ödeme kaydı ve cari alacak yazılır ("… tahsilat cariye işlendi.") ve tutar
[en eski borçtan başlayarak](#fifo) dağıtılır. "POS (Kart)" kendi POS cihazınızdan çektiğiniz
ödemeyi kaydetmek içindir; sanal POS ile kart ödemesi için bkz. [Kartla ödeme](/cari/kartla-odeme).
Çek / senet tahsilatı ayrıca portföye kaydedilir (bkz. [Çek ve senet](/cari/cek-senet)).

## Borç / alacak dekontu ve açılış bakiyesi {#dekont}

Fiyat farkı, düzeltme, kur farkı gibi siparişe bağlı olmayan kayıtlar ve sisteme geçişte devir
bakiyesi için. Ekstre › **Dekont**.

| Alan | Açıklama |
|---|---|
| Yön | **Borç (müşteri borçlanır)** (varsayılan) ya da **Alacak (müşteri alacaklanır)**. |
| Tutar | Zorunlu, 0'dan büyük, ana para biriminde. |
| Tarih | Varsayılan bugün. |
| Açılış bakiyesi | İşaretlenirse kayıt "Açılış bakiyesi" türüyle yazılır; işaretsizse "Dekont". |
| Açıklama | **Zorunlu**, en fazla 255 karakter. |

Dekont ve açılış bakiyesinin **vade tarihi yoktur**: borç dağıtımında ve yaşlandırmada işlem
tarihi vade sayılır, ama "Vadesi geçen" kartına ve vadeli siparişi onaya düşüren vadesi geçmiş
borç kontrolüne **girmez** (bunlar yalnız sipariş borçlarına bakar).

Sisteme geçişte açılış bakiyesi girmek için bkz. [Sisteme geçiş](/cari/sistem-gecisi).

## Kayıt iptali {#iptal}

Ekstrede iptal edilebilen satırların sonunda geri al düğmesi vardır ("Elle girilen cari kaydı
iptal et" yetkisi gerekir). Onay penceresinde "Kayıt silinmez; aynı tutarda ters kayıt yazılır ve
bakiye düzelir." yazar; **İptal et** ile onaylanır.

| Kayıt | Ekstreden iptal |
|---|---|
| Dekont, açılış bakiyesi | Edilir |
| Elle girilen tahsilat (Nakit, Havale / EFT, POS, Mahsup) | Edilir; ödeme kaydı "İptal Edildi" olur |
| Çek / senet tahsilatı | Edilmez — portföyden **Karşılıksız** ya da **İade edildi** yapılır |
| Sipariş borcu, sipariş ödemesi, iade | Edilmez — kendi belgesinden (sipariş / iade ekranı) yönetilir |
| Zaten iptal edilmiş kayıt ya da ters kayıt | Edilmez |

Ters kayıt **bugünün tarihiyle** ve "İptal: …" açıklamasıyla yazılır.

## Excel ve yazdırılabilir ekstre {#excel}

Her ikisi de ekstrede seçili tarih aralığını kullanır.

**Excel** — `cari-ekstre-HESAPKODU-TARİH.xlsx` dosyası iner:

1. Başlık satırları: "Cari Ekstre" + hesap adı ve kodu, **Dönem**, **Para birimi**.
2. Sütunlar: Tarih, Vade, Tür, Açıklama, Borç, Alacak, Bakiye, B/A.
3. İlk satır **Devir** (dönem başı bakiye), son satır **Dönem toplamı**.

**Yazdır** — yeni sekmede "Cari Hesap Ekstresi" açılır: hesap ünvanı, vergi dairesi / numarası,
dönem, para birimi ve düzenlenme tarihi; devir, hareketler ve dönem toplamı / bakiye. Sayfadaki
**Yazdır / PDF olarak kaydet** düğmesiyle yazdırın ya da PDF kaydedin. Altta "B: borç bakiyesi
(müşteri borçlu), A: alacak bakiyesi (müşteri alacaklı)." açıklaması yer alır.

## Ödemeler borçları nasıl kapatır? {#fifo}

Her cari harekette hesabın tüm açık borçları ve alacakları baştan eşleştirilir:

1. Siparişe bağlı bir ödeme ya da iade önce **kendi siparişini** kapatır.
2. Kalan alacaklar, **vadesi en eski** borçtan başlayarak dağıtılır (FIFO). Vadesi olmayan
   borçlarda (dekont, açılış bakiyesi) işlem tarihi vade sayılır.
3. Sipariş borcunun kapanan kısmına göre siparişin ödeme durumu **Bekliyor**, **Kısmen Ödendi**
   ya da **Ödendi** olur. Tamamen kapanınca sipariş geçmişine "Cari tahsilatla ödemesi kapandı."
   notu düşülür.

Ayrıntılı örnek: [Peşin ve vadeli çalışma › FIFO örneği](/cari/vadeli-calisma#fifo-ornegi).

## Ödemeler menüsü {#odemeler}

**Mağaza › Ödemeler** altında:

| Ekran | İçerik |
|---|---|
| Tahsilatlar | Tüm ödeme kayıtları |
| Havale Bildirimleri | Bayilerin dekontla bildirdiği havaleler. Bkz. [Havale](/cari/havale#bildirimler) |
| Çek / Senet | Portföy (yalnız Cari Ayarları'nda açıksa görünür). Bkz. [Çek ve senet](/cari/cek-senet) |
| Geciken Ödemeler | Yaşlandırma raporu |

### Tahsilatlar {#tahsilatlar}

**Mağaza › Ödemeler › Tahsilatlar** — ödenmiş tüm ödeme kayıtları: sipariş ödemeleri (kart,
havale) ve cariye girilen tahsilatlar. Elle tahsilat buradan değil, müşteri detayının **Cari**
sekmesinden girilir.

| Filtre | Açıklama |
|---|---|
| Arama | Hesap ünvanı ya da kodu. |
| Yöntem | **Tüm yöntemler** ya da bir yöntem (Nakit, Havale / EFT, kart …). |
| Başlangıç / Bitiş | Ödeme tarihine göre; **Filtrele** ile uygulanır. |

| Sütun | Açıklama |
|---|---|
| Tarih | Ödeme tarihi ve saati. |
| Hesap | Müşteri (tıklayınca detay). |
| Yöntem | Ödeme yöntemi; altında kaydı giren kullanıcı. |
| Belge | Bağlı sipariş numarası ya da **Cari tahsilat**; sistemin verdiği belge numarası ve not. |
| Tutar | Ödenen tutar, ödemenin para biriminde. |

En yeni ödeme en üsttedir.

### Geciken Ödemeler (yaşlandırma) {#yaslandirma}

**Mağaza › Ödemeler › Geciken Ödemeler** — tahsilatla kapanmamış borçların vadesine göre
dağılımı. Başlıkta hesap sayısı ve toplam açık borç yazar.

| Dilim | Açık borç |
|---|---|
| Vadesi gelmemiş | Vadesi bugünden sonra |
| 0–30 gün | Vadesi bugün ya da 1–30 gün önce |
| 31–60 gün | 31–60 gün önce |
| 61–90 gün | 61–90 gün önce |
| 90+ gün | 90 günden önce |
| Toplam | Hesabın tüm açık borcu |

Vadesi olmayan borçlar (dekont, açılış bakiyesi) işlem tarihinden yaşlandırılır. Liste önce
**90+ gün** tutarı, sonra toplam büyük olandan sıralanır; en altta genel toplam satırı vardır.

**Excel** düğmesi `yaslandirma-TARİH.xlsx` indirir: başlık (Geciken ödemeler, tarih, para
birimi), Hesap, Kod, beş dilim ve Toplam sütunları, en altta Toplam satırı.

## Cari Ayarları {#cari-ayarlari}

**Ayarlar › Tanımlamalar › Cari Ayarları**. Peşin / vadeli çalışma, limit ve vade burada değil,
[bayi gruplarında](/musteriler/#bayi-gruplari) ayarlanır.

| Alan | Varsayılan | Açıklama |
|---|---|---|
| Ödeme yöntemleri — her yöntem için en düşük tutar | Sınır yok | Yöntemin ödeme ekranında sunulduğu en düşük sipariş tutarı (ana para biriminde, KDV dahil). Boş = sınır yok. Ör. Havale / EFT için 500 girilirse 500 TL altındaki siparişte havale seçeneği çıkmaz. Yalnız siparişte geçerlidir. |
| Vade uyarı süresi (gün) | 7 | Zorunlu, 0–365. Vadesine bu kadar gün kalan borçlar bayinin Cari Hesabım ekranında ve müşteri detayında "vadesi yaklaşan" olarak gösterilir. |
| Çek / senet portföyünü kullan | Kapalı | Açıkken tahsilatta çek ve senet seçilebilir, **Ödemeler** menüsünde **Çek / Senet** görünür. Kapalıyken hiçbir ekranda yer almaz; kayıtlı çek / senetler silinmez. |
| Vadesi yaklaşan uyarısı (gün) | 7 | 0–365. Vadesine bu kadar gün kalan portföydeki çek / senetler listede işaretlenir. |

## Yetkiler {#yetkiler}

| Yetki | Ne sağlar |
|---|---|
| Cari durumu ve müşteri carisini görüntüle | Cari Durum ekranı ve müşteri detayındaki Cari sekmesi |
| Tahsilatları listele | Tahsilatlar ekranı |
| Tahsilat gir | **Tahsilat ekle** düğmesi |
| Borç / alacak dekontu ve açılış bakiyesi gir | **Dekont** düğmesi |
| Elle girilen cari kaydı iptal et | Ekstredeki iptal düğmesi |
| Cari ekstreyi Excel'e aktar / Cari ekstreyi yazdır | **Excel** / **Yazdır** |
| Geciken ödemeleri görüntüle / Excel'e aktar | Geciken Ödemeler ekranı ve Excel |
| Cari ayarlarını görüntüle / güncelle | Cari Ayarları |

Havale bildirimi ve çek / senet yetkileri kendi sayfalarında anlatılır. Bkz.
[Kullanıcılar, roller ve yetkiler](/yonetim/roller-yetkiler).

## Bayinin gördüğü {#bayi}

Bayi panelinde **Cari Hesabım**: bakiye ve (vadelide) limit kartları, açık borçlar, aynı ekstre,
ödemeleri, banka hesaplarınız, **Havale bildirimi yap** ve kart modülü kuruluysa **Kartla öde**.
Bkz. [Havale](/cari/havale#bayi-bildirimi), [Kartla ödeme](/cari/kartla-odeme#cari-odeme),
[Bayinin gördüğü ekranlar](/bayi-paneli/).
