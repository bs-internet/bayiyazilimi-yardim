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
            { text: 'Kullanım', link: '/satis/urunler' },
            { text: 'Geliştirici', link: '/gelistirici/' },
            { text: 'bayiyazilimi.com', link: 'https://bayiyazilimi.com' },
        ],

        sidebar: [
            {
                text: 'Başlarken',
                items: [
                    { text: 'Bayi Yazılımı nedir?', link: '/baslangic/' },
                    { text: 'Kurulum', link: '/baslangic/kurulum' },
                    { text: 'İlk ayarlar', link: '/baslangic/ilk-ayarlar' },
                ],
            },
            {
                text: 'Satış',
                items: [
                    { text: 'Ürünler', link: '/satis/urunler' },
                    { text: 'Excel ile ürün aktarma', link: '/satis/excel' },
                    { text: 'Siparişler', link: '/satis/siparisler' },
                    { text: 'Teklifler', link: '/satis/teklifler' },
                    { text: 'İadeler', link: '/satis/iadeler' },
                    { text: 'Kargo', link: '/satis/kargo' },
                ],
            },
            {
                text: 'Müşteriler',
                items: [
                    { text: 'Müşteriler ve bayiler', link: '/musteriler/' },
                    { text: 'Fiyat ve indirimler', link: '/musteriler/fiyat-ve-indirimler' },
                    { text: 'Kampanyalar', link: '/musteriler/kampanyalar' },
                ],
            },
            {
                text: 'Cari ve ödeme',
                items: [
                    { text: 'Cari hesap', link: '/cari/' },
                    { text: 'Peşin ve vadeli çalışma', link: '/cari/vadeli-calisma' },
                    { text: 'Havale ve ödeme bildirimi', link: '/cari/havale' },
                    { text: 'Çek ve senet', link: '/cari/cek-senet' },
                    { text: 'Kartla ödeme', link: '/cari/kartla-odeme' },
                ],
            },
            {
                text: 'Stok ve depo',
                items: [
                    { text: 'Depolar ve lokasyonlar', link: '/stok/' },
                    { text: 'Stok işlemleri', link: '/stok/stok-islemleri' },
                    { text: 'Mal kabul', link: '/stok/mal-kabul' },
                    { text: 'Lot, seri no ve SKT', link: '/stok/lot-seri-skt' },
                    { text: 'Sayım', link: '/stok/sayim' },
                    { text: 'Toplama listesi', link: '/stok/toplama-listesi' },
                ],
            },
            {
                text: 'Yönetim',
                items: [
                    { text: 'Raporlar', link: '/yonetim/raporlar' },
                    { text: 'Para birimleri', link: '/yonetim/para-birimleri' },
                    { text: 'Kullanıcılar, roller ve yetkiler', link: '/yonetim/roller-yetkiler' },
                    { text: 'Modüller', link: '/yonetim/moduller' },
                ],
            },
            {
                text: 'Bayi paneli',
                items: [{ text: 'Bayinin gördüğü ekranlar', link: '/bayi-paneli/' }],
            },
            {
                text: 'Vitrin modülü',
                items: [
                    { text: 'Vitrin nedir?', link: '/vitrin/' },
                    { text: 'İçerik yönetimi', link: '/vitrin/icerik-yonetimi' },
                    { text: 'Vitrin ayarları', link: '/vitrin/ayarlar' },
                ],
            },
            {
                text: 'Geliştirici',
                collapsed: true,
                items: [
                    { text: 'Genel bakış', link: '/gelistirici/' },
                    { text: 'Modül geliştirme', link: '/gelistirici/modul-gelistirme' },
                    { text: 'Ödeme altyapısı', link: '/gelistirici/odeme-altyapisi' },
                    { text: 'Cari defter', link: '/gelistirici/cari-defter' },
                    { text: 'Stok altyapısı', link: '/gelistirici/stok-altyapisi' },
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
