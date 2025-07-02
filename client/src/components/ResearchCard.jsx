import { Link } from "react-router-dom";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Download } from "lucide-react";
import articleData from "../data/articles";
import { generateArticlePDF, downloadPDF } from "../utils/pdfExport";
import articles from "../data/articles";

const ResearchCard = ({ articles, onDelete }) => {

  const [researchArticles, setResearchArticles] = useState(articleData);
  const [downloading, setDownloading] = useState(false);
  const location = useLocation();
  const isAdmin = location.pathname.startsWith("/admin");

  const handleDownload = async () => {
    setDownloading(true);
    try {
      // Find the specific article by ID
      const article = researchArticles.find(articles => articles.id === articles.id);
    
      if (!articles) {
        alert("Article not found. Please try again.");
        return;
      }

      const pdf = await generateArticlePDF  (articles);
    
      // Create filename based on article title and author
      const sanitizedTitle = articles.title.replace(/[^a-zA-Z0-9\s]/g, '').replace(/\s+/g, '_').substring(0, 50);
      const filename = `LDTPPR_Research_Articles_${articles.id}.pdf`;
    
      downloadPDF(pdf, filename);
    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("Error generating PDF. Please try again.");
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className="bg-white shadow-sm border border-accent-light rounded-lg p-6 flex flex-col gap-3 hover:border-primary hover:shadow-md transition-all duration-300">
      <div className="flex justify-between items-center">
        <span className="text-lg font-bold text-primary-dark font-serif leading-snug mt-1">
          {articles.id}
        </span>
        <span className="text-lg font-bold text-primary-dark font-serif leading-snug mt-1">
          Issue: {articles.issue} , Volume: {articles.volume}
        </span>
      </div>
      <div className="flex justify-between items-center">
        <span className="bg-primary-light text-primary px-3 py-1 rounded-full text-xs font-medium">
          {articles.authorAbbrev}
        </span>
        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
          {articles.status}
        </span>
      </div>

      <h2 className="text-lg font-bold text-primary-dark font-serif leading-snug mt-1">
        {articles.title}
      </h2>

      <p className="text-subtext text-sm text-justify">{articles.abstract}</p>

      <h4 className="font-semibold text-slate-800 mb-1">Keywords:</h4>
      <div className="flex flex-wrap gap-1">
            {articles.keywords.map((keyword, idx) => (
            <span key={idx} className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded">
              {keyword}
            </span>
          ))}
      </div>
      <div>
        <button
          onClick={handleDownload}
          className="inline-flex items-center px-4 py-2 bg-primary text-white font-medium rounded hover:bg-primary-dark transition disabled:opacity-50">
            Download article
        </button>
      </div>


      <div className="flex justify-between items-center mt-auto">
        <Link
          to={`/article/${articles.title.toLowerCase().replace(/\s+/g, "-")}`}
          className="text-sm font-semibold text-accent hover:text-accent-dark hover:underline transition"
        >
          Read More
        </Link>

        {onDelete && (
          <button
            onClick={() => onDelete(articles.id)}
            className="text-xs text-red-600 hover:text-red-800 px-3 py-1 bg-red-50 border border-red-200 rounded transition"
          >
            Delete
          </button>
        )}
      </div>
    </div>
  );
};

export default ResearchCard;
