# Müşteriler ve bayiler

Sistemde iki tür üye vardır:

| Tür | Nasıl oluşur | Hangi alanı kullanır |
|---|---|---|
| **Bayi** | Siz panelden eklersiniz (**Müşteriler › Yeni Bayi**); bayi kendisi başvuramaz | Bayi paneli (`/app`) |
| **Müşteri** | [Vitrin modülü](/vitrin/) kuruluysa vitrinden kendisi kayıt olur | Vitrindeki **Hesabım** |

Bir üye yanlış alana girmeye çalışırsa kendi alanına yönlendirilir.

## Müşteri listesi

**Müşteriler** ekranı bayileri ve müşterileri birlikte listeler; tür filtresiyle ayırabilirsiniz.

Müşteri detayında:

- özet kartlar: bakiye, kredi limiti, kullanılabilir limit, vadesi geçen borç,
- **Cari** sekmesi: ekstre ve tahsilat işlemleri (bkz. [Cari hesap](/cari/)),
- siparişler, teklifler ve adresler,
- **Bayiye çevir / Bayi ayarları / Müşteriye çevir** işlemleri.

## Bayi ayarları

Bayi eklerken ya da bayi detayındaki **Bayi ayarları**'ndan:

| Ayar | Açıklama |
|---|---|
| Bayi grubu | Grup indirimi ve grubun cari çalışma şekli buradan gelir |
| Bayiye özel indirim | Girilirse grubun indirim oranının yerine geçer |
| Çalışma şekli | Peşin / vadeli, kredi limiti, vade günü … Boş bırakılan alanlar gruptan gelir. Bkz. [Peşin ve vadeli çalışma](/cari/vadeli-calisma) |
| Bölge deposu | Bayinin siparişleri önce bu depodan karşılanır. Bkz. [Depolar](/stok/#bolge-deposu) |

## Bayi grupları

**Müşteriler › Bayi Grupları** — her grubun bir **indirim yüzdesi** ve varsayılan **cari
çalışma şekli** vardır. Örneğin "Standart Bayi %10", "Altın Bayi %15 ve 60 gün vadeli".

## Cari durum

**Müşteriler › Cari Durum** tüm müşterilerin bakiyesini listeler; borçlu / alacaklı filtresiyle
kimden alacağınız olduğunu tek ekranda görürsünüz.
