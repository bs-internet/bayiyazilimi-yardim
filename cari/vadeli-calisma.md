# Peşin ve vadeli çalışma

Bayinin ödeme düzeni **bayi grubunda** tanımlanır ve bayi bazında değiştirilebilir (bayi
ayarlarında boş bırakılan alan gruptan gelir). Vitrin müşterileri her zaman peşin çalışır.

## Ayarlar

| Ayar | Varsayılan | Açıklama |
|---|---|---|
| Çalışma şekli | **Peşin** | Peşin ya da vadeli |
| Kredi limiti | — | Vadeli bayinin borç sınırı; boş = limitsiz |
| Vade günü | 30 | Vadeli siparişin vade tarihi = sipariş günü + vade günü |
| Limit aşılınca | **Onaya düşer** | ya da siparişi engelle |
| Vadesi geçmiş borç varken | **Onaya düşer** | ya da engelle / serbest bırak |
| İzinli ödeme yöntemleri | Hepsi | Bayinin hangi yöntemlerle ödeyebileceği |

Grup ayarları **Müşteriler › Bayi Grupları**'nda, bayiye özel ayarlar müşteri detayındaki
**Bayi ayarları**'nda düzenlenir.

## Peşin çalışma

Sipariş, ödeme gelince işleme alınır (havale ya da kart).

## Vadeli çalışma

Ödeme ekranında ayrıca **Cari hesaba (vadeli)** seçeneği çıkar.

- **Limit yetiyorsa** sipariş doğrudan **Hazırlanıyor** olur, borç vade tarihiyle cariye yazılır.
- **Limit yetmiyorsa** (ya da vadesi geçmiş borç varsa) sipariş **Onay Bekliyor** durumuna düşer.
  Sipariş detayındaki **Onayla** ile Hazırlanıyor olur (borç yazılır), **Reddet** ile iptal edilir
  (stok geri eklenir).
- Vadeli bayi isterse kartla peşin de ödeyebilir; bu ödeme limitten düşmez.

## Risk ve kullanılabilir limit {#risk}

**Risk** = bakiye + onay bekleyen vadeli siparişler + portföydeki (henüz tahsil edilmemiş) çek ve
senetler.

**Kullanılabilir limit** = kredi limiti − risk.

Bu değerler müşteri detayındaki özet kartlarda ve bayinin **Cari Hesabım** ekranında görünür.
