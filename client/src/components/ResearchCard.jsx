import { Link } from "react-router-dom";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Download } from "lucide-react";
import { generateArticlePDF, downloadPDF } from "../utils/pdfExport";

const articleRoutes = {
  1: "/Bridging-Literacy-Gaps-in-India",
  2: "/Impact-Of-The-Maternity-Benefit-Act",
  3: "/The-Troubling-Rise-Of-Realism-Over-Institutionalism",
  4: "/Life-Cycle-Environmental-Impact-Assessment",
  5: "/Greenwashing-In-Corporate-Branding",
  6: "/Primary-Health-Care-And-Foreign-Policy",
  7: "/Projecting-Culture-Shaping-Perceptions",
  8: "/The-Intersection-Of-Women-Empowerment",
};

const ResearchCard = ({ articles, onDelete }) => {
  const [downloading, setDownloading] = useState(false);
  const location = useLocation();
  const isAdmin = location.pathname.startsWith("/admin");

  const handleDownload = async () => {
    setDownloading(true);
    try {
      const pdf = await generateArticlePDF(articles);

      const sanitizedTitle = articles.title
        .replace(/[^a-zA-Z0-9\s]/g, "")
        .replace(/\s+/g, "_")
        .substring(0, 50);

      const filename = `LDTPPR_Research_Articles_${sanitizedTitle}_${articles.id}.pdf`;
      downloadPDF(pdf, filename);
    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("Error generating PDF. Please try again.");
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className="group relative bg-white border border-accent-light rounded-xl p-6 shadow-sm hover:border-primary transition-all duration-300 ease-in-out hover:shadow-2xl transform hover:scale-[1.015] flex flex-col gap-4 overflow-hidden">
      {/* animated border glow */}
      <div className="absolute inset-0 z-0 rounded-xl group-hover:ring-2 group-hover:ring-primary/30 transition-all duration-300 pointer-events-none" />

      {/* Top bar */}
      <div className="flex justify-between items-center relative z-10">
        <span className="text-sm text-primary font-medium">
          Serial {articles.id}
        </span>
        <span className="text-sm text-primary font-medium">
          Issue {articles.issue} · Volume {articles.volume}
        </span>
      </div>

      {/* Author + Status */}
      <div className="flex justify-between items-center relative z-10">
        <span className="bg-primary-light text-primary px-3 py-1 rounded-full text-xs font-medium">
          {articles.authorAbbrev}
        </span>
        <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
          {articles.status}
        </span>
      </div>

      {/* Title */}
      <h2 className="text-xl font-serif font-bold text-primary-dark leading-tight relative z-10 transition duration-300 group-hover:text-primary">
        {articles.title}
      </h2>

      {/* Abstract */}
      <p className="text-subtext text-sm text-justify relative z-10">
        {articles.abstract}
      </p>

      {/* Keywords */}
      {articles.keywords?.length > 0 && (
        <div className="relative z-10">
          <h4 className="font-semibold text-slate-800 mb-3 text-sm">Keywords</h4>
          <div className="flex flex-wrap gap-2">
            {articles.keywords.map((keyword, idx) => (
              <span
                key={idx}
                className="px-2 py-1 bg-primary-light/40 text-primary text-xs rounded transition-all duration-200 hover:bg-primary-light/60 hover:scale-105"
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Buttons */}
      <div className="flex items-center gap-4 mt-4 relative z-10">
        <button
          onClick={handleDownload}
          disabled={downloading}
          className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white font-medium rounded hover:bg-primary-dark transition disabled:opacity-50"
        >
          <Download size={16} />
          {downloading ? "Downloading..." : "Download"}
        </button>

        <Link to={articleRoutes[articles.id]}>
          <button className="inline-flex items-center px-4 py-2 bg-primary text-white font-medium rounded hover:bg-primary-dark transition disabled:opacity-50">
            Read More
          </button>
        </Link>

        {onDelete && isAdmin && (
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
