const ArticlePage = ({ title, author, intro, content, references }) => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="text-2xl text-gray-700 mb-4 my-4">By {author}</p>

      {/* Into */}
      <h2 className="text-xl font-semibold text-primary mb-2">Introduction</h2>
      {intro?.map((para, index) => (
        <p key={index} className="mb-4 text-base leading-relaxed text-gray-800">
          {para}
        </p>
      ))}

      {content?.map((section, index) => (
        <div key={index} className="mt-6">
          <h2 className="text-xl font-semibold text-primary mb-5">
            {section.heading}
          </h2>
          {section.paragraphs?.map((para, pIndex) => (
            <p
              key={pIndex}
              className="mb-4 text-base text-gray-700 leading-relaxed"
            >
              {para}
            </p>
          ))}
        </div>
      ))}

      {/* References */}
      {references && references.length > 0 && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-primary mb-4">
            References
          </h2>
          <ul className="list-disc list-inside space-y-3">
            {references.map((ref, index) => (
              <li key={index} className="text-sm text-blue-700 hover:underline">
                <a href={ref.links} target="_blank" rel="noopener noreferrer">
                  {ref.heading}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ArticlePage;
