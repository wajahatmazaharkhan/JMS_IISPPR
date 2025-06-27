const Ethics = () => (
  <div className="min-h-screen bg-primary-light/25">
    {/* Banner */}
    <div className="bg-primary-dark text-white py-16 px-6 text-center">
      <h1 className="text-4xl font-bold font-serif mb-4">Ethical Guidelines</h1>
      <p className="text-md max-w-3xl mx-auto text-accent-light">
        Our unwavering commitment to academic integrity, transparency, and student empowerment drives everything we do at LDTPPR.
      </p>
    </div>

    {/* Content Container */}
    <div className="max-w-5xl mx-auto px-6 py-12 leading-relaxed text-text bg-white rounded-lg shadow-md my-10 space-y-8">
      <section>
        <h2 className="text-2xl font-bold text-primary font-serif mb-2">
          Law, Diplomacy, Tech & Public Policy Review (LDTPPR)
        </h2>
        <p className="text-subtext text-justify">
          At Law, Diplomacy, Tech & Public Policy Review, we uphold the highest standards of academic integrity, transparency, and ethical publishing. These guidelines apply to all authors, editors, peer reviewers, and contributors.
        </p>
      </section>

      {[
        {
          title: "1. Author Responsibilities",
          items: [
            "✔ Originality and Plagiarism: Authors must ensure submissions are original and properly cited.",
            "✔ Accurate Representation: Report findings honestly without manipulation.",
            "✔ Authorship and Acknowledgment: Credit only those with significant contributions.",
            "✔ Multiple Submissions: No simultaneous submission of the same work.",
            "✔ Conflicts of Interest: Must be disclosed.",
            "✔ Ethical Research Standards: Follow institutional and ethical norms."
          ],
        },
        {
          title: "2. Editorial Responsibilities",
          items: [
            "✔ Fair and Transparent Review Process: Double-blind, merit-based decisions.",
            "✔ Support for Emerging Researchers: Provide constructive, developmental feedback.",
            "✔ Confidentiality: Maintain manuscript and author privacy.",
            "✔ Editorial Integrity: Recuse where conflicts exist."
          ],
        },
        {
          title: "3. Peer Reviewer Responsibilities",
          items: [
            "✔ Confidentiality and Respect: Treat submissions as private.",
            "✔ Constructive Feedback: Fair, unbiased, actionable reviews.",
            "✔ Conflicts of Interest: Decline reviews if any conflict exists."
          ],
        },
        {
          title: "4. Anti-Predatory Publishing Commitment",
          items: [
            "LDTPPR was founded to counter unethical practices that exploit student researchers.",
            "✔ Full transparency in our submission, review, and publication process.",
            "✔ No hidden fees or deceptive charges.",
            "✔ Verified editorial board with real academic credentials.",
            "✔ Zero tolerance for academic exploitation."
          ],
        },
        {
          title: "5. Misconduct Handling",
          items: [
            "Suspected violations will be thoroughly investigated.",
            "✔ Rejection or withdrawal of submissions.",
            "✔ Retraction of published articles.",
            "✔ Notification to academic institutions.",
            "✔ Permanent bans for serious misconduct."
          ],
        },
        {
          title: "6. Inclusivity and Diversity",
          items: [
            "✔ Representation across geographies, identities, and perspectives.",
            "✔ Equal opportunity for student and early-career researchers.",
            "✔ Respectful academic discourse that upholds dignity and inclusivity."
          ],
        }
      ].map((section, index) => (
        <details key={index} className="group border-l-4 border-primary pl-4 py-2 transition-all duration-200 hover:bg-primary-light/10 rounded">
          <summary className="text-lg font-semibold cursor-pointer group-open:text-primary">{section.title}</summary>
          <ul className="mt-3 pl-4 list-disc text-subtext space-y-2">
            {section.items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </details>
      ))}

      <p className="mt-12 font-semibold text-primary text-center italic">
        LDTPPR stands for academic integrity, inclusivity, and empowering the next generation of global thinkers through ethical, rigorous publishing.
      </p>
    </div>
  </div>
);

export default Ethics;
