import React from "react";
import { useSelector } from "react-redux";
import { selectAllCategories } from "../store/blogSlice";
import { useNavigate } from "react-router-dom";

const KeepBrowsing = () => {
  // Get categories from store
  const categories = useSelector((state) => selectAllCategories(state)) || [];
  const navigate = useNavigate();

  const goToCategory = (slug) => {
  navigate(`/${slug}`);
  // Ensure window scrolls to top
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
};


  return (
    <section id="more-articles" className="py-16 px-4 sm:px-6 md:px-12 lg:px-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10"
        style={{
        fontFamily: "'DM Serif Display', serif",
        letterSpacing: "-1px",
        lineHeight: "1.1",
      }}>
        Keep Browsing
      </h2>

      <div className="flex flex-wrap justify-center gap-6">
        {categories.map((category) => (
          <div
            key={category.slug}
            onClick={() => goToCategory(category.slug)}
            className="flex items-center justify-center px-6 py-3 bg-gray-100 hover:bg-teal-50 text-gray-800 hover:text-teal-700 font-semibold rounded-lg cursor-pointer transition-all duration-300 shadow-sm"
          >
            {category.name}
          </div>
        ))}
      </div>
    </section>
  );
};

export default KeepBrowsing;
