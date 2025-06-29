const boardMembers = [
  { name: 'Dr. Abuzar Nomani', desc: 'Assoc. Prof. – Business Management, CV Raman Global University' },
  { name: 'Dr. Mayank Kumar', desc: 'Computer Science' },
  { name: 'Dr. Varun Kumar', desc: 'Commerce, Arunachal University of Studies' },
  { name: 'Dr. Faizan Khan Sherwani', desc: 'Management, Jamia Hamdard' },
  { name: 'Dr. Rahila Rais', desc: 'Hindi, AMU' },
  { name: 'Dr. Mohd Farooq Khan', desc: 'Literary Critic' },
  { name: 'Dr. Kashif Raees', desc: 'Science, Chandigarh University' },
];
const libraryStaff = [
  { name: 'Adil Raees, B.Lib', desc: 'Librarian' },
];

const EditorialBoard = () => (
  <div className="min-h-screen bg-primary-light/25">
    {/* Hero Banner */}
    <div className="bg-primary-dark text-white py-12  text-center ">
      <h1 className="text-4xl font-bold font-serif mb-2">Editorial Board</h1>
      <p className="text-accent-light max-w-2xl mx-auto">
        Meet our esteemed editorial board committed to academic excellence, peer-review integrity, and interdisciplinary leadership.
      </p>
    </div>

    <div className="p-6">
      {/* Editorial Members Grid */}
    <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {boardMembers.map((member, idx) => (
        <div
          key={idx}
          className="bg-white border border-accent-light p-6 rounded-lg shadow-sm hover:shadow-md hover:border-primary transition"
        >
          <h2 className="text-lg font-bold text-primary-dark font-serif mb-1">{member.name}</h2>
          <p className="text-subtext text-sm">{member.desc}</p>
        </div>
      ))}
      {libraryStaff.map((member, idx) => (
        <div
          key={idx + 100}
          className="bg-white border border-accent-light p-6 rounded-lg shadow-sm hover:shadow-md hover:border-primary transition"
        >
          <h2 className="text-lg font-bold text-primary-dark font-serif mb-1">{member.name}</h2>
          <p className="text-subtext text-sm">{member.desc}</p>
        </div>
      ))}
    </div>

    {/* Student Panel */}
    <div className="max-w-4xl mx-auto mt-16 p-6  text-center">
      <h2 className="text-xl font-semibold text-primary mb-2">Student Editorial Panel</h2>
      <p className="text-subtext">
        We are building a student-led editorial panel for UG/PG scholars to foster leadership and academic excellence. Interested students will be added soon.
      </p>
    </div>
  </div>
    </div>
    
);

export default EditorialBoard;
