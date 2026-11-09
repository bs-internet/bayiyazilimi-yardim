# Sipariş detayı

**Mağaza › Siparişler** listesinde sipariş numarasına (ya da **İşlemler › Detayı aç**) tıklayınca
siparişin detay ekranı açılır. Durumların anlamı ve stok / cari etkileri için bkz.
[Siparişler](/satis/siparisler#durumlar).

## Başlık

- **Sipariş #numara**, yanında sipariş durumu, **Ödeme: …** durumu ve stok düşülmüşse
  **Stok düşüldü** rozetleri.
- Altında sipariş tarihi, toplam ürün adedi, genel toplam, ödeme yöntemi ve vadeli siparişte
  **Vade** tarihi.
- Sağda iki düğme: **Ödeme** ve **Durumu değiştir**.

Sipariş **Onay Bekliyor** durumundaysa başlığın altında **Vadeli sipariş onay bekliyor** uyarısı
çıkar (bkz. [Vadeli sipariş onayı](#onay)).

## Sol sütun

### Ürünler

Her kalem için görsel, ad, stok kodu, adet, birim fiyat (KDV hariç), KDV ve tutar. Kampanya
indirimi uygulanmışsa kalemde kampanya adı ve "−… indirim" görünür.

Stok düşülmüş siparişte her kalemin altında **hangi depo, lokasyon ve lottan** (SKT'siyle) kaç
adet düştüğü listelenir. Lot ya da seri takipli üründe depo personeli fiziksel olarak başka
lotu topladıysa buradan **Lotu değiştir** / **Seri numarasını değiştir** ile düzeltilir: yeni lot
ve miktar seçilip kaydedilir, geçmişe not düşülür. Seçenekler o üründe stokta olan, süresi
geçmemiş lotlardır. Bkz. [Stok işlemleri](/stok/stok-islemleri).

Alttaki toplam bölümü:

| Satır | Açıklama |
|---|---|
| **Ara toplam (indirim öncesi)** | Kampanya indirimi varsa görünür |
| **Kampanya indirimi** | Uygulanan kampanya indirimi |
| **Ara toplam (KDV hariç)** | İndirim düşülmüş KDV hariç toplam |
| **KDV** | Toplam KDV |
| **Kargo (firma, desi)** | Kargo ücreti; 0 ise *Ücretsiz* |
| **Ödeme farkı** | Ödeme yöntemine bağlı fark, ör. *Havale indirimi (%2)* |
| **Genel toplam** | Müşterinin ödediği / borçlandığı tutar |

Sipariş TL dışında bir para birimindeyse altta **Sipariş kuru: 1 USD = … TL** yazar; cari bu kurla
TL'ye çevrilir.

### Ödemeler {#odeme}

Siparişe ait ödeme kayıtları: **Yöntem** (taksit sayısı, vade farkı), **Tarih**, **Durum**,
**Tutar**, kısmi iade yapıldıysa "İade: …" ve başarısız ödemelerde neden. Kayıt yoksa
"Ödeme kaydı yok." yazar; havale siparişinde ödemeyi aldığınızda **Ödeme** düğmesinden durumu
"Ödendi" yapmanız hatırlatılır.

**Kart ödemesini iade et:** ödendi durumdaki kart ödemesinin satırında **İade et** düğmesi çıkar
(yetkiniz varsa). **İade tutarı** girilir (en fazla ödemenin iade edilmemiş kısmı). İade ödeme
sağlayıcısına iletilir; tamamı iade edilirse ödeme "İade Edildi" olur ve cari düzeltilir, kısmi
iadede iade edilen tutar kadar cari kaydı yazılır. Bkz. [Kartla ödeme](/cari/kartla-odeme).

### Geçmiş

Siparişin tüm adımları tarih sırasıyla: durum, not, işlemi yapan kullanıcı (sistem işlemlerinde
*Sistem*) ve müşteriye gösterilen notlarda **Müşteriye bildirildi** etiketi.

## Sağ sütun

| Kart | İçerik |
|---|---|
| **Müşteri** | Hesap adı ve türü (*Bayi* / müşteri) ya da *Misafir sipariş*; hesabın kaçıncı siparişi (*İlk siparişi* ya da "N sipariş"); tekliften geldiyse **Teklif #…** bağlantısı; **Müşteri notu** |
| **İletişim** | E-posta ve telefon |
| **Teslimat adresi** | Ad, firma, adres, ilçe / il, posta kodu, telefon (girilenler) |
| **Fatura adresi** | **Fatura türü** (*Bireysel* / *Kurumsal*), kurumsalda firma, vergi dairesi ve no; bireyselde girildiyse T.C. kimlik no |
| **Kargo** | **Kargo firması**, **Toplam desi**, **Takip numarası** (firmanın takip bağlantısı tanımlıysa tıklanabilir), **Kargoya verildi** tarihi |
| **Fatura** | Fatura no ve faturalandırma tarihi. Bkz. [Fatura numarası girmek](#fatura) |
| **Yönetici notu** | Yalnız panelde görünen iç not. Bkz. aşağıda |

En altta siparişin verildiği IP adresi yazar.

Muhasebe eklentisi kuruluysa sağ sütunda **Paraşüt** ya da **BizimHesap** kartı da görünür:
faturanın aktarım durumu ve gönder / yeniden dene düğmesi. Bkz.
[Muhasebe entegrasyonları](/muhasebe/).

## İşlemler

### Durumu değiştirmek {#durum}

**Durumu değiştir** penceresi:

| Alan | Açıklama |
|---|---|
| **Yeni durum** | Mevcut durum ve bu durumdan geçilebilecek durumlar; mevcut durum seçili gelir. Hangi durumların listelendiği: [Siparişler › Durum geçişleri](/satis/siparisler#durum-gecisleri). |
| **Kargo firması** | Aktif kargo firmaları (siparişin mevcut firması pasif olsa da listede). Mevcut değer gelir. |
| **Takip numarası** | En çok 255 karakter. Mevcut değer gelir. |
| **Not** | En çok 255 karakter. Geçmişe yazılır. |
| **Notu müşteriye de göster (e-posta ve sipariş sayfası)** | Varsayılan **işaretli**. İşaretliyse not müşteriye giden durum e-postasına ve müşterinin sipariş sayfasına eklenir. |

**Durumu kaydet** deyin. Kargo firması ve takip numarası hangi durum seçilirse seçilsin kaydedilir;
alanı boşaltırsanız bilgi silinir.

Müşteriye durum e-postası, durum **değiştiyse** her zaman gider (yalnız kargo / not güncelleyip
durumu aynı bırakırsanız e-posta gitmez).

### Kargoya vermek

1. **Durumu değiştir** deyin.
2. **Yeni durum**: *Kargoya Verildi*.
3. **Kargo firması**'nı seçin, **Takip numarası**'nı yazın.
4. İsterseniz not ekleyin ("Notu müşteriye de göster" işaretli kalsın).
5. **Durumu kaydet**. Kargo tarihi kaydedilir; müşteriye kargo firması ve takip numarasıyla
   e-posta gider. Firmanın takip bağlantısı tanımlıysa müşteri siparişinden kargoyu izleyebilir
   (bkz. [Kargo](/satis/kargo#firma-formu)).

### Ödeme durumunu değiştirmek (Ödendi işaretlemek)

**Ödeme** penceresinde **Ödeme durumu** seçilir: *Bekliyor*, *Ödendi*, *Başarısız*, *İade Edildi*.
Ödendiyse ödeme tarihi de görünür.

| Seçim | Ne olur |
|---|---|
| **Ödendi** | Siparişin yöntemi ve tutarıyla bir ödeme kaydı yazılır. Sipariş *Ödeme Bekleniyor* ya da *Ödeme Başarısız* ise **Hazırlanıyor** olur; stok düşülmemişse düşülür; cariye sipariş borcu ve ödeme (alacak) yazılır. Müşteriye "Ödemeniz alındı" e-postası gider. |
| **İade Edildi** | Önceden ödendiyse ödeme kayıtları "İade Edildi" olur ve cari tahsilatı ters kayıtla geri alınır. Sipariş durumu değişmez. |
| **Bekliyor** / **Başarısız** | Önceden ödendiyse ödeme kayıtları iptal edilir ve cari tahsilatı geri alınır. Sipariş durumu ve stok **değişmez**. |

Havaleyle gelen ödemeyi işaretlemenin diğer yolu, müşterinin gönderdiği **havale bildirimini**
onaylamaktır: bkz. [Havale ve ödeme bildirimi](/cari/havale).

### Vadeli sipariş onayı {#onay}

Onay bekleyen siparişte uyarıdaki açıklama: limit aşıldığı ya da vadesi geçmiş borç olduğu için
sipariş onaya düştü (nedeni geçmişte yazar).

- **Onayla** — sipariş **Hazırlanıyor** olur, borç cariye vadeyle yazılır; müşteriye "Vadeli
  sipariş onaylandı." notuyla e-posta gider.
- **Reddet** — onay sorulur; sipariş **İptal Edildi** olur, stok geri eklenir ve müşteriye
  "Vadeli sipariş onaylanmadı." notuyla e-posta gider.

Bkz. [Peşin ve vadeli çalışma](/cari/vadeli-calisma).

### Fatura numarası girmek {#fatura}

Fatura bilgisi yalnız **Tamamlandı** durumundaki siparişe girilir (öncesinde kartta "Fatura
bilgisi sipariş tamamlandıktan sonra girilir." yazar).

1. **Fatura** kartındaki düzenle simgesine tıklayın.
2. **Fatura no**'yu yazın (en çok 64 karakter).
3. **Faturalandırıldı olarak işaretle** deyin. Faturalandırma tarihi kaydedilir, geçmişe not düşer.

Fatura no'yu değiştirmek için aynı adımlar; **boş bırakıp kaydederseniz** fatura bilgisi
kaldırılır. Faturası kesilmemiş siparişleri listede **Fatura › Tamamlandı, faturalanmadı**
süzgeciyle bulun.

### Yönetici notu

**Yönetici notu** kartındaki **Notu düzenle** ile siparişe yalnız panelde görünen bir not
yazılır (en çok 5000 karakter). Müşteriye gösterilmez, e-postaya girmez.

## Yetkiler

Lot değiştirme ve kart iadesi düğmeleri yalnız ilgili yetkisi olan kullanıcılarda görünür;
diğer işlemler de rol yetkilerine bağlıdır. Bkz.
[Kullanıcılar, roller ve yetkiler](/yonetim/roller-yetkiler).
