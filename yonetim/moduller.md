# Modüller

Bayi Yazılımı'nın çekirdeği ücretsiz ve açık kaynaklıdır. Ek özellikler **modüllerle** gelir.

## Modüller ekranı

**Ayarlar › Genel Ayarlar › Modüller**

- **Kurulu modüller** — sürüm, kurulum tarihi ve durum. Her modül buradan **açılıp
  kapatılabilir**. Kapatılan modülün menüleri, ekranları ve özellikleri tamamen devre dışı
  kalır; **verileri silinmez**, yeniden açınca kaldığı yerden devam eder.
- **Tüm modüller** — sunulan modüllerin güncel listesi. Kurulu olanlar **Kurulu** rozetiyle
  gösterilir.

Bir modül başka bir modüle bağlıysa (ör. bir modül vitrini gerektiriyorsa) bağlı olduğu modül
kapatılamaz; bağımlı modül de gereken modül kapalıyken açılamaz.

::: warning Kurulum tamamlanmadı uyarısı
Ekranda bir modül için "kurulum tamamlanmadı" ya da "güncelleme tamamlanmadı" uyarısı görürseniz
sunucuda gösterilen komutu çalıştırın (ya da destek alın).
:::

## Sunulan modüller

| Modül | Ne yapar |
|---|---|
| **Vitrin** | Herkese açık e-ticaret sitesi: katalog, ana sayfa düzenleyici, müşteri kaydı, kupon. Bkz. [Vitrin modülü](/vitrin/) |
| **PayTR** | PayTR ile kartla ödeme, taksit, iade, kartla cari tahsilat. Bkz. [Kartla ödeme](/cari/kartla-odeme) |
| **iyzico** | iyzico ile kartla ödeme, taksit, iade, kartla cari tahsilat |

Güncel liste, fiyatlar ve destek paketleri: [bayiyazilimi.com](https://bayiyazilimi.com).

## Modül kurulumu

Satın aldığınız modül sunucunuza kurulur. Kurulumu kendiniz yapmak isterseniz (VPS):

```bash
composer require bsinternet/<modül>
php artisan bayi:install <modül>
npm run build
```

Kaldırmak için önce `php artisan bayi:uninstall <modül>`, sonra `composer remove
bsinternet/<modül>`. Kaldırma işlemi varsayılan olarak modülün **verilerini silmez**.
