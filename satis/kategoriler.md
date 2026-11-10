# Kategoriler

**Mağaza › Katalog › Kategoriler** ürünlerin gruplandığı kategori ağacını yönetir. Kategoriler
bayi panelindeki ve vitrindeki ürün listelerinde, kampanya koşullarında ve raporlarda
kullanılır.

## Liste

Kategoriler ağaç sırasıyla listelenir: ana kategori, hemen altında alt kategorileri (girintili).
Başlıkta toplam kategori sayısı yazar. **Kategori ara** kutusu ada göre süzer.

| Sütun | İçerik |
|---|---|
| **Kategori** | Ad ve görsel. Alt kategoriler girintili |
| **Ürün** | Kategoriye doğrudan bağlı ürün sayısı |
| **Sıra** | Sıralama sayısı |
| **Aktif** | Anahtar: kategoriyi aktif / pasif yapar |

Satırın **İşlemler** menüsünde **Düzenle** ve **Alt kategori ekle** vardır.

## Kategori formu

**Yeni kategori**, **Düzenle** ya da **Alt kategori ekle** sağdan açılan bir panel getirir.

### Genel

| Alan | Açıklama |
|---|---|
| **Üst kategori** | Boşsa (*: Ana kategori: *) kategori en üst düzeydedir. **Alt kategori ekle** ile açıldıysa üst kategori seçili gelir. Düzenlemede kategorinin kendisi ve kendi alt dalları listede çıkmaz. |
| **Ad** * | En çok 255 karakter. |
| **URL (slug)** | Kategori sayfasının adresi. Boş bırakılırsa addan üretilir. Aynısı varsa sonuna sayı eklenir. |
| **Açıklama** | En çok 5000 karakter. |

### Görsel

| Alan | Açıklama |
|---|---|
| **Kategori görseli** | Görsel dosyası, en çok 4 MB. Vitrin eklentisi kuruluysa sitede kullanılır. |
| **Mevcut görseli kaldır** | Görsel yüklüyse görünür. İşaretleyip kaydederseniz görsel silinir. |

### Vitrin

| Alan | Açıklama |
|---|---|
| **Sıra** | Küçük sayı önce gelir. Eşitse ada göre. Varsayılan 0. |

### Arama motoru

| Alan | Açıklama |
|---|---|
| **Meta başlık** | En çok 255 karakter. Vitrin eklentisinde kategori sayfasının başlığı. |
| **Meta açıklama** | En çok 500 karakter. |

Yeni kategori **aktif** olarak oluşur. Durum listedeki **Aktif** anahtarıyla değiştirilir.

## Kaç seviye?

Kategoriler iç içe kurulur: ana kategori › alt kategori. Ekran her satırda **Alt kategori
ekle** sunduğu için daha derin seviyeler de açılabilir. Ürün formunda ve süzgeçlerde
kategoriler tam yoluyla görünür (ör. *Temizlik › Deterjanlar › Sıvı*). Pratikte iki seviye
(ana › alt) yeterli ve en okunaklı yapıdır.

Excel aktarımında kategori `Üst > Alt` biçiminde yazılır. Olmayan kategoriler otomatik
oluşturulur. Bkz. [Excel](/satis/excel#sutunlar).

## Kurallar

- Bir kategori kendisinin ya da kendi alt kategorisinin altına taşınamaz.
- **Silme:** Alt kategorisi veya ürünü olan kategori silinemez. Önce alt kategorileri taşıyın
  ya da silin, ürünleri başka kategoriye alın. Silme düğmesi düzenleme panelinin altındadır ve
  onay sorar.
- Kategoriyi pasifleştirmek ürünleri silmez.

## Nasıl yapılır?

### Alt kategori eklemek

1. Ana kategorinin satırında **İşlemler › Alt kategori ekle** deyin.
2. **Ad**'ı yazın, gerekiyorsa görsel ve sıra girin.
3. **Kaydet** deyin.

### Kategoriyi başka bir ana kategorinin altına taşımak

1. Kategoriyi **Düzenle** ile açın.
2. **Üst kategori**'den yeni üst kategoriyi seçin (ana kategori yapmak için boş bırakın).
3. **Kaydet** deyin. Alt kategorileri de onunla birlikte taşınır.

### Ürünü olan bir kategoriyi kaldırmak

1. **Mağaza › Katalog › Ürünler**'de **Kategori** süzgeciyle o kategorideki ürünleri bulun.
2. Ürünlerin kategorisini değiştirin (çok sayıda ürün için Excel'de yalnız *Stok Kodu* ve
   *Kategori* sütunlarıyla aktarım yapabilirsiniz).
3. Kategori boşalınca silin.
