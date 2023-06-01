import React from 'react';
import { MetaProps } from '../types/layout';
import Head from './Head';
import Navigation from './Navigation';
import ThemeSwitch from './ThemeSwitch';
import Image from 'next/image';

type LayoutProps = {
  children: React.ReactNode;
  customMeta?: MetaProps;
};

export const WEBSITE_HOST_URL = 'https://nextjs-typescript-mdx-blog.vercel.app';

const Layout = ({ children, customMeta }: LayoutProps): JSX.Element => {
  return (
    <>
      <Head customMeta={customMeta} />
      <header>
        <div className="max-w-5xl px-8 mx-auto">
          <div className="flex items-center justify-between py-6">
            <Navigation />
            <ThemeSwitch />
          </div>
        </div>
      </header>
      <main>
        <div className="max-w-5xl px-8 py-4 mx-auto">{children}</div>
      </main>
      <footer className="py-8 px-4 flex justify-start max-w-5xl m-auto">
        <div className="flex flex-row items-center justify-center gap-2 mr-auto">


        <div className="flex flex-row item-center justify-center">
          <Image
          src={'/images/elmardi.png'}
          alt={'Mohamed Elmardi'}
          width={30}
          height={30}
          />
        </div>
          <h1 className='my-auto text-lg'>Mohamed Elmardi</h1>
          </div>
      </footer>
    </>
  );
};

export default Layout;
