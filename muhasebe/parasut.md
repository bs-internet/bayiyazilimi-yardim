# Paraşüt

**Paraşüt eklentisi** mağazanın satışlarını Paraşüt ön muhasebeye **satış faturası** olarak
aktarır; isteğe bağlı olarak faturayı **e-Fatura** ya da **e-Arşiv**'e dönüştürür ve belge
numarasını siparişe yazar. Tetikleyiciler, kuyruk ve hata bildirimleri iki muhasebe eklentisinde
ortaktır; bkz. [Muhasebe entegrasyonları](/muhasebe/#ortak).

## Ayarlar {#ayarlar}

**Ayarlar › Tanımlamalar › Paraşüt** — "Satışlar Paraşüt ön muhasebeye satış faturası olarak
aktarılır; isteğe bağlı olarak e-Fatura / e-Arşiv'e dönüştürülür ve belge numarası siparişe yazılır."

### API bağlantısı

Bilgiler, Paraşüt'ün API erişimi için verdiği uygulama (client) bilgileri ve Paraşüt kullanıcınızdır.

| Alan | Açıklama |
|---|---|
| **Paraşüt'e aktarımı aç** | Açıkken siparişler seçilen zamanda otomatik gönderilir; kapalıyken hiçbir sipariş gönderilmez |
| **Client ID** | Paraşüt'ün verdiği uygulama kimliği |
| **Client secret** | Uygulama gizli anahtarı (şifreli saklanır) |
| **Kullanıcı e-postası** | Paraşüt'e giriş yaptığınız kullanıcı |
| **Parola** | Bu kullanıcının parolası (şifreli saklanır) |
| **Firma no** | Paraşüt adresindeki sayı: `uygulama.parasut.com/123456` ise `123456` |

API bilgilerini Paraşüt'ten edinmeniz gerekir; hesabınızda API kullanımının açık olması
gerekebilir.

### Aktarım

| Alan | Açıklama |
|---|---|
| **Ne zaman gönderilsin** | **Sipariş tamamlanınca** (varsayılan), **Ödeme alınınca** ya da **Yalnız elle (sipariş ekranından)** |
| **e-Belgeye dönüştür** | **Hayır, yalnız satış faturası** (varsayılan) ya da **e-Fatura veya e-Arşiv (otomatik)**: alıcının vergi numarası e-Fatura sistemine kayıtlıysa (e-Fatura posta kutusu varsa) e-Fatura, değilse e-Arşiv kesilir. Paraşüt hesabınızda e-Fatura / e-Arşiv kullanımı açık olmalıdır |
| **e-Fatura senaryosu** | **Temel fatura** ya da **Ticari fatura** |
| **Fatura seri (isteğe bağlı)** | Boş bırakılırsa Paraşüt'ün varsayılanı kullanılır; doluysa Paraşüt'teki seriyle aynı olmalı |
| **Kargo KDV oranı (%)** | Siparişteki KDV dahil kargo ücreti faturaya bu oranla ayrı satır olarak eklenir (varsayılan %20) |

**Kaydet**'ten sonra **Bağlantıyı dene** ile kayıtlı bilgilerin çalıştığını kontrol edin
("Paraşüt bağlantısı başarılı.").

## Faturada ne gider? {#fatura-icerigi}

- **Müşteri** — siparişin fatura adresinden: kurumsalda firma adı, vergi dairesi ve vergi no;
  bireyselde ad ve (girildiyse) T.C. kimlik no. Müşteri Paraşüt'te yoksa oluşturulur.
- **Satırlar** — her ürün **"SKU - ürün adı"** açıklamasıyla, adet, KDV hariç birim fiyat, KDV oranı
  ve varsa satır indirimiyle. Ürünler Paraşüt'teki ürün / stok kartlarına bağlanmaz; yalnız
  açıklamalı satır olarak gider.
- **Kargo** — ayrı satır (ayarlardaki KDV oranıyla).
- **Ödeme yöntemi indirimi** (ör. havale indirimi) faturaya yüzde indirim olarak, ödeme yöntemi
  farkı ayrı satır olarak işlenir.
- **Para birimi** — TL, USD, EUR ve GBP desteklenir; dövizli siparişte kur da gönderilir. Başka
  para birimindeki sipariş gönderilmez (hata olarak görünür).
- e-Arşiv'de internet satışı bilgisi (ödeme türü ve tarihi) ve varsa kargo firması eklenir.

## Sipariş ekranındaki Paraşüt kartı {#siparis-karti}

[Sipariş detayı](/satis/siparis-detayi)nın sağ sütununda **Paraşüt** kartı görünür:

| Durum | Anlamı |
|---|---|
| **Gönderilmedi** | Sipariş henüz gönderilmedi. Bağlantı bilgileri girilmemişse "Paraşüt bağlantı bilgileri girilmemiş (Tanımlamalar → Paraşüt)." yazar |
| **Gönderiliyor** | Kuyrukta ya da gönderim sürüyor |
| **e-Belge hazırlanıyor** | Fatura kesildi; Paraşüt e-Fatura / e-Arşiv'i hazırlıyor |
| **Gönderildi** | Fatura (ve seçildiyse e-Belge) tamam |
| **Hata** | Gönderim başarısız; sebebi kartta yazar |

Kartta ayrıca **e-Belge** türü (e-Fatura / e-Arşiv), **Belge no** ve **Aktarıldı** tarihi görünür.
Düğme duruma göre değişir:

- **Paraşüt'e gönder** — sipariş hiç gönderilmemişse.
- **Yeniden dene** — gönderim hata verdiyse. Fatura zaten kesildiyse ikinci fatura kesilmez;
  kalan adımlar (ör. e-Belge) tamamlanır.
- **Durumu yenile** — gönderilmiş siparişte e-Belge durumunu ve belge numarasını Paraşüt'ten
  yeniden sorar.

::: tip e-Belge "hazırlanıyor"da kaldıysa
e-Fatura / e-Arşiv Paraşüt tarafında birkaç saniye ile birkaç dakika içinde hazırlanır; durum
arka planda kontrol edilir. Kuyruk işleyicisi çalışmıyorsa kart **e-Belge hazırlanıyor**'da
kalabilir: **Durumu yenile**'ye basın. Bkz. [Kuyruk işleyicisi gerekir](/muhasebe/#kuyruk).
:::

Belge numarası, sipariş **Tamamlandı** durumundaysa ve fatura numarası girilmemişse siparişin
**Fatura** kartına yazılır. Fatura sipariş tamamlanmadan (ör. **Ödeme alınınca**) kesildiyse
numara, sipariş tamamlandığında yazılır.

## Yetkiler {#yetkiler}

**Muhasebe: Paraşüt** grubu:

| Yetki | Ne sağlar |
|---|---|
| Paraşüt ayarlarını görüntüle | Ayar sayfasını açma |
| Paraşüt ayarlarını güncelle | Ayarları kaydetme |
| Paraşüt bağlantısını dene | **Bağlantıyı dene** |
| Siparişi Paraşüt'e gönder | Sipariş kartındaki düğmeler; hata bildirimleri de bu yetkisi olan yöneticilere gider |

Ayar değişiklikleri ve aktarımlar [Etkinlik kayıtlarına](/yonetim/etkinlik-kayitlari) yazılır.
