# Stok ayarları

**Mağaza › Stok › Stok Ayarları** — varsayılan satış deposu, stoksuz ürünlerin vitrinde
gösterimi, kritik stok uyarısı ve lot / seri no takibi. Tüm alanlar tek **Kaydet** düğmesiyle
kaydedilir.

| Alan | Varsayılan | Açıklama |
|---|---|---|
| Varsayılan satış deposu | Merkez Depo (kurulumda oluşturulan depo) | Zorunlu; yalnız aktif depolar listelenir. Siparişlerde stok önce bu depodan, yetmezse diğer satılabilir depolardan düşülür. Bölge deposu atanmamış bayi ve müşterilerde, mal kabul ve sayım başlatmada seçili gelen depodur. Varsayılan depo **yalnız buradan** değiştirilir |
| Stokta olmayan ürünleri vitrinde göster | Açık | Kapalıyken stoğu bitmiş ürünler listelerde ve aramada görünmez |
| Kritik stok eşiği (genel) | 5 | Zorunlu, 0–1.000.000. Satılabilir stok bu değere ya da altına inince ürün kritik sayılır. Ürün formunda ürüne özel **Kritik stok** girilmişse o geçerlidir |
| Kritik stok bildirimi gönder | Açık | Stok eşiğe indiğinde, Stok Durumu yetkisi olan yöneticilere uygulama içi bildirim ve e-posta gider (eşiğin üstüne çıkıp yeniden inene kadar bir kez) |
| Lot / seri no ve SKT takibi | Kapalı | Açıkken ürün formunda izlenebilirlik seçilebilir, mal kabulde lot / seri girilir, siparişte SKT'si yakın olan önce çıkar. Kapatılırsa tüm ürünler takipsiz davranır; kayıtlı lotlar silinmez, yeniden açınca geri gelir |
| SKT uyarı süresi (gün) | 30 | Yalnız lot / seri no takibi açıkken görünür. 1–3650; boş bırakılırsa 30. Son kullanma tarihine bu kadar gün kalan lotlar Stok Durumu ve Lot / Seri No ekranlarında "SKT yaklaşan" olarak işaretlenir |

## Notlar

- **Varsayılan depoyu değiştirmek:** listeden yeni depoyu seçip **Kaydet**. Eski depo
  varsayılanlıktan çıkar. Varsayılan depo pasif yapılamaz ve silinemez; o depoyu kapatmak
  istiyorsanız önce burada başka bir depoyu seçin.
- **Kritik stok eşiği** değişince Stok Durumu'ndaki **Kritik stokta** süzgeci hemen yeni eşiği
  kullanır; bildirim ise bir sonraki stok düşüşünde değerlendirilir. Ayrıntı:
  [Kritik stok](/stok/stok-islemleri#kritik-stok).
- **Lot / seri no takibi** açılıp kapanınca **Mağaza › Stok › Lot / Seri No** menüsü görünür /
  gizlenir. Ayrıntı: [Lot, seri no ve SKT](/stok/lot-seri-skt).
