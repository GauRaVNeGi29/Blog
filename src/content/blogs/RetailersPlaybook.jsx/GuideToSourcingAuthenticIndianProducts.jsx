import React from "react";

const CraftProductDescription = () => {
  const sections = [
    "Why great product descriptions matter for global sales",
    "Understand your global buyer personas",
    "Structure: headline, lead, specs, benefits, story, CTA",
    "Language & localization — write for clarity, not cleverness",
    "SEO & marketplace keywords (how to research and use them)",
    "Templates & examples (multiple categories)",
    "Photography + description alignment",
    "Pricing, shipping & returns: what to include in copy",
    "A/B testing, analytics & iterating descriptions",
    "Quick checklist & launch playbook",
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-16 space-y-12 font-inter">
      <h3 className="text-4xl font-semibold leading-tight text-gray-900 font-inter">
        How to Craft Product Descriptions That Inspire Global Buyers
      </h3>

      <p className="text-xl leading-relaxed text-gray-700 italic font-inter">
        A step-by-step guide for Indian sellers on <strong>Setu Store</strong> to write product descriptions that attract, inform, and convert international retailers and buyers. Includes SEO tips, localization best practices, templates, and a practical checklist.
      </p>

      <div className="bg-gray-100 p-6 rounded-lg">
        <h4 className="text-2xl font-semibold mb-4">Table of Contents</h4>
        <ul className="list-disc list-inside space-y-2">
          {sections.map((s, i) => (
            <li key={i}>
              <a href={`#section-${i + 1}`} className="text-gray-800 hover:underline transition-all duration-300">
                {s}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Sections */}
      <section id="section-1">
        <h4 className="text-3xl font-semibold leading-tight text-gray-900 font-inter">
          1. Why great product descriptions matter for global sales
        </h4>
        <p className="text-xl leading-relaxed text-gray-700 italic font-inter">
          Product images attract attention — but product descriptions convert it into action. A clear, detailed description builds trust and ensures international buyers understand what they’re purchasing.
        </p>
        <ul className="list-disc list-inside text-xl leading-relaxed text-gray-700 italic space-y-3 font-inter">
          <li><strong>Builds confidence</strong> by communicating quality, materials, and sourcing.</li>
          <li><strong>Reduces uncertainty</strong> by addressing export logistics and product details.</li>
          <li><strong>Boosts visibility</strong> when optimized with marketplace keywords.</li>
        </ul>
      </section>

      <section id="section-2">
        <h4 className="text-3xl font-semibold leading-tight text-gray-900 font-inter">
          2. Understand your global buyer personas
        </h4>
        <p className="text-xl leading-relaxed text-gray-700 italic font-inter">
          Before writing, identify your top buyer types — boutique retailers, online resellers, or direct importers. Each has unique expectations.
        </p>
        <ul className="list-disc list-inside text-xl leading-relaxed text-gray-700 italic space-y-3 font-inter">
          <li><strong>Retail Buyers:</strong> prefer small MOQs, consistent branding, and clear pricing.</li>
          <li><strong>Online Resellers:</strong> need quick specs and clear SKUs for listing copy.</li>
          <li><strong>End Consumers:</strong> value transparency, origin details, and care instructions.</li>
        </ul>
      </section>

      <section id="section-3">
        <h4 className="text-3xl font-semibold leading-tight text-gray-900 font-inter">
          3. Structure: headline, lead, specs, benefits, story, CTA
        </h4>
        <p className="text-xl leading-relaxed text-gray-700 italic font-inter">
          A consistent structure improves readability and conversion. Here’s a simple format:
        </p>
        <ul className="list-disc list-inside text-xl leading-relaxed text-gray-700 italic space-y-3 font-inter">
          <li><strong>Headline:</strong> Clear name + unique trait — “Handloom Cotton Throw — Naturally Dyed”.</li>
          <li><strong>Lead:</strong> Short benefit-driven hook.</li>
          <li><strong>Benefits:</strong> Focus on what it does for the buyer.</li>
          <li><strong>Specs:</strong> Material, dimensions, MOQ, and lead time.</li>
          <li><strong>Story:</strong> 2–4 lines about origin or craftsmanship.</li>
          <li><strong>CTA:</strong> “Request a sample”, “Contact for pricing”, etc.</li>
        </ul>
      </section>

      <section id="section-4">
        <h4 className="text-3xl font-semibold leading-tight text-gray-900 font-inter">
          4. Language & localization: write for clarity, not cleverness
        </h4>
        <p className="text-xl leading-relaxed text-gray-700 italic font-inter">
          Use simple, clear language. Avoid idioms or region-specific terms. Use consistent units (metric & imperial) and ensure clarity in translation.
        </p>
      </section>

      <section id="section-5">
        <h4 className="text-3xl font-semibold leading-tight text-gray-900 font-inter">
          5. SEO & marketplace keywords (how to research and use them)
        </h4>
        <p className="text-xl leading-relaxed text-gray-700 italic font-inter">
          Combine core product keywords with modifiers such as “wholesale”, “organic”, “artisan”, or “handmade”. Use them naturally within your title and first 100 words.
        </p>
        <ul className="list-disc list-inside text-xl leading-relaxed text-gray-700 italic space-y-3 font-inter">
          <li>Start with a <strong>seed keyword</strong> — e.g., “handloom scarf”.</li>
          <li>Add <strong>modifiers</strong> that describe use or market: “bulk”, “fair trade”.</li>
          <li>Include <strong>local relevance</strong>: “Australia”, “eco-friendly home décor”.</li>
        </ul>
      </section>

      <section id="section-6">
        <h4 className="text-3xl font-semibold leading-tight text-gray-900 font-inter">
          6. Templates & examples (multiple categories)
        </h4>
        <p className="text-xl leading-relaxed text-gray-700 italic font-inter">
          Use these quick-fill templates to structure your product descriptions:
        </p>
        <div className="space-y-6">
          <div className="p-4 bg-gray-50 rounded-lg border">
            <h5 className="font-semibold text-gray-800">Textiles</h5>
            <p className="text-lg text-gray-700 italic">Handloom Cotton Throw: Naturally Dyed, 130x180cm</p>
            <p className="text-gray-600 italic">A breathable, handwoven cotton throw crafted in [Region]. MOQ 20 | Lead time 25 days.</p>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg border">
            <h5 className="font-semibold text-gray-800">Jewellery</h5>
            <p className="text-lg text-gray-700 italic">Sterling Silver Lotus Pendant: Hand-Polished, 45 cm</p>
            <p className="text-gray-600 italic">Lightweight, oxidised pendant made by [Artisan group]. MOQ 50 | Ethical silver sourcing.</p>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg border">
            <h5 className="font-semibold text-gray-800">Home Décor</h5>
            <p className="text-lg text-gray-700 italic">Brass Diya Lamp: Hand-Finished, 10 cm</p>
            <p className="text-gray-600 italic">Solid brass diya with natural patina, cast in [Town]. MOQ 30 | FOB Chennai.</p>
          </div>
        </div>
      </section>

      <section id="section-7">
        <h4 className="text-3xl font-semibold leading-tight text-gray-900 font-inter">
          7. Photography + description alignment
        </h4>
        <p className="text-xl leading-relaxed text-gray-700 italic font-inter">
          Your images and copy should tell one unified story. Use descriptive captions and ensure product photos reflect your listed claims.
        </p>
        <ul className="list-disc list-inside text-xl leading-relaxed text-gray-700 italic space-y-3 font-inter">
          <li>5 images minimum: hero, detail, texture, packaging, lifestyle.</li>
          <li>Use consistent naming & alt-text with focus keywords.</li>
        </ul>
      </section>

      <section id="section-8">
        <h4 className="text-3xl font-semibold leading-tight text-gray-900 font-inter">
          8. Pricing, shipping & returns: what to include in copy
        </h4>
        <ul className="list-disc list-inside text-xl leading-relaxed text-gray-700 italic space-y-3 font-inter">
          <li>State currency and pricing model: “INR 450 / FOB Chennai”.</li>
          <li>Clarify MOQ, samples, and production timeline.</li>
          <li>Include return/refund policies briefly with link to details.</li>
        </ul>
      </section>

      <section id="section-9">
        <h4 className="text-3xl font-semibold leading-tight text-gray-900 font-inter">
          9. A/B testing, analytics & iterating descriptions
        </h4>
        <p className="text-xl leading-relaxed text-gray-700 italic font-inter">
          Track how your copy performs: test alternative headlines or bullet formats and monitor conversion rate changes.
        </p>
      </section>

      <section id="section-10">
        <h4 className="text-3xl font-semibold leading-tight text-gray-900 font-inter">
          10. Quick checklist & launch playbook
        </h4>
        <ul className="list-disc list-inside text-xl leading-relaxed text-gray-700 italic space-y-3 font-inter">
          <li>Title includes main keyword + unique trait</li>
          <li>Specs complete: materials, MOQ, lead time</li>
          <li>Pricing, shipping, and CTA clearly stated</li>
          <li>5+ photos with alt-text & consistent story</li>
        </ul>
      </section>

      <div className="bg-gray-50 p-6 rounded-lg border-t-4 border-gray-200">
        <h4 className="text-2xl font-semibold mb-2">Final Notes & Resources</h4>
        <p className="text-xl leading-relaxed text-gray-700 italic font-inter">
          Crafting effective descriptions is a learnable skill. Use this framework, test variations, and track performance. Explore the <strong>Setu Store Template Library</strong> for ready-to-use copy formats and join our “Listing to Landing” seller workshop for live reviews.
        </p>
      </div>
    </div>
  );
};

export default CraftProductDescription;
