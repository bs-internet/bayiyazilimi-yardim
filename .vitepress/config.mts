import { defineConfig } from 'vitepress';

export default defineConfig({
    lang: 'tr-TR',
    title: 'Bayi Yazılımı Yardım',
    description:
        'Bayi Yazılımı kurulum ve kullanım rehberi: ürünler, siparişler, cari hesap, stok ve depo.',
    cleanUrls: true,
    lastUpdated: true,
    srcExclude: ['README.md'],
    head: [['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }]],

    themeConfig: {
        logo: '/logo.png',
        siteTitle: 'Bayi Yazılımı',

        nav: [
            { text: 'Başlarken', link: '/baslangic/kurulum' },
            { text: 'Kullanım', link: '/satis/satis-sureci' }, { text: 'Bayiler için', link: '/bayi-paneli/' },
            { text: 'Geliştirici', link: '/gelistirici/' },
            { text: 'bayiyazilimi.com', link: 'https://bayiyazilimi.com' },
        ],

        sidebar: [
            {
                text: "Başlarken",
                collapsed: false,
                items: [
                    { text: "Bayi Yazılımı nedir?", link: "/baslangic/" },
                    { text: "Kurulum", link: "/baslangic/kurulum" },
                    { text: "Paylaşımlı hostinge kurulum", link: "/baslangic/paylasimli-hosting" },
                    { text: "VPS’e kurulum", link: "/baslangic/vps" },
                    { text: "Kurulumda sorun giderme", link: "/baslangic/sorun-giderme" },
                    { text: "Panel tanıtımı", link: "/baslangic/panel-tanitimi" },
                    { text: "İlk ayarlar", link: "/baslangic/ilk-ayarlar" },
                    { text: "Güncelleme ve yedekleme", link: "/baslangic/guncelleme-yedekleme" },
                ],
            },
            {
                text: "Katalog",
                collapsed: true,
                items: [
                    { text: "Satış süreci", link: "/satis/satis-sureci" },
                    { text: "Ürünler", link: "/satis/urunler" },
                    { text: "Ürün listesi", link: "/satis/urun-listesi" },
                    { text: "Kategoriler", link: "/satis/kategoriler" },
                    { text: "Markalar", link: "/satis/markalar" },
                    { text: "Birimler", link: "/satis/birimler" },
                    { text: "Excel ile ürün aktarma", link: "/satis/excel" },
                ],
            },
            {
                text: "Satış işlemleri",
                collapsed: true,
                items: [
                    { text: "Siparişler", link: "/satis/siparisler" },
                    { text: "Sipariş detayı", link: "/satis/siparis-detayi" },
                    { text: "Teklifler", link: "/satis/teklifler" },
                    { text: "İadeler", link: "/satis/iadeler" },
                    { text: "Kargo", link: "/satis/kargo" },
                    { text: "Satış ayarları", link: "/satis/satis-ayarlari" },
                ],
            },
            {
                text: "Müşteriler",
                collapsed: true,
                items: [
                    { text: "Müşteriler ve bayiler", link: "/musteriler/" },
                    { text: "Fiyat ve indirimler", link: "/musteriler/fiyat-ve-indirimler" },
                    { text: "Kampanyalar", link: "/musteriler/kampanyalar" },
                ],
            },
            {
                text: "Cari ve ödeme",
                collapsed: true,
                items: [
                    { text: "Cari hesap", link: "/cari/" },
                    { text: "Peşin ve vadeli çalışma", link: "/cari/vadeli-calisma" },
                    { text: "Havale ve ödeme bildirimi", link: "/cari/havale" },
                    { text: "Çek ve senet", link: "/cari/cek-senet" },
                    { text: "Kartla ödeme", link: "/cari/kartla-odeme" },
                    { text: "Sisteme geçiş", link: "/cari/sistem-gecisi" },
                ],
            },
            {
                text: "Stok ve depo",
                collapsed: true,
                items: [
                    { text: "Depolar ve lokasyonlar", link: "/stok/" },
                    { text: "Stok işlemleri", link: "/stok/stok-islemleri" },
                    { text: "Mal kabul", link: "/stok/mal-kabul" },
                    { text: "Lot, seri no ve SKT", link: "/stok/lot-seri-skt" },
                    { text: "Sayım", link: "/stok/sayim" },
                    { text: "Toplama listesi", link: "/stok/toplama-listesi" },
                    { text: "Stok ayarları", link: "/stok/stok-ayarlari" },
                    { text: "Depo iş akışları", link: "/stok/is-akislari" },
                ],
            },
            {
                text: "Raporlar",
                collapsed: true,
                items: [
                    { text: "Raporlar", link: "/yonetim/raporlar" },
                ],
            },
            {
                text: "Sistem ayarları",
                collapsed: true,
                items: [
                    { text: "Genel ayarlar", link: "/yonetim/genel-ayarlar" },
                    { text: "Tanımlamalar", link: "/yonetim/tanimlamalar" },
                    { text: "Para birimleri", link: "/yonetim/para-birimleri" },
                    { text: "Modüller", link: "/yonetim/moduller" },
                ],
            },
            {
                text: "Yönetim",
                collapsed: true,
                items: [
                    { text: "Kullanıcılar", link: "/yonetim/kullanicilar" },
                    { text: "Görevler ve yetkiler", link: "/yonetim/roller-yetkiler" },
                    { text: "Etkinlik kayıtları", link: "/yonetim/etkinlik-kayitlari" },
                    { text: "Ön bellek yönetimi", link: "/yonetim/on-bellek" },
                    { text: "E-posta ve bildirimler", link: "/yonetim/e-posta-bildirimleri" },
                ],
            },
            {
                text: "Bayi paneli",
                collapsed: true,
                items: [
                    { text: "Genel bakış", link: "/bayi-paneli/" },
                    { text: "Giriş ve hesap ayarları", link: "/bayi-paneli/giris-ve-hesap" },
                    { text: "Başlangıç ekranı", link: "/bayi-paneli/baslangic" },
                    { text: "Sipariş verme", link: "/bayi-paneli/siparis-verme" },
                    { text: "Kayıtlı sepetler", link: "/bayi-paneli/kayitli-sepetler" },
                    { text: "Siparişlerim", link: "/bayi-paneli/siparislerim" },
                    { text: "Teklifler", link: "/bayi-paneli/teklifler" },
                    { text: "Cari Hesabım", link: "/bayi-paneli/cari-hesabim" },
                    { text: "İadelerim", link: "/bayi-paneli/iadelerim" },
                    { text: "Bilgi Merkezi", link: "/bayi-paneli/bilgi-merkezi" },
                    { text: "Sık sorulan sorular", link: "/bayi-paneli/sss" },
                ],
            },
            {
                text: "Vitrin modülü",
                collapsed: true,
                items: [
                    { text: "Vitrin nedir?", link: "/vitrin/" },
                    { text: "Ana sayfa ve slider", link: "/vitrin/ana-sayfa" },
                    { text: "İçerik yönetimi", link: "/vitrin/icerik-yonetimi" },
                    { text: "Vitrin ayarları", link: "/vitrin/ayarlar" },
                    { text: "Müşteri deneyimi", link: "/vitrin/musteri-deneyimi" },
                    { text: "Müşteri hesabı", link: "/vitrin/musteri-hesabi" },
                ],
            },
            {
                text: "Geliştirici",
                collapsed: true,
                items: [
                    { text: "Genel bakış", link: "/gelistirici/" },
                    { text: "Modül geliştirme", link: "/gelistirici/modul-gelistirme" },
                    { text: "Ödeme altyapısı", link: "/gelistirici/odeme-altyapisi" },
                    { text: "Cari defter", link: "/gelistirici/cari-defter" },
                    { text: "Stok altyapısı", link: "/gelistirici/stok-altyapisi" },
                ],
            },
        ],

        search: {
            provider: 'local',
            options: {
                translations: {
                    button: { buttonText: 'Ara', buttonAriaLabel: 'Ara' },
                    modal: {
                        displayDetails: 'Ayrıntıları göster',
                        resetButtonTitle: 'Aramayı temizle',
                        backButtonTitle: 'Aramayı kapat',
                        noResultsText: 'Sonuç bulunamadı',
                        footer: {
                            selectText: 'seç',
                            navigateText: 'gezin',
                            closeText: 'kapat',
                        },
                    },
                },
            },
        },

        editLink: {
            pattern: 'https://github.com/bs-internet/bayiyazilimi-yardim/edit/main/:path',
            text: 'Bu sayfayı düzenle',
        },

        footer: {
            message: 'Bayi Yazılımı açık kaynaklıdır (MIT).',
            copyright: '© BS İnternet',
        },

        outline: { level: [2, 3], label: 'Bu sayfada' },
        docFooter: { prev: 'Önceki sayfa', next: 'Sonraki sayfa' },
        lastUpdated: { text: 'Son güncelleme' },
        darkModeSwitchLabel: 'Görünüm',
        lightModeSwitchTitle: 'Açık temaya geç',
        darkModeSwitchTitle: 'Koyu temaya geç',
        sidebarMenuLabel: 'Menü',
        returnToTopLabel: 'Başa dön',
        langMenuLabel: 'Dil',
        notFound: {
            title: 'SAYFA BULUNAMADI',
            quote: 'Aradığınız sayfa taşınmış ya da kaldırılmış olabilir.',
            linkText: 'Ana sayfaya dön',
        },
    },

    markdown: {
        container: {
            tipLabel: 'İpucu',
            warningLabel: 'Dikkat',
            dangerLabel: 'Önemli',
            infoLabel: 'Bilgi',
            detailsLabel: 'Ayrıntılar',
        },
    },
});
