const IssnPage = () => (
  <div className="px-6 py-10 w-full min-h-screen mx-auto bg-primary-light/25 rounded shadow text-primary">
    <div className="p-6 max-w-3xl mx-auto bg-white rounded shadow text-primary">
      <h1 className="text-3xl font-serif font-bold mb-8 text-primary">
        ISSN Details
      </h1>

      <div className="mb-8 space-y-2">
        <p className="text-lg font-serif font-semibold">
          Journal: <span className="font-normal">Law, Diplomacy, Tech & Public Policy Review (LDTPPR)</span>
        </p>
        <p className="text-lg font-serif font-semibold">
          ISSN (Print/Online): <span className="font-normal text-accent">Application in process</span>
        </p>
      </div>

      <div className="bg-primary-light/50 border-l-4 border-primary p-6 rounded space-y-2 mb-8">
        <p className="font-medium">Application Status:</p>
        <ul className="list-disc ml-6 text-primary">
          <li><strong>Application ID:</strong> IDS70965</li>
          <li><strong>Status:</strong> Under review with the ISSN National Centre</li>
          <li><strong>Expected Availability:</strong> Within 6 months</li>
        </ul>
      </div>

      <div className="text-subtext text-sm">
        <p>
          This journal has applied for both print and online ISSN registration. Once assigned, the official ISSN numbers will be displayed here and on all journal documentation, metadata, and PDF exports.
        </p>
        <p className="mt-2">
          For queries regarding the ISSN application, contact:
          <a href="mailto:submissions@ldt-journal.org" className="text-accent underline ml-1">
            submissions@ldt-journal.org
          </a>
        </p>
      </div>
    </div>
  </div>
);

export default IssnPage;