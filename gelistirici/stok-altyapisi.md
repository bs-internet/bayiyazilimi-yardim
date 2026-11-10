# Stok altyapısı

## Üç katman

Alttaki katman tek doğru kaynaktır. Üsttekiler ondan türetilir.

| Katman | Tablo / alan | Anlamı |
|---|---|---|
| Lokasyon stoğu | `location_stocks` (ürün × lokasyon × lot) | Asıl kayıt. Takipsiz üründe `stock_lot_id` null |
| Depo stoğu | `product_stocks` (ürün × depo) | Depodaki lokasyonların toplamı |
| Satılabilir stok | `products.stock` | Aktif ve satılabilir depoların toplamı. İzlenebilirlik açıksa süresi geçmiş lotlar hariç |

Diğer tablolar: `warehouses`, `warehouse_locations` (her depoda silinemeyen bir "Atanmamış"),
`stock_movements` (tür, miktar, sonraki bakiye, lokasyon, lot, referans, kullanıcı), `stock_lots`,
`suppliers`, `stock_receipts`, `stock_counts` / `stock_count_lines`; `accounts.warehouse_id`
(bölge deposu), `orders.warehouse_id`.

**Hareket türleri** (`StockMovementType`): Giriş, Çıkış, Sayım Düzeltme, Transfer (giriş / çıkış),
Satış, İade / İptal, İçe Aktarım, Lokasyon Değişimi, Lot Değişimi.

## Kurallar

Tüm değişiklikler **`StockService`** üzerinden geçer. Tablolar doğrudan güncellenmez.

- **Kilit:** her değişiklik ilgili `product_stocks` satırını `lockForUpdate` ile kilitler. Aynı
  ürün + depo üzerindeki eşzamanlı işlemler sıraya girer.
- **Sipariş:** stok kontrolü ve düşüm aynı transaction'da, ürün satırları kilitlenerek yapılır.
- **Lokasyon verilmezse:** giriş → ürünün en çok bulunduğu lokasyon (yoksa Atanmamış). Çıkış →
  toplama sırası (koridor → raf → göz, Atanmamış en sonda).
- **Lot verilmezse:** FEFO: SKT'si en yakın, süresi geçmemiş lot önce; SKT'siz en sonda.
- **Yetmeyen miktar** Atanmamış lokasyonda "lot belirsiz" olarak eksiye düşer. Açıkça verilen
  lotta stok yetmezse işlem reddedilir. Seri numarası eksiye düşemez.
- Her değişiklikten sonra `Product::syncStockTotal()` satılabilir stoğu yeniden hesaplar ve kritik
  stok kontrolünü yapar.
- **İptal** siparişin üzerindeki *net* düşümü (satış + lot değişimi − iptal / iade) geri ekler;
  iptal → yeniden açma → iptal döngüsünde stok iki kez eklenmez.
- **`settleUnassigned`:** aynı depoya lotlu giriş olunca önce eksik düşülmüş siparişleri gelen
  lota bağlar, sonra kalan lot belirsiz eksiyi kapatır ("Lot Değişimi" hareketleri).

## Olaylar

| Olay | Dinleyici |
|---|---|
| `StockLowEvent` (eşiğe inişte bir kez, commit sonrası) | `SendLowStockNotification` |
| `StockReceivedEvent` | `LogStockReceived` |
| `StockCountClosedEvent` | `LogStockCountClosed` |
| `StockAdjustedEvent` | `LogStockAdjusted` |

## Zamanlanmış komut

`shop:refresh-expired-stock`: her gün 00:10. Süresi yeni dolan lotların ürün stoğunu günceller.

## Kapsam dışı

Maliyet, alış fiyatı ve muhasebe kaydı bilinçli olarak tutulmaz (ERP'nin işi).
