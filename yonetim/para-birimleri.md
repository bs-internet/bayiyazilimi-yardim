# Para birimleri

**Ayarlar › Tanımlamalar › Para Birimleri** — para birimlerinin tanımı ve kurları tek ekrandadır.

## Para birimi tanımı

- **Aktif / pasif** — aktif para birimleri ürünlerde, tekliflerde ve vitrinde seçilebilir.
- Binlik ve ondalık ayırıcı, sembol.
- **Kur kaynağı:** **Elle** ya da **TCMB**.

## TCMB kurları

TCMB kaynaklı para birimleri:

- ekrandaki **TCMB'den Güncelle** düğmesiyle, ya da
- otomatik olarak **hafta içi 09:05 ve 15:45**'te güncellenir (sunucuda [cron](/baslangic/kurulum#cron) tanımlı olmalı).

**Kur tipi** (döviz alış / satış, efektif alış / satış) aynı ekrandaki TCMB ayarlarından seçilir.

## Fiyatlar nasıl çevrilir?

- Ürün fiyatı **kendi para biriminde ve KDV hariç** saklanır (ör. bir ürün EUR, bir başkası TL).
- Gösterimde seçilen para birimine güncel kurla çevrilir.
- **Sipariş ve teklif**, oluştuğu andaki para birimi ve kurla kaydedilir; kur sonradan değişse de
  sipariş tutarı değişmez.

## Ana para birimi

**Ayarlar › Genel Ayarlar › Varsayılanlar › Para birimi** sistemin ana para birimidir. Cari,
raporlar ve başlangıç ekranı bu birimle gösterilir.

::: danger Kilitlenir
Ana para birimi ilk sipariş ya da ilk cari hareketten sonra değiştirilemez. Kurulumdan hemen
sonra ayarlayın.
:::
