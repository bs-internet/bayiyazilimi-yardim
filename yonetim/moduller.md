# Modüller

Bayi Yazılımı'nın çekirdeği ücretsiz ve açık kaynaklıdır; tek başına eksiksiz bir B2B sistemidir.
Ek özellikler **modüllerle** gelir.

## Sunulan modüller

| Modül | Ne yapar |
|---|---|
| **Vitrin** | Herkese açık e-ticaret sitesi: katalog, ana sayfa düzenleyici, müşteri kaydı, kupon. Bkz. [Vitrin modülü](/vitrin/) |
| **PayTR** | PayTR ile kartla ödeme, taksit, iade, kartla cari tahsilat. Bkz. [Kartla ödeme](/cari/kartla-odeme) |
| **iyzico** | iyzico ile kartla ödeme, taksit, iade, kartla cari tahsilat |

Güncel liste, fiyatlar ve destek paketleri: [bayiyazilimi.com](https://bayiyazilimi.com).

## Modüller ekranı

**Ayarlar › Genel Ayarlar › Modüller** — "Kurulu modülleri açıp kapatın. Kapatılan modülün menüsü,
sayfaları ve özellikleri devre dışı kalır; verileri silinmez."

### Kurulu modüller

Sunucuya kurulu her modül bir kart olarak listelenir. Hiç modül yoksa "Kurulu modül yok. Sistem
varsayılan B2B özellikleriyle çalışıyor." yazar.

| Kartta | Açıklama |
|---|---|
| Ad ve sürüm | Modülün adı ve kurulu sürüm numarası |
| **Kapalı** etiketi | Modül kapatılmışsa |
| **Kurulum tamamlanmadı** etiketi | Modülün dosyaları sunucuda ama kurulum adımı (veritabanı tabloları, yetkiler) hiç çalıştırılmamış. Altında çalıştırılacak komut yazar |
| **Güncelleme tamamlanmadı** etiketi | Modülün yeni sürümü yüklenmiş ama kurulum adımı yeni sürüm için çalıştırılmamış. Altında çalıştırılacak komut yazar |
| Açıklama | Modülün kısa tanımı |
| Kuruldu: *tarih* | İlk kurulum tarihi |
| Geliştiren | Modülü geliştiren |
| Gerekli modüller | Bu modülün çalışması için açık olması gereken modüller |
| Kullanan modüller | Bu modüle ihtiyaç duyan modüller |
| Aç / kapat anahtarı | Modülü açar ya da kapatır |

### Modülü kapatmak / açmak

1. Modülün anahtarını kapatın.
2. "*Modül* modülü kapatılsın mı?" penceresinde **Kapat**'a basın.

Kapatılan modülün **menüleri, ekranları ve özellikleri tamamen devre dışı** kalır. **Verileri
silinmez**; anahtarı yeniden açtığınızda kaldığı yerden devam eder.

Bağımlılık kuralları:

- Başka bir açık modülün ihtiyaç duyduğu modül kapatılamaz ("… modülünü şu modüller kullanıyor:
  … Önce onları kapatın.").
- Bir modül, ihtiyaç duyduğu modüller kapalıyken açılamaz ("… modülü için önce şu modüller
  açılmalı: …").

Açma / kapatma [etkinlik kayıtlarına](/yonetim/etkinlik-kayitlari) yazılır.

### Tüm modüller

"Sisteminize eklenebilecek modüller." Liste her açılışta bayiyazilimi.com'dan güncel haliyle
alınır ("Ek modüller yükleniyor…"); sunucu internete çıkamazsa son alınan liste gösterilir.
Kurulu olanlar **Kurulu** rozetiyle işaretlidir. **İncele** modülün tanıtım sayfasını açar.

## Modül kurulumu

Satın aldığınız modül sunucunuza kurulur. Kurulumu kendiniz yapmak isterseniz (SSH gerekir):

```bash
composer require bsinternet/<modül>
php artisan bayi:install <modül>
npm run build
```

`bayi:install` modülün veritabanı tablolarını oluşturur, gerekli dosyaları yerleştirir ve
yetkilerini yetki listesine ekler. Yetkiler **hiçbir göreve atanmaz**: modülün ekranlarını
çalışanlarınıza açmak için **Ayarlar › Kullanıcılar › Görevler**'de ilgili görevlere atayın (bkz.
[Görevler ve yetkiler](/yonetim/roller-yetkiler#nasil-yapilir)). O zamana kadar ekranları yalnız
Super Admin görür.

Var olan dosyaların üzerine yazmak için `php artisan bayi:install <modül> --force`.

Modül güncellemesi: [Güncelleme ve yedekleme](/baslangic/guncelleme-yedekleme#guncelleme).

## Modülü kaldırma

Sıra önemlidir: **önce** `bayi:uninstall`, **sonra** `composer remove`.

```bash
php artisan bayi:uninstall <modül>
composer remove bsinternet/<modül>
npm run build
```

- Kaldırma **verileri silmez**; modülün tabloları ve kayıtları korunur. Verileri de silmek için
  `--purge-data` ekleyin (geri alınamaz; önce [yedek alın](/baslangic/guncelleme-yedekleme#yedek)).
- Modülün yetkileri görevlere atanmışsa etkilenecek görevler gösterilir ve onay sorulur
  (`--force` ile sorulmaz).
- Sizin değiştirdiğiniz modül dosyaları silinmez, rapor edilir.

Geçici olarak durdurmak için kaldırmak yerine Modüller ekranından **kapatmak** yeterlidir.

## Yetki

Modüller ekranının yetkileri (görüntüleme ve açma / kapatma) kurulumla gelmez; **Rotalardan
Keşfet** ile eklenip bir göreve atanana kadar yalnız Super Admin kullanabilir.
