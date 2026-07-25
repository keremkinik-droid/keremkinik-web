// Yazılar (makale / düşünce / haber) — markdown content loader
const modules = import.meta.glob('../content/yazilar/*.md', { eager: true });

export function getPosts({ dil } = {}) {
  let posts = Object.entries(modules).map(([path, mod]) => {
    const slug = path.split('/').pop().replace(/\.md$/, '');
    return {
      slug,
      ...mod.frontmatter,
      Content: mod.Content,
    };
  });
  if (dil) posts = posts.filter((p) => (p.dil || 'tr') === dil);
  posts.sort((a, b) => new Date(b.tarih) - new Date(a.tarih));
  return posts;
}

export const KATEGORILER = {
  tr: { makale: 'Makale', dusunce: 'Düşünce', haber: 'Haber' },
  en: { makale: 'Article', dusunce: 'Reflection', haber: 'News' },
};

export function fmtDate(d, lang = 'tr') {
  return new Date(d).toLocaleDateString(lang === 'tr' ? 'tr-TR' : 'en-GB', {
    day: 'numeric', month: 'long', year: 'numeric',
  });
}
