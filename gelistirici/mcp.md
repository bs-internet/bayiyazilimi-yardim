# MCP sunucusu

Bayi Yazılımı, yapay zekâ asistanlarının (Claude, ChatGPT, Cursor gibi **Model Context Protocol**
destekleyen istemciler) sisteminize bağlanması için bir **MCP sunucusu** içerir. Asistana "B-120 kodlu
üründen depoda kaç adet var?", "ACME bayisinin bakiyesi ne?" ya da "ACME için 10 adet B-120 siparişi
aç" diyebilirsiniz.

| | |
|---|---|
| Adres | `https://{alan-adınız}/api/mcp` |
| Taşıma | Streamable HTTP (oturumsuz, JSON yanıt) |
| Kimlik | REST API anahtarı: `Authorization: Bearer <anahtar>` |

MCP araçları REST API'nin uç noktalarını çağırır: doğrulama, yetki ve sonuç API ile aynıdır.
Anahtara verilmeyen yetkinin araçları asistana **hiç listelenmez**. Asistana yalnız okuma yaptırmak
için anahtara yalnız okuma yetkilerini verin (bkz. [Yetkiler](/gelistirici/rest-api#yetkiler)).

## Bağlanma {#baglanma}

1. Panelde **Ayarlar › API Anahtarları** ekranından asistan için ayrı bir anahtar oluşturun.
   Adres aynı ekranın üstünde "MCP adresi" olarak yazar.
2. İstemciye ekleyin.

**Claude Code:**

```bash
claude mcp add --transport http bayiyazilimi https://bayi.ornek.com/api/mcp \
  --header "Authorization: Bearer 9d6c2a4e-…|bayi_kL3x…"
```

**Claude Desktop / Cursor** (`mcpServers` ayarı):

```json
{
  "mcpServers": {
    "bayiyazilimi": {
      "type": "http",
      "url": "https://bayi.ornek.com/api/mcp",
      "headers": { "Authorization": "Bearer 9d6c2a4e-…|bayi_kL3x…" }
    }
  }
}
```

## Araçlar {#araclar}

| Araç | Yetki | Ne yapar |
|---|---|---|
| `get_api_info` | — | Sistem adı, sürüm, ana para birimi, anahtarın yetkileri |
| `search_products` | `products:read` | Ad, stok kodu ya da barkodla ürün arama |
| `get_product` | `products:read` | Stok koduyla ürün, fiyat ve depo stokları |
| `get_stock` | `products:read` | Depo bazında stok |
| `list_categories`, `list_brands`, `list_warehouses` | `products:read` | Tanımlar |
| `create_product`, `update_product`, `update_prices` | `products:write` | Ürün ekleme, güncelleme, toplu fiyat |
| `set_stock` | `stock:write` | Depo stoğunu mutlak miktar olarak yazma |
| `list_orders`, `get_order` | `orders:read` | Siparişler |
| `create_order`, `update_order_status` | `orders:write` | Sipariş açma (bayi fiyatıyla), durum değiştirme |
| `list_accounts`, `get_account`, `list_account_transactions` | `accounts:read` | Cari hesaplar, bakiye ve kredi, hareketler |
| `record_account_transaction` | `ledger:write` | Tahsilat ya da dekont |

Yazan araçlar gerçek kayıt oluşturur; istemciler bu araçları kullanıcıya sormadan çağırmamalıdır
(araç tanımlarında `readOnlyHint` bu ayrımı belirtir). Her araç çağrısı API istek sınırına sayılır.

## Eklentiler için {#eklentiler-icin}

Eklenti kendi aracını `mcp.tools` filtresiyle ekler; araç bir API uç noktasına iç istek tanımlar:

```php
hooks()->filter('mcp.tools', fn (array $value) => [...$value, 'list_shipments' => [
    'title' => 'Sevkiyatlar',
    'description' => 'Açık sevkiyatlar.',
    'ability' => 'shipments:read',
    'readOnly' => true,
    'schema' => ['type' => 'object', 'properties' => (object) []],
    'request' => fn (array $args) => ['GET', 'v1/shipments'],
]]);
```
