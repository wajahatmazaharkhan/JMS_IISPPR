import { useState } from "react";
import { useLocation } from "react-router-dom";
import articleData from "../data/articles";
import ResearchCard from "../components/ResearchCard";

const ResearchPage = () => {
  const [researchArticles, setResearchArticles] = useState(articleData);
  const location = useLocation();
  const isAdmin = location.pathname.startsWith("/admin");

  const handleDelete = (id) => {
    setResearchArticles((prev) =>
      prev.filter((articles) => articles.id !== id)
    );
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-blue-900 mb-8 text-center">
        Research Articles
      </h1>
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
