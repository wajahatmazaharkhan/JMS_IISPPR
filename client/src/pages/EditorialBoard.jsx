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
  <div className="max-w-7xl mx-auto px-4 py-10">
    <h1 className="text-3xl font-bold text-center text-indigo-700 mb-10">Editorial Board</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {boardMembers.map((member, idx) => (
        <div key={idx} className="bg-white shadow-md p-5 rounded-xl">
          <h2 className="text-lg font-semibold">{member.name}</h2>
          <p className="text-sm">{member.desc}</p>
        </div>
      ))}
      {libraryStaff.map((member, idx) => (
        <div key={idx + 100} className="bg-white shadow-md p-5 rounded-xl">
          <h2 className="text-lg font-semibold">{member.name}</h2>
          <p className="text-sm">{member.desc}</p>
        </div>
      ))}
    </div>
    <div className="mt-10">
      <h2 className="text-xl font-semibold text-indigo-600">Student Editorial Panel</h2>
      <p>We are building a student-led editorial panel for UG/PG scholars to foster leadership and academic excellence. Interested students will be added soon.</p>
    </div>
  </div>
);

export default EditorialBoard; 