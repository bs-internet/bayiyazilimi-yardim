# Pazaryeri mağazam

Firmanız **Trendyol Bayi** ya da **Hepsiburada Bayi** eklentisini kurup hesabınıza aktarımı açtıysa
menüde **Trendyol Mağazam** ya da **Hepsiburada Mağazam** görünür. Buradan firmanın ürünlerini kendi
pazaryeri mağazanıza aktarırsınız; fiyat ve stok kendiliğinden güncellenir.

Pazaryerindeki siparişleriniz bu sisteme gelmez. Siparişi, kargoyu ve tahsilatı her zamanki gibi
pazaryeri panelinizden ya da kendi sisteminizden yönetirsiniz; ürünü firmadan normal yoldan sipariş
edersiniz.

## 1. Mağazayı bağlama {#baglama}

**Mağaza Ayarları**:

| Trendyol | Hepsiburada |
|---|---|
| **Satıcı no**, **API key**, **API secret** (Trendyol satıcı paneli › Hesap Bilgilerim › Entegrasyon Bilgileri) | **Satıcı kimliği**, **Servis anahtarı**, **Entegratör kullanıcı adı** (Hepsiburada satıcı paneli › Bilgilerim › Entegrasyon › Entegratör Bilgileri) |
| **Kargoya veriliş süresi**, isteğe bağlı **Kargo firması kodu** | **Garanti süresi (ay)** |

- **Aktarım açık:** kapalıyken otomatik fiyat / stok eşitlemesi çalışmaz.
- **Fiyat farkı (%):** satış fiyatınız = alış fiyatınız (KDV dahil) + bu yüzde.
- Gizli anahtar şifreli saklanır, ekranda görünmez; değiştirmek için yenisini yazın.

**Bağlantıyı test et** bilgilerin doğruluğunu hemen gösterir. Son eşitleme zamanı ya da son hata ekranın
üstünde yazar.

## 2. Kategori eşleştirme {#eslestirme}

**Kategori Eşleştirme**: firmanın aktarıma açtığı kategoriler listelenir. İlk kullanımda
**Kategorileri güncelle** ile pazaryerinin kategorileri alınır. Her kategoriyi pazaryerindeki en uygun
kategoriye bağlayın ve zorunlu özelliklerin (renk, cinsiyet …) varsayılan değerlerini girin.

Trendyol'da ayrıca **Marka Eşleştirme** ekranından markalar Trendyol'da adıyla aranıp seçilir.
Hepsiburada markayı adıyla aldığı için bu adım yoktur.

## 3. Ürünleri aktarma {#urunler}

**Ürünler**:

1. **Listeye ürün ekle** ile ürünleri ad, stok kodu ya da barkodla arayın. Yalnız firmanın aktarıma
   açtığı ürünler çıkar.
2. Listede alış fiyatınız ve pazaryeri fiyatınız yan yana görünür.
3. Ürünleri seçip **Gönder**'e basın. Eksik bilgisi olan (barkod, eşleşmemiş kategori / marka, zorunlu
   özellik, görsel) ürün gönderilmez; neden satırda yazar.
4. Pazaryeri ürünü inceler; sonuç sonraki eşitlemede gelir: **Satışta** ya da gerekçesiyle **Hata**.

Ürüne tıklayınca ürüne özel ayarlar açılır: model kodu / varyant grubu, ürüne özel satış fiyatı ve
kategorinin varsayılanını ezen özellik değerleri.

Onaylanan ürünlerin fiyatı ve stoğu **15 dakikada bir** kendiliğinden gider; **Şimdi eşitle** beklemeden
gönderir. Firma bir ürünü aktarıma kapatırsa ya da aktarım yetkinizi kaldırırsa ürünlerin stoğu
mağazanızda 0'a çekilir.

## İşlem Günlüğü {#islem-gunlugu}

Gönderim ve eşitleme sonuçları burada listelenir; **Yalnız hatalar** ile süzülür.
