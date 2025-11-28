import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectAllCategories } from "../store/blogSlice";

const RecentlyAddedBlogs = () => {
  const categories = useSelector(selectAllCategories);

  const recentBlogs = useMemo(() => {
    const allBlogs = categories.flatMap((category) =>
      category.blogs.map((blog) => ({
        ...blog,
        category: category.name,
        categoryslug: category.slug,
      }))
    );

    // Sort by date (newest first)
    allBlogs.sort((a, b) => new Date(b.date) - new Date(a.date));

    // Get top 5
    return allBlogs.slice(0, 5);
  }, [categories]);

  if (!recentBlogs.length) return null;

  return (
    <section className="py-10 border-t border-gray-200 mt-10">
      <h2 className="text-3xl font-semibold mb-6 text-center"
      style={{
        fontFamily: "'DM Serif Display', serif",
        letterSpacing: "-1px",
        lineHeight: "1.1",
      }}>
        Recently Added Blogs
      </h2>

      {/* Scrollable container */}
      <div className="relative">
        <div
          className="flex overflow-x-auto space-x-5 px-4 pb-3 scrollbar-hide snap-x snap-mandatory scroll-smooth"
          style={{ scrollBehavior: "smooth" }}
        >
          {recentBlogs.map((blog) => (
            <Link
              key={blog.slug}
              to={`/${blog.categoryslug}/${blog.slug}`}
              className="group flex-shrink-0 w-72 rounded-xl overflow-hidden shadow hover:shadow-lg transition-shadow duration-300 snap-center"
            >
              <img
                src={blog.thumbnail}
                alt={blog.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4">
                <h3 className="text-lg font-medium group-hover:text-teal-700 line-clamp-2">
                  {blog.title}
                </h3>
                <p className="text-sm text-gray-500 mt-2">
                  {new Date(blog.date).toLocaleDateString()}
                </p>
                <p className="text-xs text-gray-400 mt-1 italic">
                  {blog.category}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentlyAddedBlogs;
