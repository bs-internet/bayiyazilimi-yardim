# Sayım

Tek bir ürünün miktarını düzeltmek için Stok Durumu'ndaki
[hızlı sayım](/stok/stok-islemleri#hizli-sayim) yeterlidir. Bir depoyu ya da rafı baştan sona
saymak için **sayım oturumu** kullanın: ürünleri barkodla okutursunuz, sistem sayılanı sistemdeki
miktarla karşılaştırır, onaylayınca farklar tek seferde stoğa işlenir.

## Sayım listesi

**Mağaza › Stok › Sayım** — en yeni oturum üstte, sayfa başına 50 kayıt.

| Sütun | Açıklama |
|---|---|
| Sayım | Sayım numarası (oturumu açar) ve başlama tarihi-saati |
| Depo / Kapsam | Depo ve kapsam: **Tüm depo** ya da lokasyon kodu |
| Durum | **Sayılıyor**, **Onaylandı** ya da **İptal Edildi** |
| Satır / Düzeltme | Sayılan satır sayısı / onayda yazılan düzeltme hareketi sayısı |
| Kullanıcı | Başlatan; onaylanmış sayımlarda ayrıca "Kapatan: …" |

**Süzgeçler:** Durum ("Tüm durumlar"), Depo ("Tüm depolar"), **Temizle**.

### Durumlar

| Durum | Anlamı |
|---|---|
| **Sayılıyor** | Oturum açık; okutma ve düzeltme yapılabilir, stok henüz değişmedi |
| **Onaylandı** | Farklar stoğa işlendi, oturum kapandı |
| **İptal Edildi** | Oturum kapandı, stoğa hiçbir şey işlenmedi |

Kapanmış (onaylanmış ya da iptal edilmiş) sayım değiştirilemez; yalnız görüntülenir.

## Sayım başlatma {#baslatma}

**Sayım başlat** düğmesi bir pencere açar:

| Alan | Açıklama |
|---|---|
| Depo | Zorunlu; yalnız aktif depolar. Varsayılan depo seçili gelir |
| Kapsam | İsteğe bağlı; seçilen deponun lokasyonları. Boş bırakılırsa (**Tüm depo**) bütün depo sayılır |
| Not | İsteğe bağlı, en fazla 500 karakter |

**Başlat**'a basınca sayım ekranı açılır.

**Örtüşme kuralı:** aynı depoda kapsamı örtüşen iki açık sayım olamaz.

- Depoda açık bir sayım varken **tüm depo** sayımı başlatılamaz.
- Tüm depo sayılırken o depoda tek lokasyon sayımı da başlatılamaz.
- Aynı lokasyon için iki açık sayım olamaz; **farklı raflar aynı anda** sayılabilir.

Hata mesajında engelleyen sayımın numarası yazar; önce onu onaylayın ya da iptal edin.

## Numaralandırma

Her sayım `SY` + **yymmdd** + günün **4 haneli sıra numarası** biçiminde numara alır. Örnek:
7 Kasım 2026'nın ilk sayımı `SY2611070001`.

## Sayım ekranı {#sayim-ekrani}

Başlıkta **Sayım SY…**, durum etiketi, depo (kodu ile) ve kapsam yazar. Sağ üstte **Sayımlar**
(listeye dönüş); açık sayımda ayrıca **İptal et** ve **Onayla** düğmeleri vardır.

**Özet kutuları:** Sayılan satır, Sayılan adet, Fazla (yeşil), Eksik (kırmızı) ve açık sayımda
**Başlatan**, kapanmışta **Kapatan** (tarih-saatle). Varsa sayım notu altında yazar.

### Okut bölümü {#okut}

Yalnız açık sayımda görünür.

| Alan | Açıklama |
|---|---|
| Lokasyon | Sayılan ürünün yazılacağı lokasyon. Toplama sırasındaki ilk lokasyon seçili gelir. Tek lokasyonluk sayımda o lokasyon sabittir |
| Adet | Her okutmada eklenecek miktar; varsayılan 1. Her kayıttan sonra 1'e döner |
| Barkod / SKU | Barkodu okutun ya da SKU / ürün adı yazıp Enter'a (ya da **Ekle**'ye) basın |

**Okutma davranışı:**

1. Yazılan kod **tam olarak** bir ürünün barkoduna ya da SKU'suna eşitse o ürün seçilir.
2. Değilse ad / SKU / barkodda arama yapılır (en fazla 10 sonuç). Tek sonuç çıkarsa o ürün
   seçilir; birden çok çıkarsa liste gösterilir ve tıklayarak seçersiniz.
3. Hiç eşleşme yoksa **"… ile eşleşen ürün yok."** yazar ve kutu temizlenir.
4. Takipsiz ürün seçildiyse **Adet** kadar hemen sayılır; ekranda "Ürün: N sayıldı." mesajı
   çıkar ve imleç yeniden kutuya döner.
5. **Aynı ürün aynı lokasyonda yeniden okutulursa sayılan miktar artar** (üzerine eklenir).

**Lot / seri takipli ürünlerde** okutma sonrası küçük bir form açılır:

| Alan | Açıklama |
|---|---|
| Lot no / Seri no | Zorunlu, en fazla 64 karakter. Bu depoda stokta olan lotlar SKT'leriyle öneri olarak çıkar; listede olmayan yeni bir lot da yazılabilir |
| SKT (yeni lot için) | Yalnız SKT takipli üründe. Yeni lot açarken son kullanma tarihini girin; var olan lotun SKT'si değişmez |

**Say** ile kaydedilir, **Vazgeç** ile iptal edilir. Lot takipli üründe **Adet** kadar sayılır;
seri takipli üründe her seri numarası **1** adettir ve aynı seri numarası ikinci kez okutulursa
"seri numarası zaten sayıldı" hatası verir.

Okutulan lokasyon sayım kapsamının dışındaysa kaydedilmez ("Bu sayım yalnız seçilen lokasyonu
kapsıyor").

### Sayılanlar tablosu {#sayilanlar}

Son güncellenen satır üstte, sayfa başına 50 satır. Her satır **ürün × lokasyon × lot**'tur.

| Sütun | Açıklama |
|---|---|
| Ürün | Ürün adı ve SKU |
| Lokasyon | Sayıldığı lokasyon |
| Lot / Seri | Takip açıksa; lot kodu ve SKT |
| Beklenen | Satırın **son güncellendiği andaki** sistem miktarı |
| Sayılan | Sayılan miktar. Açık sayımda kutudan düzeltilebilir |
| Fark | `Sayılan − Beklenen`; fazla yeşil `+`, eksik kırmızı `−` |

- **Sayılanı düzeltmek:** kutudaki sayıyı değiştirip Enter'a basın ya da kutudan çıkın; kayıt
  hemen yapılır. 0 ile 1.000.000 arasında olmalıdır; seri numaralı satırda en fazla 1. Geçersiz
  değer eski haline döner.
- **Satır silmek:** çöp kutusu simgesi; "… sayımdan çıkarılır." onayı ister.
- Okutma ya da düzeltme her yapıldığında **Beklenen** o anki sistem miktarıyla yenilenir.

### Sayılmayanlar tablosu {#sayilmayanlar}

Açık sayımda, kapsamda sistemde stoğu görünüp **henüz hiç sayılmamış** satırlar listelenir:
Ürün, Lokasyon, Lot / Seri, Sistem (miktar). Liste uzunsa ilk 50 satır gösterilir; başlıktaki
sayı tamamını belirtir. Bu tablo, sayımın eksik kalan raflarını bulmak için de kullanılır.

## Onay {#onay}

**Onayla** düğmesi **Sayımı onayla** penceresini açar. Pencerede: Sayılan satır, Farklı satır,
Fazla, Eksik.

**Onayla ve stoğa işle**'ye basınca:

- Her satırdaki **fark** (`sayılan − beklenen`) o lokasyon ve lota **Sayım Düzeltme** hareketi
  olarak yazılır (not: "Sayım SY…", referans bu sayım).
- Farkı sıfır olan satırlarda hareket yazılmaz.
- Sayım **Onaylandı** olur ve kapanır. Bu işlem geri alınamaz.

Onay düğmesi, hiç sayılan satır ve sayılmayan satır yoksa kapalıdır.

::: tip Sayım sırasında satış devam edebilir
Onayda sistem miktarı sayılanla değiştirilmez; yalnız `sayılan − beklenen` kadar düzeltilir.
Böylece satır sayıldıktan sonra, onaydan önce yapılan satışlar geri alınmaz.

**Örnek:** Saat 10:00'da `A-03`'te X ürününü saydınız: beklenen 10, sayılan 8 (fark −2). 11:00'de
bir sipariş `A-03`'ten 1 adet düştü; sistem 9. 12:00'de onayladınız → 2 adet düşülür, sistem 7
olur. Raftaki gerçek miktar da 8 − 1 = 7'dir.

Bir satırı satıştan **sonra** elle değiştirirseniz beklenen yeniden okunur; bu durumda o rafı
yeniden sayıp toplam sayılanı girin.
:::

Lot takipli satırlarda, sayımdan sonra o lottan çıkış olduysa lot eksiye düşürülmez: düzeltme
en fazla lotta kalan miktar kadar yapılır.

### Sayılmayanları sıfırla {#sayilmayanlari-sifirla}

Kapsamda sayılmamış satır varsa onay penceresinde **Sayılmayanları sıfırla** kutusu çıkar:
"Kapsamda stoğu görünüp sayılmayan N satır (M adet) 0'a çekilir."

- İşaretlerseniz bu satırlar da **Sayım Düzeltme** ile sıfırlanır (not: "Sayım SY… (sayılmadı)").
- Onaylanmış sayımın ekranında "Onayda sayılmayan stok satırları sıfırlandı." notu kalır.
- **Yalnız tam sayımda işaretleyin.** Rafın yarısını saydıysanız sayılmayan yarısı sıfırlanır.

**Örnek.** `A-01` rafı için sayım açtınız. Sistemde `A-01`'de:

| Ürün | Sistem | Sayılan |
|---|---|---|
| X | 10 | 8 |
| Y | 4 | 4 |
| Z | 2 | (okutulmadı) |

- **İşaretsiz onay:** X'ten 2 düşülür; Y değişmez; Z 2 olarak kalır.
- **Sayılmayanları sıfırla işaretli:** X'ten 2 düşülür; Y değişmez; Z'den 2 düşülür (rafta yok
  kabul edilir).

Rafta Z gerçekten yoksa işaretleyin; Z'yi saymayı unuttuysanız işaretlemeden önce okutun.

## İptal

Açık sayımda **İptal et** → "Sayım iptal edilsin mi? Sayılan satırlar stoğa işlenmez; sayım
kapanır." Onaylayınca sayım **İptal Edildi** olur; stoğa dokunulmaz. İptal edilen sayım yeniden
açılamaz; gerekirse yeni sayım başlatın.

## Nasıl yapılır? — Bir rafı saymak

1. **Mağaza › Stok › Sayım › Sayım başlat**.
2. Depoyu seçin, **Kapsam**'ta rafı (ör. `A-03`) seçin, **Başlat**.
3. Raftaki her ürünü okutun. Aynı üründen birden çok varsa ya her birini okutun ya da **Adet**'e
   sayıyı yazıp bir kez okutun.
4. Lot takipli üründe açılan kutuya lot numarasını yazın (önerilerden seçebilirsiniz), **Say**.
5. **Sayılanlar** tablosunda farkları kontrol edin; yanlış sayılanı kutudan düzeltin.
6. **Sayılmayanlar** tablosuna bakın: rafta olup okutmayı unuttuğunuz ürün varsa okutun.
7. **Onayla** → gerekiyorsa **Sayılmayanları sıfırla** → **Onayla ve stoğa işle**.

Yıl sonu gibi tüm depo sayımları için bkz.
[Depo iş akışları › Yıl sonu sayımı](/stok/is-akislari#yil-sonu-sayimi).
