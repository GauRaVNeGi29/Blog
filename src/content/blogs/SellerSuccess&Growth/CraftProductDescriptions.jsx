import React from "react";

const CraftProductDescription = () => {
  const sections = [
    "Why great product descriptions matter for global sales",
    "Understand your global buyer personas",
    "Structure: headline, lead, specs, benefits, story, CTA",
    "Language & localization, write for clarity, not cleverness",
    "SEO & marketplace keywords (how to research and use them)",
    "Templates & examples (multiple categories)",
    "Photography + description alignment",
    "Pricing, shipping & returns: what to include in copy",
    "A/B testing, analytics & iterating descriptions",
    "Quick checklist & launch playbook",
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-16 space-y-12 font-inter">
      {/* Title */}
      <h3 className="text-4xl font-semibold leading-tight text-gray-900 font-inter">
        Crafting Product Descriptions That Inspire Global Buyers
      </h3>

      {/* Introduction */}
      <p className="text-xl leading-relaxed text-gray-700 italic font-inter">
        In a global marketplace, your product description is often your first conversation with an international buyer. A strong, engaging, and informative description can build trust, attract attention, and drive conversions. Whether you’re a new Indian seller or a seasoned exporter, learning to write compelling copy will make your listings stand out across borders.
      </p>

      {/* Table of Contents */}
      <div className="bg-gray-100 p-6 rounded-lg">
        <h4 className="text-2xl font-semibold mb-4 font-inter">Table of Contents</h4>
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
          1. Why great product descriptions matter for global sales
        </h4>
        <p className="text-xl leading-relaxed text-gray-700 italic font-inter">
          For global buyers, words create confidence. A detailed product description answers questions before they arise, clarifies expectations, and conveys professionalism. International retailers or distributors rely on your descriptions to make purchasing decisions without physically handling your product. A well-written description builds credibility and sets the foundation for long-term relationships.
          <br />
          <br />
          Effective product descriptions not only explain features but also highlight benefits, how your product fits into your buyer’s business or lifestyle. In marketplaces like Setu Store, where Indian craftsmanship meets global demand, well-crafted copy is your bridge to international success.
        </p>
      </div>

      {/* Section 2 */}
      <div>
        <h4
          id="section-2"
          className="text-3xl font-semibold leading-tight text-gray-900 font-inter my-10"
        >
          2. Understand your global buyer personas
        </h4>
        <p className="text-xl leading-relaxed text-gray-700 italic font-inter">
          Before you start writing, think about who your ideal buyers are. Different audiences seek different details. A boutique retailer in Sydney may prioritize craftsmanship and ethical sourcing, while a bulk importer in Europe may focus on pricing and production capacity.
          <br />
          <br />
          Understanding these personas helps tailor tone, format, and focus, ensuring your descriptions resonate with the buyer’s intent.
        </p>
        <ul className="list-disc list-inside text-xl leading-relaxed text-gray-700 italic space-y-3 font-inter">
          <li><strong>Boutique Retailers:</strong> Value design stories, handmade quality, and origin details.</li>
          <li><strong>Online Sellers:</strong> Need concise specs, consistent naming, and SEO-friendly copy.</li>
          <li><strong>Wholesalers or Importers:</strong> Look for MOQ, lead time, and bulk order efficiency.</li>
        </ul>
      </div>

      {/* Section 3 */}
      <div>
        <h4
          id="section-3"
          className="text-3xl font-semibold leading-tight text-gray-900 font-inter my-10"
        >
          3. Structure: headline, lead, specs, benefits, story, CTA
        </h4>
        <p className="text-xl leading-relaxed text-gray-700 italic font-inter">
          Consistency in structure builds familiarity and readability. Every product description should follow a logical flow that highlights the product’s essence while guiding the reader toward action.
        </p>
        <ul className="list-disc list-inside text-xl leading-relaxed text-gray-700 italic space-y-3 font-inter">
          <li><strong>Headline:</strong> Clear, keyword-rich product name (“Handwoven Silk Cushion Cover, Jaipur Collection”).</li>
          <li><strong>Lead Line:</strong> A one-sentence hook describing key appeal.</li>
          <li><strong>Benefits:</strong> Emphasize usability, durability, or cultural value.</li>
          <li><strong>Specifications:</strong> Include material, size, color, and MOQ.</li>
          <li><strong>Story:</strong> Add cultural or artisan context for emotional depth.</li>
          <li><strong>CTA:</strong> “Request Quote” or “Contact for Customization.”</li>
        </ul>
      </div>

      {/* Section 4 */}
      <div>
        <h4
          id="section-4"
          className="text-3xl font-semibold leading-tight text-gray-900 font-inter my-10"
        >
          4. Language & localization, write for clarity, not cleverness
        </h4>
        <p className="text-xl leading-relaxed text-gray-700 italic font-inter">
          When selling globally, clarity always wins over creativity. Use short sentences and simple vocabulary. Avoid local slang or cultural references that might confuse international readers.
          <br />
          <br />
          Always specify dimensions in both metric and imperial systems, use internationally recognized color names, and include care or usage instructions when relevant. Remember, your goal is to be understood by everyone, everywhere.
        </p>
      </div>

      {/* Section 5 */}
      <div>
        <h4
          id="section-5"
          className="text-3xl font-semibold leading-tight text-gray-900 font-inter my-10"
        >
          5. SEO & marketplace keywords (how to research and use them)
        </h4>
        <p className="text-xl leading-relaxed text-gray-700 italic font-inter">
          Keywords determine how easily buyers discover your listings. Use terms your international audience might search for, such as “wholesale handmade jewelry,” “eco-friendly Indian décor,” or “organic cotton scarves.”
          <br />
          <br />
          Include keywords in your product title, first paragraph, and image alt text, but always keep it natural. Overstuffing keywords makes copy robotic and reduces readability.
        </p>
      </div>

      {/* Section 6 */}
      <div>
        <h4
          id="section-6"
          className="text-3xl font-semibold leading-tight text-gray-900 font-inter my-10"
        >
          6. Templates & examples (multiple categories)
        </h4>
        <p className="text-xl leading-relaxed text-gray-700 italic font-inter">
          Here are sample product description formats across categories. You can adapt them to your listings on Setu Store.
        </p>
        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h5 className="text-2xl font-semibold text-gray-800 font-inter mb-2">Textiles & Apparel</h5>
            <p className="text-xl text-gray-700 italic font-inter">
              “Handloom Cotton Scarf, Naturally Dyed in Gujarat. Lightweight, breathable, and ethically made by local artisans. MOQ 20 | FOB Mumbai.”
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h5 className="text-2xl font-semibold text-gray-800 font-inter mb-2">Jewellery & Accessories</h5>
            <p className="text-xl text-gray-700 italic font-inter">
              “Brass Statement Earrings, Handcrafted with intricate Meenakari detailing. Lead-free. MOQ 50 | Ships in 20 days.”
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h5 className="text-2xl font-semibold text-gray-800 font-inter mb-2">Home Décor</h5>
            <p className="text-xl text-gray-700 italic font-inter">
              “Terracotta Planter, Hand-painted with natural pigments. Perfect for indoor plants. MOQ 30 | FOB Chennai.”
            </p>
          </div>
        </div>
      </div>

      {/* Section 7 */}
      <div>
        <h4
          id="section-7"
          className="text-3xl font-semibold leading-tight text-gray-900 font-inter my-10"
        >
          7. Photography + description alignment
        </h4>
        <p className="text-xl leading-relaxed text-gray-700 italic font-inter">
          Your copy and visuals should reinforce one another. Every description should be supported by photos that capture the product’s texture, quality, and craftsmanship.
          <br />
          <br />
          Always include:
        </p>
        <ul className="list-disc list-inside text-xl leading-relaxed text-gray-700 italic space-y-3 font-inter">
          <li>At least 5 photos per product (front, side, close-up, lifestyle, and packaging).</li>
          <li>Accurate color representation and clean white backgrounds.</li>
          <li>Descriptive file names and alt text for SEO visibility.</li>
        </ul>
      </div>

      {/* Section 8 */}
      <div>
        <h4
          id="section-8"
          className="text-3xl font-semibold leading-tight text-gray-900 font-inter my-10"
        >
          8. Pricing, shipping & returns: what to include in copy
        </h4>
        <p className="text-xl leading-relaxed text-gray-700 italic font-inter">
          International buyers appreciate transparency. Always include key pricing and logistics details clearly in your description.
        </p>
        <ul className="list-disc list-inside text-xl leading-relaxed text-gray-700 italic space-y-3 font-inter">
          <li><strong>Currency & Pricing:</strong> Example, INR 600 / FOB Delhi.</li>
          <li><strong>MOQ & Lead Time:</strong> Clearly mention production schedule.</li>
          <li><strong>Returns & Samples:</strong> Provide basic policies or link to details.</li>
        </ul>
      </div>

      {/* Section 9 */}
      <div>
        <h4
          id="section-9"
          className="text-3xl font-semibold leading-tight text-gray-900 font-inter my-10"
        >
          9. A/B testing, analytics & iterating descriptions
        </h4>
        <p className="text-xl leading-relaxed text-gray-700 italic font-inter">
          Great descriptions evolve. Monitor which listings perform better, test new headlines, bullet layouts, or keyword variations. Data-driven refinements lead to higher engagement and conversions.
        </p>
      </div>

      {/* Section 10 */}
      <div>
        <h4
          id="section-10"
          className="text-3xl font-semibold leading-tight text-gray-900 font-inter my-10"
        >
          10. Quick checklist & launch playbook
        </h4>
        <ul className="list-disc list-inside text-xl leading-relaxed text-gray-700 italic space-y-3 font-inter">
          <li>✅ Title includes main keyword and unique trait</li>
          <li>✅ Specs complete: materials, MOQ, and lead time</li>
          <li>✅ 5+ photos with alt text and clean visuals</li>
          <li>✅ CTA and shipping terms clearly listed</li>
          <li>✅ Storytelling integrated with product origin</li>
        </ul>
      </div>

      {/* Conclusion */}
      <h4
        id="conclusion"
        className="text-3xl font-semibold leading-tight text-gray-900 font-inter mt-12"
      >
        Turning Listings into Global Conversations
      </h4>
      <p className="text-xl leading-relaxed text-gray-700 italic font-inter">
        Product descriptions are more than words, they’re your global handshake. Every line should inspire confidence, reflect your craftsmanship, and tell your brand story. With <strong>Setu Store</strong>, you can reach global buyers who value authenticity and quality. Write your descriptions with intention, update them regularly, and watch your sales grow across borders.
      </p>
    </div>
  );
};

export default CraftProductDescription;
