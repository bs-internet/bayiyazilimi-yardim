# Stok işlemleri

Elle yapılan stok işlemleri (giriş, çıkış, hızlı sayım, transfer, lokasyon değişimi)
**Mağaza › Stok › Stok Durumu** ekranından yapılır. Her değişiklik **Stok Hareketleri**'ne kim,
ne zaman, nerede, ne kadar bilgisiyle yazılır.

Tedarikçiden gelen mal için [Mal kabul](/stok/mal-kabul), çok ürünlü sayım için
[Sayım](/stok/sayim) ekranını kullanın.

## Stok Durumu ekranı {#stok-durumu}

**Mağaza › Stok › Stok Durumu** — tüm ürünler ada göre sıralı, sayfa başına 50 ürün. Başlıkta
ürün ve depo sayısı, sağ üstte **Stok hareketleri** düğmesi vardır.

### Sütunlar

| Sütun | Açıklama |
|---|---|
| Ürün | Görsel, ürün adı (ürün formunu açar), SKU, kategori. Lot / seri takipli ürünlerde "Lot takipli" ya da "Seri no takipli"; SKT'si geçmiş ya da yaklaşan lotu olan üründe **"SKT'si geçmiş lot var"** / **"SKT'si yaklaşan lot var"** uyarısı |
| Depo kodları | Her depo için bir sütun (başlıkta depo kodu, üzerine gelince adı). Satışa kapalı depolarda kodun yanında **\*** vardır. Hücrenin üzerine gelince o depodaki lokasyon ve lot dağılımı görünür. Eksi miktar kırmızıdır |
| Toplam | Ürünün tüm depolardaki toplamı (satışa kapalı depolar dahil) |
| Satılabilir | Sitede görünen stok: aktif ve satılabilir depoların toplamı, SKT'si geçmiş lotlar hariç. Kritik stoktaysa turuncu yazılır (üzerine gelince eşik görünür). Ürünün stok takibi kapalıysa **Takipsiz** yazar |
| İşlemler (⋯) | **Stok işlemi**, **Hareketler** (ürünün tüm hareketleri), **Ürünü düzenle** |

### Süzgeçler

| Süzgeç | Açıklama |
|---|---|
| Arama | Ürün adı, SKU veya barkod. **Ara** ile uygulanır |
| Kategori | Tek kategori |
| Depo | Yalnız o depoda stoğu sıfırdan farklı olan ürünler |
| Stok durumu | **Stokta var** (satılabilir > 0), **Stokta yok** (satılabilir ≤ 0), **Kritik stokta**, **Eksi bakiyeli** (herhangi bir depoda eksi), **SKT'si yaklaşan**, **SKT'si geçmiş (stokta)**. Son ikisi yalnız lot / seri no takibi açıkken çıkar |

**Temizle** tüm süzgeçleri kaldırır.

## Stok işlemi paneli {#stok-islemi}

Bir ürünün satırında **⋯ › Stok işlemi** sağdan bir panel açar. Başlıkta ürünün SKU'su ve adı
yazar. Aynı panel [depo detayında](/stok/#depo-detayi) da açılır.

Önce **İşlem türü** seçilir; formun alanları işleme göre değişir:

| İşlem türü | Ne yapar |
|---|---|
| **Stok girişi (+)** | Depoya stok ekler |
| **Stok çıkışı (−)** | Depodan stok düşer (fire, numune, hasar, düzeltme …) |
| **Sayım (miktarı eşitle)** | Depodaki (ya da seçilen lokasyondaki) miktarı yazdığınız değere eşitler |
| **Lokasyon değiştir (depo içi)** | Aynı depo içinde raf değiştirir; depo toplamı değişmez |
| **Depolar arası transfer** | Bir depodan başka depoya aktarır |

Depo listelerinde her deponun yanında ürünün o depodaki mevcut miktarı, lokasyon listelerinde
o lokasyondaki miktar **(mevcut: N)** olarak yazar.

**Ortak sınırlar:** miktar en az 1, en fazla 1.000.000 (sayımda en az 0); **Not** en fazla 255
karakter; lot / seri no en fazla 64 karakter.

### Stok girişi {#giris}

| Alan | Açıklama |
|---|---|
| Depo | Zorunlu. Stok ekranından açıldığında listedeki ilk depo seçili gelir |
| Lot no / Seri numarası | Yalnız lot / seri takipli üründe; zorunlu. Büyük harfe çevrilir. Var olan bir lot numarası yazılırsa stok o lota eklenir |
| Son kullanma tarihi | Yalnız lot / seri takipli üründe. Üründe SKT takibi açıksa zorunlu, değilse isteğe bağlı. Var olan lotun kayıtlı SKT'si değişmez; SKT'siz kayıtlı bir lota yazılırsa tamamlanır |
| Lokasyon | İsteğe bağlı. Boşsa ürünün bu depodaki ana lokasyonuna (en çok bulunduğu lokasyon), yoksa Atanmamış'a girer |
| Miktar | Zorunlu. Seri numaralı üründe tek seferde **1 adet**; çoklu giriş için [Mal kabul](/stok/mal-kabul) |
| Not | İsteğe bağlı (ör. irsaliye no) |

Seri numarası tüm depolarda en fazla 1 adet olabilir; stokta olan bir seri numarasını yeniden
girmek "seri numarası zaten stokta" hatası verir.

### Stok çıkışı {#cikis}

| Alan | Açıklama |
|---|---|
| Depo | Zorunlu |
| Lot / Seri no | Yalnız lot / seri takipli üründe; isteğe bağlı. Listede depodaki lotlar SKT ve mevcut miktarla, süresi geçmişler **(süresi geçmiş)** notuyla görünür. Boşsa süresi geçmemiş, SKT'si en yakın lot önce düşülür |
| Lokasyon | İsteğe bağlı. Boşsa toplama sırasıyla stoğu olan lokasyonlardan düşer |
| Miktar | Zorunlu; o depoda (seçtiyseniz o lokasyon / lotta) bulunan miktarı aşamaz |
| Not | İsteğe bağlı (ör. "hasarlı", "numune") |

- Çıkış, eldeki miktardan fazla olamaz. Fazlasını girerseniz işlem "Yeterli stok yok: en fazla
  N adet çıkış yapılabilir." uyarısıyla durur. Sayılan miktar depoda (lokasyon ya da lot
  seçtiyseniz yalnız orada) fiilen bulunan stoktur; süresi geçmiş lotlar dahil, eksideki
  satırlar hariç. Eksi stok elle çıkışla değil, yalnız sipariş ile oluşur.
- Lot seçtiyseniz o lotta yeterli stok yoksa işlem durur.
- SKT'si geçmiş bir lotu imha etmek için lotu **açıkça seçin**; otomatik seçim süresi geçmiş
  lotu almaz. Lot seçmeden yapılan çıkışta süresi geçmemiş lotlar yetmezse yetmeyen kısım
  **Atanmamış**'ta eksiye düşebilir.

### Hızlı sayım (miktarı eşitle) {#hizli-sayim}

| Alan | Açıklama |
|---|---|
| Depo | Zorunlu |
| Lot / Seri no | Lot / seri takipli üründe **zorunlu**; listeden var olan lot seçilir (yeni lot burada açılmaz) |
| Lokasyon | İsteğe bağlı. Seçilirse yalnız o lokasyonun miktarı eşitlenir; boşsa depo toplamı |
| Sayılan miktar | Zorunlu, 0–1.000.000 |
| Not | İsteğe bağlı (ör. sayım tarihi) |

Sistem farkı hesaplar (`sayılan − mevcut`) ve fark kadar **Sayım Düzeltme** hareketi yazar.
Fark sıfırsa hiçbir şey yazılmaz.

**Örnek:** Merkez Depo'da ürünün toplamı 12. Lokasyon boş, sayılan miktar 10 → depodan 2 adet
düşülür (toplama sırasıyla). Lokasyon `A-03` seçili, `A-03`'te 5 var, sayılan 7 → `A-03`'e 2
adet eklenir.

### Depolar arası transfer {#transfer}

| Alan | Açıklama |
|---|---|
| Kaynak depo | Zorunlu |
| Lot / Seri no | Lot / seri takipli üründe isteğe bağlı; boşsa SKT'si en yakın lot önce |
| Kaynak lokasyon | İsteğe bağlı; yalnız ürünün stoğu olan lokasyonlar listelenir. Boşsa kaynak depodaki lokasyonlardan toplama sırasıyla düşülür |
| Hedef depo | Zorunlu, kaynak depodan farklı olmalı |
| Hedef lokasyon | İsteğe bağlı. Boşsa ürünün hedef depodaki ana lokasyonuna, yoksa Atanmamış'a girer |
| Miktar | Zorunlu |
| Not | İsteğe bağlı. Boşsa hareketlere "→ hedef depo" / "← kaynak depo" yazılır |

- Kaynak depoda yeterli stok yoksa transfer yapılmaz ("yeterli stok yok (mevcut: N)").
  Kaynak lokasyon seçtiyseniz o lokasyondaki miktar da yetmelidir.
- İki hareket yazılır: kaynak depoda **Transfer (Çıkış)**, hedef depoda **Transfer (Giriş)**.
- Lot ve seri numaraları hedef depoya **aynen taşınır**.

### Lokasyon değiştir (depo içi) {#lokasyon-degistir}

| Alan | Açıklama |
|---|---|
| Depo | Zorunlu |
| Lot / Seri no | Lot / seri takipli üründe **zorunlu**; yalnız seçilen lot taşınır |
| Kaynak lokasyon | Zorunlu; yalnız ürünün (seçili lotun) stoğu olan lokasyonlar listelenir. Hiçbiri yoksa "Bu depoda stok yok" yazar |
| Hedef lokasyon | Zorunlu, kaynaktan farklı olmalı |
| Miktar | Zorunlu; kaynak lokasyondaki miktarı aşamaz |
| Not | İsteğe bağlı. Boşsa "→ hedef" / "← kaynak" yazılır |

İki **Lokasyon Değişimi** hareketi yazılır (kaynakta −, hedefte +); depo toplamı değişmez.
Farklı depolar arasında taşımak için transfer kullanın.

### Nasıl yapılır? — Tek ürüne stok girişi

1. **Mağaza › Stok › Stok Durumu**'nda ürünü arayın (ad, SKU ya da barkod).
2. Satırda **⋯ › Stok işlemi**.
3. İşlem türü **Stok girişi (+)**, depoyu seçin.
4. Lot takipli üründe lot no (ve SKT) yazın.
5. Rafını biliyorsanız lokasyonu seçin; bilmiyorsanız boş bırakın.
6. Miktarı ve isterseniz notu yazıp **Kaydet**.

## Stok hareketleri {#stok-hareketleri}

**Mağaza › Stok › Stok Hareketleri** — stoğa yapılan tüm değişiklikler, en yeniden eskiye,
sayfa başına 50 kayıt. Hareketler değiştirilemez ve silinemez.

### Sütunlar

| Sütun | Açıklama |
|---|---|
| Tarih | Hareketin tarihi ve saati |
| Ürün | Ürün adı ve SKU. Lotlu harekette **Lot …** ve SKT; lota tıklamak **Bu lotun hareketleri**'ni açar |
| Depo | Depo ve lokasyon |
| Tür | Hareket türü (aşağıdaki tablo) |
| Miktar | Girişler `+`, çıkışlar `−` |
| Bakiye | Hareketten sonra ürünün **o depodaki** toplamı |
| Referans / Not | İlgili sipariş, mal kabul ya da sayım numarası ve not. Numaraya tıklanınca hareketin kaynağına göre siparişin, mal kabulün ya da sayımın detayı açılır |
| Kullanıcı | İşlemi yapan; otomatik işlemlerde (ör. sipariş düşümü) **Sistem** |

### Süzgeçler

- **Arama:** ürün adı, SKU ya da lot / seri no.
- **Hareket türü** ve **Depo**.
- Stok Durumu'ndaki **Hareketler** ya da ürün formundaki **Hareketler** düğmesiyle gelindiğinde
  ürün süzgeci; Lot / Seri No ekranından gelindiğinde **Lot / Seri** süzgeci başlıkta görünür ve
  çarpı ile kaldırılır.

### Hareket türleri

| Tür | Ne zaman yazılır |
|---|---|
| **Giriş** | Stok Durumu'ndan stok girişi; mal kabulün her satırı (seri numaralı üründe her seri) |
| **Çıkış** | Stok Durumu'ndan stok çıkışı |
| **Sayım Düzeltme** | Hızlı sayım; sayım oturumunun onayı (sayılmayanların sıfırlanması dahil) |
| **Transfer (Çıkış)** | Depolar arası transferde kaynak depo |
| **Transfer (Giriş)** | Depolar arası transferde hedef depo |
| **Satış** | Sipariş için stok düşümü (not: "Sipariş …") |
| **İade / İptal** | Sipariş iptali ya da başarısız ödemede stoğun geri eklenmesi; iade edilen ürünün stoğa dönmesi |
| **İçe Aktarım** | Excel ürün aktarımında stok sütunuyla miktarın değişmesi |
| **Lokasyon Değişimi** | Depo içi raf değişikliği (bir − bir + hareket) |
| **Lot Değişimi** | Siparişte lot / seri no değiştirme ve "lot belirsiz" eksinin gelen lotla kapatılması. Bkz. [Lot, seri no ve SKT](/stok/lot-seri-skt#lot-belirsiz) |

## Sipariş ve stok {#siparis-ve-stok}

- Stok **sipariş verildiği anda** düşülür: önce siparişin deposundan (bayinin
  [bölge deposu](/stok/#bolge-deposu), yoksa varsayılan depo), yetmezse diğer aktif ve
  satılabilir depolardan (Sıra numarasına göre). Depo içinde lot ve lokasyon otomatik seçilir.
- Stoğu yetmeyen ürün sepete eklenemez. Üründe **Stok yokken satışa izin ver (eksi stok)**
  işaretliyse yetmeyen kısım ilk depoda eksiye düşer.
- Stok takibi kapalı ürünlerde stok düşülmez.
- **Ödeme başarısız** ya da **iptal** → stok düştüğü depo, lokasyon ve lota geri eklenir. İptal
  edilen sipariş yeniden açılıp tekrar iptal edilse de stok iki kez eklenmez.
- **İade** → "Ürünleri stoğa geri ekle" seçilirse ürün toplandığı yere döner. Bkz.
  [İadeler](/satis/iadeler).
- Sipariş detayında her kalemin hangi depo, lokasyon ve lottan düştüğü etiket olarak görünür.

### Lotu değiştir

Depoda sistemin önerdiğinden farklı bir lot toplandıysa sipariş detayında **Lotu değiştir** ile
düzeltilir. Ayrıntı: [Siparişte lot değiştirme](/stok/lot-seri-skt#siparis-lot-degistir).

## Kritik stok {#kritik-stok}

Bir ürünün **satılabilir** stoğu eşiğe ya da altına inince ürün "kritik stokta" sayılır.

- **Eşik:** ürün formunun **Stok** bölümündeki **Kritik stok** alanı; boşsa
  [Stok Ayarları](/stok/stok-ayarlari)'ndaki **Kritik stok eşiği (genel)** (varsayılan 5).
- Yalnız **Stok takibi yap** işaretli ürünler kritik stoğa düşer.

### Bildirim

- Satılabilir stok eşiğe **inerek** geldiğinde (sipariş, çıkış, sayım düzeltmesi …) bildirim
  gider: **uygulama içi bildirim** ve **e-posta**.
- Alıcılar: **Stok Durumu** ekranını görme yetkisi olan aktif yöneticiler (Super Admin dahil).
- Başlık: stok 0 ya da altındaysa **"SKU stoğu tükendi."**, değilse **"SKU kritik stok
  seviyesinde."**; mesajda ürün adı, stok ve eşik yazar.
- Aynı düşüş için **bir kez** bildirilir. Stok eşiğin üstüne çıkıp yeniden inerse tekrar
  bildirilir.
- Girişle eşiğin altında kalmak (ör. ilk giriş, Excel aktarımı) ve pasif ürünler bildirim
  üretmez.
- Bildirim Stok Ayarları'ndaki **Kritik stok bildirimi gönder** ile kapatılabilir.

### Nerede görünür?

- Stok Durumu'nda **Stok durumu › Kritik stokta** süzgeci; Satılabilir sütunu turuncu.
- Stok raporunda **Kritik stokta** göstergesi ve **Kritik stoktakiler** listesi. Bkz.
  [Raporlar](/yonetim/raporlar).
- Depo Excel'inde **Kritik Stok** sütunu.
