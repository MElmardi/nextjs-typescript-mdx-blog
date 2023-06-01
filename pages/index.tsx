import { format, parseISO } from 'date-fns';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import React from 'react';
import Layout from '../components/Layout';
import { getAllPosts } from '../lib/api';
import { PostType } from '../types/post';
import Image from 'next/image';
import Button from '@ui/Button/Button';
import { TbArrowRight } from 'react-icons/tb'
type IndexProps = {
  posts: PostType[];
};

export const Index = ({ posts }: IndexProps): JSX.Element => {
  return (
    <Layout>

      <div className="flex flex-col items-center justify-center gap-2">
        <Image
          src={'/images/elmardi.png'}
          alt={'Mohamed Elmardi'}
          width={50}
          height={50}
        />
        <h1 className='pt-5'>Hey, I{`'`}m Mohamed</h1>
        <h2 className='text-gray-400 text-lg'>Developer and a lifelong learner</h2>
      </div>

      {posts.map((post) => (
        <article key={post.slug} className="mt-12 m-2 rounded-lg dark:bg-white/5 p-4 border-t border-l border-white/10 bg-gradient-to-br from-white/5 via-transparent to-transparent">
          <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
            {format(parseISO(post.date), 'MMMM dd, yyyy')}
          </p>
          <h1 className="mb-2 text-2xl">
            <Link as={`/posts/${post.slug}`} href={`/posts/[slug]`}>
              <a className="text-gray-900 dark:text-white dark:hover:text-blue-400 truncate">
                {post.title}
              </a>
            </Link>
          </h1>
          <Link
            className='ml-auto'
            as={`/posts/${post.slug}`}
            href={`/posts/[slug]`}>
              <a>
            <p className="mb-3 text-gray-900 dark:text-white dark:hover:text-blue-400">
                {post.description}
            </p>
              </a>

          </Link>




          <Link
            className='ml-auto'
            as={`/posts/${post.slug}`}
            href={`/posts/[slug]`}>
            <Button intent='ghost' className='ml-auto mobile:w-full mobile:bg-brand/10' rightIcon={TbArrowRight}>
              Read
            </Button>
          </Link>

        </article>
      ))}
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts(['date', 'description', 'slug', 'title']);

  return {
    props: { posts },
  };
};

export default Index;
