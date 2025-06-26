import { Link } from "react-router-dom";

const ResearchCard = ({ articles, onDelete }) => {
  return (
    <div className="bg-blue-50 rounded-2xl shadow-lg p-6 mb-6 border border-blue-100 hover:shadow-2xl transition flex flex-col gap-3 ">
      <div className="flex justify-between items-center">
        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
          {articles.authorAbbrev}
        </span>
        <span className="text-gray-500 text-xs font-medium bg-green-200 px-3 py-1 rounded-full">
          {articles.status}
        </span>
      </div>

      <h2 className="text-lg font-bold text-blue-900 leading-snug mt-1">
        {articles.title}
      </h2>

      <p className="text-gray-700 text-sm">{articles.abstract}</p>

      <div className="flex justify-between items-center mt-auto">
        <Link
          to={`/article/${articles.title.toLowerCase().replace(/\s+/g, "-")}`}
          className="text-sm font-semibold text-blue-700 hover:underline"
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
