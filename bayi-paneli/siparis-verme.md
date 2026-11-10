# Sipariş verme

Siparişlerinizi **Sipariş ver** ekranından verirsiniz: ürünü arar, adedini seçip sepete
eklersiniz, ardından ödeme ekranında adres, kargo ve ödeme yöntemini seçip siparişi
onaylarsınız. Online mağazaya gitmenize gerek yoktur.

## Sipariş ver ekranı {#siparis-ver}

**Sipariş ver** (sol menü). Başlangıç ekranındaki **Sipariş ver** düğmesi de buraya getirir.

Ekranın üstünde ürün arama, altında sepetiniz, sağda **Sipariş özeti** bulunur. Başlığın
yanında sepetinizdeki çeşit ve adet sayısı ile toplam tutar yazar.

Başlıktaki düğmeler:

- **Kayıtlı sepetler**: kayıtlı sepet listenizi açar. Parantez içinde kaç kayıtlı sepetiniz
  olduğu yazar.
- **Sepeti kaydet**: sepetiniz doluyken görünür. Bkz.
  [Kayıtlı sepetler](/bayi-paneli/kayitli-sepetler#kaydetme).
- **Mağazaya git**: online mağazamız varsa görünür.

### Ürün arama {#urun-arama}

| Alan | Açıklama |
|---|---|
| **Ürün adı veya stok kodu** | En az **2 karakter** yazınca arama başlar. Stok kodu yazdığınız harflerle başlayan ürünler en üstte gelir |
| **Kategori** (Tüm kategoriler) | Bir kategori seçince o kategori ve **alt kategorilerindeki** ürünler listelenir. Listede arama yapabilirsiniz |
| **Marka** (Tüm markalar) | Seçilen markanın ürünleri listelenir |

- Alanları birlikte kullanabilirsiniz (ör. bir markanın belirli bir kategorideki ürünleri).
- Yazmayı bıraktığınızda sonuçlar kendiliğinden gelir. Aramak için bir düğmeye basmanız
  gerekmez.
- Bir aramada en fazla **40 ürün** gösterilir. En çok satanlar üstte yer alır. Aradığınızı
  göremiyorsanız aramayı daraltın.
- Yalnız size gösterilen, satıştaki ürünler listelenir.

### Sık aldıklarınız {#sik-aldiklariniz}

Arama kutusu boşken ve kategori / marka seçili değilken, geçmiş siparişlerinizde **en çok
aldığınız 12 ürün** **Sık aldıklarınız** başlığıyla listelenir. Her satırda "… adet aldınız"
bilgisi yazar. Henüz siparişiniz yoksa "Aramaya başlayın ya da kategori / marka seçin." yazar.

### Ürün satırı {#urun-satiri}

Her üründe şunları görürsünüz:

| Bilgi | Açıklama |
|---|---|
| Görsel ve ürün adı | |
| Marka · stok kodu | |
| **Stok N** | Stok takibi yapılan ürünlerde satılabilir stok. Stok takibi yapılmayan üründe yazmaz |
| **(bölge deponuzda N)** | Size bir bölge deposu atanmışsa o depodaki stok. Siparişiniz önce bölge deponuzdan, yetmezse diğer depolarımızdan karşılanır. Sipariş verebilmeniz toplam stoğa bağlıdır |
| **… adet aldınız** | Yalnız Sık aldıklarınız listesinde |
| **Teklifle satılır** | Ürün yalnız teklifle satılıyor ya da fiyatı yok. Fiyat yerine "—" görünür |
| **Stok yetersiz** | Stok, ürünün en az sipariş adedini karşılamıyor |
| Fiyat | Size uygulanan birim fiyat (bayi / grup indiriminiz dahil) |
| Adet kutusu | **−** / **+** ya da elle yazılır |
| **Sepete ekle** | Ürünü seçtiğiniz adetle sepete ekler |
| **Teklif listesine** | Sepete eklenemeyen ürünlerde (teklifle satılan ya da stoğu yetersiz) **Sepete ekle** yerine görünür. Ürünü [Teklif listenize](/bayi-paneli/teklifler#teklif-listem) ekler |

### Adet kuralları {#adet-kurallari}

- **En az sipariş adedi** tanımlı ürünlerde adet kutusu bu sayıdan başlar ve altına inmez.
- **En fazla sipariş adedi** tanımlı ürünlerde **+** bu sayının üstüne çıkmaz. Sepette zaten
  ürün varsa, sepetteki adet ile eklediğiniz adetin toplamı bu sınırı geçemez.
- Stok takibi yapılan üründe sepetteki toplam adet stoğu geçemez (stok dışı satışa açık ürünler
  hariç).

Ürün eklenemezse ekranın üstünde nedeni yazar:

| Uyarı | Anlamı |
|---|---|
| Ürün satışta değil. | Ürün satıştan kaldırılmış |
| Yalnızca teklif ile satılıyor. | Ürün için teklif isteyin |
| Yeterli stok yok (mevcut: N). | Stok istediğiniz adede yetmiyor |
| En fazla N adet sipariş verilebilir. | En fazla sipariş adedi aşılıyor |

Başarılı eklemede "(ürün) sepete eklendi." mesajı görünür.

## Sepetiniz {#sepet}

Sepete eklediğiniz ürünler aramanın altındaki tabloda listelenir.

| Sütun | Açıklama |
|---|---|
| **Ürün** | Görsel, ad ve stok kodu. Kampanyayla gelen hediye üründe **Hediye**, kampanyalı üründe kampanyanın adı yazar. Sorunlu satırda "Yalnızca teklifle satılır" ya da "Yetersiz stok (mevcut: N)" uyarısı çıkar |
| **Birim fiyat** | Size uygulanan birim fiyat |
| **Adet** | **−** / **+** ya da elle değiştirilir. Kısa bir beklemeden sonra **kendiliğinden kaydedilir**. 0 yaparsanız ürün sepetten çıkar |
| **Tutar** | Satır tutarı. Hediye üründe **Ücretsiz** |
| **İşlem** | Çarpı simgesi ürünü sepetten çıkarır |

Adet değiştirirken de [adet kuralları](#adet-kurallari) uygulanır: en az adedin altına yazarsanız
en az adede, en fazla adedin üstüne yazarsanız en fazla adede çekilir. Stoğu aşarsanız adet
mevcut stoğa düşürülür ve "(ürün) için en fazla N adet eklenebilir." uyarısı çıkar.

### Sipariş özeti {#siparis-ozeti}

| Satır | Açıklama |
|---|---|
| **Kampanya indirimi (KDV hariç)** | Sepetinize kampanya uygulandıysa |
| **Ara toplam (KDV hariç)** | |
| **KDV** | |
| **Kargo** / **Kargo (firma adı)** | Tahmini kargo ücreti |
| **Genel toplam** | |

Kutunun altında:

- **Uygulanan kampanya: (ad)**: sepetinize uygulanan kampanya ve özeti. Sepetiniz birden çok
  kampanyaya uyuyorsa "Sepetinize N kampanya daha uyuyor; en avantajlı olan uygulandı." yazar.
- **"… daha ekleyin, "(kampanya)" kampanyasından yararlanın."**: bir kampanyaya az kaldıysa
  ne kadar daha eklemeniz gerektiğini gösterir.
- Sepette sipariş verilemeyen ürün varsa kırmızı uyarı çıkar ve **Sipariş ver** düğmesi
  pasifleşir. Bu ürünleri çıkarın ya da **Teklif al** ile tüm sepet için teklif isteyin.

Kampanyaların nasıl işlediği: [Kampanyalar](/musteriler/kampanyalar).

::: info Kargo ücreti
Kargo ücreti ödeme adımında seçtiğiniz kargo firmasına ve sepetin desisine göre kesinleşir.
:::

### Sepetteki düğmeler

- **Sipariş ver**: [ödeme ekranına](#odeme) geçer.
- **Teklif al**: sepetteki **bütün ürünleri** teklif listenize taşır ve sepetinizi boşaltır.
  Teklif listesinde aynı ürün varsa adetler toplanır. Ardından teklif talebinizi
  gönderirsiniz: [Teklif isteme](/bayi-paneli/teklifler#teklif-isteme).

## Ödeme ekranı {#odeme}

**Sipariş ver › Sipariş ver** düğmesi. Başlık **Siparişi tamamla**'dır. Sağ üstteki geri
düğmesi sepete döner. Sepetiniz boşsa bu ekran açılmaz, "Sepetiniz boş." uyarısıyla sepete
dönersiniz.

Ekran numaralı adımlardan oluşur. Sağda **Sipariş özeti** görünür.

### 1. İletişim Bilgileri

| Alan | Açıklama |
|---|---|
| **E-posta** | Zorunlu. Hesap e-postanızla dolu gelir. Sipariş e-postaları bu adrese gönderilir |
| **Cep Telefonu** | Zorunlu, en az 10 karakter. Kayıtlı fatura (yoksa teslimat) adresinizdeki telefonla dolu gelir |

### 2. Teslimat Adresi {#adresler}

| Alan | Açıklama |
|---|---|
| **Kayıtlı teslimat adreslerim** | Adreslerim'deki teslimat adresleri. Varsayılan teslimat adresiniz seçili gelir. **Yeni adres gir** seçilirse alanlar boşalır |
| **Teslim Alacak Kişi** | Zorunlu |
| **Telefon** | İsteğe bağlı. Boş bırakılırsa cep telefonunuz kullanılır |
| **Adres** | Zorunlu, en fazla 500 karakter |
| **İl**, **İlçe** | Listeden seçilir, zorunlu |
| **Posta Kodu** | İsteğe bağlı |

Kayıtlı bir adres seçtiğinizde alanlar o adresle dolar.

### 3. Fatura Bilgileri

| Alan | Açıklama |
|---|---|
| **Fatura adresim teslimat adresimle aynı** | İşaretliyse fatura adresi olarak teslimat adresi kullanılır. Kayıtlı fatura adresiniz yoksa işaretli gelir |
| **Kayıtlı fatura adreslerim** | Kutu işaretli değilse görünür. Varsayılan fatura adresiniz seçili gelir |
| **Bireysel** / **Kurumsal** | Fatura türü |
| **Ad Soyad** | Zorunlu |
| **Firma Ünvanı**, **Vergi Dairesi**, **Vergi Numarası** | Kurumsal'da zorunlu |
| **T.C. Kimlik No (isteğe bağlı)** | Bireysel'de. Girilirse 11 rakam |
| **Fatura Adresi**, **İl**, **İlçe**, **Posta Kodu** | Kutu işaretli değilse görünür. Adres, il ve ilçe zorunlu |
| **Yeni adresleri Adreslerim'e kaydet (teslimat ve fatura adresi ayrı ayrı)** | Kayıtlı olmayan bir adres girdiyseniz görünür. İşaretlerseniz sipariş sonrası teslimat adresi teslimat, fatura adresi fatura listenize eklenir. Hiç kayıtlı adresiniz yoksa işaretli gelir |

Teslimat ve fatura adresi aynı olsa bile sipariş ikisini ayrı ayrı saklar.

### 4. Kargo Firması {#kargo}

Sepetinizi taşıyabilecek kargo firmaları listelenir: logo, ad, **Tahmini N iş günü** ve bu
sepet için kargo ücreti (ya da **Ücretsiz**). Varsayılan firma seçili gelir. Başka bir firma
seçince özet ve toplam güncellenir. Altta "Sepet toplamı N desi üzerinden hesaplanmıştır."
yazar.

Tanımlı kargo firması yoksa bu adım görünmez ve ödeme yöntemi 4. adım olur.

### 5. Ödeme Yöntemi {#odeme-yontemi}

Size açık ödeme yöntemleri listelenir. Seçtiğiniz yöntemin açıklaması altında yazar.

| Yöntem | Ne zaman görünür? | Ne olur? |
|---|---|---|
| **Havale / EFT** | Firmamız havaleyi açtıysa ve tanımlı banka hesabı varsa | Sipariş **Ödeme Bekleniyor** durumunda açılır. Banka hesap bilgilerimiz sipariş e-postanızda ve ödeme alınana kadar [sipariş detayında](/bayi-paneli/siparislerim#havale-bilgileri) yer alır. Açıklamaya sipariş numaranızı yazın. Ödeme yaptıktan sonra [havale bildirimi](/bayi-paneli/cari-hesabim#havale-bildirimi) gönderin |
| **Cari hesaba (vadeli)** | Vadeli (açık hesap) çalışıyorsanız | Açıklamada vade gün sayınız ve kullanılabilir limitiniz yazar. Ayrıntı aşağıda |
| **Kredi / Banka Kartı** | Kartla ödeme açıksa | Siparişi onaylayınca güvenli ödeme sayfasına geçersiniz. Altında bilgi amaçlı **Taksit seçenekleri** tablosu görünür. Bkz. [Kartla ödeme](/cari/kartla-odeme#odeme-akisi) |

Bazı yöntemler size özel kısıtlanmış olabilir (hesabınıza tanımlı izinli yöntemler) ya da en
düşük sipariş tutarı olabilir. Bu durumda o yöntem listede görünmez. Hiç yöntem yoksa "Şu anda
kullanılabilir ödeme yöntemi yok. Lütfen bizimle iletişime geçin." yazar.

**Sipariş Notu**: isteğe bağlı, en fazla 2000 karakter. Teslimat ya da sipariş hakkında
iletmek istediğiniz notu yazın.

#### Havale indirimi

Firmamız havaleyle ödemeye indirim tanımladıysa **Havale / EFT** seçtiğinizde özetin altında
"Havale indirimi (%…): −… · Ödenecek tutar: …" satırı çıkar. İndirim KDV ve kargo dahil toplam
üzerinden hesaplanır ve siparişinize ayrı satır olarak yazılır.

#### Ödeme yöntemine bağlı kampanyalar

Bazı kampanyalar yalnız belirli bir ödeme yöntemiyle geçerlidir. Böyle bir kampanya varsa ödeme
yöntemini değiştirdiğinizde özet, ürün satırları ve kargo ücretleri buna göre güncellenir.

#### Cari hesaba (vadeli) siparişte ne olur? {#vadeli}

- Limitiniz yetiyor ve vadesi geçmiş borcunuz yoksa sipariş doğrudan **Hazırlanıyor** olur,
  tutar vade tarihiyle carinize borç yazılır. Mesajda vade tarihi yazar.
- Limit aşılıyor ya da vadesi geçmiş borcunuz varsa, hesabınızın ayarına göre:
  - sipariş **Onay Bekliyor** durumunda alınır ve onayımıza düşer (mesajda nedeni yazar), ya da
  - sipariş verilemez: "Vadeli sipariş verilemiyor: … Kartla ya da havaleyle ödeyebilirsiniz."

Ayrıntı: [Peşin ve vadeli çalışma](/cari/vadeli-calisma).

### Sipariş özeti ve onay {#sozlesme-onayi}

Sağdaki özette ürünler (adet ve tutarlarıyla), kampanya indirimi, ara toplam, KDV, kargo ve
genel toplam yer alır.

Firmamız siparişte onaylanacak sözleşme belirlediyse bir onay kutusu çıkar ve
işaretlemeniz zorunludur. Kutunun metni sözleşmelerin adlarını sayar, ör. "**Satış Sözleşmesi**
ve **KVKK Aydınlatma Metni** metinlerini okudum, onaylıyorum." Her sözleşme adı bir
bağlantıdır. Tıklayınca metin bir pencerede açılır. Onaylanacak sözleşme yoksa onay kutusu da
çıkmaz. Sözleşmelerin tamamını [Sözleşmeler](/bayi-paneli/sozlesmeler) menüsünde de
okuyabilirsiniz.

Son düğme:

- **Siparişi Onayla**: havale ve cari hesaba ödemede.
- **Ödemeye Geç**: kartla ödemede. Güvenli ödeme sayfasına geçersiniz.

Hatalı ya da eksik alan varsa sayfa gönderilmez ve alanın altında hata yazar.

## Sipariş sonrası {#siparis-sonrasi}

- Sipariş detayı açılır ve üstte "Siparişiniz alındı. Sipariş numaranız: …" mesajı görünür
  (vadeli siparişte vade tarihi ya da onaya düşme nedeni yazar).
- Kartla ödemede güvenli ödeme sayfasından döndüğünüzde sonucu bildiren mesaj görünür
  ("Ödemeniz alındı…", "Ödemeniz işleniyor…" ya da "Ödeme tamamlanamadı: …").
- Sepetiniz boşalır.
- Ödeme ekranında yazdığınız e-posta adresine **"Siparişiniz alındı"** e-postası gelir: ürünler,
  ödeme yöntemi, havaleyle ödemede banka hesaplarımız ve **Siparişi Görüntüle** bağlantısı.

Siparişin bundan sonraki adımları: [Siparişlerim](/bayi-paneli/siparislerim).

::: tip Sık verdiğiniz siparişler için
Her ay benzer ürünleri sipariş ediyorsanız sepetinizi [kaydedin](/bayi-paneli/kayitli-sepetler)
ya da eski bir siparişte [Tekrar sipariş ver](/bayi-paneli/siparislerim#tekrar-siparis)
düğmesini kullanın.
:::
