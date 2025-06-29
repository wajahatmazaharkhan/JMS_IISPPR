const Plagiarism = () => (
  <div className="min-h-screen bg-primary-light/25">
    {/* Hero Banner */}
    <div className="bg-primary-dark text-white py-16 px-6 text-center">
      <h1 className="text-4xl font-bold font-serif mb-4">Plagiarism & AI Content Policy</h1>
      <p className="text-md max-w-3xl mx-auto text-accent-light">
        Upholding originality and responsible AI usage to ensure academic excellence and publication integrity.
      </p>
    </div>

    {/* Content Container */}
    <div className="max-w-5xl mx-auto px-6 py-12 leading-relaxed text-text bg-white rounded-lg shadow-md my-10 space-y-8">
      <section>
        <h2 className="text-2xl font-bold text-primary font-serif mb-2">Definition of Plagiarism</h2>
        <ul className="list-disc pl-6 text-subtext space-y-2">
          <li>Copying text or ideas from others without proper citation</li>
          <li>Self-plagiarism (reusing one's own published work without disclosure)</li>
          <li>Paraphrasing without credit</li>
          <li>Using AI tools to generate content without disclosure</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-primary font-serif mb-2">Plagiarism Screening</h2>
        <ul className="list-disc pl-6 text-subtext space-y-2">
          <li>All submissions undergo mandatory plagiarism checks</li>
          <li>10% similarity threshold (excluding references and common phrases)</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-primary font-serif mb-2">Consequences</h2>
        <ul className="list-disc pl-6 text-subtext space-y-2">
          <li>Immediate rejection of plagiarized submissions</li>
          <li>Blacklisting of authors found guilty of plagiarism</li>
          <li>Reporting to the author's institution if necessary</li>
          <li>Retraction of published articles if plagiarism is discovered post-publication</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-primary font-serif mb-2">AI-Generated Content Policy</h2>
        <ul className="list-disc pl-6 text-subtext space-y-2">
          <li><b>Permitted:</b> Use of AI for grammar checking, minor rephrasing, or language improvement</li>
          <li><b>Prohibited:</b> Submitting AI-generated articles or sections without disclosure</li>
          <li>Authors must clearly disclose any use of AI tools in their manuscript</li>
          <li>The journal may use AI-detection tools and reserves the right to reject undisclosed AI-generated content</li>
          <li>Final accountability for content integrity lies with the author</li>
        </ul>
      </section>

      <p className="mt-12 font-semibold text-primary text-center italic">
        LDTPPR is committed to safeguarding originality, ensuring accountability, and promoting responsible innovation in research writing.
      </p>
    </div>
  </div>
);

export default Plagiarism;
