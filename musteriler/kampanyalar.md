# Kampanyalar

Kampanyalar **Müşteriler › Kampanyalar** ekranından yönetilir. Yeni kampanya **pasif**
oluşturulur; hazır olunca aktif yapın.

Bir kampanya dört bölümden oluşur:

1. **Genel bilgiler** — ad, açıklama, tarih aralığı, sıra.
2. **Kime / ne zaman** — kampanyanın geçerli olduğu koşullar.
3. **Hangi ürünlere** — tüm ürünler ya da seçilen ürün koşulları.
4. **İşlem** — ne kazandırdığı.

## Kime / ne zaman

Koşullar gruplar halinde girilir: **grup içindeki koşulların hepsi** sağlanmalı (VE), **gruplardan
biri** sağlanırsa yeter (VEYA). Hiç koşul yoksa kampanya herkese geçerlidir.

Kullanılabilecek koşullar:

- bayi grubu, belirli müşteri
- sepet tutarı, sepet adedi
- para birimi, ödeme yöntemi (ör. yalnız havale ile ödeyenlere)
- teslimat ili
- gün ve saat

[Vitrin modülü](/vitrin/) kuruluysa ayrıca **müşteri tipi**, **ilk sipariş** ve **kupon kodu**
koşulları gelir.

::: tip Ödeme adımında bilinen koşullar
Ödeme yöntemi ve teslimat ili ödeme adımında belli olur. Sepette bu koşullar "sağlanmamış"
sayılır; indirim ödeme ekranında yöntem / adres seçilince görünür. Bayide teslimat ili olarak
varsayılan teslimat adresi kullanılır.
:::

## İşlem türleri

| İşlem | Örnek |
|---|---|
| Yüzde indirim | %10, isteğe bağlı üst sınırla (en fazla 500 TL) |
| Tutar indirimi | 100 TL (seçilen para biriminde) |
| X Al Y Öde | 3 al 2 öde |
| Kademeli indirim | Her ürün için 3 adet %5, 10 adet %10 — ya da sepet 1.000 TL üstü %5 |
| Hediye ürün | Sepete 0 tutarlı satır olarak eklenir, stoktan düşer |

Her kampanyada **kargo** ayrıca seçilir: sepete göre (normal), **ücretsiz** ya da **sabit ücret**.
Örneğin "2 Al 1 Öde + ücretsiz kargo". Normal ücret daha düşükse o geçerlidir.

## Kullanım sınırları

- **Toplam kullanım sınırı** — kampanya en fazla kaç siparişte kullanılsın.
- **Müşteri başına sınır** — her bayi / müşteri en fazla kaç kez.
- **Bütçe** — kampanyanın toplam kazandırabileceği tutar (ana para biriminde).

İptal edilen ve ödemesi başarısız siparişler kullanıma sayılmaz.

## Birden çok kampanya

Bir sepete birden çok kampanya uyuyorsa müşteriye **en çok kazandıran** uygulanır. Eşitlikte
sırası küçük olan seçilir.

Kampanyanın **Birlikte kullanılacak kampanyalar** alanında seçtiğiniz kampanyalar birlikte
uygulanabilir; sistem birleşebilen kampanyalar arasından en çok kazandıran kümeyi seçer. Aynı
satıra uygulanan indirimler satır tutarını geçmez.

## Nerede uygulanmaz?

Teklif listesine, tekliften oluşan siparişlere ve panelden açılan siparişlere kampanya
uygulanmaz.

## Kampanya raporu

**Raporlar › Kampanya** her kampanyanın kaç siparişte kullanıldığını ve müşteriye ne
kazandırdığını (indirim + hediye + kargo) gösterir. Bkz. [Raporlar](/yonetim/raporlar).
