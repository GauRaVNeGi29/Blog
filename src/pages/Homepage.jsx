import React from "react";
import LatestArticles from "../components/LatestArticles";
import ProductSpotlight from "@/components/ProductSpotlight";
import TrendsInsight from "@/components/TrendsInsight";
import LifestyleCulture from "@/components/LifestyleCulture";
import BlogSignupBanner from "@/components/BlogSignupBanner";
import KeepBrowsing from "@/components/KeepBrowsing";
import SEO from "@/components/SEO";
import WriteForUsLink from "@/components/WriteForUsLink";

const HomePage = () => {
  return (
<>
      {/* SEO */}

      <SEO
        title="Blogs, Guides and News for Retailers | Setu Store | Global Handmade & Artisanal Products"
        description="Follow the latest articles, product spotlights, trends & insights, lifestyle & culture pieces on Setu Store's blog. Stay updated with the world of handmade and artisanal products."
        keywords="setu, store, handmade, artisanal, eCommerce, gifts, home décor, latest, articles, spotlight, trends, insights, lifestyle, culture, indian crafts, global market, marketplace, indian products, unique gifts, sustainable products"
        url="https://www.setustore.com"
        image="/setu-logo.png"
      />

      {/* Articles Section */}
      <LatestArticles />
      <ProductSpotlight />
      <TrendsInsight />
      <LifestyleCulture />
      <BlogSignupBanner />
      <KeepBrowsing />
      <WriteForUsLink />

      {/* You can add more components like Testimonials, Featured Products, etc. */}

</>
  );
};

export default HomePage;
