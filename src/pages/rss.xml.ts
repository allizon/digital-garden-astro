import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = await getCollection('posts', ({ data }) => !data.draft);
  const pixar = await getCollection('pixar', ({ data }) => !data.draft);

  const all = [
    ...posts.map(p => ({ ...p, link: `/posts/${p.id}/`, description: p.data.description })),
    ...pixar.map(p => ({ ...p, link: `/pixar/${p.id}/`, description: `${p.data.subhead} — Emotional: ${'★'.repeat(p.data.emotional_rating)}${'☆'.repeat(5 - p.data.emotional_rating)}, Actual: ${'★'.repeat(p.data.actual_rating)}${'☆'.repeat(5 - p.data.actual_rating)}` })),
  ];

  all.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

  return rss({
    title: 'allizon.io',
    description: 'Writing by Allison',
    site: context.site!.toString(),
    items: all.map(entry => ({
      title: entry.data.title,
      description: entry.description,
      pubDate: entry.data.date,
      link: entry.link,
    })),
  });
}
