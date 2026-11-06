# Stok işlemleri

Stok işlemleri **Stok › Stok Durumu** ekranından yapılır. Her değişiklik **Stok Hareketleri**'ne
kim, ne zaman, ne kadar bilgisiyle yazılır.

## İşlemler

| İşlem | Ne işe yarar |
|---|---|
| **Giriş** | Depoya stok ekler. Lokasyon isteğe bağlı |
| **Çıkış** | Depodan stok düşer (fire, numune, düzeltme …) |
| **Sayım (hızlı)** | Bir ürünün depodaki (ya da seçilen lokasyondaki) miktarını verilen değere eşitler. Çok ürünlü sayım için [Sayım](/stok/sayim) |
| **Transfer** | Depolar arası aktarım. Kaynak ve hedef lokasyon ayrı seçilebilir; kaynak lokasyon seçilirse yalnız oradan düşülür |
| **Lokasyon değiştir** | Aynı depo içinde raf değişikliği; depo toplamı değişmez |

Lot / seri takipli ürünlerde işlem sırasında lot ya da seri numarası da sorulur. Bkz.
[Lot, seri no ve SKT](/stok/lot-seri-skt).

**Filtreler:** depo, kritik stokta; izlenebilirlik açıksa SKT'si yaklaşan ve SKT'si geçmiş.

## Stok hareketleri

**Stok › Stok Hareketleri** tüm hareketleri listeler. Hareket türleri:

Giriş · Çıkış · Sayım Düzeltme · Transfer (giriş / çıkış) · Satış · İade / İptal · İçe Aktarım ·
Lokasyon Değişimi · Lot Değişimi

Hareketten ilgili siparişe, mal kabule ya da sayıma geçilebilir. Lot / seri no ile arama
yapılabilir.

## Sipariş ve stok

- Stok **sipariş verildiği anda** düşülür. Siparişin deposundan (bayinin bölge deposu, yoksa
  varsayılan depo), yetmezse diğer satılabilir depolardan.
- Stoğu yetmeyen ürün sepete eklenemez. Ön siparişe açık ürünlerde yetmeyen kısım eksiye düşer.
- **Ödeme başarısız** ya da **iptal** → stok, düştüğü depo, lokasyon ve lota geri eklenir. İptal
  edilen sipariş yeniden açılıp tekrar iptal edilse de stok iki kez eklenmez.
- **İade** → "Ürünleri stoğa geri ekle" seçilirse ürün toplandığı yere döner.

### Lotu değiştir

Depoda sistemin önerdiğinden farklı bir lot toplandıysa sipariş detayında **lotu değiştir** ile
düzeltilir: eski lot geri eklenir, yenisi düşülür. Sipariş toplamı değişmez.

## Kritik stok

- Ürün formundaki **Kritik stok** eşiği; boşsa Stok Ayarları'ndaki genel eşik (varsayılan 5).
- Satılabilir stok bu eşiğe **inerek** geldiğinde stok yetkisi olan yöneticilere uygulama içi
  bildirim ve e-posta gider. Aynı düşüş için bir kez bildirilir; stok eşiğin üstüne çıkıp yeniden
  inerse tekrar bildirilir.
- Stok girişiyle eşiğin altında kalmak, stok takibi kapalı ve pasif ürünler bildirim üretmez.
- Bildirim Stok Ayarları'ndan kapatılabilir.
- Stok Durumu'nda **Kritik stokta** filtresi, stok raporunda **Kritik stoktakiler** listesi vardır.
