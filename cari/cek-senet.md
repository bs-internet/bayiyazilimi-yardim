# Çek ve senet

Müşteriden alınan çek ve senetler tahsilat olarak cariye işlenir ve **portföyde** vadesine kadar
takip edilir.

## Açma {#acma}

Çek / senet portföyü **varsayılan olarak kapalıdır**. Kullanacaksanız **Ayarlar › Tanımlamalar ›
Cari Ayarları** › **Çek / senet** bölümünde:

| Alan | Varsayılan | Açıklama |
|---|---|---|
| Çek / senet portföyünü kullan | Kapalı | Açıkken tahsilatta Çek ve Senet seçilebilir, **Mağaza › Ödemeler** altında **Çek / Senet** görünür. Kapalıyken hiçbir ekranda yer almaz. Kayıtlı çek / senetler silinmez. |
| Vadesi yaklaşan uyarısı (gün) | 7 | 0-365. Vadesine bu kadar gün (ya da daha az) kalan portföydeki çek / senetler listede işaretlenir. |

## Çek / senet alma {#alma}

1. Müşteri detayı › **Cari** › **Tahsilat ekle**'yi açın.
2. **Tür** olarak **Çek** ya da **Senet** seçin.
3. Alanları doldurun:

| Alan | Açıklama |
|---|---|
| Tutar | Zorunlu, ana para biriminde. |
| Tarih | Tahsilat (alış) tarihi. Varsayılan bugün, ileri tarih olamaz. |
| Seri no | Zorunlu, en fazla 64 karakter. |
| Vade | Zorunlu. Çek / senedin vade tarihi. |
| Banka, Şube | Yalnız çekte, isteğe bağlı. |
| Keşideci (çek) / Borçlu (senet) | İsteğe bağlı. |
| Görsel (isteğe bağlı) | Fotoğraf ya da PDF (JPG, PNG, WEBP, PDF), en fazla 5 MB. |
| Açıklama | İsteğe bağlı. Portföyde not olarak da görünür. |

4. **Kaydet**. Tahsilat kaydı ve cari **alacak** yazılır (tutar en eski borçtan başlayarak
   dağıtılır) ve çek / senet **Portföyde** durumunda portföye eklenir.

Çek / senet tahsilatı ekstreden **iptal edilmez**. Geri almak için portföyden **İade edildi** ya da
**Karşılıksız** yapılır.

## Durumlar ve geçişler {#durumlar}

| Şu durumdan | Gidebileceği durumlar |
|---|---|
| **Portföyde** | Tahsile verildi, Ciro edildi, Tahsil edildi, İade edildi, Karşılıksız |
| **Tahsile verildi** | Tahsil edildi, Karşılıksız, Portföyde (geri) |
| **Ciro edildi** | Karşılıksız |
| **Tahsil edildi** |: (son durum) |
| **Karşılıksız** |: (son durum) |
| **İade edildi** |: (son durum) |

| Durum | Cariye etkisi | Riske etkisi |
|---|---|---|
| Portföyde, Tahsile verildi, Ciro edildi | Yok (alacak alındığında yazıldı) | Tutar bayinin **riskine eklenir** |
| Tahsil edildi | Yok | Riskten çıkar |
| **Karşılıksız** ya da **İade edildi** | Aynı tutarda **borç** yazılır (tür "Karşılıksız çek / senet"). Tahsilat kaydı "Başarısız" olur | Riskten çıkar (borç bakiyeye girer) |

Risk hesabı: [Peşin ve vadeli çalışma](/cari/vadeli-calisma#risk).

## Portföy ekranı {#portfoy}

**Mağaza › Ödemeler › Çek / Senet**. Başlıkta durumlara göre toplamlar (Portföyde, Tahsilde, Ciro
edilen) yazar. Liste vade tarihine göre (en yakın önce) sıralanır.

| Filtre | Açıklama |
|---|---|
| Arama | Seri no, keşideci ya da müşteri. |
| Durum | **Açık (portföy, tahsil, ciro)** (varsayılan), **Tümü** ya da tek bir durum. |
| Tür | Çek ya da Senet. |
| Vade | **Vadesi yaklaşan (N gün)**: vadesine uyarı süresi kadar ya da daha az kalanlar (geçmişler dahil). |

| Sütun | Açıklama |
|---|---|
| Vade | Vade tarihi ve "N gün kaldı" / **Bugün** / "N gün geçti". Vadesi yaklaşan açık kayıtlar işaretlenir. |
| Çek / senet | Tür, seri no, banka / şube, keşideci, ciro edildiyse kime, notlar. |
| Müşteri | Hesap (tıklayınca müşteri detayı). |
| Durum | Güncel durum. |
| Tutar | Ana para biriminde. |
| İşlem | **Görseli aç** (görsel yüklendiyse), **Durum değiştir**. |

### Nasıl yapılır? Durum değiştirmek

1. Satırdaki **Durum değiştir**'e basın. Pencerede çek / senedin özeti ve "Karşılıksız ya da iade
   edilince tutar müşterinin carisine borç yazılır." uyarısı görünür.
2. **Yeni durum**'u seçin (yalnız izin verilen geçişler listelenir).
3. **Ciro edildi** seçtiyseniz **Ciro edilen** kişi / firmayı yazın (zorunlu).
4. İsterseniz **Not** ekleyin (en fazla 255 karakter. Mevcut notların sonuna eklenir).
5. **Kaydet**.

**Örnek:** 15.000 TL'lik çek portföyde. Bankaya verdiğinizde **Tahsile verildi**, para geçince
**Tahsil edildi** yapın. Cari değişmez, bayinin riski 15.000 TL azalır. Çek karşılıksız çıkarsa
**Karşılıksız** yapın: cariye 15.000 TL borç yazılır ve bayinin bakiyesi o kadar artar.

## Yetkiler

"Çek / senet portföyünü listele", "Çek / senet durumunu değiştir", "Çek / senet görselini
görüntüle"; çek / senet girmek için "Tahsilat gir". Bkz.
[Kullanıcılar, roller ve yetkiler](/yonetim/roller-yetkiler).
