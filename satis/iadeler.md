# İadeler

Müşterilerin iade talepleri **Mağaza › İadeler** ekranında yönetilir. İade numarası `R` +
yıl-ay-gün + günlük sıra biçimindedir (ör. `R2611070001`).

## İade talebi (müşteri tarafı)

İade talebini müşteri açar; panelden iade talebi oluşturulmaz.

- Bayi, **İadelerim** menüsünden ya da siparişinin detayından talep açar. Talep yalnız hesabı
  olan müşterinin **kendi** siparişi için açılabilir (misafir siparişlerde iade talebi açılamaz).
- Sipariş **Kargoya Verildi** ya da **Tamamlandı** durumunda olmalıdır.
- Süre: siparişin **kargoya verildiği tarihten** (kargo tarihi yoksa ödeme, o da yoksa sipariş
  tarihinden) itibaren **iade talebi süresi** kadar gün; son günün sonuna kadar. Süre
  **Ayarlar › Tanımlamalar › Satış Ayarları**'ndan ayarlanır (varsayılan 14 gün). Süre **0**
  ise iade kapalıdır, hiçbir sipariş için talep açılamaz. Bkz.
  [Satış Ayarları](/satis/satis-ayarlari).
- Talepte kalemler ve adetler seçilir. Bir kalem için en fazla, sipariş adedinden o kalem için
  açılmış (reddedilmemiş) taleplerin adetleri düşüldükten kalan kadar iade istenebilir.
- **İade nedeni** zorunludur; **açıklama** isteğe bağlıdır (en çok 2000 karakter).

### İade nedenleri

| Neden |
|---|
| Hasarlı / kusurlu ürün |
| Yanlış ürün gönderildi |
| Vazgeçtim |
| Diğer |

Talep açılınca müşteriye "talebiniz alındı" e-postası, size yeni iade talebi e-postası gider.

## Durumlar

| Durum | Anlamı |
|---|---|
| **Beklemede** | Talep açıldı, inceleme bekliyor. |
| **Onaylandı** | Talep kabul edildi; müşteri ürünü gönderecek. Müşteriye giden e-postada ürünleri orijinal ambalajı ve faturasıyla gönderme hatırlatması ve gönderim adresiniz (**Kurumsal Bilgiler**'deki adres) yer alır. |
| **Ürün Teslim Alındı** | İade edilen ürünler size ulaştı. |
| **İade Tamamlandı** | İade tutarı müşteriye yansıtıldı. Sonuçlanmış durumdur. |
| **Reddedildi** | Talep reddedildi. Sonuçlanmış durumdur. |

Olağan akış:

```
Beklemede → Onaylandı → Ürün Teslim Alındı → İade Tamamlandı
     └──────────────┴──────────────┴────────→ Reddedildi
```

Pencerede beş durumun hepsi seçilebilir; sistem sırayı zorlamaz (ör. doğrudan İade Tamamlandı
yapılabilir). Ancak **İade Tamamlandı** ya da **Reddedildi** olmuş talebin durumu artık
değiştirilemez (ekranda "Sonuçlandı: …" yazar). Reddedilen talebin adetleri müşteri için yeniden
iade edilebilir hale gelir.

## Liste

| Süzgeç | Açıklama |
|---|---|
| Arama kutusu | İade no, sipariş no, müşteri, e-posta |
| **İade durumu** | Beş durumdan biri |

| Sütun | İçerik |
|---|---|
| **İade** | İade no ve tarih |
| **Sipariş** | Sipariş no |
| **Müşteri** | Ad ve e-posta |
| **Neden** | İade nedeni |
| **Durum** | Durum rozeti |
| **Kalem** | Kalem sayısı |
| İşlemler | **Detayı aç**, **Siparişi aç** |

## İade detayı

- **İade edilen ürünler**: ürün, stok kodu, iade adedi, birim fiyat (KDV dahil) ve tutar.
- **Neden ve açıklama**: iade nedeni ve müşteri açıklaması.
- **İade / Sipariş**: sipariş no (bağlantı), sipariş durumu, ödeme durumu, sipariş tutarı.
- **İade tutarı** kartı: iade edilen tutar (girilmediyse **Önerilen (ürün tutarlarından)**) ve
  **Stok** bilgisi (*Ürünler stoğa geri eklendi* / *Stoğa eklenmedi*).
- **Müşteri** ve **Geçmiş** (talep oluşturuldu, sonuçlandı).

### Durumu değiştirmek

**Durumu değiştir** penceresi ("Durum değişikliğinde müşteriye e-posta gönderilir."):

| Alan | Görünür olduğu durum | Açıklama |
|---|---|---|
| **Durum** * | Her zaman | Yeni durum |
| **İade tutarı (para birimi)** | Ürün Teslim Alındı, İade Tamamlandı | Siparişin para biriminde, 0 ya da büyük. Kalem tutarlarının toplamı önerilir. |
| **Ürünleri stoğa geri ekle** | Ürün Teslim Alındı, İade Tamamlandı (stoğa henüz eklenmemişse) | Varsayılan işaretli. Siparişin deposuna "İade" stok hareketi yazılır. |
| **Siparişin ödeme durumunu "İade Edildi" yap** | İade Tamamlandı | Sipariş ödenmişse varsayılan işaretli. |
| **Müşteriye not** | Her zaman | En çok 2000 karakter; durum e-postasında görünür. |

**Kaydet** deyin.

## Stok ve cari etkisi

**Stoğa geri ekleme:**

- Yalnız işaretlenirse ve **bir kez** yapılır; sonraki durum değişikliklerinde tekrar eklenmez.
- Ürünler siparişte **düştükleri depo, lokasyon ve lota** geri eklenir; bulunamazsa siparişin
  deposuna (o da yoksa varsayılan depoya).
- Stok takibi kapalı ürünler atlanır.

**İade tutarı ve cari** (yalnız **İade Tamamlandı**'da ve tutar 0'dan büyükse):

- Tutar müşterinin carisine **alacak** ("İade … (Sipariş …)") olarak yazılır; müşterinin borcu
  azalır ya da alacağı oluşur. Bu kayıt bir kez yazılır.
- **Siparişin ödeme durumunu "İade Edildi" yap** işaretliyse parayı müşteriye geri ödediğiniz
  kabul edilir: aynı tutarda bir **borç** kaydı ("ödeme müşteriye geri yapıldı") da yazılır, böylece
  cari bakiye değişmez; siparişin ödeme durumu *İade Edildi* olur ve sipariş geçmişine not düşer.
- Kartla alınmış ödemeyi sağlayıcı üzerinden geri ödemek için siparişin **Ödemeler** bölümündeki
  **İade et**'i kullanın. Bkz. [Sipariş detayı](/satis/siparis-detayi#odeme).

::: tip Hangisini seçmeli?
Müşteri tutarı sonraki siparişlerinde mahsup edecekse (cari alacak) **"İade Edildi" yap**
seçeneğini kaldırın. Parayı havale ya da kart iadesiyle geri verdiyseniz işaretli bırakın.
:::

## E-postalar {#e-postalar}

| Olay | Müşteriye | Size (bildirim adresine) |
|---|---|---|
| Talep açıldı | Talebiniz alındı | Yeni iade talebi |
| Durum değişti | "İade talebiniz: …" — yeni durum; Onaylandı'da gönderim adresi; İade Tamamlandı'da iade tutarı; notunuz | — |

Durum aynı bırakılıp yalnız not / tutar kaydedilirse e-posta gitmez.

## Nasıl yapılır?

### Hasarlı ürün iadesini sonuçlandırmak

1. **Mağaza › İadeler**'de talebi açın, nedeni ve kalemleri inceleyin.
2. **Durumu değiştir › Onaylandı** deyin; müşteri gönderim adresini e-postayla alır.
3. Ürün gelince **Ürün Teslim Alındı** seçin. Ürün satılabilir durumdaysa **Ürünleri stoğa
   geri ekle**'yi işaretli bırakın, hasarlıysa kaldırın.
4. **İade Tamamlandı** seçin, **İade tutarı**'nı kontrol edin; parayı geri ödediyseniz
   "İade Edildi" seçeneğini işaretli bırakın. **Kaydet**.

İade yetkileri **Mağaza: İadeler** grubundadır; hazır rollerden **Satış Sorumlusu** ve **Depo
Sorumlusu**'nda tanımlıdır. Bkz. [Kullanıcılar, roller ve yetkiler](/yonetim/roller-yetkiler).
