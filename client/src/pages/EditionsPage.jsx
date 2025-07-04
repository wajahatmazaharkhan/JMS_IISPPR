import React, { useState } from 'react';
import { Download, FileText } from 'lucide-react';
import { generateIssuePDF, downloadPDF } from '../utils/pdfExport';
import { useLocation } from "react-router-dom";
import articleData from "../data/articles";
import ResearchCard from "../components/ResearchCard";

const EditionsPage = () => {
  const [expandedArticles, setExpandedArticles] = useState(new Set());
  const [downloading, setDownloading] = useState({});
  const [researchArticles, setResearchArticles] = useState(articleData);
  const location = useLocation();
  const isAdmin = location.pathname.startsWith("/admin");

  const handleDelete = (id) => {
    setResearchArticles((prev) =>
      prev.filter((articles) => articles.id !== id)
    );
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
    <div className="mx-auto w-full flex justify-center bg-primary-light/25 px-4 py-12">
    <div className='max-w-7xl'>
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-serif font-bold text-center text-primary">Journal Issues (2025)</h1>
        <button
          onClick={handleDownloadAllIssues}
          disabled={downloading.all}
          className="inline-flex items-center px-4 py-2 bg-primary text-white font-medium rounded hover:bg-primary-dark transition disabled:opacity-50"
        >
          <Download className="w-4 h-4 mr-2" />
          {downloading.all ? 'Generating...' : 'Download All Issues'}
        </button>
      </div>

      <div className="bg-primary-light/25 w-full min-h-screen flex items-center justify-center">
        <div className="max-w-4xl w-full px-6 py-12">
          <div className="grid gap-6 md:grid-cols-1">
            {researchArticles.map((articles) => (
              <div key={articles.id}>
                <ResearchCard
                  articles={articles}
                  onDelete={isAdmin ? handleDelete : null}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
      
    </div>
  );
};

export default EditionsPage; 