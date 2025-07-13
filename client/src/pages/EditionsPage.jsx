import React, { useState } from "react";
import { Download } from "lucide-react";
import { generateArticlePDF, downloadPDF } from "../utils/pdfExport";
import { useLocation } from "react-router-dom";
import articleData from "../data/articles";
import ResearchCard from "../components/ResearchCard";
import articles from "../data/articles";
import ResearchEnhancements from "../components/ResearchEnhancements";

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

        const sanitizedTitle = (article.title || "Untitled")
          .replace(/[^a-zA-Z0-9\s]/g, "")
          .replace(/\s+/g, "_")
          .substring(0, 50);

        const filename = `LDTPPR_Research_Article_${sanitizedTitle}_${article.id}.pdf`;

        downloadPDF(pdf, filename);
      }
    } catch (error) {
      console.error("Error downloading article PDFs:", error);
      alert("Error downloading PDFs. Please try again.");
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div
      className="px-4 py-12"
     style={{
        background: 'linear-gradient(to right, #caa1b8ff, #3b0a29ff, #2b1426ff)',
      }}
    >
      
      <div className="mx-auto max-w-7xl space-y-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <h1
            className="text-3xl text-white font-serif font-bold"
            
          >
            Journal Issues (2025)
          </h1>

          <button
            onClick={handleDownloadAllIndividually}
            disabled={downloading.all}
            className="inline-flex items-center px-4 py-2 font-medium rounded transition disabled:opacity-50"
            style={{
              backgroundColor: "#351128ff",
              color: "white",
            }}
          >
            <Download className="w-4 h-4 mr-2" />
            {downloading.all ? "Generating..." : "Download All Issues"}
          </button>
        </div>

        <div
          className="border border-accent-light rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col gap-4"
          style={{
            backgroundColor: "white",
            borderColor: "#d6a7c0",
          }}
        >
          <div className="flex gap-4 items-center">
            <span
              className="px-3 py-1 rounded-full text-lg font-medium"
              style={{
                backgroundColor: "rgba(105, 49, 85, 0.08)",
                color: "#693155ff",
              }}
            >
              Issue 1
            </span>
            <span
              className="px-3 py-1 rounded-full text-lg font-medium"
              style={{
                backgroundColor: "rgba(105, 49, 85, 0.08)",
                color: "#693155ff",
              }}
            >
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
  );
};

export default EditionsPage;
