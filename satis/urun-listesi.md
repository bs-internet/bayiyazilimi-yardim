# Ürün listesi

**Mağaza › Katalog › Ürünler** tüm ürünleri listeler. Başlıkta toplam ürün sayısı yazar.
Liste en son güncellenen ürün üstte olacak şekilde sıralanır, sayfa başına 50 ürün gösterilir.

## Üst düğmeler

| Düğme | Ne yapar |
|---|---|
| **Dışa aktar** | O an uygulanan arama ve süzgeçlere uyan ürünleri Excel olarak indirir. Dosya içe aktarılabilir biçimdedir. Bkz. [Excel](/satis/excel) |
| **İçe aktar** | **İçe / Dışa Aktar** ekranını açar |
| **Yeni ürün** | Boş ürün formunu açar. Bkz. [Ürünler](/satis/urunler) |

## Arama ve süzgeçler

| Süzgeç | Açıklama |
|---|---|
| Arama kutusu | Ürün adı, stok kodu, model no, barkod ve arama kelimelerinde arar. Birden çok kelime yazarsanız her kelime ayrı ayrı aranır (hepsi eşleşmeli). **Ara** ile uygulanır, **Temizle** tüm süzgeçleri kaldırır. |
| **Kategori** | Seçilen kategorideki ürünler (*Tüm kategoriler*) |
| **Marka** | *Tüm markalar* ya da bir marka |
| **Durum** | *Aktif* / *Pasif* |
| **Satış biçimi** | *Sepet (doğrudan satış)* / *Yalnızca teklif* |
| **Stok** | *Stokta var* (stok 0'dan büyük) / *Stokta yok* (0 ya da eksi) |
| **Kimler görsün** | Yalnız Vitrin modülü kuruluysa: *Vitrin* / *Bayi* |

Kategori süzgeci yalnız o kategoriye doğrudan bağlı ürünleri getirir; alt kategorilerdeki
ürünler için alt kategoriyi seçin.

## Sütunlar

| Sütun | İçerik |
|---|---|
| **Ürün** | Kapak görseli, ürün adı (tıklayınca düzenleme açılır), stok kodu ve varsa model no |
| **Kategori** | Kategori adı, altında marka |
| **Stok** | *Stokta N*, *Tükendi* ya da stok takibi kapalıysa *Takipsiz* |
| **Fiyat** | Ürünün kendi para biriminde KDV hariç fiyat, altında "+ KDV %…" |
| **Satış** | *Sepet* ya da *Teklif*; vitrin kuruluysa yalnız bayilere açık ürünlerde *Bayi* rozeti |
| **Aktif** | Anahtar: tıklayınca ürün aktif / pasif olur |
| **İşlem** | **Düzenle**; vitrin kuruluysa ve ürün herkese açıksa **Sitede gör** |

## Nasıl yapılır?

### Bir ürünü hızla satıştan kaldırmak

1. Ürünü arayın.
2. **Aktif** sütunundaki anahtarı kapatın. Ürün pasif olur, müşterilere görünmez.

### Bir markanın ürünlerini Excel'e almak

1. **Marka** süzgecinden markayı seçin.
2. **Dışa aktar** deyin. Yalnız o markanın ürünleri iner.

### Stoğu bitmiş ürünleri görmek

**Stok** süzgecinde *Stokta yok*'u seçin. Kritik stok uyarıları için bkz.
[Stok işlemleri](/stok/stok-islemleri).

::: info Toplu işlem
Listede çoklu seçimle toplu işlem yoktur. Çok sayıda üründe fiyat, durum, kategori gibi alanları
topluca değiştirmek için Excel aktarımını kullanın: bkz.
[Toplu fiyat güncelleme](/satis/excel#toplu-fiyat).
:::
