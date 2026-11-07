# Peşin ve vadeli çalışma

Bayinin ödeme düzeni (**cari çalışma şekli**) **bayi grubunda** tanımlanır ve bayi bazında
değiştirilebilir. Vitrin müşterileri her zaman peşin çalışır ve yöntem kısıtı yoktur.

## Ayarlar {#ayarlar}

| Ayar | Grupta varsayılan | Açıklama |
|---|---|---|
| Çalışma şekli | **Peşin** | **Peşin** ya da **Vadeli (açık hesap)** |
| Vade (gün) | **30** | 0–3650. Vadeli siparişin vade tarihi = siparişin onaylandığı gün + vade günü |
| Kredi limiti | boş = **limitsiz** | Vadeli bayinin borç sınırı, ana para biriminde |
| Limit aşılınca | **Onaya düşsün** | ya da **Engellensin** |
| Vadesi geçmiş borç varken | **Onaya düşsün** | ya da **Engellensin** / **Serbest** |
| İzinli ödeme yöntemleri | hepsi | Bayinin siparişte hangi yöntemlerle ödeyebileceği |

**Nerede girilir?**

- Grup için: **Müşteriler › Bayi Grupları** › grubu düzenle. Bkz. [Bayi grupları](/musteriler/#bayi-gruplari).
- Bayiye özel: müşteri detayı › **Bayi ayarları**. Bkz. [Bayi ayarları](/musteriler/#bayi-ayarlari).

### Hangi değer geçerli? {#oncelik}

Her ayar ayrı ayrı şu sırayla belirlenir: **bayiye özel değer → bayi grubunun değeri →
varsayılan** (peşin, 30 gün, limitsiz, onaya düşsün). Bayi ayarlarında **Gruptan** seçilen ya
da boş bırakılan alan grubun değerini alır.

**Örnek:** "Altın Bayi" grubu: vadeli, 60 gün, limit 200.000 TL. Bayi A'nın ayarlarında yalnız
kredi limiti 50.000 TL girilmiş, diğerleri "Gruptan". Bayi A için geçerli olan: vadeli, 60 gün,
**50.000 TL** limit.

## Peşin çalışma {#pesin}

Sipariş, ödeme gelince işleme alınır:

- **Havale / EFT** — sipariş **Ödeme Bekleniyor** durumunda açılır; ödeme onaylanınca
  hazırlanır (bkz. [Havale](/cari/havale)).
- **Kartla ödeme** — ödeme başarılı olunca sipariş hazırlanmaya alınır (bkz. [Kartla ödeme](/cari/kartla-odeme)).

Ödeme ekranında **Cari hesaba (vadeli)** seçeneği çıkmaz.

## Vadeli çalışma {#vadeli}

Ödeme ekranında ayrıca **Cari hesaba (vadeli)** seçeneği çıkar. Açıklamasında "Sipariş tutarı
carinize N gün vadeyle borç yazılır. Kullanılabilir limitiniz: …" yazar.

Bayi bu seçenekle sipariş verdiğinde sistem iki şeye bakar:

1. **Kredi limiti** (girilmişse): risk + bu sipariş > limit mi?
2. **Vadesi geçmiş borç** ("Serbest" değilse): vadesi geçmiş açık sipariş borcu var mı?

| Sonuç | Ne olur |
|---|---|
| İkisi de sorun değil | Sipariş doğrudan **Hazırlanıyor** olur; borç vade tarihiyle cariye yazılır. Bayiye "Siparişiniz alındı (…); vade tarihi …" mesajı gösterilir. |
| Sorun var, ayar **Onaya düşsün** | Sipariş **Onay Bekliyor** durumuna düşer; gerekçe sipariş geçmişine yazılır. Bayiye "Siparişiniz alındı (…) ve onaya gönderildi: …" mesajı gösterilir. |
| Sorun var, ayar **Engellensin** | Sipariş verilemez: "Vadeli sipariş verilemiyor: … Kartla ya da havaleyle ödeyebilirsiniz." |

İki sorun birden varsa ve biri "Engellensin" ise sipariş engellenir.

### Onay bekleyen sipariş {#onay}

Sipariş detayında "Vadeli sipariş onay bekliyor" uyarısı ve iki düğme çıkar:

- **Onayla** — sipariş **Hazırlanıyor** olur, borç cariye yazılır. Vade tarihi **onaylandığı
  günden** itibaren vade günü kadar sonradır.
- **Reddet** — onay sorulur; sipariş iptal edilir, stok geri eklenir ve müşteriye bildirilir.

Onay bekleyen vadeli siparişler, onaylanana kadar bayinin **riskine** eklenir.

### Diğer kurallar

- Vadeli bayi isterse kartla ya da havaleyle **peşin** de ödeyebilir; bu sipariş limit
  kontrolüne girmez.
- **İzinli ödeme yöntemleri** işaretliyse bayiye yalnız o yöntemler sunulur. Cari Ayarları'ndaki
  yönteme göre en düşük sipariş tutarı da ayrıca uygulanır (bkz. [Cari Ayarları](/cari/#cari-ayarlari)).
- "Vadesi geçmiş borç" yalnız **sipariş borçlarına** bakar; dekont ve açılış bakiyesi bu kontrole
  girmez.

## Risk ve kullanılabilir limit {#risk}

**Risk** = cari bakiye + onay bekleyen vadeli siparişler + henüz paraya dönmemiş çek / senetler
(Portföyde, Tahsile verildi ve Ciro edildi durumundakiler).

**Kullanılabilir limit** = kredi limiti − risk (sıfırın altına inmez; limit yoksa "Limitsiz").

Bu değerler müşteri detayı › **Cari** sekmesinin özet kartlarında ve bayinin **Cari Hesabım**
ekranında görünür.

### Örnek {#risk-ornegi}

Bayi B: vadeli, **30 gün**, kredi limiti **100.000 TL**, Limit aşılınca: **Onaya düşsün**,
Vadesi geçmiş borç varken: **Onaya düşsün**.

| Kalem | Tutar |
|---|---|
| Cari bakiye (borç) | 60.000 TL |
| Onay bekleyen vadeli sipariş | 10.000 TL |
| Portföydeki çek | 15.000 TL |
| **Risk** | **85.000 TL** |
| **Kullanılabilir limit** | 100.000 − 85.000 = **15.000 TL** |

- Bayi 12.000 TL'lik vadeli sipariş verir: 85.000 + 12.000 = 97.000 ≤ 100.000 → vadesi geçmiş
  borcu yoksa sipariş **doğrudan Hazırlanıyor** olur, vade bugünden 30 gün sonradır.
- Bayi 20.000 TL'lik vadeli sipariş verir: 85.000 + 20.000 = 105.000 > 100.000 → sipariş **Onay
  Bekliyor**'a düşer; gerekçe "Kredi limiti aşılıyor (limit 100.000,00 TL, kullanılabilir
  15.000,00 TL)".
- Ayar **Engellensin** olsaydı 20.000 TL'lik sipariş hiç verilemezdi.
- Portföydeki çek **Tahsil edildi** yapılınca risk 15.000 TL azalır (alacak zaten çek alındığında
  yazılmıştı).

## Borçların kapanması (FIFO) {#fifo-ornegi}

Ödemeler borçları şu kuralla kapatır: siparişe bağlı ödeme önce **kendi siparişini**, kalan
alacaklar **vadesi en eski** borçtan başlayarak (vadesi olmayan borçta işlem tarihi) kapatır. Bkz.
[Cari hesap](/cari/#fifo).

**Örnek.** Bayinin açık borçları:

| Borç | Tutar | Vade |
|---|---|---|
| Açılış bakiyesi | 5.000 TL | 1 Mart (işlem tarihi) |
| Sipariş A | 10.000 TL | 15 Nisan |
| Sipariş B | 8.000 TL | 30 Nisan |

1. Bayiden **12.000 TL nakit tahsilat** girilir (siparişe bağlı değil):
   - 5.000 TL açılış bakiyesini kapatır,
   - 7.000 TL Sipariş A'ya gider → A **Kısmen Ödendi**, kalan 3.000 TL,
   - Sipariş B açık kalır (8.000 TL).
2. Bayi Sipariş B'yi seçerek **8.000 TL havale bildirimi** yapar, siz onaylarsınız:
   - Ödeme önce kendi siparişi B'yi kapatır → B **Ödendi**.
3. Bakiye: 23.000 − 12.000 − 8.000 = **3.000 TL borç** (Sipariş A'nın kalanı). 16 Nisan'da bu tutar
   "Vadesi geçen" kartına ve [Geciken Ödemeler](/cari/#yaslandirma)'de "0–30 gün" dilimine düşer.

Dağıtım her harekette baştan yapılır; bir tahsilatı iptal ederseniz siparişlerin ödeme durumu
da buna göre geri döner.

## Bayinin gördüğü {#bayi}

Bayinin **Cari Hesabım** ekranında: bakiye, çalışma şekli, (vadelide) kullanılabilir limit ve
vadesi geçen borç kartları, vadesi geçmiş ve yaklaşan borçlar listesi ve ekstre. "Yaklaşan"
sayılması için gereken gün sayısı Cari Ayarları'ndaki **Vade uyarı süresi**dir (varsayılan 7 gün).
