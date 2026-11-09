# Muhasebe entegrasyonları

Mağazanın satışlarını ön muhasebe programınıza **satış faturası** olarak aktaran eklentiler:

| Eklenti | Ne yapar |
|---|---|
| **Paraşüt** | Satışları Paraşüt'e satış faturası olarak gönderir; isteğe bağlı e-Fatura / e-Arşiv'e dönüştürür ve belge numarasını siparişe yazar. Bkz. [Paraşüt](/muhasebe/parasut) |
| **BizimHesap** | Satışları BizimHesap'a satış faturası olarak gönderir; müşteri ve ürün BizimHesap'ta yoksa oluşturulur. Bkz. [BizimHesap](/muhasebe/bizimhesap) |

Eklentinin kurulumunu hizmet sağlayıcınız ya da geliştiriciniz yapar; bilgi için:
[bayiyazilimi.com](https://bayiyazilimi.com). Kurulu eklentileri [Eklentiler](/yonetim/moduller)
ekranında görebilir, açıp kapatabilirsiniz.

::: tip Programınız listede yoksa
Logo, Mikro, Netsis gibi bir ERP ya da kendi yazılımınız sisteme **REST API** ile bağlanabilir:
siparişleri okur, stok ve fiyatları günceller, fatura numarası ve tahsilat yazar. Bağlantı için
[API Anahtarları](/yonetim/api-anahtarlari) ekranından bir anahtar oluşturulur; teknik ayrıntılar
geliştiriciniz için [REST API](/gelistirici/rest-api) sayfasındadır.
:::

## Ortak çalışma şekli {#ortak}

İki eklenti de aynı mantıkla çalışır:

- **Ayarlar** — **Ayarlar › Tanımlamalar** altında eklentinin kendi sayfası vardır (**Paraşüt**
  ya da **BizimHesap**). Hesap bilgileri girilir, aktarım açılır, gönderim zamanı seçilir.
  Gizli bilgiler (şifre, token vb.) şifreli saklanır ve ekrana geri getirilmez; kayıtlıysa alanda
  "•••••••• (kayıtlı; değiştirmek için yazın)" yazar, boş bırakırsanız eskisi korunur.
- **Bağlantıyı dene** — kayıtlı bilgilerle programa bağlanmayı dener. Önce ayarları kaydedin.
- **Ne zaman gönderilsin** —

  | Seçenek | Ne olur |
  |---|---|
  | **Sipariş tamamlanınca** (varsayılan) | Sipariş **Tamamlandı** durumuna geçince gönderilir |
  | **Ödeme alınınca** | Siparişin ödemesi alındığında (kartla ödeme ya da **Ödendi** işaretlenince) gönderilir |
  | **Yalnız elle** | Otomatik gönderim yoktur; sipariş ekranındaki karttan gönderilir |

  Her durumda sipariş ekranındaki karttan elle de gönderilebilir. Aktarım kapalıyken hiçbir
  sipariş gönderilmez.
- **Sipariş ekranı kartı** — [Sipariş detayı](/satis/siparis-detayi)nın sağ sütununda eklentinin
  kartı aktarım durumunu gösterir: **Gönderilmedi**, **Gönderiliyor**, **Gönderildi** ya da
  **Hata** (hatanın sebebiyle birlikte). Karttaki düğmeyle gönderilir ya da hata sonrası
  **Yeniden dene**nir.
- **Bir sipariş bir kez faturalanır** — gönderilmiş bir sipariş yeniden gönderilmez; düğmeye ya da
  tetikleyiciye tekrar basılması ikinci fatura kesmez.
- **İptal edilmiş ya da başarısız siparişler** gönderilmez.
- **Fatura numarası** — programdan alınan belge numarası, sipariş **Tamamlandı** durumundaysa ve
  siparişe henüz fatura numarası girilmemişse siparişin **Fatura** kartına yazılır (bkz.
  [Fatura numarası girmek](/satis/siparis-detayi#fatura)). Elle girdiğiniz numaranın üzerine
  yazılmaz.
- **Kargo** — siparişteki kargo ücreti KDV dahildir; faturaya ayarlardaki **Kargo KDV oranı** ile
  ayrı satır olarak eklenir.
- **Geçici hatalar** — programa ulaşılamazsa ya da program yoğunsa gönderim birkaç dakika
  arayla kendiliğinden yeniden denenir (kuyruk işleyicisi çalışıyorsa).
- **Hatalar** — aktarım başarısız olursa siparişi gönderme yetkisi olan aktif yöneticilere panel
  içi bildirim gider ve hata [Etkinlik kayıtlarına](/yonetim/etkinlik-kayitlari) yazılır. Başarılı
  aktarımlar da etkinlik kayıtlarında görünür.

## Kuyruk işleyicisi gerekir {#kuyruk}

Otomatik gönderim arka planda, **kuyrukta** yapılır; sipariş durumunu değiştiren kişi faturanın
kesilmesini beklemez. Bunun için sunucuda bir kuyruk işleyicisi çalışmalıdır:

- VPS'te [supervisor](/baslangic/vps#kuyruk) ile sürekli çalışan işleyici.
- Paylaşımlı hostingde `QUEUE_CONNECTION=sync` kullanıyorsanız gönderim beklemeden, durum
  değişikliği sırasında yapılır (işlem biraz uzar). Kuyruğu cron ile boşaltıyorsanız gönderim bir
  sonraki çalıştırmayı bekler. Bkz. [Paylaşımlı hosting › E-posta](/baslangic/paylasimli-hosting).

Kuyruk işleyicisi yoksa ve `QUEUE_CONNECTION=database` ise kart **Gönderiliyor**'da kalır.

## Yetkiler {#yetkiler}

Her eklentinin yetkileri **Görevler ve yetkiler** ekranında kendi grubunda listelenir
(**Muhasebe: Paraşüt**, **Muhasebe: BizimHesap**): ayarları görüntüleme, güncelleme, bağlantıyı
deneme ve siparişi gönderme. Kurulumda hiçbir göreve atanmaz; atanana kadar yalnız Super Admin
kullanabilir. Bkz. [Görevler ve yetkiler](/yonetim/roller-yetkiler).
