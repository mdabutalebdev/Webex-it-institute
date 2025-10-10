import React from 'react';
import { FiCalendar, FiEye, FiArrowRight } from 'react-icons/fi';

const BlogPostCard = ({ post }) => {
  return (
    <div className="card bg-base-100 shadow-lg border border-gray-200">
      <figure>
        <img src={post.imageUrl} alt={post.title} className="w-full h-56 object-cover" />
      </figure>
      <div className="card-body p-6">
        <div className="flex items-center text-xs text-gray-500 space-x-4 mb-3">
          <div className="flex items-center gap-1.5">
            <FiCalendar />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <FiEye />
            <span>{post.views.toLocaleString()} views</span>
          </div>
        </div>
        <h2 className="card-title text-lg font-bold text-gray-800 hover:text-blue-600 transition-colors">
          <a href="#">{post.title}</a>
        </h2>
        <p className="text-gray-600 text-sm mt-2">{post.excerpt}</p>
        <div className="card-actions mt-4">
          <a href="#" className="btn btn-ghost bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-semibold normal-case">
            Read more <FiArrowRight className="ml-1" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogPostCard;