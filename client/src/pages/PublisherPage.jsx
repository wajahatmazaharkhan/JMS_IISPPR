const PublisherPage = () => (
  <div className="px-6 py-10 w-full mx-auto bg-primary-light/25 rounded shadow text-primary">
    <div className="p-6 max-w-4xl mx-auto bg-white rounded shadow text-primary">
      <h1 className="text-3xl font-serif font-bold mb-8 text-primary">
        Publisher Details
      </h1>

      <div className="mb-12">
        <h2 className="text-xl font-serif font-semibold mb-4">
          Journal Publisher
        </h2>
        <div className="bg-primary-light/50 border-l-4 border-primary p-6 rounded space-y-2">
          <p>
            <strong>Name:</strong> Centre for Interdisciplinary Policy Dialogue,
            India
          </p>
          <p>
            <strong>Official Journal:</strong> Law, Diplomacy, & Tech Policy
            Review
          </p>
          <p>
            <strong>Publisher (Legal Entity):</strong> IISPPR Publication
          </p>
          <p>
            <strong>Country:</strong> India (International Journal)
          </p>
          <p>
            <strong>Languages:</strong> English
          </p>
          <p>
            <strong>Frequency:</strong> Monthly
          </p>
          <p>
            <strong>Editor-in-Chief:</strong> Kashif Raees
          </p>
          <p>
            <strong>Contact Email:</strong>{" "}
            <a
              href="mailto:iisppresearch@gmail.com
"
              className="text-accent underline"
            >
              iisppresearch@gmail.com
            </a>
          </p>
          <p>
            <strong>ISSN (Online):</strong> Application in process (ID:
            IDS70965, expected within some months)
          </p>
        </div>
      </div>

      <div className="text-subtext text-sm">
        <p>
          For more information about the publisher, journal, or publication
          process, contact us at
          <a
            href="mailto:submissions@ldt-journal.org"
            className="text-accent underline ml-1"
          >
            submissions@ldt-journal.org
          </a>
          .
        </p>
      </div>
    </div>
  </div>
);

export default PublisherPage;
