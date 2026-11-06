# Mal kabul

Tedarikçiden gelen malları irsaliye / fatura üzerinden depoya almak için kullanılır.

## Tedarikçiler

**Ayarlar › Tanımlamalar › Tedarikçiler** — ad, vergi dairesi / numarası, iletişim bilgileri ve
not. Mal kabulü olan tedarikçi silinemez, pasife alınır.

## Yeni mal kabul

**Stok › Mal Kabul › Yeni mal kabul**

1. **Belge bilgileri:** tedarikçi, belge türü (İrsaliye / Fatura / İrsaliyeli Fatura), belge no,
   belge tarihi ve giriş deposu.
2. **Ürün satırları:** her satırda ürün, miktar ve isteğe bağlı lokasyon.
   - Lot takipli üründe **lot no**, SKT takipli üründe **son kullanma tarihi**.
   - Seri takipli üründe **seri numaraları** — her satıra bir tane, ya da boşluk, virgül veya
     noktalı virgülle ayırarak. Seri numaraları büyük harfe çevrilir.
3. **Kaydet.** Kayıt `MK` ile başlayan bir numara alır (`MKyymmddNNNN`); her satır bir "Giriş"
   stok hareketi olarak yazılır.

::: warning Aynı belge iki kez alınamaz
Aynı tedarikçinin aynı türdeki aynı belge numarası ikinci kez kabul edilmez.
:::

## Düzeltme

Kaydedilmiş mal kabul değiştirilmez. Hatalı girişi **Stok Durumu**'ndan çıkış yaparak düzeltin.

Mal kabul detayı yazdırılabilir.
