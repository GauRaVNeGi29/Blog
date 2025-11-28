import React from "react";

const TopMistakesIndianSellersMake = () => {
  const sections = [
    "Failing to Research Target Markets",
    "Overlooking Product Localization",
    "Incorrect Pricing and Shipping Strategy",
    "Neglecting International Compliance and Certifications",
    "Poor Communication and Cultural Misunderstanding",
    "Weak Brand Presentation and Product Descriptions",
    "Lack of Long-Term Relationship Building",
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-16 space-y-12 font-inter">
      {/* Title */}
      <h3 className="text-4xl font-semibold leading-tight text-gray-900 font-inter">
        Top Mistakes Indian Sellers Make When Expanding Overseas
      </h3>

      {/* Introduction */}
      <p className="text-xl leading-relaxed text-gray-700 italic font-inter">
        Global expansion offers immense opportunity for Indian sellers, access
        to larger markets, higher margins, and global recognition. But for many,
        the journey from local success to international growth is filled with
        challenges. Misunderstanding buyer expectations, underestimating
        compliance requirements, or overlooking cultural nuances can quickly
        derail even the most promising export plan.  
        <br />
        <br />
        This guide uncovers the most common mistakes Indian businesses make when
        going global, and, more importantly, how to avoid them. Whether you’re
        a manufacturer, artisan, or D2C brand looking to expand internationally,
        these lessons will help you grow sustainably and confidently.
      </p>

      {/* Table of Contents */}
      <div className="bg-gray-100 p-6 rounded-lg">
        <h4 className="text-2xl font-semibold mb-4 font-inter">
          Table of Contents
        </h4>
        <ul className="list-disc list-inside space-y-2">
          {sections.map((sec, idx) => (
            <li key={idx}>
              <a
                href={`#section-${idx + 1}`}
                className="text-gray-800 hover:underline transition-all duration-300"
              >
                {sec}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Section 1 */}
      <div>
        <h4
          id="section-1"
          className="text-3xl font-semibold leading-tight text-gray-900 font-inter my-10"
        >
          1. Failing to Research Target Markets
        </h4>
        <p className="text-xl leading-relaxed text-gray-700 italic font-inter">
          Many Indian sellers assume that products that sell well in India will
          automatically find buyers overseas. However, each country has unique
          preferences, purchasing power, and regulations.  
          <br />
          <br />
          <strong>Mistake:</strong> Not analyzing the demand, competitors, or
          pricing benchmarks in the target country.  
          <br />
          <strong>Solution:</strong> Conduct proper market research before
          launching. Identify the countries where your product niche is growing.
          Study consumer behavior, import duties, seasonal trends, and packaging
          expectations. Tools like Google Trends, Import Export Data, and
          Setu Store’s B2B analytics can help you decide which markets are most
          promising for your category.
        </p>
      </div>

      {/* Section 2 */}
      <div>
        <h4
          id="section-2"
          className="text-3xl font-semibold leading-tight text-gray-900 font-inter my-10"
        >
          2. Overlooking Product Localization
        </h4>
        <p className="text-xl leading-relaxed text-gray-700 italic font-inter">
          A handcrafted item or apparel line may appeal differently across
          cultures. A color or symbol that’s lucky in India might not resonate
          elsewhere.  
          <br />
          <br />
          <strong>Mistake:</strong> Selling products without adapting to local
          tastes, packaging, or labeling.  
          <br />
          <strong>Solution:</strong> Localize your products. Adapt measurements
          (e.g., inches to centimeters), add multilingual labels, and adjust
          design aesthetics. Through <strong>Setu Store</strong>, many artisans
          now collaborate directly with global buyers to tailor textures,
          packaging, and colors that align with regional trends, while
          preserving authenticity.
        </p>
      </div>

      {/* Section 3 */}
      <div>
        <h4
          id="section-3"
          className="text-3xl font-semibold leading-tight text-gray-900 font-inter my-10"
        >
          3. Incorrect Pricing and Shipping Strategy
        </h4>
        <p className="text-xl leading-relaxed text-gray-700 italic font-inter">
          Pricing is often where global deals fall apart. Sellers forget to
          include taxes, customs, shipping, and platform commissions in their
          pricing structure.  
          <br />
          <br />
          <strong>Mistake:</strong> Setting the same prices as domestic markets
          or underquoting due to lack of cost visibility.  
          <br />
          <strong>Solution:</strong> Build a pricing model that includes
          international logistics, warehousing, and customs fees. Offer
          transparent shipping rates or bundled prices. Consider partnering with
          fulfillment networks and shipping aggregators that specialize in
          international B2B deliveries. Reliable pricing ensures profitability
          and builds buyer trust.
        </p>
      </div>

      {/* Section 4 */}
      <div>
        <h4
          id="section-4"
          className="text-3xl font-semibold leading-tight text-gray-900 font-inter my-10"
        >
          4. Neglecting International Compliance and Certifications
        </h4>
        <p className="text-xl leading-relaxed text-gray-700 italic font-inter">
          Compliance issues can delay shipments or result in product bans. Each
          country has its own rules for materials, safety, and labeling.  
          <br />
          <br />
          <strong>Mistake:</strong> Shipping without mandatory certifications or
          not meeting safety and packaging regulations.  
          <br />
          <strong>Solution:</strong> Learn the import standards for your
          category (e.g., CE marking for Europe, FDA compliance for skincare).
          Partner with verified suppliers and exporters on <strong>Setu
          Store</strong> who are familiar with documentation, certifications,
          and export norms.
        </p>
      </div>

      {/* Section 5 */}
      <div>
        <h4
          id="section-5"
          className="text-3xl font-semibold leading-tight text-gray-900 font-inter my-10"
        >
          5. Poor Communication and Cultural Misunderstanding
        </h4>
        <p className="text-xl leading-relaxed text-gray-700 italic font-inter">
          Clear communication builds trust in B2B trade. Many Indian sellers
          struggle with inconsistent responses, unclear timelines, or tone
          mismatches.  
          <br />
          <br />
          <strong>Mistake:</strong> Not responding promptly or misunderstanding
          buyer expectations due to cultural gaps.  
          <br />
          <strong>Solution:</strong> Maintain professional and punctual
          communication. Learn the cultural etiquette of your target buyers.
          Provide transparent shipping updates, digital catalogs, and quick
          clarifications. Consider using collaboration tools or dashboards like
          <strong> Setu Store’s chat system</strong> for seamless
          communication.
        </p>
      </div>

      {/* Section 6 */}
      <div>
        <h4
          id="section-6"
          className="text-3xl font-semibold leading-tight text-gray-900 font-inter my-10"
        >
          6. Weak Brand Presentation and Product Descriptions
        </h4>
        <p className="text-xl leading-relaxed text-gray-700 italic font-inter">
          International buyers expect clarity, consistency, and trust from your
          listings. A poorly written description or low-quality image can break
          a deal.  
          <br />
          <br />
          <strong>Mistake:</strong> Using generic, text-heavy descriptions or
          unclear product photography.  
          <br />
          <strong>Solution:</strong> Invest in storytelling-based descriptions.
          Highlight craftsmanship, material sources, and sustainability angles.
          Use professional photos with size context and lifestyle shots. Read
          our detailed guide, “How to Craft Product Descriptions That Inspire
          Global Buyers,” to master this skill.
        </p>
      </div>

      {/* Section 7 */}
      <div>
        <h4
          id="section-7"
          className="text-3xl font-semibold leading-tight text-gray-900 font-inter my-10"
        >
          7. Lack of Long-Term Relationship Building
        </h4>
        <p className="text-xl leading-relaxed text-gray-700 italic font-inter">
          Many sellers focus on one-time deals instead of building partnerships.
          But international buyers value reliability over short-term savings.  
          <br />
          <br />
          <strong>Mistake:</strong> Not following up after delivery or ignoring
          post-sale support.  
          <br />
          <strong>Solution:</strong> Build loyalty through consistent quality,
          responsive after-sales service, and regular communication. Offer
          loyalty discounts or early access to new collections. When buyers feel
          supported, they become your long-term brand advocates overseas.
        </p>
      </div>

      {/* Conclusion */}
      <h4
        id="conclusion"
        className="text-3xl font-semibold leading-tight text-gray-900 font-inter mt-12"
      >
        Building a Global Legacy with Confidence
      </h4>
      <p className="text-xl leading-relaxed text-gray-700 italic font-inter">
        Expanding globally is not just about exporting products, it’s about
        exporting trust, quality, and culture.  
        <br />
        <br />
        Indian sellers are uniquely positioned to thrive internationally, given
        the country’s heritage of craftsmanship and innovation. By avoiding
        these common pitfalls and adopting a global mindset, you can transform
        your business into an international brand.  
        <br />
        <br />
        With <strong>Setu Store</strong> as your global bridge, your journey
        beyond borders becomes smoother, smarter, and more rewarding.  
        <br />
        <br />
        The world is ready for Indian excellence, make sure your business is
        ready too.
      </p>
    </div>
  );
};

export default TopMistakesIndianSellersMake;
