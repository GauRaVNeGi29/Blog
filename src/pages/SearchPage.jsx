// src/pages/SearchPage.jsx
import React from "react";
import { useSearchParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const query = (searchParams.get("s") || "").toLowerCase();

  const categories = useSelector((state) => state.blogs.categories);

  // Flatten blogs with category data
  const allBlogs = categories.flatMap((category) =>
    category.blogs.map((blog) => ({
      ...blog,
      category: category.name,
      categoryslug: category.slug,
    }))
  );

  // Filter by search
  const filteredBlogs = allBlogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(query) ||
      blog.author.toLowerCase().includes(query) ||
      blog.category.toLowerCase().includes(query)
  );

  const totalResults = filteredBlogs.length;

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">

      {/* SEO */}
      <Helmet>
        <title>
          {query
            ? `Search results for "${query}" | Setu Store Blog`
            : "Search | Setu Store Blog"}
        </title>

        <meta
          name="description"
          content={
            query
              ? `Found ${totalResults} articles for "${query}" on Setu Store Blog.`
              : "Search articles on Setu Store Blog."
          }
        />

        <meta
          name="keywords"
          content={
            query
              ? `search, ${query}, Setu Store blog`
              : "search, Setu Store blog"
          }
        />
      </Helmet>

      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-2">
          Results for “{query || "..."}”
        </h1>

        {query && (
          <p className="text-gray-500 text-sm">
            {totalResults} {totalResults === 1 ? "Article" : "Articles"} found
          </p>
        )}
      </div>

      {/* No Query */}
      {query === "" ? (
        <p className="text-gray-500 text-center">
          Please enter a search term above.
        </p>
      ) : totalResults > 0 ? (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredBlogs.map((blog) => (
            <div
              key={blog.slug}
              className="group bg-white rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <Link to={`/${blog.categoryslug}/${blog.slug}`}>
                  <img
                    src={blog.thumbnail}
                    alt={blog.title}
                    className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </Link>
              </div>

              {/* Content */}
              <div className="px-3 py-4">
                <Link to={`/${blog.categoryslug}`}>
                  <p className="text-xs tracking-wider font-semibold text-gray-600 uppercase border-b-2 border-teal-600 inline-block">
                    {blog.category}
                  </p>
                </Link>

                <Link to={`/${blog.categoryslug}/${blog.slug}`}>
                  <h2 className="text-lg font-medium text-gray-900 mt-2 group-hover:text-teal-700 transition-colors line-clamp-2">
                    {blog.title}
                  </h2>

                  <p className="text-sm text-gray-600 mt-1">
                    By{" "}
                    <span className="text-teal-700 font-medium hover:underline cursor-pointer">
                      {blog.author}
                    </span>
                  </p>

                  {blog.date && (
                    <p className="text-xs text-gray-400 mt-1">
                      {blog.date}
                    </p>
                  )}
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-center">
          No results found for “{query}”.
        </p>
      )}
    </div>
  );
};

export default SearchPage;
