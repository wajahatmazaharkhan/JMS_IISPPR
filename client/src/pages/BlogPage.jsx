import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import blogsData from '../data/blogs';
import BlogCard from '../components/BlogCard';

const BlogPage = () => {
  const [blogs, setBlogs] = useState(blogsData);
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');

  const handleDelete = (id) => {
    setBlogs((prev) => prev.filter((blog) => blog.id !== id));
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-900 mb-8">Blog</h1>
      <div className="grid gap-8 md:grid-cols-2">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-lg p-6 flex flex-col gap-2 border border-blue-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-1">
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">{blog.author}</span>
              <span className="text-gray-400 text-xs">{new Date(blog.date).toLocaleDateString()}</span>
            </div>
            <h2 className="text-xl font-bold text-blue-800 mb-1">{blog.title}</h2>
            <div className="text-gray-700 text-base leading-relaxed mb-2">{blog.summary}</div>
            <button className="self-start mt-auto text-sm font-semibold text-blue-700 hover:text-indigo-700 hover:underline transition">Read More</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage; 