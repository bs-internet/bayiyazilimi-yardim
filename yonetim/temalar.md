# Temalar

Tema, **mağaza ön yüzünün** (Vitrin eklentisinin sunduğu, ziyaretçi ve müşterilerin gördüğü
sayfalar) görünümünü değiştirir. **Giriş ekranı, yönetim paneli ve bayi paneli temadan hiçbir zaman
etkilenmez.**

::: info Vitrin gerekir
Temalar mağaza ön yüzünü değiştirdiği için [Vitrin eklentisi](/vitrin/) kurulu ve açık olmalıdır.
Vitrin yoksa sitenin herkese açık bir ön yüzü yoktur; tema seçmenin bir etkisi olmaz.
:::

## Temalar ekranı

**Ayarlar › Eklentiler › Temalar** — "Tema, mağaza ön yüzünün görünümünü değiştirir; giriş ekranı
ve paneller etkilenmez. Temanın vermediği sayfalarda varsayılan tema kullanılır."

Temalar, **Eklentiler** bölümünün iç menüsündedir (bkz. [Eklentiler](/yonetim/moduller#eklentiler-ekrani)).
Tema paketleri Eklentiler sayfasında değil, burada listelenir.

### Kurulu temalar

| Kart | Açıklama |
|---|---|
| **Varsayılan tema** | Mağaza ön yüzünü sunan eklentinin (Vitrin) kendi tasarımı. Renkleri Vitrin'in **İçerik › Görünüm** ekranından değiştirilir (bkz. [Görünüm](/vitrin/icerik-yonetimi#gorunum)) |
| Kurulu tema paketleri | Her biri ayrı bir kart: temanın adı, açıklaması, sürümü ve geliştireni |

Etkin temanın kartında **Etkin** rozeti vardır; diğerlerinde **Etkinleştir** düğmesi.

### Tema etkinleştirmek

1. **Ayarlar › Eklentiler › Temalar**'ı açın.
2. İstediğiniz temanın kartında **Etkinleştir**'e basın.

Tema hemen uygulanır ("Mağaza teması: *tema adı*." bildirimi). Varsayılan tasarıma dönmek için
**Varsayılan tema** kartında **Etkinleştir**'e basın.

- Bir tema mağazanın bütün sayfalarını vermek zorunda değildir: etkin temanın **vermediği
  sayfalarda varsayılan temanın sayfası** kullanılır.
- Etkin tema kaldırılır ya da [Eklentiler ekranından](/yonetim/moduller#eklentiyi-kapatmak-acmak)
  kapatılırsa mağaza **kendiliğinden varsayılan temaya** döner.
- Tema değişikliği [etkinlik kayıtlarına](/yonetim/etkinlik-kayitlari) yazılır
  ("… mağaza temasını … yaptı.").

### Tüm temalar

"Mağazanız için kurabileceğiniz temalar." Liste her açılışta bayiyazilimi.com'dan güncel haliyle
alınır ("Tema listesi yükleniyor…"). Kurulu olanlar **Kurulu** rozetiyle işaretlidir; **İncele**
temanın tanıtım sayfasını (önizleme ve fiyat bilgisi) açar.

## Tema kurulumu

Tema, kurulumu her eklentiyle aynı olan bir pakettir (SSH gerekir):

```bash
composer require bsinternet/tema-<ad>
php artisan bayi:install <anahtar>
npm run build
```

Ardından **Ayarlar › Eklentiler › Temalar**'da temayı seçip **Etkinleştir**'e basın. Kaldırma ve
güncelleme de eklentilerle aynıdır: bkz. [Eklentiler › Eklentiyi kaldırma](/yonetim/moduller#eklentiyi-kaldirma).

## Tema mı, renk ayarı mı?

| İstediğiniz | Nereden |
|---|---|
| Varsayılan tasarımı koruyup renkleri markanıza uydurmak | **İçerik › Görünüm › Tema renkleri** (bkz. [Görünüm](/vitrin/icerik-yonetimi#gorunum)) |
| Mağazanın sayfa düzenini tamamen farklı bir tasarımla değiştirmek | Bir tema kurup **Temalar**'dan etkinleştirmek |

Görünüm'deki renkler varsayılan temaya uygulanır; başka bir tema etkinse kendi renklerini
kullanabilir.

## Yetki

Temalar ekranının yetkileri (görüntüleme ve etkinleştirme) kurulumda **Admin** görevine atanır;
diğer görevlere [Görevler](/yonetim/roller-yetkiler) ekranından eklenebilir.

Kendi temanızı yazmak için: [Tema geliştirme](/gelistirici/tema-gelistirme).
