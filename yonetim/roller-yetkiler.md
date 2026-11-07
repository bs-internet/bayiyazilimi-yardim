# Görevler ve yetkiler

Panelde kimin neyi görüp yapabileceği **görevlerle** (rol) belirlenir:

- Panelin her ekranı ve her işlemi ayrı bir **yetkidir** (ör. "Siparişleri listele", "Sipariş
  durumunu değiştir").
- Yetkiler **görevlerde** toplanır (ör. Satış Sorumlusu).
- Her [kullanıcıya](/yonetim/kullanicilar) bir görev verilir; kullanıcı yalnız görevindeki
  yetkilerin ekranlarını menüde görür ve açabilir.

Yetkisi olmayan bir ekranın adresini doğrudan açan kullanıcı "403 — yetkiniz yok" hatası alır.

## Görevler {#gorevler}

**Ayarlar › Kullanıcılar › Görevler** — sütunlar: **Görev**, **İzin sayısı**, **Kullanıcı
sayısı**. Sistem görevleri **Sistem** etiketiyle gösterilir. **Görev ara** ile arama yapılır.

### Hazır gelen görevler {#hazir-gorevler}

| Görev | Kapsam |
|---|---|
| **Super Admin** | **Her şeye** erişir; yetki listesine bakılmaz. Kurulumda açtığınız yönetici bu görevdedir. Görevler listesinde görünmez ve hiçbir formda seçilemez |
| **Admin** | Sistem görevi. Kurulumda **tüm mağaza yetkileriyle** gelir (aşağıdaki "Mağaza:" gruplarının hepsi) |
| **Mağaza Yöneticisi** | Admin ile aynı: tüm mağaza yetkileri |
| **Satış Sorumlusu** | Siparişler (listeleme, detay, durum, ödeme durumu, not, fatura bilgisi, lot değiştirme, toplama listesi), Teklifler (tümü), İadeler (tümü); ayrıca ürünleri, stok durumunu, kargo firmalarını ve para birimlerini **görüntüleme** |
| **Depo Sorumlusu** | Stok (durum, hareketler, giriş / çıkış, transfer, lokasyon değişimi, lot / seri no), Depolar ve lokasyonlar, Mal kabul, Sayım, Tedarikçiler, Kargo firmaları, İadeler; siparişlerde **listeleme, detay, durum değiştirme, lot değiştirme ve toplama listesi**; ürünleri görüntüleme |
| **Katalog Sorumlusu** | Ürünler (görseller dahil), Kategoriler, Markalar, Excel içe aktarma ve ürünleri Excel'e aktarma; ayrıca stok durumunu, stok hareketlerini ve para birimlerini **görüntüleme** |
| **İçerik Editörü** | Sayfalar (listeleme, ekleme, düzenleme, silme). Vitrin modülü kuruluysa onun içerik ekranlarına da yetki verebilirsiniz |

Hazır görevlerin yetkilerini istediğiniz gibi değiştirebilir, yeni görev ekleyebilirsiniz.

::: warning Çekirdek ekranların yetkileri hazır gelmez
Kurulumla gelen görevler yalnız **mağaza** ekranlarının yetkilerini içerir. Şu ekranların
yetkileri kurulumda tanımlı değildir; **Rotalardan Keşfet** ile eklenip bir göreve atanana kadar
bu ekranları **yalnız Super Admin** açabilir:

- Müşteriler listesi, müşteri detayı ve **Yeni Bayi**
- Genel Ayarlar (Genel Ayarlar ekranı, Modüller) ve ETBİS kare kodu yükleme
- Kullanıcılar, Görevler, Yetkiler
- Tanımlamalar › Diller, Bölgeler, Vergi Oranları; Para Birimleri'nde elle ekleme / düzenleme /
  silme / durum değiştirme
- Etkinlik Kayıtları, Ön Bellek Yönetimi

Örneğin Admin görevindeki bir çalışanın bayi ekleyebilmesi için müşteri yetkilerini keşfedip
Admin görevine atamanız gerekir. Bkz. [Nasıl yapılır?](#nasil-yapilir)
:::

**Herkese açık ekranlar:** Başlangıç ekranı, Genel Ayarlar ve Tanımlamalar'ın **Genel Bakış**
sayfaları ve her kullanıcının kendi **Bilgilerim** ekranları yetki gerektirmez.

### Yeni görev {#yeni-gorev}

**Görevler › Yeni Görev**:

| Alan | Açıklama |
|---|---|
| Görev adı | **Zorunlu**, en çok 255 karakter, benzersiz |
| İzinler | Gruplar halinde listelenen yetkiler. Her grubun **Tümünü Seç** / **Tümünü Kaldır** düğmesi vardır |

Bazı yetkiler başka bir yetkiyi gerektirir; bunların yanında **Gerektirir: …** yazar. Örneğin
"Sipariş durumunu değiştir" için siparişleri listeleme yetkisi de gerekir. Bir işlem yetkisini
işaretlediğinizde gerektirdiği yetkiler de kendiliğinden eklenir: bölümü görme yetkisi olmadan
o bölümde işlem yapılamaz.

**Görev oluştur** ile kaydedilir.

### Görevi düzenleme ve silme

Listede **Düzenle** ile görev açılır; ad ve izinler değiştirilip **Değişiklikleri kaydet**'e
basılır. Değişiklik o göreve sahip tüm kullanıcılara hemen uygulanır.

- **Super Admin** ve **Admin** sistem görevleridir: **silinemez, adı değiştirilemez** ("Sistem
  görevleri silinemez. İzinlerini düzenleyebilirsiniz."). Admin'in izinleri düzenlenebilir.
- **Sil** ile görev silinir. **Kullanıcısı olan görev silinemez** ("Bu göreve atanmış
  kullanıcılar olduğu için silinemiyor."); önce kullanıcıları başka göreve alın.

## Yetkiler {#yetkiler}

**Ayarlar › Kullanıcılar › Yetkiler** — sistemdeki yetkilerin listesi, gruplar halinde
(ör. "Mağaza: Siparişler"). Sütunlar: **Etiket** (anlaşılır ad), **İzin Adı** (teknik ad),
**Görevler** (bu yetkiye sahip görevler).

Yetkinin teknik adı, panelde açtığı ekranın adıyla aynıdır. Bu sayede **her panel ekranı
otomatik olarak kendi yetkisiyle korunur**: yetkisi listede olmayan bir ekranı yalnız Super Admin
açabilir.

### Rotalardan Keşfet {#rotalardan-kesfet}

**Yetkiler › Rotalardan Keşfet** — panelde olup henüz yetki listesinde **bulunmayan** ekran ve
işlemleri listeler. Yeni bir modül kurduğunuzda ya da çekirdek ekranlara yetki vermek
istediğinizde kullanılır.

| Sütun | Açıklama |
|---|---|
| Rota Adı | Ekranın / işlemin teknik adı |
| Önerilen Grup | Teknik addan türetilen grup (ör. `panel.settings.users.index` → "Settings / Users") |
| Önerilen Etiket | İşlem türünden türetilen etiket: Listele, Oluştur, Detay, Güncelle, Sil, Durum Değiştir, Silinenler, Geri Yükle, Kalıcı Sil … |

1. Eklemek istediklerinizi işaretleyin (**Tümünü seç** / **Tümünü kaldır**). Altta "*x* / *y*
   seçili" yazar.
2. **Seçilenleri Ekle**'ye basın. Yetkiler önerilen grup ve etiketle listeye eklenir.
3. Gerekirse **Yetkiler** listesinde **Düzenle** ile grup ve etiketi Türkçeleştirin.
4. **Görevler**'de ilgili göreve atayın.

Liste boşsa "Eklenmemiş panel rotası yok." yazar. Kişisel hesap ekranları (Bilgilerim, Güvenlik
…) yetkiyle yönetilmediği için burada listelenmez.

::: info Yetkiyi eklemek kimseye erişim vermez
Keşfedilen yetkiler hiçbir göreve kendiliğinden atanmaz. Ekran, yetki bir göreve atanana kadar
yine yalnız Super Admin'e açıktır.
:::

### Yeni izin

**Yetkiler › Yeni İzin** — bir ekrana bağlı olmayan özel izinler için. Ekrana bağlı izinler için
**Rotalardan Keşfet**'i kullanın.

| Alan | Açıklama |
|---|---|
| İzin adı | **Zorunlu**, en çok 150 karakter, benzersiz. Yalnız küçük harf, rakam, nokta, tire ve alt çizgi. Sonradan değiştirilemez |
| Grup | İsteğe bağlı, en çok 100 karakter (ör. "Tanımlamalar / Birimler"). Boşsa "Diğer" grubunda görünür |
| Etiket | İsteğe bağlı, en çok 150 karakter (ör. "Listele"). Boşsa izin adı görünür |

**Düzenle** ile yalnız grup ve etiket değiştirilir; izin adı değiştirilemez.

### İzin silme

**Sil** ile izin listeden kaldırılır ve sahip olan görevlerden çıkar (onay penceresinde kaç
görevden kaldırılacağı yazar). Silinen izinler **Silinenler** sayfasındadır: **Geri Yükle** ile
listeye döner, **Kalıcı Sil** ile tamamen kaldırılır.

Ekrana bağlı bir izni silerseniz o ekranı yine yalnız Super Admin açabilir.

## Nasıl yapılır? {#nasil-yapilir}

### Bir çalışana yalnız sipariş ve teklif yetkisi vermek

1. **Ayarlar › Kullanıcılar › Yeni Kullanıcı**'da hesabı açın, **Görev** olarak **Satış
   Sorumlusu**'nu seçin.
2. Daha dar bir kapsam istiyorsanız **Görevler › Yeni Görev** ile kendi görevinizi oluşturup
   yalnız istediğiniz izinleri işaretleyin.

### Admin görevine müşteri ve kullanıcı yönetimini açmak

1. **Ayarlar › Kullanıcılar › Yetkiler › Rotalardan Keşfet**'i açın.
2. `panel.members.` ile başlayanları (müşteriler) ve istiyorsanız `panel.settings.users.`
   ile başlayanları (kullanıcılar) işaretleyip **Seçilenleri Ekle**'ye basın.
3. **Görevler**'de **Admin**'i açın, yeni eklenen grupları işaretleyip **Değişiklikleri
   kaydet**'e basın.

### Yeni kurulan bir modülün ekranlarını açmak

Modül kurulduğunda (`bayi:install`) yetkileri listeye eklenir ama hiçbir göreve atanmaz. Modülün
yetkilerini **Görevler**'de ilgili görevlere atayın. Listede görünmüyorlarsa **Rotalardan
Keşfet** ile ekleyin.

## Etkinlik kaydı

Görev oluşturma, düzenleme, silme, izin değişiklikleri ve kullanıcıya görev atama
[etkinlik kayıtlarına](/yonetim/etkinlik-kayitlari) yazılır.
