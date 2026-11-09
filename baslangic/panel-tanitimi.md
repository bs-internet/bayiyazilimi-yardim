# Panel tanıtımı

Yönetim paneli (`/panel`) sizin ve çalışanlarınızın kullandığı alandır. Bu sayfa girişten
başlayarak panelin genel düzenini, başlangıç ekranını ve her kullanıcının kendi hesap
ekranlarını anlatır.

## Giriş {#giris}

Giriş ekranı (`/login`) yöneticiler ve bayiler için ortaktır. Giriş yapan kişi hesap türüne göre
kendi alanına yönlendirilir: yöneticiler **yönetim paneline**, bayiler **bayi paneline**.

| Alan | Açıklama |
|---|---|
| E-posta adresi | Hesabın e-posta adresi |
| Şifre | Hesabın şifresi |
| Beni hatırla | İşaretlerseniz tarayıcıyı kapatıp açtığınızda yeniden şifre sorulmaz. Ortak bilgisayarlarda işaretlemeyin |

- Aynı e-posta ve IP adresinden **dakikada en çok 5** giriş denemesi yapılabilir; aşılırsa bir
  dakika beklemeniz istenir.
- **Pasif** hesaplar giriş yapamaz ("Hesabınız pasif durumda" uyarısı). **Kısıtlı** hesaplar
  girer ama hiçbir kayıt ekleyemez / değiştiremez. Bkz. [Kullanıcılar](/yonetim/kullanicilar#durumlar).
- E-posta adresi onaylanmamış hesap giriş yaptığında önce **E-posta doğrulama** ekranını görür;
  e-postadaki bağlantıya tıklamadan panele geçemez. Bu ekrandaki **Doğrulama e-postasını yeniden
  gönder** ile bağlantı tekrar gönderilir.
- Yeni bir cihazdan ya da tarayıcıdan giriş yapıldığında hesabın sahibine **"Farklı bir cihazdan
  oturum açıldı"** e-postası gider.

Bayi Yazılımı'nın çekirdeğinde ziyaretçiler kendileri **kayıt olamaz**; bayi hesaplarını siz
açarsınız (bkz. [Müşteriler ve bayiler](/musteriler/)). Herkese açık kayıt yalnız Vitrin eklentisiyle
gelir.

### Şifremi unuttum {#sifremi-unuttum}

1. Giriş ekranında **Şifrenizi mi unuttunuz?** bağlantısına tıklayın.
2. E-posta adresinizi yazıp **Şifre sıfırlama bağlantısı gönder**'e basın.
3. Gelen e-postadaki bağlantıyı açın (bağlantı **60 dakika** geçerlidir).
4. **Şifreyi sıfırla** ekranında yeni şifrenizi iki kez yazın.

Şifre değişince size "Şifreniz değiştirildi" e-postası gelir. Aynı e-posta için dakikada en çok
3 sıfırlama bağlantısı istenebilir.

**Şifre kuralları:** en az 12 karakter; büyük ve küçük harf, rakam ve sembol içermeli; daha önce
internete sızmış şifre listelerinde bulunmamalı.

### İki adımlı doğrulama ekranı {#iki-adimli-giris}

Hesabında iki adımlı doğrulama açık olan kullanıcı, şifresinden sonra **İki adımlı doğrulama**
ekranını görür:

- **Kimlik doğrulama kodu** — telefonunuzdaki doğrulama uygulamasında (Google Authenticator,
  Microsoft Authenticator, 1Password vb.) görünen 6 haneli kodu girip **Devam et**'e basın.
- Telefonunuza ulaşamıyorsanız **kurtarma kodu ile giriş yapın** bağlantısına tıklayın ve
  kurtarma kodlarınızdan birini girin. Her kurtarma kodu **bir kez** kullanılabilir.

Dakikada en çok 5 kod denemesi yapılabilir.

## Panelin düzeni {#duzen}

### Üst çubuk

Her ekranın üstünde:

- Solda **menü düğmesi** (kenar çubuğunu daraltır / açar) ve bulunduğunuz yerin yolu
  (ör. Tanımlamalar › Para Birimleri).
- Sağda **Mağazayı aç** (vitrin eklentisi kuruluysa; siteyi yeni sekmede açar), **Bildirimler** (zil simgesi) ve adınızın
  yazdığı **kullanıcı menüsü**: **Bilgilerim**, **Bildirimler**, **Oturumu Kapat**.

Yeni sürümün dosyaları yüklenmiş ama güncelleme tamamlanmamışsa (ya da bir eklentinin kurulum
adımı bekliyorsa) **Super Admin** üst çubuğun altında sarı bir uyarı ve **Güncellemeyi tamamla**
düğmesi görür. Bkz. [Güncelleme ve yedekleme](/baslangic/guncelleme-yedekleme#panel-uyarisi).

### Kenar çubuğu (menü) {#menu}

Menü gruplar halindedir. Her kullanıcı yalnız **görevinin izin verdiği** öğeleri görür.

| Grup | Öğeler |
|---|---|
| **Platform** | Başlangıç · Bayiler (Bayiler, Cari Durum, Yeni Bayi, Bayi Grupları) · Kampanyalar · Raporlar |
| **Mağaza** | Siparişler · Teklifler · İadeler · Ödemeler (Tahsilatlar, Havale Bildirimleri, Çek / Senet, Geciken Ödemeler) · Katalog (Ürünler, Yeni Ürün, Kategoriler, Markalar, İçe / Dışa Aktar) · Stok (Stok Durumu, Toplama Listesi, Mal Kabul, Sayım, Stok Hareketleri, Lot / Seri No, Depolar, Stok Ayarları) |
| **Ayarlar** | Genel Ayarlar · Kullanıcılar · Tanımlamalar · Etkinlik Kayıtları · Ön Bellek Yönetimi |

- **Çek / Senet** yalnız Cari Ayarları'nda çek / senet açıksa, **Lot / Seri No** yalnız Stok
  Ayarları'nda izlenebilirlik açıksa görünür.
- Kurulu eklentiler menüye kendi öğelerini ekler. [Vitrin eklentisi](/vitrin/) kuruluysa
  **Bayiler** menüsünün adı **Müşteriler** olur (bayiler ve vitrin müşterileri birlikte) ve
  **İçerik** grubu (Ana Sayfa, Menüler, Görünüm, Slider, Sayfalar) eklenir.
- **Genel Ayarlar**, **Kullanıcılar**, **Tanımlamalar**, **Ödemeler**, **Kampanyalar** ve
  **Raporlar** tıklanınca bir bölüm sayfası açar; bölümün alt ekranları sayfanın içindeki
  menüdedir. Bu yardımda yollar bu iç menüyle birlikte yazılır, ör. **Ayarlar › Tanımlamalar ›
  Vergi Oranları**.
- Kenar çubuğu daraltıldığında yalnız simgeler kalır; alt menüler simgenin üzerine gelince açılır
  menü olarak görünür.

## Başlangıç ekranı {#baslangic}

**Platform › Başlangıç** — "Mağazanızın son 30 günlük özeti." Kartların her biri yalnız ilgili
yetkiye sahip kullanıcıya gösterilir; hiçbirine yetkiniz yoksa "Panelde görüntüleyebileceğiniz
bir özet yok" yazar.

Tutarlar sistemin **ana para birimiyle** gösterilir; başka para birimindeki siparişler sipariş
anındaki kurla çevrilir. **İptal edilen**, **başarısız** ve **ödemesi iade edilen** siparişler
ciroya katılmaz.

### Özet kartları

| Kart | Ne gösterir | Gereken yetki |
|---|---|---|
| **Ciro** | Son 30 günün toplam sipariş tutarı | Siparişleri listele |
| **Siparişler** | Son 30 günün sipariş sayısı | Siparişleri listele |
| **Ortalama sipariş** | Sipariş başına tutar (ciro ÷ sipariş sayısı) | Siparişleri listele |
| **Yeni üye** | Son 30 günde açılan üye hesabı; altında "*y* bayi" (vitrin kuruluysa "*x* müşteri · *y* bayi") kırılımı | Müşterileri listeleme |

Her kartta **önceki 30 güne göre değişim** yüzdesi gösterilir.

### Grafikler

- **Gelir** — son 30 günün günlük cirosu ve dönem toplamı; grafiğin üzerine gelince o günün
  cirosu ve sipariş sayısı görünür.
- **Sipariş durumları** — son 30 günde oluşan siparişlerin durumlara göre dağılımı (iptal
  edilenler dahil).

### Bekleyen işler

İlgilenilmesi gereken kayıtların sayısı; her satır ilgili listeye götürür:

| Satır | Neyi sayar |
|---|---|
| **İşlem bekleyen teklifler** | Yanıt bekleyen teklif talepleri (yeni ve revize istenen) |
| **Bekleyen iadeler** | İncelenecek iade talepleri |
| **Ödeme bekleyen** | Havale / EFT onayı bekleyen siparişler (iptal / başarısız hariç) |
| **Stokta olmayan** | Stoğu 0 veya altında ürünler |

### Listeler

- **Son siparişler** — en son oluşturulan 8 sipariş: numara, müşteri, tarih, durum ve tutar
  (siparişin kendi para birimiyle). **Tümü** sipariş listesini açar.
- **En çok satanlar** — son 30 günde satılan **adede** göre ilk 5 ürün, adet ve ciro.
- **Son hareketler** — sistemdeki son 8 etkinlik kaydı (kim, ne yaptı). Yalnız Etkinlik
  Kayıtları yetkisi olanlar görür; **Tümü** etkinlik kayıtları ekranını açar. Bkz.
  [Etkinlik kayıtları](/yonetim/etkinlik-kayitlari).

## Hesabım ekranları {#hesabim}

Kullanıcı menüsünden **Bilgilerim**'e tıklayınca kişisel hesap ekranları açılır. Bu ekranlar
yetkiyle sınırlanmaz: her panel kullanıcısı kendi bilgilerine erişir. Sol menüde: **Bilgilerim**,
**Bildirimler**, **Oturum Kayıtları**, **Güvenlik**, **Tercihler**.

### Bilgilerim

| Alan | Açıklama |
|---|---|
| Ad soyad | Zorunlu, en çok 255 karakter. **Kaydet** ile kaydedilir |
| E-posta adresi | Doğrudan düzenlenmez; **E-posta adresini değiştir** düğmesi kullanılır |

**E-posta adresinizi değiştirmek için:**

1. **E-posta adresini değiştir**'e basın.
2. **Yeni e-posta adresi**'ni yazıp **E-postayı değiştir**'e basın. Yeni adres mevcut adresten
   farklı olmalı ve başka bir hesapta kullanılmıyor olmalı.
3. Adresiniz hemen değişir, **tüm cihazlardaki oturumlarınız kapatılır** ve yeni adrese doğrulama
   e-postası gider.
4. Yeni adresinizle giriş yapın ve e-postadaki bağlantıyla adresinizi doğrulayın.

### Bildirimler {#bildirimler}

Hesabınıza gelen panel içi bildirimler (ör. kritik stok, şifreniz değişti, iki adımlı doğrulama
açıldı, yeni cihazdan giriş). Okunmamış bildirimler **Yeni** etiketiyle gösterilir;
**Okundu olarak işaretle** ile işaretlersiniz. Hangi olayların bildirim oluşturduğu:
[E-posta ve bildirimler](/yonetim/e-posta-bildirimleri).

Bildirimler için ayrı bir tercih ekranı yoktur; panel içi bildirimler kapatılamaz.

### Oturum Kayıtları {#oturumlar}

Hesabınızın açık olduğu cihazlar: tarayıcı / cihaz, IP adresi, giriş zamanı ve son hareket.
Kullandığınız cihaz **Bu cihaz** olarak işaretlidir ve buradan kapatılamaz. Tanımadığınız bir
cihazı **Oturumu kapat** ile sonlandırın; ardından şifrenizi değiştirmeniz önerilir.

### Güvenlik

Bu ekran açılırken güvenlik için şifreniz yeniden sorulabilir (**Şifreyi doğrula**). Şifreyi bir
kez doğruladıktan sonra 3 saat boyunca tekrar sorulmaz.

**Şifreyi güncelle:**

| Alan | Açıklama |
|---|---|
| Mevcut şifre | Şu anki şifreniz |
| Yeni şifre | [Şifre kurallarına](#sifremi-unuttum) uymalı |
| Yeni şifre tekrar | Yeni şifrenin aynısı |

**Şifreyi kaydet** ile kaydedilir. Bu işlem dakikada en çok 6 kez yapılabilir.

#### İki adımlı doğrulama {#iki-adimli-dogrulama}

İki adımlı doğrulama açıkken girişte şifreye ek olarak telefonunuzdaki doğrulama uygulamasının
ürettiği kod istenir. Özellikle Super Admin ve yönetici hesaplarında açmanız önerilir.

**Açmak için:**

1. Telefonunuza bir doğrulama uygulaması kurun (Google Authenticator, Microsoft Authenticator vb.).
2. **Güvenlik** ekranında **2FA aç**'a basın.
3. Açılan pencerede uygulamayla **QR kodu tarayın** ya da "veya kodu elle girin" altındaki
   kurulum anahtarını uygulamaya yazın. **Devam et**'e basın.
4. Uygulamanın gösterdiği **6 haneli kodu** girip **Doğrula**'ya basın.

Kod doğrulanmadan iki adımlı doğrulama devreye girmez; pencereyi kapatırsanız aynı ekranda
**Kuruluma devam et** düğmesi görünür.

**Kurtarma kodları:** iki adımlı doğrulama açıldıktan sonra **2FA kurtarma kodları** bölümü
görünür. **Kurtarma kodlarını göster** ile kodları açın ve güvenli bir yerde (ör. parola
yöneticisi) saklayın. Telefonunuzu kaybederseniz girişte bu kodlardan birini kullanırsınız; her
kod bir kez kullanılır. **Kodları yenile** eski kodları geçersiz kılar ve yenilerini üretir.

**Kapatmak için:** **2FA kapat**'a basıp onaylayın.

Açma ve kapatma işlemleri hesabınıza panel içi bildirim olarak düşer.

::: warning Telefonunuzu ve kurtarma kodlarınızı kaybettiyseniz
Yetkili başka bir yönetici **Ayarlar › Kullanıcılar** › kullanıcı detayı › **Kullanıcı
işlemleri › İki Adımlı Doğrulamayı Sıfırla** ile doğrulamanızı sıfırlayabilir; ardından
yalnız şifrenizle girip yeniden kurarsınız. Bkz.
[Kullanıcılar › Kullanıcı işlemleri](/yonetim/kullanicilar#kullanici-islemleri). Kendi
doğrulamanızı bu menüden sıfırlayamazsınız; Super Admin hesabının doğrulamasını yalnız başka bir
Super Admin sıfırlayabilir. Bu yüzden kurtarma kodlarınızı mutlaka saklayın.
:::

### Tercihler {#tercihler}

| Alan | Açıklama |
|---|---|
| Görünüm | **Açık**, **Koyu** ya da **Sistem** (bilgisayarınızın ayarını izler). Seçim anında uygulanır ve bu tarayıcıda hatırlanır |
| Arayüz dili | Aktif dillerden biri. Bkz. [Tanımlamalar › Diller](/yonetim/tanimlamalar#diller) |
| Zaman dilimi | Tarih ve saatlerin gösterileceği zaman dilimi |

Dil ve zaman dilimi **Kaydet** ile kaydedilir. Seçmediğiniz sürece
[Genel Ayarlar](/yonetim/genel-ayarlar#varsayilanlar)'daki varsayılan dil ve zaman dilimi
geçerlidir.

## Çıkış

Kullanıcı menüsünden **Oturumu Kapat**. Oturum 120 dakika işlem yapılmazsa da kendiliğinden
kapanır (**Beni hatırla** işaretli değilse).
