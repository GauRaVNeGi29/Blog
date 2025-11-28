import React from "react";

const DigitalTransformationIndia = () => {
  const sections = [
    "The Digital Retail Revolution: India’s New Era of Commerce",
    "Why the Shift Happened: Technology Meets Consumer Behavior",
    "The Rise of Marketplaces, The New Global Bazaars",
    "Empowering Indian Sellers with Digital Tools",
    "The Role of Payment and Logistics Innovation",
    "How AI and Data Are Redefining Online Selling",
    "Offline to Online: Success Stories from Indian Sellers",
    "Preparing for the Next Digital Leap",
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-16 space-y-12 font-inter">
      {/* Title */}
      <h3 className="text-4xl font-semibold leading-tight text-gray-900 font-inter">
        From Bazaar to Browser: How Commerce in India Transformed from Offline to Digital
      </h3>

      {/* Intro */}
      <p className="text-xl leading-relaxed text-gray-700 italic font-inter">
        Over the past decade, India has witnessed a monumental transformation —
        from the buzzing local bazaars to powerful online marketplaces that
        connect Indian sellers with global buyers.  
        <br />
        <br />
        What began as a slow digital experiment has now become the heartbeat of
        modern trade. Whether you’re selling textiles from Jaipur, spices from
        Kerala, or handicrafts from Gujarat, digital platforms have unlocked a
        new borderless economy, where your next customer could be in Sydney,
        London, or Toronto.
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
          1. The Digital Retail Revolution: India’s New Era of Commerce
        </h4>
        <p className="text-xl leading-relaxed text-gray-700 italic font-inter">
          India’s digital revolution began not in boardrooms, but on mobile
          screens. Affordable internet, widespread smartphone access, and the
          “Digital India” initiative brought millions of sellers online.  
          <br />
          <br />
          By 2025, over 900 million Indians are expected to be digitally active,
          making eCommerce one of the fastest-growing industries globally.  
          The transformation is not just technological, it’s cultural. Buying
          and selling online has become a lifestyle choice.
        </p>
      </div>

      {/* Section 2 */}
      <div>
        <h4
          id="section-2"
          className="text-3xl font-semibold leading-tight text-gray-900 font-inter my-10"
        >
          2. Why the Shift Happened: Technology Meets Consumer Behavior
        </h4>
        <p className="text-xl leading-relaxed text-gray-700 italic font-inter">
          As consumers began spending more time online, their shopping habits
          evolved. They wanted convenience, transparency, and access to global
          products at local prices.  
          <br />
          <br />
          The emergence of digital wallets like <strong>Paytm</strong>, UPI, and
          instant delivery systems changed how people interacted with commerce.
          This shift was further accelerated during the pandemic, when physical
          stores shut down, and digital platforms became the only open
          marketplace.  
          <br />
          <br />
          For sellers, this was both a challenge and an opportunity: adapt fast,
          or fade away.
        </p>
      </div>

      {/* Section 3 */}
      <div>
        <h4
          id="section-3"
          className="text-3xl font-semibold leading-tight text-gray-900 font-inter my-10"
        >
          3. The Rise of Marketplaces, The New Global Bazaars
        </h4>
        <p className="text-xl leading-relaxed text-gray-700 italic font-inter">
          Marketplaces like <strong>Amazon, Flipkart, Etsy</strong>, and{" "}
          <strong>Setu Store</strong> have become the new-age equivalents of the
          traditional Indian bazaar, full of diversity, storytelling, and
          craftsmanship.  
          <br />
          <br />
          What makes them revolutionary is their "democratization of access".
          Whether you’re a small weaver in Varanasi or a jewelry designer in
          Jaipur, digital marketplaces allow you to sell directly to global
          customers, without middlemen or expensive exports.
        </p>
      </div>

      {/* Section 4 */}
      <div>
        <h4
          id="section-4"
          className="text-3xl font-semibold leading-tight text-gray-900 font-inter my-10"
        >
          4. Empowering Indian Sellers with Digital Tools
        </h4>
        <p className="text-xl leading-relaxed text-gray-700 italic font-inter">
          The rise of SaaS platforms, analytics dashboards, and AI-driven
          marketing tools has empowered even small-scale sellers to compete with
          established brands.  
          <br />
          <br />
          With <strong>Setu Store</strong>, for instance, Indian sellers can:
          <br />
          • Create international-ready product listings  
          • Manage pricing in multiple currencies  
          • Access insights on trending global categories  
          • Integrate with logistics partners for cross-border shipping  
          <br />
          <br />
          The result? More control, more reach, and measurable growth.
        </p>
      </div>

      {/* Section 5 */}
      <div>
        <h4
          id="section-5"
          className="text-3xl font-semibold leading-tight text-gray-900 font-inter my-10"
        >
          5. The Role of Payment and Logistics Innovation
        </h4>
        <p className="text-xl leading-relaxed text-gray-700 italic font-inter">
          Smooth payments and dependable shipping are the backbone of online
          commerce.  
          <br />
          <br />
          With secure gateways like <strong>Razorpay</strong> and{" "}
          <strong>Stripe</strong>, sellers now receive payments directly in
          their accounts without manual intervention. Logistics partners like{" "}
          <strong>FedEx</strong>, <strong>Delhivery</strong>, and{" "}
          <strong>Shiprocket</strong> have built cross-border shipping networks
          that make global deliveries faster and trackable.
          <br />
          <br />
          This infrastructure has made global expansion achievable even for
          small Indian brands.
        </p>
      </div>

      {/* Section 6 */}
      <div>
        <h4
          id="section-6"
          className="text-3xl font-semibold leading-tight text-gray-900 font-inter my-10"
        >
          6. How AI and Data Are Redefining Online Selling
        </h4>
        <p className="text-xl leading-relaxed text-gray-700 italic font-inter">
          Artificial Intelligence is transforming how sellers manage their
          business online.  
          <br />
          <br />
          AI helps in "forecasting demand", "personalizing product
          recommendations", and "optimizing pricing" based on market trends.
          Sellers can analyze what products perform best in which regions and
          adjust their strategy in real time.
          <br />
          <br />
          On Setu Store, predictive analytics even help sellers decide when to
          restock or offer discounts, ensuring smarter inventory management and
          better customer satisfaction.
        </p>
      </div>

      {/* Section 7 */}
      <div>
        <h4
          id="section-7"
          className="text-3xl font-semibold leading-tight text-gray-900 font-inter my-10"
        >
          7. Offline to Online: Success Stories from Indian Sellers
        </h4>
        <p className="text-xl leading-relaxed text-gray-700 italic font-inter">
          Take, for example, <strong>Ananya Handlooms</strong> from Delhi. Once
          limited to local fairs, they now export to 12 countries through Setu
          Store, using digital listings, international logistics, and targeted
          campaigns.  
          <br />
          <br />
          Or <strong>Spice Cart India</strong>, a Kerala-based family business
          that grew its revenue 5x by going digital. Their products now reach
          global retailers who value authenticity and Indian quality.
        </p>
      </div>

      {/* Section 8 */}
      <div>
        <h4
          id="section-8"
          className="text-3xl font-semibold leading-tight text-gray-900 font-inter my-10"
        >
          8. Preparing for the Next Digital Leap
        </h4>
        <p className="text-xl leading-relaxed text-gray-700 italic font-inter">
          The next evolution of online marketplaces will be driven by immersive
          technologies like AR/VR shopping, voice commerce, and blockchain-based
          trade authentication.  
          <br />
          <br />
          Sellers who continuously adapt, invest in better visuals, sustainable
          packaging, and AI optimization, will lead the future of Indian
          digital commerce.
        </p>
      </div>

      {/* Conclusion */}
      <h4
        id="conclusion"
        className="text-3xl font-semibold leading-tight text-gray-900 font-inter mt-12"
      >
        The Future Is Digital and Borderless
      </h4>
      <p className="text-xl leading-relaxed text-gray-700 italic font-inter">
        The Indian marketplace is no longer confined by walls or regions. It’s
        global, data-driven, and powered by technology.  
        <br />
        <br />
        As the line between offline and online disappears, sellers who combine
        the authenticity of Indian craftsmanship with the agility of digital
        tools will lead this new global era.  
        <br />
        <br />
        From bazaar to browser, the journey has only just begun.
      </p>
    </div>
  );
};

export default DigitalTransformationIndia;
