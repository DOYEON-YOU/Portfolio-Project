import React from 'react';
import { Helmet } from 'react-helmet-async';

const MetaTags = () => {
  return (
    <Helmet>
      {/* <!-- Primary Meta Tags --> */}
    <meta name="title" content="Front-End 권도연입니다." />
    <meta name="description" content="신입 프론트엔드 개발자 권도연입니다." />

    {/* <!-- Open Graph / Facebook --> */}
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://test-black-pi.vercel.app/" />
    <meta property="og:title" content="Front-End 권도연입니다." />
    <meta
      property="og:description"
      content="신입 프론트엔드 개발자 권도연입니다."
    />
    <meta property="og:image" content="https://ifh.cc/g/7J6OpA.png" />

    {/* <!-- Twitter --> */}
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://test-black-pi.vercel.app/" />
    <meta property="twitter:title" content="Front-End 권도연입니다." />
    <meta
      property="twitter:description"
      content="신입 프론트엔드 개발자 권도연입니다."
    />
    <meta property="twitter:image" content="https://ifh.cc/g/7J6OpA.png" />
    </Helmet>
  );
};

export default MetaTags;