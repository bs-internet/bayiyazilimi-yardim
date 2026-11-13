# REST API

Bayi Yazılımı, ERP / muhasebe programları, özel yazılımlar ve ileride mobil uygulamalar için bir
**REST API** sunar. Panelde yapılan işler API'den de yapılır: ürün, stok, fiyat, kategori / marka,
sipariş, cari hesap ve webhook. Yazma işlemleri panelle **aynı servislerden** geçer (sipariş durum
makinesi, stok kilitleri, cari defter ve kredi kuralları API'de de geçerlidir).

::: tip Tam başvuru belgesi
Her uç noktanın alanları, örnekleri ve yanıtları **[api.bayiyazilimi.com](https://api.bayiyazilimi.com)**
adresindedir (OpenAPI 3.1). Kurulumunuzun tanımı `https://{alan-adınız}/api/v1/openapi.yaml` adresinden
de alınır; Postman, Insomnia gibi araçlara içe aktarılabilir. Olay bildirimleri için bkz.
[Webhook'lar](/gelistirici/webhooklar), yapay zekâ asistanları için bkz. [MCP sunucusu](/gelistirici/mcp).
:::

## Temel bilgiler

| | |
|---|---|
| Taban adres | `https://{alan-adınız}/api/v1` (panelde **Ayarlar › API Anahtarları** ekranının üstünde yazar) |
| Kimlik | `Authorization: Bearer <anahtar>` |
| Biçim | İstek ve yanıt gövdesi JSON. `Accept: application/json` ve gövdeli isteklerde `Content-Type: application/json` gönderin |
| Karakter seti | UTF-8 |
| İstek sınırı | Anahtar başına dakikada 120 istek (değiştirilebilir, bkz. [İstek sınırı](#istek-siniri)) |

```bash
curl https://bayi.ornek.com/api/v1/products?per_page=10 \
  -H "Authorization: Bearer 9d6c2a4e-…|bayi_kL3x…" \
  -H "Accept: application/json"
```

## Kimlik doğrulama {#kimlik}

API yalnız **kişisel erişim anahtarıyla** (Laravel Sanctum) çalışır. Oturum çerezi kabul edilmez.
Anahtarı panelde bir yönetici **Ayarlar › API Anahtarları** ekranından oluşturur (bkz. [API
Anahtarları](/yonetim/api-anahtarlari)). Anahtar `{uuid}|bayi_…` biçimindedir ve yalnız
oluşturulduğunda bir kez gösterilir.

- Anahtar onu oluşturan **yöneticiye** aittir; API o kullanıcı olarak çalışır. Etkinlik
  kayıtları, sipariş geçmişi ve stok hareketleri onun adına yazılır.
- Sahibi **pasif** yapılan, silinen ya da yönetici olmayan kullanıcının anahtarı `401` alır.
- Sahibi **kısıtlı** kullanıcıysa anahtar yalnız okuma (`GET`) yapar. Yazma istekleri `403` alır.
- Süresi dolan ya da iptal edilen anahtar `401` alır.
- Her uç nokta bir **yetki** (Sanctum ability) ister. Anahtarda o yetki yoksa `403`.

### Yetkiler {#yetkiler}

| Yetki | Paneldeki adı | Uç noktalar |
|---|---|---|
| — | (her anahtar) | `GET /` (anahtar ve sistem bilgisi) |
| `products:read` | Ürünleri okuma | `GET /products`, `GET /products/{sku}`, `GET /stock`, `GET /categories`, `GET /brands`, `GET /warehouses`, `GET /currencies` |
| `products:write` | Ürün ekleme, güncelleme, silme ve toplu fiyat | `POST /products`, `PATCH /products/{sku}`, `DELETE /products/{sku}`, `PUT /prices` |
| `stock:write` | Stok miktarı yazma | `PUT /stock` |
| `catalog:write` | Kategori ve marka yazma | `POST /categories`, `PATCH /categories/{slug}`, `POST /brands`, `PATCH /brands/{slug}` |
| `orders:read` | Siparişleri okuma | `GET /orders`, `GET /orders/{number}`, `GET /carriers` |
| `orders:write` | Sipariş oluşturma, durum ve fatura bilgisi yazma | `POST /orders`, `PATCH /orders/{number}/status`, `PUT /orders/{number}/invoice` |
| `accounts:read` | Cari hesapları okuma | `GET /accounts`, `GET /accounts/{code}`, `GET /accounts/{code}/transactions`, `GET /dealer-groups` |
| `accounts:write` | Cari hesap (bayi) oluşturma ve güncelleme | `POST /accounts`, `PATCH /accounts/{code}` |
| `ledger:write` | Cari hareket yazma (tahsilat, dekont) | `POST /accounts/{code}/transactions` |
| `webhooks:manage` | Webhook adreslerini yönetme | `/webhooks` uç noktaları |

Eklentiler bu listeye kendi yetkilerini ekleyebilir (bkz. [Eklentiler için](#eklentiler-icin)).

## Kurallar {#kurallar}

### Tutarlar

Tutarlar **kesin ondalık dize** olarak gelir ve gönderilebilir: asla float değildir:

- Birim fiyatlar (`price`, `compare_price`, `unit_price`) **4 basamak**: `"1250.0000"`
- Diğer tutarlar ve oranlar **2 basamak**: `"1500.00"`, `"20.00"`
- Kur (`exchange_rate`) 6 basamak.

İstekte sayı ya da dize gönderebilirsiniz (`"price": "1299.9"` ya da `1299.9`). Sunucu HalfUp
yuvarlayarak saklar. İstemci tarafında tutarları bir ondalık kütüphanesiyle işleyin.

### Tarih ve saat

Zaman damgaları **ISO-8601**, saat dilimiyle: `"2026-11-09T14:32:10+03:00"`. Yalnız gün olan alanlar
(`due_date`, `date`) `"2026-12-09"` biçimindedir. İstekte tarih için ISO-8601 ya da `YYYY-MM-DD`
gönderin.

### Kayıtları tanımlama

Kayıtlar URL'de iş anahtarlarıyla bulunur: ürün **SKU** (`/products/{sku}`), sipariş **numarası**
(`/orders/S2611090001`), cari **kodu** (`/accounts/{code}`). Özel karakter içeren değerleri URL
kodlayın. Her kaydın bir de `id` (UUID) alanı vardır.

### Sayfalama {#sayfalama}

Liste uç noktaları Laravel sayfalayıcı biçiminde döner:

```json
{
  "data": [ { "…": "…" } ],
  "links": {
    "first": "https://bayi.ornek.com/api/v1/orders?page=1",
    "last": "https://bayi.ornek.com/api/v1/orders?page=3",
    "prev": null,
    "next": "https://bayi.ornek.com/api/v1/orders?page=2"
  },
  "meta": {
    "current_page": 1,
    "from": 1,
    "last_page": 3,
    "path": "https://bayi.ornek.com/api/v1/orders",
    "per_page": 50,
    "to": 50,
    "total": 128
  }
}
```

| Parametre | Açıklama |
|---|---|
| `page` | Sayfa numarası (1'den başlar) |
| `per_page` | Sayfa boyutu. Varsayılan **50**, en çok **100** |

`links.next` doluysa sonraki sayfayı isteyin. Süzgeçler sayfa bağlantılarında korunur.

### Sıralama ve artımlı eşitleme {#updated-since}

Listeler her zaman **`updated_at`, sonra `id`** sırasıyla **artan** döner (eskiden yeniye). Tüm
listeler `updated_since` süzgecini kabul eder: yalnız o andan **sonra ya da o anda** güncellenen
kayıtlar gelir.

Önerilen eşitleme döngüsü:

1. İlk çalıştırmada `updated_since` olmadan tüm sayfaları çekin.
2. İşlediğiniz son kaydın `updated_at` değerini saklayın.
3. Sonraki çalıştırmada `?updated_since=<saklanan değer>` ile isteyin.

Sınır `>=` olduğu için son kayıt bir sonraki istekte yeniden gelebilir. Kayıtları `id` ile
**upsert** edin (tekrar gelen kayıt sorun çıkarmaz). `+` işaretli saat dilimini URL kodlamayı
unutmayın (`%2B03:00`).

## Hatalar {#hatalar}

API her durumda JSON döner (`Accept` gönderilmese bile). Hata gövdesinde Türkçe bir `message`
bulunur:

| Durum | Ne zaman | `message` |
|---|---|---|
| `401` | Anahtar yok, geçersiz, süresi dolmuş ya da iptal edilmiş | "Kimlik doğrulanamadı: geçerli bir API anahtarı gönderin (Authorization: Bearer …)." |
| `401` | Anahtarın sahibi etkin bir yönetici değil (pasif / yönetici değil) | "API anahtarı geçersiz: anahtarın sahibi etkin bir yönetici değil." |
| `403` | Anahtarda bu uç noktanın yetkisi yok | "Bu API anahtarının bu işlem için yetkisi yok." |
| `403` | Kısıtlı kullanıcının anahtarıyla yazma isteği | "Kısıtlı kullanıcının API anahtarı yalnız okuma yapabilir." |
| `404` | Kayıt (SKU, sipariş no, cari kodu) ya da adres bulunamadı | "Kayıt bulunamadı." |
| `405` | Adres bu HTTP yöntemini desteklemiyor | "Bu adres bu HTTP yöntemini desteklemiyor." |
| `422` | Doğrulama hatası ya da iş kuralı (geçersiz durum geçişi vb.) | Hatanın kendisi |
| `429` | İstek sınırı aşıldı | "Çok fazla istek gönderildi; lütfen biraz bekleyip yeniden deneyin." |

```json
{ "message": "Bu API anahtarının bu işlem için yetkisi yok." }
```

**Doğrulama hataları** Laravel'in standart biçimindedir: `message` ilk hatayı özetler, `errors`
alan başına mesaj listesi verir (dizi alanlarında anahtar `items.0.sku` gibi yoldur):

```json
{
  "message": "miktar en az 0 olmalıdır.",
  "errors": {
    "items.0.quantity": ["miktar en az 0 olmalıdır."]
  }
}
```

Birden çok hata varsa `message` ilk hatanın sonuna kalan hata sayısını ekler. Hataları her zaman
`errors` üzerinden işleyin.

**İş kuralı hataları** (`422`) yalnız `message` taşır:

```json
{ "message": "Kargoya Verildi durumundaki sipariş Ödeme Bekleniyor yapılamaz." }
```

## İstek sınırı {#istek-siniri}

Her anahtar dakikada en çok **120** istek yapabilir (sayaç anahtar başınadır). Yanıtlarda
`X-RateLimit-Limit` ve `X-RateLimit-Remaining` başlıkları bulunur. Sınır aşılınca `429` ve
`Retry-After` (saniye) döner. Sınır sunucunun `.env` dosyasında değiştirilir:

```ini
BAYIYAZILIMI_API_RATE_LIMIT=300
```

Toplu işler için sayfa başına `per_page=100` ve toplu stok uç noktasını kullanarak istek sayısını
düşük tutun.

## Ürünler

### Ürün listesi

`GET /products`: yetki: `products:read`

| Parametre | Açıklama |
|---|---|
| `sku` | Tek bir SKU'ya süz |
| `status` | `active` ya da `passive` |
| `updated_since`, `page`, `per_page` | Bkz. [Kurallar](#kurallar) |

```bash
curl "https://bayi.ornek.com/api/v1/products?status=active&per_page=100" \
  -H "Authorization: Bearer $TOKEN" -H "Accept: application/json"
```

Yanıt: sayfalı liste, her öğe [ürün gösterimi](#urun-gosterimi).

### Ürün ayrıntısı {#urun-gosterimi}

`GET /products/{sku}`: yetki: `products:read`

```json
{
  "data": {
    "id": "9d6c1f0e-5b7a-4c1e-9a52-3f0d2b8e7a11",
    "sku": "KBL-001",
    "barcode": "8690000000017",
    "name": "Kablo 3x2,5 mm",
    "status": "active",
    "unit": "Metre",
    "prices": {
      "price": "42.5000",
      "compare_price": null,
      "currency": "TRY",
      "tax_rate": "20.00"
    },
    "stock": {
      "track_stock": true,
      "tracking": "none",
      "sellable": 1180,
      "total": 1200,
      "warehouses": [
        { "code": "ANA", "name": "Ana Depo", "quantity": 1000 },
        { "code": "IZM", "name": "İzmir Depo", "quantity": 200 }
      ]
    },
    "min_qty": 1,
    "max_qty": null,
    "delivery_days": 2,
    "created_at": "2026-10-01T09:12:44+03:00",
    "updated_at": "2026-11-09T11:05:02+03:00"
  }
}
```

| Alan | Açıklama |
|---|---|
| `prices.price` | Liste fiyatı (KDV hariç, ürünün para biriminde, 4 basamak) |
| `stock.tracking` | `none`, `lot` ya da `serial` |
| `stock.sellable` | Satılabilir toplam (siparişlerde kullanılan stok) |
| `stock.total` | Depolardaki miktarların toplamı |
| `stock.warehouses` | Depo bazında miktarlar (depo koduna göre sıralı) |

### Ürün güncelleme

`PATCH /products/{sku}`: yetki: `products:write`

Yalnız gönderilen alanlar değişir. Panelin ürün formuyla aynı servisten geçer.

| Alan | Kural |
|---|---|
| `name` | Dize, en çok 255 |
| `barcode` | Dize, en çok 64; `null` kaldırır |
| `price` | Sayı ≥ 0 (4 basamağa yuvarlanır) |
| `compare_price` | Sayı ≥ 0; `null` kaldırır |
| `tax_rate` | 0-100 |
| `status` | `active` / `passive` |
| `min_qty` | Tam sayı ≥ 1 |
| `max_qty` | Tam sayı ≥ 1; `null` sınırı kaldırır |
| `delivery_days` | 0-365 |
| `min_stock` | Kritik stok seviyesi, 0-1.000.000; `null` kaldırır |

SKU, kategori, görseller, açıklama gibi alanlar API ile değiştirilmez.

```bash
curl -X PATCH https://bayi.ornek.com/api/v1/products/KBL-001 \
  -H "Authorization: Bearer $TOKEN" -H "Accept: application/json" \
  -H "Content-Type: application/json" \
  -d '{"price": "44.90", "status": "active"}'
```

Yanıt: güncellenmiş [ürün gösterimi](#urun-gosterimi) (`200`).

## Stok

### Toplu stok eşitleme

`PUT /stock`: yetki: `stock:write`

Ürünlerin depolardaki miktarını **mutlak değere** getirir (ERP'deki sayım / eldeki miktar).
Aradaki fark **Sayım Düzeltme** hareketi olarak, not alanı "API" ile yazılır. Stok hareketlerinde
ve ürün geçmişinde görünür.

| Alan | Kural |
|---|---|
| `items` | Zorunlu dizi, 1-500 satır |
| `items.*.sku` | Ürün SKU'su (büyük / küçük harf duyarsız) |
| `items.*.warehouse` | Depo kodu (büyük / küçük harf duyarsız) |
| `items.*.quantity` | Tam sayı, 0-100.000.000 |

Kurallar:

- **Tümü ya da hiçbiri:** bir satır bile hatalıysa (bilinmeyen SKU / depo, aynı ürün + depo iki
  kez) hiçbir miktar yazılmaz; `422` ve satır bazında `errors` döner.
- **Lot / seri takipli ürünler reddedilir:** miktarları lot bazında tutulur, toplamdan hangi lotun
  değiştiği çıkarılamaz. Bu ürünlerin stoğunu panelden (mal kabul, sayım) yönetin.
- Miktar zaten aynıysa hareket yazılmaz (`changed: false`).

```bash
curl -X PUT https://bayi.ornek.com/api/v1/stock \
  -H "Authorization: Bearer $TOKEN" -H "Accept: application/json" \
  -H "Content-Type: application/json" \
  -d '{"items": [
        {"sku": "KBL-001", "warehouse": "ANA", "quantity": 950},
        {"sku": "KBL-002", "warehouse": "ANA", "quantity": 40}
      ]}'
```

```json
{
  "data": [
    { "sku": "KBL-001", "warehouse": "ANA", "quantity": 950, "changed": true },
    { "sku": "KBL-002", "warehouse": "ANA", "quantity": 40, "changed": false }
  ],
  "meta": { "count": 2, "changed": 1 }
}
```

Hatalı istek örneği:

```json
{
  "message": "LOT-01 ürünü lot / seri takipli; stoğu API ile toplam miktar olarak yazılamaz.",
  "errors": {
    "items.1.sku": ["LOT-01 ürünü lot / seri takipli; stoğu API ile toplam miktar olarak yazılamaz."]
  }
}
```

Diğer satır hataları: ":sku kodlu ürün bulunamadı.", ":code kodlu depo bulunamadı.", "Aynı ürün
ve depo istekte birden fazla kez geçiyor."

## Siparişler

### Sipariş listesi

`GET /orders`: yetki: `orders:read`

| Parametre | Açıklama |
|---|---|
| `status` | `pending` (Ödeme Bekleniyor), `awaiting_approval` (Onay Bekliyor), `processing` (Hazırlanıyor), `shipped` (Kargoya Verildi), `completed` (Tamamlandı), `cancelled` (İptal Edildi), `failed` (Ödeme Başarısız) |
| `payment_status` | `pending`, `partial`, `paid`, `failed`, `refunded`, `cancelled` |
| `updated_since`, `page`, `per_page` | Bkz. [Kurallar](#kurallar) |

Yanıt: sayfalı liste, her öğe [sipariş gösterimi](#siparis-gosterimi) (satırlar dahil).

### Sipariş ayrıntısı {#siparis-gosterimi}

`GET /orders/{number}`: yetki: `orders:read`

```json
{
  "data": {
    "id": "9d6c3b21-0c4f-4e88-b1d2-7a9e5f3c2d10",
    "number": "S2611090001",
    "status": "processing",
    "status_label": "Hazırlanıyor",
    "customer": { "name": "Ahmet Yılmaz", "email": "ahmet@ornekbayi.com", "phone": "05321234567" },
    "account": { "code": "B0001", "title": "Örnek Elektrik Ltd. Şti.", "type": "dealer" },
    "billing_address": {
      "type": "corporate",
      "name": "Ahmet Yılmaz",
      "company": "Örnek Elektrik Ltd. Şti.",
      "tax_office": "Kadıköy",
      "tax_number": "1234567890",
      "address": "Örnek Mah. 1. Sok. No: 5",
      "city": "İstanbul",
      "district": "Kadıköy",
      "postal_code": "34710"
    },
    "shipping_address": { "…": "fatura adresiyle aynı yapı" },
    "currency": "TRY",
    "exchange_rate": "1.000000",
    "lines": [
      {
        "sku": "KBL-001",
        "name": "Kablo 3x2,5 mm",
        "quantity": 100,
        "unit_price": "42.5000",
        "discount_amount": "425.00",
        "tax_rate": "20.00",
        "tax_amount": "765.00",
        "line_total": "4590.00",
        "campaign": null
      }
    ],
    "totals": {
      "subtotal": "4250.00",
      "discount_total": "425.00",
      "shipping_total": "0.00",
      "payment_adjustment": "0.00",
      "tax_total": "765.00",
      "grand_total": "4590.00"
    },
    "payment": {
      "method": "on_account",
      "method_label": "Cari hesaba (vadeli)",
      "status": "pending",
      "status_label": "Bekliyor",
      "paid_at": null,
      "due_date": "2026-12-09"
    },
    "invoice": { "number": null, "invoiced_at": null },
    "shipping": {
      "warehouse": "ANA",
      "carrier": null,
      "cargo_company": null,
      "tracking_number": null,
      "tracking_url": null,
      "shipped_at": null
    },
    "customer_note": null,
    "cancelled_at": null,
    "created_at": "2026-11-09T10:21:05+03:00",
    "updated_at": "2026-11-09T10:40:12+03:00"
  }
}
```

Notlar:

- Tutarlar **siparişin para birimindedir** (`currency`).
- `billing_address` / `shipping_address` sipariş anındaki adresin kopyasıdır. Alanlar sipariş
  formundan gelir (bireysel faturada `company`, `tax_office`, `tax_number` boş olabilir).
- `account` misafir siparişinde `null`'dır.
- `payment.method` ödeme yönteminin anahtarıdır (`bank_transfer`, `on_account`, kart eklentileri
  kendi anahtarlarını kullanır). Görünen adı `method_label`.

### Sipariş durumu değiştirme {#siparis-durumu}

`PATCH /orders/{number}/status`: yetki: `orders:write`

Paneldeki durum değişikliğiyle aynı servisten geçer: **durum makinesi**, stok iadesi (iptal), cari
borç ve müşteri bildirimi kuralları aynıdır.

| Alan | Kural |
|---|---|
| `status` | **Zorunlu.** Hedef durum (değerler yukarıdaki listede) |
| `note` | Sipariş geçmişine düşecek not, en çok 255 |
| `notify` | `true` ise müşteriye durum e-postası gider (varsayılan `false`) |
| `carrier` | Kargo firmasının **kodu** (Tanımlamalar › Kargo Firmaları); `null` kaldırır |
| `tracking_number` | Kargo takip numarası; `null` kaldırır |

`carrier` ve `tracking_number` gönderilmezse mevcut değerleri korunur. Aynı durumu göndermek
geçerlidir: durum değişmeden yalnız not / kargo bilgisi güncellenir.

İzinli geçişler:

| Mevcut durum | Geçilebilecek durumlar |
|---|---|
| Ödeme Bekleniyor (`pending`), Onay Bekliyor (`awaiting_approval`) | `processing`, `cancelled` |
| Hazırlanıyor (`processing`) | `shipped`, `completed`, `cancelled` |
| Kargoya Verildi (`shipped`) | `processing`, `completed` |
| Tamamlandı (`completed`) | `shipped` |
| İptal Edildi (`cancelled`) | `processing` |
| Ödeme Başarısız (`failed`) | `cancelled` |

İzinsiz geçiş `422` döner (ör. "Kargoya verilmiş / tamamlanmış sipariş iptal edilemez. Ürünlerin
geri dönüşü için iade talebi oluşturun."). Onay bekleyen vadeli sipariş `processing`'e geçerken
kredi kuralları yeniden denetlenir. Limit yetmiyorsa yine `422`.

```bash
curl -X PATCH https://bayi.ornek.com/api/v1/orders/S2611090001/status \
  -H "Authorization: Bearer $TOKEN" -H "Accept: application/json" \
  -H "Content-Type: application/json" \
  -d '{"status": "shipped", "carrier": "yurtici", "tracking_number": "123456789", "notify": true}'
```

Yanıt: güncellenmiş [sipariş gösterimi](#siparis-gosterimi) (`200`).

### Fatura bilgisi yazma

`PUT /orders/{number}/invoice`: yetki: `orders:write`

| Alan | Kural |
|---|---|
| `invoice_number` | **Gönderilmesi zorunlu** (`null` olabilir). Dize, en çok 64. `null` ya da boş dize fatura bilgisini kaldırır |

- Yalnız **Tamamlandı** durumundaki siparişe yazılır. Diğerlerinde `422` ("Fatura bilgisi yalnızca
  tamamlanan siparişlere girilebilir.").
- `invoiced_at` ilk yazıldığı anda dolar. Numara değişince korunur, kaldırılınca boşalır.
- Sipariş geçmişine "Fatura no … ile faturalandırıldı." notu düşer.

```bash
curl -X PUT https://bayi.ornek.com/api/v1/orders/S2611090001/invoice \
  -H "Authorization: Bearer $TOKEN" -H "Accept: application/json" \
  -H "Content-Type: application/json" \
  -d '{"invoice_number": "ABC2026000000123"}'
```

Yanıt: güncellenmiş [sipariş gösterimi](#siparis-gosterimi); `invoice` alanı:

```json
"invoice": { "number": "ABC2026000000123", "invoiced_at": "2026-11-09T16:02:41+03:00" }
```

## Cari hesaplar

### Cari listesi

`GET /accounts`: yetki: `accounts:read`

| Parametre | Açıklama |
|---|---|
| `type` | `dealer` (bayi) ya da `customer` (müşteri) |
| `updated_since`, `page`, `per_page` | Bkz. [Kurallar](#kurallar) |

Listede her öğe bakiyeyi ve kredi koşullarını içerir. Risk, kullanılabilir limit ve vadesi geçmiş
borç yalnız tekil gösterimde gelir. `updated_since` cari kartın güncellenme zamanına bakar: 
bakiye değişimi cari kartı güncellemez.

### Cari ayrıntısı {#cari-gosterimi}

`GET /accounts/{code}`: yetki: `accounts:read`

```json
{
  "data": {
    "id": "9d6c0a77-2e1b-4d53-8f60-1c9b7e4a3f22",
    "code": "B0001",
    "title": "Örnek Elektrik Ltd. Şti.",
    "type": "dealer",
    "billing_type": "corporate",
    "tax_office": "Kadıköy",
    "tax_number": "1234567890",
    "identity_number": null,
    "invoice_email": "muhasebe@ornekelektrik.com",
    "dealer_group": "Altın Bayiler",
    "discount_rate": "10.00",
    "address": {
      "address": "Örnek Mah. 1. Sok. No: 5",
      "postal_code": "34710",
      "district": "Kadıköy",
      "city": "İstanbul",
      "country": "Türkiye"
    },
    "currency": "TRY",
    "balance": "18250.00",
    "credit": {
      "payment_terms": "credit",
      "limit": "50000.00",
      "term_days": 30,
      "risk": "22840.00",
      "available": "27160.00",
      "overdue_amount": "3500.00",
      "overdue_count": 1
    },
    "created_at": "2026-09-15T13:00:00+03:00",
    "updated_at": "2026-11-02T09:41:17+03:00"
  }
}
```

| Alan | Açıklama |
|---|---|
| `balance` | **Ana para biriminde** (`currency`) bakiye. Pozitif = müşteri borçlu |
| `discount_rate` | Bayinin geçerli iskonto oranı. Müşteride `null` |
| `credit.payment_terms` | `prepaid` (peşin) ya da `credit` (vadeli). Geçerli çalışma şeklinden (bayiye özel → grup → varsayılan) |
| `credit.limit` | Kredi limiti; `null` = limitsiz |
| `credit.risk` | Bakiye + onay bekleyen vadeli siparişler + portföydeki çek / senetler (yalnız tekil) |
| `credit.available` | Kullanılabilir limit. Limitsizse `null` (yalnız tekil) |
| `credit.overdue_amount`, `overdue_count` | Vadesi geçmiş borç tutarı ve belge sayısı (yalnız tekil) |

Hesaplamalar için bkz. [Cari defter](/gelistirici/cari-defter).

### Cari hareket yazma {#cari-hareket}

`POST /accounts/{code}/transactions`: yetki: `ledger:write`

ERP / muhasebe programındaki tahsilatı ya da dekontu cari deftere işler.

| Alan | Kural |
|---|---|
| `type` | **Zorunlu.** `collection` = **Tahsilat** (alacak), `debit` = **borç dekontu**, `credit` = **alacak dekontu** |
| `amount` | **Zorunlu.** Sayı > 0, ana para biriminde (2 basamağa yuvarlanır) |
| `reference` | **Zorunlu.** Dış sistemin belge numarası, en çok 100 karakter: **tekil anahtar** |
| `date` | İşlem tarihi. Boşsa bugün |
| `due_date` | Vade tarihi. Yalnız `debit` için kullanılır |
| `description` | Açıklama, en çok 255. Boşsa hareket türünün adı |

**Tekrar güvenli (idempotent):** `reference` API'den gelen hareketler arasında tekildir.

| Durum | Sonuç |
|---|---|
| Yeni referans | Hareket yazılır, `201 Created` |
| Aynı referans, aynı cari | Yeni kayıt açılmaz, **mevcut hareket** `200 OK` ile döner |
| Aynı referans, başka cari | `422`: "Bu referans başka bir cari hesabın hareketinde kullanılmış." |

Böylece ağ hatasında isteği güvenle tekrarlayabilirsiniz. Yanlış işlenen hareket panelde cari
ekranından ters kayıtla iptal edilebilir (yanıtta `reversed: true` olur).

```bash
curl -X POST https://bayi.ornek.com/api/v1/accounts/B0001/transactions \
  -H "Authorization: Bearer $TOKEN" -H "Accept: application/json" \
  -H "Content-Type: application/json" \
  -d '{"type": "collection", "amount": "12500.00", "reference": "TAH-2026-00123",
       "date": "2026-11-09", "description": "Havale tahsilatı"}'
```

```json
{
  "data": {
    "id": "9d6c4e90-7a3d-4b21-a6c8-5e2f1d0b9c33",
    "reference": "TAH-2026-00123",
    "type": "payment",
    "type_label": "Tahsilat",
    "direction": "credit",
    "amount": "12500.00",
    "currency": "TRY",
    "date": "2026-11-09",
    "due_date": null,
    "description": "Havale tahsilatı",
    "reversed": false,
    "created_at": "2026-11-09T16:10:00+03:00"
  }
}
```

Yanıttaki `type` cari defterin hareket türüdür: tahsilat `payment`, dekontlar `adjustment`;
`direction` `debit` (borç) ya da `credit` (alacak).

## Yazma isteğini iki kez işlememe {#idempotency}

Ağ hatası yüzünden yanıtı alamadığınız bir yazma isteğini (`POST`, `PUT`, `PATCH`, `DELETE`) güvenle
tekrarlamak için isteğe `Idempotency-Key` başlığı ekleyin:

```bash
curl -X POST https://bayi.ornek.com/api/v1/orders \
  -H "Authorization: Bearer …" -H "Content-Type: application/json" \
  -H "Idempotency-Key: erp-siparis-48213" \
  -d '{"account":"BAYI001","payment_method":"on_account","lines":[{"sku":"URUN-001","quantity":10}]}'
```

Aynı anahtarla 24 saat içinde gelen istek yeniden işlenmez, ilk yanıt aynen döner ve yanıtta
`Idempotent-Replayed: true` başlığı bulunur. Aynı anahtar farklı bir gövdeyle gelirse `422` döner.
Anahtarlar API anahtarı başına ayrıdır; ERP'deki belge numarası gibi benzersiz bir değer kullanın.

## 1.1 ile gelen uç noktalar {#yeni-uc-noktalar}

Ayrıntılı alanlar ve örnekler [api.bayiyazilimi.com](https://api.bayiyazilimi.com)'dadır.

- **Ürün ekleme / silme:** `POST /products` (fiyat KDV hariç; kategori ve marka slug, para birimi
  kodla), `DELETE /products/{sku}` (stoğu olan ürün silinmez). `GET /products?q=` ad, stok kodu ya da
  barkodda arar.
- **Toplu fiyat:** `PUT /prices` ile en çok 1.000 ürünün fiyatı tek işlemde; bilinmeyen stok kodu
  tüm isteği reddeder, değişmeyen ürün yazılmaz.
- **Stok listesi:** `GET /stock?sku=&warehouse=` depo bazında miktarlar.
- **Tanımlar:** kategoriler, markalar (okuma ve yazma), depolar, para birimleri ve kurlar, kargo
  firmaları, bayi grupları.
- **Sipariş oluşturma:** `POST /orders` cari hesap adına sipariş açar. Satırda birim fiyat (KDV dahil)
  verilmezse bayinin fiyatı uygulanır (ürün indirimi, yoksa bayi / grup indirimi). Ödeme yöntemi
  `on_account` (vadeli; kredi limiti ve vade kuralları panelle aynı) ya da `bank_transfer`. Stok düşer;
  sipariş bildirimleri her sipariş gibi gider.
- **Cari hesaplar:** `POST /accounts` (kod verilmezse üretilir), `PATCH /accounts/{code}`,
  `GET /accounts/{code}/transactions?from=&to=`.
- **Webhook'lar:** `/webhooks` ile adres ekleme, açma / kapatma, deneme gönderimi ve son gönderimler
  (bkz. [Webhook'lar](/gelistirici/webhooklar)).

## Örnek: ERP eşitlemesi {#erp-tarifi}

Tipik bir ERP / muhasebe entegrasyonu birkaç dakikada bir şu döngüyü çalıştırır (anahtar
yetkileri: `orders:read`, `orders:write`, `products:write`, `stock:write`, `ledger:write`,
gerekirse `accounts:read`):

1. **Yeni / değişen siparişleri çek.** `GET /orders?updated_since=<son değer>&per_page=100`,
   `links.next` boşalana kadar. Siparişleri `number` (ya da `id`) ile ERP'ye upsert edin. Son
   kaydın `updated_at`'ini saklayın. Yalnız kesinleşmiş siparişleri aktarmak için `status`
   alanına bakın (`processing`, `shipped`, `completed`).
2. **Stok ve fiyatları gönder.** ERP'deki eldeki miktarları 500'lük parçalar halinde
   `PUT /stock` ile. Değişen fiyatları ürün başına `PATCH /products/{sku}` ile yazın.
3. **Durum ve kargo bilgisini yaz.** Sevk edilen siparişler için
   `PATCH /orders/{number}/status` (`shipped` + `carrier` + `tracking_number`), teslim edilenler
   için `completed`.
4. **Fatura numaralarını yaz.** ERP'de faturası kesilen tamamlanmış siparişlere
   `PUT /orders/{number}/invoice`.
5. **Tahsilatları işle.** ERP'deki tahsilat fişlerini, fiş numarası `reference` olarak,
   `POST /accounts/{code}/transactions` ile gönderin. Aynı fiş ikinci kez gitse bile cari bir kez
   işlenir.

İpuçları:

- `429` alırsanız `Retry-After` kadar bekleyip devam edin; `5xx` ve ağ hatalarında aynı isteği
  tekrarlayın (stok mutlak, cari hareket referanslı olduğu için tekrar güvenlidir).
- `422` yanıtları kalıcıdır (veri ya da kural hatası). Tekrar denemeyin, kaydedip inceleyin.
- Entegrasyon için ayrı bir yönetici kullanıcı ve yalnız gereken yetkilerle bir anahtar kullanın.

## Eklentiler için {#eklentiler-icin}

Eklentiler API'ye kendi uç noktalarını ve yetkilerini ekleyebilir (bkz. [Eklenti
geliştirme](/gelistirici/modul-gelistirme)).

### Uç nokta eklemek

Çekirdek `api.routes.register` kancasını **v1 grubunun içinde** tetikler. Eklenti rotaları
`/api/v1` önekini, `api.v1.` ad önekini ve kimlik (`auth:sanctum`), etkin yönetici (`api_user`)
ve istek sınırı (`throttle:api`) ara katmanlarını kendiliğinden alır. Her rotayı kendi yetkinizle
koruyun:

```php
// Eklentinin ServiceProvider::register()
hooks()->action('api.routes.register', function (): void {
    Route::get('shipments', [ShipmentsController::class, 'index'])
        ->middleware('abilities:ptt:read')
        ->name('ptt.shipments.index');        // tam ad: api.v1.ptt.shipments.index
});
```

Yanıtlarda çekirdeğin kurallarına uyun: tutarlar kesin ondalık dize, zaman damgaları ISO-8601,
listeler sayfalı ve `updated_at, id` sıralı. Yazmaları çekirdek servislerinden geçirin, durum /
stok / cari sütunlarını doğrudan yazmayın. İş kuralı hatası için `ShopException` fırlatmak `422 +
message` döndürür.

### Yetki eklemek

`api.abilities` filtresine `anahtar => Türkçe etiket` ekleyin; **Ayarlar › API Anahtarları**
ekranındaki yetki listesi buradan kurulur:

```php
hooks()->filter('api.abilities', fn (array $abilities): array => [
    ...$abilities,
    'ptt:read' => __('PTT gönderilerini okuma'),
]);
```

Yetki anahtarlarını eklenti anahtarıyla önekleyin (`ptt:read`), çekirdeğinkilerle çakışmasın.
