# Bayi Yazılımı Yardım

[yardim.bayiyazilimi.com](https://yardim.bayiyazilimi.com) sitesinin kaynağı. Site
[VitePress](https://vitepress.dev) ile üretilir ve `main` dalına her gönderimde GitHub Actions ile
GitHub Pages'e yayınlanır.

## Yerelde çalıştırma

```bash
npm ci
npm run dev       # http://localhost:5173
npm run build     # .vitepress/dist
```

## Yapı

| Klasör | İçerik |
|---|---|
| `baslangic/` | Tanıtım, kurulum, ilk ayarlar |
| `satis/` | Ürünler, Excel, siparişler, teklifler, iadeler, kargo |
| `musteriler/` | Müşteriler ve bayiler, fiyat ve indirimler, kampanyalar |
| `cari/` | Cari hesap, vadeli çalışma, havale, çek / senet, kartla ödeme |
| `stok/` | Depolar, stok işlemleri, mal kabul, lot / seri no, sayım, toplama listesi |
| `yonetim/` | Raporlar, para birimleri, roller ve yetkiler, eklentiler |
| `bayi-paneli/` | Bayinin gördüğü ekranlar |
| `vitrin/` | Vitrin eklentisi |
| `gelistirici/` | Geliştirici belgeleri |

Menü `.vitepress/config.mts` dosyasındadır. Yeni sayfa eklerken oraya da ekleyin.

## Yazım kuralları

- Ekran adlarını paneldeki gibi yazın ve yolu `›` ile verin: **Ayarlar › Tanımlamalar › Kargo Ayarları**.
- Kullanıcı sayfalarında kod, tablo adı ya da teknik terim kullanmayın. Bunlar `gelistirici/`
  bölümüne.
- Başlıklarda bağlantı verilecekse `{#kisa-ad}` ile açık bağlantı adı tanımlayın.
