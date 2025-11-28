import React from "react";

const TopIndianProductCategories = () => {
  const categories = [
    "Textiles and Apparel",
    "Jewellery and Precious Stones",
    "Footwear",
    "Handicrafts and Home Décor",
    "Toys and Sports Goods",
    "Appliances",
    "Skincare",
    "Activewear",
    "Arts and Crafting Materials",
    "Leather Goods",
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-16 space-y-12 font-inter">
      <h3 className="text-4xl font-semibold leading-tight text-gray-900 font-inter">
        Top 10 Indian Product Categories Trending in Australia This Year
      </h3>

      <p className="text-xl leading-relaxed text-gray-700 italic font-inter">
        Australia’s retail landscape is rapidly evolving, and Indian products are taking center stage. From artisanal textiles to sustainable skincare, Australian retailers are discovering the unmatched value of sourcing authentic, homemade, and handcrafted goods from India through Setu Store, a trusted B2B marketplace connecting retailers directly with verified Indian manufacturers, wholesalers, and local shops.
      </p>

      {/* Index / Table of Contents */}
<div className="bg-gray-100 p-6 rounded-lg">
  <h4 className="text-2xl font-semibold mb-4 font-inter">Table of Contents</h4>
  <ul className="list-disc list-inside space-y-2">
    {/* Parent item */}
    <li>
      <a href="#first-component" className="text-gray-800 hover:underline transition-all duration-300">List of Top Products Exported to Australia from India</a>
      {/* Nested product categories */}
      <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
        {categories.map((cat, idx) => (
          <li key={idx}>
            <a
              href={`#category-${idx + 1}`}
              className="text-gray-800 hover:underline transition-all duration-300"
            >
              {cat}
            </a>
          </li>
        ))}
      </ul>
    </li>

    {/* Second main item */}
    <li className="mt-2">
      <a
        href="#last-content"
        className="text-gray-800 hover:underline transition-all duration-300"
      >
        The Future of Indian Products in Australia
      </a>
    </li>
  </ul>
</div>


      <h4 id="first-component" className="text-3xl font-semibold leading-tight text-gray-900 font-inter mt-10">List of top products exported to Australia from India</h4>

      <p className="text-xl leading-relaxed text-gray-700 italic font-inter">
        Here’s a deep dive into the top 10 trending Indian product categories making waves in Australia this year and why retailers are embracing them for their authenticity, sustainability, and storytelling appeal.
      </p>

      {/* Product Categories */}
      {categories.map((cat, idx) => (
        <div key={idx}>
          <h4
            id={`category-${idx + 1}`}
            className="text-3xl font-semibold leading-tight text-gray-900 font-inter my-10"
          >
            {idx + 1}. {cat}
          </h4>
          <p className="text-xl leading-relaxed text-gray-700 italic font-inter">
            {(() => {
              switch (idx) {
                case 0:
                  return "Indian textiles remain a cornerstone of global fashion. From handwoven cottons to rich silks, retailers are choosing homemade fabrics sourced from small-scale Indian manufacturers. Setu Store helps connect Australian boutiques with authentic wholesalers offering ethically made apparel, scarves, and home fabrics that blend tradition with contemporary design.";
                case 1:
                  return "Handcrafted jewelry from India has found a loyal audience in Australia’s boutique market. From silver anklets and gemstone earrings to brass statement pieces, each design tells a story of local craftsmanship. Through Setu Store, retailers can source directly from trusted Indian jewelers and wholesalers at wholesale prices.";
                case 2:
                  return "Indian handmade footwear like Kolhapuris, Juttis, and Mojaris are gaining popularity in Australia for their style and comfort. These are often made in local workshops by skilled artisans. Setu Store bridges the gap between Australian fashion stores and Indian footwear manufacturers to ensure high-quality, ethically made products.";
                case 3:
                  return "The Australian home décor market is embracing handmade Indian crafts, from carved wooden furniture and pottery to bamboo and brass décor. Retailers sourcing via Setu Store gain direct access to Indian local shops and artisans offering exquisite, eco-friendly designs with cultural flair.";
                case 4:
                  return "With growing awareness around sustainability, Indian-made wooden and fabric toys are trending in eco-conscious Australian households. Ethical toy manufacturers listed on Setu Store provide safe, durable, and handmade options that align with modern parenting values.";
                case 5:
                  return "Indian appliances, from traditional spice grinders to smart kitchen gadgets, are gaining traction for their reliability and affordability. Setu Store connects Australian retailers to certified Indian manufacturers offering modern yet cultural home appliances that suit Australian lifestyles.";
                case 6:
                  return "Ayurveda-inspired skincare has become one of the fastest-growing segments in the Australian beauty industry. Retailers are now turning to homemade Indian skincare brands offering organic oils, herbal soaps, and cruelty-free products directly available through Setu Store’s verified wholesalers and manufacturers.";
                case 7:
                  return "The fitness and lifestyle market in Australia is embracing activewear that is both stylish and sustainable. Indian textile manufacturers are now producing eco-friendly activewear using breathable, natural fabrics. Setu Store ensures Australian retailers access these high-demand items at competitive wholesale prices.";
                case 8:
                  return "Creativity is booming, and Indian crafting materials, from handmade papers to natural pigments and organic dyes, are inspiring Australian artists and hobbyists. Retailers can find a diverse range of supplies directly from local Indian workshops and homemade creators through Setu Store.";
                case 9:
                  return "Indian leather artisans are known for producing premium, ethically made leather goods. From belts and bags to wallets, these products are loved in Australia for their craftsmanship and durability. Setu Store’s network of verified Indian wholesalers ensures top quality at fair pricing.";
                default:
                  return "";
              }
            })()}
          </p>
        </div>
      ))}

      {/* Future Outlook */}
      <h4 id="last-content" className="text-3xl font-semibold leading-tight text-gray-900 font-inter mt-12">
        The Future of Indian Products in Australia
      </h4>
      <p className="text-xl leading-relaxed text-gray-700 italic font-inter">
        The demand for authentic, handmade, and sustainable Indian products in Australia shows no signs of slowing down. By partnering with Setu Store, retailers gain direct access to trusted Indian manufacturers, wholesalers, and local shops, enabling them to offer unique, story-rich collections that stand out in the competitive retail market.
      </p>

      <p className="text-xl leading-relaxed text-gray-700 italic font-inter">
        Explore the richness of Indian craftsmanship and meet growing consumer demand, only on Setu Store, your reliable sourcing partner for homemade, handcrafted, and wholesale Indian products tailored for Australian retailers.
      </p>
    </div>
  );
};

export default TopIndianProductCategories;
