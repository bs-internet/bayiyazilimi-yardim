# Satış süreci

Bu sayfa bir siparişin sepetten teslimata kadar hangi adımlardan geçtiğini özetler. Her adımın
ayrıntısı ilgili sayfadadır: [Siparişler](/satis/siparisler), [Sipariş detayı](/satis/siparis-detayi),
[Teklifler](/satis/teklifler), [İadeler](/satis/iadeler), [Kargo](/satis/kargo).

## Siparişler nereden gelir?

| Kaynak | Kim kullanır | Nasıl |
|---|---|---|
| **Sipariş ver** ekranı | Bayiler (bayi paneli) | Ürünleri sepete ekler, ödeme adımında sipariş verir. Bkz. [Bayi paneli](/bayi-paneli/) |
| Vitrin | Ziyaretçi ve müşteriler | [Vitrin modülü](/vitrin/) kuruluysa siteden sipariş verilir |
| Kayıtlı sepet | Bayiler | Kaydedilmiş bir sepetten doğrudan sipariş |
| Onaylanan teklif | Teklifi onaylayan müşteri / bayi | Teklifin ödeme sayfasından sipariş oluşur. Bkz. [Teklifler](/satis/teklifler) |

::: info Panelden sipariş oluşturulmaz
Yönetim panelinde "yeni sipariş" ekranı yoktur. Bir müşteri adına satış hazırlamak istiyorsanız
panelde **teklif** oluşturup müşteriye gönderin; müşteri onaylayıp ödediğinde sipariş oluşur.
:::

## Sepetten siparişe

1. Müşteri ürünü sepete ekler. Sepete yalnız satış biçimi **Sepet** olan, fiyatı 0'dan büyük ve
   stoğu yeten ürünler eklenir. Diğerleri teklif listesine gider.
2. Ödeme adımında fatura / teslimat adresi, e-posta, telefon, **kargo firması** (aktif firma
   varsa) ve **ödeme yöntemi** seçilir; ödeme formunda gösterilen sözleşme varsa onaylanır
   (bkz. [Tanımlamalar › Sözleşmeler](/yonetim/tanimlamalar#sozlesmeler)).
3. Sistem kampanyaları, kargo ücretini ve (havalede) havale indirimini hesaplar.
4. **Sipariş oluşur**: numara `S` + tarih + sıra biçimindedir (ör. `S2611070001`).
   Stok bu anda düşülür (ayrılır).
5. Müşteriye "Siparişiniz alındı" e-postası, size (bildirim adresine) yeni sipariş e-postası gider.
   Kartla ödenen siparişte yeni sipariş e-postası bu anda değil, ödeme tamamlanınca gider.

Sonrası ödeme yöntemine göre ayrılır.

## Ödeme yöntemine göre akış

### Kartla ödeme

PayTR ya da iyzico modülü kuruluysa sunulur. Bkz. [Kartla ödeme](/cari/kartla-odeme).

1. Sipariş **Ödeme Bekleniyor** durumunda oluşur, müşteri ödeme sayfasına yönlenir.
2. Ödeme başarılı olursa sipariş kendiliğinden **Hazırlanıyor** olur, cariye borç ve ödeme
   (alacak) yazılır. Müşteriye "Ödemeniz alındı" e-postası, size yeni sipariş e-postası gider
   (kart siparişinde tek bildirim budur).
3. Ödeme başarısız olursa ya da 60 dakika içinde tamamlanmazsa sipariş **Ödeme Başarısız** olur
   ve düşülen stok geri eklenir. Ödemesi tamamlanmayan siparişler için size e-posta gitmez.

### Havale / EFT

**Banka Hesapları**'nda havale açıksa ve en az bir aktif hesap varsa sunulur. Bkz.
[Havale ve ödeme bildirimi](/cari/havale).

1. Sipariş **Ödeme Bekleniyor** durumunda kalır; stok ayrılmıştır.
2. Müşteri havaleyi yapar, isterse ödeme bildirimi gönderir.
3. Paranın geldiğini gördüğünüzde sipariş detayında **Ödeme › Ödendi** deyin (ya da ödeme
   bildirimini onaylayın). Sipariş **Hazırlanıyor** olur, cari kayıtları yazılır.

::: warning Ödenmeyen havale siparişi
Havale siparişlerinin süresi dolmaz; ödeme gelmezse sipariş "Ödeme Bekleniyor"da kalır ve stok
ayrılmış durur. Ödemeyecek siparişi **İptal Edildi** durumuna alın, stok geri eklenir.
:::

### Cari hesaba (vadeli)

Yalnız vadeli çalışan bayilere sunulur. Bkz. [Peşin ve vadeli çalışma](/cari/vadeli-calisma).

- Limit yetiyorsa ve vadesi geçmiş borç yoksa sipariş doğrudan **Hazırlanıyor** olur, borç vade
  tarihiyle cariye yazılır.
- Limit aşılıyorsa ya da vadesi geçmiş borç varsa, hesabın ayarına göre sipariş **Onay
  Bekliyor**'a düşer ya da hiç verilemez (müşteriye kart veya havale önerilir).
- Onay bekleyen siparişi detay ekranından **Onayla** (Hazırlanıyor olur) ya da **Reddet**
  (İptal edilir, stok geri eklenir) diyerek sonuçlandırırsınız.

## Hazırlık, kargo ve teslim

1. **Hazırlanıyor** — depo ekibi siparişi toplar. Birden çok siparişi birlikte toplamak için
   [Toplama listesi](/stok/toplama-listesi) kullanılır.
2. **Kargoya Verildi** — durum değiştirilirken kargo firması ve takip numarası girilir;
   müşteriye takip numarasıyla e-posta gider.
3. **Tamamlandı** — teslim edilen sipariş kapatılır, sonra fatura numarası girilir.
4. Gerekirse müşteri iade süresi içinde **iade talebi** açar. Bkz. [İadeler](/satis/iadeler).

## Durum akışı

```
                       ┌──────────────────────────────┐
  Sipariş verildi ───► │ Ödeme Bekleniyor             │ (kart / havale)
                       └──────────────┬───────────────┘
                     ödeme alındı     │      ödeme başarısız / 60 dk (kart)
                          ┌───────────┴───────────┐
                          ▼                       ▼
  Vadeli, limit içinde ─► Hazırlanıyor        Ödeme Başarısız
                          ▲                   (stok geri eklenir)
  Vadeli, limit aşımı ─► Onay Bekliyor ──Onayla──┘ (Hazırlanıyor'a)
                          │
                          └──Reddet──► İptal Edildi (stok geri eklenir)

  Hazırlanıyor ──► Kargoya Verildi ──► Tamamlandı ──► (fatura no girilir)

  Herhangi bir aşamada yönetici: ──► İptal Edildi
```

Yönetici durum değiştirme penceresinde yalnız mevcut durumdan geçilebilecek durumları görür
(ör. Hazırlanıyor'dan Kargoya Verildi, Tamamlandı ya da İptal Edildi). **Ödeme Bekleniyor**,
**Onay Bekliyor** ve **Ödeme Başarısız** elle seçilemez. Geçişlerin listesi ve her değişikliğin
stok ve cari etkisi için bkz. [Durum geçişleri](/satis/siparisler#durum-gecisleri).

## Kim ne zaman e-posta alır?

| Olay | Müşteri | Siz (bildirim adresi) |
|---|---|---|
| Sipariş oluştu | "Siparişiniz alındı" (havalede banka hesaplarıyla) | Yeni sipariş (kart siparişinde gitmez) |
| Kartla ödeme tamamlandı | "Ödemeniz alındı, siparişiniz hazırlanıyor" | Yeni sipariş (kart siparişinde tek bildirim) |
| Panelde ödeme "Ödendi" yapıldı | "Ödemeniz alındı, siparişiniz hazırlanıyor" | — |
| Panelde durum değişti | Durum e-postası (kargoda takip no ile) | — |
| Teklif / iade adımları | Bkz. [Teklifler](/satis/teklifler#e-postalar), [İadeler](/satis/iadeler#e-postalar) | |

Bildirim adresi **Ayarlar › Tanımlamalar › Satış Ayarları › Bildirimler**'deki **Bildirim
e-postası** alanıdır; boşsa size e-posta gitmez. Bkz. [Satış ayarları](/satis/satis-ayarlari#bildirimler).
