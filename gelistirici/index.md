# Geliştirici: genel bakış

Bu bölüm Bayi Yazılımı'nı geliştirmek, eklenti yazmak ya da başka sistemlerle bağlamak isteyen
geliştiriciler içindir.

## Teknik yapı

| Katman | Kullanılan |
|---|---|
| Sunucu | Laravel 13, PHP 8.4+ |
| Ön yüz | React 19, TypeScript, Inertia.js v3, Tailwind CSS v4, shadcn/ui |
| Rotalar | Laravel Wayfinder (tipli rota yardımcıları) |
| Kimlik doğrulama | Laravel Fortify (2FA dahil) |
| Yetki | spatie/laravel-permission: **rota adı = yetki adı** |
| Para | brick/money: tutarlar hiçbir yerde float değildir |
| Test | Pest 4 |
| Veritabanı | MySQL 8+ / MariaDB 10.6+ |

Kaynak kod: [github.com/bs-internet/bayiyazilimi](https://github.com/bs-internet/bayiyazilimi).
Depodaki **AGENTS.md** mimariyi ve uyulması gereken kuralları ayrıntılı anlatır. Katkı için
**CONTRIBUTING.md**.

## Geliştirme ortamı

```bash
git clone https://github.com/bs-internet/bayiyazilimi.git
cd bayiyazilimi
composer setup                 # bağımlılıklar, .env, anahtar, veritabanı, ön yüz
php artisan migrate --seed     # geliştirme verileri: admin@admin.com / password
composer dev                   # sunucu + kuyruk + Vite
composer ci:check              # lint + biçim + tipler + testler
```

## Temel kurallar

- **İki alan:** yönetim paneli (`/panel`, `Panel/*`) ve bayi paneli (`/app`, `App/*`). Kod bu
  ayrımla klasörlenir.
- **Hesap kapsamı:** üyeye ait veriler `account_id` ile hesaba bağlıdır. Bayi panelinde sorgular
  otomatik olarak oturumdaki hesapla sınırlanır. `account_id` istekten alınmaz.
- **Yan etkiler olayla:** etkinlik kaydı, bildirim ve e-posta yalnız `event() → listener`
  zinciriyle yapılır. Controller ve servisler doğrudan göndermez.
- **Çeviri:** kullanıcıya görünen her metin `__()` (PHP) ya da `t()` (TSX) içinden geçer. Anahtar
  Türkçe metnin kendisidir.
- **Çekirdek eklentiye bağımlı olmaz:** eklenti ihtiyacı için çekirdekte hook açılır.

## Bu bölümde

- [Eklenti geliştirme](/gelistirici/modul-gelistirme): hook + registry sistemi, `module.json`
- [Tema geliştirme](/gelistirici/tema-gelistirme): mağaza ön yüzü teması yazma
- [Ödeme altyapısı](/gelistirici/odeme-altyapisi): ödeme sürücüsü yazma
- [Cari defter](/gelistirici/cari-defter): hareket modeli, ERP entegrasyon noktaları
- [Stok altyapısı](/gelistirici/stok-altyapisi): stok katmanları ve kurallar
- [REST API](/gelistirici/rest-api): `/api/v1`: ürün, stok, sipariş ve cari uç noktaları, ERP eşitlemesi
