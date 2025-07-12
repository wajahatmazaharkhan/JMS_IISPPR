const Plagiarism = () => (
  <div className="min-h-screen bg-primary-light/25">
    {/* Hero Banner */}
    <div className="bg-primary-dark text-white py-14 px-4 sm:px-6 text-center">
      <h1 className="text-3xl sm:text-4xl font-bold font-serif mb-6 mt-6">
        Plagiarism & AI Content Policy
      </h1>
      <p className="text-base sm:text-lg max-w-4xl mt-4 mb-4 mx-auto text-accent-light font-semibold">
        Upholding originality and responsible AI usage to ensure academic excellence and publication integrity.
      </p>
    </div>

    {/* Content Container */}
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 leading-relaxed text-text bg-white rounded-lg shadow-md my-10 space-y-10">
      {[
        {
          title: "Definition of Plagiarism",
          points: [
            "Copying text or ideas from others without proper citation",
            "Self-plagiarism (reusing one's own published work without disclosure)",
            "Paraphrasing without credit",
            "Using AI tools to generate content without disclosure",
          ],
        },
        {
          title: "Plagiarism Screening",
          points: [
            "All submissions undergo mandatory plagiarism checks",
            "10% similarity threshold (excluding references and common phrases)",
          ],
        },
        {
          title: "Consequences",
          points: [
            "Immediate rejection of plagiarized submissions",
            "Blacklisting of authors found guilty of plagiarism",
            "Reporting to the author's institution if necessary",
            "Retraction of published articles if plagiarism is discovered post-publication",
          ],
        },
        {
          title: "AI-Generated Content Policy",
          points: [
            <><b>Permitted:</b> Use of AI for grammar checking, minor rephrasing, or language improvement</>,
            <><b>Prohibited:</b> Submitting AI-generated articles or sections without disclosure</>,
            "Authors must clearly disclose any use of AI tools in their manuscript",
            "The journal may use AI-detection tools and reserves the right to reject undisclosed AI-generated content",
            "Final accountability for content integrity lies with the author",
          ],
        },
      ].map(({ title, points }, idx) => (
        <section key={idx} className="px-4 sm:px-8 lg:px-12">
          <h2 className="text-xl sm:text-2xl font-bold text-primary font-serif mb-4">{title}</h2>
          <ul className="list-disc pl-6 text-subtext space-y-2 text-sm sm:text-base">
            {points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </section>
      ))}

      <p className="mt-12 font-semibold text-primary text-center italic text-sm sm:text-base px-4">
        LDTPPR is committed to safeguarding originality, ensuring accountability, and promoting responsible innovation in research writing.
      </p>
    </div>
  </div>
);

export default Plagiarism;
  