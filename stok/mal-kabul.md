# Mal kabul

Tedarikçiden gelen malları irsaliye / fatura üzerinden depoya almak için kullanılır. Mal kabul,
hızlı girişe göre belgeyi (tedarikçi, belge türü, numarası, tarihi) kaydeder, aynı belgenin iki
kez alınmasını engeller ve lot / seri numaralı ürünlerde toplu girişe izin verir.

## Tedarikçiler {#tedarikciler}

**Ayarlar › Tanımlamalar › Tedarikçiler** — mal kabulde seçilen tedarikçiler. Mal kabul formunda
hiç tedarikçi yoksa bu ekrana bağlantı çıkar.

| Alan | Açıklama |
|---|---|
| Tedarikçi adı | Zorunlu, en fazla 255 karakter; her tedarikçide farklı olmalı |
| Vergi dairesi | İsteğe bağlı |
| Vergi / TC no | İsteğe bağlı, en fazla 32 karakter. Mal kabul detayında "VN:" ile görünür |
| Telefon | İsteğe bağlı, en fazla 32 karakter |
| E-posta | İsteğe bağlı, geçerli e-posta adresi |
| Adres | İsteğe bağlı, en fazla 2000 karakter |
| Not | İsteğe bağlı, en fazla 500 karakter |

Listede: Tedarikçi, Vergi no, İletişim, Mal kabul (kaç mal kabulde kullanıldığı), Aktif
anahtarı ve işlemler.

- Yeni tedarikçi **aktif** olarak eklenir. Mal kabul formunda yalnız aktif tedarikçiler çıkar.
- Mal kabulde kullanılmış tedarikçi **silinemez**; pasifleştirin. Pasif tedarikçinin geçmiş
  mal kabulleri görünmeye devam eder.

## Mal kabul listesi

**Mağaza › Stok › Mal Kabul** — en yeni kayıt üstte, sayfa başına 50 kayıt.

| Sütun | Açıklama |
|---|---|
| Kayıt | Mal kabul numarası (detayı açar) ve kayıt tarihi |
| Tedarikçi | Tedarikçi adı |
| Belge | Belge türü, belge no ve belge tarihi |
| Depo | Giriş deposu |
| Satır / Adet | Yazılan giriş hareketi sayısı ve toplam adet. Seri numaralı üründe her seri numarası ayrı satır sayılır |
| Kullanıcı | Kaydı giren yönetici |

**Süzgeçler:** **Kayıt no ya da belge no ara**, Tedarikçi, Depo. **Temizle** süzgeçleri kaldırır.

## Yeni mal kabul {#yeni-mal-kabul}

**Mağaza › Stok › Mal Kabul › Yeni mal kabul**

### Belge bölümü

| Alan | Açıklama |
|---|---|
| Tedarikçi | Zorunlu. Yalnız aktif tedarikçiler |
| Giriş deposu | Zorunlu. Yalnız aktif depolar; varsayılan depo seçili gelir. Depoyu değiştirirseniz satırlarda seçili lokasyonlar temizlenir |
| Belge türü | Zorunlu: **İrsaliye** (varsayılan), **Fatura**, **İrsaliyeli Fatura** |
| Belge no | Zorunlu, en fazla 64 karakter |
| Belge tarihi | Zorunlu; bugün gelir. İleri bir tarih seçilemez |
| Not | İsteğe bağlı, en fazla 500 karakter |

::: warning Aynı belge iki kez alınamaz
Aynı tedarikçinin aynı türdeki aynı belge numarası ikinci kez kabul edilmez; hata mesajında önceki
mal kabulün numarası yazar.
:::

### Satırlar bölümü

Arama kutusuna en az 2 karakter yazın (ürün adı, SKU ya da barkod); en fazla 20 sonuç listelenir.
Sonuçta ürünün takip türü ("Lot takipli", "Seri no takipli", "SKT") görünür. Ürüne tıklayınca
satır eklenir. Bölüm başlığında satır sayısı ve toplam adet yazar.

Bir mal kabulde **en fazla 500 satır** olabilir. Aynı ürün birden çok satırda olabilir (ör. iki
farklı lot).

| Alan | Ne zaman görünür | Açıklama |
|---|---|---|
| Miktar (birim) | Seri takipli ürün hariç | Zorunlu, 1–1.000.000. Varsayılan 1 |
| Lokasyon | Her satırda | İsteğe bağlı; giriş deposunun aktif lokasyonları. Boşsa (**Otomatik**) ürünün o depodaki ana lokasyonuna, yoksa Atanmamış'a girer |
| Lot no | Lot takipli üründe | Zorunlu, en fazla 64 karakter; büyük harfe çevrilir |
| Son kullanma tarihi | Lot ya da seri takipli üründe | Üründe SKT takibi açıksa zorunlu, değilse "(isteğe bağlı)" |
| Seri numaraları | Seri takipli üründe | Zorunlu. Miktar, girilen seri numarası sayısından hesaplanır; etikette sayı görünür |

Çöp kutusu simgesi satırı siler.

### Seri numarası yazma biçimi {#seri-bicimi}

- Her satıra bir seri numarası yazın ya da barkod okuyucuyla alt alta okutun.
- Boşluk, virgül ya da noktalı virgülle ayırmak da olur: `SN001, SN002; SN003 SN004` → 4 seri.
- Seri numaraları büyük harfe çevrilir (`sn001` → `SN001`).
- Kayıtta şu durumlar hata verir:
  - aynı satırda tekrarlanan seri numarası,
  - aynı ürünün iki satırında aynı seri numarası,
  - zaten stokta olan seri numarası (tüm depolarda).

### Lot ve SKT kuralları

- Var olan bir lot numarası yazılırsa stok o lota eklenir.
- Lot daha önce **farklı** bir SKT ile kaydedildiyse hata verir ("lotu farklı bir son kullanma
  tarihiyle kayıtlı"). SKT'siz kayıtlı lota SKT girilirse lot tamamlanır.

### Nasıl yapılır? — Mal kabul girmek

1. **Mağaza › Stok › Mal Kabul**'de **Yeni mal kabul**'e basın.
2. Tedarikçiyi, giriş deposunu, belge türünü seçin; belge numarasını ve tarihini irsaliyeden
   yazın.
3. Arama kutusuyla irsaliyedeki her ürünü ekleyin; miktarı yazın.
4. Lot takipli ürünlerde lot no ve SKT, seri takipli ürünlerde seri numaralarını girin.
5. Malı yerleştireceğiniz rafı biliyorsanız lokasyonu seçin.
6. **Mal kabulü kaydet**. Detay sayfası açılır ve "… mal kabulü kaydedildi." mesajı çıkar.

### Kayıt sonrası

- Her satır bir **Giriş** stok hareketi olarak yazılır (seri takipli üründe her seri numarası
  için bir hareket); hareketin notu "Mal kabul MK…" ve referansı bu mal kabuldür.
- Lot takipli üründe aynı depoda **lot belirsiz** eksi stok varsa gelen lotla kapatılır. Bkz.
  [Lot belirsiz stok](/stok/lot-seri-skt#lot-belirsiz).

## Numaralandırma {#numaralandirma}

Her mal kabul `MK` + **yymmdd** + günün **4 haneli sıra numarası** biçiminde numara alır. Örnek:
7 Kasım 2026'nın ilk kaydı `MK2611070001`, ikincisi `MK2611070002`. Sayaç her gün 0001'den
başlar.

## Mal kabul detayı ve yazdırma

Listede numaraya tıklayınca açılır. Başlıkta kayıt numarası, kayıt tarihi-saati ve giren
kullanıcı yazar.

- **Belge** bölümü: tedarikçi (vergi numarasıyla), belge türü ve numarası, belge tarihi, giriş
  deposu, not.
- **Satırlar** tablosu: Ürün, Lokasyon, Lot / Seri no, SKT, Miktar; başlıkta toplam adet.
- **Yazdır** düğmesi sayfayı yazıcıya gönderir; düğmeler çıktıda görünmez.

## Düzeltme

Kaydedilmiş mal kabul değiştirilemez ve silinemez. Hatalı girişi
[Stok Durumu](/stok/stok-islemleri#cikis)'ndan **stok çıkışı** yaparak düzeltin (lot takipli
üründe ilgili lotu seçerek); nota mal kabul numarasını yazın.
