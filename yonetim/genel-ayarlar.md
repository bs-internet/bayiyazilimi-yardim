# Genel ayarlar

**Ayarlar › Genel Ayarlar** — sistemin kimliği, varsayılanları, firma ve iletişim bilgileri,
site erişimi ve modüller. Menüdeki **Genel Ayarlar**'a tıklayınca **Genel Bakış** açılır.

## Genel Bakış

Bölümün giriş sayfası. Her alt ekran bir kart olarak listelenir; kartta o ekranın kısa özeti
yazar, eksik ya da dikkat isteyen bir durum varsa uyarı rengiyle gösterilir:

| Kart | Özet |
|---|---|
| Genel Ayarlar | Uygulama adı |
| Kurumsal Bilgiler | Firma ünvanı; vergi dairesi ya da vergi numarası boşsa **"Vergi bilgileri eksik"** uyarısı |
| İletişim Bilgileri | E-posta · telefon |
| Site Erişimi | "Yalnız bayilere açık", "Herkese açık" ya da **"Bakım modu açık; site ziyaretçilere kapalı"** uyarısı |
| Modüller | Kurulu modülleri açma / kapatma |

Kartlar kullanıcının yetkisine göre gösterilir. Kurulu modüller bu bölüme kendi ayar
ekranlarını ekleyebilir (ör. Vitrin modülünün site ayarları).

## Genel Ayarlar sekmesi {#genel-sekme}

**Ayarlar › Genel Ayarlar › Genel Ayarlar** — panel kimliği ve varsayılan sistem tercihleri.

### Kimlik

| Alan | Açıklama |
|---|---|
| Uygulama adı | Panelin adı. Kenar çubuğunda, tarayıcı sekmesinde, giriş ekranında görünür. En çok 255 karakter. Boş bırakılırsa kurulumda girilen ad kullanılır |
| Slogan | Kısa tanım. En çok 255 karakter, isteğe bağlı |
| Logo | Açık tema ve genel kullanım için logo. Giriş ekranında ve e-postaların üst kısmında görünür. JPG / PNG, en çok 2 MB |
| Logo dark | Koyu temada kullanılan logo. JPG / PNG, en çok 2 MB |
| Favicon | Tarayıcı sekmesi ikonu; kenar çubuğunda uygulama adının yanında da görünür. JPG / PNG, en çok 512 KB. Kare bir görsel kullanın |

Görseller **seçtiğiniz anda yüklenir**; ayrıca **Kaydet**'e basmanız gerekmez. Yüklü görseli
kaldırırsanız Bayi Yazılımı'nın kendi logosu kullanılır. Logolar e-postalarda da göründüğü için
PNG ya da JPG kullanılır (SVG kabul edilmez).

### Varsayılanlar {#varsayilanlar}

Değerler [Tanımlamalar](/yonetim/tanimlamalar)'daki **aktif** kayıtlardan seçilir. Pasif bir
kayıt listede görünmez.

| Alan | Nerede kullanılır |
|---|---|
| Ülke | Adres formlarında önce seçili gelen ülke; Kurumsal Bilgiler'de firma ülkesinin varsayılanı |
| Para birimi | Sistemin **ana para birimi**: cari hesaplar, raporlar ve başlangıç ekranı bu birimle tutulur. Kur tablosunda değeri her zaman 1'dir |
| Vergi oranı | Yeni ürünlerde önce seçili gelen KDV oranı; Excel aktarımında KDV'si boş bırakılan ürünlere de bu oran verilir |
| Dil | Kullanıcı kendi dilini seçmediyse arayüz dili |
| Zaman dilimi | Kullanıcı kendi zaman dilimini seçmediyse tarih ve saatler bu dilimle gösterilir. Kurulumda Europe/Istanbul |

**Kaydet** ile kaydedilir.

::: danger Ana para birimi kilitlenir
Ana para birimi **ilk sipariş ya da ilk cari hareket oluştuktan sonra değiştirilemez**; alanın
altında "İlk sipariş / cari hareket oluştuğu için artık değiştirilemez." yazar ve alan kapanır.
TL dışında (ör. USD, EUR) çalışacaksanız bunu satışa başlamadan önce ayarlayın.
:::

Varsayılan olarak seçili bir ülke, para birimi, vergi oranı ya da dil **pasifleştirilemez ve
silinemez**. Önce burada başka bir kaydı varsayılan yapın. Bkz.
[Tanımlamalar › Varsayılan kayıt kuralı](/yonetim/tanimlamalar#varsayilan-kurali).

## Kurumsal Bilgiler {#kurumsal}

**Ayarlar › Genel Ayarlar › Kurumsal Bilgiler** — sitede, e-postalarda ve belgelerde görünen
firma ünvanı, vergi bilgileri ve adres.

### Firma

| Alan | Açıklama |
|---|---|
| Firma Ünvanı | **Zorunlu**, en çok 255 karakter. Belgelerde ve e-postalarda görünen resmi ünvan |
| Vergi dairesi | En çok 255 karakter |
| Vergi no | En çok 32 karakter |
| MERSİS no | En çok 32 karakter |

Vergi dairesi ya da vergi no boşsa Genel Bakış'ta **"Vergi bilgileri eksik"** uyarısı görünür.

### Adres

Firmanın resmi adresi; sitede, iletişim sayfasında ve belgelerde tek satır olarak görünür.

| Alan | Açıklama |
|---|---|
| Ülke | **Zorunlu.** Boşsa varsayılan ülke seçili gelir |
| İl | **Zorunlu.** Seçilen ülkenin illeri; listede arama yapılabilir |
| İlçe | **Zorunlu.** Seçilen ilin ilçeleri |
| Açık adres | **Zorunlu**, en çok 500 karakter. Mahalle, cadde / sokak, bina ve kapı no |
| Posta kodu | En çok 16 karakter |

### ETBİS

Elektronik Ticaret Bilgi Sistemi kaydınızın kare kodu; vitrinin alt bilgisinde gösterilir
(Vitrin modülü kuruluysa).

| Alan | Açıklama |
|---|---|
| Kare kod | ETBİS'ten indirdiğiniz kare kod görseli. JPG / PNG (WEBP de kabul edilir), en çok 1 MB. Seçtiğiniz anda yüklenir; yenisi eskisinin yerine geçer |
| Doğrulama bağlantısı | İsteğe bağlı. Girilirse kare koda tıklayan ziyaretçi bu adrese gider. `https://` ile başlamalı, en çok 500 karakter |

Diğer alanlar **Kaydet** ile kaydedilir.

## İletişim Bilgileri {#iletisim}

**Ayarlar › Genel Ayarlar › İletişim Bilgileri** — e-posta, telefon, WhatsApp, çalışma saatleri,
iletişim sayfası ve sosyal medya. Firma adresi bu ekranda değil, Kurumsal Bilgiler'dedir.

### İletişim

Alt bilgide ve iletişim sayfasında yayınlanır.

| Alan | Açıklama |
|---|---|
| E-posta | **Zorunlu**, geçerli bir e-posta. Sitede yayınlanır; iletişim formu mesajları buraya gelir |
| Sipariş/teklif bildirim e-postası | Yeni sipariş, teklif talebi, iade talebi, havale bildirimi ve müşterinin teklife verdiği yanıtların bildirimi bu adrese gider. **Sitede görünmez.** Tek bir e-posta adresi yazılır. **Boş bırakılırsa bu bildirimler hiç gönderilmez** |
| Telefon | En çok 255 karakter |
| WhatsApp | En çok 32 karakter |
| Çalışma saatleri | En çok 255 karakter. Varsayılan "Pzt - Cum: 09:00 - 18:00" |

### İletişim sayfası

Hakkımızda, KVKK ve sözleşme metinleri bu ekranda değil, **İçerik › Sayfalar** ekranından
düzenlenir.

| Alan | Açıklama |
|---|---|
| Giriş metni | İletişim sayfasının üstündeki metin. En çok 2000 karakter |
| Harita (Google Maps embed URL) | Google Haritalar'da konumunuzu açın → **Paylaş** → **Harita yerleştir** → çıkan koddaki `src="…"` içindeki adresi yapıştırın. Geçerli bir adres olmalı, en çok 2000 karakter |

### Sosyal medya

Instagram, LinkedIn, YouTube, X (Twitter), Facebook. Her biri hesabınızın tam adresi
(`https://…`), en çok 255 karakter. Alt bilgide ve iletişim sayfasında gösterilir; **boş
bırakılan hesap gizlenir**.

**Kaydet** ile kaydedilir.

## Site Erişimi {#site-erisimi}

**Ayarlar › Genel Ayarlar › Site Erişimi** — sitenin kimlere açık olduğunu belirler. Yönetim
paneli her durumda yöneticilere açıktır.

| Alan | Açıklama |
|---|---|
| Bakım modu | Açıkken site yalnız yöneticilere açıktır. Bayiler (bayi paneli dahil), müşteriler ve ziyaretçiler **bakım sayfasını** görür. Giriş ekranı açık kalır ki yöneticiler girebilsin |
| Bakım sayfası mesajı | Bakım sayfasında gösterilecek metin. En çok 1000 karakter. Varsayılan: "Sitemizde bakım çalışması yapılmaktadır. Kısa süre içinde yeniden hizmetinizdeyiz." |
| Bayilere özel | **Yalnız Vitrin modülü kuruluysa görünür.** Açıkken vitrin yalnız oturum açmış bayilere açılır; ziyaretçiler giriş sayfasına yönlendirilir ve yeni kayıt kapanır |

Vitrin modülü yoksa sistem zaten **yalnız bayilere açıktır**: ziyaretçiler giriş ekranına
yönlendirilir, herkese açık kayıt yoktur.

**Kaydet** ile kaydedilir. Bakım modu açıkken Genel Bakış'taki Site Erişimi kartı uyarı rengiyle
"Bakım modu açık" yazar ve bayi panelindeki mağaza bağlantısı gizlenir.

### Nasıl yapılır? Siteyi geçici olarak kapatmak

1. **Ayarlar › Genel Ayarlar › Site Erişimi**'ni açın.
2. **Bakım modu**'nu açın, **Bakım sayfası mesajı**'nı düzenleyin.
3. **Kaydet**'e basın. Bayileriniz ve ziyaretçiler artık bakım sayfasını görür; siz panelde
   çalışmaya devam edersiniz.
4. İşiniz bitince **Bakım modu**'nu kapatıp yeniden kaydedin.

## Modüller

**Ayarlar › Genel Ayarlar › Modüller** — kurulu modülleri açıp kapatma ve sunulan modüllerin
listesi. Ayrıntılar: [Modüller](/yonetim/moduller).

## Yetkiler

Bu ekranlardaki her işlem ayrı bir yetkidir ve [görevlere](/yonetim/roller-yetkiler) atanır.
Kurumsal Bilgiler, İletişim Bilgileri ve Site Erişimi için görüntüleme ve güncelleme yetkileri
hazır gelir (**Mağaza: İçerik** grubunda). Genel Ayarlar ve Modüller ekranlarının yetkileri
**Yetkiler › Rotalardan Keşfet** ile eklenmeden yalnız Super Admin bu ekranları açabilir.
