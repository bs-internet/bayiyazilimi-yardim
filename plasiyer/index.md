# Plasiyer eklentisi

**Plasiyer** (ücretli eklenti) saha satış temsilcilerinizi sisteme bağlar. Her plasiyer kendi
**telefona uygun ekranında** (`/plasiyer`) yalnızca kendisine atanmış bayileri görür; onlar adına
sipariş ve teklif girer, tahsilat ve ziyaret notu kaydeder, aylık hedefini ve primini izler.
Plasiyer yönetim paneline giremez.

- **Sipariş / teklif:** bayinin kendi fiyatları, iskontoları, kampanyaları ve kredi limiti geçerlidir.
- **Tahsilat:** plasiyerin girdiği tahsilat **yönetici onayından sonra** cariye işlenir.
- **Prim:** aylık hedef ve prim hesabı panelden açılıp kapatılır.
- **Rapor:** plasiyer bazında aylık satış, tahsilat ve prim; Excel'e aktarılır.

Plasiyer ekranının kullanımı için bkz. [Plasiyer ekranı](/plasiyer/plasiyer-ekrani).

## Kurulum ve lisans {#kurulum}

Plasiyer özel depodadır; satın aldığınızda verilen erişimle kurulur
(bkz. [Eklentiler](/yonetim/moduller)):

```bash
composer config repositories.plasiyer vcs https://github.com/bs-internet/bayiyazilimi-plasiyer
composer require bsinternet/plasiyer
php artisan bayi:install plasiyer
npm run build
```

Lisans plasiyer sayısına göredir: **10 plasiyere kadar** ve **sınırsız**. Aynı anda olabilecek aktif
plasiyer sayısı `.env` dosyasındaki ayarla belirlenir (kurulumda yapılır):

```ini
PLASIYER_MAX_REPS=10   # 0 = sınırsız
```

Sınıra ulaşınca yeni plasiyer eklenemez ya da pasif bir plasiyer aktif yapılamaz; ekranlarda
"x / 10 plasiyer" ya da "Sınırsız" görünür.

## Plasiyerler {#plasiyerler}

**Plasiyerler › Plasiyerler** — temsilcilerin listesi. **Yeni plasiyer** ile eklenir:

| Alan | Açıklama |
|---|---|
| **Ad soyad**, **E-posta**, **Telefon** | Plasiyerin bilgileri; telefon bayinin "Satış temsilciniz" kartında görünür |
| **Parola** | Boş bırakılırsa plasiyere parolasını belirlemesi için hoş geldin e-postası gider |
| **Aylık satış hedefi** | Hedefim ekranında ve raporda gerçekleşmeyle karşılaştırılır |
| **Prim oranı (%)** | Prim hesabı açıkken hak edilen prim bu oranla hesaplanır |
| **Durum** | Pasif plasiyer giriş yapamaz ve lisans sayısına girmez |

### Bayi atama

Plasiyerin düzenleme ekranındaki **Atanmış bayiler** bölümünden **Bayi ata** ile bir ya da birden
çok bayi seçilir (**Seçilenleri ata**). Bir bayinin tek plasiyeri olur: başka plasiyere atanmış bir
bayi seçilirse yeni plasiyere geçer ("Şu an: …" uyarısı görünür). **Bayiyi al** atamayı kaldırır.

Plasiyer yalnız atanmış bayilerini görür; başka bir bayiye ait sayfa ya da işlem açılmaz.

## Tahsilat Onayları {#tahsilat-onaylari}

**Plasiyerler › Tahsilat Onayları** — plasiyerlerin girdiği tahsilatlar **Onay bekleyenler**,
**Onaylananlar** ve **Reddedilenler** olarak listelenir.

- **Onayla:** tahsilat bayinin carisine işlenir (nakit / havale için alacak kaydı; çek için ayrıca
  [çek portföyüne](/cari/cek-senet) girer). Aynı tahsilat iki kez onaylanamaz.
- **Reddet:** **Ret nedeni** zorunludur; plasiyer durumu ve nedeni kendi ekranında görür.

Yeni tahsilat geldiğinde onay yetkisi olan yöneticilere, sonuçta plasiyere sistem içi bildirim gider.

## Plasiyer Raporu {#rapor}

**Plasiyerler › Plasiyer Raporu** — seçilen ay için her plasiyerin hedefi, net satışı, gerçekleşme
oranı, onaylı tahsilatı ve (prim açıksa) prim matrahı ile hak edilen primi. **Excel** ile indirilir.

**Prim kuralı:** prim matrahı, plasiyerin bayilerinin o ay **tamamlanan ve ödenmiş**
siparişlerinin net (KDV hariç) ara toplamıdır; sipariş tamamlandığı ayda sayılır. Plasiyerin
girdiği siparişler ile bayinin kendi verdiği siparişler birlikte sayılır.

## Plasiyer Ayarları {#ayarlar}

**Plasiyerler › Plasiyer Ayarları**

| Alan | Açıklama |
|---|---|
| **Prim hesapla** | Kapalıyken prim alanları plasiyer ekranında ve raporda gizlenir |
| **Lisans** | Kullanılan / izin verilen plasiyer sayısı (yalnız gösterim; `PLASIYER_MAX_REPS`) |

## Yetkiler {#yetkiler}

Kurulum iki görev ekler: **Plasiyer Yöneticisi** (eklentinin tüm panel yetkileri) ve **Plasiyer**
(panel yetkisi yok; plasiyer ekranı için yeterlidir). Ayrıntı:
[Görevler ve yetkiler](/yonetim/roller-yetkiler).
