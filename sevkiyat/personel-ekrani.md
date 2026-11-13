# Personel ekranı

Dağıtım personeli e-posta ve parolasıyla giriş yaptığında **Sevkiyatlarım** ekranı (`/sevkiyat`) açılır.
Ekran telefonda kullanılmak üzere tasarlanmıştır; yönetim paneline giriş yoktur.

## Sevkiyatlarım {#sevkiyatlarim}

Personele atanmış açık sevkiyatlar tarih ve durak sayısıyla listelenir; altta **Son tamamlananlar**
görünür. Açık sevkiyat yoksa "Şu an size atanmış açık sevkiyat yok." yazar.

Sevkiyata dokununca duraklar teslimat sırasıyla açılır: müşteri, adres, telefon ve sipariş kalemleri.
**Yol tarifi** adresi telefonun harita uygulamasında açar.

## Yola çıkma {#yola-cikma}

Planlanmış sevkiyatta **Yola çık** düğmesi görünür. Basıldığında sevkiyat **Yolda** olur ve siparişler
**Kargoya Verildi** durumuna geçer. Teslimatlar yalnız yoldaki sevkiyatta kaydedilir.

## Teslimatı kaydetme {#teslimat}

Her durak için üç sonuçtan biri seçilir:

- **Teslim edildi:** isteğe bağlı **Teslim alan** kişinin adı ve **Not** yazılır.
- **Kısmi teslim:** neyin teslim edilmediği açıklamaya yazılır (zorunlu).
- **Teslim edilemedi:** **Neden teslim edilemedi?** sorusuna açıklama yazılır (zorunlu).

Her sonuca **Fotoğraf** (telefonla çekilir ya da galeriden seçilir) ve **İmza** (ekrana parmakla atılır)
eklenebilir.

**Teslimatı kaydet** ile sonuç yönetim paneline düşer ve sipariş durumu güncellenir (bkz.
[Sipariş durumuna etkisi](/sevkiyat/#siparis-durumu)). Sonucu girilmiş durak yeniden kaydedilemez.
Son durak kaydedilince sevkiyat tamamlanır.

**Teslim edilmeyenler** bölümü sevkiyatta henüz sonuçlanmamış durakları gösterir.
