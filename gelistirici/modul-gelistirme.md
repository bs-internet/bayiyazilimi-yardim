# Eklenti geliştirme

Eklentiler (kodda ve paket yapısında "modül" olarak geçer: `module.json`, `bayi:install`), çekirdeğe dokunmadan panel ve bayi paneline **menü, rota, yetki, ekran ve e-posta**
ekleyen sıradan composer paketleridir. Laravel'in paket otomatik keşfiyle yüklenir; sunucu
tarafında derleme adımı yoktur, yalnız ön yüz Vite ile derlenir.

## Hook + Registry

- **Hook'lar** — çekirdek adlandırılmış genişleme noktalarını tetikler, eklentiler bunlara bağlanır.
  Global `hooks()` yardımcısı: yan etki için `action` / `do`, değer dönüştürmek için `filter` /
  `apply`.
- **Registry'ler** — eklentilerin yazdığı tipli yapılar: `MenuRegistry`, `PermissionRegistry`,
  `PaymentRegistry`, `CampaignRegistry` …

> Kısaca: **hook = ne zaman / nerede katkı yapılır, registry = ne eklenir (tipli).**

Başlıca hook'lar:

| Hook | Ne için |
|---|---|
| `panel.routes.register` / `app.routes.register` | Rotalar. Hook ilgili middleware grubunun **içinde** tetiklenir; eklenti rotaları tüm middleware'i ve `panel.` / `app.` ad önekini devralır |
| `panel.menu.register` / `app.menu.register` | Kenar çubuğu menüsü (`MenuRegistry`) |
| `panel.permissions.register` | Yetkiler (`PermissionRegistry`, `source` = eklenti anahtarı) |
| `shop.payment.methods.register` | Ödeme sürücüleri. Bkz. [Ödeme altyapısı](/gelistirici/odeme-altyapisi) |
| `shop.campaigns.conditions.register` / `shop.campaigns.actions.register` | Kampanya koşul ve işlem türleri |
| `database.seed` | Eklentinin başlangıç verileri |

Callback'leri sağlayıcının `register()` metodunda bağlayın (çekirdek tetiklemeden önce).

## Paket yapısı

```
bsinternet/ptt
├── composer.json        # extra.laravel.providers → PttServiceProvider
├── module.json          # bildirim (aşağıda)
├── src/PttServiceProvider.php
├── routes/panel.php
├── database/migrations/
├── resources/js/pages/  # .tsx sayfaları (host'un Vite'ı derler)
└── lang/tr.json         # eklentinin çeviri kataloğu
```

## `module.json`

```jsonc
{
  "key": "ptt",
  "name": "PTT Kargo",
  "provider": "Bsinternet\\Ptt\\PttServiceProvider",
  "areas": ["panel", "app"],
  "requires": { "php": "^8.4", "laravel": "^13.0", "bayiyazilimi": "^1.0" },
  "publish": [
    { "from": "resources/views/mail", "to": "resources/views/vendor/ptt" }
  ],
  "migrate": true,
  "permissions": "remove",   // kaldırırken yetkiler: "remove" | "keep"
  "purge_data": false,
  "enabled": true
}
```

`requires` içindeki `php` / `laravel` / `bayiyazilimi` dışındaki anahtarlar başka eklentilerdir;
Eklentiler ekranı bu bağımlılıkları açma / kapatmada uygular.

## Kurulum komutları

```bash
composer require bsinternet/ptt
php artisan bayi:install ptt      # requires kontrolü, publish, migrate, yetkiler
npm run build

php artisan bayi:uninstall ptt    # composer remove'dan ÖNCE
composer remove bsinternet/ptt
```

- `bayi:install` çakışan rota / yetki adlarında uyarır, yetkileri **hiçbir role atamadan** ekler
  ve eklentiyi `installed_modules` tablosuna kaydeder.
- `bayi:uninstall` yalnız **değiştirilmemiş** publish dosyalarını siler; tablolara `--purge-data`
  verilmeden dokunmaz. `../` ile proje dışına çıkan yollar reddedilir.
- `module.json`'ın ifade edemediği işler için eklenti `installed()` / `uninstalling()` metotlu bir
  `Installer` sınıfı sunabilir.

## Ön yüz

- Eklentinin kendi tasarım sistemi yoktur; çekirdeğin bileşenlerini `@` takma adıyla kullanır
  (`@/components/ui/*`, layout'lar, hook'lar).
- Sayfalar kopyalanmaz, `vendor/bsinternet/*/resources/js/pages`'ten çözülür. Host'ta aynı yolda
  bir sayfa varsa o kullanılır (müşteriye özel tasarım).
- Eklenti `resources/js/extensions.ts` ile çekirdeğin adlandırılmış yuvalarına (`<Slot>`) bileşen
  yerleştirebilir.
- Çeviriler eklentinin `lang/tr.json` dosyasındadır; eklenti kaldırılınca metinleri de gider.
- Mağaza ön yüzünün görünümünü değiştiren paketler (temalar) için bkz. [Tema geliştirme](/gelistirici/tema-gelistirme).

## Yerel geliştirme

Eklentiyi çekirdeğin `packages/` klasörüne (git dışı) klonlayın ve:

```bash
composer modules:link
```

Bu komut eklentileri git dışı bir `composer.local.json` ile kurar, yerel `phpunit.xml` ve
`phpstan.neon` dosyalarını üretir. Commit'lenen `composer.json` / `composer.lock` hiçbir eklentiye
başvurmaz. Düz `composer install` eklentileri vendor'dan kaldırır; ardından komutu yeniden
çalıştırın.

## Açma / kapama

Eklentiler ekranından kapatılan eklentinin paketi otomatik keşiften çıkarılır: sağlayıcısı, rotaları,
menüsü, hook'ları ve çevirileri yüklenmez; verisi kalır. Durum bir JSON dosyasında tutulur
(`storage/app/modules.json`), çünkü sağlayıcılar veritabanı hazır olmadan kaydedilir.
