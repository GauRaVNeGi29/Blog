import React from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCategoryBySlug } from "../store/blogSlice";
import SEO from "@/components/SEO";

const CategoryPage = () => {
  const { categoryslug } = useParams(); // get slug from URL
  const decodedSlug = decodeURIComponent(categoryslug);

  // Fetch category by slug
  const category = useSelector(selectCategoryBySlug(decodedSlug));
  const blogs = category?.blogs || [];

  const totalResults = blogs.length;

  const seoTitle = category
  ? `${category.name} Articles | Setu Store`
  : "Category | Setu Store";

const seoDescription = category
  ? `Explore ${category.name} articles on Setu Store. Discover tips, insights, and products related to ${category.name.toLowerCase()}.`
  : "Read articles on Setu Store.";

const seoKeywords = category
  ? `${category.name}, ${category.name.toLowerCase()} blog, Setu Store, handmade, artisanal`
  : "Setu Store, handmade, artisanal, blog";

const seoImage = category?.image || "/images/og-default.jpg"; // Optional: category image
const seoUrl = `https://www.setustore.com/${categoryslug}`;


  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {category && (
      <SEO
        title={seoTitle}
        description={seoDescription}
        keywords={seoKeywords}
        url={seoUrl}
        image={seoImage}
      />
    )}
      <div className="text-center mb-25">
        <p className="text-gray-500 text-sm mb-3 uppercase tracking-wider">
           Category / {category.name}
         </p>
         {/* Heading */}
         <h1 className="text-5xl font-bold mb-8" style={{ fontFamily: "'DM Serif Display', serif" }}>
           {category.name}
         </h1>
      </div>

      {totalResults > 0 ? (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <div
              key={blog.id || blog.slug}
              className="bg-white rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
                <div className="overflow-hidden">
                  <Link to={`/${category.slug}/${blog.slug}`}>
                  <img
                    src={blog.thumbnail}
                    alt={blog.title}
                    className="w-full h-52 object-cover hover:scale-105 transition-transform duration-500"
                  />
                  </Link>
                </div>
                <div className="px-3 py-4">
                  <Link to={`/${category.slug}`}>
                  <p className="text-xs tracking-wider font-semibold text-gray-600 hover:text-teal-700 uppercase border-b-2 border-teal-600 inline-block">
                    {category?.name}
                  </p>
                  </Link>
                  <Link to={`/${category.slug}/${blog.slug}`}>
                  <h2 className="text-lg font-medium text-gray-900 mt-2 hover:text-teal-700 transition-colors line-clamp-2">
                    {blog.title}
                  </h2>
                  <p className="text-sm text-gray-600 mt-1">
                    By{" "}
                    <span className="hover:text-teal-700 transition-all ease-in-out font-medium hover:underline cursor-pointer">
                      {blog.author}
                    </span>
                  </p>
                  {blog.date && (
                    <p className="text-xs text-gray-400 mt-1">{blog.date}</p>
                  )}
                  </Link>
                </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-center">
          No articles found in this category.
        </p>
      )}
    </div>
  );
};

export default CategoryPage;
