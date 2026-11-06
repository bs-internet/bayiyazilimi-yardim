# Teklifler

Teklifler **Mağaza › Teklifler** ekranından yönetilir. Bir teklif iki yoldan başlar:

- **Bayinin / müşterinin talebi:** ürünleri teklif listesine ekleyip talep gönderir.
- **Sizin teklifiniz:** panelde **Yeni teklif** ile müşteri ya da bayi seçilir, ürünler aranarak
  eklenir, para birimi seçilir. **Kaydet** teklifi taslak bırakır (müşteri görmez).

## Teklif hazırlama

Teklifte şunları girersiniz:

- Ürün fiyatları (KDV hariç, teklifin para biriminde), birim ve KDV oranı
- Kargo ücreti (KDV dahil)
- Geçerlilik aralığı (başlangıç ve bitiş tarihi)
- Müşteriye not

Hazır olunca **Kaydet ve gönder** deyin. Müşteriye e-posta gider.

## Müşterinin yanıtı

Müşteri teklifi kendi panelinden (bayi: **Teklifler › Tekliflerim**) ya da e-postadaki
bağlantıdan açar:

| Müşteri işlemi | Sonuç |
|---|---|
| **Onayla** | Teklif onaylanır, ödeme sayfası açılır. Ödeme yapılınca **sipariş oluşur** |
| **Revize iste** (not yazması gerekir) | Teklif size döner; düzenleyip yeniden gönderirsiniz |
| **Reddet** | Teklif kapanır |
| **Talebi geri çek** | Henüz fiyatlanmamış talebi müşteri geri çekebilir |

- Geçerlilik tarihleri dışında (henüz başlamadı ya da süresi doldu) müşteri yanıt veremez ve
  ödeyemez.
- Açık bir teklifi notla **iptal** edebilirsiniz. Yalnız taslak teklifler silinebilir.
- Onaylı tekliften oluşan sipariş ödenmeden iptal edilirse teklif yeniden ödenebilir hale gelir.

## Tekliften sipariş

Teklif fiyatları ve para birimiyle sipariş oluşur. Teklif siparişlerine **kampanya uygulanmaz**
ve stok kontrolüne takılmaz (stok yetmezse eksiye düşer).

## Geçmiş ve e-postalar

Her adım notuyla birlikte **Geçmiş** bölümüne yazılır; panelde ve müşteri ekranında görünür.

E-posta gönderilen durumlar: talep alındı (müşteriye ve size), teklif gönderildi / iptal edildi
(müşteriye), müşteri onayladı / revize istedi / reddetti / geri çekti (size, müşteriye de
teyit). Size gelen e-postalar **İletişim Bilgileri**'ndeki bildirim adresine gider.

Teklif geçerlilik süresinin varsayılanı **Ayarlar › Tanımlamalar › Satış Ayarları**'ndadır.
