import { BookOpen, Globe, Users, Brain, Download, BarChart2, FileText, Search } from 'lucide-react';

const ResearchEnhancements = () => (
  <section className="bg-white border border-accent-light rounded-xl shadow-md p-6 mb-8 max-w-5xl mx-auto">
    <h2 className="text-2xl font-bold text-primary-dark mb-4 flex items-center gap-2">
      <Search className="w-6 h-6 text-primary" />
      Research Enhancements & Additions
    </h2>
    <div className="space-y-6 text-base text-gray-800">
      {/* Theoretical Framework Expansion */}
      <div>
        <h3 className="font-semibold text-primary mb-2">1. Theoretical Framework Expansion</h3>
        <ul className="list-disc ml-6 space-y-1">
          <li><b>Soft Power Theory by Joseph Nye:</b> Emphasize how cultural diplomacy operates within Nye’s "soft power" framework—i.e., the ability to influence others through attraction rather than coercion.</li>
          <li><b>Cultural Capital (Bourdieu):</b> Apply Bourdieu’s idea of "cultural capital" to analyze how India leverages traditional assets like Yoga, Ayurveda, and cuisine to increase global stature.</li>
        </ul>
      </div>
      {/* Geopolitical Dimensions */}
      <div>
        <h3 className="font-semibold text-primary mb-2">2. India-China Soft Power Competition</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm border mb-2">
            <thead>
              <tr className="bg-primary-light text-primary">
                <th className="px-2 py-1 border">Aspect</th>
                <th className="px-2 py-1 border">India</th>
                <th className="px-2 py-1 border">China</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-2 py-1">Cultural Centers</td>
                <td className="border px-2 py-1">ICCR (37 countries)</td>
                <td className="border px-2 py-1">Confucius Institutes (530+ globally)</td>
              </tr>
              <tr>
                <td className="border px-2 py-1">Cultural Themes</td>
                <td className="border px-2 py-1">Yoga, Ayurveda, Bollywood</td>
                <td className="border px-2 py-1">Confucian ethics, Mandarin, Art</td>
              </tr>
              <tr>
                <td className="border px-2 py-1">Strategy</td>
                <td className="border px-2 py-1">Decentralized, diaspora-led</td>
                <td className="border px-2 py-1">State-driven, centrally funded</td>
              </tr>
              <tr>
                <td className="border px-2 py-1">Challenges</td>
                <td className="border px-2 py-1">Fragmentation, limited funding</td>
                <td className="border px-2 py-1">Political suspicion, overreach</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="text-sm text-gray-700 mb-2">
          <b>Comparative case studies:</b> Africa (Kenya, Tanzania), Southeast Asia (Vietnam, Cambodia)
        </div>
      </div>
      <div>
        <h3 className="font-semibold text-primary mb-2">3. Cultural Diplomacy in Conflict Zones</h3>
        <ul className="list-disc ml-6 space-y-1">
          <li><b>Sri Lanka:</b> Use of Buddhist diplomacy for reconciliation post-civil war.</li>
          <li><b>Myanmar & Bhutan:</b> Language, religious diplomacy, and border dialogue.</li>
          <li><b>Nepal:</b> Shared cultural heritage (Ramayana circuit) used for soft influence.</li>
        </ul>
      </div>
      {/* Academic & Intellectual Debates */}
      <div>
        <h3 className="font-semibold text-primary mb-2">4. Cultural Diplomacy vs. Cultural Imperialism</h3>
        <ul className="list-disc ml-6 space-y-1">
          <li>Raise the debate: Are India's initiatives (e.g., Bollywood, Yoga) becoming overly standardized or hegemonic in certain regions?</li>
          <li><b>Recommendation:</b> Promote cultural pluralism over cultural dominance, allow regional diversity in exports.</li>
        </ul>
      </div>
      <div>
        <h3 className="font-semibold text-primary mb-2">5. Rise of Digital Cultural Diplomacy</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm border mb-2">
            <thead>
              <tr className="bg-primary-light text-primary">
                <th className="px-2 py-1 border">Actor/Platform</th>
                <th className="px-2 py-1 border">Example</th>
                <th className="px-2 py-1 border">Impact Area</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-2 py-1">YouTube Diaspora Voices</td>
                <td className="border px-2 py-1">"Living in India as a Foreigner” series</td>
                <td className="border px-2 py-1">Real-world insight, soft advocacy</td>
              </tr>
              <tr>
                <td className="border px-2 py-1">TikTok & Reels</td>
                <td className="border px-2 py-1">Indian dance & recipe virality</td>
                <td className="border px-2 py-1">Youth diplomacy, intercultural exchange</td>
              </tr>
              <tr>
                <td className="border px-2 py-1">MOOCs & Virtual Museums</td>
                <td className="border px-2 py-1">SWAYAM, ICCR Virtual Gallery</td>
                <td className="border px-2 py-1">Global education & heritage sharing</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="text-sm text-gray-700 mb-2">
          <b>Recommendation:</b> Create a Digital India Culture Portal aggregating global cultural content.
        </div>
      </div>
      {/* Policy Additions */}
      <div>
        <h3 className="font-semibold text-primary mb-2">6. Decentralized Cultural Diplomacy</h3>
        <ul className="list-disc ml-6 space-y-1">
          <li>Move away from Delhi-centric export of North Indian traditions.</li>
          <li>Incorporate South, Northeast, and Tribal cultures—Eg: Nagaland's Hornbill Festival, Koodiyattam from Kerala.</li>
        </ul>
      </div>
      <div>
        <h3 className="font-semibold text-primary mb-2">7. Unified Cultural Diplomacy Dashboard</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm border mb-2">
            <thead>
              <tr className="bg-primary-light text-primary">
                <th className="px-2 py-1 border">Module</th>
                <th className="px-2 py-1 border">Function</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-2 py-1">Event Tracker</td>
                <td className="border px-2 py-1">Global calendar of cultural events</td>
              </tr>
              <tr>
                <td className="border px-2 py-1">Feedback System</td>
                <td className="border px-2 py-1">Real-time surveys and evaluations</td>
              </tr>
              <tr>
                <td className="border px-2 py-1">Stakeholder Network</td>
                <td className="border px-2 py-1">MEA, ICCR, diaspora, NGOs</td>
              </tr>
              <tr>
                <td className="border px-2 py-1">Metrics Panel</td>
                <td className="border px-2 py-1">Outreach, engagement, investment</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <h3 className="font-semibold text-primary mb-2">8. Budget & Institutional Strengthening</h3>
        <ul className="list-disc ml-6 space-y-1">
          <li>Increase ICCR’s budget by ₹500 crore (as per Standing Committee suggestions).</li>
          <li>Define ICCR’s mandate: shift from coordination to implementation and innovation.</li>
          <li>Create MEACULT Coordination Committee across ministries (MEA, Culture, Education, Tourism).</li>
        </ul>
      </div>
      {/* Addressing Challenges */}
      <div>
        <h3 className="font-semibold text-primary mb-2">9. Evaluation & Monitoring Framework</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm border mb-2">
            <thead>
              <tr className="bg-primary-light text-primary">
                <th className="px-2 py-1 border">Element</th>
                <th className="px-2 py-1 border">Tool/Suggestion</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-2 py-1">Impact Metrics</td>
                <td className="border px-2 py-1">Number of countries engaged, audience sizes</td>
              </tr>
              <tr>
                <td className="border px-2 py-1">Feedback Loops</td>
                <td className="border px-2 py-1">Post-event surveys, diaspora interviews</td>
              </tr>
              <tr>
                <td className="border px-2 py-1">Policy Feedback</td>
                <td className="border px-2 py-1">External audits (UNESCO, G20 observers)</td>
              </tr>
              <tr>
                <td className="border px-2 py-1">Performance Index</td>
                <td className="border px-2 py-1">India Cultural Diplomacy Index (ICDI)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <h3 className="font-semibold text-primary mb-2">10. Addressing Internal Contradictions</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm border mb-2">
            <thead>
              <tr className="bg-primary-light text-primary">
                <th className="px-2 py-1 border">Concern</th>
                <th className="px-2 py-1 border">Global Perception Impact</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-2 py-1">Press freedom issues</td>
                <td className="border px-2 py-1">Undermines “Vasudhaiva Kutumbakam”</td>
              </tr>
              <tr>
                <td className="border px-2 py-1">Religious intolerance</td>
                <td className="border px-2 py-1">Weakens pluralism branding</td>
              </tr>
              <tr>
                <td className="border px-2 py-1">Gender-based violence</td>
                <td className="border px-2 py-1">Contradicts narratives of inclusivity</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* Future Editions & Journal Themes */}
      <div>
        <h3 className="font-semibold text-primary mb-2">🚀 Future Editions & Journal Themes</h3>
        <ul className="list-disc ml-6 space-y-1">
          <li><b>Volume 2: India in the Indo-Pacific</b> — Case studies: Indonesia (shared Ramayana), Thailand (Ayutthaya), Japan (Buddhism)</li>
          <li><b>Volume 3: Diaspora Dialogues</b> — Comparative diaspora impact: USA, Mauritius, South Africa, Fiji. Cultural lobbying and remittance diplomacy</li>
          <li><b>Volume 4: Culture as Currency in the Digital Era</b> — India's gaming, animation, cuisine, OTT media. Data: Top 10 Indian Netflix exports (e.g., Sacred Games, RRR)</li>
        </ul>
      </div>
      {/* Appendices & Data Visualizations */}
      <div>
        <h3 className="font-semibold text-primary mb-2">📂 Appendices & Data Visualizations (Suggested)</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm border mb-2">
            <thead>
              <tr className="bg-primary-light text-primary">
                <th className="px-2 py-1 border">Year</th>
                <th className="px-2 py-1 border">Initiative/Event</th>
                <th className="px-2 py-1 border">Region</th>
                <th className="px-2 py-1 border">Impact</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-2 py-1">1950</td>
                <td className="border px-2 py-1">ICCR Formation</td>
                <td className="border px-2 py-1">Global</td>
                <td className="border px-2 py-1">Formal institution</td>
              </tr>
              <tr>
                <td className="border px-2 py-1">1975</td>
                <td className="border px-2 py-1">First Festival of India (UK)</td>
                <td className="border px-2 py-1">Europe</td>
                <td className="border px-2 py-1">High cultural exposure</td>
              </tr>
              <tr>
                <td className="border px-2 py-1">2014</td>
                <td className="border px-2 py-1">International Day of Yoga (UN)</td>
                <td className="border px-2 py-1">Global</td>
                <td className="border px-2 py-1">190+ countries involved</td>
              </tr>
              <tr>
                <td className="border px-2 py-1">2023</td>
                <td className="border px-2 py-1">G20 Culture Track (Varanasi)</td>
                <td className="border px-2 py-1">Global</td>
                <td className="border px-2 py-1">Multilateral engagement</td>
              </tr>
              <tr>
                <td className="border px-2 py-1">2025</td>
                <td className="border px-2 py-1">WAVES Summit (Mumbai)</td>
                <td className="border px-2 py-1">Global</td>
                <td className="border px-2 py-1">₹1,300 cr deals, 90+ nations</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="overflow-x-auto mt-4">
          <table className="min-w-full text-sm border mb-2">
            <thead>
              <tr className="bg-primary-light text-primary">
                <th className="px-2 py-1 border">Export Item</th>
                <th className="px-2 py-1 border">Global Reach</th>
                <th className="px-2 py-1 border">Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-2 py-1">Yoga</td>
                <td className="border px-2 py-1">190+ countries (UN Day)</td>
                <td className="border px-2 py-1">Cultural + health diplomacy</td>
              </tr>
              <tr>
                <td className="border px-2 py-1">Bollywood Films</td>
                <td className="border px-2 py-1">Central/West Asia, Africa</td>
                <td className="border px-2 py-1">Growing OTT influence</td>
              </tr>
              <tr>
                <td className="border px-2 py-1">Ayurveda</td>
                <td className="border px-2 py-1">Southeast Asia, EU</td>
                <td className="border px-2 py-1">WHO collaboration opportunity</td>
              </tr>
              <tr>
                <td className="border px-2 py-1">Cuisine</td>
                <td className="border px-2 py-1">US, UK, Canada</td>
                <td className="border px-2 py-1">Indian restaurants as diplomatic nodes</td>
              </tr>
              <tr>
                <td className="border px-2 py-1">Diaspora Festivals</td>
                <td className="border px-2 py-1">US, Mauritius, Malaysia</td>
                <td className="border px-2 py-1">Identity reinforcement + soft influence</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="overflow-x-auto mt-4">
          <table className="min-w-full text-sm border mb-2">
            <thead>
              <tr className="bg-primary-light text-primary">
                <th className="px-2 py-1 border">Region</th>
                <th className="px-2 py-1 border">Engagement Level</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-2 py-1">High Engagement</td>
                <td className="border px-2 py-1">US, UK, UAE, Japan, Kenya</td>
              </tr>
              <tr>
                <td className="border px-2 py-1">Low Engagement</td>
                <td className="border px-2 py-1">Eastern Europe, Latin America (potential expansion zones)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
);

export default ResearchEnhancements; 