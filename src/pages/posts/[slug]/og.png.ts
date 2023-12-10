import { getCollection, type CollectionEntry } from 'astro:content';
import fs from 'fs';
import path from 'path';
import { ImageResponse } from '@vercel/og';
 
interface Props {
  params: { slug: string };
  props: { post: CollectionEntry<'posts'> };
}
 
export async function GET({ props }: Props) {
  const { post } = props;
 
  // using custom font files
  const SmileySans = fs.readFileSync(path.resolve('./public/SmileySans-Oblique.ttf'));
 
 
  // Astro doesn't support tsx endpoints so usign React-element objects
  const html = {
    type: 'div',
    props: {
      children: [
        {
          type: 'div',
          props: {
            tw: 'pl-10 shrink flex',
            children: [
              {
                type: 'div',
                props: {
                  style: {
                    fontSize: '60',
                    fontFamily: '得意黑',
                    backgroundImage: 'linear-gradient(90deg, rgb(121, 40, 202), rgb(255, 0, 128))',
                    backgroundClip: 'text',
                    '-webkit-background-clip': 'text',
                    color: 'transparent',
                  },
                  children: post.data.title,
                },
              },
            ],
          },
        },
        {
          type: 'div',
          props: {
            style: {
              fontSize: 48,
              fontFamily: '得意黑',
              backgroundImage: 'linear-gradient(90deg, rgb(0, 124, 240), rgb(0, 223, 216))',
              backgroundClip: 'text',
              '-webkit-background-clip': 'text',
              color: 'transparent',
            },
            children: post.data.description,
          },
        },
        {
          type: 'div',
          props: {
            tw: 'absolute right-[100px] bottom-[100px] flex items-center',
            children: [
              {
                type: 'div',
                props: {
                  tw: 'text-blue-800 text-3xl',
                  style: {
                    fontFamily: '得意黑',
                    fontWeight: 700,
                  },
                  children: 'Loongphy',
                },
              },
              {
                type: 'div',
                props: {
                  tw: 'px-2 text-3xl',
                  style: {
                    fontSize: '30px',
                  },
                  children: '|',
                },
              },
              {
                type: 'div',
                props: {
                  tw: 'text-3xl',
                  children: 'Blog',
                },
              },
            ],
          },
        },
      ],
      tw: 'w-full h-full flex items-center justify-center relative px-22',
      style: {
        display: 'flex',
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundImage: 'linear-gradient(to bottom, #dbf4ff, #fff1f1)',
        fontSize: 60,
        letterSpacing: -2,
        fontWeight: 700,
        textAlign: 'center',
        fontFamily: '得意黑',
      },
    },
  };
 
  return new ImageResponse(html, {
    width: 1200,
    height: 600,
    fonts: [
      {
        name: '得意黑',
        data: SmileySans.buffer,
        style: 'normal',
      },
    ],
  });
}
 
// to generate an image for each blog posts in a collection
export async function getStaticPaths() {
  const blogPosts = await getCollection('posts');
  return blogPosts.map((post) => ({
    params: { slug: post.slug },
    props: { post },
  }));
}