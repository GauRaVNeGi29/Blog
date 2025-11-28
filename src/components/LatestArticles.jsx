import React from "react";
import { useNavigate, Link } from "react-router-dom";

const LatestArticles = () => {

  const navigate = useNavigate();

  const goToBlog = (categorySlug,blogSlug) => { 
    navigate(`/${categorySlug}/${blogSlug}`);
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }
  

  return (
    <section className="py-16 my-15 px-4 sm:px-6 md:px-12 lg:px-16">
  {/* Section Heading */}
  <div className="text-center mb-10">
    <h1
      className="text-5xl font-bold uppercase"
      style={{
        fontFamily: "'DM Serif Display', serif",
        letterSpacing: "-1px",
        lineHeight: "1.1",
      }}
    >
      Latest Articles
    </h1>
    <p className="font-inter text-lg mt-2 cursor-pointer hover:text-[#00d084] transition-colors duration-400 ease-in-out">
      Curated Reads To Keep You Inspired
    </p>
  </div>

  {/* Grid Layout */}
  <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 gap-6 auto-rows-auto">
    {/* Big Blog */}
    <div className="col-span-1 md:col-span-2 row-span-1 md:row-span-2 bg-[#f0f9ff] flex flex-col">
      <span className="p-4">
        <p className="uppercase text-xs font-semibold text-black mb-2">
        <Link to="/retailers-playbook">
        <span className="inline-block border-t-2 border-[#00d084] pt-1 cursor-pointer hover:text-[#00d084] transition-colors duration-400 ease-in-out">
          Retailers
        </span>
        </Link>
      </p>
        <h2 onClick={() => goToBlog('retailers-playbook','the-ultimate-guide-to-sourcing-authentic-indian-products-for-your-store')} className="text-xl font-semibold leading-snug mb-1 cursor-pointer hover:text-[#00d084] transition-colors duration-400 ease-in-out">
          The Ultimate Guide to Sourcing Authentic Indian Products for Your Store
        </h2>
      </span>
      <img
        onClick={() => goToBlog('retailers-playbook','the-ultimate-guide-to-sourcing-authentic-indian-products-for-your-store')}
        src="images/guide-to-sourcing-authentic-indian-products.jpg"
        alt="Sourcing Indian Products"
        className="w-auto h-full min-h-[280px] object-cover cursor-pointer"
      />
    </div>

    {/* Small Blog 1 */}
    <div className="flex flex-col gap-4">
      <img
        onClick={() => goToBlog('retailers-playbook','curate-unique-in-store-experience-with-indian-handcrafted-goods')}
        src="/images/curate-unique-in-store-experience.jpg"
        alt="digital shift"
        className="w-full h-[280px] object-cover cursor-pointer"
      />
      <p className="uppercase text-xs font-semibold text-black mb-2">
        <Link to="/retailers-playbook">
        <span className="inline-block border-t-2 border-[#00d084] pt-1 cursor-pointer hover:text-[#00d084] transition-colors duration-400 ease-in-out">
          retailers playbook
        </span>
          </Link>
      </p>
      <h3 onClick={() => goToBlog('retailers-playbook','curate-unique-in-store-experience-with-indian-handcrafted-goods')} className="text-lg font-semibold cursor-pointer hover:text-[#00d084] transition-colors duration-400 ease-in-out">How to Curate a Unique In-Store Experience with Indian...</h3>
      <p className="font-quick text-sm text-black">By <span className="font-semibold underline cursor-pointer hover:text-[#00d084] transition-colors duration-400 ease-in-out">Setu Store</span></p>
    </div>

    {/* Small Blog 2 */}
    <div className="flex flex-col gap-4">
      <img
        onClick={() => goToBlog('seller-success-and-growth','crafting-product-descriptions-that-inspire-global-buyers')}
        src="/images/crafting-product-descriptions-that-inspire-global-buyers.jpg"
        alt="handmade"
        className="w-full h-[280px] object-cover cursor-pointer"
      />
      <p className="uppercase text-xs font-semibold text-black mb-2">
        <Link to="/seller-success-and-growth">
        <span className="inline-block border-t-2 border-[#00d084] pt-1 cursor-pointer hover:text-[#00d084] transition-colors duration-400 ease-in-out">
          Seller
        </span>
        </Link>
      </p>
      <h3 onClick={() => goToBlog('seller-success-and-growth','crafting-product-descriptions-that-inspire-global-buyers')} className="text-lg font-semibold cursor-pointer hover:text-[#00d084] transition-colors duration-400 ease-in-out">
        How to Craft Product Descriptions That Inspire...
      </h3>
      <p className="font-quick text-sm text-black">By <span className="font-semibold underline cursor-pointer hover:text-[#00d084] transition-colors duration-400 ease-in-out">Setu Store</span></p>
    </div>

    {/* More Articles */}
    <div className="col-span-1 md:col-span-2 bg-[#f0f9ff] p-6 flex flex-col gap-4">
      <p className="uppercase text-xs font-semibold text-black mb-2">
        <a href="#more-articles">
        <span className="inline-block border-t-2 border-[#00d084] pt-1 cursor-pointer hover:text-[#00d084] transition-colors duration-400 ease-in-out">
          MORE ARTICLES
        </span>
        </a>
      </p>
      <div className="space-y-3">
        <div>
          <h4 onClick={() => goToBlog('seller-success-and-growth','top-mistakes-indian-sellers-make-when-expanding-overseas')} className="text-lg font-semibold cursor-pointer hover:text-[#00d084] transition-colors duration-400 ease-in-out">
            Top Mistakes Indian Sellers Make When Expanding Overseas
          </h4>
          <p className="font-quick text-sm text-black">By <span className="font-semibold underline cursor-pointer hover:text-[#00d084] transition-colors duration-400 ease-in-out">Setu Store</span></p>
        </div>
        <div>
          <h4 onClick={() => goToBlog('retailers-playbook','top-indian-product-categories-trending-in-australia')} className="text-lg font-semibold cursor-pointer hover:text-[#00d084] transition-colors duration-400 ease-in-out">
            Top 10 Indian Product Categories Trending in Australia This Year
          </h4>
          <p className="font-quick text-sm text-black">By <span className="font-semibold underline cursor-pointer hover:text-[#00d084] transition-colors duration-400 ease-in-out">Setu Store</span></p>
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-4">
        <Link to="search?s=Setu">
        <span className="px-3 py-1 text-sm border-[2px] border-[#00d084] rounded-full cursor-pointer hover:text-[#00d084] transition-colors duration-400 ease-in-out">
          Setu Store
        </span>
        </Link>
        <Link to="search?s=Blogs">
        <span className="px-3 py-1 text-sm border-[2px] border-[#00d084] rounded-full cursor-pointer hover:text-[#00d084] transition-colors duration-400 ease-in-out">
          Blogs
        </span>
        </Link>
        <Link to="search?s=Community">
        <span className="px-3 py-1 text-sm border-[2px] border-[#00d084] rounded-full cursor-pointer hover:text-[#00d084] transition-colors duration-400 ease-in-out">
          Community
        </span>
        </Link>
        <Link to="search?s=Policy">
        <span className="px-3 py-1 text-sm border-[2px] border-[#00d084] rounded-full cursor-pointer hover:text-[#00d084] transition-colors duration-400 ease-in-out">
          Policy
        </span>
        </Link>
      </div>
    </div>
  </div>
</section>

  );
};

export default LatestArticles;
