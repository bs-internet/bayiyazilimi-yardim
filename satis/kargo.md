# Kargo

Kargo ücreti, sepetin toplam desisine göre seçilen kargo firmasının **desi fiyat tablosundan**
hesaplanır. Ayarlar iki ekrandadır:

- **Ayarlar › Tanımlamalar › Kargo Firmaları** — firmalar ve desi tabloları.
- **Ayarlar › Tanımlamalar › Kargo Ayarları** — sabit ücret, ücretsiz kargo eşiği, varsayılan desi.

Ürün tarafında **Desi** ve **Ücretsiz kargo** alanları ürün formundadır (bkz.
[Ürünler](/satis/urunler)).

## Kargo firmaları

Liste başlığında firma ve aktif firma sayısı yazar.

| Sütun | İçerik |
|---|---|
| **Firma** | Logo, ad, kod; varsayılan firmada *Varsayılan* etiketi |
| **Desi tablosu** | Tablodaki satır sayısı ya da *Tanımsız* |
| **Ek desi** | Ek desi ücreti |
| **Teslim** | Teslim süresi (gün) |
| **Aktif** | Anahtar: firmayı aktif / pasif yapar |

Hiç aktif firma yoksa **Kargo Ayarları**'ndaki **sabit kargo ücreti** kullanılır. Kurulumla gelen
firmalar ve fiyatlar örnektir; kendi anlaşmanıza göre düzenleyin.

### Firma eklemek

1. **Yeni firma** (ya da boş listede **Kargo firması ekle**) deyin.
2. **Kod**, **Firma adı**, **Ek desi ücreti (TL)** ve isterseniz **Takip bağlantısı**'nı girin.
3. **Kaydet** deyin. Firma aktif ve "fiyatlar KDV dahil" olarak eklenir, düzenleme ekranı açılır.
4. Desi fiyat tablosunu girin (aşağıda).

### Firma formu {#firma-formu}

**Firma bilgileri**

| Alan | Açıklama |
|---|---|
| **Kod** * | En çok 32 karakter; harf, rakam, `-` ve `_`. Büyük harfe çevrilir, tekil olmalı. |
| **Sıra** | Sepette firmaların sırası (varsayılan firma her zaman ilk). |
| **Firma adı** * | En çok 255 karakter. Müşteri ödeme adımında bu adı görür. |
| **Logo** | Görsel dosyası, en çok 2 MB. **Logoyu kaldır** ile silinir. |
| **Takip bağlantısı** | Kargo takip sayfasının adresi; `{code}` yerine siparişin takip numarası yazılır. Örn. `https://.../takip?no={code}`. En çok 500 karakter. Tanımlıysa takip numarası sipariş ekranlarında tıklanabilir olur. |
| **Teslim süresi (gün)** | 0–365; ödeme adımında firmanın yanında gösterilir. |

**Durum**

| Alan | Açıklama |
|---|---|
| **Durum** | *Aktif* / *Pasif*. Pasif firma ödeme adımında sunulmaz. |
| **Varsayılan firma** | Sepette ilk seçili gelen firma; kargo tahmini ve ücretsiz kargo değeri bu firmayla hesaplanır. Bir firmayı varsayılan yapmak diğerinden kaldırır. |

**Ek desi ücreti ve vergi**

| Alan | Açıklama |
|---|---|
| **Ek desi ücreti (TL)** * | Tablonun en üst desisini aşan her desi için eklenir (başlamış desi tama yuvarlanır). |
| **Fiyatlar KDV dahil** | İşaretli değilse tablo fiyatlarına müşteriye yansıtılırken **%20 KDV** eklenir. |

### Desi fiyat tablosu

Her satır bir desi aralığı ve o aralığın ücretidir (TL). **Bitiş desisi dahildir.**

| Sütun | Açıklama |
|---|---|
| **Başlangıç desi** | Boş bırakılırsa bir önceki satırın bitiş desisi kabul edilir (ilk satırda 0). |
| **Bitiş desi** * | Aralığın üst sınırı. |
| **Fiyat (TL)** * | Bu aralığın ücreti. |

- **Satır ekle** ile satır eklenir, satırdaki sil düğmesiyle silinir. Satırlar kaydederken bitiş
  desisine göre sıralanır. En çok 500 satır.
- Değişiklikler **Tabloyu kaydet** ile kaydedilir; kayıt tabloyu tamamen değiştirir. Başlangıcı
  bitişinden büyük satır "Desi aralığı hatalı" uyarısı verir.
- **Ücret önizleme** kartında bir desi yazıp **müşteriye yansıyan** ücreti görebilirsiniz
  (kaydedilmemiş satırlarla hesaplanır, KDV ve ek desi dahil).

**Excel'den yükleme:**

1. **Şablon** ile dosyayı indirin. Firmanın tablosu varsa mevcut satırlarla, yoksa örnek
   aralıklarla (0–1, 1–2, 2–3, 3–5, 5–10, 10–15, 15–20, 20–30) iner.
2. Dosyayı doldurun. İlk sayfa okunur, ilk satır başlıktır. Sütunlar
   `Desi Başlangıç | Desi Bitiş | Fiyat` ya da `Desi | Fiyat` olabilir; ikincisinde her satır bir
   üst sınırdır, alt sınır önceki satırın üstüdür. Fiyatta `TL`, `₺` ve `1.250,50` biçimi kabul
   edilir.
3. Dosyayı (yalnız `.xlsx`, en çok 5 MB) yükleyin. Tablo **tamamen** dosyadakiyle değişir.

### Silme

Siparişlerde kullanılmış firma ve varsayılan firma silinemez; pasifleştirin. Varsayılan firma
pasifleştirilemez; önce başka bir firmayı varsayılan yapın.

## Kargo Ayarları

**Ayarlar › Tanımlamalar › Kargo Ayarları**

| Alan | Varsayılan | Açıklama |
|---|---|---|
| **Sabit kargo ücreti** | 0 | Yalnızca **aktif kargo firması yokken** kullanılır. 0 = ücretsiz. Ana para biriminde. |
| **Varsayılan ürün desisi** | 1 | Desisi girilmemiş (0) ürünler için **adet başına** kullanılır. 0–1000. |
| **Ücretsiz kargo eşiği** | 0 | Sepet bu tutarı geçerse (eşit ya da büyük) kargo ücretsiz. Ana para biriminde, KDV dahil sepet tutarıyla karşılaştırılır. 0 = eşik yok. |

## Kargo ücreti nasıl hesaplanır? {#hesaplama}

Sırasıyla:

1. Sepetteki **tüm ürünler** "Ücretsiz kargo" işaretliyse kargo **ücretsiz**.
2. **Ücretsiz kargo eşiği** tanımlıysa ve sepetin KDV dahil ürün toplamı (kampanya indirimleri
   düşülmüş) ana para birimine çevrildiğinde eşiğe ulaşıyorsa kargo **ücretsiz**.
3. **Aktif firma yoksa** sabit kargo ücreti alınır (0 ise ücretsiz).
4. Firma varsa: "Ücretsiz kargo" işaretli ürünler hariç, kalan ürünlerin **toplam desisi**
   hesaplanır: ürün desisi × adet (desisi 0 olan ürün için varsayılan ürün desisi).
5. Toplam desi, müşterinin seçtiği firmanın tablosunda aranır:
   - Desi bir aralığa düşüyorsa o satırın fiyatı.
   - Tablonun en üst desisini aşıyorsa: son satırın fiyatı + her aşan (başlamış) desi için
     **ek desi ücreti**.
   - Firma "Fiyatlar KDV dahil" değilse fiyata %20 KDV eklenir.
6. Tutar sepetin para birimine çevrilir.

**Kampanyalar:** ücretsiz ya da sabit ücretli kargo veren bir kampanya uygulanıyorsa, kampanyanın
kargo ücreti ile yukarıdaki normal ücretten **düşük olanı** alınır (ör. eşik aşıldıysa ücretsiz
kalır). Bkz. [Kampanyalar](/musteriler/kampanyalar).

**Teklifler:** tekliflerde kargo tablosu kullanılmaz; teklifte girdiğiniz kargo ücreti geçerlidir.
Bkz. [Teklifler](/satis/teklifler).

**Örnek:** Tablo 0–1: 80 TL, 1–2: 95 TL, 2–3: 110 TL; ek desi ücreti 15 TL; fiyatlar KDV dahil.
Sepette desisi 1,5 olan üründen 3 adet var → toplam 4,5 desi. Tablo 3'te biter; 1,5 desi
aşar, 2 desiye yuvarlanır → 110 + 2 × 15 = **140 TL**.

::: warning Aktif firmanın tablosu boş olmasın
Aktif bir firmanın desi tablosu yoksa o firmayla kargo hesaplanamaz ve müşteri "… için desi
fiyat tablosu tanımlı değil." hatası alır. Tablosunu girmediğiniz firmayı pasif tutun.
:::

## Ödeme adımında ve siparişte

- Aktif firma varsa müşteri ödeme adımında **Kargo Firması** seçer (varsayılan firma seçili
  gelir); her firmanın ücreti ve teslim süresi gösterilir.
- Siparişe firma, toplam desi ve kargo ücreti yazılır.
- Kargoya verirken sipariş detayında **Durumu değiştir** penceresinden kargo firması ve **takip
  numarası** girilir. Müşteriye giden e-postada firma ve takip numarası yer alır; firmanın takip
  bağlantısı tanımlıysa müşteri siparişinden kargoyu izleyebilir. Bkz.
  [Sipariş detayı](/satis/siparis-detayi#durum).
