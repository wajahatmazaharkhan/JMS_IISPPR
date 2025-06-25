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
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Blog</h1>
      <p>All users can view posts. Only Super Admin can delete.</p>
      {blogs.length === 0 ? (
        <p className="text-gray-500">No blog posts available.</p>
      ) : (
        blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} onDelete={isAdmin ? handleDelete : undefined} />
        ))
      )}
    </div>
  );
};

export default BlogPage; 