# Teklifler

Teklifler **Mağaza › Teklifler** ekranından yönetilir. Bir teklif iki yoldan başlar:

- **Müşteri talebi** — bayi ya da müşteri ürünleri **teklif listesine** ekleyip talep gönderir.
  Yalnızca teklifle satılan, fiyatı 0 olan ya da stoğu yetmeyen ürünler zaten sepete değil
  teklif listesine gider; sepetteki ürünler de **teklif listesine taşınabilir**.
- **Yönetici teklifi** — siz panelde **Yeni teklif** ile müşteri seçip ürün ekleyerek hazırlarsınız.

Teklif numarası `T` + yıl-ay-gün + günlük sıra biçimindedir (ör. `T2611070003`).

## Teklif durumları

| Durum (panel) | Müşterinin gördüğü | Anlamı |
|---|---|---|
| **Taslak** | Fiyatlandırılıyor | Yöneticinin hazırladığı, henüz gönderilmemiş teklif. Müşteri görmez. |
| **Fiyat bekliyor** | Fiyatlandırılıyor | Müşteri talebi geldi, fiyat girmeniz bekleniyor. |
| **Revize istendi** | Revize ediliyor | Müşteri değişiklik istedi; düzenleyip yeniden göndermeniz bekleniyor. |
| **Yanıt bekliyor** | Onayınızı bekliyor | Teklif gönderildi; müşterinin yanıtı bekleniyor. |
| **Onaylandı** | Onaylandı — ödeme bekliyor | Müşteri onayladı; ödeme yapınca sipariş oluşur. |
| **Siparişe dönüştü** | Siparişe dönüştü | Ödeme adımı tamamlandı, sipariş oluştu. |
| **Reddedildi** | Reddedildi | Müşteri reddetti. |
| **İptal edildi** | İptal edildi | Siz iptal ettiniz ya da müşteri talebini geri çekti. |

"Süresi doldu" ayrı bir durum değildir: geçerlilik bitiş tarihi geçmiş teklifte **Süresi doldu**
etiketi görünür.

### Durum akışı

```
Müşteri talebi ─► Fiyat bekliyor ─┐
Yönetici       ─► Taslak ─────────┼─(Kaydet ve gönder)─► Yanıt bekliyor
Revize isteği  ─► Revize istendi ─┘                          │
                                                             ├─ müşteri Onayla ──► Onaylandı ──(ödeme)──► Siparişe dönüştü
                                                             ├─ müşteri Revize iste ──► Revize istendi
                                                             └─ müşteri Reddet ──► Reddedildi

Fiyat bekliyor / Revize istendi ──müşteri "Talebi geri çek"──► İptal edildi
Sonuçlanmamış her teklif ──yönetici İptal et──► İptal edildi
Siparişe dönüştü ──sipariş ödenmeden iptal──► Onaylandı (yeniden ödenebilir)
```

| Durum | Düzenlenebilir mi? | İptal edilebilir mi? | Silinebilir mi? |
|---|---|---|---|
| Taslak | Evet | Evet | **Evet** (yalnız taslak) |
| Fiyat bekliyor, Revize istendi | Evet | Evet | Hayır |
| Yanıt bekliyor | Evet (yeniden gönderilir) | Evet | Hayır |
| Onaylandı | Hayır | Evet | Hayır |
| Siparişe dönüştü, Reddedildi, İptal edildi | Hayır | Hayır | Hayır |

## Liste

Başlıkta toplam teklif ve "N işlem bekliyor" sayısı yazar (Fiyat bekliyor + Revize istendi).

| Süzgeç | Açıklama |
|---|---|
| Arama kutusu | Teklif no, müşteri, firma, e-posta |
| **Teklif durumu** | *İşlem bekleyenler* (fiyat bekleyen ve revize istenenler) ya da tek bir durum |
| **Kaynak** | *Müşteri talebi* / *Yönetici teklifi* |

| Sütun | İçerik |
|---|---|
| **Teklif** | Teklif no, tarih ve kaynak |
| **Müşteri** | Ad, firma / e-posta |
| **Durum** | Durum rozeti |
| **Geçerlilik** | Geçerlilik aralığı |
| **Kalem** | Ürün kalemi sayısı |
| **Toplam** | Genel toplam |
| İşlemler | **Detayı aç**; siparişe dönüştüyse **Siparişi aç** |

## Teklif formu

**Yeni teklif** ya da listedeki teklif aynı formu açar. Düzenlenemeyen durumlarda üstte "Bu teklif
onaylandı, siparişe dönüştü ya da kapandı; içeriği değiştirilemez." uyarısı çıkar ve alanlar
yalnız okunur.

### Müşteri ve geçerlilik

| Alan | Açıklama |
|---|---|
| **Müşteri / bayi** * | Ad ya da e-postayla aranır; üye (bayi ya da müşteri) hesapları listelenir. Yalnız **yönetici tekliflerinde** seçilir; müşteri talebinde talep eden kişidir ve değiştirilemez. |
| **Para birimi** | Teklifin para birimi; boşsa ana para birimi. **Ürün ekledikten sonra değiştirilemez.** Müşteri talebinde talep anındaki para birimidir. |
| **Geçerlilik başlangıcı** | Müşteri bu tarihten önce onaylayamaz ve ödeyemez. Boş olabilir. |
| **Geçerlilik bitişi** | Başlangıçtan önce olamaz; gönderirken bugünden önce olamaz. **Boşsa gönderimde** [Satış Ayarları](/satis/satis-ayarlari)'ndaki teklif geçerlilik süresi (varsayılan 15 gün) eklenir; süresi geçmiş teklif yeniden gönderilirken de bitiş tarihi bu şekilde yenilenir. |

### Ürünler

Üstteki **Ürün ekle** alanında ürün **adı veya kodu** ile arayın ya da **kategori** / **marka**
seçerek listeleyin; sonuçlarda stok ve liste fiyatı (KDV hariç) görünür. **Ekle** ile kaleme
eklenir. Bir teklifte en çok 200 kalem olur, aynı ürün iki kez eklenemez.

Her kalemde:

| Alan | Açıklama |
|---|---|
| **Miktar** * | 1–100.000 |
| **Birim** | Ürünün birimi gelir; teklife özel değiştirilebilir (en çok 32 karakter). |
| Fiyat | Teklif fiyatı, teklifin para biriminde. **KDV'siz fiyat, KDV'li fiyat ya da satır toplamından birini** girmeniz yeter, diğerleri hesaplanır. |
| **KDV (%)** * | 0–100; ürünün oranı gelir. |
| **Toplam (KDV dahil)** | Satır toplamı |

Kalemin altında ürünün stoğu ve **liste fiyatı** (talep anındaki site fiyatı) görünür; fiyat
girilmemişse "Fiyat girilmedi" yazar. **Boşlara liste fiyatı** düğmesi fiyatı boş kalemlere
liste fiyatını yazar. Kalemi kaldırmak için satırdaki sil düğmesi.

### Kargo, not ve toplam

| Alan | Açıklama |
|---|---|
| **Kargo ücreti (KDV dahil)** * | Teklifin para biriminde; 0 = ücretsiz. Kargo tablosu teklife uygulanmaz, bu tutar geçer. |
| **Müşteriye not** | En çok 2000 karakter. Teklif e-postasında ve müşterinin teklif sayfasında görünür (ör. "Teslim süresi 5 iş günüdür."). |

Altta **Ara toplam (KDV hariç)**, **KDV**, **Kargo** ve **Genel toplam** görünür. Fiyatı girilmemiş
kalem varsa toplam liste fiyatıyla hesaplanır ve "Göndermek için tüm fiyatları girin." uyarısı
çıkar.

### Kaydet ve gönder

| Düğme | Ne yapar |
|---|---|
| **Kaydet** | Değişiklikleri saklar. Yeni teklif **taslak** olarak kaydedilir; müşteri görmez, e-posta gitmez. |
| **Kaydet ve gönder** | Kaydeder ve teklifi müşteriye gönderir (durum *Yanıt bekliyor*). Müşteriye teklif e-postası gider. |
| **Kaydet ve yeniden gönder** | Gönderilmiş teklifte görünür; güncel teklifi yeniden gönderir. |

Göndermek için: en az bir ürün olmalı, **tüm kalemlerin fiyatı girilmiş** olmalı ve müşteri
seçilmiş olmalı.

### Sağ sütun

- **Müşteri** kartı: ad, firma, e-posta, telefon, şehir; hesap varsa **Hesap** (Üye), yoksa
  *Misafir (e-postadaki bağlantıyla yanıtlar)*; müşteri talebindeyse **Müşterinin talep notu**.
- **Nasıl işler?** kısa adım listesi.
- **Teklifi iptal et** (iptal edilebilir durumlarda): onay penceresinde **Müşteriye not (isteğe
  bağlı)** yazılır (en çok 2000 karakter). Müşteri artık bu teklifi onaylayamaz ya da ödeyemez;
  müşteriye e-posta gider.
- **Geçmiş** kartı: her adım, notu ve kimin yaptığıyla.
- Taslakta alttaki **Sil** düğmesi: "Müşteriye hiç gönderilmedi. Bu işlem geri alınamaz."

## Müşterinin yanıtı

Bayi teklifini bayi panelinde **Teklifler › Tekliflerim**'den, vitrin müşterisi kendi hesabından
ya da e-postadaki bağlantıdan açar. Talep oluşturmak için **Teklifler › Teklif listem** kullanılır.

| Müşteri işlemi | Ne zaman | Sonuç |
|---|---|---|
| **Onayla** (not isteğe bağlı) | Yanıt bekliyor ve geçerlilik aralığında | Teklif **Onaylandı** olur, ödeme sayfası açılır. Ödeme adımı tamamlanınca **sipariş oluşur** |
| **Revize iste** (**not zorunlu**) | Yanıt bekliyor ve geçerlilik aralığında | Teklif **Revize istendi** olarak size döner |
| **Reddet** (not isteğe bağlı) | Yanıt bekliyor ve geçerlilik aralığında | Teklif **Reddedildi** olur, kapanır |
| **Talebi geri çek** | Fiyat bekliyor ya da Revize istendi | Teklif **İptal edildi** olur |

- Geçerlilik başlangıcından önce ya da bitişinden sonra müşteri yanıt veremez ve ödeyemez
  ("Teklifin geçerlilik süresi doldu."). Süresi dolan teklifi düzenleyip yeniden gönderebilirsiniz.
- Müşterinin talep formunda ad, e-posta zorunludur; firma, şehir ve not isteğe bağlıdır. Giriş
  yapmamış ziyaretçide (vitrin) telefon ve KVKK onayı da zorunludur.

## Tekliften sipariş

- Sipariş, **teklif fiyatları, KDV oranları, kargo ücreti ve para birimiyle** oluşur. Teklifin
  kuru kullanılır.
- Müşteri ödeme adımında ödeme yöntemini seçer (havale, kart, vadeli …); havale indirimi gibi
  ödeme farkları uygulanır.
- Teklif siparişlerine **kampanya uygulanmaz** ve stok kontrolüne takılmaz (stok yetmezse eksiye
  düşer).
- Siparişte "Teklif … üzerinden oluşturuldu." notu ve teklif bağlantısı bulunur; listede
  "· Tekliften" yazar.
- Sipariş **ödenmeden iptal** edilirse teklif yeniden *Onaylandı* olur ve müşteri tekrar
  ödeyebilir.

## E-postalar {#e-postalar}

| Olay | Müşteriye | Size (bildirim adresine) |
|---|---|---|
| Müşteri talep gönderdi | Talebiniz alındı | Yeni teklif talebi |
| Teklif gönderildi / yeniden gönderildi | **Teklifiniz hazır** — kalemler, kargo, toplam, geçerlilik tarihi, müşteriye not | — |
| Teklif iptal edildi | İptal bilgisi ve (yazdıysanız) notunuz | — |
| Müşteri onayladı / revize istedi / reddetti / geri çekti | Teyit e-postası (onayda ödeme bağlantısıyla) | Müşterinin yanıtı ve notu |
| Siparişe dönüştü | Teklif e-postası gitmez; sipariş e-postaları gider | Yeni sipariş |

Taslak kaydetmek e-posta göndermez. Size gelen e-postalar **Ayarlar › Tanımlamalar › Satış
Ayarları › Bildirimler**'deki **Bildirim e-postası** adresine gider.
