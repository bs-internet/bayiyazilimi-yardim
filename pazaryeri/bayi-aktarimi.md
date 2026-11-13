# Bayi aktarımı (Trendyol Bayi, Hepsiburada Bayi)

**Trendyol Bayi** ve **Hepsiburada Bayi** eklentileri bayilerinize, sizin ürünlerinizi **kendi**
pazaryeri mağazalarında satma imkânı verir. Bayi, aktarıma açtığınız ürünleri seçip kendi mağazasına
gönderir ve satış fiyatını kendisi belirler; fiyat ve stok kendiliğinden eşitlenir.

Eklentiler yalnız ürün, fiyat ve stok taşır. Pazaryeri siparişleri sisteme gelmez, size otomatik
sipariş açılmaz; sipariş, tahsilat, kargo ve iade bayinin kendi sisteminde kalır. Bayi başka
tedarikçilerle de çalışabilir.

İki eklenti aynı yapıdadır; bu sayfa ikisini birlikte anlatır. Menüde **Trendyol Bayi** ya da
**Hepsiburada Bayi** başlığı altında **Bayi Mağazaları**, **İşlem Günlüğü** ve **Aktarım Kuralları**
görünür. Bayinin kullandığı ekran için bkz. [Pazaryeri mağazam](/bayi-paneli/pazaryeri-magazam).

## Bayi Mağazaları {#bayi-magazalari}

Aktarımı kullanabilecek bayiler buradan seçilir:

1. **Bayiye aktarım aç** bölümünde bayiyi adı ya da koduyla arayın, **Aktarımı aç**'a basın.
2. Bayinin panelinde **Trendyol Mağazam** / **Hepsiburada Mağazam** menüsü görünür; bayi mağazasını
   kendisi bağlar.

Listede her bayinin bağlantı durumu (**Bağlanmadı**, **Bayi kapattı**, **Bağlı**, **Hata**), satıştaki,
onay bekleyen ve hatalı ürün sayısı, son eşitleme zamanı ve son hata görünür.

**Yetkili** düğmesi kapatıldığında bayi ekranlara giremez ve bayinin pazaryerinde satıştaki ürünlerinin
**stoğu sonraki eşitlemede 0'a çekilir** (Hepsiburada'da yalnız stok, Trendyol'da stok ve son fiyat gider).
Yetki yeniden açılınca stok normal kuralla geri gelir.

## Aktarım Kuralları {#aktarim-kurallari}

| Kural | Açıklama |
|---|---|
| **Stok güvenlik payı** | Bayilerin mağazasına bildirilen stok: mevcut stok eksi bu adet |
| **Stok üst sınırı** | Bir üründe bildirilecek en fazla adet. 0 ise Trendyol'da 20.000, Hepsiburada'da 9.999 |
| **Aktarılabilir kategoriler** | Yalnız seçilen kategorilerdeki ürünler aktarılabilir. Hiçbiri seçilmezse hepsi |
| **Aktarıma kapalı ürünler** | Ürünü arayıp **Aktarıma kapat** ile tek tek kapatın; **Aktarıma aç** geri açar |

Teklifle satılan ve pasif ürünler hiçbir zaman aktarılmaz. Aktarıma kapatılan ya da kategorisi listeden
çıkan ürünün stoğu bayilerin mağazasında sıfırlanır.

::: tip Stok bayiye ayrılmaz
Bayinin mağazasına bildirilen stok sizin depo stoğunuzdan hesaplanan bir üst sınırdır, bayiye ayrılmış
fiziksel stok değildir. Pazaryerinde satış olunca bayi sizden normal yoldan sipariş verir.
:::

## Fiyat kuralı {#fiyat}

Bayinin pazaryeri fiyatı:

- **Alış fiyatı:** bayinin sizden alış fiyatı. Ürün indirimi varsa o, yoksa bayiye ya da bayi grubuna
  tanımlı indirim uygulanır; ana para birimine çevrilir, KDV eklenir.
- **Satış fiyatı:** alış fiyatı + bayinin kendi ayarındaki **fiyat farkı (%)**. Bayi bir ürüne kendi
  fiyatını da yazabilir; o zaman o fiyat gider.

Fiyatlarınız ya da bayinin indirimi değişince yeni fiyat sonraki eşitlemede kendiliğinden gider.

## İşlem Günlüğü {#islem-gunlugu}

Tüm bayilerin gönderim ve eşitleme kayıtları; bayiye ve **Yalnız hatalar**'a göre süzülür.

## Yetkiler {#yetkiler}

Kurulumda bu ekranların yetkileri **Pazaryeri Yöneticisi** görevine verilir. Bayi tarafı ayrı bir yetki
istemez; yalnız aktarımı açılmış bayi kullanır.
