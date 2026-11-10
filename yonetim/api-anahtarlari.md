# API Anahtarları

**Ayarlar › API Anahtarları**: "ERP, muhasebe programı ya da özel yazılımlarınız ürün, stok,
sipariş ve cari verilerine REST API ile erişir. İstekler Authorization: Bearer başlığıyla anahtar
gönderir."

Bayi Yazılımı'nın bir **REST API**'si vardır: ERP'niz, muhasebe programınız ya da yazılımcınızın
hazırladığı bir program. Ürünleri ve siparişleri okuyabilir, stok miktarlarını ve fiyatları
güncelleyebilir, sipariş durumunu ve fatura numarasını yazabilir, cari hesaplara tahsilat
işleyebilir. Bu programın sisteme bağlanmak için kullandığı şifreye **API anahtarı** denir.

Ekranın üstünde sisteminizin **API adresi** yazar (ör. `https://bayi.firmaniz.com/api/v1`).
Anahtarla birlikte bu adresi de entegrasyonu yapacak kişiye verirsiniz. Teknik ayrıntılar
geliştiriciler için [REST API](/gelistirici/rest-api) sayfasındadır.

## Anahtar kimin adına çalışır? {#kimin-adina}

Anahtar, **onu oluşturan yöneticiye** aittir ve API o yöneticinin adına çalışır: API'den yapılan
her değişiklik (stok düzeltmesi, sipariş durumu, cari hareket …) [Etkinlik
kayıtları](/yonetim/etkinlik-kayitlari)'nda ve sipariş geçmişinde bu yöneticinin adıyla görünür.

| Anahtarın sahibi | Anahtar |
|---|---|
| **Aktif** yönetici | Normal çalışır (yalnız verilen yetkiler kadar) |
| **Kısıtlı** yönetici | Yalnız **okuma** yapar. Yazma istekleri reddedilir |
| **Pasif** yapılan yönetici | **Çalışmaz.** Yönetici yeniden aktif yapılırsa anahtarları da yeniden çalışır |
| **Silinen** yönetici | **Çalışmaz** |

::: tip Entegrasyon için ayrı kullanıcı
Anahtarı kişisel hesabınızla oluşturursanız, siz işten ayrılıp hesabınız pasif yapıldığında
entegrasyon da durur. Entegrasyonlar için ayrı bir yönetici kullanıcı (ör. "ERP Entegrasyonu")
açıp anahtarı onunla oluşturmanız önerilir. Böylece etkinlik kayıtlarında API işlemleri de ayrı
görünür.
:::

::: warning Yetkiyi panel görevi değil, anahtarın izinleri belirler
API, sahibinin paneldeki görevine (rolüne) bakmaz. Anahtarın neye erişeceğini yalnız oluştururken
seçilen **yetkiler** belirler. Örneğin yalnız siparişleri görebilen bir çalışan "Cari hareket
yazma" yetkili bir anahtar oluşturursa, o anahtar cari hareket yazabilir. Bu yüzden ekrana kimin
erişeceğini dikkatle seçin (bkz. [Yetki](#yetki)).
:::

## Anahtar oluşturmak {#olusturmak}

Sayfanın altındaki **Yeni anahtar oluştur** bölümünü doldurun:

| Alan | Açıklama |
|---|---|
| **Anahtar adı** | **Zorunlu.** Anahtarın ne için kullanıldığını anlatan ad (ör. "Muhasebe entegrasyonu", "Logo stok aktarımı"). Listede bu adla görünür |
| **Geçerlilik sonu (isteğe bağlı)** | Boş bırakılırsa anahtarın süresi dolmaz. Bir tarih seçilirse anahtar o günün sonuna kadar çalışır, sonra kendiliğinden geçersiz olur. Bugünden sonraki bir tarih olmalıdır |
| **Yetkiler** | **En az biri zorunlu.** Anahtarın neler yapabileceği (aşağıdaki tablo) |

### Yetkiler {#yetkiler}

| Yetki | Ne sağlar |
|---|---|
| **Ürünleri okuma** | Ürün listesi ve ürün ayrıntısı: fiyat, KDV, durum, depo bazında stok |
| **Ürün güncelleme (fiyat, durum)** | Ürünün adı, barkodu, fiyatı, karşılaştırma fiyatı, KDV oranı, durumu, sipariş adetleri, teslim süresi ve kritik stoğu |
| **Stok miktarı yazma** | Ürünlerin depolardaki stok miktarını toplu olarak güncelleme |
| **Siparişleri okuma** | Sipariş listesi ve sipariş ayrıntısı: müşteri, adresler, satırlar, tutarlar, ödeme, fatura ve kargo bilgisi |
| **Sipariş durumu ve fatura bilgisi yazma** | Sipariş durumunu değiştirme (kargo bilgisiyle), fatura numarası yazma |
| **Cari hesapları okuma** | Cari hesap listesi ve ayrıntısı: unvan, vergi bilgileri, bakiye, kredi limiti, risk |
| **Cari hareket yazma (tahsilat, dekont)** | Cari hesaba tahsilat, borç dekontu ya da alacak dekontu işleme |

Kurulu eklentiler bu listeye kendi yetkilerini ekleyebilir.

Kaydetmek için **Anahtar oluştur**'a basın.

### Anahtarı kopyalayın: yalnız bir kez gösterilir {#kopyalama}

Anahtar oluşturulunca sayfanın üstünde **Yeni API anahtarınız** kutusu açılır: "Anahtarı şimdi
kopyalayıp güvenli bir yere kaydedin. Bu sayfadan ayrıldığınızda bir daha gösterilmez."

1. **Kopyala** düğmesine basın (düğme kısa süre **Kopyalandı** olur).
2. Anahtarı entegrasyonu yapacak programa ya da kişiye güvenli bir yoldan iletin.

Anahtarın kendisi sistemde saklanmaz (yalnız doğrulamak için bir özeti tutulur). Bu yüzden sonradan
**hiç kimse, siz de dahil, anahtarı yeniden göremez**. Kaybettiyseniz eskisini iptal edip yeni bir
anahtar oluşturun.

## Mevcut anahtarlar {#liste}

Tüm yöneticilerin anahtarları, en yeniden eskiye listelenir. Hiç anahtar yoksa "Henüz API anahtarı
yok" yazar.

| Sütun | Açıklama |
|---|---|
| **Ad** | Anahtarın adı. Altında geçerlilik sonu tarihi ("Geçerlilik sonu: *tarih*") ya da süresi dolmuşsa **Süresi doldu** etiketi görünür |
| **Sahibi** | Anahtarı oluşturan (API'nin adına çalıştığı) yönetici |
| **Yetkiler** | Anahtara verilen yetkiler |
| **Son kullanım** | Anahtarla en son istek yapılan zaman. Hiç kullanılmadıysa "Hiç kullanılmadı" |
| **Oluşturulma** | Anahtarın oluşturulduğu tarih |
| **İşlem** | **İptal et** |

**Son kullanım** sütunu, hangi anahtarların gerçekten kullanıldığını görmenizi sağlar: uzun süredir
kullanılmayan ya da "Hiç kullanılmadı" yazan anahtarları iptal etmeyi düşünün.

::: info Yetkiler sonradan değiştirilemez
Bir anahtarın adı, yetkileri ya da geçerlilik süresi sonradan düzenlenemez. Farklı yetki
gerekiyorsa yeni anahtar oluşturup programda onu kullanın, eskisini iptal edin.
:::

## Anahtarı iptal etmek {#iptal}

1. Anahtarın satırındaki **İptal et**'e basın.
2. "API anahtarı iptal edilsin mi?" penceresinde **İptal et** ile onaylayın.

İptal edilen anahtar **hemen** çalışmaz olur. Onu kullanan program "Kimlik doğrulanamadı" hatası
almaya başlar. İptal geri alınamaz.

Şu durumlarda anahtarı iptal edin:

- Anahtarın başkalarının eline geçtiğinden şüpheleniyorsanız (hemen),
- Entegrasyon artık kullanılmıyorsa ya da program değiştiyse,
- Anahtarı bilen çalışan ya da firma (ör. yazılımcı) ile çalışma sona erdiyse.

## Güvenlik önerileri {#guvenlik}

- **Anahtarı şifre gibi saklayın.** E-postayla, mesajlaşma grubunda ya da ekran görüntüsüyle
  paylaşmayın. Programın ayarlarında ya da bir şifre yöneticisinde saklayın.
- **En az yetki verin.** Program yalnız stok yazıyorsa yalnız **Stok miktarı yazma** yetkisi
  verin. Okuma ihtiyacı yoksa okuma yetkisi eklemeyin.
- **Her entegrasyona ayrı anahtar.** Muhasebe programı ve stok aktarımı aynı anahtarı kullanmasın;
  biri sorun çıkarırsa yalnız onu iptal edersiniz, Son kullanım sütunu da anlamlı olur.
- **Geçici işlere süreli anahtar.** Bir defalık aktarım ya da deneme için geçerlilik sonu
  verin.
- **Kullanılmayanları iptal edin.** Listeyi ara ara gözden geçirin.
- Sitenizin **HTTPS** ile çalıştığından emin olun. Anahtar her istekte gönderilir.

## Yetki {#yetki}

Ekran, [Görevler ve yetkiler](/yonetim/roller-yetkiler) ekranındaki izinlerle korunur:

| İzin | Ne sağlar |
|---|---|
| `panel.settings.api-tokens.index` | Ekranı ve tüm anahtarların listesini görme |
| `panel.settings.api-tokens.store` | Yeni anahtar oluşturma |
| `panel.settings.api-tokens.destroy` | Anahtar iptal etme (başka yöneticilerinkiler dahil) |

Yeni kurulumlarda bu izinler **Admin** görevinde hazır gelir; Süper Admin her zaman erişir. Daha
eski bir sürümden güncellenen sistemde izinler listede yoksa [Rotalardan
Keşfet](/yonetim/roller-yetkiler#rotalardan-kesfet) ile ekleyip ilgili göreve verin.

Anahtar oluşturabilen kişi her yetkide anahtar oluşturabileceği için (bkz. [yukarıdaki
uyarı](#kimin-adina)) bu izinleri yalnız güvendiğiniz yöneticilere verin.

## Etkinlik kayıtları {#etkinlik}

Anahtar işlemleri [Etkinlik kayıtları](/yonetim/etkinlik-kayitlari)'na düşer (oluşturma kaydı
**API Anahtarı** kayıt türüyle süzülebilir):

| İşlem | Açıklama örneği |
|---|---|
| Anahtar oluşturma | "*Ad Soyad*, *Muhasebe entegrasyonu* adlı API anahtarını oluşturdu." (verilen yetkiler ve geçerlilik sonu da kaydedilir) |
| Anahtar iptali | "*Ad Soyad*, *Muhasebe entegrasyonu* adlı API anahtarını iptal etti." |

API üzerinden yapılan işlemlerin kendisi (stok, sipariş, cari) ilgili kayıt türüyle, **anahtarın
sahibi** adına kaydedilir.
