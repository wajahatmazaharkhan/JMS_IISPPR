import TopNavbar from '../components/TopNavbar';

const EditorialBoard = () => {
  const boardMembers = [
    {
      name: 'Dr. Abuzar Nomani (Post Doc)',
      desc: 'Chief Editor, Assoc. Prof. at Vellore Institute of Technology',
      email: 'abuzarnomani88@gmail.com',
    },
    {
      name: 'Dr. Rahila Rais',
      desc: 'Literature, AMU',
      email: 'rahilarais@gmail.com',
    },
    {
      name: 'Dr. Riaz Ahmad',
      desc: 'Assistant Professor, AMU',
      email: 'riaz.ahmad.tech@gmail.com',
    },
    {
      name: 'Dr. Kashif Raees',
      desc: 'Science, Chandigarh University',
      email: 'Kashif.e11790@cumail.in',
    },
    {
      name: 'Dr. Mayank Kumar',
      desc: 'Computer Science',
      email: 'singhal009123@gmail.com',
    },
    {
      name: 'Mohd Adnan',
      desc: 'Assistant Professor, Uttranchal University, Dehradun, India',
      email: 'mohdadnan@uumail.in',
    },
    {
      name: 'Dr. Sunny Wadhwaniya',
      desc: 'Assistant Professor, School of Doctoral Research and Innovation, GLS University',
      email: 'sunny.cug@gmail.com',
    },
    {
      name: 'Dr. Varun Kumar',
      desc: 'Commerce, Arunachal University of Studies',
    },
    {
      name: 'Dr. Faizan Khan Sherwani',
      desc: 'Assistant Professor, Department of Management, Jamia Hamdard',
      email: 'faizanagri2017@gmail.com',
    },
    {
      name: 'Dr. Mohd Farooq Khan',
      desc: 'Author and Critic, PhD',
      email: 'mfkhan786@gmail.com',
    },
  ];

  return (
    <div className="min-h-screen bg-primary-light/25">
      {/* <TopNavbar /> */}

      {/* Hero Banner */}
      <div className="bg-primary-dark text-white py-12 text-center">
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
              <p className="text-subtext text-sm mb-1">{member.desc}</p>
              {member.email && (
                <p className="text-sm text-gray-600 break-all">
                  <span className="font-medium">Email: </span>
                  <a href={`mailto:${member.email}`} className="text-primary hover:underline">
                    {member.email}
                  </a>
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Student Panel */}
        <div className="max-w-4xl mx-auto mt-16 p-6 text-center">
          <h2 className="text-xl font-semibold text-primary mb-2">Student Editorial Panel</h2>
          <p className="text-subtext">
            We are building a student-led editorial panel for UG/PG scholars to foster leadership and academic excellence.
            Interested students will be added soon.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EditorialBoard;
