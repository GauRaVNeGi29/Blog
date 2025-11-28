import React from "react";
import { useNavigate, Link } from 'react-router-dom';

const LifestyleCulture = () => {

  const navigate = useNavigate();

  const goToBlog = (categorySlug,blogSlug) => { 
    navigate(`/${categorySlug}/${blogSlug}`);
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }

  return (
    <section className="py-20 px-4 sm:px-6 md:px-12 lg:px-16">
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
          LIFESTYLE & CULTURE
        </h1>
        <p className="font-inter text-lg mt-2 cursor-pointer hover:text-[#00d084] transition-colors duration-400 ease-in-out">
          Featured Topics
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Large Left Article */}
        <div className="md:col-span-2 flex flex-col gap-4">
          <img
            onClick={() => goToBlog('lifestyle-culture','sustainability-strategies-for-setustore')}
            src="/images/sustainability-strategies-for-setustore-thumb.jpg"
            alt="Lifestyle Main"
            className="w-full h-64 md:h-[550px] object-cover cursor-pointer"
          />
          <div className="flex flex-col justify-center space-y-3">
            <p className="uppercase text-xs font-semibold text-black mb-2">
              <Link to='/lifestyle-culture'>
              <span className="inline-block border-t-2 border-[#00d084] pt-1 cursor-pointer hover:text-[#00d084] transition-colors duration-400 ease-in-out">
                LIFESTYLE
              </span>
              </Link>
            </p>
            <h2 onClick={() => goToBlog('lifestyle-culture','sustainability-strategies-for-setustore')} className="text-xl font-semibold cursor-pointer hover:text-[#00d084] transition-colors duration-400 ease-in-out">
              Sustainability Strategies for SetuStore: Advancing Eco-Friendly Practices in Vendor-to-Customer Ecommerce
            </h2>
            <p className="text-sm mt-1">
              By <span className="underline font-semibold cursor-pointer hover:text-[#00d084] transition-colors duration-400 ease-in-out">Creative Lifestyle</span>
            </p>
          </div>
        </div>

        {/* Right Small Articles */}
        <div className="md:col-span-2 flex flex-col gap-4">
          {/* Article 1 */}
          <div className="flex gap-4 flex-1 flex-col md:flex-row">
            <img
              onClick={() => goToBlog('product-spotlight','from-craft-table-to-cart')}
              src="/images/from-craft-table-to-cart-thumb.jpg"
              alt="Article 1"
              className="w-full md:w-1/2 h-48 md:h-full object-cover cursor-pointer"
            />
            <div className="flex-1 flex flex-col justify-center space-y-3">
              <p className="uppercase text-xs font-semibold text-black mb-2">
                <Link to='/product-spotlight'>
                <span className="inline-block border-t-2 border-[#00d084] pt-1 cursor-pointer hover:text-[#00d084] transition-colors duration-400 ease-in-out">
                  CULTURE
                </span>
                </Link>
              </p>
              <h3 onClick={() => goToBlog('product-spotlight','from-craft-table-to-cart')} className="text-lg font-semibold cursor-pointer hover:text-[#00d084] transition-colors duration-400 ease-in-out">
                From Craft Table to Cart: The Journey of a Handmade Product in Australia’s Online Market
              </h3>
              <p className="text-sm mt-1">
                By <span className="underline font-semibold cursor-pointer hover:text-[#00d084] transition-colors duration-400 ease-in-out">Alex Morgan</span>
              </p>
            </div>
          </div>

          {/* Article 2 */}
          <div className="flex gap-4 flex-1 flex-col md:flex-row">
            <img
              onClick={() => goToBlog('tech-marketplace-optimization','benefits-of-sourcing-from-india-for-australian-buyers')}
              src="/images/sourcing-india-au-main.webp"
              alt="Article 3"
              className="w-full md:w-1/2 h-48 md:h-full object-cover cursor-pointer"
            />
            <div className="flex-1 flex flex-col justify-center space-y-3">
              <p className="uppercase text-xs font-semibold text-black mb-2">
                <Link to='/tech-marketplace-optimization'>
                <span className="inline-block border-t-2 border-[#00d084] pt-1 cursor-pointer hover:text-[#00d084] transition-colors duration-400 ease-in-out">
                  CULTURE
                </span>
                </Link>
              </p>
              <h3 onClick={() => goToBlog('tech-marketplace-optimization','benefits-of-sourcing-from-india-for-australian-buyers')} className="text-lg font-semibold cursor-pointer hover:text-[#00d084] transition-colors duration-400 ease-in-out">
                Why Australian Businesses Benefit from Sourcing Products from India
              </h3>
              <p className="text-sm mt-1">
                By <span className="underline font-semibold cursor-pointer hover:text-[#00d084] transition-colors duration-400 ease-in-out">Samantha Fox</span>
              </p>
            </div>
          </div>

          {/* Article 3 */}
          <div className="flex gap-4 flex-1 flex-col md:flex-row">
            <img
              onClick={() => goToBlog('tech-marketplace-optimization','digital-shift-australias-journey-from-brick-and-mortar-to-ecommerce-powerhouse')}
              src="/images/digital-shift-australias-journey-thumb.jpg"
              alt="Article 2"
              className="w-full md:w-1/2 h-48 md:h-full object-cover cursor-pointer"
            />
            <div className="flex-1 flex flex-col justify-center space-y-3">
              <p className="uppercase text-xs font-semibold text-black mb-2">
                <Link to='/tech-marketplace-optimization'>
                <span className="inline-block border-t-2 border-[#00d084] pt-1 cursor-pointer hover:text-[#00d084] transition-colors duration-400 ease-in-out">
                  CULTURE
                </span>
                </Link>
              </p>
              <h3 onClick={() => goToBlog('tech-marketplace-optimization','digital-shift-australias-journey-from-brick-and-mortar-to-ecommerce-powerhouse')} className="text-lg font-semibold cursor-pointer hover:text-[#00d084] transition-colors duration-400 ease-in-out">
                The Great Digital Shift: Inside Australia’s Journey from Brick-and-Mortar
              </h3>
              <p className="text-sm mt-1">
                By <span className="underline font-semibold cursor-pointer hover:text-[#00d084] transition-colors duration-400 ease-in-out">Jamie Lee</span>
              </p>
            </div>
          </div>


        </div>
      </div>

      {/* Button */}
      <div className="flex justify-center mt-8">
        <Link to='/lifestyle-culture'>
          <button className="bg-teal-700 hover:bg-teal-500 text-white font-semibold text-lg px-8 py-4 cursor-pointer shadow-md transition-all rounded-md duration-300 ease-in-out">
            More Feature Topics
          </button>
        </Link>
      </div>
    </section>
  );
};

export default LifestyleCulture;
