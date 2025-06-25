import { useState } from 'react';

const WriteContent = () => {
  const [tab, setTab] = useState('paper');
  const [success, setSuccess] = useState('');
  const [paperForm, setPaperForm] = useState({ title: '', abstract: '', keywords: '', pdf: null });
  const [blogForm, setBlogForm] = useState({ title: '', content: '', image: null });

  const handlePaperChange = (e) => {
    const { name, value, files } = e.target;
    setPaperForm((prev) => ({ ...prev, [name]: files ? files[0] : value }));
  };
  const handleBlogChange = (e) => {
    const { name, value, files } = e.target;
    setBlogForm((prev) => ({ ...prev, [name]: files ? files[0] : value }));
  };

  const handlePaperSubmit = (e) => {
    e.preventDefault();
    setSuccess('Research paper submitted successfully!');
    setPaperForm({ title: '', abstract: '', keywords: '', pdf: null });
    setTimeout(() => setSuccess(''), 3000);
  };
  const handleBlogSubmit = (e) => {
    e.preventDefault();
    setSuccess('Blog post submitted successfully!');
    setBlogForm({ title: '', content: '', image: null });
    setTimeout(() => setSuccess(''), 3000);
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white rounded-xl shadow mt-10">
      <div className="flex gap-4 mb-8">
        <button
          className={`px-4 py-2 rounded-t font-semibold ${tab === 'paper' ? 'bg-blue-700 text-white' : 'bg-gray-100 text-gray-700'}`}
          onClick={() => setTab('paper')}
        >
          Research Paper
        </button>
        <button
          className={`px-4 py-2 rounded-t font-semibold ${tab === 'blog' ? 'bg-blue-700 text-white' : 'bg-gray-100 text-gray-700'}`}
          onClick={() => setTab('blog')}
        >
          Blog
        </button>
      </div>
      {success && <div className="mb-4 bg-green-50 border border-green-200 text-green-800 rounded p-3 text-center">{success}</div>}
      {tab === 'paper' ? (
        <form className="space-y-4" onSubmit={handlePaperSubmit}>
          <div>
            <label className="block font-medium mb-1">Title</label>
            <input name="title" value={paperForm.title} onChange={handlePaperChange} className="w-full border rounded px-3 py-2" />
          </div>
          <div>
            <label className="block font-medium mb-1">Abstract</label>
            <textarea name="abstract" value={paperForm.abstract} onChange={handlePaperChange} className="w-full border rounded px-3 py-2" rows={3} />
          </div>
          <div>
            <label className="block font-medium mb-1">Keywords (comma separated)</label>
            <input name="keywords" value={paperForm.keywords} onChange={handlePaperChange} className="w-full border rounded px-3 py-2" />
          </div>
          <div>
            <label className="block font-medium mb-1">PDF Upload</label>
            <input name="pdf" type="file" accept="application/pdf" onChange={handlePaperChange} className="w-full" />
          </div>
          <button type="submit" className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800">Submit Paper</button>
        </form>
      ) : (
        <form className="space-y-4" onSubmit={handleBlogSubmit}>
          <div>
            <label className="block font-medium mb-1">Title</label>
            <input name="title" value={blogForm.title} onChange={handleBlogChange} className="w-full border rounded px-3 py-2" />
          </div>
          <div>
            <label className="block font-medium mb-1">Content</label>
            <textarea name="content" value={blogForm.content} onChange={handleBlogChange} className="w-full border rounded px-3 py-2" rows={5} />
          </div>
          <div>
            <label className="block font-medium mb-1">Image Upload (optional)</label>
            <input name="image" type="file" accept="image/*" onChange={handleBlogChange} className="w-full" />
          </div>
          <button type="submit" className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800">Submit Blog</button>
        </form>
      )}
    </div>
  );
};

export default WriteContent; 