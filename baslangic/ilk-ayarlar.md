# İlk ayarlar

Kurulumdan sonra, satışa başlamadan önce aşağıdaki adımları sırayla gözden geçirin. Hepsi
yönetim panelinden yapılır. Her adımın ayrıntısı bağlantılı sayfadadır.

## 1. Hesabınızı güvenceye alın

Kullanıcı menüsü › **Bilgilerim › Güvenlik**: **iki adımlı doğrulamayı** açın ve kurtarma
kodlarınızı saklayın. Kurulumda açtığınız hesap Super Admin'dir. Her şeye erişir. Bkz.
[Panel tanıtımı › İki adımlı doğrulama](/baslangic/panel-tanitimi#iki-adimli-dogrulama).

## 2. Sunucu ayarlarını tamamlayın

- [Cron](/baslangic/kurulum#cron) satırını ekleyin (TCMB kurları, kart ödemesi zaman aşımı, SKT
  kontrolü).
- [E-posta](/baslangic/kurulum#e-posta) ayarlarını yapın ve şifremi unuttum ile bir deneme
  e-postası gönderin.

## 3. Firma kimliği

**Ayarlar › Genel Ayarlar** ([ayrıntılar](/yonetim/genel-ayarlar)):

- **Genel Ayarlar**: uygulama adı, slogan, **logo**, **koyu tema logosu** ve **favicon**.
  Yüklemezseniz Bayi Yazılımı logosu kullanılır.
- **Kurumsal Bilgiler**: firma ünvanı, firma **e-postası** ve **telefonu**, vergi dairesi /
  numarası, MERSİS ve **adres** (il / ilçe zorunlu). Vergi bilgileri eksikse Genel Bakış'ta uyarı
  görünür.

[Vitrin eklentisi](/vitrin/) kuruluysa ayrıca **İletişim Bilgileri** ekranı gelir (WhatsApp,
çalışma saatleri, harita, sosyal medya).

## 4. Varsayılanlar ve ana para birimi

**Ayarlar › Genel Ayarlar › Genel Ayarlar › Varsayılanlar**: ülke, **para birimi**, vergi oranı,
dil ve zaman dilimi.

::: danger Ana para birimi kilitlenir
Ana para birimi **ilk sipariş ya da ilk cari hareketten sonra değiştirilemez**. TL dışında
(ör. USD, EUR) çalışacaksanız bunu satışa başlamadan önce ayarlayın.
:::

## 5. Tanımlamalar

**Ayarlar › Tanımlamalar** ([ayrıntılar](/yonetim/tanimlamalar)):

- **Para Birimleri**: kullanacağınız birimleri aktif yapın, TCMB kur tipini ve otomatik
  güncellemeyi seçin. Bkz. [Para birimleri](/yonetim/para-birimleri).
- **Vergi Oranları**, **Birimler**: gerekiyorsa ekleyin. Yeni eklenen vergi oranı pasif başlar;
  aktif yapmayı unutmayın.
- **Satış Ayarları**: fiyatlar KDV dahil mi hariç mi gösterilsin, teklif geçerlilik süresi,
  iade talebi süresi ve özellikle **Bildirimler › Bildirim e-postası**. Bkz.
  [Satış ayarları](/satis/satis-ayarlari).
- **Sözleşmeler**: kurulumla gelen taslak sözleşmelerin metnini yazın ve aktif yapın. Bkz.
  [Sözleşmeler](#sozlesmeler) aşağıda.
::: warning Bildirim e-postası boşsa
**Bildirim e-postası** boş bırakılırsa yeni sipariş, teklif, iade ve havale bildirimleri size
**hiç gelmez**. Bkz. [E-posta ve bildirimler](/yonetim/e-posta-bildirimleri).
:::

- **Banka Hesapları**: havale / EFT ile ödeme alacaksanız hesaplarınızı ekleyin. Bkz.
  [Havale ve ödeme bildirimi](/cari/havale).
- **Cari Ayarları**: ödeme yöntemine göre en düşük sipariş tutarı, vade uyarı süresi, çek /
  senet. Bkz. [Cari hesap](/cari/).
- **Kargo Firmaları** ve **Kargo Ayarları**: kurulumla gelen firmalar ve fiyatlar örnektir.
  Bkz. [Kargo](/satis/kargo).

## 6. Depo ve stok

**Mağaza › Stok › Depolar**: kurulumla bir **Merkez Depo** gelir. Başka depolarınız varsa
ekleyin. **Stok Ayarları**'nda kritik stok eşiğini ve bildirimini ayarlayın. Bkz.
[Depolar ve lokasyonlar](/stok/).

## 7. Ürünler

Ürünleri tek tek ekleyebilir ya da Excel ile toplu yükleyebilirsiniz. Bkz.
[Ürünler](/satis/urunler) ve [Excel ile ürün aktarma](/satis/excel).

## 8. Çalışanlar, görevler ve yetkiler

1. **Ayarlar › Kullanıcılar › Görevler**'de hazır görevleri (Admin, Mağaza Yöneticisi, Satış
   Sorumlusu, Depo Sorumlusu, Katalog Sorumlusu. Vitrin kuruluysa İçerik Editörü) gözden
   geçirin. **Admin**
   kurulumda panelin tüm yetkileriyle gelir. Diğer görevler yalnız kendi alanlarının yetkileriyle
   gelir, gerekirse yetki ekleyin.
2. **Yeni Kullanıcı** ile çalışanlarınıza hesap açın.

Bkz. [Kullanıcılar](/yonetim/kullanicilar) ve [Görevler ve yetkiler](/yonetim/roller-yetkiler).

## 9. Bayiler

- **Bayiler › Bayi Grupları**: gruplarınızı ve grup indirimlerini tanımlayın.
- **Bayiler › Yeni Bayi**: bayilerinizi ekleyin. Bkz. [Müşteriler ve bayiler](/musteriler/).

## 10. Sözleşmeler {#sozlesmeler}

**Ayarlar › Tanımlamalar › Sözleşmeler**: kurulumla dört **pasif taslak** gelir: Satış
Sözleşmesi, Üyelik Sözleşmesi, KVKK Aydınlatma Metni, Garanti ve İade Şartları. Metinleri henüz
girilmemiştir. Kullanacaklarınızın metnini yazın, **Ödeme formunda göster** işaretini kontrol
edin ve listedeki anahtarla aktif yapın. Aktif sözleşmeler bayilerin **Sözleşmeler** menüsünde
listelenir. Ödeme formunda göster işaretli olanlar siparişte onaylatılır. Bkz.
[Tanımlamalar › Sözleşmeler](/yonetim/tanimlamalar#sozlesmeler).

## Örnek verilerle kurduysanız

Örnek ürünler ve örnek bayi (`user@user.com`) hesabı yüklenmiştir. [Vitrin eklentisi](/vitrin/)
kuruluysa örnek müşteri (`musteri@musteri.com`) hesabı da gelir. Gerçek kullanıma geçmeden önce
örnek ürünleri silin ya da pasifleştirin, örnek hesapları pasif yapın.
