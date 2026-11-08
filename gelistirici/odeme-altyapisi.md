# Ödeme altyapısı

Her ödeme yöntemi bir **sürücüdür** (`App\Support\Payments`). Çekirdekte iki sürücü vardır;
kart sağlayıcıları eklentilerle eklenir.

## PaymentGateway

```php
interface PaymentGateway
{
    public function key(): string;            // "bank_transfer", "paytr" …
    public function label(): string;
    public function description(PaymentContext $context): ?string;
    public function icon(): string;           // landmark | wallet | creditCard
    public function available(PaymentContext $context): bool;
    public function adjustmentRate(PaymentContext $context): BigDecimal; // − indirim / + ek ücret (%)
    public function adjustmentLabel(PaymentContext $context): ?string;
    public function start(Order $order): PaymentStart;   // none() ya da redirect($url)
    public function pendingTimeout(): ?int;   // dakika; dolunca ödeme başarısız sayılır
}
```

- `available()` — bu müşteri, tutar ve para birimi için yöntem sunulsun mu.
- `start()` — sipariş oluşturulduğu transaction içinde çağrılır; burada HTTP çağrısı yapmayın.

Ek arayüzler:

| Arayüz | Ne için |
|---|---|
| `HandlesCallbacks` | Sağlayıcı bildirimi (`notify`) ve tarayıcı dönüşü (`return`) |
| `RefundsPayments` | Sağlayıcı üzerinden para iadesi |
| `AcceptsBalancePayments` | Siparişten bağımsız cari tahsilat (kartla bakiye ödeme) |

## Sürücü kaydı

```php
hooks()->action('shop.payment.methods.register', function (PaymentRegistry $payments): void {
    $payments->add(new PttGateway(...));
});
```

`orders.payment_method` ve `payments.method` sürücü anahtarını (string) tutar; enum yoktur.
Etiket `PaymentMethods::label($key)` ile çözülür — eklenti kaldırılsa da eski kayıtlar okunur.

## Çekirdek sürücüler

| Anahtar | Yöntem | Sunulma koşulu |
|---|---|---|
| `bank_transfer` | Havale / EFT | Havale açık ve en az bir aktif banka hesabı |
| `on_account` | Cari hesaba (vadeli) | Yalnız vadeli çalışan bayi |

## Ödeme kayıtları

Tüm ödemeler `payments` tablosundadır: kart, onaylanan havale, havale bildirimi, elle tahsilat.
Başlıca alanlar: `account_id`, `order_id` (cari tahsilatta boş), `method`, `provider`,
`merchant_oid` (tekil referans), `amount`, `currency_code`, `installment`, `fee_amount`, `status`,
`payload`, `paid_at`.

Sağlayıcı geri dönüş adresleri:

- `POST|GET /odeme/bildirim/{gateway}` — sunucudan sunucuya bildirim (oturum ve CSRF dışı)
- `GET|POST /odeme/donus/{gateway}` — tarayıcı dönüşü

`shop:expire-pending-payments` (5 dakikada bir) `pendingTimeout()` süresini aşan bekleyen
siparişleri "Ödeme Başarısız" yapar ve stoğu geri ekler.

## Kart sağlayıcıları: HostedCardGateway

Güvenli ödeme sayfası (iFrame / hosted form, 3D Secure) kullanan sağlayıcılar için ortak akış;
PayTR ve iyzico eklentileri bunu genişletir:

1. `start()` bekleyen bir ödeme kaydı açar ve müşteriyi imzalı, 2 saat geçerli
   `/odeme/kart/{referans}` sayfasına yönlendirir.
2. Bu sayfa sağlayıcıdan token / oturum alır ve ödeme sayfasını gösterir.
3. Sonuç doğrulanınca sipariş "Ödendi" olur (cari borç + alacak); başarısızsa "Ödeme Başarısız".
   Aynı bildirim ikinci kez gelirse yok sayılır.
4. Müşterinin ödediği fazlası (taksit / vade farkı) `fee_amount`, taksit sayısı `installment`
   alanına yazılır.

Taksit tablosu `/odeme/taksit/{sürücü}` adresinden sunulur (kartın ilk 6 hanesiyle BIN sorgusu).
