import React from 'react';
import Layout from '../components/Layout';

export const About = (): JSX.Element => {
  return (
    <Layout
      customMeta={{
        title: 'About - Mohamed Elmardi',
      }}
    >
      <div className='m-auto p-4 flex flex-col items-center justify-center'>
      <h1 className='mr-auto'>Mohamed Elmardi</h1>
      <p className='text-xl'>
          Hello there! I{`'`}m a passionate developer hailing from Morocco. With a love for coding, I thrive on turning ideas into functional software solutions. When I{`'`}m not immersed in code, you can find me indulging in the world of gaming or engaging in a spirited game of football. I believe in the power of technology to shape the future and constantly seek new challenges to broaden my skills. in this blog I will be sharing my journey as a developer and a lifelong learner.
      </p>
      </div>
    </Layout>
  );
};

export default About;
