import React from "react";

const BenefitsOfSourcingFromIndiaForAustralia = () => {
  const benefits = [
    "Stronger Australia–India Trade Relations",
    "High-Quality Craftsmanship & Premium Materials",
    "Competitive Pricing and Higher Margins",
    "Ethical, Sustainable & Transparent Manufacturing",
    "Flexible MOQs for All Business Sizes",
    "Wide Range of Product Categories",
    "Direct Customisation & Private Labeling",
    "Reliable Logistics & Shipping to Australia",
    "Cultural Appeal and Story-Driven Products",
    "Growing Australian Consumer Demand"
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-16 space-y-12 font-inter">
      <h3 className="text-4xl font-semibold leading-tight text-gray-900 font-inter">
        Why Australian Businesses Benefit from Sourcing Products from India
      </h3>

      <p className="text-xl leading-relaxed text-gray-700 italic font-inter">
        As trade between India and Australia reaches historic highs, more Australian retailers, wholesalers, and brands are shifting to Indian suppliers for high-quality, ethically made, and competitively priced products. Setu Store helps Australian businesses connect directly with verified Indian manufacturers, wholesalers, and local artisanal creators, making sourcing smoother, faster, and more profitable.
      </p>

      {/* Table of Contents */}
      <div className="bg-gray-100 p-6 rounded-lg">
        <h4 className="text-2xl font-semibold mb-4 font-inter">Table of Contents</h4>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <a
              href="#benefits-list"
              className="text-gray-800 hover:underline transition-all duration-300"
            >
              Major Benefits of Sourcing from India
            </a>
            <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
              {benefits.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={`#benefit-${idx + 1}`}
                    className="text-gray-800 hover:underline transition-all duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </li>

          <li className="mt-2">
            <a
              href="#conclusion"
              className="text-gray-800 hover:underline transition-all duration-300"
            >
              Final Thoughts for Australian Buyers
            </a>
          </li>
        </ul>
      </div>

      {/* Intro Section */}
      <h4
        id="benefits-list"
        className="text-3xl font-semibold leading-tight text-gray-900 font-inter mt-10"
      >
        Major Benefits of Sourcing from India
      </h4>

      <p className="text-xl leading-relaxed text-gray-700 italic font-inter">
        Below is a detailed breakdown of why India is becoming a preferred sourcing destination for Australian brands and how Setu Store supports seamless trade between both nations.
      </p>

      {/* Detailed Benefits */}
      {benefits.map((item, idx) => (
        <div key={idx}>
          <h4
            id={`benefit-${idx + 1}`}
            className="text-3xl font-semibold leading-tight text-gray-900 font-inter my-10"
          >
            {idx + 1}. {item}
          </h4>

          <p className="text-xl leading-relaxed text-gray-700 italic font-inter">
            {(() => {
              switch (idx) {
                case 0:
                  return "India and Australia’s strengthened trade agreements, including the ECTA, allow reduced duty and easier import procedures. This helps Australian retailers lower costs, improve import timelines, and access a wider variety of Indian goods through Setu Store’s verified suppliers.";
                case 1:
                  return "Indian artisans and manufacturers are world-renowned for craftsmanship, from textiles and jewellery to handmade décor and wellness items. Australian buyers appreciate the uniqueness, authenticity, and durability of Indian-made goods.";
                case 2:
                  return "India offers premium quality at far more competitive prices than many global suppliers. This enables Australian brands to enjoy better margins without sacrificing quality, an advantage especially critical in retail sectors like home décor, fashion, gifting, and lifestyle goods.";
                case 3:
                  return "Many Indian manufacturers follow global ethical and sustainable standards including Fair Trade, ISO certifications, and eco-friendly production methods. This aligns perfectly with the growing sustainability expectations of Australian consumers.";
                case 4:
                  return "India is one of the few markets that supports low and flexible MOQs. Small Australian businesses, boutique stores, and new private-label brands can source without committing to huge inventory orders.";
                case 5:
                  return "India offers an enormous variety of product categories, textiles, jewellery, wellness items, handicrafts, eco-friendly goods, leather products, and more. Australian businesses can source multiple categories from one reliable country.";
                case 6:
                  return "Indian manufacturers are highly adaptable and offer customisation, private labelling, and design adjustments. This is ideal for Australian brands wanting unique products tailored to local consumer tastes.";
                case 7:
                  return "With major Indian ports connected directly to Australia, shipping is efficient and predictable. Setu Store suppliers also support express shipping for smaller consignments.";
                case 8:
                  return "Indian products carry cultural heritage and storytelling, qualities Australian consumers love. Items like handcrafted décor, artisanal jewellery, and Ayurvedic skincare connect emotionally with shoppers.";
                case 9:
                  return "Thanks to rising awareness and demand for handmade, sustainable, and ethically produced goods, Australia’s appetite for Indian products continues to grow. Retailers sourcing now are entering a rapidly expanding market.";
                default:
                  return "";
              }
            })()}
          </p>
        </div>
      ))}

      {/* Conclusion */}
      <h4
        id="conclusion"
        className="text-3xl font-semibold leading-tight text-gray-900 font-inter mt-12"
      >
        Final Thoughts for Australian Buyers
      </h4>

      <p className="text-xl leading-relaxed text-gray-700 italic font-inter">
        Australia’s retail landscape is shifting towards sustainability, authenticity, and value, and Indian products perfectly match this demand. With direct access to verified Indian manufacturers, Setu Store makes sourcing simpler, safer, and more profitable for Australian businesses.
      </p>

      <p className="text-xl leading-relaxed text-gray-700 italic font-inter">
        Whether you're a boutique, online retailer, or large wholesaler, now is the perfect time to build long-term sourcing partnerships with India through Setu Store.
      </p>
    </div>
  );
};

export default BenefitsOfSourcingFromIndiaForAustralia;
