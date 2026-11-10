# BizimHesap

**BizimHesap eklentisi** mağazanın satışlarını BizimHesap ön muhasebe programına **satış
faturası** olarak aktarır. Müşteri ve ürün BizimHesap'ta yoksa otomatik oluşturulur. Tetikleyiciler,
kuyruk ve hata bildirimleri iki muhasebe eklentisinde ortaktır. Bkz.
[Muhasebe entegrasyonları](/muhasebe/#ortak).

## Ayarlar {#ayarlar}

**Ayarlar › Tanımlamalar › BizimHesap**: "Mağazanın satışları BizimHesap ön muhasebe programına
satış faturası olarak aktarılır."

### Hesap bilgileri

| Alan | Açıklama |
|---|---|
| **Satışları BizimHesap'a aktar** | Kapalıyken hiçbir sipariş gönderilmez. Sipariş ekranındaki gönder düğmesi de çalışmaz |
| **Firma ID** | BizimHesap tarafından verilen tekil firma kimliği. Fatura gönderiminde kullanılır (şifreli saklanır) |
| **Token** | Hesabınıza ait API token. Bağlantı testinde kullanılır (şifreli saklanır) |
| **Entegrasyon anahtarı (Key)** | BizimHesap API dokümanındaki sabit anahtar. Dolu gelir. BizimHesap size farklısını vermediyse değiştirmeyin |

Firma ID ve token'ı BizimHesap'tan edinirsiniz.

### Aktarım

| Alan | Açıklama |
|---|---|
| **Ne zaman gönderilsin** | **Sipariş tamamlanınca** (varsayılan), **Ödeme alınınca** ya da **Yalnız elle**. Her durumda sipariş ekranındaki BizimHesap kartından elle de gönderilebilir. Bir sipariş yalnız bir kez aktarılır |
| **Kargo KDV oranı (%)** | Siparişteki kargo ücreti KDV dahildir. Faturada bu oranla net tutar ve KDV'ye ayrılır (varsayılan %20) |

### Bağlantı testi

**Bağlantıyı dene**, kayıtlı token ile BizimHesap'tan depo listesini ister. Başarılıysa
"BizimHesap bağlantısı başarılı (N depo)." yazar. Önce ayarları kaydedin.

## Sipariş ekranındaki BizimHesap kartı {#siparis-karti}

[Sipariş detayı](/satis/siparis-detayi)nın sağ sütununda **BizimHesap** kartı görünür:

| Durum | Anlamı |
|---|---|
| **Gönderilmedi** | "Bu sipariş henüz BizimHesap'a gönderilmedi." |
| **Gönderiliyor** | "Fatura BizimHesap'a gönderiliyor." (kuyrukta ya da gönderim sürüyor) |
| **Gönderildi** | Fatura kesildi: gönderim tarihi, varsa **Belge no** ve **Belge › BizimHesap'ta aç** bağlantısı |
| **Hata** | Gönderim başarısız. Sebebi kartta yazar |

Düğme: hiç gönderilmemiş siparişte **BizimHesap'a gönder**, hata sonrası **Yeniden dene**.
Gönderilmiş sipariş yeniden gönderilmez ("… zaten BizimHesap'a gönderildi.").

Belge numarası, sipariş **Tamamlandı** durumundaysa ve fatura numarası girilmemişse siparişin
**Fatura** kartına yazılır.

## Yetkiler {#yetkiler}

**Muhasebe: BizimHesap** grubu:

| Yetki | Ne sağlar |
|---|---|
| BizimHesap ayarlarını görüntüle | Ayar sayfasını açma |
| BizimHesap ayarlarını güncelle | Ayarları kaydetme |
| BizimHesap bağlantısını dene | **Bağlantıyı dene** |
| Siparişi BizimHesap'a gönder | Sipariş kartındaki düğmeler. Hata bildirimleri de bu yetkisi olan yöneticilere gider |

Ayar değişiklikleri ve aktarımlar [Etkinlik kayıtlarına](/yonetim/etkinlik-kayitlari) yazılır.
