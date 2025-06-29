import React, { useState } from 'react';
import { Download, FileText } from 'lucide-react';
import { generateIssuePDF, downloadPDF } from '../utils/pdfExport';

// Static data for journal issues with complete content finalization fields
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
        abstract: 'An overview of artificial intelligence applications in legal research and practice, examining how AI technologies are transforming legal workflows, case analysis, and decision-making processes in contemporary legal systems.',
        keywords: ['Artificial Intelligence', 'Legal Technology', 'Machine Learning', 'Legal Research', 'Digital Law'],
        authorBio: 'Dr. Alice Smith is a Senior Research Fellow at the Institute of Legal Technology, specializing in AI applications in legal practice. She holds a Ph.D. in Computer Science and Law from Stanford University.',
        references: [
          'Smith, A. (2024). AI in Legal Practice: A Comprehensive Review. Journal of Legal Technology, 15(2), 45-67.',
          'Doe, J. (2023). Machine Learning Applications in Law. Harvard Law Review, 136(8), 1234-1256.',
          'Johnson, M. (2024). Ethical Considerations in AI-Assisted Legal Decision Making. Legal Ethics Quarterly, 12(1), 23-45.'
        ],
        ethicsDeclaration: true,
        plagiarismDeclaration: true,
        aiDisclosure: 'No AI-generated content was used in the preparation of this manuscript. All content was written by the author.',
        peerReviewed: true,
        copyEdited: true
      },
      {
        id: 2,
        title: 'Diplomacy in the Digital Age',
        author: 'John Doe',
        abstract: 'How technology is reshaping international relations and diplomacy, with a focus on digital diplomacy, cyber security in international relations, and the impact of social media on diplomatic practices.',
        keywords: ['Digital Diplomacy', 'International Relations', 'Cyber Security', 'Social Media', 'Foreign Policy'],
        authorBio: 'Prof. John Doe is the Director of International Relations at Georgetown University. He has served as a diplomatic advisor to the US State Department and published extensively on digital diplomacy.',
        references: [
          'Doe, J. (2024). Digital Diplomacy: New Frontiers. International Relations Journal, 28(3), 89-112.',
          'Wilson, E. (2023). Social Media in Diplomacy. Foreign Affairs, 102(4), 78-95.',
          'Brown, K. (2024). Cybersecurity in International Relations. Security Studies, 19(1), 156-178.'
        ],
        ethicsDeclaration: true,
        plagiarismDeclaration: true,
        aiDisclosure: 'This research was conducted without the use of AI-generated content.',
        peerReviewed: true,
        copyEdited: true
      },
      {
        id: 3,
        title: 'Public Policy and Data Privacy',
        author: 'Priya Kumar',
        abstract: 'Examining the intersection of public policy and data privacy regulations, analyzing current frameworks, challenges, and future directions for protecting personal data in the digital economy.',
        keywords: ['Data Privacy', 'Public Policy', 'GDPR', 'Digital Rights', 'Privacy Law'],
        authorBio: 'Dr. Priya Kumar is a Policy Analyst at the Center for Digital Rights. She specializes in privacy law and has advised governments on data protection regulations.',
        references: [
          'Kumar, P. (2024). Privacy Policy in the Digital Age. Policy Studies Journal, 22(4), 234-256.',
          'Garcia, L. (2023). GDPR Implementation Challenges. European Law Review, 48(2), 167-189.',
          'Chen, S. (2024). Digital Rights and Privacy. Technology Policy Review, 11(3), 45-67.'
        ],
        ethicsDeclaration: true,
        plagiarismDeclaration: true,
        aiDisclosure: 'No AI tools were used in the research or writing process.',
        peerReviewed: true,
        copyEdited: true
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
        abstract: 'Exploring blockchain technology for transparent governance, examining use cases in public administration, voting systems, and government record-keeping.',
        keywords: ['Blockchain', 'Government Transparency', 'Public Administration', 'Digital Governance', 'Voting Systems'],
        authorBio: 'Dr. Emily Zhang is a Blockchain Researcher at MIT. She focuses on applications of distributed ledger technology in government and public sector innovation.',
        references: [
          'Zhang, E. (2024). Blockchain in Government: A Systematic Review. Government Information Quarterly, 41(2), 78-95.',
          'Anderson, R. (2023). Digital Voting Systems. Electoral Studies, 35(4), 123-145.',
          'Patel, N. (2024). Transparency in Public Administration. Public Administration Review, 84(1), 67-89.'
        ],
        ethicsDeclaration: true,
        plagiarismDeclaration: true,
        aiDisclosure: 'Research conducted without AI assistance.',
        peerReviewed: true,
        copyEdited: true
      },
      {
        id: 5,
        title: 'Cybersecurity Law and Policy',
        author: 'Michael Brown',
        abstract: 'A review of cybersecurity legal frameworks and policy challenges, analyzing international cybersecurity laws, incident response protocols, and regulatory compliance.',
        keywords: ['Cybersecurity', 'Legal Framework', 'Policy', 'Incident Response', 'Regulatory Compliance'],
        authorBio: 'Prof. Michael Brown is a Cybersecurity Law expert at Yale Law School. He has served as a legal advisor to the Department of Homeland Security on cybersecurity matters.',
        references: [
          'Brown, M. (2024). Cybersecurity Legal Frameworks. Stanford Law Review, 76(5), 1234-1256.',
          'Taylor, J. (2023). Incident Response Protocols. Security Law Journal, 18(3), 234-256.',
          'Lee, H. (2024). International Cybersecurity Law. International Law Review, 29(2), 89-112.'
        ],
        ethicsDeclaration: true,
        plagiarismDeclaration: true,
        aiDisclosure: 'No AI-generated content used in this research.',
        peerReviewed: true,
        copyEdited: true
      },
      {
        id: 6,
        title: 'The Troubling Rise of Realism over Institutionalism in the 21st Century – A Critical Socio-Political and Economic Analysis',
        author: 'Maimuna Suleiman, Quayson Abigail, Laxman Choudhary, Bamidele Olatunji, Tanushka Soni, Ashutosh Verma, Mansi Sharma, and Sujal Shreshyash',
        abstract: 'A comprehensive analysis of the shift from institutionalist approaches to realist perspectives in international relations, examining the socio-political and economic implications of this transition in the 21st century global order.',
        keywords: ['Realism', 'Institutionalism', 'International Relations', 'Global Order', 'Socio-Political Analysis', 'Economic Policy'],
        authorBio: 'The authors are researchers from various institutions specializing in international relations, political science, and economic policy. This collaborative work represents a multidisciplinary approach to understanding contemporary global governance challenges.',
        references: [
          'Waltz, K. N. (1979). Theory of International Politics. Addison-Wesley.',
          'Keohane, R. O. (1984). After Hegemony: Cooperation and Discord in the World Political Economy. Princeton University Press.',
          'Mearsheimer, J. J. (2001). The Tragedy of Great Power Politics. W.W. Norton & Company.',
          'Ikenberry, G. J. (2011). Liberal Leviathan: The Origins, Crisis, and Transformation of the American World Order. Princeton University Press.',
          'Wendt, A. (1999). Social Theory of International Politics. Cambridge University Press.'
        ],
        ethicsDeclaration: true,
        plagiarismDeclaration: true,
        aiDisclosure: 'This research was conducted without the use of AI-generated content. All analysis and conclusions are the result of human scholarly inquiry.',
        peerReviewed: true,
        copyEdited: true
      }
    ]
  }
];

// Complete editorial board data with full contact details
const editorialBoard = [
  {
    name: 'Dr. Abuzar Nomani',
    designation: 'Associate Professor',
    department: 'Business Management',
    institution: 'CV Raman Global University',
    email: 'abuzar.nomani@cvrgu.edu.in',
    address: 'Department of Business Management, CV Raman Global University, Bhubaneswar, Odisha 752054, India',
    phone: '+91-674-249-XXXX'
  },
  {
    name: 'Dr. Mayank Kumar',
    designation: 'Assistant Professor',
    department: 'Computer Science',
    institution: 'Delhi Technological University',
    email: 'mayank.kumar@dtu.ac.in',
    address: 'Department of Computer Science, Delhi Technological University, Delhi 110042, India',
    phone: '+91-11-2787-XXXX'
  },
  {
    name: 'Dr. Varun Kumar',
    designation: 'Associate Professor',
    department: 'Commerce',
    institution: 'Arunachal University of Studies',
    email: 'varun.kumar@aus.edu.in',
    address: 'Department of Commerce, Arunachal University of Studies, Namsai, Arunachal Pradesh 792103, India',
    phone: '+91-3804-XXXXXX'
  },
  {
    name: 'Dr. Faizan Khan Sherwani',
    designation: 'Professor',
    department: 'Management Studies',
    institution: 'Jamia Hamdard',
    email: 'faizan.sherwani@jamiahamdard.ac.in',
    address: 'Department of Management Studies, Jamia Hamdard, New Delhi 110062, India',
    phone: '+91-11-2605-XXXX'
  },
  {
    name: 'Dr. Rahila Rais',
    designation: 'Associate Professor',
    department: 'Hindi',
    institution: 'Aligarh Muslim University',
    email: 'rahila.rais@amu.ac.in',
    address: 'Department of Hindi, Aligarh Muslim University, Aligarh, Uttar Pradesh 202002, India',
    phone: '+91-571-270-XXXX'
  },
  {
    name: 'Dr. Mohd Farooq Khan',
    designation: 'Professor',
    department: 'Literary Criticism',
    institution: 'University of Kashmir',
    email: 'farooq.khan@kashmiruniversity.ac.in',
    address: 'Department of Literary Criticism, University of Kashmir, Srinagar, Jammu & Kashmir 190006, India',
    phone: '+91-194-241-XXXX'
  },
  {
    name: 'Dr. Kashif Raees',
    designation: 'Assistant Professor',
    department: 'Science',
    institution: 'Chandigarh University',
    email: 'kashif.raees@cumail.in',
    address: 'Department of Science, Chandigarh University, Mohali, Punjab 140413, India',
    phone: '+91-172-398-XXXX'
  }
];

// Publisher information
const publisher = {
  name: 'Law, Diplomacy, Technology & Public Policy Review (LDTPPR)',
  organization: 'Academic Publishing Consortium',
  address: {
    street: '123 Academic Plaza, Research District',
    city: 'New Delhi',
    state: 'Delhi',
    country: 'India',
    postalCode: '110001'
  },
  contact: {
    email: 'editorial@ldtppr.org',
    phone: '+91-11-2345-6789',
    fax: '+91-11-2345-6790',
    website: 'www.ldtppr.org'
  },
  editorialOffice: {
    email: 'editorial.office@ldtppr.org',
    phone: '+91-11-2345-6791'
  }
};

const EditionsPage = () => {
  const [expandedArticles, setExpandedArticles] = useState(new Set());
  const [downloading, setDownloading] = useState({});

  const toggleArticle = (articleId) => {
    const newExpanded = new Set(expandedArticles);
    if (newExpanded.has(articleId)) {
      newExpanded.delete(articleId);
    } else {
      newExpanded.add(articleId);
    }
    setExpandedArticles(newExpanded);
  };

  const checkArticleCompleteness = (article) => {
    const required = [
      article.abstract,
      article.keywords?.length > 0,
      article.authorBio,
      article.references?.length > 0,
      article.ethicsDeclaration,
      article.plagiarismDeclaration,
      article.peerReviewed,
      article.copyEdited
    ];
    return required.every(Boolean);
  };

  const handleDownloadIssue = async (issue) => {
    const issueKey = `${issue.month}${issue.year}`;
    setDownloading(prev => ({ ...prev, [issueKey]: true }));
    
    try {
      const pdf = await generateIssuePDF(issue, publisher, editorialBoard);
      const filename = `LDTPPR_Vol${issue.volume}_Issue_${issue.month}${issue.year}.pdf`;
      downloadPDF(pdf, filename);
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Error generating PDF. Please try again.');
    } finally {
      setDownloading(prev => ({ ...prev, [issueKey]: false }));
    }
  };

  const handleDownloadAllIssues = async () => {
    setDownloading(prev => ({ ...prev, all: true }));
    
    try {
      for (const issue of issues) {
        const pdf = await generateIssuePDF(issue, publisher, editorialBoard);
        const filename = `LDTPPR_Vol${issue.volume}_Issue_${issue.month}${issue.year}.pdf`;
        downloadPDF(pdf, filename);
        // Small delay between downloads
        await new Promise(resolve => setTimeout(resolve, 500));
      }
    } catch (error) {
      console.error('Error generating PDFs:', error);
      alert('Error generating PDFs. Please try again.');
    } finally {
      setDownloading(prev => ({ ...prev, all: false }));
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-serif font-bold text-center text-slate-800">Journal Issues (2025)</h1>
        <button
          onClick={handleDownloadAllIssues}
          disabled={downloading.all}
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition-colors disabled:opacity-50"
        >
          <Download className="w-4 h-4 mr-2" />
          {downloading.all ? 'Generating...' : 'Download All Issues'}
        </button>
      </div>
      
      {/* Publisher Information Section */}
      <div className="bg-white border border-slate-200 rounded-lg shadow p-6 mb-10">
        <h2 className="text-2xl font-serif font-bold text-slate-800 mb-4">Publisher Information</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-slate-700 mb-2">{publisher.name}</h3>
            <p className="text-slate-600 mb-2">{publisher.organization}</p>
            <div className="text-sm text-slate-700 space-y-1">
              <p>{publisher.address.street}</p>
              <p>{publisher.address.city}, {publisher.address.state} {publisher.address.postalCode}</p>
              <p>{publisher.address.country}</p>
            </div>
            <div className="text-gray-700 text-sm mt-2">
              <div><strong>ISSN (Print/Online):</strong> Application in process (ID: IDS70965, expected within 6 months)</div>
              <div><strong>Publisher:</strong> Centre for Interdisciplinary Policy Dialogue, India</div>
              <div><strong>Contact:</strong> submissions@ldt-journal.org</div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-slate-700 mb-2">Contact Information</h4>
            <div className="text-sm text-slate-700 space-y-1">
              <p><span className="font-medium">Email:</span> {publisher.contact.email}</p>
              <p><span className="font-medium">Phone:</span> {publisher.contact.phone}</p>
              <p><span className="font-medium">Fax:</span> {publisher.contact.fax}</p>
              <p><span className="font-medium">Website:</span> {publisher.contact.website}</p>
            </div>
            <div className="mt-3">
              <h4 className="font-semibold text-slate-700 mb-1">Editorial Office</h4>
              <div className="text-sm text-slate-700 space-y-1">
                <p><span className="font-medium">Email:</span> {publisher.editorialOffice.email}</p>
                <p><span className="font-medium">Phone:</span> {publisher.editorialOffice.phone}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-10">
        {issues.map((issue) => {
          const articleCount = issue.articles.length;
          const isValidCount = articleCount >= 2 && articleCount <= 5;
          const issueKey = `${issue.month}${issue.year}`;
          return (
            <div key={issue.volume} className="bg-white border border-slate-200 rounded-lg shadow p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-lg font-semibold text-slate-700">Volume {issue.volume}</span>
                  <span className="ml-3 px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-medium uppercase">{issue.month} {issue.year}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-sm text-slate-500">{articleCount} Articles</span>
                  <button
                    onClick={() => handleDownloadIssue(issue)}
                    disabled={downloading[issueKey]}
                    className="inline-flex items-center px-3 py-1 bg-green-600 text-white text-sm font-medium rounded hover:bg-green-700 transition-colors disabled:opacity-50"
                  >
                    <FileText className="w-3 h-3 mr-1" />
                    {downloading[issueKey] ? 'Generating...' : 'Download PDF'}
                  </button>
                </div>
              </div>
              {!isValidCount && (
                <div className="mb-4 p-3 bg-yellow-50 border border-yellow-200 text-yellow-800 rounded">
                  Warning: Each issue should have between 2 and 5 research articles. This issue currently has {articleCount}.
                </div>
              )}
              <div className="space-y-4 mb-6">
                {issue.articles.map((article) => {
                  const isComplete = checkArticleCompleteness(article);
                  const isExpanded = expandedArticles.has(article.id);
                  return (
                    <div key={article.id} className="border border-slate-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-2">
                          <h2 className="text-xl font-serif font-semibold text-slate-900">{article.title}</h2>
                          {isComplete ? (
                            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Complete</span>
                          ) : (
                            <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full">Incomplete</span>
                          )}
                        </div>
                        <button
                          onClick={() => toggleArticle(article.id)}
                          className="text-slate-600 hover:text-slate-800"
                        >
                          {isExpanded ? '▼' : '▶'}
                        </button>
                      </div>
                      <div className="text-sm text-slate-600 mb-2">By {article.author}</div>
                      <div className="text-slate-700 text-sm mb-3">{article.abstract}</div>
                      
                      {isExpanded && (
                        <div className="mt-4 space-y-4 border-t pt-4">
                          {/* Keywords */}
                          <div>
                            <h4 className="font-semibold text-slate-800 mb-1">Keywords:</h4>
                            <div className="flex flex-wrap gap-1">
                              {article.keywords.map((keyword, idx) => (
                                <span key={idx} className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded">
                                  {keyword}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Author Bio */}
                          <div>
                            <h4 className="font-semibold text-slate-800 mb-1">Author Bio:</h4>
                            <p className="text-sm text-slate-700">{article.authorBio}</p>
                          </div>

                          {/* References */}
                          <div>
                            <h4 className="font-semibold text-slate-800 mb-1">References:</h4>
                            <ol className="list-decimal list-inside space-y-1 text-sm text-slate-700">
                              {article.references.map((ref, idx) => (
                                <li key={idx}>{ref}</li>
                              ))}
                            </ol>
                          </div>

                          {/* Declarations */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <h4 className="font-semibold text-slate-800 mb-1">Declarations:</h4>
                              <div className="space-y-1 text-sm">
                                <div className={`flex items-center ${article.ethicsDeclaration ? 'text-green-600' : 'text-red-600'}`}>
                                  <span className="mr-2">{article.ethicsDeclaration ? '✓' : '✗'}</span>
                                  Ethics Declaration
                                </div>
                                <div className={`flex items-center ${article.plagiarismDeclaration ? 'text-green-600' : 'text-red-600'}`}>
                                  <span className="mr-2">{article.plagiarismDeclaration ? '✓' : '✗'}</span>
                                  Plagiarism Declaration
                                </div>
                                <div className={`flex items-center ${article.peerReviewed ? 'text-green-600' : 'text-red-600'}`}>
                                  <span className="mr-2">{article.peerReviewed ? '✓' : '✗'}</span>
                                  Peer Reviewed
                                </div>
                                <div className={`flex items-center ${article.copyEdited ? 'text-green-600' : 'text-red-600'}`}>
                                  <span className="mr-2">{article.copyEdited ? '✓' : '✗'}</span>
                                  Copy Edited
                                </div>
                              </div>
                            </div>
                            <div>
                              <h4 className="font-semibold text-slate-800 mb-1">AI Disclosure:</h4>
                              <p className="text-sm text-slate-700">{article.aiDisclosure}</p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
              
              {/* Editorial Board Section */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-slate-800 mb-4">Editorial Board</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {editorialBoard.map((member, idx) => (
                    <div key={idx} className="bg-slate-50 border border-slate-100 rounded p-4">
                      <div className="font-semibold text-slate-800 mb-1">{member.name}</div>
                      <div className="text-sm text-slate-700 mb-1">{member.designation}</div>
                      <div className="text-sm text-slate-600 mb-2">{member.department}, {member.institution}</div>
                      <div className="text-xs text-slate-500 space-y-1">
                        <div><span className="font-medium">Email:</span> {member.email}</div>
                        <div><span className="font-medium">Phone:</span> {member.phone}</div>
                        <div><span className="font-medium">Address:</span> {member.address}</div>
                      </div>
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