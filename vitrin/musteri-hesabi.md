# Müşteri hesabı

Vitrinden kayıt olan müşteriler hesaplarını vitrin tasarımındaki **Hesabım** alanından
(`/hesabim`) yönetir. Bayiler bu alanı kullanmaz; onlar bayi paneline yönlendirilir (bkz.
[Kim neyi görür?](/vitrin/#kim-neyi-gorur)).

## Kayıt ve giriş {#kayit}

**Kayıt ol** sayfası, vitrin herkese açıkken giriş sayfasındaki bağlantıyla açılır.

| Alan | Açıklama |
|---|---|
| **Ad soyad** | Zorunlu, en çok 255 karakter |
| **E-posta adresi** | Zorunlu; daha önce kullanılmamış olmalı |
| **Şifre** / **Şifre tekrarı** | Zorunlu; iki alan aynı olmalı |

1. Müşteri formu doldurup **Hesap oluştur**'a basar.
2. E-posta adresine doğrulama bağlantısı gider.
3. Bağlantıya tıklayınca e-posta doğrulanır ve **müşteri hesabı açılır**. Hesap açılmadan
   Hesabım'a girilemez.

- Vitrin **Bayilere özel** yapılmışsa kayıt kapalıdır (bkz.
  [Site erişimi](/vitrin/ayarlar#site-erisimi)).
- Panelden **Müşteriler** altında üye olarak eklediğiniz kişinin hesabı da müşteri hesabıdır;
  bayi olarak eklenenler bayi panelini kullanır.
- Giriş ve şifremi unuttum ekranları bayilerle ortaktır.

## Hesabım menüsü {#menu}

Hesabım'ın solunda (mobilde açılır menüde) "Merhaba, …" selamı ve şu bağlantılar vardır:
**Hesabım özeti**, **Siparişlerim**, **Tekliflerim**, **Adreslerim**, **Ödemelerim**,
**İadelerim**, **Bilgilerim**, **Çıkış Yap**.

## Hesabım özeti {#ozet}

| Bölüm | İçerik |
|---|---|
| Sayaçlar | **Açık siparişler** (ödeme bekleyen, hazırlanan, kargodaki), **Toplam sipariş**, **Yanıtınızı bekleyen teklifler**, **Açık iadeler** |
| **Son siparişlerim** | Son 5 sipariş: Sipariş No, Tarih, Durum, Tutar. **Tümü** ile Siparişlerim |
| **Varsayılan adresim** | Varsayılan teslimat adresi; adres yoksa **Adres ekle** |
| **Hızlı bağlantılar** | **Alışverişe devam et**, **Sepetim**, **Teklif listem**, **İade talebi oluştur** |

## Siparişlerim {#siparislerim}

Liste: **Sipariş No**, **Tarih**, **Durum**, **Ödeme**, **Tutar**, ürün sayısı. Siparişe
tıklayınca detay açılır:

- Ürünler (adet, birim fiyat KDV hariç, tutar KDV dahil), kampanya bilgisi.
- Tutarlar: Ürünler toplamı, Kampanya indirimi, Ara toplam (KDV hariç), KDV, Kargo, Ödeme
  indirimi (ör. havale), **Genel toplam**.
- **Ödeme** (yöntem, durum), kargo (**Firma**, **Takip no**, **Desi**), **Teslimat adresi**,
  **Fatura adresi**, **Sipariş notunuz**, **Sipariş geçmişi**.
- **Tekrar sipariş ver** — siparişteki ürünleri yeniden sepete ekler. Eklenemeyen ürün (stok,
  satıştan kalkma vb.) varsa bildirilir.
- **İade talebi oluştur** — sipariş iadeye uygunsa görünür (bkz. [İadelerim](#iadelerim)).

### Sipariş durumları {#siparis-durumlari}

| Durum | Anlamı |
|---|---|
| **Ödeme Bekleniyor** | Sipariş alındı, ödeme bekleniyor (ör. havale) |
| **Onay Bekliyor** | Sipariş sizin onayınızı bekliyor |
| **Hazırlanıyor** | Ödeme alındı / sipariş onaylandı, hazırlanıyor |
| **Kargoya Verildi** | Kargoya teslim edildi; takip numarası görünür |
| **Tamamlandı** | Sipariş tamamlandı |
| **İptal Edildi** | Sipariş iptal edildi |
| **Ödeme Başarısız** | Kartla ödeme tamamlanamadı |

## Tekliflerim {#tekliflerim}

Teklif talepleri ve hazırlanan teklifler: **Teklif No**, tarih, durum, **Geçerlilik**, tutar.
Müşterinin yanıtını bekleyen teklifler "İşlem bekliyor" ile işaretlenir.

Teklif detayında ürünler, fiyatlar, **Notumuz** (sizin notunuz), **Talep notunuz**, geçerlilik ve
**Geçmiş** görünür. Teklif müşteriye gönderildiyse **Onayla**, **Revize iste**, **Reddet**;
henüz fiyatlanmadıysa **Talebi geri çek** düğmeleri çıkar. Onaylanan teklif **Ödemeye geç** ile
ödeme ekranında siparişe dönüştürülür. Ayrıntı: [Teklifi yanıtlama](/vitrin/musteri-deneyimi#teklif-yanitlama).

| Müşterinin gördüğü durum | Anlamı |
|---|---|
| **Fiyatlandırılıyor** | Talep alındı, teklif hazırlanıyor |
| **Revize ediliyor** | Müşteri revize istedi, güncel teklif hazırlanıyor |
| **Onayınızı bekliyor** | Teklif gönderildi; müşteri onaylayabilir, revize isteyebilir ya da reddedebilir |
| **Onaylandı — ödeme bekliyor** | Onaylandı; ödeme yapılınca sipariş oluşur |
| **Siparişe dönüştü** | Ödendi, sipariş oluştu |
| **Reddedildi** | Müşteri teklifi reddetti |
| **İptal edildi** | Teklif ya da talep iptal edildi |

## Adreslerim {#adreslerim}

Teslimat ve fatura adresleri **ayrı ayrı** yönetilir: **Teslimat adreslerim** (siparişlerin
gönderileceği adresler) ve **Fatura adreslerim** (bireysel / kurumsal fatura bilgileri).

| Alan | Açıklama |
|---|---|
| **Adres başlığı** | Zorunlu, en çok 64 karakter (ör. "Merkez", "Fatura") |
| **Ad soyad** / **Teslim alacak kişi** | Zorunlu |
| **Telefon** | Zorunlu, en az 10 karakter |
| **Bireysel / Kurumsal** | Yalnız fatura adresinde |
| **Firma ünvanı** | Yalnız fatura adresinde. Girilirse **Vergi dairesi** ve **Vergi numarası** zorunlu olur |
| **T.C. kimlik no (isteğe bağlı)** | Yalnız fatura adresinde; girilirse 11 hane |
| **İl** / **İlçe** | Listeden seçilir, zorunlu |
| **Adres** | Zorunlu, en çok 500 karakter |
| **Posta kodu** | İsteğe bağlı |
| **Varsayılan teslimat adresim olsun** / **Varsayılan fatura adresim olsun** | Varsayılan adres ödeme ekranında ve Hesabım özetinde öne çıkar |
| **Bu adresi fatura (teslimat) adresi olarak da kaydet** | Aynı bilgilerle diğer türde ayrı bir kayıt oluşturur (vergi bilgileri teslimat adresine aktarılmaz) |

Listede **Varsayılan teslimat yap** / **Varsayılan fatura yap**, **Düzenle** ve sil işlemleri
vardır. Adresler ödeme ekranında **Kayıtlı teslimat adreslerim** / **Kayıtlı fatura adreslerim**
olarak tek tıkla seçilir; ödeme ekranında girilen yeni adresler de **Adreslerim'e kaydet** ile
buraya eklenebilir.

## Ödemelerim {#odemelerim}

Siparişlere ait kart ödemeleri ve havale / EFT kayıtları: **Tarih**, **Sipariş**, **Yöntem**,
**Durum**, **Tutar**. Ödemesi beklenen havale siparişi varsa sayfanın üstünde **Havale / EFT
bilgileri** (banka hesaplarınız) ve açıklamaya sipariş numarasını yazma hatırlatması görünür.

::: info Havale bildirimi
Havale bildirimi formu yalnız bayi panelindedir. Vitrin müşterisinin havalesini, hesabınıza
geçtiğinde panelden siparişin ödemesi olarak işlersiniz (bkz.
[Havale ve ödeme bildirimi](/cari/havale)).
:::

## İadelerim {#iadelerim}

İade talepleri: **İade No**, **Tarih**, **Sipariş**, **Neden**, **Durum**. Sayfanın üstünde iade
süresi yazar ve **İade talebi oluştur** ile iade süresi içindeki siparişler listelenir.

**Hangi siparişler iade edilebilir?** Durumu **Kargoya Verildi** ya da **Tamamlandı** olan ve
kargoya verilişinden bu yana **iade talebi süresi** dolmamış siparişler. Süre
**Ayarlar › Tanımlamalar › Satış Ayarları › İade talebi süresi (gün)** ile belirlenir; 0 iadeyi
kapatır. Daha önce açılmış talepteki adetler düşülür.

### İade talebi formu {#iade-formu}

| Alan | Açıklama |
|---|---|
| **İade adedi** | Her ürün için iade edilecek adet; iade edilebilecek adetten fazla olamaz. Adedi kalmayan ürün "İade edilemez" görünür |
| **İade nedeni** | Zorunlu: **Hasarlı / kusurlu ürün**, **Yanlış ürün gönderildi**, **Vazgeçtim**, **Diğer** |
| **Açıklama** | İsteğe bağlı, en çok 2.000 karakter (ürünün durumu, sorun vb.) |

**İade talebini gönder** ile talep oluşur; müşteriye "İade talebiniz alındı" e-postası gider.

| İade durumu | Anlamı |
|---|---|
| **Beklemede** | Talep inceleniyor |
| **Onaylandı** | Talep onaylandı; ürün gönderilebilir |
| **Reddedildi** | Talep reddedildi |
| **Ürün Teslim Alındı** | İade edilen ürün size ulaştı |
| **İade Tamamlandı** | İade sonuçlandı |

Panel tarafı için bkz. [İadeler](/satis/iadeler).

## Bilgilerim {#bilgilerim}

| Bölüm | Alanlar ve davranış |
|---|---|
| **Kişisel bilgiler** | **Ad soyad** |
| **E-posta adresi** | **Yeni e-posta adresi** → **E-postayı değiştir**. Oturum kapatılır; yeni adrese gelen bağlantıyla doğrulayıp tekrar giriş yapmak gerekir |
| **Şifre değiştir** | **Mevcut şifre**, **Yeni şifre**, **Yeni şifre (tekrar)** → **Şifreyi güncelle**. Oturum kapatılır, yeni şifreyle tekrar giriş yapılır |

E-posta ve şifre değişikliği dakikada en çok 6 kez denenebilir.
