import { z, defineCollection } from "astro:content";
const postsCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        pubDate: z.date(),
        description: z.string(),
        author: z.string(),
        cover: z.object({
            url: z.string(),
            square: z.string(),
            alt: z.string()
        }),
        tags: z.array(z.string()),
        theme: z.string(),
        featured: z.boolean(),
    })
});
export const collections = {
    posts: postsCollection,
}