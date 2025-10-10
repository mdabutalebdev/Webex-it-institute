import React from 'react';
import { FiSearch } from 'react-icons/fi';

// ডামি ডেটা
const categories = [
  { name: 'Business', count: 6 },
  { name: 'HR and L&D', count: 5 },
  { name: 'Video & Tips', count: 5 },
];

const tags = [
  'data science', 'deep learning', 'education', 'language', 'learning', 
  'machine learning', 'tips', 'videos', 'web development'
];

const LatestPostItem = ({ post }) => (
  <div className="flex items-center gap-4">
    <div className="relative flex-shrink-0">
      <img src={post.imageUrl} alt={post.title} className="w-20 h-20 object-cover rounded-md" />
      <span className="absolute bottom-1 left-1 bg-black bg-opacity-60 text-white text-[10px] px-1.5 py-0.5 rounded">
        {post.category}
      </span>
    </div>
    <div>
      <h4 className="font-semibold text-sm text-gray-800 hover:text-blue-600 leading-tight">
        <a href="#">{post.title}</a>
      </h4>
      <p className="text-xs text-gray-500 mt-1">{post.date}</p>
    </div>
  </div>
);

const Sidebar = ({ latestPosts }) => {
  return (
    <aside className="space-y-10">
      <div>
        <h3 className="text-lg font-bold mb-4 text-gray-800">Search</h3>
        <div className="relative">
          <input type="text" placeholder="Search..." className="input input-bordered w-full bg-gray-50 pr-10" />
          <button className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-400 hover:text-blue-600">
            <FiSearch size={18} />
          </button>
        </div>
      </div>

      {/* Categories */}
      <div>
        <h3 className="text-lg font-bold mb-4 text-gray-800">Categories</h3>
        <ul className="space-y-3">
          {categories.map(cat => (
            <li key={cat.name} className="flex justify-between items-center text-gray-600 hover:text-blue-600">
              <a href="#">{cat.name}</a>
              <span>({cat.count})</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Posts */}
      <div>
        <h3 className="text-lg font-bold mb-4 text-gray-800">Latest Posts</h3>
        <div className="space-y-4">
          {latestPosts.map(post => (
            <LatestPostItem key={post.id} post={post} />
          ))}
        </div>
      </div>
      
      {/* Popular Tags */}
      <div>
        <h3 className="text-lg font-bold mb-4 text-gray-800">Popular Tags</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map(tag => (
            <a key={tag} href="#" className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1.5 rounded hover:bg-blue-600 hover:text-white transition-colors">
              {tag}
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;