# Birimler

**Ayarlar › Tanımlamalar › Birimler** ürünlerin satış birimlerini (Adet, Kutu, Koli, Litre …)
tanımlar. Ürün formundaki **Birim** alanı bu listedeki **aktif** birimlerden seçilir.

## Liste

Başlıkta toplam ve aktif birim sayısı yazar.

| Sütun | İçerik |
|---|---|
| **Sıra** | Sıralama sayısı |
| **Birim** | Birim adı |
| **Ürün sayısı** | Bu birimi kullanan ürün sayısı |
| **Aktif** | Anahtar: birimi aktif / pasif yapar |

## Birim formu

**Birim ekle** (ya da satırdaki düzenle) küçük bir pencere açar.

| Alan | Açıklama |
|---|---|
| **Birim adı** * | En çok 32 karakter, tekil (aynı ad iki kez eklenemez). Örn. Adet, Kutu, Litre. |
| **Sıra** | Küçük sayı önce gelir. |

Yeni birim aktif olarak eklenir.

## Kurallar

- **Sıralama önemlidir:** yeni üründe **Birim** alanına sıradaki **ilk aktif birim** gelir.
  En çok kullandığınız birimi en üste alın.
- **Adı değiştirmek:** birimin adını değiştirirseniz bu birimi kullanan ürünler de yeni adla
  güncellenir.
- **Pasifleştirmek:** pasif birim yeni ürünlerde seçilemez; onu zaten kullanan ürünler birimini
  korur ve o ürünün formunda seçili görünmeye devam eder.
- **Silmek:** ürünlerde kullanılan birim silinemez ("… üründe kullanıldığı için silinemez;
  pasifleştirebilirsiniz"). Kullanılmayan birim onayla silinir; bu işlem geri alınamaz.
- **Excel aktarımı:** **Birim** sütunundaki ad listede yoksa birim otomatik eklenir (büyük /
  küçük harf farkı aynı birim sayılır). Boş hücre yeni üründe "Adet" demektir. Bkz.
  [Excel](/satis/excel#sutunlar).

Birim, sepet ve sipariş ekranlarında adetin yanında gösterilir; tekliflerde her kalemin birimi
ayrıca değiştirilebilir.
