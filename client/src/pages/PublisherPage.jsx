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
              <strong>Name:</strong> Centre for Interdisciplinary Policy
              Dialogue, India
            </p>
            <p>
              <strong>Official Journal:</strong> Law, Diplomacy, Tech & Public
              Policy Review (LDTPPR)
            </p>
            <p>
              <strong>Publisher (Legal Entity):</strong> Interdisciplinary
              Centre for Public Policy, Legal Reform, and International Affairs
            </p>
            <p>
              <strong>Country:</strong> India (International Journal)
            </p>
            <p>
              <strong>Languages:</strong> English
            </p>
            <p>
              <strong>Frequency:</strong> Biannual (May and December Editions)
            </p>
            <p>
              <strong>Editor-in-Chief:</strong> Dr. Anika Rao
            </p>
            <p>
              <strong>Contact Email:</strong>{" "}
              <a
                href="mailto:submissions@ldt-journal.org"
                className="text-accent underline"
              >
                submissions@ldt-journal.org
              </a>
            </p>
            <p>
              <strong>ISSN (Print/Online):</strong> Application in process (ID:
              IDS70965, expected within 6 months)
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-xl font-serif font-semibold mb-4">
            Sample Publication Details
          </h2>
          <div className="bg-white border border-muted shadow-md hover:border-primary transition p-6 rounded space-y-3">
            <p>
              <strong>Title:</strong> 📝 Greenwashing in Corporate Branding
            </p>
            <p>
              <strong>Type of Publication:</strong> Research Paper / Academic
              Article
            </p>
            <p>
              <strong>Publication Context:</strong> Appears in LDTPPR or
              suitable for journals in sustainability, corporate ethics, or
              interdisciplinary studies.
            </p>
            <p>
              <strong>Authors:</strong>
            </p>
            <ul className="list-disc ml-6 text-primary">
              <li>
                <strong>Shamir Hossain Fahim</strong> – Abstract, Regulatory
                Challenges, Consumer Response and Accountability
              </li>
              <li>
                <strong>Egu Florence Chinedum</strong> – Background Study,
                Literature Review, Conceptual Framework
              </li>
              <li>
                <strong>Disha Agarwal</strong> – Introduction, Conclusion
              </li>
              <li>
                <strong>Adewale Opeoluwa Esther</strong> – Recommendations,
                References
              </li>
            </ul>
            <p>
              <strong>Main Focus:</strong> Definition and history of
              greenwashing, corporate misuse of eco-branding, regulatory gaps,
              consumer behavior, and actionable recommendations.
            </p>
            <p>
              <strong>Key Contributions:</strong> Interdisciplinary analysis,
              support for UN SDGs, critique of corporate sustainability, and
              calls for regulation and empowerment.
            </p>
            <p>
              <strong>Journal Metadata (if published in LDTPPR):</strong>
            </p>
            <ul className="list-disc ml-6 text-primary">
              <li>
                <strong>Journal Name:</strong> LDTPPR
              </li>
              <li>
                <strong>ISSN:</strong> Application in process (ID: IDS70965)
              </li>
              <li>
                <strong>Volume/Issue/Year:</strong> (To be assigned)
              </li>
              <li>
                <strong>Publisher:</strong> Centre for Interdisciplinary Policy
                Dialogue, India
              </li>
              <li>
                <strong>Contact:</strong> submissions@ldt-journal.org
              </li>
            </ul>
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
