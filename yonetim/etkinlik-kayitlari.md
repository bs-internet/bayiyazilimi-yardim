# Etkinlik kayıtları

**Ayarlar › Etkinlik Kayıtları**: sistemde kimin, ne zaman, ne yaptığının listesi (denetim
kaydı). Kayıtlar otomatik tutulur. Elle eklenemez, düzenlenemez, silinemez.

## Liste

| Sütun | Açıklama |
|---|---|
| Tarih | İşlemin yapıldığı tarih ve saat |
| Kullanıcı | İşlemi yapan kişi (yönetici ya da üye). Sistemin kendiliğinden yaptığı işlemlerde (ör. kart ödemesinin sağlayıcıdan onaylanması) boş olabilir |
| Olay | İşlemin türü (aşağıdaki tablo) |
| Açıklama | Ne yapıldığının kısa anlatımı (ör. "… birimini ekledi.") |

Liste en yeniden eskiye sıralıdır. Sayfa başına 50 kayıt.

## Filtreler

| Filtre | Açıklama |
|---|---|
| Kullanıcı Türü | **Tümü**, **Yönetici** (panel kullanıcılarının işlemleri) ya da **Üye** (bayi / müşterilerin işlemleri) |
| Kayıt Türü | İşlemin hangi kayıt üzerinde yapıldığı: Kullanıcı, Rol, İzin, Ayar, Para Birimi, Dil, Ülke, İl, İlçe, Vergi Oranı, Hesap, Ödeme, Havale Bildirimi, Çek / Senet, Kampanya, Bayi Grubu, Mal Kabul, Sayım, Lot / Seri No, Tedarikçi … Listede yalnız kaydı bulunan türler çıkar |
| Başlangıç Tarihi / Bitiş Tarihi | Tarih aralığı (iki gün de dahil) |

**Filtrele** ile uygulanır, **Sıfırla** ile temizlenir.

## Olay türleri

Oluşturuldu · Güncellendi · Silindi · Geri Yüklendi · Kalıcı Silindi · Aktifleştirildi ·
Pasifleştirildi · Toplu Eklendi · Yetkiler Güncellendi · Rol Atandı · Rol Kaldırıldı · Durum
Güncellendi · Tercihler Güncellendi · Şifre Güncellendi · Şifre Sıfırlama İstendi · E-posta
Güncellendi · E-posta Değiştirildi · E-posta Değişikliği İstendi · E-posta Doğrulandı · E-posta
Doğrulaması İstendi · Oturum Kapatıldı · Yeni Cihaz Girişi

## Neler kaydedilir?

| Alan | Kaydedilen işlemler |
|---|---|
| **Kullanıcılar ve hesaplar** | Panel kullanıcısı ve üye oluşturma, hoş geldin bağlantısının kullanılması, e-posta onaylama ve değiştirme, durum değiştirme, görev atama / kaldırma, bir yöneticinin başka bir kullanıcının iki adımlı doğrulamasını sıfırlaması |
| **Hesap güvenliği** | Şifre değiştirme ve sıfırlama, iki adımlı doğrulamayı açma / kapatma, başka cihazdaki oturumu kapatma, yeni cihazdan giriş, profil ve tercih değişiklikleri |
| **Görevler ve yetkiler** | Görev ekleme, düzenleme, silme, izinlerin değişmesi. İzin ekleme, toplu ekleme, silme, geri yükleme |
| **Ayarlar** | Genel Ayarlar, Kurumsal Bilgiler, Site Erişimi (vitrin kuruluysa İletişim Bilgileri) ve diğer mağaza ayarları. Eklenti açma / kapatma. Mağaza teması değiştirme; API anahtarı oluşturma / iptal. Önbellek temizleme |
| **Tanımlamalar** | Dil, ülke, il, ilçe, para birimi, vergi oranı ekleme / güncelleme / durum / silme / geri alma. Birim, kargo firması, banka hesabı, tedarikçi değişiklikleri. Kur güncellemeleri |
| **Katalog** | Ürün, kategori, marka değişiklikleri; Excel aktarımları |
| **Satış** | Sipariş oluşması, ödenmesi, durum değişiklikleri, kart iadeleri. Teklif talebi ve teklif değişiklikleri. İade talebi ve durumları. Kayıtlı sepetler |
| **Cari ve ödeme** | Cari hareketler (tahsilat, dekont, iptal), havale bildirimleri ve onay / ret |
| **Stok** | Stok giriş / çıkış / transfer, mal kabul, sayımın kapanması |

Normal giriş ve çıkışlar burada değil, kullanıcının detayındaki **Oturumlar** sekmesinde
görünür (bkz. [Kullanıcılar › Kullanıcı detayı](/yonetim/kullanicilar#detay)). Yalnız **yeni bir
cihazdan** yapılan girişler etkinlik kaydına da düşer.

## Başka nerelerde görünür?

- **Başlangıç ekranı › Son hareketler**: son 8 kayıt.
- **Kullanıcı detayı › Etkinlik**: o kullanıcının yaptığı ve onunla ilgili son 20 kayıt.

## Yetki

Ekranın yetkisi kurulumda **Admin** görevine atanır. Diğer görevlere **Görevler** ekranından
eklenebilir. Bu yetkiye sahip olmayanlar başlangıç ekranında **Son
hareketler** kartını da görmez.
