import React from "react";

const CurateInStoreExperience = () => {
  const sections = [
    "Why do “Made in India” products stand apart?",
    "Which product categories offer the most potential?",
    "How to customize Indian products for your audience",
    "Where and how to find reliable suppliers?",
    "How to start sourcing quality goods from India",
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-16 space-y-12 font-inter">
      {/* Title */}
      <h3 className="text-4xl font-semibold leading-tight text-gray-900 font-inter">
        How to Curate a Unique In-Store Experience with Indian Handcrafted Goods
      </h3>

      {/* Introduction */}
      <p className="text-xl leading-relaxed text-gray-700 italic font-inter">
        In today’s world of mass production and fast fashion, consumers are
        increasingly drawn to products with authenticity, craftsmanship, and
        cultural depth. For Australian retailers, curating a distinctive
        in-store experience means offering something beyond the ordinary,
        something that tells a story. That’s where Indian handcrafted goods
        shine. From handwoven textiles to intricate jewelry and earthy home
        décor, “Made in India” stands for artistry, emotion, and sustainability.
        Through <strong>Setu Store</strong>, a B2B marketplace connecting
        Australian retailers directly with verified Indian manufacturers,
        wholesalers, and local artisans, bringing this charm into your retail
        space has never been easier.
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
          1. Why do “Made in India” products stand apart?
        </h4>
        <p className="text-xl leading-relaxed text-gray-700 italic font-inter">
          The phrase “Made in India” evokes images of vibrant markets,
          traditional craftsmanship, and sustainable artistry. Indian artisans
          rely on techniques passed down through generations, from block
          printing in Rajasthan and handloom weaving in Tamil Nadu to brass
          casting in Moradabad. Each product is not just an item but a narrative
          of skill, patience, and creativity.  
          <br />
          <br />
          Australian consumers are becoming more mindful, choosing products that
          have meaning and longevity. Indian handmade products meet this demand
          beautifully, offering sustainability, cultural depth, and
          individuality. No two handcrafted items are ever the same, which adds
          to their exclusivity. Retailers who stock these goods find that
          customers are not just buying products, they’re buying stories and
          connections.
        </p>
      </div>

      {/* Section 2 */}
      <div>
        <h4
          id="section-2"
          className="text-3xl font-semibold leading-tight text-gray-900 font-inter my-10"
        >
          2. Which product categories offer the most potential?
        </h4>
        <p className="text-xl leading-relaxed text-gray-700 italic font-inter">
          Some of the most promising Indian product categories for the
          Australian market include:
          <br />
          <br />
          <strong>• Textiles & Apparel:</strong> Handwoven fabrics, scarves,
          embroidered garments, and eco-friendly cottons appeal to fashion
          boutiques seeking authenticity.  
          <br />
          <strong>• Jewellery & Accessories:</strong> Handmade silver, brass, or
          beaded jewelry adds a touch of exotic flair to modern fashion stores.  
          <br />
          <strong>• Home Décor & Furniture:</strong> Carved wooden artifacts,
          brass lamps, and macramé wall hangings resonate with interior
          designers focused on global aesthetics.  
          <br />
          <strong>• Wellness & Skincare:</strong> Ayurveda-inspired oils, soaps,
          and herbal skincare lines are thriving in Australia’s growing
          self-care market.  
          <br />
          <strong>• Toys & Crafts:</strong> Eco-conscious parents appreciate
          handcrafted toys made from natural materials.  
          <br />
          <br />
          By curating a selection across these categories, Australian retailers
          can create immersive store sections that transport shoppers to the
          artisanal landscapes of India, a sensory journey that builds
          emotional engagement and repeat footfall.
        </p>
      </div>

      {/* Section 3 */}
      <div>
        <h4
          id="section-3"
          className="text-3xl font-semibold leading-tight text-gray-900 font-inter my-10"
        >
          3. How to customize Indian products for your audience
        </h4>
        <p className="text-xl leading-relaxed text-gray-700 italic font-inter">
          The key to a successful retail experience is personalization. Indian
          artisans are highly adaptable, capable of tailoring designs, colors,
          and packaging to fit your brand identity. Through Setu Store,
          retailers can collaborate directly with suppliers to develop
          exclusive collections, such as limited-edition prints, customized
          embroidery, or eco-friendly packaging.  
          <br />
          <br />
          For example, if your store’s aesthetic is coastal and minimal, you can
          request neutral-toned cotton throws or handcrafted bamboo décor.
          Alternatively, if your brand celebrates vibrancy, artisans can produce
          bold, colorful textiles and statement accessories. This flexibility
          ensures your store feels curated, not catalogued, with every item
          reflecting your audience’s preferences and values.
        </p>
      </div>

      {/* Section 4 */}
      <div>
        <h4
          id="section-4"
          className="text-3xl font-semibold leading-tight text-gray-900 font-inter my-10"
        >
          4. Where and how to find reliable suppliers?
        </h4>
        <p className="text-xl leading-relaxed text-gray-700 italic font-inter">
          Sourcing authentic handcrafted goods can be challenging without the
          right network. Many small-scale artisans in India don’t operate on
          large online platforms, making it difficult for overseas retailers to
          connect directly. That’s where <strong>Setu Store</strong> bridges the
          gap.  
          <br />
          <br />
          The platform lists only verified Indian manufacturers, wholesalers,
          and local artisans, ensuring every supplier is vetted for product
          quality, ethical labor practices, and reliability. Retailers can
          browse product catalogs, communicate directly with sellers, negotiate
          pricing, and even request sample shipments. This transparency helps
          build long-term supplier relationships while maintaining product
          authenticity and consistency.
        </p>
      </div>

      {/* Section 5 */}
      <div>
        <h4
          id="section-5"
          className="text-3xl font-semibold leading-tight text-gray-900 font-inter my-10"
        >
          5. How to start sourcing quality goods from India
        </h4>
        <p className="text-xl leading-relaxed text-gray-700 italic font-inter">
          Getting started is easier than most retailers think. Begin by
          exploring curated categories on <strong>Setu Store</strong>, where you
          can filter by product type, material, region, or sustainability focus.
          Once you’ve identified potential items, contact the seller directly to
          discuss order volumes, branding options, and delivery timelines.  
          <br />
          <br />
          Many artisans offer low minimum order quantities (MOQs), allowing new
          retailers to test product lines before scaling. You can also feature
          storytelling elements in-store, such as artisan bios, region maps, or
          “Made in India” labels, that enhance customer engagement and
          communicate the ethical sourcing behind each piece.  
          <br />
          <br />
          By incorporating Indian handcrafted goods thoughtfully, your store
          becomes more than a retail space, it transforms into a cultural
          experience.
        </p>
      </div>

      {/* Conclusion */}
      <h4
        id="conclusion"
        className="text-3xl font-semibold leading-tight text-gray-900 font-inter mt-12"
      >
        Creating a Memorable Retail Journey
      </h4>
      <p className="text-xl leading-relaxed text-gray-700 italic font-inter">
        Australian shoppers are increasingly gravitating toward authenticity,
        transparency, and sustainability. By curating a collection of Indian
        handcrafted goods, retailers can tap into this growing sentiment, while
        standing out in a crowded retail market.  
        <br />
        <br />
        Each handmade product adds personality and warmth to your store,
        encouraging customers to linger, explore, and connect. With
        <strong> Setu Store</strong> as your trusted sourcing partner, you gain
        direct access to India’s vast artisan network, ensuring your offerings
        remain both meaningful and profitable.  
        <br />
        <br />
        Turn your retail space into a cultural journey, one handcrafted
        product at a time.
      </p>
    </div>
  );
};

export default CurateInStoreExperience;
