# Webhook'lar

Webhook, sistemde bir olay olduğunda (sipariş açıldı, durumu değişti, ödeme alındı …) sizin
belirlediğiniz adrese **anında** bildirim gönderir. ERP'niz siparişleri dakikada bir sorgulamak
yerine olay olunca haber alır.

## Webhook ekleme {#ekleme}

- **Panelden:** **Ayarlar › Webhook'lar**. Adresi (https://…), isteğe bağlı açıklamayı ve olayları seçip
  **Webhook ekle**'ye basın.
- **API'den:** `POST /api/v1/webhooks` (`webhooks:manage` yetkisi).

Eklemeden sonra **imza anahtarı** (`whsec_…`) yalnız bir kez gösterilir; kopyalayıp gelen istekleri
doğrulamak için saklayın. Adres herkese açık bir https adresi olmalıdır.

## Olaylar {#olaylar}

| Olay | Ne zaman | `data` |
|---|---|---|
| `order.created` | Sipariş açıldı (panel, bayi paneli, vitrin, API, pazaryeri) | Sipariş |
| `order.status_changed` | Sipariş durumu değişti | `previous_status` ve sipariş |
| `order.paid` | Siparişin ödemesi alındı | Sipariş |
| `order.invoiced` | Siparişe fatura bilgisi işlendi | Sipariş |
| `account.transaction_recorded` | Cari hareket kaydedildi | Hesap kodu ve hareket |
| `product.stock_low` | Ürün kritik stok seviyesine indi | Ürün |
| `return.requested` | İade talebi açıldı | İade özeti |
| `quote.requested` | Teklif istendi | Teklif özeti |
| `ping` | **Dene** düğmesi | Deneme mesajı |

Tüm olaylar için olay listesine `*` yazın. Sipariş, ürün ve cari hareket verisi REST API'deki
gösterimin aynısıdır (bkz. [REST API](/gelistirici/rest-api)).

## İstek {#istek}

```http
POST /bayi-webhook HTTP/1.1
Content-Type: application/json
User-Agent: BayiYazilimi-Webhook/1.1.0
X-Bayi-Event: order.created
X-Bayi-Delivery: 9d6c2a4e-…
X-Bayi-Signature: t=1731571800,v1=5f2b…

{"id":"9d6c2a4e-…","event":"order.created","created_at":"2026-11-14T09:30:00+03:00","data":{ … }}
```

## İmzayı doğrulama {#imza}

`v1`, imza anahtarıyla `"{t}.{ham gövde}"` metninin HMAC-SHA256 değeridir (onaltılık). Gövdeyi JSON'a
çevirmeden **ham hâliyle** imzalayın, sabit zamanlı karşılaştırın ve 5 dakikadan eski `t`'yi reddedin:

```php
[$t, $v1] = sscanf($_SERVER['HTTP_X_BAYI_SIGNATURE'], 't=%d,v1=%s');
$body = file_get_contents('php://input');
$ok = hash_equals(hash_hmac('sha256', $t.'.'.$body, $secret), $v1) && abs(time() - $t) < 300;
```

```js
const [t, v1] = header.split(',').map((p) => p.split('=')[1]);
const ok = crypto.timingSafeEqual(
  Buffer.from(crypto.createHmac('sha256', secret).update(`${t}.${rawBody}`).digest('hex')),
  Buffer.from(v1),
);
```

## Yanıt ve yeniden deneme {#yeniden-deneme}

- `2xx` yanıt başarılı sayılır. 10 saniyede yanıt gelmezse ya da başka bir kod dönerse gönderim
  1 dk, 5 dk, 30 dk, 2 sa ve 6 sa sonra yeniden denenir (toplam 6 deneme).
- Aynı olay birden fazla gelebilir; `id` (ya da `X-Bayi-Delivery`) ile tekilleştirin.
- Art arda 50 başarısız gönderimden sonra adres kendiliğinden kapatılır; panelden yeniden açılır.
- Son gönderimler, yanıt kodu ve hata panelde adresin altında, API'de
  `GET /api/v1/webhooks/{id}/deliveries` ile görünür.

::: warning Kuyruk işleyicisi
Webhook'lar kuyruktan gönderilir. Sunucuda kuyruk işleyicisinin (`php artisan queue:work`) ya da
paylaşımlı hostingde zamanlanmış görevin çalışması gerekir (bkz. [VPS'e kurulum](/baslangic/vps)).
:::

## Eklentiler için {#eklentiler-icin}

Eklenti kendi olayını `webhooks.events` filtresiyle listeye ekler ve olay olunca gönderir:

```php
hooks()->filter('webhooks.events', fn (array $value) => [...$value, 'shipment.delivered' => __('Sevkiyat teslim edildi')]);

app(\App\Support\Webhooks\WebhookService::class)->dispatch('shipment.delivered', ['number' => $shipment->number]);
```
