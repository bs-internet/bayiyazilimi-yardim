# Temalar

Tema, **mağaza ön yüzünün** (Vitrin eklentisinin sunduğu, ziyaretçi ve müşterilerin gördüğü
sayfalar) görünümünü değiştirir. **Giriş ekranı, yönetim paneli ve bayi paneli temadan hiçbir zaman
etkilenmez.**

::: info Vitrin gerekir
Temalar mağaza ön yüzünü değiştirdiği için [Vitrin eklentisi](/vitrin/) kurulu ve açık olmalıdır.
Vitrin yoksa sitenin herkese açık bir ön yüzü yoktur. Tema seçmenin bir etkisi olmaz.
:::

## Temalar ekranı

**Ayarlar › Eklentiler › Temalar**: "Tema, mağaza ön yüzünün görünümünü değiştirir. Giriş ekranı
ve paneller etkilenmez. Temanın vermediği sayfalarda varsayılan tema kullanılır."

Temalar, **Eklentiler** bölümünün iç menüsündedir (bkz. [Eklentiler](/yonetim/moduller#eklentiler-ekrani)).
Tema paketleri Eklentiler sayfasında değil, burada listelenir.

### Kurulu temalar

| Kart | Açıklama |
|---|---|
| **Varsayılan tema** | Mağaza ön yüzünü sunan eklentinin (Vitrin) kendi tasarımı. Renkleri Vitrin'in **İçerik › Görünüm** ekranından değiştirilir (bkz. [Görünüm](/vitrin/icerik-yonetimi#gorunum)) |
| Kurulu tema paketleri | Her biri ayrı bir kart: temanın adı, açıklaması, sürümü ve geliştireni |

Etkin temanın kartında **Etkin** rozeti vardır. Diğerlerinde **Etkinleştir** düğmesi.

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

### Hazır temalar {#hazir-temalar}

Bayi Yazılımı için yedi tema vardır. Hepsi renklerini **İçerik › Görünüm › Tema renkleri**'nden
alır; her birinin canlı demosu bayiyazilimi.com'da.

| Tema | Kimin için | Öne çıkanlar |
|---|---|---|
| **Atlas** | Binlerce ürünü olan toptancılar | Liste / ızgara görünümü, tüm kategorileri gösteren menü, satırdan adet girip sepete ekleme |
| **Pazar** | Market tipi, hızlı alışveriş | Büyük arama, kategori kısayolları, kartta adet seçip tek tıkla sepet, mobilde alt gezinme |
| **Butik** | Az ama özenli ürün, marka odaklı mağaza (giyim, dekorasyon, kozmetik) | Büyük görseller, geniş boşluklar, ortalanmış logo ve menü |
| **Kurumsal** | Üretici ve distribütörler | Önce firma tanıtımı, büyük giriş görseli, ürün grupları, katalog görünümü, öne çıkan bayi başvurusu |
| **Oto** | Oto yedek parça satıcıları | Araç seçici (marka › model › parça grubu), OEM / ürün kodu araması, seçilen aracı hatırlama |
| **Hırdavat** | Hırdavat ve yapı market | Simgeli reyon menüsü, alet markaları, usta / bayi çağrısı, en az sipariş adedi bilgisi |
| **Sanayi** | Rulman, hidrolik, pnömatik, elektrik tedarikçileri | Yazarken sonuç veren kod araması, tablo görünümlü teknik katalog |

### Oto teması: araç seçici için kategori ağacı {#oto}

Oto temasının araç seçicisi ayrı bir veri istemez, **kategori ağacınızdan** çalışır:

| Seviye | Ne olmalı | Örnek |
|---|---|---|
| 1. seviye (ana kategori) | Araç markası | Renault |
| 2. seviye | Model (ve yıl aralığı) | Clio IV (2012-2019) |
| 3. seviye | Parça grubu | Fren Sistemi |

Ürünü en alt kategoriye (parça grubuna) bağlayın. Ziyaretçi araç seçicide marka ve model seçince
seçici o kategoriye gider; seçtiği araç tarayıcıda hatırlanır. OEM ve muadil numaraları ürünün
**arama kelimeleri** alanına yazın; arama bunları da bulur. Araç markalarını menüde sıralamak
için **İçerik › Menüler › Kategori Menüsü**'nü kullanın (bkz. [Kategori menüsü](/vitrin/icerik-yonetimi#kategori-menusu)).

## Tema kurulumu

Tema da bir eklenti gibi sunucunuza kurulur (bkz. [Eklentiler](/yonetim/moduller#eklenti-kurulumu)).
Kurulduktan sonra **Ayarlar › Eklentiler › Temalar**'da temayı seçip **Etkinleştir**'e basın. Kaldırma ve
güncelleme de eklentilerle aynıdır: bkz. [Eklentiler › Eklentiyi kaldırma](/yonetim/moduller#eklentiyi-kaldirma).

## Tema mı, renk ayarı mı?

| İstediğiniz | Nereden |
|---|---|
| Varsayılan tasarımı koruyup renkleri markanıza uydurmak | **İçerik › Görünüm › Tema renkleri** (bkz. [Görünüm](/vitrin/icerik-yonetimi#gorunum)) |
| Mağazanın sayfa düzenini tamamen farklı bir tasarımla değiştirmek | Bir tema kurup **Temalar**'dan etkinleştirmek |

Görünüm'deki renkler varsayılan temaya uygulanır. Başka bir tema etkinse kendi renklerini
kullanabilir.

## Yetki

Temalar ekranının yetkileri (görüntüleme ve etkinleştirme) kurulumda **Admin** görevine atanır;
diğer görevlere [Görevler](/yonetim/roller-yetkiler) ekranından eklenebilir.

Kendi temanızı yazmak için: [Tema geliştirme](/gelistirici/tema-gelistirme).
