# Plasiyer eklentisi

**Plasiyer** (ücretli eklenti) saha satış temsilcilerinizi sisteme bağlar. Her plasiyer kendi
**telefona uygun ekranında** (`/plasiyer`) yalnızca kendisine atanmış bayileri görür. Onlar adına
sipariş ve teklif girer, tahsilat ve ziyaret notu kaydeder, aylık hedefini ve primini izler.
Plasiyer yönetim paneline giremez.

- **Sipariş / teklif:** bayinin kendi fiyatları, iskontoları, kampanyaları ve kredi limiti geçerlidir.
- **Tahsilat:** plasiyerin girdiği tahsilat **yönetici onayından sonra** cariye işlenir.
- **Prim:** aylık hedef ve prim hesabı panelden açılıp kapatılır.
- **Rapor:** plasiyer bazında aylık satış, tahsilat ve prim; Excel'e aktarılır.

Plasiyer ekranının kullanımı için bkz. [Plasiyer ekranı](/plasiyer/plasiyer-ekrani).

## Kurulum ve lisans {#kurulum}

Plasiyer ücretli bir eklentidir, satın aldığınızda sunucunuza kurulur (bkz.
[Eklentiler](/yonetim/moduller#eklenti-kurulumu)).

Lisans plasiyer sayısına göredir: **10 plasiyere kadar** ve **sınırsız**. Aynı anda olabilecek aktif
plasiyer sayısı kurulumda lisansınıza göre ayarlanır.

Sınıra ulaşınca yeni plasiyer eklenemez ya da pasif bir plasiyer aktif yapılamaz. Ekranlarda
"x / 10 plasiyer" ya da "Sınırsız" görünür.

## Plasiyerler {#plasiyerler}

**Plasiyerler › Plasiyerler**: temsilcilerin listesi. **Yeni plasiyer** ile eklenir:

| Alan | Açıklama |
|---|---|
| **Ad soyad**, **E-posta**, **Telefon** | Plasiyerin bilgileri. Telefon bayinin "Satış temsilciniz" kartında görünür |
| **Parola** | Boş bırakılırsa plasiyere parolasını belirlemesi için hoş geldin e-postası gider |
| **Aylık satış hedefi** | Hedefim ekranında ve raporda gerçekleşmeyle karşılaştırılır |
| **Prim oranı (%)** | Prim hesabı açıkken hak edilen prim bu oranla hesaplanır |
| **Durum** | Pasif plasiyer giriş yapamaz ve lisans sayısına girmez |

### Bayi atama

Plasiyerin düzenleme ekranındaki **Atanmış bayiler** bölümünden **Bayi ata** ile bir ya da birden
çok bayi seçilir (**Seçilenleri ata**). Bir bayinin tek plasiyeri olur: başka plasiyere atanmış bir
bayi seçilirse yeni plasiyere geçer ("Şu an: …" uyarısı görünür). **Bayiyi al** atamayı kaldırır.

Plasiyer yalnız atanmış bayilerini görür. Başka bir bayiye ait sayfa ya da işlem açılmaz.

## Tahsilat Onayları {#tahsilat-onaylari}

**Plasiyerler › Tahsilat Onayları**: plasiyerlerin girdiği tahsilatlar **Onay bekleyenler**,
**Onaylananlar** ve **Reddedilenler** olarak listelenir.

- **Onayla:** tahsilat bayinin carisine işlenir (nakit / havale için alacak kaydı. Çek için ayrıca
  [çek portföyüne](/cari/cek-senet) girer). Aynı tahsilat iki kez onaylanamaz.
- **Reddet:** **Ret nedeni** zorunludur. Plasiyer durumu ve nedeni kendi ekranında görür.

Yeni tahsilat geldiğinde onay yetkisi olan yöneticilere, sonuçta plasiyere sistem içi bildirim gider.

## Plasiyer Raporu {#rapor}

**Plasiyerler › Plasiyer Raporu**: seçilen ay için her plasiyerin hedefi, net satışı, gerçekleşme
oranı, onaylı tahsilatı ve (prim açıksa) prim matrahı ile hak edilen primi. **Excel** ile indirilir.

**Prim kuralı:** prim matrahı, plasiyerin bayilerinin o ay **tamamlanan ve ödenmiş**
siparişlerinin net (KDV hariç) ara toplamıdır. Sipariş tamamlandığı ayda sayılır. Plasiyerin
girdiği siparişler ile bayinin kendi verdiği siparişler birlikte sayılır.

## Plasiyer Ayarları {#ayarlar}

**Plasiyerler › Plasiyer Ayarları**

| Alan | Açıklama |
|---|---|
| **Prim hesapla** | Kapalıyken prim alanları plasiyer ekranında ve raporda gizlenir |
| **Lisans** | Kullanılan / izin verilen plasiyer sayısı (yalnız gösterim; `PLASIYER_MAX_REPS`) |

## Yetkiler {#yetkiler}

Kurulum iki görev ekler: **Plasiyer Yöneticisi** (eklentinin tüm panel yetkileri) ve **Plasiyer**
(panel yetkisi yok. Plasiyer ekranı için yeterlidir). Ayrıntı:
[Görevler ve yetkiler](/yonetim/roller-yetkiler).
