# Müşteriler ve bayiler

Sistemde iki tür üye vardır:

| Tür | Nasıl oluşur | Hangi alanı kullanır |
|---|---|---|
| **Bayi** | Siz panelden eklersiniz (**Bayiler › Yeni Bayi**); bayi kendisi başvuramaz | Bayi paneli (`/app`) |
| **Müşteri** | [Vitrin modülü](/vitrin/) kuruluysa vitrinden kendisi kayıt olur | Vitrindeki **Hesabım** |

Bir üye yanlış alana girmeye çalışırsa kendi alanına yönlendirilir. Panelden eklenen her hesap
bayidir; vitrin modülü yoksa sistemdeki tüm üyeler bayidir.

Bu bölümün ekranları sol menüde **Bayiler** başlığının altındadır. [Vitrin modülü](/vitrin/)
kuruluysa menünün ve listenin adı **Müşteriler** olur; liste bayileri ve müşterileri birlikte
gösterir. Bu sayfada ekran adları vitrinsiz kuruluma göre yazılmıştır; vitrin kuruluysa
"Bayiler" yerine "Müşteriler" okuyun.

| Menü | Ne işe yarar |
|---|---|
| **Bayiler › Bayiler** | Bayi listesi (vitrin kuruluysa bayi ve müşteri listesi), detay |
| **Bayiler › Cari Durum** | Tüm hesapların bakiyesi. Bkz. [Cari hesap](/cari/#cari-durum) |
| **Bayiler › Yeni Bayi** | Bayi ekleme formu |
| **Bayiler › Bayi Grupları** | Grup indirimi ve grubun cari çalışma şekli |

## Bayi listesi {#liste}

**Bayiler › Bayiler** ekranı bayileri (vitrin kuruluysa bayileri ve müşterileri birlikte), en
son eklenen en üstte olacak şekilde listeler. Başlıktaki sayı, filtreye uyan toplam kayıt sayısıdır. Sağ üstte
**Bayi grupları** ve **Yeni bayi** düğmeleri vardır.

### Arama ve filtreler

| Alan | Açıklama |
|---|---|
| Arama kutusu | Ad, e-posta ya da firma ünvanında arar. Yazdıktan sonra **Ara**'ya basın. |
| Tür | Yalnız vitrin modülü kuruluyken görünür: **Bayi** ya da **Müşteri**. E-postasını henüz doğrulamamış (hesabı açılmamış) vitrin üyeleri müşteri sayılır. |
| Bayi grubu | Bir grup seçerseniz o grubun bayileri; **Grupsuz bayiler** seçerseniz hiçbir gruba bağlı olmayan bayiler listelenir. Grup adlarının yanında indirim oranı görünür, ör. "Altın Bayi (%15)". |
| Durum | **Aktif**, **Pasif** ya da **Kısıtlı** (bkz. [Hesap durumları](#durumlar)). |

Herhangi bir filtre seçiliyken **Temizle** düğmesi çıkar; tüm filtreleri sıfırlar.

### Sütunlar

| Sütun | Açıklama |
|---|---|
| Bayi | Ad soyad; altında e-posta ve (addan farklıysa) firma ünvanı. Tıklayınca detay açılır. Vitrin kuruluysa başlık **Müşteri** olur. |
| Bayi grubu | Grup ve uygulanan indirim, ör. "Altın Bayi · %15"; bayiye özel oran girildiyse "(özel)" eklenir, grubu yoksa "Grupsuz". Vitrin kuruluysa başlık **Tür** olur ve üstte **Bayi** ya da **Müşteri** rozeti görünür. |
| Sipariş | Ciroya sayılan sipariş adedi. |
| Toplam harcama | Bu siparişlerin toplamı, ana para biriminde (siparişteki kurla çevrilerek). |
| Son giriş | Üyenin son giriş tarihi ve saati. |
| Durum | Aktif / Pasif / Kısıtlı. |
| ⋯ (İşlemler) | **Görüntüle**, **Siparişleri** (sipariş listesini bu müşteriyle süzülmüş açar), **Teklifleri**. |

::: info Ciroya sayılan sipariş
"Sipariş" ve "Toplam harcama"ya iptal edilen, ödemesi başarısız olan ve ödemesi iade edilen
siparişler girmez. Başlangıç ekranı ve [Raporlar](/yonetim/raporlar) da aynı tanımı kullanır.
:::

## Yeni bayi ekleme {#yeni-bayi}

**Bayiler › Yeni Bayi** (ya da listedeki **Yeni bayi** düğmesi). Panelden eklenen hesaplar
bayidir ve bayi panelini (`/app`) kullanır. Bayiye şifresini kendisinin belirlemesi için bir
**hoş geldin bağlantısı** gönderilir; şifreyi siz girmezsiniz.

| Alan | Açıklama |
|---|---|
| Firma ünvanı | İsteğe bağlı, en fazla 255 karakter. Listede, cari ekranlarında ve ekstrede hesabın adı olarak görünür; boşsa yetkilinin adı kullanılır. |
| Yetkili ad soyad | Zorunlu, en fazla 255 karakter. Bayi kullanıcısının adı. |
| E-posta adresi | Zorunlu. Bayi bu adresle giriş yapar, hoş geldin bağlantısı buraya gider. Sistemde başka bir kullanıcıda (yönetici dahil) kayıtlı olmamalıdır. |
| E-posta adresini onayla | Varsayılan **işaretli**. İşaretliyse adres onaylanmış olarak oluşturulur ve bağlantı bayiyi doğrudan şifre belirleme ekranına götürür. İşaretli değilse bağlantı önce e-postayı onaylar, sonra şifre ekranına yönlendirir. |
| Durum | Varsayılan **Aktif**. Aktif, Pasif ya da Kısıtlı seçilebilir (bkz. [Hesap durumları](#durumlar)). |
| Bayi grubu | Varsayılan olarak listedeki **ilk grup** (alfabetik) seçili gelir; istemiyorsanız **Grupsuz** seçin. Grup indirimi ve grubun cari çalışma şekli buradan gelir. |
| Bayiye özel indirim (%) | İsteğe bağlı, 0–100 arası, en fazla 2 ondalık. Boş bırakılırsa grubun oranı geçerlidir; girilirse grubun oranının **yerine** geçer. |
| Bölge deposu | Yalnız aktif ve satılabilir depo varsa görünür. Varsayılan **Atanmamış (tüm depolar)**. Bayi bu deponun stoğunu ayrıca görür; siparişi önce bu depodan, yetmezse diğer satılabilir depolardan düşülür. Bkz. [Depolar](/stok/). |

Yeni bayi formunda cari çalışma şekli (peşin / vadeli, kredi limiti …) yoktur: bayi, grubunun
ayarlarıyla başlar. Bayiye özel bir ayar gerekiyorsa kayıttan sonra müşteri detayındaki
**Bayi ayarları**'nı kullanın.

### Nasıl yapılır?

1. **Bayiler › Yeni Bayi**'yi açın.
2. Firma ünvanını, yetkilinin adını ve e-posta adresini yazın.
3. Sağdaki **Durum**, **Bayi grubu**, gerekiyorsa **Bayiye özel indirim** ve **Bölge deposu**'nu seçin.
4. **Bayi oluştur**'a basın. "Bayi oluşturuldu ve hoş geldin e-postası gönderildi." mesajıyla
   bayinin detay sayfası açılır.
5. Vadeli çalışacaksa ya da gruptan farklı bir limit / vade verecekseniz **Bayi ayarları**'nı açıp
   cari çalışma şeklini girin (bkz. [Bayi ayarları](#bayi-ayarlari)).

### Bayiye giden hoş geldin e-postası {#hos-geldin}

Bayi kaydedilir kaydedilmez bayiye "Üyeliğiniz oluşturuldu." diye başlayan bir e-posta gider:

- **Şifremi Belirle** düğmesi (düğmeye tıklanamazsa kopyalanacak bağlantı da yazılıdır),
- bağlantının **60 dakika** geçerli olduğu bilgisi,
- e-posta onaylanmadan oluşturulduysa bağlantının önce adresi onaylayacağı notu.

Bayi bağlantıya tıklar, şifresini belirler ve e-posta adresi + şifresiyle giriş yapar.

::: tip Bağlantının süresi geçtiyse
60 dakika içinde kullanılmayan bağlantı "Hoş geldin bağlantısı artık geçerli değil." uyarısı
verir. Bayi giriş ekranındaki şifre sıfırlama ile aynı e-posta adresine yeni bir şifre
belirleme bağlantısı isteyebilir. Panelde hoş geldin e-postasını yeniden gönderen bir düğme
yoktur.
:::

## Hesap durumları {#durumlar}

| Durum | Giriş | Açıklama |
|---|---|---|
| **Aktif** | Yapabilir | Normal kullanım. |
| **Pasif** | Yapamaz | Girişte "Hesabınız pasif durumda. Lütfen yönetici ile iletişime geçin." uyarısı alır. |
| **Kısıtlı** | Yapabilir | Yalnız görüntüler; sipariş verme, form gönderme gibi hiçbir yazma işlemi yapamaz ("Hesabınız kısıtlı modda. Yazma işlemi yapamazsınız."). Yalnız bayi eklenirken seçilebilir. |

Durum, müşteri detayındaki **Durum değiştir** ile Aktif ↔ Pasif arasında değiştirilir.

## Müşteri detayı {#detay}

Listede bir bayinin adına tıklayınca açılır. Üst kısımda adın yanında **tür** (Bayi; vitrin
kuruluysa Müşteri de olabilir), **durum** ve e-posta doğrulanmamışsa **E-posta doğrulanmadı** rozeti görünür.

### Üst düğmeler

| Düğme | Ne yapar |
|---|---|
| **E-postayı onayla** | Yalnız e-posta doğrulanmamışsa görünür. Adresi onaylanmış yapar; üyeye "e-posta adresi bir yönetici tarafından onaylandı" e-postası gider. |
| **E-posta değiştir** | Yeni adrese onay bağlantısı gönderir. Bkz. [E-posta değiştirme](#e-posta). |
| **Durum değiştir** | **Yeni durum** olarak Aktif ya da Pasif seçip **Durumu güncelle**. İşlem etkinlik kaydına yazılır ve üyeye "Üyelik durumunuz … olarak güncellendi." e-postası gider. |
| **2FA sıfırla** | Yalnız üyenin iki adımlı doğrulaması açıksa görünür. Telefonunu ya da doğrulama uygulamasını kaybeden üye için: onay penceresinde **Sıfırla**'ya basınca doğrulama uygulaması bağlantısı ve kurtarma kodları silinir; üye yalnız şifresiyle girip doğrulamayı yeniden kurabilir. İşlem etkinlik kaydına yazılır. |
| **Bayi ayarları** / **Bayiye çevir** | Bayide **Bayi ayarları**, müşteride (vitrin) **Bayiye çevir** yazar. Bkz. [Bayi ayarları](#bayi-ayarlari). |

Panelden bayinin yerine giriş yapma (onun gözünden görme) özelliği yoktur.

### Özet kartı

Üç sütun ve altında bir sayı şeridinden oluşur:

| Bölüm | İçerik |
|---|---|
| Kimlik ve iletişim | Ad soyad, Firma, E-posta, Telefon (varsayılan teslimat adresindeki telefon), E-posta doğrulama tarihi (ya da "Doğrulanmadı"), Kayıt tarihi, Son giriş |
| Fatura ve vergi | Üyenin kendi **Hesabım** ekranında girdiği fatura bilgileri: Fatura türü, Ünvan ya da Ad soyad, kurumsalda Vergi dairesi ve Vergi no, bireyselde TC kimlik no, E-fatura e-postası, Adres. Girilmemişse "Üye henüz fatura bilgisi girmedi." |
| Ticari | Hesap türü (**Bayi**; vitrin kuruluysa **Müşteri**; hesabı henüz açılmamış üyede **Hesap açılmadı**); bayide Bayi grubu, Uygulanan indirim (bayiye özelse "(bayiye özel)"), Bölge deposu, Çalışma şekli (vadelide "· 30 gün" gibi); Durum; Varsayılan teslimat (ilçe / il) |
| Sayı şeridi | Sipariş, Toplam harcama, Ortalama sipariş, Son sipariş, Teklif, İade |

Sipariş, Toplam harcama ve Ortalama sipariş listedeki gibi yalnız ciroya sayılan siparişlerden
hesaplanır (ortalama = toplam harcama ÷ sipariş adedi). Bakiye ve kredi limiti **Cari**
sekmesindedir.

### Sekmeler

| Sekme | İçerik |
|---|---|
| **Siparişler** | Son 20 sipariş: numara, durum, ödeme durumu, ürün sayısı, tutar, tarih. **Tümünü gör** sipariş listesini bu müşteriyle süzülmüş açar. |
| **Cari** | Yalnız "Cari durumu ve müşteri carisini görüntüle" yetkisi olana görünür. Bakiye kartları, açık borçlar, ekstre ve cari işlemleri (tahsilat, dekont, açılış bakiyesi, Excel, yazdır). Bkz. [Cari hesap](/cari/#musteri-carisi). |
| **Teklifler** | Son 20 teklif talebi. Bkz. [Teklifler](/satis/teklifler). |
| **İadeler** | Son 20 iade talebi, nedeni ve iade tutarı. Bkz. [İadeler](/satis/iadeler). |
| **Adresler** | Üyenin kayıtlı **Teslimat adresleri** ve **Fatura adresleri**; varsayılanlar "Varsayılan" etiketiyle. Adresleri üye kendisi yönetir; panelden düzenlenmez. |
| **Etkinlik** | Üyeyle ilişkili son 20 denetim kaydı (kim, ne zaman, ne yaptı). |
| **Oturumlar** | Üyenin son 20 giriş ve çıkış kaydı: cihaz, IP, giriş ve çıkış zamanı, durumu. |

### E-posta değiştirme {#e-posta}

1. **E-posta değiştir**'e basın; pencerede mevcut adres görünür.
2. **Yeni e-posta adresi**'ni yazın. Mevcut adresle aynı olamaz ve başka bir kullanıcıda kayıtlı
   olmamalıdır.
3. **Onay bağlantısı gönder**'e basın. Üyenin açık oturumları **hemen kapatılır** ve yeni adrese
   **E-posta Adresimi Değiştir** bağlantısı gider. Bağlantı **1 gün** geçerlidir.
4. Üye bağlantıya tıklayınca adres değişir, yeni adres onaylanmış sayılır, oturumları yeniden
   kapatılır ve giriş ekranına yönlendirilir. Bundan sonra yeni adresle giriş yapar.

Bağlantı tıklanana kadar e-posta adresi değişmez; üye eski adresiyle giriş yapabilir.

## Bayi ayarları {#bayi-ayarlari}

Detay › **Bayi ayarları** (bayide) ya da **Bayiye çevir** (müşteride, vitrin kuruluysa). Aynı
pencere bayinin grubunu, indirimini, deposunu ve cari çalışma şeklini değiştirir; vitrin
kuruluysa hesabın türünü çevirmek için de kullanılır.

| Alan | Açıklama |
|---|---|
| Bayi grubu | Grup ya da **Grupsuz**. |
| Bayiye özel indirim (%) | 0–100. Boş = grubun oranı. Girilirse grubun oranının yerine geçer. Üründe indirim varsa bayi indirimi uygulanmaz (bkz. [Fiyat ve indirimler](/musteriler/fiyat-ve-indirimler)). |
| Bölge deposu | **Atanmamış (tüm depolar)** ya da bir satılabilir depo. |
| Çalışma şekli | **Gruptan**, **Peşin** ya da **Vadeli (açık hesap)**. |
| Vade (gün) | 0–3650. Boş = gruptan. |
| Kredi limiti | Ana para biriminde. Boş = gruptan. |
| Limit aşılınca | **Gruptan**, **Onaya düşsün** ya da **Engellensin**. |
| Vadesi geçmiş borç varken | **Gruptan**, **Onaya düşsün**, **Engellensin** ya da **Serbest**. |
| İzinli ödeme yöntemleri | Bayinin siparişte kullanabileceği yöntemler (ör. Havale / EFT, Cari hesaba (vadeli), kurulu kart modülleri). Hiçbiri işaretlenmezse grubun ayarı geçerlidir. "Cari hesaba (vadeli)" seçeneği yalnız vadeli çalışan bayiye çıkar. |

Bu alanların anlamı ve örnekleri: [Peşin ve vadeli çalışma](/cari/vadeli-calisma).

::: warning Boş alan "gruptan" demektir
Bayiye özel bir alan boş bırakılırsa grubun değeri geçerlidir. Örneğin grubun kredi limiti
100.000 TL ise bayide kredi limitini boş bırakmak "limitsiz" değil, 100.000 TL demektir.
:::

Pencerenin alt düğmeleri:

- Bayide: **Kaydet** (vitrin kuruluysa yanında **Müşteriye çevir**).
- Müşteride (vitrin): **Vazgeç** ve **Bayiye çevir**.

Müşteri hesapları yalnız vitrin modülüyle vardır; vitrin yoksa **Müşteriye çevir** düğmesi
çıkmaz. **Bayiye çevir** hesabı bayi yapar: üye bundan sonra bayi panelini (`/app`) kullanır ve bayi
indirimi uygulanır. **Müşteriye çevir** hesabı vitrin müşterisi yapar; bayi grubu, bayiye özel
indirim, bölge deposu ve bayiye özel cari ayarlar **temizlenir**. Müşteri her zaman peşin
çalışır. Cari hareketler ve siparişler her iki yönde de olduğu gibi kalır.

### Nasıl yapılır? — Bayiye vadeli çalışma tanımlamak

1. Bayi detayında **Bayi ayarları**'nı açın.
2. **Çalışma şekli**'nde **Vadeli (açık hesap)** seçin.
3. **Vade (gün)** ve **Kredi limiti**'ni girin (grupla aynıysa boş bırakın).
4. **Limit aşılınca** ve **Vadesi geçmiş borç varken** davranışını seçin.
5. **Kaydet**'e basın. "Bayi ayarları kaydedildi." mesajı çıkar; özet kartının **Ticari**
   sütununda çalışma şekli güncellenir.

## Bayi grupları {#bayi-gruplari}

**Bayiler › Bayi Grupları**. Her grubun **tek bir indirim oranı** ve varsayılan **cari
çalışma şekli** vardır. Örneğin "Standart Bayi %10, peşin", "Altın Bayi %15, 60 gün vadeli,
200.000 TL limit".

Tablo sütunları: **Grup** (adı ve açıklaması), **İndirim**, **Çalışma şekli**, **Bayi sayısı**
ve işlemler (**Düzenle**, sil).

| Alan | Açıklama |
|---|---|
| Grup adı | Zorunlu, en fazla 255 karakter (ör. "Altın Bayi"). |
| İndirim oranı (%) | Zorunlu, 0–100. Gruptaki bayilerin indirimi (bayiye özel oran girilmemişse). |
| Açıklama | İsteğe bağlı, en fazla 1000 karakter. |
| Çalışma şekli | Zorunlu. Varsayılan **Peşin**; ya da **Vadeli (açık hesap)**. |
| Vade (gün) | Zorunlu, 0–3650. Varsayılan **30**. |
| Kredi limiti | Boş = **limitsiz**. |
| Limit aşılınca | Varsayılan **Onaya düşsün**; ya da **Engellensin**. |
| Vadesi geçmiş borç varken | Varsayılan **Onaya düşsün**; ya da **Engellensin** / **Serbest**. |
| İzinli ödeme yöntemleri | Hiçbiri işaretlenmezse tüm yöntemler sunulur. |

### Nasıl yapılır?

1. **Yeni grup**'a basın, alanları doldurup **Kaydet**'e basın.
2. Düzenlemek için satırdaki **Düzenle**'yi kullanın. Değişiklik gruptaki bütün bayilere
   (bayiye özel değer girilmemiş alanlarda) hemen yansır.
3. Silmek için sil düğmesine basıp onaylayın. **İçinde bayi olan grup silinemez**: "… grubunda N
   bayi var; önce bayileri başka gruba taşıyın." uyarısı çıkar.

## Yetkiler

Ekranlar ve düğmeler kullanıcının rolüne göre görünür. Örneğin "Bayi gruplarını listele", "Bayi
grubu ekle / güncelle / sil", "Cari durumu ve müşteri carisini görüntüle". Bkz.
[Kullanıcılar, roller ve yetkiler](/yonetim/roller-yetkiler).

## İlgili sayfalar

- [Fiyat ve indirimler](/musteriler/fiyat-ve-indirimler)
- [Kampanyalar](/musteriler/kampanyalar)
- [Cari hesap](/cari/) ve [Peşin ve vadeli çalışma](/cari/vadeli-calisma)
- [Bayinin gördüğü ekranlar](/bayi-paneli/)
- [Sisteme geçiş](/cari/sistem-gecisi)
