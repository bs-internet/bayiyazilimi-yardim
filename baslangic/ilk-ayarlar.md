# İlk ayarlar

Kurulumdan sonra, satışa başlamadan önce aşağıdaki adımları sırayla gözden geçirin. Hepsi
yönetim panelinden yapılır; her adımın ayrıntısı bağlantılı sayfadadır.

## 1. Hesabınızı güvenceye alın

Kullanıcı menüsü › **Bilgilerim › Güvenlik**: **iki adımlı doğrulamayı** açın ve kurtarma
kodlarınızı saklayın. Kurulumda açtığınız hesap Super Admin'dir; her şeye erişir. Bkz.
[Panel tanıtımı › İki adımlı doğrulama](/baslangic/panel-tanitimi#iki-adimli-dogrulama).

## 2. Sunucu ayarlarını tamamlayın

- [Cron](/baslangic/kurulum#cron) satırını ekleyin (TCMB kurları, kart ödemesi zaman aşımı, SKT
  kontrolü).
- [E-posta](/baslangic/kurulum#e-posta) ayarlarını yapın ve şifremi unuttum ile bir deneme
  e-postası gönderin.

## 3. Firma kimliği

**Ayarlar › Genel Ayarlar** ([ayrıntılar](/yonetim/genel-ayarlar)):

- **Genel Ayarlar** — uygulama adı, slogan, **logo**, **koyu tema logosu** ve **favicon**.
  Yüklemezseniz Bayi Yazılımı logosu kullanılır.
- **Kurumsal Bilgiler** — firma ünvanı, vergi dairesi / numarası, MERSİS ve **adres** (il / ilçe
  zorunlu). Vergi bilgileri eksikse Genel Bakış'ta uyarı görünür.
- **İletişim Bilgileri** — e-posta, telefon, WhatsApp, çalışma saatleri, sosyal medya ve
  özellikle **Sipariş/teklif bildirim e-postası**.

::: warning Bildirim e-postası boşsa
**Sipariş/teklif bildirim e-postası** boş bırakılırsa yeni sipariş, teklif, iade ve havale
bildirimleri size **hiç gelmez**. Bkz. [E-posta ve bildirimler](/yonetim/e-posta-bildirimleri).
:::

## 4. Varsayılanlar ve ana para birimi

**Ayarlar › Genel Ayarlar › Genel Ayarlar › Varsayılanlar**: ülke, **para birimi**, vergi oranı,
dil ve zaman dilimi.

::: danger Ana para birimi kilitlenir
Ana para birimi **ilk sipariş ya da ilk cari hareketten sonra değiştirilemez**. TL dışında
(ör. USD, EUR) çalışacaksanız bunu satışa başlamadan önce ayarlayın.
:::

## 5. Tanımlamalar

**Ayarlar › Tanımlamalar** ([ayrıntılar](/yonetim/tanimlamalar)):

- **Para Birimleri** — kullanacağınız birimleri aktif yapın, TCMB kur tipini ve otomatik
  güncellemeyi seçin. Bkz. [Para birimleri](/yonetim/para-birimleri).
- **Vergi Oranları**, **Birimler** — gerekiyorsa ekleyin. Yeni eklenen vergi oranı pasif başlar;
  aktif yapmayı unutmayın.
- **Satış Ayarları** — fiyatlar KDV dahil mi hariç mi gösterilsin, teklif geçerlilik süresi,
  iade talebi süresi.
- **Banka Hesapları** — havale / EFT ile ödeme alacaksanız hesaplarınızı ekleyin. Bkz.
  [Havale ve ödeme bildirimi](/cari/havale).
- **Cari Ayarları** — ödeme yöntemine göre en düşük sipariş tutarı, vade uyarı süresi, çek /
  senet. Bkz. [Cari hesap](/cari/).
- **Kargo Firmaları** ve **Kargo Ayarları** — kurulumla gelen firmalar ve fiyatlar örnektir.
  Bkz. [Kargo](/satis/kargo).

## 6. Depo ve stok

**Mağaza › Stok › Depolar** — kurulumla bir **Merkez Depo** gelir; başka depolarınız varsa
ekleyin. **Stok Ayarları**'nda kritik stok eşiğini ve bildirimini ayarlayın. Bkz.
[Depolar ve lokasyonlar](/stok/).

## 7. Ürünler

Ürünleri tek tek ekleyebilir ya da Excel ile toplu yükleyebilirsiniz. Bkz.
[Ürünler](/satis/urunler) ve [Excel ile ürün aktarma](/satis/excel).

## 8. Çalışanlar, görevler ve yetkiler

1. **Ayarlar › Kullanıcılar › Yetkiler › Rotalardan Keşfet** ile müşteri, kullanıcı, genel ayar
   ve tanımlama ekranlarının yetkilerini listeye ekleyin (bu yetkiler kurulumla gelmez).
2. **Görevler**'de hazır görevleri (Admin, Mağaza Yöneticisi, Satış Sorumlusu, Depo Sorumlusu,
   Katalog Sorumlusu, İçerik Editörü) gözden geçirin ve gereken yetkileri atayın.
3. **Yeni Kullanıcı** ile çalışanlarınıza hesap açın.

Bkz. [Kullanıcılar](/yonetim/kullanicilar) ve [Görevler ve yetkiler](/yonetim/roller-yetkiler).

## 9. Bayiler

- **Müşteriler › Bayi Grupları** — gruplarınızı ve grup indirimlerini tanımlayın.
- **Müşteriler › Yeni Bayi** — bayilerinizi ekleyin. Bkz. [Müşteriler ve bayiler](/musteriler/).

## 10. Bilgi sayfaları

**İçerik › Sayfalar** — satış / iade şartları, teslimat, banka bilgileri, KVKK gibi sayfalarınızı
düzenleyin. Kurulumla şablon metinler gelir. "Bayi panelinde göster" işaretli sayfalar
bayilerin **Bilgi Merkezi**'nde listelenir.

## Örnek verilerle kurduysanız

Örnek ürünler, örnek bayi (`user@user.com`) ve örnek müşteri (`musteri@musteri.com`) hesapları
yüklenmiştir. Gerçek kullanıma geçmeden önce örnek ürünleri silin ya da pasifleştirin, örnek
hesapları pasif yapın.
