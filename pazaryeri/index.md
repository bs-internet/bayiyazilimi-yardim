# Pazaryeri eklentileri

Bayi Yazılımı'nı Trendyol ve Hepsiburada'ya bağlayan dört ücretli eklenti vardır. Her pazaryeri için
iki ayrı eklenti bulunur; ihtiyacınız olanı kurarsınız, ikisi birlikte de çalışır.

| Eklenti | Kimin mağazası | Ne yapar |
|---|---|---|
| [Trendyol](/pazaryeri/trendyol) | Firmanın kendi mağazası | Ürün gönderme, fiyat / stok eşitleme, siparişleri içeri alma |
| [Hepsiburada](/pazaryeri/hepsiburada) | Firmanın kendi mağazası | Ürün gönderme, fiyat / stok eşitleme, siparişleri içeri alma ve paketleme |
| [Trendyol Bayi](/pazaryeri/bayi-aktarimi) | Bayilerin mağazaları | Bayi, firmanın ürünlerini kendi Trendyol mağazasına aktarır |
| [Hepsiburada Bayi](/pazaryeri/bayi-aktarimi) | Bayilerin mağazaları | Bayi, firmanın ürünlerini kendi Hepsiburada mağazasına aktarır |

## Ortak işleyiş {#ortak}

- **Eşleştirme:** pazaryeri ürünü kendi kategori ağacına göre ister. Kategorilerinizi bir kez pazaryeri
  kategorisine bağlar, zorunlu özelliklerin (renk, cinsiyet, malzeme …) varsayılan değerlerini girersiniz.
  Varyant özellikleri ürün bazında da girilebilir.
- **Gönderim öncesi denetim:** barkod, stok kodu, eşleşmiş kategori, zorunlu özellikler ve görsel eksikse
  ürün gönderilmez; neden ürünün satırında görünür.
- **Onay:** pazaryeri gönderilen ürünü inceler. Sonuç bir sonraki eşitlemede gelir: **Satışta** ya da
  pazaryerinin gerekçesiyle **Hata**.
- **Eşitleme:** onaylı ürünlerin fiyatı ve stoğu **15 dakikada bir** kendiliğinden gönderilir; yalnız
  değişenler gider. Ürünler ekranındaki **Şimdi eşitle** beklemeden çalıştırır.
- **Varyant:** sistemde varyant yoktur. Aynı model kodundaki (Hepsiburada'da varyant grubundaki) ürünler
  pazaryerinde tek ürün sayfasında seçenek olarak görünür.
- **İşlem günlüğü:** her gönderim, eşitleme ve sipariş aktarımı sonucuyla birlikte günlüğe yazılır.

::: warning Zamanlanmış görevler
Otomatik eşitleme için sunucuda Laravel zamanlayıcısının (cron ile `schedule:run`) çalışması gerekir
(bkz. [VPS'e kurulum](/baslangic/vps)).
:::

## Yetkiler {#yetkiler}

Firma eklentileri kurulurken ekranların yetkileri **Pazaryeri Yöneticisi** görevine verilir. Bu görevi
bir kullanıcıya atayarak pazaryeri işini başka ekranlara erişim vermeden yaptırabilirsiniz (bkz.
[Görevler ve yetkiler](/yonetim/roller-yetkiler)).

## Fatura {#fatura}

Bayi Yazılımı fatura kesmez. Pazaryeri siparişi teslim edildikten sonra faturası muhasebe programınızda
kesilir; sistemde sipariş yalnız **faturalandı** olarak işaretlenir. Pazaryerine fatura bilgisi gönderilmez.
