# Depo iş akışları

Depoda en sık yapılan işlerin adım adım anlatımı. Ekranların alan alan açıklaması ilgili
sayfalardadır; burada hangi ekranı hangi sırayla kullanacağınız anlatılır.

## İlk stok girişi {#ilk-stok-girisi}

Sistemi yeni kurdunuz, ürünler tanımlı, stoklar sıfır. Depoda ne varsa sisteme girmek
istiyorsunuz.

**Hazırlık**

1. **Mağaza › Stok › Depolar**'da depolarınızı tanımlayın; satışa açık olmayanların
   **Satılabilir depo** işaretini kaldırın. Bkz. [Depolar](/stok/#depo-formu).
2. Raf düzeni kullanacaksanız depo detayında **Toplu oluştur** ile lokasyonları açın. Bkz.
   [Toplu lokasyon oluşturma](/stok/#toplu-lokasyon).
3. Lot / seri no ya da SKT izleyecekseniz **Stok Ayarları**'nda takibi açın ve ürünlerde
   izlenebilirliği seçin. Bkz. [Lot, seri no ve SKT](/stok/lot-seri-skt#urun-ayari).

**Girişin üç yolu**

| Yol | Ne zaman uygun |
|---|---|
| **Excel ürün aktarımı** (`Stok: DEPO KODU` sütunları) | Lot / seri takipsiz çok sayıda ürün, raf bilgisi gerekmiyor. Stok, depoda ürünün ana lokasyonuna (yoksa Atanmamış'a) yazılır. Bkz. [Excel ile ürün aktarma](/satis/excel) |
| **Sayım oturumu** | Raf raf, barkodla; lot ve SKT'li ürünler dahil. En düzenli yol |
| **Stok Durumu › Stok girişi** | Birkaç ürün |

**Sayım oturumuyla ilk giriş**

1. **Mağaza › Stok › Sayım › Sayım başlat**; depoyu seçin, kapsamı **Tüm depo** bırakın.
2. Her rafın başında **Lokasyon**'u o rafa çevirin; raftaki ürünleri okutun.
3. Lot takipli üründe lot numarasını ve (SKT takipliyse) **SKT (yeni lot için)** alanını girin.
4. Bitince **Onayla**. Sistemde stok sıfır olduğu için beklenen 0'dır; sayılan her adet
   **Sayım Düzeltme** (+) olarak girer.

::: tip
Çok büyük bir depoyu birkaç kişi sayacaksa tüm depo yerine her koridor / raf için ayrı sayım
açın; farklı lokasyonların sayımları aynı anda yürüyebilir.
:::

## Tedarikçiden mal geldi {#mal-geldi}

1. Tedarikçi tanımlı değilse **Ayarlar › Tanımlamalar › Tedarikçiler**'de ekleyin.
2. **Mağaza › Stok › Mal Kabul › Yeni mal kabul**.
3. Tedarikçi, giriş deposu, belge türü (İrsaliye / Fatura / İrsaliyeli Fatura), belge no ve
   belge tarihini irsaliyeden girin.
4. İrsaliyedeki her ürünü arama kutusundan ekleyip miktarını yazın.
   - Lot takipli: **Lot no** ve SKT.
   - Seri takipli: seri numaralarını alt alta okutun; miktar kendiliğinden hesaplanır.
5. Malı yerleştireceğiniz rafı biliyorsanız **Lokasyon**'u seçin; boş bırakırsanız ürünün
   zaten durduğu ana rafa (yoksa Atanmamış'a) girer.
6. **Mal kabulü kaydet** → detay sayfasında **Yazdır** ile çıktıyı irsaliyeye iliştirin.

Sonra:

- Ön siparişle stok yokken satılmış adetler varsa gelen lot onlara kendiliğinden bağlanır. Bkz.
  [Lot belirsiz](/stok/lot-seri-skt#lot-belirsiz).
- Malı Atanmamış'a aldıysanız sonra raflara yerleştirip **Lokasyon değiştir** ile sisteme
  işleyin. Bkz. [Lokasyon değiştir](/stok/stok-islemleri#lokasyon-degistir).
- Yanlış miktar girdiyseniz mal kabul değiştirilemez; farkı **Stok çıkışı** ile düzeltin, nota
  mal kabul numarasını yazın.

## Depolar arası sevk {#depolar-arasi-sevk}

Merkez depodan bir bölge deposuna ürün gönderiyorsunuz.

1. **Mağaza › Stok › Stok Durumu**'nda ürünü bulun; depo sütunlarında kaynak depodaki miktarı
   kontrol edin.
2. **⋯ › Stok işlemi** → işlem türü **Depolar arası transfer**.
3. **Kaynak depo**: Merkez Depo. Belirli bir raftan alacaksanız **Kaynak lokasyon**'u seçin;
   boşsa toplama sırasıyla düşülür.
4. Lot takipli üründe belirli bir lotu göndermek istiyorsanız **Lot**'u seçin; boşsa SKT'si en
   yakın lot gider.
5. **Hedef depo** ve isterseniz **Hedef lokasyon**'u seçin.
6. **Miktar** ve **Not** (ör. sevk irsaliyesi numarası) → **Kaydet**.

Her ürün için ayrı işlem yapılır. Kaynak depoda yeterli stok yoksa transfer yapılmaz. Hareketlerde
kaynakta **Transfer (Çıkış)**, hedefte **Transfer (Giriş)** görünür; lotlar aynen taşınır.

::: info Yoldaki mal
Transfer anında tamamlanır; sistemde "yolda" durumu yoktur. Mal fiziksel olarak hedefe
ulaştığında transferi girmek isterseniz o zamana kadar stok kaynak depoda görünür.
:::

## Yıl sonu sayımı {#yil-sonu-sayimi}

**Hazırlık**

1. Bekleyen mal kabulleri ve transferleri girin; satış dışı bilinen çıkışları (fire, numune)
   işleyin.
2. Depo detayında **Excel'e aktar** ile depo listesini alın; kontrol listesi olarak kullanın.
3. Sayım yöntemine karar verin:
   - **Tüm depo tek sayım:** küçük depolar için. Sayım açıkken o depoda başka sayım açılamaz.
   - **Raf raf ayrı sayımlar:** büyük depolar ve birden çok sayım ekibi için. Her ekip kendi
     rafının sayımını açar, bitirir, onaylar.

**Sayım**

4. **Mağaza › Stok › Sayım › Sayım başlat**; depo ve kapsamı seçin. Nota "Yıl sonu 2026"
   yazın.
5. Rafları sırayla okutun. Okutma sırasında **Sayılanlar** tablosunda farkları izleyin.
6. Bitince **Sayılmayanlar** tablosunu kontrol edin: listede kalan her satır ya okutulmayı
   unutulmuştur ya da rafta yoktur. Unutulanları okutun.

**Onay**

7. **Onayla** penceresinde fazla / eksik toplamlarına bakın.
8. Sayım eksiksizse **Sayılmayanları sıfırla**'yı işaretleyin; böylece rafta bulunmayan ama
   sistemde görünen stok sıfırlanır. Bkz.
   [Sayılmayanları sıfırla](/stok/sayim#sayilmayanlari-sifirla).
9. **Onayla ve stoğa işle**.

::: tip Satışı durdurmanız gerekmez
Sayım sırasında sipariş alınmaya devam edebilir; onayda yalnız sayım farkı işlenir, sayımdan
sonraki satışlar geri alınmaz. Bkz. [Onay](/stok/sayim#onay).
:::

Sonuç: **Stok Hareketleri**'nde **Hareket türü › Sayım Düzeltme** süzgeciyle tüm düzeltmeleri
görebilirsiniz; her birinin referansı sayım numarasıdır.

## Hasarlı ürün çıkışı {#hasarli-urun}

**Yol 1 — Doğrudan stoktan düşmek** (ürün imha edilecek ya da iade edilmeyecekse):

1. **Mağaza › Stok › Stok Durumu**'nda ürünü bulun → **⋯ › Stok işlemi**.
2. İşlem türü **Stok çıkışı (−)**, depo.
3. Hasarlı ürünün durduğu **Lokasyon**'u seçin; lot takipli üründe hasarlı **lotu** seçin.
4. **Miktar**, **Not**: "Hasarlı — açıklama" → **Kaydet**.

**Yol 2 — Hasarlı deposuna ayırmak** (tedarikçiye iade, inceleme ya da sonradan karar
verilecekse):

1. Bir kez: **Depolar**'da "Hasarlı" adlı, **Satılabilir depo** işareti kaldırılmış bir depo
   açın.
2. Hasarlı ürünü **Depolar arası transfer** ile bu depoya taşıyın.
3. Ürün satılabilir stoktan çıkar ama kaydı kaybolmaz. Karar verildiğinde ya **Stok çıkışı**
   yapın ya da sağlam çıkanları geri transfer edin.

SKT'si geçmiş lotlar da aynı şekilde çıkarılır: **Stok çıkışı**'nda lotu açıkça seçin; süresi
geçmiş lot listede **(süresi geçmiş)** notuyla görünür.

## Siparişi topla ve kargola {#topla-kargola}

1. **Mağaza › Siparişler**'de ödemesi alınmış, **Hazırlanıyor** durumundaki siparişleri
   işaretleyin (ya da hiçbirini işaretlemeden tüm hazırlananları alın) → **Toplama listesi**.
2. **Yazdır**. Liste depo depo, raf sırasına dizilidir.
3. Depoyu listedeki sırayla dolaşın; her satırı toplayınca kutusunu işaretleyin.
   - **Lot / Seri** sütunundaki lotu toplayın.
   - **"Stok yetmeden düşüldü"** satırları rafta olmayabilir; bu ürünler gelene kadar siparişi
     bekletin.
4. Rafta yazılan lot yerine başka bir lot aldıysanız sipariş detayında **Lotu değiştir** ile
   düzeltin. Bkz. [Siparişte lot değiştirme](/stok/lot-seri-skt#siparis-lot-degistir).
5. Son sayfadaki **Siparişler** özetine göre ürünleri siparişlere ayırıp paketleyin.
6. Her siparişin detayında **Durumu değiştir** → **Kargoya Verildi**; kargo firmasını ve takip
   numarasını girin. Müşteriye e-posta gider. Bkz. [Siparişler](/satis/siparisler) ve
   [Kargo](/satis/kargo).

Stok, sipariş verildiği anda düşülmüştür; toplama ve kargolama stoğu yeniden değiştirmez.
