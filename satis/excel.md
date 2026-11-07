# Excel ile ürün aktarma

Çok sayıda ürünü tek seferde eklemek ya da güncellemek (toplu fiyat, stok, kategori, durum
değişikliği …) için **Mağaza › Katalog › İçe / Dışa Aktar** ekranını kullanın. Ekranın başlığında
sistemdeki ürün sayısı yazar.

## Şablon ve dışa aktarma

Tek bir dosya biçimi vardır: Türkçe başlıklı ürün şablonu (`.xlsx`). Boş şablon da dışa aktarılan
dosya da aynı sütunlarla iner.

| Düğme | Ne indirir |
|---|---|
| **Boş şablonu indir** | Yalnız başlık satırı olan şablon; yeni ürünler için |
| **Tüm ürünleri dışa aktar** | Tüm ürünler, dolu şablon olarak; mevcut ürünleri düzenlemek için |
| **Dışa aktar** (Ürün listesinde) | Yalnız listede o an uygulanan arama / süzgeçlere uyan ürünler. Bkz. [Ürün listesi](/satis/urun-listesi) |

Dosyanın iki sayfası vardır:

- **Ürünler** — ürün satırları. İlk satır başlıktır. İçe aktarmada **yalnız bu ilk sayfa** okunur.
- **Açıklamalar** — her sütunun anlamı, zorunlu olup olmadığı ve örnek değeri; sistemdeki depo
  kodları. İçe aktarmada okunmaz.

Zorunlu sütunların başlığında `*` vardır. Dışa aktarılan dosyada görseller tam adresleriyle,
öne çıkan özelliklerin ilk üçü ve her deponun stoğu yer alır.

## Sütunlar {#sutunlar}

**Stok Kodu\*** her zaman, **Ürün Adı\*** yeni ürünlerde zorunludur. Diğer tüm sütunlar
isteğe bağlıdır ve dosyadan tamamen çıkarılabilir.

| Sütun | Anlamı | Kabul edilen değer | Boş hücre | Örnek |
|---|---|---|---|---|
| **Stok Kodu\*** | Ürünün tekil kodu; eşleşme bununla yapılır | Metin | Satır atlanır (uyarı) | `ABC-100` |
| **Ürün Adı\*** | Ürün adı | Metin (250 karaktere kısaltılır) | Yeni üründe hata; mevcutta değişmez | `Örnek Ürün 5 L` |
| **Marka** | Marka adı; yoksa oluşturulur | Metin | Markayı kaldırır | `Örnek Marka` |
| **Kategori** | Kategorinin tam yolu, seviyeler `>` ile ayrılır; yoksa oluşturulur | `Üst > Alt` | Kategoriyi kaldırır | `Temizlik > Deterjanlar` |
| **Model No** | Üretici model numarası | Metin | Temizler | `MX-500` |
| **Barkod** | EAN / barkod | Metin | Temizler | `8690000000001` |
| **Fiyat** | KDV hariç satış fiyatı | Sayı; `149,90`, `1.249,90` ya da `1249.90` | Değişmez (yeni üründe 0) | `149,90` |
| **İndirimsiz Fiyat** | KDV hariç üstü çizili fiyat | Sayı; Fiyat'tan büyük değilse indirim kaldırılır | İndirimi kaldırır | `179,90` |
| **Para Birimi** | Fiyatın para birimi | Sistemde tanımlı kod: `TRY`, `USD`, `EUR` … (`TL` = TRY) | Değişmez (yeni üründe TRY) | `TRY` |
| **KDV (%)** | KDV oranı | `0`–`100`; yüzde biçimli hücre (`%20` / `0,2`) de olur | Değişmez (yeni üründe varsayılan oran) | `20` |
| **Satış Biçimi** | Sepet ya da teklif | `Sepet` / `Teklif` | Değişmez (yeni üründe fiyat > 0 ise Sepet, değilse Teklif) | `Sepet` |
| **Durum** | Yayın durumu | `Aktif` / `Pasif` | Değişmez (yeni üründe Aktif) | `Aktif` |
| **Yeni Ürün** | Vitrinde "Yeni ürünler" listesinde gösterilir | Evet / Hayır | Hayır yapar | `Hayır` |
| **Ücretsiz Kargo** | Bu ürün için kargo alınmaz | Evet / Hayır | Hayır yapar | `Hayır` |
| **Birim** | Satış birimi; Birimler'de yoksa eklenir | Metin (en çok 32 karakter) | Değişmez (yeni üründe Adet) | `Adet` |
| **Min. Sipariş** | En az sipariş adedi | Tam sayı, en az 1 | 1 | `1` |
| **Maks. Sipariş** | En çok sipariş adedi | Tam sayı; 0 = sınırsız | Sınırsız | |
| **Teslim Süresi (Gün)** | Kargoya veriliş süresi | Tam sayı | 0 | `2` |
| **Kritik Stok** | Ürünün kritik stok eşiği | Tam sayı | Ürünün eşiğini kaldırır (genel eşik geçerli) | `10` |
| **Desi** | Bir adedin kargo desisi | Sayı | 0 (varsayılan desi kullanılır) | `1,5` |
| **Öne Çıkan 1 / 2 / 3** | Ürün sayfasındaki kısa özellik maddeleri | Metin (250 karakter, HTML atılır) | O maddeyi siler | `Konsantre formül` |
| **Uyarı Notu** | Ürün sayfasında vurgulu kısa not | Metin (480 karaktere kısaltılır, HTML atılır) | Temizler | |
| **Açıklama** | Ürün açıklaması | Metin; HTML kullanılabilir (güvenli olmayan etiketler temizlenir) | Temizler | `<p>Ürün açıklaması…</p>` |
| **URL** | Ürün adresinin son kısmı | Metin | Addan üretilir | `ornek-urun-5-l` |
| **SEO Başlık** | Arama motoru başlığı | Metin | Temizler | |
| **SEO Açıklama** | Arama motoru açıklaması | Metin | Temizler | |
| **Arama Kelimeleri** | Aramada eşleşecek ek kelimeler | Metin (2000 karakter) | Temizler | `deterjan sıvı` |
| **Görsel 1 … Görsel 5** | Görselin tam adresi | `https://…` | Görsel eklenmez | `https://ornek.com/gorsel.jpg` |
| **Stok: {depo kodu}** | O depodaki stok adedi (her depo için bir sütun) | Tam sayı; eksi değer 0 sayılır | Stoğa dokunmaz | `25` |

**Evet / Hayır** sütunlarında `Evet`, `Hayır`, `E`, `H`, `1`, `0`, `x` (= Evet) kabul edilir.

Ek kurallar:

- **Sayılar:** Excel'in sayı hücreleri doğrudan okunur. Metin olarak yazılan sayılarda virgül
  varsa ondalık ayırıcı sayılır ve noktalar binlik kabul edilir (`1.249,90`); virgül yoksa nokta
  ondalıktır (`1249.90`). Bu yüzden virgülsüz `1.249` bin değil "1,249" okunur.
- **URL** yalnız **yeni** üründe kullanılır; mevcut ürünün adresi değişmez.
- **Öne Çıkan** sütunlarında yalnız dosyada olan sıralar değişir; formdan girilmiş 4. ve sonraki
  maddeler korunur.
- **Para Birimi** ve **depolar** sistemde tanımlı olmalıdır; marka, kategori ve birim ise yoksa
  otomatik oluşturulur. Para birimleri için bkz. [Para birimleri](/yonetim/para-birimleri),
  depo kodları için **Mağaza › Stok › Depolar**.
- **Kimler görsün?** (Vitrin) ve stok takibi / eksi stok / izlenebilirlik ayarları Excel'de yoktur.
  Excel'le açılan yeni ürünler stok takipli, eksi stoğa kapalı ve "Vitrin" görünürlüğündedir.

### Başlık kuralları

- Başlıklarda büyük / küçük harf, `*` işareti ve parantez içi önemsizdir: `KDV (%)`, `kdv`,
  `KDV*` aynı sütundur. **Sütun sırası önemli değildir.**
- Tanınmayan sütunlar atlanır ve sonuçta uyarı olarak listelenir.
- `Stok: ` ile başlayan sütunlar depo stoğudur; kodu bilinmeyen depo sütunu uyarıyla atlanır.
- "Stok Kodu" sütunu olmayan dosya hiç işlenmez.

## İçe aktarma seçenekleri

Dosyayı kutuya bırakın ya da **Dosya yükle** ile seçin: yalnız `.xlsx`, en çok **50 MB**.

| Seçenek | Varsayılan | Açıklama |
|---|---|---|
| **Mevcut ürünleri güncelle** | Açık | Kapalıysa yalnız sistemde olmayan stok kodları eklenir; mevcut ürünlerin satırları **Atlanan** sayılır. |
| **Depo stoklarını dosyadaki değerlere eşitle** | Açık | Mevcut ürünlerde `Stok:` sütunlarındaki değerler depo stoğu olarak yazılır; farklar stok hareketi (*İçe Aktarım*) olarak kaydedilir. Kapalıysa mevcut ürünlerin stoğuna dokunulmaz. Yeni ürünlerin stoğu her durumda yazılır. |
| **Görsel bağlantılarını indir** | Kapalı | Görseli **olmayan** ürünlere Görsel 1–5 sütunlarındaki adreslerden görsel eklenir. Çok sayıda görselde aktarım uzar. |

**İçe aktar** deyin. Aktarım bitene kadar "Aktarılıyor…" yazar; sayfayı kapatmayın.

## Nasıl çalışır?

- Ürünler **Stok Kodu** ile eşleşir: sistemde olan kod güncellenir, olmayan kod **yeni ürün** olur.
- **Kısmi güncelleme:** dosyada olmayan sütunlara dokunulmaz. Örneğin yalnız *Stok Kodu* ve
  *Fiyat* sütunlarıyla toplu fiyat güncelleyebilirsiniz.
- **Boş hücre** metin ve Evet / Hayır alanlarını temizler; *Ürün Adı, Fiyat, Para Birimi, KDV,
  Satış Biçimi, Durum ve Birim* boşsa değişmez. Boş stok hücresi stoğa dokunmaz.
- Her satır ayrı işlenir: **hatalı değer içeren satır hiç yazılmaz**, diğer satırlar aktarılır.
- Stok sütunu depo stoğunu dosyadaki sayıya **eşitler** (eklemez). Lot / seri takipli ürünlerin
  stoğu Excel ile değişmez; bu ürünlere [Mal kabul](/stok/mal-kabul) ile giriş yapın.
- Silinmiş bir ürünün stok kodu dosyada varsa o silinmiş ürün güncellenir; ürün geri gelmez ve
  yeni ürün de açılmaz.

## Sonuç ekranı

Aktarım bitince ekranda **Son içe aktarma sonucu** kartı çıkar:

| Kutu | Anlamı |
|---|---|
| **Yeni** | Eklenen ürün sayısı |
| **Güncellenen** | Güncellenen ürün sayısı |
| **Atlanan** | Stok kodu boş satırlar ve ("Mevcut ürünleri güncelle" kapalıyken) mevcut ürünler |
| **… uyarı** / **Sorunsuz** | Hata ve uyarıların listesi; hiç yoksa "Sorunsuz" |

Ekranın üstünde ayrıca özet bildirim çıkar (uyarı varsa sarı).

### Hata ve uyarı örnekleri

| Mesaj | Ne yapmalı |
|---|---|
| `Satır 5 (ABC-100): Fiyat "12a" sayı değil.` | Fiyatı sayı olarak yazın |
| `Satır 7 (ABC-102): Para Birimi "GBP" tanımlı değil (Tanımlamalar › Para Birimleri).` | Para birimini sisteme ekleyin ya da kodu düzeltin |
| `Satır 9 (ABC-104): Satış Biçimi "Hemen" geçersiz (Sepet ya da Teklif).` | `Sepet` ya da `Teklif` yazın |
| `Satır 11 (ABC-106): Durum "Açık" geçersiz (Aktif / Pasif).` | `Aktif` ya da `Pasif` yazın |
| `Satır 12 (ABC-107): Ücretsiz Kargo "belki" geçersiz (Evet / Hayır).` | `Evet` ya da `Hayır` yazın |
| `Satır 14 (ABC-109): KDV "150" geçersiz (0–100).` | 0–100 arası oran yazın |
| `Satır 15 (YENI-1): Ürün Adı boş.` | Yeni ürüne ad yazın |
| `Satır 20: Stok Kodu boş, satır atlandı.` | Kodu doldurun ya da satırı silin |
| `"Stok: DEPO2" sütunu atlandı: DEPO2 kodlu depo yok (Stok › Depolar).` | Depo kodunu düzeltin |
| `Tanınmayan sütunlar atlandı: Renk, Beden.` | Bilgi amaçlı; bu sütunlar okunmaz |
| `Dosya biçimi tanınmadı: "Stok Kodu" sütunu bulunamadı. …` | Ekrandaki şablonu kullanın |

"Satır" numarası Excel'deki satır numarasıdır (başlık 1. satırdır).

## Görseller {#gorseller}

- Görseller yalnız **hiç görseli olmayan** ürünlere eklenir; görseli olan ürünün görselleri
  Excel'le değişmez. Görselleri değiştirmek için ürün formunu kullanın.
- Panelden aktarımda görseller yalnız **Görsel bağlantılarını indir** seçiliyse, Görsel 1–5
  sütunlarındaki `http://` / `https://` adreslerinden indirilir. Sıra, sütun sırasıdır
  (Görsel 1 kapak olur). Açılamayan adres sessizce atlanır.
- Panelin sonuç ekranında indirilen görsel sayısı gösterilmez; komut satırı aktarımı gösterir
  (aşağıya bakın).

## Toplu fiyat güncelleme {#toplu-fiyat}

1. **Mağaza › Katalog › Ürünler**'de güncelleyeceğiniz ürünleri süzün (ör. bir marka) ve
   **Dışa aktar** deyin. Tüm ürünler için **İçe / Dışa Aktar › Tüm ürünleri dışa aktar**.
2. Dosyayı Excel'de açın. **Stok Kodu** ve **Fiyat** dışındaki sütunları silin (indirim de
   değişecekse **İndirimsiz Fiyat**'ı, para birimi değişecekse **Para Birimi**'ni bırakın).
3. Fiyatları değiştirin (ör. formülle %10 artırıp sonucu "değer olarak" yapıştırın).
4. Dosyayı `.xlsx` olarak kaydedin.
5. **İçe / Dışa Aktar** ekranında dosyayı seçin, **Mevcut ürünleri güncelle** açık olsun.
6. **İçe aktar** deyin ve sonuçta **Güncellenen** sayısını ve uyarıları kontrol edin.

::: warning Stok sütunlarını silmeyi unutmayın
Dışa aktarılan dosyada `Stok: …` sütunları da vardır. Bunları silmeden geri yüklerseniz ve
**Depo stoklarını dosyadaki değerlere eşitle** açıksa, dışa aktarmadan sonra değişen stoklar
(gelen siparişler, mal kabuller) **dosyadaki eski değerlere geri döner**. Yalnız fiyat
güncellerken stok sütunlarını silin ya da bu seçeneği kapatın.
:::

## Büyük dosyalar: komut satırı

Panelden aktarma en çok 50 MB'lık dosya ve sunucunun izin verdiği süre (10 dakika) ile
sınırlıdır. On binlerce satırlık ya da görsel indirilecek dosyaları sunucuda komutla aktarın
(sunucu yöneticiniz çalıştırır):

```bash
php artisan shop:import-products /yol/urunler.xlsx
```

| Seçenek | Anlamı |
|---|---|
| `--download-images` | Görseli olmayan ürünlerin görsellerini Görsel 1–5 bağlantılarından indirir |
| `--images=/yol/klasor` | Görselleri sunucudaki klasörden alır: her ürün için `klasor/{Stok Kodu}/` alt klasöründeki jpg, png, webp, gif dosyaları (dosya adı sırasıyla). Klasörde görsel bulunan ürünlerde bağlantılar kullanılmaz |
| `--no-update` | Var olan ürünleri güncellemez (yalnız yeni ürün ekler) |
| `--no-stock` | Var olan ürünlerin stoklarını güncellemez |
| `--limit=10` | Yalnız ilk 10 satırı aktarır (deneme için) |

Komut sonunda yeni / güncellenen / atlanan / görsel / hata sayılarını tablo olarak ve ilk 20
hatayı gösterir. Kurallar panelden aktarmayla aynıdır.
