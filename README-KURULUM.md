# Kerem Kınık — Kişisel Web Sitesi

İki dilli (TR/EN), yönetim panelli, dinamik kişisel web sitesi.

## Ne var?

- **Ana Sayfa** — canlı vitrin: portre, metrikler (yayın/atıf/H-endeksi), son yazılar, videolar, X akışı, galeri
- **Biyografi** (TR/EN) — tam metin + kariyer zaman çizelgesi
- **Yazılar** — Makale / Kişisel Düşünce / Haber kategorileriyle blog; filtreleme destekli
- **Bilimsel Yayınlar** — ORCID'den derlenen 40+ yayın, DOI bağlantıları, WoS metrikleri
- **Videolar** — YouTube kanalınızdan **otomatik** beslenir (kanal RSS'i her derlemede çekilir; ayrıca kanal oynatma listesi gömülüdür)
- **Galeri** — masonry fotoğraf galerisi
- **İletişim** — Netlify Forms ile çalışan iletişim formu (mesajlar e-postanıza düşer)
- **Yönetim Paneli** — `/admin/` adresinde Decap CMS: makale ekleme, yayın listesi, galeri ve tüm site ayarları tarayıcıdan yönetilir

## Teknoloji

- [Astro](https://astro.build) — hızlı, statik, SEO dostu
- [Decap CMS](https://decapcms.org) — ücretsiz, git tabanlı yönetim paneli
- Netlify — ücretsiz barındırma + form + kimlik doğrulama

## Yayınlama (birlikte yapacağız)

1. **GitHub'a yükleme:** Bu klasörü bir GitHub deposuna itin (`node_modules` hariç).
2. **Netlify:** "Add new site → Import an existing project" ile depoyu seçin. Derleme komutu ve çıktı klasörü `netlify.toml`'dan otomatik alınır.
3. **Yönetim paneli için:** Netlify panelinde
   - *Identity* → **Enable Identity**
   - *Identity → Registration* → **Invite only** yapın ve kendinizi davet edin
   - *Identity → Services* → **Enable Git Gateway**
   - Ardından `siteniz.netlify.app/admin/` adresinden giriş yapabilirsiniz.
4. **Form bildirimleri:** *Forms → Notifications* bölümünden e-posta bildirimi ekleyin.
5. **Videoların tazelenmesi:** İçerik girdiğinizde site zaten yeniden derlenir. Hiç içerik girmeseniz de videoların tazelenmesi için *Build hooks* oluşturup ücretsiz bir zamanlayıcıya (ör. cron-job.org) bağlayabilirsiniz.

## keremkinik.com'a taşıma (ileride)

Netlify → *Domain management* → **Add custom domain** → `keremkinik.com` ekleyin; DNS sağlayıcınızda Netlify'ın gösterdiği A/CNAME kayıtlarını girin. SSL otomatik verilir.

## Yerelde çalıştırma

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # dist/ klasörüne üretim çıktısı
```

## Notlar

- Fotoğraflar şu an mevcut keremkinik.com sunucusundan bağlantı ile geliyor. Panelden yeni fotoğraf yüklediğinizde görseller depoya (`public/images/`) kaydedilir. Eski siteyi kapatmadan önce kalıcı olmasını istediğiniz fotoğrafları panelden yeniden yükleyin.
- X (Twitter) akışı resmî gömülü zaman tüneliyle otomatik güncellenir.
- Instagram/Facebook/LinkedIn API kısıtları nedeniyle bağlantı kartı olarak sunulur.
