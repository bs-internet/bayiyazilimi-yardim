# Kartla ödeme

Kartla ödeme **ek modüllerle** gelir: **PayTR** ve **iyzico**. Modül satın alma ve kurulum için:
[bayiyazilimi.com](https://bayiyazilimi.com). Diğer ödeme kuruluşları ve banka sanal POS'ları
talep üzerine eklenir.

## Neler sağlar?

- **3D Secure** ödeme, ödeme kuruluşunun güvenli sayfasında (PayTR iFrame, iyzico Checkout Form).
  Kart bilgisi sistemde tutulmaz.
- **Taksit** — en fazla taksit sayısını ve **taksit farkını kimin ödeyeceğini** (müşteri / firma)
  siz belirlersiniz. Ödeme ekranında taksit tablosu gösterilir; kartın ilk 6 hanesi girilirse
  yalnız o kartın taksitleri listelenir.
- **Kartla cari ödeme** — bayi, **Cari Hesabım › Kartla öde** ile siparişten bağımsız olarak
  bakiyesini öder. Ödeme en eski vadeli borçtan başlayarak kapatır.
- **İade** — sipariş detayı › Ödemeler › **İade et** (tam ya da kısmi). Para ödeme kuruluşu
  üzerinden müşteriye geri gönderilir.
- **Komisyon / vade farkı** — müşterinin ödediği tutar ile sipariş tutarı arasındaki fark ödeme
  kaydında ayrıca görünür.

## Ödeme akışı

1. Müşteri kartla öde seçip siparişi verir.
2. Ödeme kuruluşunun güvenli sayfası açılır, müşteri kart bilgisini orada girer.
3. Ödeme doğrulanınca sipariş **Ödendi** olur; başarısızsa **Ödeme Başarısız** olur ve stok geri
   eklenir.
4. 60 dakika içinde tamamlanmayan ödeme zaman aşımına uğrar ("başarısız" sayılır).

## PayTR ayarları

**Ayarlar › Tanımlamalar › PayTR**

- Mağaza no, mağaza parola ve gizli anahtar (kayıttan sonra gizlenir; boş bırakırsanız değişmez)
- Test modu
- En fazla taksit (0–12) ve taksit farkını kimin ödeyeceği

PayTR mağaza panelinizde **Bildirim URL'si** olarak şunu girin (ayar ekranında da gösterilir):

```
https://alanadiniz.com/odeme/bildirim/paytr
```

## iyzico ayarları

**Ayarlar › Tanımlamalar › iyzico**

- API anahtarı ve gizli anahtar
- Sandbox (test) modu
- En fazla taksit (1, 2, 3, 6, 9, 12) ve taksit farkını kimin ödeyeceği

Dönüş adresi her ödemede otomatik gönderilir; ayrıca bir ayar gerekmez.

::: info T.C. kimlik numarası
iyzico alıcının T.C. kimlik numarasını zorunlu tutar. Müşteriden istenmediğinde iyzico'nun kabul
ettiği örnek değer gönderilir.
:::
