# Cari defter

Sistemin kendisi asıl defterdir: müşterinin tüm aldı / verdi kayıtları `account_transactions`
tablosundadır. ERP entegrasyonu isteğe bağlıdır.

## Hareket tablosu

| Alan | Açıklama |
|---|---|
| `account_id` | Cari |
| `type` | `order` (satış), `payment` (tahsilat), `return` (iade), `refund` (para iadesi), `opening` (açılış), `adjustment` (dekont), `cheque_bounce` (karşılıksız çek / senet) |
| `direction` | `debit` (borç) / `credit` (alacak) |
| `amount` + `currency_code` | Ana para birimindeki tutar |
| `original_amount` + `original_currency` + `exchange_rate` | Belgenin kendi para birimi ve çevrim kuru |
| `transaction_date`, `due_date` | İşlem ve vade tarihi |
| `source_type` / `source_id` | Hareketi doğuran belge (Order, Payment, ReturnRequest, Cheque …) |
| `origin` + `external_ref` | `system` ya da `erp:{ad}`; ikisi birlikte tekildir |
| `reversal_of` / `reversed_at` | Kayıt silinmez, ters kayıtla düzeltilir |

**Bakiye = Σ borç − Σ alacak.**

## Ne zaman yazılır?

- Sipariş **Hazırlanıyor**'a geçince borç (vadeli siparişte `due_date` = bugün + vade günü).
- Sipariş iptali → borcun ters kaydı.
- Ödeme "ödendi" → alacak; iade / iptal → ters kayıt.
- İade talebi tamamlanınca (tutar girilmişse) → alacak.
- Tutar, siparişin oluştuğu andaki kurla (`orders.base_exchange_rate`) ana birime çevrilir.
- Misafir siparişleri deftere yazılmaz.

## FIFO dağıtım

`account_allocations`: önce siparişe bağlı ödemeler kendi siparişini kapatır; kalan alacaklar en
eski vadeli borçtan başlayarak dağıtılır. Vadeli sipariş tamamen kapanınca ödeme durumu "Ödendi"
olur. Yaşlandırma raporu açık (kapanmamış) borçları bu dağıtımdan hesaplar.

## Risk

```
risk = bakiye + onay bekleyen vadeli siparişler + portföydeki çek / senetler
kullanılabilir limit = kredi limiti − risk
```

Portföy riski `shop.ledger.instrument_risk` filtresiyle eklenir; başka bir modül (ör. teminat
mektubu) aynı filtreyle riske katkı yapabilir.

## Ana para birimi

Kurlar TL üzerinden tutulur (TCMB); ana birime çapraz kurla çevrilir:
`tutar × kur(belge) / kur(ana birim)`. Ana birim ilk sipariş ya da ilk cari hareketten sonra
kilitlenir.

## ERP entegrasyonu

- **Dinleme:** her harekette `AccountTransactionRecordedEvent` yayınlanır; ERP modülü dinleyip
  muhasebe programına aktarır.
- **Yazma:** ERP'den gelen hareket için

```php
app(LedgerService::class)->record(
    $account,
    TransactionType::Payment,
    TransactionDirection::Credit,
    '12500.00',
    ['origin' => 'erp:logo', 'external_ref' => 'FIS-2026-00123'],
);
```

Aynı `origin + external_ref` ikinci kez yazılmaz; senkronizasyon güvenle tekrarlanabilir.
