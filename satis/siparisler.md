# Siparişler

Siparişler **Mağaza › Siparişler** ekranında listelenir. Bayiler bayi panelindeki **Sipariş
ver** ekranından, vitrin kuruluysa müşteriler vitrinden sipariş verir.

## Sipariş durumları

```
Ödeme Bekleniyor → Hazırlanıyor → Kargoya Verildi → Tamamlandı
```

Ayrıca: **Onay Bekliyor** (vadeli siparişte limit aşıldıysa), **İptal Edildi**, **Ödeme
Başarısız**.

| Durum | Anlamı |
|---|---|
| Ödeme Bekleniyor | Havale ya da kart ödemesi bekleniyor |
| Onay Bekliyor | Vadeli bayinin limiti yetmedi ya da vadesi geçmiş borcu var; sizin onayınızı bekliyor. Bkz. [Peşin ve vadeli çalışma](/cari/vadeli-calisma) |
| Hazırlanıyor | Ödeme alındı (ya da vadeli sipariş onaylandı); sipariş hazırlanıyor. **Cari borç bu anda yazılır** |
| Kargoya Verildi | Kargo bilgisi girildi |
| Tamamlandı | Sipariş teslim edildi |

Durum her değiştiğinde müşteriye e-posta gider. Durum değiştirirken yazdığınız not, yalnız
**"notu müşteriye de göster"** işaretliyse e-postaya eklenir.

## Ödeme yöntemleri

| Yöntem | Ne zaman sunulur |
|---|---|
| **Havale / EFT** | Banka Hesapları'nda havale açıksa ve en az bir aktif hesap varsa |
| **Cari hesaba (vadeli)** | Yalnız vadeli çalışan bayilere |
| **Kartla ödeme** | PayTR ya da iyzico modülü kuruluysa |

Havaleyle verilen siparişte ödeme gelince sipariş detayında **Ödendi** deyin; ya da bayinin
gönderdiği [ödeme bildirimini](/cari/havale) onaylayın.

## Stok

- Stok **sipariş verildiği anda** ayrılır (düşülür). Aynı son ürünü iki kişi aynı anda satın
  alamaz.
- Bayiye bölge deposu atanmışsa stok önce o depodan, yetmezse diğer satılabilir depolardan
  düşülür; atanmamışsa önce varsayılan depodan.
- **Ödeme başarısız** olursa ya da sipariş **iptal** edilirse stok, düştüğü depo ve lokasyona
  geri eklenir.
- İptal edilmiş bir sipariş yeniden açılırken stok yetmiyorsa işlem uyarıyla durur.
- Sipariş detayında her kalemin hangi depo, lokasyon ve lottan düştüğü görünür.

Depo tarafı için bkz. [Stok işlemleri](/stok/stok-islemleri) ve
[Toplama listesi](/stok/toplama-listesi).

## Fatura takibi

Tamamlanan siparişe sipariş detayından **fatura numarası** girilir. Sipariş listesinde Fatura
sütunu ve **"Tamamlandı, faturalanmadı"** süzgeci vardır.

## Panelden ödeme alma ve iade

Sipariş detayının **Ödemeler** bölümünde siparişin ödemeleri görünür. Kartla alınmış bir ödeme
buradan **iade edilebilir** (tam ya da kısmi). Bkz. [Kartla ödeme](/cari/kartla-odeme).
