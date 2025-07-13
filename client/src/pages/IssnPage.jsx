const IssnPage = () => (
  <div
    className="px-6 py-14 w-full min-h-screen mx-auto rounded shadow"
    style={{
        background: 'linear-gradient(to right, #caa1b8ff, #3b0a29ff, #2b1426ff)',
      }}
  >
    <div className="p-6 max-w-4xl mx-auto bg-white rounded shadow">
      <h1
        className="text-4xl text-center font-serif font-bold mt-4 mb-8"
        style={{ color: '#693155ff' }}
      >
        ISSN Details
      </h1>

      <div className="mb-8 mt-15 space-y-2">
        <p className="text-lg ml-9 font-serif font-semibold" style={{ color: '#693155ff' }}>
          Journal:{' '}
          <span className="font-normal" style={{ color: '#693155ff' }}>
            Law, Diplomacy, Tech & Public Policy Review (LDTPPR)
          </span>
        </p>
        <p className="text-lg ml-9 font-serif font-semibold" style={{ color: '#693155ff' }}>
          ISSN (Print/Online):{' '}
          <span className="font-normal" style={{ color: '#693155ff' }}>
            Application in process
          </span>
        </p>
      </div>

      <div
        className="border-l-4 border-primary p-8 ml-7 mr-7 rounded space-y-4 mb-8"
        style={{ backgroundColor: 'rgba(105, 49, 85, 0.13)' }}
      >
        <p className="text-lg" style={{ color: '#693155ff' }}>
          Application Status:
        </p>
        <ul className="list-disc ml-6 space-y-2" style={{ color: '#693155ff' }}>
          <li>
            <strong>Application ID:</strong> IDS70965
          </li>
          <li>
            <strong>Status:</strong> Under review with the ISSN National Centre
          </li>
          <li>
            <strong>Expected Availability:</strong> Within 6 months
          </li>
        </ul>
      </div>

      <div className="text-subtext text-sm">
        <p className="mt-5 ml-4">
          This journal has applied for both print and online ISSN registration.
          Once assigned, the official ISSN numbers will be displayed here and on all journal documentation, metadata, and PDF exports.
        </p>
        <p className="mt-2 ml-4" >
          For queries regarding the ISSN application, contact:
          <a
            href="mailto:submissions@ldt-journal.org"
            className="underline ml-1"
            style={{ color: '#693155ff' }}
          >
            submissions@ldt-journal.org
          </a>
        </p>
      </div>
    </div>
  </div>
);

export default IssnPage;
