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
  const HarmonyOSSans = fs.readFileSync(path.resolve('./public/HarmonyOS_Sans_SC_Regular.ttf'));


  // Astro doesn't support tsx endpoints so usign React-element objects
  const html = {
    type: 'div',
    props: {
      tw: 'w-full h-full flex flex-col items-center justify-center relative px-22',
      style: {
        backgroundImage: 'linear-gradient(45deg, rgb(236,72,153) 0%, rgb(239,68,68) 50%, rgb(234,179,8) 100%)',
        letterSpacing: -2,
        fontWeight: 700,
        textAlign: 'left',
        fontFamily: '鸿蒙',
      },
      children: [
        {
          type: 'div',
          props: {
            tw: 'flex flex-col justify-start',
            children: [
              {
                type: 'div',
                props: {
                  tw: 'flex',
                  children: [
                    {
                      type: 'div',
                      props: {
                        style: {
                          fontSize: 60,
                          backgroundClip: 'text',
                          '-webkit-background-clip': 'text',
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
                  tw: 'pt-4',
                  style: {
                    fontSize: 30,
                    fontFamily: '得意黑',
                    backgroundClip: 'text',
                    '-webkit-background-clip': 'text',
                  },
                  children: post.data.description,
                },
              },
            ]
          }
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
    },
  };

  return new ImageResponse(html, {
    fonts: [
      {
        name: '得意黑',
        data: SmileySans.buffer,
        style: 'normal',
      },
      {
        name: '鸿蒙',
        data: HarmonyOSSans.buffer,
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
