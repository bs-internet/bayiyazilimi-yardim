# Ön bellek yönetimi

**Ayarlar › Ön Bellek Yönetimi** — sistemin hız için sakladığı geçici dosyaları (önbellek)
temizler. Normal kullanımda gerekmez; şu durumlarda işe yarar:

- `.env` dosyasında bir değişiklik yaptınız (ör. e-posta ayarları) ama etkisi görünmüyor.
- Sunucuya yeni dosyalar yüklediniz (güncelleme) ve ekranlar eski haliyle görünüyor.
- Destek ekibi önbelleği temizlemenizi istedi.

Önbellek temizlemek **veri silmez**: ürünler, siparişler, ayarlar, yüklenen dosyalar yerinde
kalır. Temizlemeden hemen sonraki ilk sayfa açılışları biraz yavaş olabilir.

## Önbellek türleri

Her kartta **Temizle** düğmesi vardır; basınca onay sorulur ("… önbelleğini temizlemek
istediğinize emin misiniz?") ve **Evet, Temizle** ile uygulanır.

| Kart | Ne temizlenir | Ne zaman kullanılır |
|---|---|---|
| **Uygulama Önbelleği** | Uygulama düzeyinde önbelleğe alınmış veriler (ör. ayarlar, yetki listesi) | Ayarlar ya da yetkiler değişti ama ekranda eski hali görünüyor |
| **Yapılandırma Önbelleği** | Yapılandırma dosyalarının önbelleği | `.env` dosyasını değiştirdikten sonra |
| **Rota Önbelleği** | Derlenmiş adres (rota) tanımları | Güncelleme ya da eklenti kurulumundan sonra bir sayfa "bulunamadı" veriyorsa |
| **Görünüm Önbelleği** | Derlenmiş sayfa şablonları (e-posta şablonları dahil) | Güncellemeden sonra e-postalar ya da şablonlar eski görünüyorsa |
| **Olay Önbelleği** | Olay ve dinleyici listesi | Güncellemeden sonra |
| **Derlenmiş Önbellek** | Derlenmiş sınıf dosyaları | Güncellemeden sonra |

## Tüm önbellekleri temizle

**Tüm Önbellekler** kartındaki **Tümünü Temizle** — uygulama, yapılandırma, rota, görünüm, olay
ve derlenmiş önbellekleri tek seferde temizler. Hangisini seçeceğinizden emin değilseniz bunu
kullanın.

Bu düğme sunucudaki `php artisan optimize:clear` komutuyla aynı işi yapar. Panele
giremiyorsanız komutu SSH'tan çalıştırın.

::: info Kuyruk işleyicisi
VPS'te supervisor ile kuyruk çalıştırıyorsanız `.env` değişikliğinden sonra önbelleği temizlemek
yetmez; işleyicinin yeni ayarları alması için ayrıca `php artisan queue:restart` çalıştırın.
:::

Her temizleme işlemi [etkinlik kayıtlarına](/yonetim/etkinlik-kayitlari) yazılır.

## Yetki

Ekranın yetkileri (görüntüleme ve temizleme) kurulumda **Admin** görevine atanır; diğer görevlere
**Görevler** ekranından eklenebilir.
