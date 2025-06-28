import React from 'react';

// Static data for journal issues
const issues = [
  {
    volume: 1,
    month: 'May',
    year: 2025,
    articles: [
      {
        id: 1,
        title: 'AI and Law: Emerging Trends',
        author: 'Alice Smith',
        abstract: 'An overview of artificial intelligence applications in legal research and practice.'
      },
      {
        id: 2,
        title: 'Diplomacy in the Digital Age',
        author: 'John Doe',
        abstract: 'How technology is reshaping international relations and diplomacy.'
      },
      {
        id: 3,
        title: 'Public Policy and Data Privacy',
        author: 'Priya Kumar',
        abstract: 'Examining the intersection of public policy and data privacy regulations.'
      }
    ]
  },
  {
    volume: 2,
    month: 'June',
    year: 2025,
    articles: [
      {
        id: 4,
        title: 'Blockchain for Government Transparency',
        author: 'Emily Zhang',
        abstract: 'Exploring blockchain technology for transparent governance.'
      },
      {
        id: 5,
        title: 'Cybersecurity Law and Policy',
        author: 'Michael Brown',
        abstract: 'A review of cybersecurity legal frameworks and policy challenges.'
      }
    ]
  }
];

// Static editorial board data
const editorialBoard = [
  { name: 'Dr. Abuzar Nomani', desc: 'Assoc. Prof. – Business Management, CV Raman Global University' },
  { name: 'Dr. Mayank Kumar', desc: 'Computer Science' },
  { name: 'Dr. Varun Kumar', desc: 'Commerce, Arunachal University of Studies' },
  { name: 'Dr. Faizan Khan Sherwani', desc: 'Management, Jamia Hamdard' },
  { name: 'Dr. Rahila Rais', desc: 'Hindi, AMU' },
  { name: 'Dr. Mohd Farooq Khan', desc: 'Literary Critic' },
  { name: 'Dr. Kashif Raees', desc: 'Science, Chandigarh University' },
];

const EditionsPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-serif font-bold text-center text-slate-800 mb-10">Journal Issues (2025)</h1>
      <div className="space-y-10">
        {issues.map((issue) => {
          const articleCount = issue.articles.length;
          const isValidCount = articleCount >= 2 && articleCount <= 5;
          return (
            <div key={issue.volume} className="bg-white border border-slate-200 rounded-lg shadow p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-lg font-semibold text-slate-700">Volume {issue.volume}</span>
                  <span className="ml-3 px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-medium uppercase">{issue.month} {issue.year}</span>
                </div>
                <span className="text-sm text-slate-500">{articleCount} Articles</span>
              </div>
              {!isValidCount && (
                <div className="mb-4 p-3 bg-yellow-50 border border-yellow-200 text-yellow-800 rounded">
                  Warning: Each issue should have between 2 and 5 research articles. This issue currently has {articleCount}.
                </div>
              )}
              <div className="divide-y divide-slate-100 mb-6">
                {issue.articles.map((article) => (
                  <div key={article.id} className="py-4 first:pt-0 last:pb-0">
                    <h2 className="text-xl font-serif font-semibold text-slate-900 mb-1">{article.title}</h2>
                    <div className="text-sm text-slate-600 mb-1">By {article.author}</div>
                    <div className="text-slate-700 text-sm mb-2">{article.abstract}</div>
                  </div>
                ))}
              </div>
              {/* Editorial Board Section */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-slate-800 mb-3">Editorial Board</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {editorialBoard.map((member, idx) => (
                    <div key={idx} className="bg-slate-50 border border-slate-100 rounded p-3">
                      <div className="font-medium text-slate-700">{member.name}</div>
                      <div className="text-xs text-slate-500">{member.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EditionsPage; 