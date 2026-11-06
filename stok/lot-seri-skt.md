# Lot, seri no ve SKT

Gıda, kozmetik, ilaç, elektronik gibi parti ya da seri numarasıyla izlenmesi gereken ürünler
için. **İsteğe bağlıdır** ve varsayılan olarak kapalıdır.

## Açma

**Stok › Stok Ayarları › Lot / seri no ve SKT takibi**

Kapalıyken tüm ürünler takipsiz davranır; ürün formundaki izlenebilirlik alanları, **Lot / Seri
No** menüsü ve SKT filtreleri gizlenir. Kapatırsanız ürünlerin ayarları ve lotlar silinmez;
yeniden açınca geri gelir.

## Ürün ayarı

Ürün formunda **İzlenebilirlik**:

- **Takip yok**
- **Lot** — parti numarasıyla
- **Seri numarası** — her adet ayrı numarayla (bir seri numarası tüm depolarda en fazla 1 adet
  olabilir)

ve ayrıca **SKT takibi** (son kullanma tarihi).

## Giriş

- [Mal kabul](/stok/mal-kabul) (önerilen)
- Stok Durumu'ndaki hızlı giriş (lot no ya da tek seri no + SKT)
- [Sayım](/stok/sayim)

Excel aktarımı lot / seri takipli ürünlerin stoğunu değiştirmez.

## Çıkış ve sipariş: önce SKT'si yakın olan

Lot seçilmezse **son kullanma tarihi en yakın, süresi geçmemiş** lot önce düşülür. SKT'si olmayan
lotlar en sonda kullanılır; SKT'ler eşitse eski lot önce.

- **Süresi geçmiş lot** otomatik seçilmez ve **satılabilir stoğa sayılmaz**. Her gece süresi yeni
  dolan lotlar satıştan çekilir.
- Sayım ve lokasyon değişiminde lot seçmek zorunludur; çıkış ve transferde isteğe bağlıdır.
  Transfer lotları hedef depoya aynen taşır.
- İptal ve iade stoğu siparişte düştüğü lota döndürür.

## Stok yokken satılan ürünler

Ön siparişle stok yokken satılan adetler "lot belirsiz" olarak eksiye düşer. Aynı depoya lotlu
giriş yapıldığında sistem bunu kendiliğinden düzeltir: eksik düşülmüş siparişleri (en eskiden
başlayarak) gelen lota bağlar, kalan eksiği gelen lottan kapatır. Sipariş detayında doğru lot
görünür.

## Lot / Seri No ekranı

**Stok › Lot / Seri No** lotları SKT, stok ve yer bilgisiyle listeler: stokta / SKT yaklaşan /
SKT geçmiş / tümü. **Hareketler** bir lotun hangi mal kabulle geldiğini ve hangi siparişlerle
çıktığını gösterir — geri çağırma durumunda hangi müşteriye ne gittiğini buradan bulursunuz.

Depo Excel'inde Lot / Seri No ve SKT sütunları vardır.
