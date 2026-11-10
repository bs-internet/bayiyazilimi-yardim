# Para birimleri

**Ayarlar › Tanımlamalar › Para Birimleri**: para birimi tanımları ve Türk Lirası karşısındaki
kurları tek ekrandadır. Ekranın başlığında toplam para birimi sayısı ve kaçının TCMB kaynaklı
olduğu yazar.

Kurulumla **Türk Lirası** (varsayılan, ana para birimi, kaynağı Elle, kuru 1), **Amerikan
Doları** ve **Euro** (TCMB kaynaklı, aktif) gelir. Dolar ve Euro'nun ilk kurları yaklaşık
değerlerdir. İlk TCMB güncellemesinde düzelir.

## Ekranın bölümleri

### Nasıl çalışır?

- **Aktif** anahtarı açık olan para birimleri seçim listelerinde (ürün, banka hesabı, kampanya
  formları) ve Vitrin eklentisi kuruluysa vitrindeki para birimi seçicisinde görünür.
- Varsayılan para birimi (ana para birimi) her zaman aktiftir ve kuru her zaman **1**'dir.
- Kaynağı **TCMB** olan kurlar TCMB kuruyla güncellenir; **Elle** olanlar yalnız bu ekranda
  girdiğiniz değerle kalır.

### TCMB ayarları {#tcmb}

| Alan | Açıklama |
|---|---|
| TCMB kur tipi | Hangi TCMB kurunun kullanılacağı: **Döviz Alış**, **Döviz Satış** (varsayılan), **Efektif Alış**, **Efektif Satış** |
| Kurları otomatik güncelle | Açıkken (varsayılan) TCMB kaynaklı kurlar **hafta içi 09:05 ve 15:45**'te kendiliğinden güncellenir. Sunucuda [cron](/baslangic/kurulum#cron) tanımlı olmalıdır |

**Kaydet** ile kaydedilir. Otomatik güncelleme kapalıyken kurlar yalnız **TCMB'den Güncelle**
düğmesiyle ya da elle değişir.

### Kur tablosu

| Sütun | Açıklama |
|---|---|
| Para birimi | Sembol, kod ve ad. Ana para birimi **Varsayılan** etiketlidir |
| Aktif | Anahtar. Ana para biriminde "Her zaman" yazar ve kapatılamaz |
| Kur (TL) | 1 birimin TL karşılığı (ör. USD için `42,15`). Virgülden sonra en çok 6 basamak; 0'dan büyük olmalı. Ana para biriminde sabit 1 |
| Kaynak | **Elle** ya da **TCMB** |
| Son güncelleme | Kurun en son değiştiği zaman |
| Düzenle (kalem) | Para biriminin ad, sembol ve biçim ayarlarını açar |

Tablonun altında "Kurlar TL bazlıdır: 1 birim = X TL." yazar. Tablodaki kur ve kaynak
değişiklikleri tablonun altındaki **Kaydet** ile **birlikte** kaydedilir.

## Nasıl yapılır?

### TCMB listesinden para birimi eklemek {#tcmb-ekle}

1. **Para birimi ekle**'ye basın. TCMB'nin kur yayımladığı para birimleri listelenir ("TCMB
   listesi alınıyor…").
2. **Kod veya ad ara** kutusuna yazarak bulun (ör. `GBP`, `Sterlin`). Bazılarının altında
   "TCMB 100 birim üzerinden yayımlar" gibi bir not görünür.
3. **Ekle**'ye basın. Para birimi **TCMB kaynaklı ve aktif** olarak eklenir, kuru hemen TCMB'den
   çekilir.

Daha önce silinmiş bir para birimi listede "· daha önce silinmiş" notuyla görünür; **Geri al**
ile eski kaydı geri getirirsiniz (TCMB kaynaklı ve aktif olur).

### TCMB'de olmayan bir para birimini elle eklemek {#elle-ekle}

1. **Para birimi ekle** penceresinin altında **Listede yok mu? Elle ekleyin**'e basın.
2. Alanları doldurup **Kaydet**'e basın:

| Alan | Açıklama |
|---|---|
| Kod | **Zorunlu**, tam 3 harf (ISO kodu, ör. `AED`), benzersiz |
| Sıra No | İsteğe bağlı. Listelerde sıralama |
| Ad | **Zorunlu** (ör. BAE Dirhemi) |
| Sembol | **Zorunlu**, en çok 8 karakter (ör. `د.إ`, `AED`) |
| Basamak sayısı | **Zorunlu**, 0-6. Tutarların virgülden sonra kaç basamakla gösterileceği |
| Binlik ayracı | **Virgül (,)**, **Nokta (.)** ya da **Boşluk ( )** |
| Onluk ayracı | Virgül, nokta ya da boşluk. Binlik ayracından **farklı** olmalı |

3. Elle eklenen para birimi **pasif** oluşur. Tabloda **Kur (TL)** değerini girin, kaynağı
   **Elle** bırakın, alttaki **Kaydet**'e basın. Sonra **Aktif** anahtarını açın.

### Kurları TCMB'den hemen güncellemek

Ekranın üstündeki **TCMB'den Güncelle**'ye basın. Kaynağı TCMB olan tüm para birimlerinin kuru
seçili kur tipine göre güncellenir ve hangi kurların değiştiği bildirilir ("TCMB kurları
güncellendi: USD …"). TCMB kaynaklı para birimi yoksa ya da kur değişmediyse bu da bildirilir.

### Bir kuru elle sabitlemek

1. Tabloda para biriminin **Kaynak** sütununu **Elle** yapın.
2. **Kur (TL)** değerini yazın.
3. Tablonun altındaki **Kaydet**'e basın.

Kaynağı Elle olan kur, TCMB güncellemelerinden etkilenmez.

### Para birimini düzenlemek ya da silmek

Satırdaki kalem simgesiyle **"*Kod* düzenle"** penceresi açılır. Elle eklemedeki alanların
aynısı düzenlenir. Pencerenin altındaki silme düğmesi para birimini listeden kaldırır.
Silinen para birimi ekranın üstündeki **Silinenler** sayfasından **Geri al** ile ya da TCMB
listesinden yeniden eklenerek geri getirilir; **Kalıcı sil** veritabanından tamamen kaldırır.

**Ana para birimi** silinemez ve pasifleştirilemez. Bkz.
[Tanımlamalar › Varsayılan kayıt kuralı](/yonetim/tanimlamalar#varsayilan-kurali).

## Fiyatlar nasıl çevrilir?

- Ürün fiyatı **kendi para biriminde ve KDV hariç** saklanır (ör. bir ürün EUR, bir başkası TL).
- Gösterimde seçilen para birimine güncel kurla çevrilir.
- **Sipariş ve teklif**, oluştuğu andaki para birimi ve kurla kaydedilir. Kur sonradan değişse de
  sipariş tutarı değişmez.
- Başlangıç ekranı, farklı para birimindeki siparişleri sipariş anındaki kurla ana para birimine
  çevirerek toplar.

## Ana para birimi {#ana-para-birimi}

**Ayarlar › Genel Ayarlar › Genel Ayarlar › Varsayılanlar › Para birimi** sistemin ana para
birimidir. Cari, raporlar ve başlangıç ekranı bu birimle gösterilir. Bkz.
[Genel ayarlar](/yonetim/genel-ayarlar#varsayilanlar).

::: danger Kilitlenir
Ana para birimi ilk sipariş ya da ilk cari hareketten sonra değiştirilemez. Kurulumdan hemen
sonra ayarlayın.
:::

## Yetkiler

Bu ekranın yetkileri kurulumla hazır gelir (**Mağaza: Para Birimleri & Kurlar** grubu):
görüntüleme, kurları elle güncelleme, TCMB'den çekme, para birimi ekleme ve TCMB ayarları.
Satış Sorumlusu ve Katalog Sorumlusu görevleri ekranı yalnız **görüntüleyebilir**. Elle ekleme,
düzenleme, durum değiştirme ve silme işlemleri ayrı yetkilerdir. Kurulumda yalnız **Admin**
görevine atanır. Bkz. [Görevler ve yetkiler](/yonetim/roller-yetkiler).
