import { Link } from "react-router-dom";

const ResearchCard = ({ articles, onDelete }) => {
  return (
    <div className="bg-white shadow-sm border border-accent-light rounded-lg p-6 flex flex-col gap-3 hover:border-primary hover:shadow-md transition-all duration-300">
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
