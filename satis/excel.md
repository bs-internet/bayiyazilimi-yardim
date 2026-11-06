# Excel ile ürün aktarma

Çok sayıda ürünü tek seferde eklemek ya da güncellemek (ör. toplu fiyat değişikliği) için
**Mağaza › Katalog › İçe / Dışa Aktar** ekranını kullanın.

## Şablon

Tek bir dosya biçimi vardır: Türkçe başlıklı ürün şablonu.

- **Boş şablonu indir** — yeni ürünler için.
- **Dışa aktar** — mevcut ürünleriniz dolu şablon olarak iner; düzenleyip geri yükleyebilirsiniz.

Her iki dosyanın ikinci sayfası (**Açıklamalar**) her sütunun ne anlama geldiğini ve örnek
değerini gösterir. "Stok Kodu" sütunu olmayan dosya kabul edilmez.

## Sütunlar

**Stok Kodu\*** ve **Ürün Adı\*** zorunludur. Diğerleri isteğe bağlıdır:

Marka · Kategori (`Üst > Alt` biçiminde) · Model No · Barkod · Fiyat (KDV hariç) · İndirimsiz
Fiyat · Para Birimi (TRY / USD / EUR …) · KDV (%) · Satış Biçimi (Sepet / Teklif) · Durum (Aktif /
Pasif) · Yeni Ürün · Ücretsiz Kargo (Evet / Hayır) · Birim · Min. / Maks. Sipariş · Teslim Süresi
(Gün) · Kritik Stok · Desi · Öne Çıkan 1–3 · Uyarı Notu · Açıklama (HTML) · URL · SEO Başlık ·
SEO Açıklama · Arama Kelimeleri · Görsel 1–5 (tam adres) · `Stok: {depo kodu}` (her depo için).

Başlıklarda büyük / küçük harf, `*` işareti ve parantez içi önemsizdir; sütun sırası da önemli
değildir.

## Nasıl çalışır?

- Ürünler **Stok Kodu** ile eşleşir. Sistemde olmayan kod **yeni ürün** olur.
- **Kısmi güncelleme:** dosyada olmayan sütunlara dokunulmaz. Örneğin yalnız "Stok Kodu" ve
  "Fiyat" sütunlarıyla toplu fiyat güncelleyebilirsiniz.
- Boş hücre metin ve Evet / Hayır alanlarını temizler. Ürün Adı, Fiyat, Para Birimi, KDV, Satış
  Biçimi, Durum ve Birim boşsa değişmez. Boş stok hücresi stoğa dokunmaz.
- Olmayan marka, kategori ve birim otomatik oluşturulur. Para birimi ve depo ise sistemde
  tanımlı olmalıdır.
- Yeni üründe varsayılanlar: para birimi TRY, varsayılan KDV oranı, durum Aktif, birim Adet.
  Fiyatı boş ya da 0 olan ürün **Teklif** satış biçimiyle açılır.

## Stok sütunları

`Stok: DEPO` gibi başlığı bir depo koduyla biten sütunlar o deponun stoğuna yazılır.
Bilinmeyen depo sütunları uyarıyla atlanır. Lot / seri takipli ürünlerin stoğu Excel ile
değişmez; bu ürünlere [mal kabul](/stok/mal-kabul) ile giriş yapın.

## Hatalar

Hatalı değer içeren satır yazılmaz; sonuç ekranında `Satır N (kod): …` biçiminde listelenir.
Diğer satırlar aktarılır.

## Görseller

**Görsel bağlantılarını indir** seçilirse Görsel 1–5 sütunlarındaki adreslerden görseller
indirilir. Görseller yalnız **görseli olmayan** ürünlere eklenir; güncellemede ürünün adresi
(URL) korunur.
