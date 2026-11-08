# E-posta ve bildirimler

Sistem iki kanaldan bildirim gönderir:

| Kanal | Nerede görünür |
|---|---|
| **E-posta** | Alıcının e-posta kutusu |
| **Panel içi bildirim** | Yöneticiler için panelde zil simgesi › **Bildirimler**; bayiler için bayi panelindeki bildirimler |

Bu sayfa çekirdekte (eklentisiz) gönderilen tüm bildirimleri listeler. Kurulu eklentiler (Vitrin,
ödeme eklentileri) kendi bildirimlerini ekleyebilir.

## Alıcılar nereden ayarlanır? {#alicilar}

| Ayar | Nerede | Neyi etkiler |
|---|---|---|
| **Bildirim e-postası** | **Ayarlar › Tanımlamalar › Satış Ayarları › Bildirimler** (bkz. [Satış ayarları](/satis/satis-ayarlari#bildirimler)) | Yeni sipariş, teklif talebi, iade talebi, havale bildirimi ve müşterinin teklif yanıtı e-postalarının **firma tarafındaki** alıcısı. Tek adres. **Boşsa bu e-postalar gönderilmez** |
| **Kritik stok bildirimi** | **Mağaza › Stok › Stok Ayarları** | Kapalıysa kritik stok / stok tükendi bildirimi gönderilmez. Açıksa, **stok durumunu görüntüleme** yetkisi olan tüm aktif panel kullanıcılarına (Super Admin dahil) gider |
| **Gönderen adı ve adresi** | Sunucudaki `.env` dosyası (`MAIL_FROM_ADDRESS`, `MAIL_FROM_NAME`) | Tüm e-postaların "Kimden" bilgisi. Bkz. [VPS › E-posta](/baslangic/vps#e-posta) |

Müşteriye giden sipariş, teklif ve iade e-postaları **siparişte / talepte yazılı e-posta
adresine** gider. Hesap e-postaları (şifre, hoş geldin, durum) hesabın e-posta adresine gider.

E-posta konularının başındaki firma adı ve e-postanın üst / alt kısmındaki ad, **Genel
Ayarlar**'daki **Uygulama adı**'dır (boşsa kurulumda girilen ad). E-postaların üstünde
**Genel Ayarlar**'daki logo görünür.

::: warning E-postalar kuyruktan gider
E-postalar arka planda (kuyrukta) gönderilir. Sunucuda kuyruk işleyicisi çalışmıyorsa e-postalar
bekler. Bkz. [Kurulum › E-posta ve kuyruk](/baslangic/kurulum#e-posta) ve
[Sorun giderme › E-postalar gitmiyor](/baslangic/sorun-giderme#e-posta).
:::

## Sipariş, teklif, iade ve ödeme {#magaza}

| Olay | Alıcı | Kanal | E-posta konusu |
|---|---|---|---|
| Sipariş verildi (sepetten ya da tekliften) | Müşteri (siparişteki e-posta) | E-posta | *Firma* — Siparişiniz alındı (*no*) |
| Sipariş verildi (kartla ödeme hariç) | Bildirim e-postası | E-posta | Yeni sipariş: *no* |
| Sipariş durumu değişti | Müşteri | E-posta | *Firma* — Sipariş durumu: *durum* (*no*). Durum değiştirilirken "müşteriye bildir" seçildiyse girilen not da e-postada yer alır |
| Sipariş ödendi (havale onayı, yönetici onayı ya da kart ödemesi) | Müşteri | E-posta | Sipariş durumu e-postası, "Ödemeniz alındı, siparişiniz hazırlanıyor." notuyla |
| Kart ödemesi sağlayıcıdan onaylandı | Bildirim e-postası | E-posta | Yeni sipariş: *no*. Kart siparişi size yalnız bu anda, bir kez bildirilir; ödemesi tamamlanmayan kart siparişi için e-posta gitmez |
| Teklif talebi geldi | Müşteri | E-posta | *Firma* — Teklif talebiniz alındı (*no*) |
| Teklif talebi geldi | Bildirim e-postası | E-posta | Yeni teklif talebi: *no* |
| Teklif müşteriye gönderildi | Müşteri | E-posta | *Firma* — Teklifiniz hazır (*no*) |
| Teklif yönetici tarafından iptal edildi | Müşteri | E-posta | *Firma* — Teklifiniz iptal edildi (*no*) |
| Müşteri teklifi onayladı / revize istedi / reddetti / geri çekti | Bildirim e-postası | E-posta | Teklif *no*: *durum* |
| Müşteri teklifi onayladı / revize istedi / reddetti / geri çekti | Müşteri (onay olarak) | E-posta | Teklif onayınız alındı · Revize isteğiniz alındı · Teklifi reddettiniz · Teklif talebiniz geri çekildi |
| İade talebi geldi | Müşteri (siparişin e-postası) | E-posta | *Firma* — İade talebiniz alındı (*no*) |
| İade talebi geldi | Bildirim e-postası | E-posta | Yeni iade talebi: *no* |
| İade talebinin durumu değişti | Müşteri | E-posta | *Firma* — İade talebiniz: *durum* (*no*) |
| Havale bildirimi geldi | Bildirim e-postası | E-posta | Yeni havale bildirimi: *tutar* |
| Havale bildirimi onaylandı / reddedildi | Bildirimi yapan bayi | E-posta + panel içi | Havale bildiriminiz onaylandı / reddedildi |

Teklif siparişe dönüştüğünde ayrıca teklif e-postası gitmez; sipariş e-postaları gider.

## Stok {#stok}

| Olay | Alıcı | Kanal | E-posta konusu |
|---|---|---|---|
| Ürünün stoğu kritik eşiğe indi | Stok durumunu görme yetkisi olan aktif panel kullanıcıları | E-posta + panel içi | Kritik stok: *stok kodu* |
| Ürünün stoğu tükendi (0 ya da altı) | Aynı | E-posta + panel içi | Stok tükendi: *stok kodu* |

Bildirim, stok eşiğin altına **inerken bir kez** gönderilir; stok yeniden eşiğin üstüne çıkıp
tekrar inerse yeniden gönderilir. Stok takibi yapılmayan ve pasif ürünler için gönderilmez.
Eşik ve aç / kapat: **Stok Ayarları** (bkz. [Stok](/stok/)).

## Panel kullanıcıları {#panel-kullanicilari}

Yöneticinin **Ayarlar › Kullanıcılar** ekranında yaptığı işlemler:

| Olay | Alıcı | Kanal | E-posta konusu |
|---|---|---|---|
| Yeni kullanıcı oluşturuldu | Yeni kullanıcı | E-posta + panel içi | *Firma* — Panel Hesabınız Oluşturuldu (şifre belirleme bağlantısı, 60 dakika geçerli) |
| E-posta değişikliği istendi | Kullanıcının **yeni** adresi | E-posta + panel içi | *Firma* — E-posta Değişikliği Onayı (bağlantı 24 saat geçerli) |
| E-posta yönetici tarafından onaylandı | Kullanıcı | E-posta + panel içi | *Firma* — E-posta Adresiniz Onaylandı |
| Durum değişti (aktif / pasif) | Kullanıcı | E-posta + panel içi | *Firma* — Hesap Durumunuz Güncellendi |

Görev değişikliğinde e-posta gönderilmez.

## Bayi ve müşteri hesapları {#uyeler}

Yöneticinin **Bayiler** (vitrin kuruluysa **Müşteriler**) ekranında bayi / müşteri hesabı üzerinde yaptığı işlemler (bkz.
[Müşteriler ve bayiler](/musteriler/)):

| Olay | Alıcı | Kanal | E-posta konusu |
|---|---|---|---|
| Yeni bayi hesabı açıldı | Bayi | E-posta + panel içi | *Firma* — Üyeliğiniz Oluşturuldu (şifre belirleme bağlantısı, 60 dakika geçerli) |
| E-posta değişikliği istendi | Üyenin yeni adresi | E-posta + panel içi | *Firma* — E-posta Değişikliği Onayı (24 saat geçerli) |
| E-posta yönetici tarafından onaylandı | Üye | E-posta + panel içi | *Firma* — E-posta Adresiniz Onaylandı |
| Üyelik durumu değişti | Üye | E-posta + panel içi | *Firma* — Üyelik Durumunuz Güncellendi |

## Giriş ve hesap güvenliği (herkes) {#guvenlik}

Yöneticiler ve üyeler için aynıdır:

| Olay | Alıcı | Kanal | E-posta konusu |
|---|---|---|---|
| Şifremi unuttum | Hesap sahibi | E-posta + panel içi | *Firma* — Şifre Sıfırlama Bağlantınız (60 dakika geçerli) |
| Şifre sıfırlandı | Hesap sahibi | E-posta + panel içi | *Firma* — Şifreniz Değiştirildi |
| E-posta doğrulaması gerekiyor (kendi e-postasını değiştirdi ya da doğrulama e-postasını yeniden istedi) | Hesap sahibi | E-posta + panel içi | *Firma* — E-posta Adresinizi Doğrulayın |
| Yeni bir cihaz / tarayıcıdan giriş yapıldı | Hesap sahibi | E-posta + panel içi | *Firma* - Farklı Bir Cihazdan Oturum Açıldı |
| Profil bilgileri güncellendi | Hesap sahibi | Yalnız panel içi | — |
| Şifre (hesap ekranından) değiştirildi | Hesap sahibi | Yalnız panel içi | — |
| Tercihler (dil, zaman dilimi) güncellendi | Hesap sahibi | Yalnız panel içi | — |
| Başka bir cihazdaki oturum kapatıldı | Hesap sahibi | Yalnız panel içi | — |
| İki adımlı doğrulama açıldı / kapatıldı | Hesap sahibi | Yalnız panel içi | — |

"Yeni cihaz" bildirimi, hesaba daha önce hiç kullanılmamış bir IP adresi ve tarayıcı
birleşimiyle ilk kez girildiğinde gönderilir (hesabın açıldığı ilk dakika hariç).

## Bildirimleri kapatmak

Panelde bildirim türlerini tek tek kapatma ekranı yoktur. Kapatılabilenler:

- Firma tarafındaki sipariş / teklif / iade / havale e-postaları: **Satış Ayarları ›
  Bildirimler › Bildirim e-postası** alanını boşaltarak (hepsi birden).
- Kritik stok bildirimleri: **Stok Ayarları**'ndan.
