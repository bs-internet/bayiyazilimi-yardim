# Sayım

Tek bir ürünün miktarını düzeltmek için Stok Durumu'ndaki hızlı sayım yeterlidir. Bir depoyu ya
da rafı baştan sona saymak için **sayım oturumu** kullanın.

## Sayım başlatma

**Stok › Sayım › Sayım başlat** — depo ve kapsam seçilir:

- **Tüm depo**, ya da
- **tek lokasyon** (ör. yalnız A-03 rafı).

Kayıt `SY` ile başlayan bir numara alır. Aynı depoda kapsamı örtüşen iki açık sayım olamaz: tüm
depo sayılırken başka sayım açılmaz, ama farklı raflar aynı anda sayılabilir.

## Okutma

1. Lokasyonu seçin.
2. Barkodu okutun ya da stok kodu / ürün adı yazıp Enter'a basın.
   - Tam barkod ya da stok kodu eşleşmesi doğrudan "Adet" kadar eklenir; aynı ürün yeniden
     okutulunca artar.
   - Birden çok ürün eşleşirse listeden seçersiniz.
   - Lot takipli üründe lot no (mevcut lotlar önerilir, yeni lot ve SKT açılabilir), seri takipli
     üründe seri no sorulur.
3. Sayılan miktar tablodan elle de düzeltilebilir; satır silinebilir.

## Onay

Her satırda **beklenen** (sistemdeki) ve **sayılan** miktar görünür. Onaylayınca tüm farklar tek
seferde "Sayım Düzeltme" hareketi olarak yazılır.

::: tip Sayım sırasında satış devam edebilir
Beklenen miktar, satırın son güncellendiği andaki sistem miktarıdır. Onayda yalnız
`sayılan − beklenen` kadar düzeltme yapılır; sayımdan sonra, onaydan önce yapılan satışlar geri
alınmaz.
:::

**Sayılmayanları sıfırla** (isteğe bağlı): kapsamda stoğu görünüp hiç sayılmamış satırlar 0'a
çekilir. Yalnız eksiksiz bir sayımda kullanın; ekran bu satırları onaydan önce listeler.

İptal edilen sayım stoğa dokunmaz. Kapanmış sayım değiştirilemez.
