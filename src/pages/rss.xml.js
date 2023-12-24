import rss from '@astrojs/rss';
import { getCollection } from "astro:content";
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts.js';

export async function GET(context) {
  const posts = await getCollection('posts');
  posts.sort((a, b) => Date.parse(b.data.pubDate) - Date.parse(a.data.pubDate))
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/posts/${post.slug}/`,
    })),
    customData: `<language>zh-cn</language>`,
    stylesheet: '/rss/styles.xsl',
  });
}
