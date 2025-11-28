import React from "react";
import { useNavigate, Link } from "react-router-dom";

const ProductSpotlight = () => {
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
          PRODUCT SPOTLIGHT
        </h1>
        <p className="font-inter text-lg mt-2 cursor-pointer hover:text-[#00d084] transition-colors duration-400 ease-in-out">Featured Topics</p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 auto-rows-auto">
        {/* Big Blog (3 cols × 3 rows) */}
        <div className="col-span-1 md:col-span-3 row-span-1 md:row-span-3 flex flex-col">
          <span className="p-4">
            <p className="uppercase text-xs font-semibold text-black mb-2">
              <Link to="/product-spotlight">
              <span className="inline-block border-t-2 border-[#00d084] pt-1 cursor-pointer hover:text-[#00d084] transition-colors duration-400 ease-in-out">
                PRODUCT SPOTLIGHT
              </span>
              </Link>
            </p>
            <h2 onClick={() => {goToBlog('product-spotlight','why-indian-handmade-products-are-winning-hearts')}} className="text-xl font-semibold leading-snug mb-1 cursor-pointer hover:text-[#00d084] transition-colors duration-400 ease-in-out">
              Why Indian Handmade Products Are Winning Hearts in the Global Market
            </h2>
            <p className="font-quick text-sm text-black">
              By{" "}
              <span className="font-semibold underline cursor-pointer hover:text-[#00d084] transition-colors duration-400 ease-in-out">
                Setu Store
              </span>
            </p>
          </span>
          <img
            onClick={() => {goToBlog('product-spotlight','why-indian-handmade-products-are-winning-hearts')}}
            src="/images/why-indian-handmade-products-are-winning-hearts-thumb.jpg"
            alt="handcrafted"
            className="w-full h-[280px] md:h-full md:min-h-[280px] object-cover cursor-pointer"
          />
        </div>

        {/* Long Blog (2 cols × 5 rows, taller) */}
        <div className="col-span-1 md:col-span-2 row-span-1 md:row-span-5 bg-[#f0f9ff] flex flex-col gap-4">
          <img
            onClick={() => goToBlog('product-spotlight','handcrafted-with-heart')}
            src="/images/handcrafted-with-heart-thumb.webp"
            alt="handmade"
            className="w-full h-[280px] md:h-full md:min-h-[280px] object-cover cursor-pointer"
          />
          <div className="flex flex-col justify-center p-4">
            <p className="uppercase text-xs font-semibold text-black mb-2">
              <Link to="/product-spotlight">
              <span className="inline-block border-t-2 border-[#00d084] pt-1 cursor-pointer hover:text-[#00d084] transition-colors duration-400 ease-in-out">
                PRODUCT
              </span>
              </Link>
            </p>
            <h3 onClick={() => goToBlog('product-spotlight','handcrafted-with-heart')} className="text-lg font-semibold cursor-pointer hover:text-[#00d084] transition-colors duration-400 ease-in-out">
              Handcrafted with Heart: Bringing Authentic Handmade Creations to Australian Home
            </h3>
            <p className="font-quick text-sm text-black">
              By{" "}
              <span className="font-semibold underline cursor-pointer hover:text-[#00d084] transition-colors duration-400 ease-in-out">
                Setu Store
              </span>
            </p>
          </div>
        </div>

        {/* Small Blog 1 (3 cols × 1 row) */}
        <div className="col-span-1 md:col-span-3 row-span-1 grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          <img
            onClick={() => goToBlog('product-spotlight','australians-falling-in-love-with-handmade-products')}
            src="/images/australians-falling-in-love-with-handmade-products-thumb.webp"
            alt="marketplace"
            className="w-full h-[280px] md:h-full object-cover cursor-pointer"
          />
          <div className="flex flex-col justify-center">
            <p className="uppercase text-xs font-semibold text-black mb-2">
              <Link
              to="/product-spotlight">
              <span className="inline-block border-t-2 border-[#00d084] pt-1 cursor-pointer hover:text-[#00d084] transition-colors duration-400 ease-in-out">
                SPOTLIGHT
              </span>
              </Link>
            </p>
            <h3 onClick={() => goToBlog('product-spotlight','australians-falling-in-love-with-handmade-products')} className="text-lg font-semibold cursor-pointer hover:text-[#00d084] transition-colors duration-400 ease-in-out">
              Why Australians Are Falling in Love with Handmade Products Online
            </h3>
            <p className="font-quick text-sm text-black">
              By{" "}
              <span className="font-semibold underline cursor-pointer hover:text-[#00d084] transition-colors duration-400 ease-in-out">
                Setu Store
              </span>
            </p>
          </div>
        </div>

        {/* Small Blog 2 (3 cols × 1 row, new) */}
        <div className="col-span-1 md:col-span-3 row-span-1 grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          <img
            onClick={() => goToBlog('lifestyle-culture','sustainability-strategies-for-setustore')}
            src="/images/sustainability-strategies-for-setustore-thumb.jpg"
            alt="new-blog"
            className="w-full h-[280px] md:h-full object-cover cursor-pointer"
          />
          <div className="flex flex-col justify-center">
            <p className="uppercase text-xs font-semibold text-black mb-2">
              <Link to="/lifestyle-culture">
              <span className="inline-block border-t-2 border-[#00d084] pt-1 cursor-pointer hover:text-[#00d084] transition-colors duration-400 ease-in-out">
                PRODUCT
              </span>
            </Link>
            </p>
            <h3 onClick={() => goToBlog('lifestyle-culture','sustainability-strategies-for-setustore')} className="text-lg font-semibold cursor-pointer hover:text-[#00d084] transition-colors duration-400 ease-in-out">
               Sustainability Strategies for SetuStore: Advancing Eco-Friendly Practices in Vendor-to-Customer Ecommerce 
            </h3>
            <p className="font-quick text-sm text-black">
              By{" "}
              <span className="font-semibold underline cursor-pointer hover:text-[#00d084] transition-colors duration-400 ease-in-out">
                Setu Store
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center my-8">
      <Link to="/product-spotlight">
      <button className="bg-teal-700 hover:bg-teal-500 text-white font-semibold text-lg px-8 py-4 cursor-pointer shadow-md transition-all rounded-md duration-300 ease-in-out">
          More Feature Topics
        </button>
      </Link>
    </div>
    </section>
  );
};

export default ProductSpotlight;
