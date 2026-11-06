# Depolar ve lokasyonlar

Stok menüsü **Mağaza › Stok** altındadır: Stok Durumu · Toplama Listesi · Mal Kabul · Sayım ·
Stok Hareketleri · Lot / Seri No · Depolar · Stok Ayarları.

::: info Maliyet tutulmaz
Sistem stok miktarını ve hareketlerini izler; alış fiyatı, maliyet ve muhasebe kaydı tutmaz.
Bunlar muhasebe programınızın (ERP) işidir.
:::

## Depolar

**Stok › Depolar** — her deponun kodu, adı, adresi ve durumu vardır. İki önemli işaret:

- **Varsayılan** — siparişler önce bu depodan karşılanır. Tek bir depo varsayılan olabilir.
- **Satılabilir** — bu deponun stoğu sitede ve bayi panelinde görünen stoğa dahil mi? Örneğin
  bir hurda / karantina deposunu satılamaz yapabilirsiniz.

Sitede görünen stok, **aktif ve satılabilir** depoların toplamıdır.

Stoğu ya da hareket geçmişi olan depo silinemez (geçmiş kayıtlar korunur); böyle bir depoyu
pasife alın. Yalnız hiç kullanılmamış depo silinir.

## Lokasyonlar (koridor → raf → göz)

Depo detayında lokasyonlar tek tek ya da **toplu** oluşturulur: koridorlar × raf aralığı × göz
aralığı (ör. `A-01-1 … B-10-4`). Lokasyonların sırası **toplama sırasıdır**.

Her deponun silinemeyen bir **Atanmamış** lokasyonu vardır. Lokasyon kullanmıyorsanız tüm stok
burada durur; hiçbir şey yapmanız gerekmez.

Lokasyon seçilmeden yapılan işlemlerde:

- **giriş** → ürünün o depoda en çok bulunduğu lokasyona (yoksa Atanmamış),
- **çıkış ve sipariş** → toplama sırasıyla stoğu olan lokasyonlardan (Atanmamış en sonda).

Depo detayı ürünleri lokasyon, lot ve SKT bilgisiyle listeler. **Depo Excel'i** lokasyon
sırasıyla tüm stoğu indirir.

## Bayinin bölge deposu {#bolge-deposu}

Farklı bölgelerde depolarınız varsa her bayiye bir **bölge deposu** atayabilirsiniz:
**Müşteriler › bayi detayı › Bayi ayarları › Bölge deposu** (yalnız aktif ve satılabilir depolar
listelenir).

- Bayinin siparişi önce bölge deposundan, yetmezse diğer satılabilir depolardan düşülür.
- Bayi panelindeki sipariş ekranında toplam stoğun yanında **"bölge deponuzda N"** görünür.
- Bayinin ne kadar sipariş verebileceği toplam satılabilir stoktan hesaplanır.

Bölge deposu atanmamış bayi ve müşterilerde önce varsayılan depo kullanılır. Atanan depo pasife
alınırsa ya da satılamaz yapılırsa atama yok sayılır.

## Stok ayarları

**Stok › Stok Ayarları**

| Ayar | Varsayılan | Açıklama |
|---|---|---|
| Varsayılan satış deposu | Merkez Depo | Siparişlerin önce düştüğü depo |
| Stoksuz ürünleri göster | Açık | Stoğu biten ürünler vitrinde listelensin mi |
| Kritik stok eşiği | 5 | Üründe eşik girilmemişse bu değer kullanılır |
| Kritik stok bildirimi | Açık | Bkz. [Kritik stok](/stok/stok-islemleri#kritik-stok) |
| Lot / seri no ve SKT takibi | Kapalı | Bkz. [Lot, seri no ve SKT](/stok/lot-seri-skt) |
| SKT uyarı süresi | 30 gün | "SKT'si yaklaşan" filtresi için |
