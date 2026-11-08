# Satış Ayarları

**Ayarlar › Tanımlamalar › Satış Ayarları** fiyatların KDV dahil / hariç gösterimini, teklif
geçerlilik süresini, iade talebi süresini ve yönetici bildirimlerinin gideceği e-posta adresini
belirler. **Kaydet** ile kaydedilir; değişiklik etkinlik kayıtlarına yazılır.

## Fiyat gösterimi

Ürün fiyatları her zaman KDV hariç girilir. Bu ayar, müşterilerin ürün listesinde ve ürün
sayfasında fiyatı nasıl göreceğini seçer.

| Alan | Seçenekler | Varsayılan | Açıklama |
|---|---|---|---|
| **Bayi** | *KDV dahil* / *KDV hariç (girildiği gibi)* | KDV hariç | Giriş yapmış bayiler için |
| **Ziyaretçi / müşteri** | *KDV dahil* / *KDV hariç (girildiği gibi)* | KDV dahil | Yalnız [Vitrin eklentisi](/vitrin/) kuruluysa görünür. Giriş yapmamış ziyaretçiler ve bayi olmayan müşteriler için |

Bu ayar yalnız fiyatların nasıl gösterileceğini etkiler; sipariş tutarını değiştirmez (siparişe
KDV her durumda eklenir). **Tanımlamalar** genel bakış kartında seçiminiz "Bayi fiyatları KDV
hariç" ya da "Bayi fiyatları KDV dahil" diye özetlenir.

## Teklif ve iade

| Alan | Sınır | Varsayılan | Açıklama |
|---|---|---|---|
| **Teklif geçerlilik süresi (gün)** | 1–365 | 15 | Teklif gönderilirken geçerlilik bitiş tarihi boşsa (ya da süresi geçmişse) gönderim gününe bu kadar gün eklenir. Onaylanan teklif bu süre içinde siparişe dönüştürülebilir. Bkz. [Teklifler](/satis/teklifler). |
| **İade talebi süresi (gün)** | 0–365 | 14 | Müşteri, siparişin kargoya verildiği tarihten itibaren bu kadar gün içinde iade talebi açabilir. Ekrandaki açıklama: "Sipariş kargoya verildikten sonra bu süre içinde iade talebi açılabilir. 0 = iade kapalı." Bkz. [İadeler](/satis/iadeler). |

::: info İade süresi 0 olursa
**0** girildiğinde iade tamamen kapanır: hiçbir sipariş için iade talebi açılamaz. Müşteri yine
de denerse "İade talebi kabul edilmiyor." uyarısını görür.
:::

Değişiklik yalnız bundan sonraki işlemleri etkiler: gönderilmiş tekliflerin bitiş tarihi
değişmez; iade süresi ise talep açılırken o anki ayara göre denetlenir.

## Bildirimler {#bildirimler}

| Alan | Açıklama |
|---|---|
| **Bildirim e-postası** | İsteğe bağlı. Ekrandaki açıklama: "Yeni sipariş, ödeme, teklif ve iade talepleri bu adrese bildirilir. Boşsa yöneticilere e-posta gitmez." Havale bildirimleri ve müşterinin teklife verdiği yanıtlar da bu adrese gelir. Tek bir e-posta adresi yazılır; sitede görünmez. |

::: warning Boş bırakırsanız
Bildirim e-postası boşsa yeni sipariş, teklif, iade ve havale bildirimleri size **hiç gelmez**.
Bkz. [E-posta ve bildirimler](/yonetim/e-posta-bildirimleri).
:::

## İlgili ayarlar

- Kargo ücretleri: **Kargo Ayarları** ve **Kargo Firmaları** — bkz. [Kargo](/satis/kargo).
- Ödeme yöntemlerinin en düşük tutarı, vade uyarısı, çek / senet: **Cari Ayarları** — bkz.
  [Cari hesap](/cari/).
- Havale / EFT ve havale indirimi: **Banka Hesapları** — bkz. [Havale](/cari/havale).
- Bayi ve bayi grubu indirimleri: bkz. [Fiyat ve indirimler](/musteriler/fiyat-ve-indirimler).
