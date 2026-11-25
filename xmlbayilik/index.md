# XML Bayilik eklentisi

**XML Bayilik** (ücretli eklenti), bayilerinizin ürünlerinizi kendi e-ticaret sitelerine aktarmasını
sağlar. Her bayi, bayi panelinden **kendine özel, gizli bir ürün akışı adresi** alır. Bayinin sitesi
(Ticimax, İdeasoft, T-Soft, ikas, WooCommerce …) bu adresi düzenli okuyarak ürünleri, fiyatları,
stokları ve görselleri kendiliğinden günceller.

Akışta ürünün **tavsiye satış fiyatı** (ürünün liste fiyatı) yer alır. Bayiye özel alış fiyatı,
grup indirimi ve kampanyalar akışa **girmez**.

## Kurulum {#kurulum}

XML Bayilik ücretli bir eklentidir, satın aldığınızda sunucunuza kurulur (bkz.
[Eklentiler](/yonetim/moduller#eklenti-kurulumu)). Bayi ya da ürün sayısı sınırı yoktur.

Kurulunca yönetim panelinde **Mağaza › XML Bayilik**, bayi panelinde **XML Ürün Akışı** menüsü
görünür. Yetkiler kurulumda oluşur ama göreve atanmaz: ekranı çalışanlarınıza açmak için
**Ayarlar › Kullanıcılar › Görevler**'de şu yetkileri verin:

| Yetki | Ne sağlar |
|---|---|
| XML bayilik ayarlarını görüntüle | Ayar ekranını ve akış alan bayileri görme |
| XML bayilik ayarlarını güncelle | Ayarları değiştirme |
| Bayinin akış adresini iptal et | Bir bayinin adresini geçersiz kılma |

## Ayarlar {#ayarlar}

**Mağaza › XML Bayilik**: "Bayileriniz ürünlerinizi kendi e-ticaret sitelerine aktarır. Her bayi,
bayi panelindeki "XML Ürün Akışı" sayfasında kendine özel adresini alır."

### Erişim

| Alan | Açıklama |
|---|---|
| **XML ürün akışı açık** | Kapalıyken tüm akış adresleri çalışmaz ve bayi menüsünde sayfa görünmez. Varsayılan: açık |
| **Akış alabilecek bayi grupları** | Yalnız seçilen gruplardaki bayiler akış alır. Hiçbir grup seçilmezse tüm bayiler alabilir |

Akış alamayan bir bayi **XML Ürün Akışı** sayfasını açarsa "XML ürün akışı hesabınız için açık
değil. Kullanmak istiyorsanız bizimle iletişime geçin." yazısını görür.

### Ürünler

| Alan | Açıklama |
|---|---|
| **Kategoriler** | Akışa girecek kategoriler. Seçilen kategorinin alt kategorileri de dahildir. Hiçbir kategori seçilmezse tüm aktif ürünler girer. Ekran o an akışta kaç ürün olduğunu yazar |
| **Stokta olmayan ürünler de girsin** | Açıkken tükenen ürün akışta stok 0 olarak kalır; bayinin sitesinde satışa kapanır ama silinmez. Varsayılan: açık |
| **Teklifle satılan ürünler de girsin** | Fiyatı teklifle belirlenen ürünler normalde akışa alınmaz. Varsayılan: kapalı |

### Stok ve güncelleme

| Alan | Açıklama |
|---|---|
| **Stok gösterimi** | **Sınırlı adet (önerilen)**: gerçek stok, üst sınırı geçmeyecek şekilde yazılır. **Gerçek adet**: stok olduğu gibi yazılır. **Yalnız var / yok**: stokta olan ürün üst sınır adediyle, olmayan 0 ile yazılır |
| **Stok üst sınırı** | Sınırlı adet ve var / yok gösteriminde kullanılan adet. Varsayılan: 50 |
| **Yenileme süresi (dakika)** | Akış dosyası bu süre boyunca önbellekten verilir (5–1440). Ayar kaydedilince hemen yenilenir. Varsayılan: 60 |

Stok takibi olmayan ürünler her zaman üst sınır adediyle yazılır.

::: tip Neden sınırlı adet?
Gerçek stok adedini bayilerinize (ve onların sitesini ziyaret eden herkese) göstermek istemeyebilirsiniz.
Sınırlı adet, bayinin sitesinde "stokta" bilgisini doğru tutar ama depo büyüklüğünüzü açık etmez.
:::

### Akış adresi alan bayiler {#bayiler}

Ayar ekranının altında adres almış bayiler listelenir: **Bayi**, **Son erişim**, **IP adresi** ve
toplam **İstek** sayısı. Bayinin sitesi adresi hiç okumadıysa "Hiç okunmadı" yazar.

**İptal et**: "Bayinin mevcut adresi hemen çalışmaz hale gelir. Bayi, panelindeki sayfayı açınca yeni
bir adres alır." Adresin başkasıyla paylaşıldığından şüpheleniyorsanız ya da bayiyle çalışmayı
bıraktıysanız kullanın (onay sorulur).

Ayar değişiklikleri ve adres iptalleri [etkinlik kayıtlarına](/yonetim/etkinlik-kayitlari) yazılır.

## Bayi tarafı: XML Ürün Akışı {#bayi-paneli}

Bayi, bayi panelinde **XML Ürün Akışı** sayfasını açınca adresleri kendiliğinden oluşur:
"Ürünlerimizi kendi e-ticaret sitenize aktarın. Aşağıdaki adreslerden birini sitenizin XML /
tedarikçi entegrasyonu ekranına girin; ürünler, tavsiye satış fiyatı, stok ve görseller düzenli
olarak güncellenir."

| Biçim | Adres | Ne için |
|---|---|---|
| **Standart XML** | `https://siteniz/xml/{anahtar}/standart.xml` | Ticimax, İdeasoft, T-Soft, ikas gibi altyapıların tedarikçi XML ekranında alanları eşleştirerek kullanılır |
| **Google Alışveriş XML** | `https://siteniz/xml/{anahtar}/google.xml` | Google Alışveriş biçimini tanıyan altyapılar ve eklentiler (ör. WooCommerce) alanları kendiliğinden eşleştirir |
| **CSV (Excel)** | `https://siteniz/xml/{anahtar}/urunler.csv` | Excel ile açılır; toplu ürün yükleme ekranları ve elle kontrol için (noktalı virgülle ayrılmış, UTF-8) |

Her adresin yanında **Kopyala** düğmesi vardır. Sayfa, akışın son okunma zamanını ve toplam istek
sayısını da gösterir ("Son erişim: … · toplam … istek").

**Adresi yenile**: "Yeni adres oluşturulur ve eski adres hemen çalışmaz hale gelir. Sitenizdeki XML
adresini yenisiyle değiştirmeniz gerekir." Adres yanlışlıkla paylaşıldıysa bayi bunu kendisi
yapabilir.

::: warning Adres gizlidir
Akış adresi şifre gerektirmez; adresi bilen herkes ürün listesini okuyabilir. Bayiler adreslerini
yalnız kendi sitelerinin ayar ekranına girmeli, başkalarıyla paylaşmamalıdır.
:::

### Standart XML alanları {#alanlar}

Bayinin sitesindeki XML entegrasyonu ekranında bu alanlar sitenin kendi alanlarıyla eşleştirilir.

| Alan | Açıklama |
|---|---|
| `kod` | Ürün kodu (stok kodu). Eşleştirmede anahtar alan; her üründe tekildir |
| `barkod` | Barkod (GTIN / EAN) |
| `model_kodu` | Model / üretici kodu |
| `ad` | Ürün adı |
| `marka` | Marka |
| `kategori` | Kategori yolu (Ana > Alt > Yaprak) |
| `kategori_id` | Kategori kimliği |
| `fiyat` | Tavsiye satış fiyatı, KDV dahil (ana para birimi) |
| `fiyat_kdv_haric` | Tavsiye satış fiyatı, KDV hariç |
| `kdv_orani` | KDV oranı (%) |
| `para_birimi` | Fiyatların para birimi |
| `liste_fiyati`, `liste_para_birimi` | Ürünün kendi para birimindeki liste fiyatı (KDV hariç) |
| `stok` | Satılabilir adet (stok gösterimi ayarına göre) |
| `stokta` | Stokta var mı (1 / 0) |
| `birim` | Satış birimi |
| `desi` | Kargo desisi |
| `kisa_aciklama` | Kısa açıklama |
| `aciklama` | Ürün açıklaması (HTML) |
| `gorseller/gorsel` | Ürün görsellerinin tam adresleri |
| `guncelleme` | Ürünün son güncellenme zamanı |

## Sınırlar ve güvenlik {#guvenlik}

- Akış adresi oturum açmadan okunur (bayinin sitesi çeker). Her adres **dakikada en çok 30 istek**
  alabilir.
- Geçersiz ya da iptal edilmiş adres, kapalı akış ya da akış alamayan bayi **404** yanıtı alır.
- Akış, yenileme süresi boyunca önbellekten verilir; ürün değişiklikleri en geç bu sürede akışa yansır.
- Pasif ürünler ile pasif kategori ya da markadaki ürünler akışa girmez.
