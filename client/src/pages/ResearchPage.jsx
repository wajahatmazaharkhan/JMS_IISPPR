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

  return (
    <div className="bg-primary-light/25 w-full min-h-screen flex items-center justify-center">
      <div className="max-w-4xl w-full px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
          <h1 className="text-3xl font-bold font-serif text-primary-dark">
            Research Articles
          </h1>
        </div>

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
  );
};

export default ResearchPage;
