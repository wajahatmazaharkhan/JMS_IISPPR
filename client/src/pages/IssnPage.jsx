const IssnPage = () => (
  <div className="p-6 max-w-xl mx-auto bg-white rounded shadow">
    <h1 className="text-3xl font-bold mb-4 text-blue-900">ISSN Details</h1>
    <div className="mb-4">
      <p className="text-lg font-semibold">Journal: <span className="font-normal">Law, Diplomacy, Tech & Public Policy Review (LDTPPR)</span></p>
      <p className="text-lg font-semibold">ISSN (Print/Online): <span className="font-normal text-blue-700">Application in process</span></p>
    </div>
    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4 rounded">
      <p className="font-medium">Application Status:</p>
      <ul className="list-disc ml-6 mt-1 text-blue-900">
        <li><strong>Application ID:</strong> IDS70965</li>
        <li><strong>Status:</strong> Under review with the ISSN National Centre</li>
        <li><strong>Expected Availability:</strong> Within 6 months</li>
      </ul>
    </div>
    <div className="text-gray-700 text-sm">
      <p>This journal has applied for both print and online ISSN registration. Once assigned, the official ISSN numbers will be displayed here and on all journal documentation, metadata, and PDF exports.</p>
      <p className="mt-2">For queries regarding the ISSN application, contact: <a href="mailto:submissions@ldt-journal.org" className="text-blue-600 underline">submissions@ldt-journal.org</a></p>
    </div>
  </div>
);

export default IssnPage; 