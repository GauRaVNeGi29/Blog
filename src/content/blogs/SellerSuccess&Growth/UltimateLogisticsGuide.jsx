import React from "react";

const UltimateLogisticsGuide = () => {
  const sections = [
    "Understanding Global Logistics for Indian Sellers",
    "Why Choosing the Right Logistics Partner Matters",
    "Step-by-Step: How to Ship Internationally with FedEx",
    "Customs, Duties, and Compliance, Simplified",
    "Packaging and Labeling for International Shipping",
    "Tracking, Insurance, and Delivery Guarantees",
    "Reducing Costs and Delays in Cross-Border Trade",
    "Building Customer Trust Through Reliable Logistics",
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-16 space-y-12 font-inter">
      {/* Title */}
      <h3 className="text-4xl font-semibold leading-tight text-gray-900 font-inter">
        The Ultimate Logistics Guide for Indian Sellers Expanding Overseas
      </h3>

      {/* Introduction */}
      <p className="text-xl leading-relaxed text-gray-700 italic font-inter">
        Every great global brand thrives on one invisible engine, logistics.
        For Indian sellers stepping into international markets, mastering
        cross-border shipping is as critical as product quality or pricing.  
        <br />
        <br />
        The good news? Global logistics providers like{" "}
        <strong>FedEx</strong> make it easier than ever to reach buyers across
        Australia, the U.S., and Europe with reliable, fast, and transparent
        delivery. This guide walks you through every step of international
        shipping, from packaging and customs paperwork to cost optimization and
        customer satisfaction.
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
          1. Understanding Global Logistics for Indian Sellers
        </h4>
        <p className="text-xl leading-relaxed text-gray-700 italic font-inter">
          Logistics is the bridge between your workshop in India and the store
          shelves of Sydney or New York. It covers packaging, labeling, shipping
          documentation, customs clearance, and delivery tracking.  
          <br />
          <br />
          For small and medium Indian exporters, understanding this chain helps
          avoid shipment delays, penalties, and unhappy buyers.  
          <strong>FedEx</strong> offers an end-to-end ecosystem, from pickup
          and customs support to last-mile delivery, ideal for sellers using
          marketplaces like <strong>Setu Store</strong> to reach global
          retailers.
        </p>
      </div>

      {/* Section 2 */}
      <div>
        <h4
          id="section-2"
          className="text-3xl font-semibold leading-tight text-gray-900 font-inter my-10"
        >
          2. Why Choosing the Right Logistics Partner Matters
        </h4>
        <p className="text-xl leading-relaxed text-gray-700 italic font-inter">
          Not all logistics partners are built equal. The right partner ensures
          faster deliveries, transparent tracking, lower losses, and fewer
          customs headaches.  
          <br />
          <br />
          <strong>FedEx Advantage:</strong> With a strong global presence in
          over 220 countries, FedEx provides shipping solutions tailored to
          businesses of all scales. Their services include{" "}
          <em>FedEx International Priority®</em> for fast delivery and{" "}
          <em>FedEx International Economy®</em> for cost-efficient shipping.
          <br />
          <br />
          The reliability of FedEx gives international buyers the confidence
          that their orders will arrive on time, a key factor in repeat
          business.
        </p>
      </div>

      {/* Section 3 */}
      <div>
        <h4
          id="section-3"
          className="text-3xl font-semibold leading-tight text-gray-900 font-inter my-10"
        >
          3. Step-by-Step: How to Ship Internationally with FedEx
        </h4>
        <p className="text-xl leading-relaxed text-gray-700 italic font-inter">
          Here’s a quick roadmap for Indian sellers:  
          <br />
          <br />
          <strong>Step 1:</strong> Create a FedEx business account to access
          international rates and pickup scheduling.  
          <br />
          <strong>Step 2:</strong> Prepare commercial invoices, packing lists,
          and export declarations (FedEx provides templates).  
          <br />
          <strong>Step 3:</strong> Book pickup online or drop parcels at the
          nearest FedEx location.  
          <br />
          <strong>Step 4:</strong> Track shipments in real time through the
          FedEx app or dashboard integrated with Setu Store.  
          <br />
          <strong>Step 5:</strong> Deliver confidently, FedEx handles customs
          clearance and proof-of-delivery documentation automatically.
        </p>
      </div>

      {/* Section 4 */}
      <div>
        <h4
          id="section-4"
          className="text-3xl font-semibold leading-tight text-gray-900 font-inter my-10"
        >
          4. Customs, Duties, and Compliance — Simplified
        </h4>
        <p className="text-xl leading-relaxed text-gray-700 italic font-inter">
          Customs clearance is often the most intimidating part of export
          logistics. Missing or incorrect documentation can lead to costly
          delays.  
          <br />
          <br />
          <strong>FedEx simplifies this</strong> through automated customs data
          management. Sellers can upload invoices and product details digitally,
          and FedEx’s clearance teams handle coordination with local authorities
          in the destination country.  
          <br />
          <br />
          Always include accurate HS codes, declared values, and product
          descriptions. For handcrafted items or textiles, ensure material
          composition and country-of-origin details are clearly mentioned.
        </p>
      </div>

      {/* Section 5 */}
      <div>
        <h4
          id="section-5"
          className="text-3xl font-semibold leading-tight text-gray-900 font-inter my-10"
        >
          5. Packaging and Labeling for International Shipping
        </h4>
        <p className="text-xl leading-relaxed text-gray-700 italic font-inter">
          Well-packed goods reduce damage risk and elevate professionalism.  
          <br />
          <br />
          <strong>FedEx Tip:</strong> Use strong corrugated boxes, bubble wrap,
          and inner cushioning. Avoid loose space and ensure product labels are
          readable and weatherproof. Include “Handle With Care” or “Fragile”
          labels where needed.  
          <br />
          <br />
          You can even request <strong>FedEx packaging supplies</strong> or
          eco-friendly alternatives to align with sustainability practices,
          increasingly important to overseas buyers.
        </p>
      </div>

      {/* Section 6 */}
      <div>
        <h4
          id="section-6"
          className="text-3xl font-semibold leading-tight text-gray-900 font-inter my-10"
        >
          6. Tracking, Insurance, and Delivery Guarantees
        </h4>
        <p className="text-xl leading-relaxed text-gray-700 italic font-inter">
          Tracking transparency builds buyer trust. FedEx’s global tracking
          system provides real-time visibility from pickup to doorstep.  
          <br />
          <br />
          For high-value shipments, consider{" "}
          <strong>FedEx Declared Value Advantage</strong> or insurance
          protection. These tools safeguard your shipments against damage or
          loss, ensuring peace of mind and business continuity.
        </p>
      </div>

      {/* Section 7 */}
      <div>
        <h4
          id="section-7"
          className="text-3xl font-semibold leading-tight text-gray-900 font-inter my-10"
        >
          7. Reducing Costs and Delays in Cross-Border Trade
        </h4>
        <p className="text-xl leading-relaxed text-gray-700 italic font-inter">
          Shipping costs often eat into margins, but strategic planning helps.
          <br />
          <br />
          <strong>Tips:</strong>
          <br />
          • Consolidate orders into fewer, larger shipments. <br /> 
          • Use{" "}
          <em>FedEx International Economy®</em> for bulk non-urgent deliveries.  <br />
          • Optimize packaging weight and dimensions to avoid volumetric  
          charges.  <br />
          • Ensure all paperwork is accurate to prevent customs holds.  
          <br />
          <br />
          With Setu Store’s FedEx integration, sellers can compare shipping
          rates, schedule pickups, and manage logistics right from their
          dashboard, saving time and cost.
        </p>
      </div>

      {/* Section 8 */}
      <div>
        <h4
          id="section-8"
          className="text-3xl font-semibold leading-tight text-gray-900 font-inter my-10"
        >
          8. Building Customer Trust Through Reliable Logistics
        </h4>
        <p className="text-xl leading-relaxed text-gray-700 italic font-inter">
          Buyers value reliability more than speed. Timely, damage-free delivery
          speaks volumes about your professionalism.  
          <br />
          <br />
          <strong>FedEx’s reputation</strong> for consistency helps Indian
          sellers strengthen credibility abroad. Combine that with proactive
          tracking updates and branded unboxing experiences, and your logistics
          process itself becomes a competitive advantage.
        </p>
      </div>

      {/* Conclusion */}
      <h4
        id="conclusion"
        className="text-3xl font-semibold leading-tight text-gray-900 font-inter mt-12"
      >
        Delivering Indian Excellence Worldwide
      </h4>
      <p className="text-xl leading-relaxed text-gray-700 italic font-inter">
        For Indian exporters, logistics isn’t just a back-end task, it’s a
        brand experience. With FedEx and Setu Store working together, you can
        simplify cross-border trade, ship smarter, and deliver your craft with
        confidence.  
        <br />
        <br />
        Every shipment that leaves India carries more than a product, it carries
        the story of skill, culture, and quality. Make sure it reaches the world
        in perfect shape, on time, every time.
      </p>
    </div>
  );
};

export default UltimateLogisticsGuide;
