const Plagiarism = () => (
  <div className="max-w-4xl mx-auto px-4 py-10 text-gray-800 divide-y">
    <h1 className="text-3xl font-bold text-indigo-700 mb-6">Plagiarism & AI Content Policy</h1>
    <section className="py-6">
      <h2 className="text-xl font-semibold mb-2">Definition of Plagiarism</h2>
      <ul className="list-disc ml-6">
        <li>Copying text or ideas from others without proper citation</li>
        <li>Self-plagiarism (reusing one's own published work without disclosure)</li>
        <li>Paraphrasing without credit</li>
        <li>Using AI tools to generate content without disclosure</li>
      </ul>
    </section>
    <section className="py-6">
      <h2 className="text-xl font-semibold mb-2">Plagiarism Screening</h2>
      <ul className="list-disc ml-6">
        <li>All submissions undergo mandatory plagiarism checks</li>
        <li>10% similarity threshold (excluding references and common phrases)</li>
      </ul>
    </section>
    <section className="py-6">
      <h2 className="text-xl font-semibold mb-2">Consequences</h2>
      <ul className="list-disc ml-6">
        <li>Immediate rejection of plagiarized submissions</li>
        <li>Blacklisting of authors found guilty of plagiarism</li>
        <li>Reporting to the author's institution if necessary</li>
        <li>Retraction of published articles if plagiarism is discovered post-publication</li>
      </ul>
    </section>
    <section className="py-6">
      <h2 className="text-xl font-semibold mb-2">AI-Generated Content Policy</h2>
      <ul className="list-disc ml-6">
        <li>Permitted: Use of AI for grammar checking, minor rephrasing, or language improvement</li>
        <li>Prohibited: Submitting AI-generated articles or sections without disclosure</li>
        <li>Authors must clearly disclose any use of AI tools in their manuscript</li>
        <li>The journal may use AI-detection tools and reserves the right to reject undisclosed AI-generated content</li>
        <li>Final accountability for content integrity lies with the author</li>
      </ul>
    </section>
  </div>
);

export default Plagiarism; 