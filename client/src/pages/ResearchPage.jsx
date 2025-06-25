const ResearchPage = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Featured Research Articles</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-semibold text-lg mb-2">Research Article 1</h2>
          <p className="text-gray-600 mb-2">Author: Jane Doe</p>
          <p className="text-gray-700">A summary of the research article goes here. This is a featured article.</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-semibold text-lg mb-2">Research Article 2</h2>
          <p className="text-gray-600 mb-2">Author: John Smith</p>
          <p className="text-gray-700">A summary of the research article goes here. This is another featured article.</p>
        </div>
      </div>
    </div>
  );
};

export default ResearchPage; 