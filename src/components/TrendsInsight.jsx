import React from "react";
import { useNavigate, Link } from "react-router-dom";

const TrendsInsight = () => {
  const navigate = useNavigate();

  const goToBlog = (categorySlug,blogSlug) => { 
    navigate(`/${categorySlug}/${blogSlug}`);
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }

  return (
    <section className="py-16 px-4 sm:px-6 md:px-12 lg:px-16">
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
          TRENDS & MARKET INSIGHTS
        </h1>
        <p className="font-inter text-lg mt-2 cursor-pointer hover:text-[#00d084] transition-colors duration-400 ease-in-out">Featured Topics</p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {/* Left Column */}
        <div className="col-span-1 md:col-span-3 flex flex-col gap-6">
          {/* Big Blog */}
          <div className="flex flex-col overflow-hidden h-72 md:h-auto">
            <img
              onClick={() => goToBlog('trends-market-insights','the-world-is-your-marketplace')}
              src="\images\the-world-is-your-marketplace-thumb.webp"
              alt="handcrafted"
              className="w-full h-48 md:h-100 object-cover cursor-pointer flex-shrink-0"
            />
            <div className="p-4 flex-1">
              <p className="uppercase text-xs font-semibold text-black mb-2">
                <Link to="/trends-market-insights">
              <span className="inline-block border-t-2 border-[#00d084] pt-1 cursor-pointer hover:text-[#00d084] transition-colors duration-400 ease-in-out">
                TRENDS
              </span>
                </Link>
            </p>
              <h2 onClick={() => goToBlog('trends-market-insights','the-world-is-your-marketplace')} className="text-xl font-semibold leading-snug mb-1 cursor-pointer hover:text-[#00d084] transition-colors duration-400 ease-in-out">
                The World Is Your Marketplace: Why It’s Time to Sell Internationally
              </h2>
              <p className="font-quick text-sm text-black">
                By <span className="font-semibold underline cursor-pointer hover:text-[#00d084] transition-colors duration-400 ease-in-out">Setu Store</span>
              </p>
            </div>
          </div>

          {/* Small Blog */}
          <div className="flex flex-col md:flex-row bg-white overflow-hidden gap-4 h-72 md:h-auto">
            <img
              onClick={() => goToBlog('trends-market-insights','ecommerce-online-shopping-on-setu-store')}
              src="\images\ecommerce-online-shopping-on-setu-store-thumb.webp"
              alt="marketplace"
              className="w-full md:w-1/2 h-48 md:h-auto object-cover cursor-pointer flex-shrink-0"
            />
            <div className="flex flex-col justify-center p-4 flex-1">
              <p className="uppercase text-xs font-semibold text-black mb-2">
                <Link to="/trends-market-insights">
              <span className="inline-block border-t-2 border-[#00d084] pt-1 cursor-pointer hover:text-[#00d084] transition-colors duration-400 ease-in-out">
                Market
              </span>
                </Link>
            </p>
              <h3 onClick={() => goToBlog('trends-market-insights','ecommerce-online-shopping-on-setu-store')} className="text-lg font-semibold cursor-pointer hover:text-[#00d084] transition-colors duration-400 ease-in-out">
                Ecommerce Online Shopping on Setu Store: Connecting the World, One Click at a Time
              </h3>
              <p className="font-quick text-sm text-black">
                By <span className="font-semibold underline cursor-pointer hover:text-[#00d084] transition-colors duration-400 ease-in-out">Setu Store</span>
              </p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="col-span-1 md:col-span-2 flex flex-col gap-6">
          {/* Medium Blog 1 */}
          <div className="flex flex-col bg-[#f0f9ff] overflow-hidden h-72 md:h-auto">
            <img
              onClick={() => goToBlog('trends-market-insights','from-cart-to-doorstep')}
              src="/images/from-cart-to-doorstep-thumb.jpg"
              alt="handmade"
              className="w-full h-45 md:h-auto object-cover cursor-pointer flex-shrink-0"
            />
            <div className="flex flex-col justify-center p-4 flex-1">
              <p className="uppercase text-xs font-semibold text-black mb-2">
                <Link to="/trends-market-insights">
              <span className="inline-block border-t-2 border-[#00d084] pt-1 cursor-pointer hover:text-[#00d084] transition-colors duration-400 ease-in-out">
                TRENDS INSIGHT
              </span>
                </Link>
            </p>
              <h3 onClick={() => goToBlog('trends-market-insights','from-cart-to-doorstep')} className="text-lg font-semibold cursor-pointer hover:text-[#00d084] transition-colors duration-400 ease-in-out">
                From Cart to Doorstep: How Ecommerce is Changing the Way We Shop
              </h3>
              <p className="font-quick text-sm text-black">
                By <span className="font-semibold underline cursor-pointer hover:text-[#00d084] transition-colors duration-400 ease-in-out">Setu Store</span>
              </p>
            </div>
          </div>

          {/* Medium Blog 2 */}
          <div className="flex flex-col bg-[#f0f9ff] overflow-hidden h-72 md:h-auto">
            <img
              onClick={() => goToBlog('lifestyle-culture','sustainability-strategies-for-setustore')}
              src="/images/sustainability-strategies-for-setustore-thumb.jpg"
              alt="new-blog"
              className="w-full h-45 md:h-auto object-cover cursor-pointer flex-shrink-0"
            />
            <div className="flex flex-col justify-center p-4 flex-1">
              <p className="uppercase text-xs font-semibold text-black mb-2">
                <Link to="/trends-market-insights">
              <span className="inline-block border-t-2 border-[#00d084] pt-1 cursor-pointer hover:text-[#00d084] transition-colors duration-400 ease-in-out">
                INSIGHT
              </span>
                </Link>
            </p>
              <h3 onClick={() => goToBlog('lifestyle-culture','sustainability-strategies-for-setustore')} className="text-lg font-semibold cursor-pointer hover:text-[#00d084] transition-colors duration-400 ease-in-out">
                Sustainability Strategies for SetuStore: Advancing Eco-Friendly Practices in Vendor-to-Customer Ecommerce
              </h3>
              <p className="font-quick text-sm text-black">
                By <span className="font-semibold underline cursor-pointer hover:text-[#00d084] transition-colors duration-400 ease-in-out">Setu Store</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Button */}
      <div className="flex justify-center my-8">
        <Link to="/trends-market-insights">
        <button className="bg-teal-700 hover:bg-teal-500 text-white font-semibold text-lg px-8 py-4 cursor-pointer shadow-md transition-all rounded-md duration-300 ease-in-out">
          More Feature Topics
        </button>
        </Link>
      </div>
    </section>
  );
};

export default TrendsInsight;
