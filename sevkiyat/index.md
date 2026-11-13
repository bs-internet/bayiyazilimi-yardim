# Sevkiyat eklentisi

**Sevkiyat** (ücretli eklenti) siparişlerini kendi araçları ve personeliyle dağıtan firmalar içindir.
Hazırlanan siparişleri bir sevkiyatta toplar, araç ve dağıtım personeli atar, teslimat sırasını
belirlersiniz. Personel kendi **telefona uygun ekranından** (`/sevkiyat`) teslimatları kaydeder; sipariş
durumu kendiliğinden güncellenir. Dağıtım personeli yönetim paneline giremez.

Kargo firmasıyla gönderilen siparişler için bu eklenti gerekmez (bkz. [Kargo](/satis/kargo)).

Personelin ekranı için bkz. [Personel ekranı](/sevkiyat/personel-ekrani).

## Kurulum {#kurulum}

Sevkiyat ücretli bir eklentidir, satın aldığınızda sunucunuza kurulur (bkz.
[Eklentiler](/yonetim/moduller#eklenti-kurulumu)). Personel ya da araç sayısı sınırı yoktur.

Menüde **Sevkiyat** başlığı altında dört ekran görünür: **Sevkiyatlar**, **Dağıtım Personeli**,
**Araçlar** ve **Sevkiyat Raporu**.

## Dağıtım personeli {#personel}

**Sevkiyat › Dağıtım Personeli**: personel listesi ve her birinin açık sevkiyat sayısı.
**Yeni personel** ile eklenir:

| Alan | Açıklama |
|---|---|
| **Ad soyad**, **E-posta**, **Telefon** | Personelin bilgileri. E-posta giriş adıdır |
| **Parola** | Personelin giriş parolası. Düzenlerken boş bırakılırsa değişmez |
| **Aktif** | Pasif personel giriş yapamaz ve sevkiyat atamasında görünmez |

Personel giriş yaptığında doğrudan kendi ekranına (`/sevkiyat`) yönlenir.

## Araçlar {#araclar}

**Sevkiyat › Araçlar**: **Plaka** ve isteğe bağlı **Açıklama** ile araç eklenir. Pasif yapılan araç
yeni sevkiyatta seçilemez. Araç seçmek zorunlu değildir.

## Sevkiyat oluşturma {#sevkiyat-olusturma}

**Sevkiyat › Sevkiyatlar** listesinin üstünde sevkiyat bekleyen sipariş sayısı görünür.
**Yeni sevkiyat**:

1. **Sevkiyat tarihi**, **Dağıtım personeli** ve (isteğe bağlı) **Araç** seçilir; **Personele not** yazılabilir.
2. **Siparişler** bölümünde sipariş no, müşteri, il ya da ilçeyle aranır ve siparişler işaretlenir.
3. **Sevkiyatı oluştur** ile sevkiyat **Planlandı** durumunda açılır.

Sevkiyata yalnız **Hazırlanıyor** durumundaki siparişler eklenir. Bir sipariş aynı anda yalnız bir
açık sevkiyatta bulunabilir.

## Sevkiyat detayı {#sevkiyat-detayi}

Sevkiyatın sayfasında duraklar (siparişler) teslimat sırasıyla listelenir.

- **Teslimat sırası:** duraklar **Yukarı taşı** / **Aşağı taşı** ile sıralanır, **Sırayı kaydet** ile kaydedilir.
- **Sipariş ekle** / **Çıkar:** plan yola çıkmadan değişebilir.
- **Yola çıkar:** sevkiyat **Yolda** olur, içindeki siparişler **Kargoya Verildi** durumuna geçer.
  Yoldaki sevkiyatta yalnız personele not değişir.
- **İptal et:** yalnız planlanmış (yola çıkmamış) sevkiyat iptal edilir; siparişler serbest kalır.

Her durağın sonucu, teslim alan kişi, not, fotoğraf ve imza personel kaydettikçe bu sayfada görünür.
Tüm duraklar sonuçlanınca sevkiyat **Tamamlandı** olur.

## Sipariş durumuna etkisi {#siparis-durumu}

| Teslimat sonucu | Siparişin durumu |
|---|---|
| Yola çıkış | **Kargoya Verildi** |
| **Teslim edildi** | **Tamamlandı** |
| **Kısmi teslim** | **Kargoya Verildi** olarak kalır; personelin açıklaması siparişe not düşülür. Eksik kalemler [iade talebiyle](/satis/iadeler) kapatılır |
| **Teslim edilemedi** | **Hazırlanıyor**'a döner; sipariş yeni bir sevkiyata eklenebilir |

Durum değişiklikleri sipariş geçmişine yazılır ve bayiye normal sipariş bildirimleri gider.

## Sevkiyat Raporu {#rapor}

**Sevkiyat › Sevkiyat Raporu**: seçilen tarih aralığında personel bazında tamamlanan sevkiyat sayısı,
teslim edilen, kısmi ve teslim edilemeyen teslimatlar ve başarı oranı.
