import React from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import SEO from "@/components/SEO";
import WriteForUsLink from "@/components/WriteForUsLink";
import RecentlyAddedBlogs from "@/components/RecentlyAddedBlogs";

const BlogPage = () => {
  const { categoryslug, blogslug } = useParams();

  const decodedCategorySlug = decodeURIComponent(categoryslug);
  const decodedBlogSlug = decodeURIComponent(blogslug);

  // Get all categories
  const categories = useSelector((state) => state.blogs.categories);

  // Find category by slug
  const category = categories.find(
    (cat) => cat.slug === decodedCategorySlug
  );

  // If no category → invalid URL
  if (!category) {
    return (
      <p className="text-center mt-20 text-lg text-gray-500">
        Category not found.
      </p>
    );
  }

  // Find blog inside this category
  const blog = category.blogs.find((b) => b.slug === decodedBlogSlug);

  if (!blog) {
    return (
      <p className="text-center mt-20 text-lg text-gray-500">
        Blog not found.
      </p>
    );
  }

  const { seo } = blog;
  const BlogContent = blog.component;

  return (
    <div className="max-w-5xl mx-auto px-4 py-16">

      {/* SEO */}
      <SEO
        title={seo?.title || blog.title}
        description={seo?.description || blog.title}
        keywords={seo?.keywords || ""}
        image={seo?.image || blog.mainImage}
        url={`https://blog.setustore.com/${category.slug}/${blog.slug}`}
      />

      {/* Breadcrumb */}
      <p className="text-md text-gray-600 font-medium uppercase tracking-wide mb-3 text-center">
        <Link
          to={`/${category.slug}`}
          className="hover:text-[#00d084] transition"
        >
          Category / {category.name}
        </Link>
      </p>

      {/* Blog Title */}
      <h1
        className="text-3xl md:text-5xl font-extrabold mb-8 text-gray-900 text-center"
        style={{
          fontFamily: "'DM Serif Display', serif",
          letterSpacing: "-0.5px",
          lineHeight: "1.1",
        }}
      >
        {blog.title}
      </h1>

      {/* Main Image */}
      {blog.mainImage && (
        <div className="mb-6 flex justify-center">
          <img
            src={blog.mainImage}
            alt={blog.title}
            className="w-full max-w-4xl h-auto rounded-xl"
          />
        </div>
      )}

      {/* Meta */}
      <div className="text-center mb-12">
        <p className="text-gray-500 text-sm md:text-base tracking-wide flex justify-center items-center gap-2">
          <span>{blog.date}</span>
          {blog.author && (
            <>
              <span className="text-gray-400">•</span>
              <a href="https://setustore.com/">
                <span className="font-medium text-gray-700">
                  By {blog.author}
                </span>
              </a>
            </>
          )}
        </p>
      </div>

      {/* Blog Content */}
      {BlogContent && <BlogContent />}

      {/* Recently Added Blogs */}
      <RecentlyAddedBlogs
        currentBlogSlug={decodedBlogSlug}
        currentCategorySlug={decodedCategorySlug}
      />

      <WriteForUsLink />
    </div>
  );
};

export default BlogPage;
