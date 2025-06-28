import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Download } from "lucide-react";
import articleData from "../data/articles";
import ResearchCard from "../components/ResearchCard";
import { generateResearchPDF, downloadPDF } from "../utils/pdfExport";

const ResearchPage = () => {
  const [researchArticles, setResearchArticles] = useState(articleData);
  const [downloading, setDownloading] = useState(false);
  const location = useLocation();
  const isAdmin = location.pathname.startsWith("/admin");

  const handleDelete = (id) => {
    setResearchArticles((prev) =>
      prev.filter((articles) => articles.id !== id)
    );
  };

  const handleDownloadAllArticles = async () => {
    setDownloading(true);
    
    try {
      const pdf = await generateResearchPDF(researchArticles);
      const filename = `LDTPPR_Research_Articles_${new Date().getFullYear()}.pdf`;
      downloadPDF(pdf, filename);
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Error generating PDF. Please try again.');
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-blue-900 text-center">
          Research Articles
        </h1>
        <button
          onClick={handleDownloadAllArticles}
          disabled={downloading}
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition-colors disabled:opacity-50"
        >
          <Download className="w-4 h-4 mr-2" />
          {downloading ? 'Generating PDF...' : 'Download All Articles'}
        </button>
      </div>
      <div className="grid gap-8 md:grid-cols-1">
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
  );
};

export default ResearchPage;
