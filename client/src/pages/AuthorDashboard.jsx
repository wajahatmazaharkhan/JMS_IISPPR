import { useLocation } from 'react-router-dom';
import useArticles from '../hooks/useArticles';

const AuthorDashboard = () => {
  const location = useLocation();
  const { articles } = useArticles();
  const authorName = 'Alice Smith'; // Dummy author
  const myArticles = articles.filter(a => a.author === authorName);
  const submitted = location.state && location.state.submitted;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Author Dashboard</h1>
      {submitted && (
        <div className="mb-4 bg-green-50 border border-green-200 text-green-800 rounded p-3">
          Article Submitted Successfully!
        </div>
      )}
      <h2 className="text-lg font-semibold mb-2">My Articles</h2>
      <div className="space-y-4">
        {myArticles.length === 0 ? (
          <div className="text-gray-500">No articles submitted yet.</div>
        ) : (
          myArticles.map(article => (
            <div key={article.id} className="bg-white rounded shadow p-4 border border-blue-100">
              <div className="flex justify-between items-center mb-1">
                <span className="font-semibold text-blue-900">{article.title}</span>
                <span className="text-xs px-2 py-1 rounded bg-blue-100 text-blue-700 ml-2">{article.status}</span>
              </div>
              <div className="text-gray-600 text-sm mb-1">Keywords: {article.keywords.join(', ')}</div>
              <div className="text-gray-700 text-sm">{article.abstract}</div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AuthorDashboard; 