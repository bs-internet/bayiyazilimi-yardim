# Siparişler

Siparişler **Mağaza › Siparişler** ekranında listelenir. Bayiler bayi panelindeki **Sipariş ver**
ekranından, vitrin kuruluysa müşteriler siteden sipariş verir; onaylanan teklifler de siparişe
dönüşür. Sürecin tamamı için bkz. [Satış süreci](/satis/satis-sureci); tek bir siparişin ekranı
için bkz. [Sipariş detayı](/satis/siparis-detayi).

::: info Panelden sipariş girilmez
Yönetim panelinde sipariş oluşturma ekranı yoktur. Müşteri adına satış hazırlamak için
[teklif](/satis/teklifler) oluşturup gönderin; müşteri onaylayıp ödeyince sipariş oluşur.
:::

Sipariş numarası `S` + yıl-ay-gün + günlük sıra biçimindedir (ör. `S2611070001`).

## Liste

Başlıkta toplam sipariş sayısı yazar. En yeni sipariş üstte, sayfa başına 50 sipariş.

### Süzgeçler

| Süzgeç | Açıklama |
|---|---|
| Arama kutusu | Sipariş no, müşteri adı, e-posta ya da telefonda arar. |
| **Sipariş durumu** | Yedi durumdan biri (bkz. [Durumlar](#durumlar)). |
| **Ödeme durumu** | *Bekliyor, Kısmen Ödendi, Ödendi, Başarısız, İade Edildi, İptal Edildi*. |
| **Ödeme yöntemi** | Siparişlerde kullanılmış yöntemler (Havale / EFT, Cari hesaba, kart …). |
| **Başlangıç tarihi** / **Bitiş tarihi** | Sipariş tarihine göre aralık. |
| **Fatura** | *Faturalandı* (fatura no girilmiş) ya da *Tamamlandı, faturalanmadı* (tamamlanmış ama fatura no girilmemiş). |
| Hesap | Müşteri kartından ya da sipariş detayındaki "Müşterinin siparişleri"nden gelindiyse **Tek hesabın siparişleri** etiketi görünür; çarpı ile kaldırılır. |

**Temizle** tüm süzgeçleri kaldırır.

### Sütunlar

| Sütun | İçerik |
|---|---|
| Seçim kutusu | Toplama listesi için sipariş seçer (başlıktaki kutu sayfadakilerin hepsini seçer) |
| **Sipariş** | Sipariş no, tarih; tekliften geldiyse "· Tekliften" |
| **Müşteri** | Ad, e-posta; bayi hesabıysa *Bayi* etiketi |
| **Durum** | Sipariş durumu rozeti |
| **Ödeme** | Ödeme durumu ve yöntemi |
| **Fatura** | *Faturalandı · fatura no* ya da tamamlanmışsa *Faturalanmadı* |
| **Ürün** | Kalem sayısı |
| **Toplam** | Genel toplam (siparişin para biriminde) |
| İşlemler | **Detayı aç**, **Müşterinin siparişleri**, tekliften geldiyse **Teklifi aç** |

### Toplu işlem: Toplama listesi

Listede tek toplu işlem **Toplama listesi**'dir (yetkiniz varsa sağ üstte görünür):

- Sipariş **seçmeden** tıklarsanız durumu **Hazırlanıyor** olan siparişler, en eskiden başlayarak
  listelenir.
- Sipariş **seçerseniz** düğme "Toplama listesi (N)" olur ve yalnız seçilenler alınır.
- Bir listede en çok 100 sipariş olur.

Liste yazdırılabilir; tek bir siparişi yazdırmak için de o siparişi seçip toplama listesini
açın. Ayrıntılar: [Toplama listesi](/stok/toplama-listesi).

## Sipariş durumları {#durumlar}

| Durum | Anlamı | Nasıl gelinir |
|---|---|---|
| **Ödeme Bekleniyor** | Havale ya da kart ödemesi bekleniyor. Stok ayrılmıştır. | Kart / havale siparişi oluşunca |
| **Onay Bekliyor** | Vadeli siparişte limit aşıldı ya da vadesi geçmiş borç var; onayınızı bekliyor. Bkz. [Peşin ve vadeli çalışma](/cari/vadeli-calisma) | Vadeli sipariş limit dışı kalınca |
| **Hazırlanıyor** | Ödeme alındı ya da vadeli sipariş onaylandı; hazırlanıyor. **Cari borç bu anda yazılır.** | Ödeme alınınca, vadeli sipariş limit içindeyse, onay verilince ya da elle |
| **Kargoya Verildi** | Kargoya teslim edildi. İlk geçişte kargo tarihi kaydedilir. | Elle |
| **Tamamlandı** | Teslim edildi. Fatura no ancak bu durumda girilir. | Elle |
| **İptal Edildi** | Sipariş iptal. Stok geri eklenir, cari borç ters kayıtla kapanır. | Elle ya da onay bekleyen siparişte **Reddet** |
| **Ödeme Başarısız** | Kart ödemesi başarısız oldu ya da 60 dakikada tamamlanmadı. Stok geri eklenir. | Ödeme sağlayıcısından (elle seçilemez) |

### Durum geçişleri {#durum-gecisleri}

Sistem kendiliğinden şu geçişleri yapar:

```
Ödeme Bekleniyor ──ödeme alındı──► Hazırlanıyor
Ödeme Bekleniyor ──kart başarısız / zaman aşımı──► Ödeme Başarısız
Ödeme Başarısız ──ödeme sonradan alındı──► Hazırlanıyor
(vadeli) ──limit içinde──► Hazırlanıyor
(vadeli) ──limit dışı──► Onay Bekliyor ──Onayla──► Hazırlanıyor
                                      └──Reddet──► İptal Edildi
```

Panelde **Durumu değiştir** penceresinde yalnız siparişin mevcut durumundan geçilebilecek
durumlar listelenir:

| Mevcut durum | Seçilebilecek durumlar |
|---|---|
| Ödeme Bekleniyor / Onay Bekliyor | Hazırlanıyor, İptal Edildi |
| Hazırlanıyor | Kargoya Verildi, Tamamlandı, İptal Edildi |
| Kargoya Verildi | Hazırlanıyor, Tamamlandı, İptal Edildi |
| Tamamlandı | Kargoya Verildi, İptal Edildi |
| İptal Edildi | Hazırlanıyor |
| Ödeme Başarısız | İptal Edildi |

Mevcut durum da her zaman listededir; durumu değiştirmeden yalnız not ya da kargo bilgisini
güncellemek için kullanılır. **Ödeme Bekleniyor**, **Onay Bekliyor** ve **Ödeme Başarısız**
sistemin kendi durumlarıdır, elle seçilemez. Ödeme alındıysa **Ödeme** penceresinden ödeme
durumunu **Ödendi** yapın; onay bekleyen vadeli siparişte **Onayla** / **Reddet** düğmelerini
kullanın. Geçişin etkileri:

| Yeni durum | Stok | Cari |
|---|---|---|
| Hazırlanıyor / Kargoya Verildi / Tamamlandı | Stok düşülmemişse (ör. iptalden geri açılış) şimdi düşülür; **stok yetmezse işlem durur** (eksi stoğa açık ve takipsiz ürünler hariç) | Sipariş borcu yazılır (zaten yazılıysa tekrar yazılmaz) |
| İptal Edildi | Düşülen stok, düştüğü depo / lokasyon / lota geri eklenir | Sipariş borcu ters kayıtla kapanır |

Satışı geri almak için durumu **İptal Edildi** yapın.

İptalle ilgili diğer kurallar:

- **Ödenmiş** siparişi iptal etmek ödemeyi kendiliğinden iade etmez; ödeme müşterinin carisinde
  alacak olarak kalır. Parayı geri verecekseniz kart ödemesini **Ödemeler** bölümünden iade edin
  ya da ödeme durumunu **İade Edildi** yapın. Bkz. [Sipariş detayı](/satis/siparis-detayi#odeme).
- Tekliften gelen ve **ödenmemiş** sipariş iptal edilirse teklif yeniden "Onaylandı" olur ve
  müşteri tekrar ödeyebilir.
- İptal edilmiş siparişi yeniden açarken (Hazırlanıyor vb.) stok yetmiyorsa işlem uyarıyla
  durur.

## Ödeme yöntemleri

| Yöntem | Ne zaman sunulur | Sipariş ilk durumu |
|---|---|---|
| **Havale / EFT** | **Banka Hesapları**'nda havale açıksa ve en az bir aktif hesap varsa. Havale indirimi tanımlıysa sipariş toplamından düşülür | Ödeme Bekleniyor |
| **Cari hesaba (vadeli)** | Yalnız vadeli çalışan bayilere | Hazırlanıyor ya da Onay Bekliyor |
| **Kartla ödeme** | PayTR ya da iyzico modülü kuruluysa | Ödeme Bekleniyor (ödeme sayfasına yönlenir) |

Yöntemlerin en düşük tutarları **Cari Ayarları**'ndan belirlenir. Ayrıntılar:
[Havale](/cari/havale), [Vadeli çalışma](/cari/vadeli-calisma), [Kartla ödeme](/cari/kartla-odeme).

## Stok

- Stok **sipariş verildiği anda** ayrılır (düşülür), ödeme beklense de. Aynı son ürünü iki kişi
  aynı anda satın alamaz.
- Bayiye bölge deposu atanmışsa stok önce o depodan, yetmezse diğer satılabilir depolardan
  düşülür; atanmamışsa önce varsayılan depodan.
- Stok takibi kapalı ürünlerde stok düşülmez.
- **Ödeme başarısız** olursa ya da sipariş **iptal** edilirse stok, düştüğü depo ve lokasyona
  geri eklenir.
- Teklif siparişleri stok kontrolüne takılmaz; stok yetmezse eksiye düşer.
- Sipariş detayında her kalemin hangi depo, lokasyon ve lottan düştüğü görünür.

Depo tarafı için bkz. [Stok işlemleri](/stok/stok-islemleri) ve
[Toplama listesi](/stok/toplama-listesi).

## E-postalar {#e-postalar}

| Ne zaman | Müşteriye | Size (bildirim adresine) |
|---|---|---|
| Sipariş oluştu | **Siparişiniz alındı** (ödeme yöntemi; havalede banka hesapları ve sipariş no ile açıklama hatırlatması) | **Yeni sipariş** (kartla ödenen siparişlerde bu anda gitmez) |
| Kart ödemesi tamamlandı | "Ödemeniz alındı, siparişiniz hazırlanıyor." | **Yeni sipariş** (kart siparişinde yalnız bu anda, bir kez) |
| Panelde ödeme "Ödendi" yapıldı / havale bildirimi onaylandı | "Ödemeniz alındı, siparişiniz hazırlanıyor." | — |
| Panelde durum değişti | **Sipariş durumunuz güncellendi** — yeni durum; takip no girilmişse kargo firması ve takip no; isterseniz notunuz | — |

- Durum e-postası durum **gerçekten değiştiğinde** her zaman gider. Durum değiştirirken yazdığınız
  not yalnız **Notu müşteriye de göster** işaretliyse e-postaya ve müşterinin sipariş sayfasına
  eklenir.
- Ödeme başarısız olduğunda e-posta gönderilmez. Ödemesi tamamlanmayan kart siparişi için size
  hiç **Yeni sipariş** e-postası gitmez.
- Bildirim adresi **Ayarlar › Tanımlamalar › Satış Ayarları › Bildirimler**'deki **Bildirim
  e-postası**'dır; boşsa size e-posta gitmez.

## Müşteri tarafı

Bayi, siparişlerini bayi panelinde **Siparişlerim**'de görür: durum, kalemler, ödeme, kargo
takip bağlantısı ve "müşteriye gösterilen" notlar. Müşteri siparişi kendisi iptal edemez; iptal
için sizinle iletişime geçer. Teslim edilen siparişten [iade talebi](/satis/iadeler) açabilir ve
eski siparişi **tekrar sipariş** olarak sepete alabilir.

Fatura numarası girme ve ödeme / iade işlemleri için bkz. [Sipariş detayı](/satis/siparis-detayi).
