import { useState } from 'react';
import useArticles from '../hooks/useArticles';

const EditorDashboard = () => {
  const { articles, updateArticleStatus } = useArticles();
  const [alert, setAlert] = useState(null);

  const handleAction = (id, action) => {
    updateArticleStatus(id, action === 'approve' ? 'Approved' : 'Rejected');
    setAlert({
      type: action === 'approve' ? 'success' : 'error',
      message: action === 'approve' ? 'Article approved.' : 'Article rejected and author notified.',
    });
    setTimeout(() => setAlert(null), 3000);
  };

  const submittedArticles = articles.filter(a => a.status === 'Submitted');

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Editor Dashboard</h1>
      {alert && (
        <div className={`mb-4 rounded p-3 border ${alert.type === 'success' ? 'bg-green-50 border-green-200 text-green-800' : 'bg-red-50 border-red-200 text-red-800'}`}>
          {alert.message}
        </div>
      )}
      <h2 className="text-lg font-semibold mb-2">Submitted Articles</h2>
      <div className="space-y-4">
        {submittedArticles.length === 0 ? (
          <div className="text-gray-500">No articles awaiting review.</div>
        ) : (
          submittedArticles.map(article => (
            <div key={article.id} className="bg-white rounded shadow p-4 border border-blue-100">
              <div className="flex justify-between items-center mb-1">
                <span className="font-semibold text-blue-900">{article.title}</span>
                <span className="text-xs px-2 py-1 rounded bg-blue-100 text-blue-700 ml-2">{article.status}</span>
              </div>
              <div className="text-gray-600 text-sm mb-1">By {article.author}</div>
              <div className="text-gray-700 text-sm mb-2">{article.abstract}</div>
              <div className="flex gap-2 mt-2">
                <button onClick={() => handleAction(article.id, 'approve')} className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700">Approve</button>
                <button onClick={() => handleAction(article.id, 'reject')} className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700">Reject</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default EditorDashboard; 