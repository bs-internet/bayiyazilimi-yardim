# Siparişlerim

Verdiğiniz bütün siparişleri, durumlarını, ödeme ve kargo bilgilerini buradan izlersiniz.
Firmanızdaki tüm kullanıcıların siparişleri birlikte listelenir.

## Sipariş listesi {#liste}

**Siparişlerim** (sol menü).

| Sütun | Açıklama |
|---|---|
| **Sipariş No** | Tıklayınca sipariş detayı açılır |
| **Tarih** | Siparişin verildiği tarih |
| **Durum** | Sipariş durumu. Bkz. [Sipariş durumları](#durumlar) |
| **Ödeme** | Ödeme yöntemi ve ödeme durumu |
| **Tutar** | Genel toplam ve ürün sayısı |

En yeni sipariş en üsttedir. Liste sayfalara bölünür; alttaki sayfa düğmeleriyle gezinirsiniz.

## Sipariş detayı {#detay}

Başlıkta sipariş numarası, durum, kalem sayısı ve toplam tutar yazar.

### Düğmeler

- **Tekrar sipariş ver** — bkz. [Tekrar sipariş](#tekrar-siparis).
- **İade talebi oluştur** — yalnız iade süresi içindeki kargolanmış / tamamlanmış siparişlerde
  görünür. Bkz. [İadelerim](/bayi-paneli/iadelerim).

### Havale / EFT bilgileri {#havale-bilgileri}

Havaleyle verdiğiniz siparişin ödemesi henüz alınmadıysa (ve sipariş iptal edilmediyse) detayın
en üstünde **Havale / EFT bilgileri** kartı çıkar: banka hesaplarımız ve "Ödemeyi aşağıdaki
hesaplardan birine yapın; açıklamaya sipariş numaranızı (…) yazın." hatırlatması. Ödeme
alındığında kart kaybolur.

### Ürünler

| Sütun | Açıklama |
|---|---|
| **Ürün** | Ad ve stok kodu; kampanyalı ürünlerde kampanya adı ve indirim tutarı |
| **Adet** | |
| **Birim (KDV hariç)** | |
| **Tutar (KDV dahil)** | |

Altında tutar özeti: kampanya varsa **Ürünler toplamı** ve kampanya indirimleri, **Ara toplam
(KDV hariç)**, **KDV**, **Kargo** (ya da Ücretsiz), havale indirimi gibi bir ödeme farkı varsa
onun satırı ve **Genel toplam**.

### Yan bilgiler

| Kutu | İçerik |
|---|---|
| **Ödeme** | **Yöntem**, **Durum** (ödeme durumu) ve vadeli siparişte **Vade** tarihi |
| **Kargo** | **Firma**, **Takip no** (firma takip bağlantısı tanımlıysa tıklanabilir, kargonun sitesinde takibi açar) ve **Desi** |
| **Teslimat adresi** / **Fatura adresi** | Siparişte kullanılan adresler, vergi bilgileriyle |
| **Sipariş notunuz** | Ödeme ekranında yazdığınız not |
| **Sipariş geçmişi** | Durum değişiklikleri ve tarihleri. Firmamızın size iletmek istediği notlar da burada görünür |

## Sipariş durumları {#durumlar}

| Durum | Anlamı | Sizin yapmanız gereken |
|---|---|---|
| **Ödeme Bekleniyor** | Sipariş alındı, ödemesi bekleniyor (havale ya da tamamlanmamış kart ödemesi) | Havaleyle ödüyorsanız ödemeyi yapıp [havale bildirimi](/bayi-paneli/cari-hesabim#havale-bildirimi) gönderin |
| **Onay Bekliyor** | Vadeli siparişiniz limit aşımı ya da vadesi geçmiş borç nedeniyle onayımızda | Bekleyin; gerekirse carinizdeki borcu kapatın |
| **Hazırlanıyor** | Ödeme alındı ya da vadeli sipariş onaylandı; sipariş hazırlanıyor | — |
| **Kargoya Verildi** | Sipariş kargoya teslim edildi; takip numarası Kargo kutusunda | Kargonuzu takip edin |
| **Tamamlandı** | Sipariş teslim edildi ve kapandı | — |
| **İptal Edildi** | Sipariş iptal edildi | — |
| **Ödeme Başarısız** | Kart ödemesi tamamlanamadı | Yeni sipariş verin ya da başka bir yöntemle ödeyin |

**Ödeme durumları:** **Bekliyor**, **Kısmen Ödendi**, **Ödendi**, **Başarısız**, **İade
Edildi**, **İptal Edildi**.

Sipariş durumu değiştiğinde siparişteki e-posta adresine bilgi e-postası gelir.

::: info Siparişi iptal etmek
Bayi panelinde sipariş iptal düğmesi yoktur. İptal ya da değişiklik için bizimle iletişime
geçin.
:::

## Tekrar sipariş {#tekrar-siparis}

Eski bir siparişteki ürünleri aynı adetlerle yeniden sipariş etmek için:

1. Sipariş detayında (ya da [Başlangıç](/bayi-paneli/baslangic) ekranındaki son siparişlerde)
   **Tekrar sipariş ver**'e basın.
2. Ürünler sepetinize **eklenir** (sepetinizdeki mevcut ürünler silinmez) ve
   [Sipariş ver](/bayi-paneli/siparis-verme) ekranı (sepetiniz) açılır.
3. Sepeti kontrol edip siparişi verin.

Her ürün güncel fiyatıyla ve [adet kurallarıyla](/bayi-paneli/siparis-verme#adet-kurallari)
eklenir. Satıştan kalkmış, yalnız teklifle satılan ya da stoğu yetmeyen ürünler eklenmez:

| Mesaj | Anlamı |
|---|---|
| N ürün sepete eklendi. | Hepsi eklendi |
| N ürün sepete eklendi, M ürün eklenemedi. | Bazıları eklenemedi |
| Hiçbir ürün sepete eklenemedi. | Hiçbiri eklenemedi |
