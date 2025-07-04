import React, { useState } from "react";
import { Download } from "lucide-react";
import { generateArticlePDF, downloadPDF } from "../utils/pdfExport";
import { useLocation } from "react-router-dom";
import articleData from "../data/articles";
import ResearchCard from "../components/ResearchCard";
import articles from "../data/articles";

const EditionsPage = () => {
  const [downloading, setDownloading] = useState({});
  const [researchArticles, setResearchArticles] = useState(articleData);
  const location = useLocation();
  const isAdmin = location.pathname.startsWith("/admin");

  const handleDelete = (id) => {
    setResearchArticles((prev) =>
      prev.filter((articles) => articles.id !== id)
    );
  };

  const handleDownloadAllIndividually = async () => {
    setDownloading(true);

    try {
      for (const article of articles) {
        const pdf = await generateArticlePDF(article);

        const sanitizedTitle = (article.title || 'Untitled')
        .replace(/[^a-zA-Z0-9\s]/g, '') // remove special characters
        .replace(/\s+/g, '_') // replace spaces with underscores
        .substring(0, 50); // truncate if needed

        const filename = `LDTPPR_Research_Article_${sanitizedTitle}_${article.id}.pdf`;

        downloadPDF(pdf,filename); // download each one
      }
    } catch (error) {
      console.error("Error downloading article PDFs:", error);
      alert("Error downloading PDFs. Please try again.");
    } finally {
      setDownloading(false);
    }
  };



  return (
    <div className="bg-primary-light/25 px-4 py-12">
      <div className="mx-auto max-w-7xl space-y-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <h1 className="text-3xl font-serif font-bold text-primary">Journal Issues (2025)</h1>
          <button
            onClick={handleDownloadAllIndividually}
            disabled={downloading.all}
            className="inline-flex items-center px-4 py-2 bg-primary text-white font-medium rounded hover:bg-primary-dark transition disabled:opacity-50"
          >
            <Download className="w-4 h-4 mr-2" />
            {downloading.all ? "Generating..." : "Download All Issues"}
          </button>
        </div>
        <div className="bg-white border border-accent-light rounded-xl p-6 shadow-sm hover:border-primary hover:shadow-md transition-all duration-300 flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <span className="text-sm text-primary font-medium">
              Issue 1
            </span>
          </div>

          <div className="bg-white border border-accent-light rounded-xl p-6 shadow-sm hover:border-primary hover:shadow-md transition-all duration-300 flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-primary font-medium">
                Volume 1
              </span>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {researchArticles.map((articles) => (
                <ResearchCard
                  key={articles.id}
                  articles={articles}
                  onDelete={isAdmin ? handleDelete : null}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditionsPage;
