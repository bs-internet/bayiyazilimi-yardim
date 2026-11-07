# Markalar

**Mağaza › Katalog › Markalar** ürünlere atanan markaları yönetir. Marka; ürün listelerinde,
süzgeçlerde, kampanya koşullarında ve satış raporlarında kullanılır.

## Liste

Başlıkta toplam marka sayısı yazar; **Marka ara** kutusu ada göre süzer.

| Sütun | İçerik |
|---|---|
| **Marka** | Logo ve ad |
| **Ürün** | Markaya bağlı ürün sayısı |
| **Sıra** | Sıralama sayısı |
| **Aktif** | Anahtar: markayı aktif / pasif yapar |

Satırdaki **İşlemler › Düzenle** ya da **Yeni marka** sağdan açılan formu getirir.

## Marka formu

### Genel

| Alan | Açıklama |
|---|---|
| **Ad** * | En çok 255 karakter. |
| **URL (slug)** | Marka sayfasının adresi. Boş bırakılırsa addan üretilir; aynısı varsa sonuna sayı eklenir. |
| **Açıklama** | En çok 5000 karakter. |
| **Logo dosyası** | Görsel dosyası, en çok 4 MB. |
| **Mevcut logoyu kaldır** | Logo yüklüyse görünür; işaretleyip kaydederseniz logo silinir. |

### Vitrin

| Alan | Açıklama |
|---|---|
| **Sıra** | Küçük sayı önce gelir. Varsayılan 0. |

Yeni marka **aktif** olarak oluşur.

## Kurallar

- **Ürünü olan marka silinemez**; bunun yerine pasifleştirin. Silme düğmesi düzenleme formunun
  altındadır ve onay sorar.
- Excel aktarımında **Marka** sütununa yazılan ad sistemde yoksa marka otomatik oluşturulur
  (büyük / küçük harf farkı aynı marka sayılır). Bkz. [Excel](/satis/excel#sutunlar).
- Ürün formundaki **Marka** listesinde tüm markalar (pasifler dahil) ada göre sıralanır.

## Nasıl yapılır?

### Marka eklemek

1. **Yeni marka** deyin.
2. **Ad**'ı yazın, isterseniz logo ve açıklama ekleyin.
3. **Kaydet** deyin.

### İki markayı birleştirmek

Ekranda birleştirme işlevi yoktur. Ürünleri yeni markaya taşıyın (çok sayıda ürün için Excel'de
yalnız *Stok Kodu* ve *Marka* sütunlarıyla aktarım), ardından boşalan markayı silin.
