# Kullanıcılar

**Ayarlar › Kullanıcılar** — yönetim paneline giren çalışanlarınızın (yönetici hesapları)
listesi. Bayi ve müşteri hesapları burada değil, **Müşteriler** menüsündedir; bkz.
[Müşteriler ve bayiler](/musteriler/).

Bölümün iç menüsü: **Kullanıcılar** · **Yeni Kullanıcı** · **Görevler** · **Yetkiler**.
Görevler ve yetkiler için: [Görevler ve yetkiler](/yonetim/roller-yetkiler).

## Hesap türleri

Sistemde iki tür hesap vardır:

| Tür | Kim | Nereye girer | Nerede yönetilir |
|---|---|---|---|
| **Yönetici** | Siz ve çalışanlarınız | Yönetim paneli (`/panel`) | Ayarlar › Kullanıcılar |
| **Üye** | Bayiler ve müşteriler | Bayi paneli (`/app`) | Müşteriler |

Bir hesabın türü sonradan değiştirilemez.

## Durumlar {#durumlar}

| Durum | Ne olur |
|---|---|
| **Aktif** | Normal kullanım |
| **Pasif** | Giriş yapamaz. Açık oturumu varsa bir sonraki işleminde oturumu kapatılır ve "Hesabınız pasif durumda. Lütfen yönetici ile iletişime geçin." uyarısını görür |
| **Kısıtlı** | Giriş yapar, ekranları görür ama **hiçbir kayıt ekleyemez, değiştiremez, silemez** ("Hesabınız kısıtlı modda. Yazma işlemi yapamazsınız."). Örneğin yalnız raporlara bakacak biri için |

Kısıtlı durumu yalnız kullanıcı oluşturulurken seçilebilir; sonradan **Durum değiştir** ile
yalnız Aktif ya da Pasif yapılabilir.

## Kullanıcı listesi

Sütunlar: **Kullanıcı** (ad, e-posta ve görev; görevi yoksa **Rolsüz**), **Durum**, **Son giriş**,
**Kayıt tarihi**, **İşlem**.

- **Ad veya e-posta ara** kutusuna yazıp **Filtrele**'ye basın; **Sıfırla** aramayı temizler.
- **Görüntüle** kullanıcının detayını açar. Kendi satırınızda bu düğme **Profilim** yazar.
- Liste en yeni kullanıcıdan eskiye sıralıdır, sayfa başına 50 kayıt.

## Yeni kullanıcı {#yeni}

**Ayarlar › Kullanıcılar › Yeni Kullanıcı** — "Kullanıcı Ekle".

| Alan | Açıklama |
|---|---|
| Ad soyad | **Zorunlu**, en çok 255 karakter |
| E-posta adresi | **Zorunlu**, geçerli ve sistemde başka bir hesapta (bayi hesapları dahil) kullanılmayan bir adres |
| Durum | **Zorunlu.** Aktif, Pasif ya da Kısıtlı |
| Görev | **Zorunlu.** Yalnız sizin atayabileceğiniz görevler listelenir (aşağıya bakın). Atayabileceğiniz görev yoksa "Atayabileceğiniz bir rol bulunmuyor." yazar |
| E-posta adresini onayla | İşaretliyse hesap e-postası onaylanmış olarak açılır. İşaretli değilse hoş geldin bağlantısı önce e-postayı onaylar, sonra şifre belirleme ekranına yönlendirir |

Formda şifre alanı yoktur. **Kullanıcı oluştur**'a basınca:

1. Hesap açılır ve kullanıcının detay sayfasına geçilir.
2. Kullanıcıya **"Panel Hesabınız Oluşturuldu"** konulu bir **hoş geldin e-postası** gider.
3. Kullanıcı e-postadaki bağlantıyla **kendi şifresini belirler**. Bağlantı **60 dakika**
   geçerlidir.

Bağlantının süresi dolduysa ("Hoş geldin bağlantısı artık geçerli değil") kullanıcı giriş
ekranındaki **Şifrenizi mi unuttunuz?** ile yeni şifre belirleyebilir.

::: tip Kimler hangi görevi atayabilir?
- **Super Admin** görevi hiçbir formda listelenmez; yalnız kurulumda açılan hesapta vardır.
- **Admin** görevini yalnız Super Admin atayabilir.
- Diğer kullanıcılar yalnız sistem görevi olmayan görevleri (Mağaza Yöneticisi, Satış Sorumlusu
  ve sizin eklediğiniz görevler) atayabilir.
:::

## Kullanıcı detayı {#detay}

Kullanıcının adı, e-postası, görevi ve durumu ile şu bilgiler görünür:

- **E-posta doğrulama** — onaylandığı tarih ya da **Doğrulanmadı**
- **Son giriş** ve **Kayıt tarihi**

İki sekme vardır:

| Sekme | İçerik |
|---|---|
| **Etkinlik** | Kullanıcının yaptığı ve kullanıcıyla ilgili son 20 etkinlik kaydı |
| **Oturumlar** | Son 20 giriş / çıkış kaydı: IP adresi, giriş ve çıkış zamanı. Çıkışı kaydedilmemiş oturumlar **Açık olabilir** olarak işaretlenir |

### Kullanıcı işlemleri {#kullanici-islemleri}

Detay sayfasındaki **Kullanıcı işlemleri** menüsünden:

| İşlem | Ne yapar |
|---|---|
| **E-posta Adresini Onayla** | Yalnız e-postası onaylanmamış kullanıcıda görünür. Adresi onaylı yapar; kullanıcıya bilgilendirme e-postası gider |
| **E-posta Adresini Değiştir** | **Yeni e-posta adresi**'ne onay bağlantısı gönderir (bağlantı 24 saat geçerli). Kullanıcının açık oturumları hemen kapatılır. Bağlantı onaylanınca e-posta değişir ve yeni adres onaylı olur. Yeni adres mevcut adresten farklı olmalı ve başka hesapta kullanılmamalı |
| **Durum Değiştir** | **Aktif** ya da **Pasif**. Kullanıcıya bilgilendirme e-postası gider |
| **Görev Değiştir** | Kullanıcının görevini değiştirir. Yalnız atayabileceğiniz görevler listelenir. Kullanıcıya e-posta gitmez |
| **İki Adımlı Doğrulamayı Sıfırla** | Yalnız iki adımlı doğrulaması açık kullanıcıda görünür. Telefonunu ya da doğrulama uygulamasını kaybeden kullanıcı için: doğrulama uygulaması bağlantısı ve kurtarma kodları silinir; kullanıcı yalnız şifresiyle girip doğrulamayı yeniden kurabilir. Kendi doğrulamanızı buradan sıfırlayamazsınız (**Bilgilerim › Güvenlik**'i kullanın). Super Admin hesabının doğrulamasını yalnız bir Super Admin sıfırlayabilir |

Her işlem [etkinlik kayıtlarına](/yonetim/etkinlik-kayitlari) yazılır.

::: info Her kullanıcının bir görevi vardır
Bir kullanıcıya aynı anda yalnız **bir** görev atanır. Bir kişinin birden çok görevin
yetkilerine ihtiyacı varsa bu yetkileri içeren yeni bir görev oluşturun.
:::

## Nasıl yapılır?

### İşten ayrılan bir çalışanın erişimini kapatmak

1. **Ayarlar › Kullanıcılar**'da kişiyi bulup **Görüntüle**'ye basın.
2. **Kullanıcı işlemleri › Durum Değiştir**'i seçin, **Pasif** yapıp **Durumu güncelle**'ye basın.

Kullanıcı bir sonraki işleminde oturumdan atılır ve bir daha giriş yapamaz. Hesap ve geçmiş
kayıtları silinmez; etkinlik kayıtlarında adı görünmeye devam eder. Panelden kullanıcı silme
işlemi yoktur.

### Yalnız görüntüleyebilen bir kullanıcı açmak

1. **Yeni Kullanıcı**'da **Durum**'u **Kısıtlı** seçin.
2. Görmesini istediğiniz ekranların yetkilerini içeren bir **Görev** seçin.

Kullanıcı bu ekranları görür ama hiçbir değişiklik yapamaz.

## Kendi hesabınız

Kendi adınızı, e-postanızı, şifrenizi, iki adımlı doğrulamayı, oturumlarınızı ve dil / tema
tercihlerinizi kullanıcı menüsündeki **Bilgilerim** ekranlarından yönetirsiniz. Bkz.
[Panel tanıtımı › Hesabım ekranları](/baslangic/panel-tanitimi#hesabim).

## Yetkiler

Kullanıcılar bölümünün yetkileri (listeleme, ekleme, detay, e-posta onaylama / değiştirme, durum
ve görev değiştirme, iki adımlı doğrulamayı sıfırlama) kurulumda **Admin** görevine atanır; diğer
görevlere **Görevler** ekranından eklenebilir. Bkz.
[Görevler ve yetkiler](/yonetim/roller-yetkiler).
