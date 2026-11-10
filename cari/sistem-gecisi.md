# Sisteme geçiş

Başka bir programdan (muhasebe / ön muhasebe, Excel tabloları, eski bayi sistemi) Bayi
Yazılımı'na geçerken verileri bu sırayla girmeniz önerilir. Sistemde eski programdan **sipariş
ya da cari hareket aktarma** özelliği yoktur: ürünler Excel ile aktarılır, bayiler tek tek
eklenir, her bayinin devreden bakiyesi **açılış bakiyesi** olarak girilir.

## Özet sıra {#sira}

| Adım | Ne yapılır | Nerede |
|---|---|---|
| 1 | Kurulum ve ilk ayarlar | [Kurulum](/baslangic/kurulum), [İlk ayarlar](/baslangic/ilk-ayarlar) |
| 2 | Para birimleri ve kurlar | **Ayarlar › Tanımlamalar › Para Birimleri**: [Para birimleri](/yonetim/para-birimleri) |
| 3 | Banka hesapları, havale ayarı | **Ayarlar › Tanımlamalar › Banka Hesapları**: [Havale](/cari/havale#banka-hesaplari) |
| 4 | Cari ayarları (çek / senet kullanılacaksa açın) | **Ayarlar › Tanımlamalar › Cari Ayarları**: [Cari Ayarları](/cari/#cari-ayarlari) |
| 5 | Ürünler, kategoriler, markalar | **Katalog › İçe / Dışa Aktar**: [Excel ile ürün aktarma](/satis/excel) |
| 6 | Açılış stokları | Excel'deki depo stok sütunları ya da [Sayım](/stok/sayim) / [Mal kabul](/stok/mal-kabul) |
| 7 | Bayi grupları | **Bayiler › Bayi Grupları**: [Bayi grupları](/musteriler/#bayi-gruplari) |
| 8 | Bayiler | **Bayiler › Yeni Bayi**: [Yeni bayi](/musteriler/#yeni-bayi) |
| 9 | Açılış bakiyeleri | Müşteri detayı › **Cari** › **Dekont** |
| 10 | Portföydeki çek / senetler | Müşteri detayı › **Cari** › **Tahsilat ekle** |
| 11 | Kontrol | **Bayiler › Cari Durum**, **Mağaza › Ödemeler › Geciken Ödemeler** |

## Bayi grupları ve bayiler {#bayiler}

1. Eski sistemdeki fiyat / iskonto seviyelerinize göre **bayi gruplarını** oluşturun: her grubun
   indirim oranı, peşin / vadeli çalışma şekli, vade günü ve kredi limiti.
2. Bayileri **Bayiler › Yeni Bayi** ile tek tek ekleyin (toplu bayi aktarma yoktur). Firma
   ünvanını eski programdaki cari ünvanıyla aynı yazmanız, ekstreleri karşılaştırırken kolaylık
   sağlar.
3. Gruptan farklı limiti, vadesi ya da indirimi olan bayilerde **Bayi ayarları**'nı düzenleyin.

::: warning Hoş geldin e-postası hemen gider
Bayi kaydedilir kaydedilmez bayiye şifre belirleme bağlantısı gider ve bağlantı **60 dakika**
geçerlidir. Bayilere sistemi duyurmadan önce kayıt açıyorsanız, bağlantının süresi dolacağını
bilin: bayi daha sonra giriş ekranındaki şifre sıfırlama ile yeni bağlantı isteyebilir.
:::

## Açılış bakiyesi {#acilis-bakiyesi}

Her bayinin geçiş günündeki bakiyesini eski programdaki ekstresinden alın ve girin.

### Nasıl yapılır?

1. **Bayiler › Bayiler**'den bayiyi açın, **Cari** sekmesine geçin.
2. **Dekont**'a basın.
3. Alanları doldurun:

| Alan | Ne girilir |
|---|---|
| Yön | Bayi size borçluysa **Borç (müşteri borçlanır)**. Bayinin sizden alacağı varsa **Alacak (müşteri alacaklanır)**. |
| Tutar | Bakiye tutarı, ana para biriminde (pozitif sayı). |
| Tarih | Geçiş tarihi (ör. eski programı kapattığınız gün). |
| Açılış bakiyesi | **İşaretleyin.** Kayıt ekstrede "Açılış bakiyesi" türüyle görünür. |
| Açıklama | Zorunlu. Ör. "Eski sistemden devir — 31.12 bakiyesi". |

4. **Kaydet**. Bakiye kartı ve **Cari Durum** listesi hemen güncellenir.

Yanlış girdiyseniz satırdaki geri al düğmesiyle iptal edip doğrusunu girin (kayıt silinmez,
ters kaydı yazılır).

Döviz cinsinden çalıştığınız bayilerde de açılış bakiyesi **ana para biriminde** girilir. Dövizli
tutarı geçiş günündeki kurla çevirerek yazın.

### Açık faturaları vadesine göre girmek {#vadeli-acilis}

Açılış bakiyesinin vade tarihi yoktur. Borç dağıtımında ve [Geciken Ödemeler](/cari/#yaslandirma)
raporunda **kaydın tarihi** vade sayılır. Tek satırlık devir, geçiş gününden itibaren
yaşlandırılır.

Bayinin eski borcunu vadelerine göre takip etmek istiyorsanız, tek tutar yerine **her açık fatura
için ayrı bir açılış bakiyesi** girin ve **Tarih** alanına o faturanın **vade tarihini** yazın
(ileri tarih girilebilir).

**Örnek:** Bayinin 23.000 TL devreden borcu üç açık faturadan oluşuyor:

| Açılış kaydı | Tutar | Tarih (vade) |
|---|---|---|
| "Fatura 1041 devir" | 5.000 TL | 15 Ocak |
| "Fatura 1077 devir" | 10.000 TL | 10 Şubat |
| "Fatura 1102 devir" | 8.000 TL | 5 Mart |

Gelen tahsilatlar önce 15 Ocak'lı kaydı, sonra diğerlerini kapatır; Geciken Ödemeler raporu her
kaydı kendi tarihine göre 0-30, 31-60 … dilimlerine yerleştirir.

::: info Vadesi geçen kartı ve sipariş onayı
Açılış bakiyeleri (ve dekontlar) müşteri detayındaki **Vadesi geçen** kartına ve vadeli
siparişi onaya düşüren "vadesi geçmiş borç" kontrolüne **girmez**. Bu ikisi yalnız sistemde
verilen siparişlerin borçlarına bakar. Kredi limiti kontrolünde ise açılış bakiyesi, bakiyenin
parçası olarak **riske dahildir**.
:::

## Portföydeki çek / senetler {#cekler}

Eski sistemde alınmış ama henüz tahsil edilmemiş çek / senetleri portföyde izlemek için
önce **Cari Ayarları**'nda çek / senet portföyünü açın.

Çek / senet tahsilatı girildiğinde cariye **alacak** yazılır. Eski programda bu çekler bayinin
bakiyesinden zaten düşülmüş olduğundan, açılış bakiyesini **çekler düşülmeden önceki tutarla**
girin, ardından çekleri tek tek tahsilat olarak girin.

**Örnek:** Eski ekstrede bayinin bakiyesi 40.000 TL borç. Bu bakiyeye 15.000 TL'lik portföydeki
bir çek alacak olarak işlenmiş.

1. Açılış bakiyesi: **Borç 55.000 TL** (40.000 + 15.000).
2. **Tahsilat ekle** › Tür **Çek** › Tutar **15.000**, seri no, vade, banka, keşideci.
3. Sonuç: bakiye **40.000 TL borç** (eski ekstreyle aynı), çek **Portföyde** ve bayinin
   riskinde. Çek tahsil edilince **Tahsil edildi** yapın.

Tahsilat tarihi ileri olamaz. Çeki geçiş günü tarihiyle girin, gerçek vadesini **Vade** alanına
yazın. Bkz. [Çek ve senet](/cari/cek-senet).

## Ürünler ve stok {#urunler}

- Ürünleri **Katalog › İçe / Dışa Aktar** ekranında boş şablonu indirip doldurarak toplu
  aktarın. Fiyatlar KDV hariç ve ürünün para biriminde girilir. Bkz. [Excel ile ürün aktarma](/satis/excel).
- Açılış stoklarını aynı dosyadaki depo stok sütunlarıyla ya da bir **sayım** ile girin. Bkz.
  [Sayım](/stok/sayim), [Stok işlemleri](/stok/stok-islemleri).

## Eski siparişler {#siparisler}

Eski programdaki geçmiş siparişler sisteme aktarılmaz. Henüz ödenmemiş eski faturalar yukarıdaki
gibi **açılış bakiyesi** olarak girilir. Geçiş gününden sonraki siparişler sistemde verilir ve
cariye otomatik yazılır.

## Kontrol listesi {#kontrol}

1. **Bayiler › Cari Durum**'da başlıktaki **Toplam alacağınız** tutarını eski programdaki
   toplam müşteri alacağıyla karşılaştırın.
2. Birkaç bayinin ekstresini (**Cari** › **Yazdır** ya da **Excel**) eski ekstresiyle karşılaştırın.
3. Vadeli bayilerin **Kullanılabilir limit** kartını kontrol edin: açılış bakiyesi riske dahil
   olduğundan limiti aşan bayiler ilk vadeli siparişte onaya düşer.
4. **Mağaza › Ödemeler › Geciken Ödemeler**'de açık borçların dilimlere doğru dağıldığına bakın.
5. Bir test bayisiyle sipariş verip ödeme ve cari akışını deneyin.
