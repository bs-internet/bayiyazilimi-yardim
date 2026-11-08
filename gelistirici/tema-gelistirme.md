# Tema geliştirme

Tema, mağaza ön yüzünün (Vitrin eklentisinin sunduğu sayfaların) görünümünü değiştiren bir
eklenti paketidir. Kurulumu, açılıp kapatılması ve kaldırılması diğer eklentilerle aynıdır (bkz.
[Eklenti geliştirme](/gelistirici/modul-gelistirme)); farkı, panelde **Ayarlar › Eklentiler ›
Temalar** ekranında listelenmesi ve oradan etkinleştirilmesidir (bkz. [Temalar](/yonetim/temalar)).

Bir tema **yalnız mağaza sayfalarını** (`shop/*`) değiştirebilir. Giriş ekranı, yönetim paneli ve
bayi paneli temadan etkilenmez.

## Paket yapısı

```
bsinternet/tema-modern
├── composer.json          # extra.laravel.providers → ModernServiceProvider
├── module.json            # "type": "theme"
├── src/ModernServiceProvider.php
└── resources/js/pages/
    └── themes/modern/     # themes/{tema anahtarı}/
        └── shop/
            ├── home.tsx           # Vitrin'in shop/home sayfasının yerine
            └── product/show.tsx   # shop/product/show sayfasının yerine
```

## `module.json`

```json
{
  "key": "modern",
  "name": "Modern",
  "type": "theme",
  "version": "1.0.0",
  "provider": "Bsinternet\\TemaModern\\ModernServiceProvider",
  "requires": { "vitrin": "^1.0" }
}
```

- `"type": "theme"` paketi tema yapar: Eklentiler sayfasında değil Temalar sayfasında görünür.
- `requires.vitrin` zorunludur; tema mağaza ön yüzünü değiştirdiği için Vitrin eklentisi olmadan
  çalışmaz. Temanın açıklaması, sürümü ve geliştireni Temalar ekranındaki kartta gösterilir.

## Sağlayıcı

Sağlayıcı yalnız kendi sayfa klasörünü Inertia'nın sayfa yollarına ekler:

```php
<?php

declare(strict_types=1);

namespace Bsinternet\TemaModern;

use Illuminate\Support\ServiceProvider;

class ModernServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        $this->app['config']->push('inertia.pages.paths', __DIR__.'/../resources/js/pages');
    }
}
```

## Sayfalar

- Sayfalar `resources/js/pages/themes/{tema anahtarı}/shop/...tsx` altında, **Vitrin'in sayfa
  adlarıyla aynı yolda** durur. Ör. `themes/modern/shop/home.tsx`, tema etkinken Vitrin'in
  `shop/home` sayfasının yerine açılır.
- Yalnız `shop/*` sayfaları değiştirilebilir.
- Tema bütün sayfaları vermek zorunda değildir: **vermediği sayfalarda Vitrin'in kendi sayfası**
  kullanılır. Yalnız ana sayfayı ya da ürün sayfasını değiştiren bir tema da geçerlidir.
- Sayfaya gelen veriler (props) Vitrin'in aynı sayfasınınkiyle aynıdır; aynı controller'lar
  çalışır, tema yalnız görünümü değiştirir.
- Tema sayfaları layout'larını **kendileri** belirler (`Sayfa.layout = …`).
- Vitrin'in ön yüz yardımcıları `@modules` takma adıyla içe aktarılır
  (`@modules/vitrin/...` → `vendor/bsinternet/vitrin/...`).

```tsx
// resources/js/pages/themes/modern/shop/home.tsx
import { useStorefront } from '@modules/vitrin/resources/js/components/storefront/use-storefront';
import ShopLayout from '@modules/vitrin/resources/js/layouts/shop-layout';

export default function ModernHome() {
    const { logo } = useStorefront(); // Vitrin'in tüm sayfalara paylaştığı veriler

    return (
        <section className="bg-store-soft py-16">
            <img src={logo} alt="" className="h-10" />
            <h1 className="text-3xl font-bold text-store-dark">Hoş geldiniz</h1>
            <a href="/urunler" className="mt-6 inline-block rounded-full bg-store-primary px-6 py-3 text-white">
                Ürünleri incele
            </a>
        </section>
    );
}

ModernHome.layout = ShopLayout;
```

Vitrin'in layout'u (`shop-layout`) üst bilgi, alt bilgi ve çerez şeridini getirir; tamamen farklı
bir üst / alt bilgi istiyorsanız kendi layout'unuzu yazın.

## Renkler

Mağaza sayfaları genel `store-*` Tailwind belirteçlerini kullanır; temanız da bunları kullanmalıdır
(`bg-store-primary`, `text-store-ink`, `border-store-border` …):

| Belirteç | Kullanım |
|---|---|
| `store-primary`, `store-primary-2` | Ana renk ve koyu tonu (bağlantı, düğme, fiyat vurgusu) |
| `store-dark`, `store-dark-2` | Koyu renk ve tonu (başlık, üst şerit, koyu alanlar) |
| `store-accent`, `store-accent-2` | Vurgu rengi ve tonu (rozet, kampanya) |
| `store-accent-foreground` | Vurgu renginin üzerindeki yazı rengi |
| `store-info`, `store-danger` | Bilgi ve hata renkleri |
| `store-ink`, `store-muted` | Metin ve soluk metin |
| `store-border`, `store-soft`, `store-footer` | Kenarlık, açık zemin, alt bilgi zemini |

Belirteçlerin değerleri `.storefront` sarmalayıcısındaki `--store-*` CSS değişkenleridir. Vitrin'in
**İçerik › Görünüm** ekranındaki renkler bu değişkenleri yazar; böylece `store-*` kullanan bir tema
mağaza sahibinin seçtiği renklere kendiliğinden uyar.

Temanın kendi renklerini kullanması için değişkenleri yeniden tanımlayın. Görünüm renkleri
`.storefront` öğesine yazıldığından, kendi değerlerinizi onun **içindeki** bir sarmalayıcıda (ya da
kendi layout'unuzun kök öğesinde) tanımlayın:

```css
.tema-modern {
    --store-primary: #7c3aed;
    --store-primary-2: #6d28d9;
    --store-accent: #f59e0b;
}
```

## Kurulum ve deneme

```bash
composer require bsinternet/tema-modern
php artisan bayi:install modern
npm run build        # geliştirirken: npm run dev
```

Ardından **Ayarlar › Eklentiler › Temalar**'da temayı **Etkinleştir**'e basın. Tema kaldırılır ya
da kapatılırsa mağaza kendiliğinden varsayılan temaya döner.
