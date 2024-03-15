import React from "react";
const OpenGraphTags = () => {
  return (
    <React.Fragment>
      <meta
        property="og:url"
        content="https://bazaar-react.vercel.app/landing"
      />
      {/* thumbnail And title for social media */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="GPFarm Nông Sản Tây Nguyên" />
      <meta
        property="og:description"
        content="React Next.js ecommerce template. Build SEO friendly Online store, delivery app and Multivendor store"
      />
      <meta property="og:image" content="/assets/images/gpfarm/logo.jpg" />
    </React.Fragment>
  );
};
export default OpenGraphTags;
