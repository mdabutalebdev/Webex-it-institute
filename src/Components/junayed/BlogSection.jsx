import React, { useEffect, useState } from "react";
import BlogPostCard from "./BlogCard";
import Sidebar from "./BlogSidebar";

const BlogSection = () => {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    fetch("/blogData.json")
      .then((res) => res.json())
      .then((data) => setBlogData(data))
  }, []);

  const latestPosts = blogData.slice(0, 3);

  return (
    <div>
      {/* Hero And Text */}
      <section className="relative w-full h-[450px] bg-cover bg-center bg-gray-100">
        <div className="absolute inset-0 bg-opacity-50 flex flex-col justify-center items-center text-black text-center p-4">
          <div className="absolute top-8 left-8 text-sm">
            <span>Home</span>
            <span className="mx-2">/</span>
            <span className="font-semibold">About us</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Latest news <br /> are on top all times
          </h1>
        </div>
      </section>

      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-12">
            {/* Blog Card */}
            <main className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogData.map((post) => (
                  <BlogPostCard key={post.id} post={post} />
                ))}
              </div>
            </main>

            {/* Blog Sidebar */}
            <div className="mt-12 lg:mt-0">
              <Sidebar latestPosts={latestPosts} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
