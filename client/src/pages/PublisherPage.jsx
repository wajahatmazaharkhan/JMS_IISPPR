const PublisherPage = () => (
  <div className="px-4 sm:px-6 py-8 w-full mx-auto bg-primary-light/25 rounded shadow text-primary">
    <div className="p-4 sm:p-6 max-w-4xl mx-auto bg-white rounded shadow text-primary">
      <h1 className="text-2xl sm:text-3xl text-center font-serif font-bold mt-3 mb-5 text-primary">
        Publisher Details
      </h1>

      <div className="mb-6">
        <h2 className="text-xl sm:text-2xl text-center font-serif font-semibold mb-5">
          Journal Publisher
        </h2>
        <div className="bg-primary-light/50 text-sm sm:text-base border-l-4 mb-4 sm:mx-8 mx-4 border-primary p-6 sm:p-8 rounded space-y-4">
          <p>
            <strong>Name:</strong> Centre for Interdisciplinary Policy Dialogue, India
          </p>
          <p>
            <strong>Official Journal:</strong> Law, Diplomacy, & Tech Policy Review
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
              href="mailto:iisppresearch@gmail.com"
              className="text-accent underline break-words"
            >
              iisppresearch@gmail.com
            </a>
          </p>
          <p>
            <strong>ISSN (Online):</strong> Application in process (ID: IDS70965, expected within some months)
          </p>
        </div>
      </div>

      <div className="text-subtext text-center text-sm sm:text-base px-4">
        <p>
          For more information about the publisher, journal, or publication
          process, contact us at{" "}
          <a
            href="mailto:iisppresearch@gmail.com"
            className="text-accent underline ml-1 break-words"
          >
            iisppresearch@gmail.com
          </a>
          .
        </p>
      </div>
    </div>
  </div>
);

export default PublisherPage;
