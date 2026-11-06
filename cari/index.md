# Cari hesap

Her bayinin **aldı / verdi** kayıtları sistemde tutulur. Siz müşteri detayında anlık bakiyeyi
ve ekstreyi görürsünüz; bayi de kendi panelinde (**Cari Hesabım**) aldıklarını ve ödediklerini
görür.

Muhasebe programı (ERP) bağlantısı gerekmez; sistem tek başına çalışır. İsterseniz bir ERP
modülü hareketleri muhasebe programınıza aktarabilir.

## Bakiye

**Bakiye = toplam borç − toplam alacak.** Pozitif bakiye müşterinin size borcu, negatif bakiye
müşterinin alacağıdır.

Cari, sistemin **ana para birimiyle** tutulur (varsayılan TL). Başka para birimindeki bir sipariş,
oluştuğu andaki kurla çevrilerek yazılır.

## Hareketler ne zaman yazılır?

| Olay | Cariye etkisi |
|---|---|
| Sipariş **Hazırlanıyor**'a geçer | Borç (vadeli siparişte vade tarihiyle) |
| Sipariş iptal edilir | Borcun ters kaydı |
| Ödeme alınır (havale onayı, kart, elle tahsilat) | Alacak |
| Ödeme iade / iptal edilir | Alacağın ters kaydı |
| İade talebi tamamlanır (tutar girilmişse) | Alacak |

Yarım kalan kart ödemeleri ve ödenmeyen havale siparişleri ekstreye girmez. Üye olmadan verilen
(misafir) siparişler cariye yazılmaz.

::: info Kayıtlar silinmez
Yanlış bir kayıt silinmez, **iptal** edilir: sistem ters kayıt yazar. Ekstrede ikisi de görünür;
böylece geçmiş her zaman izlenebilir.
:::

## Panelde cari işlemleri

**Müşteri detayı › Cari** sekmesi:

- **Ekstre** — yürüyen bakiyeli; tarih filtresi, Excel çıktısı ve yazdırılabilir ekstre.
- **Tahsilat ekle** — elle tahsilat. Türler: Nakit, Havale / EFT, POS (elle kart), Mahsup /
  virman; çek / senet açıksa Çek ve Senet.
- **Borç / Alacak dekontu** — fiyat farkı, düzeltme gibi siparişe bağlı olmayan kayıtlar.
- **Açılış bakiyesi** — sisteme geçerken müşterinin mevcut bakiyesini girin.
- **İptal** — elle girilmiş bir kaydı ters kayıtla geri alır.

## Ödemeler menüsü

**Mağaza › Ödemeler** altında:

| Ekran | İçerik |
|---|---|
| Tahsilatlar | Tüm ödeme kayıtları (kart, havale, elle tahsilat) |
| Havale Bildirimleri | Bayilerin dekontla bildirdiği havaleler. Bkz. [Havale](/cari/havale) |
| Çek / Senet | Portföy (açıksa). Bkz. [Çek ve senet](/cari/cek-senet) |
| Geciken Ödemeler | Yaşlandırma raporu |

### Geciken ödemeler (yaşlandırma)

Açık borçları vadesine göre dağıtır: **vadesi gelmemiş, 0–30, 31–60, 61–90, 90+ gün**. Excel'e
aktarılabilir.

## Ödemeler borçları nasıl kapatır?

Siparişe bağlı bir ödeme önce kendi siparişini kapatır. Kalan alacaklar **en eski vadeli
borçtan** başlayarak dağıtılır (FIFO). Sipariş detayında "Vadeli · vade tarihi", "Kısmen
ödendi", "Ödendi" ya da "Vadesi geçti" görünür.

## Cari Ayarları

**Ayarlar › Tanımlamalar › Cari Ayarları**

- **Ödeme yöntemine göre en düşük sipariş tutarı** (ana para biriminde)
- **Vade uyarı süresi** — vadesi yaklaşan borç / çek için kaç gün önceden uyarılsın
- **Çek / senet portföyü** aç / kapat
