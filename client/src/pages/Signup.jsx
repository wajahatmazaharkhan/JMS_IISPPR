const Signup = () => (
  <div className="min-h-screen flex items-center justify-center bg-primary-light px-4">
    <div className="bg-white shadow-lg rounded-2xl p-10 w-full max-w-md">
      <h2 className="text-3xl font-bold text-primary-dark mb-8 font-serif text-center"  style={{ color: '#693155ff' }}>Sign Up</h2>
      <form className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-text mb-1">Name</label>
          <input
            className="w-full border border-accent-light text-text bg-white rounded px-3 py-2"
            type="text"
            placeholder="Full name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-text mb-1">Email</label>
          <input
            className="w-full border border-accent-light text-text bg-white rounded px-3 py-2"
            type="email"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-text mb-1">Password</label>
          <input
            className="w-full border border-accent-light text-text bg-white rounded px-3 py-2"
            type="password"
            placeholder="Create a password"
          />
        </div>
        <button className="w-full bg-primary text-white py-2 rounded font-semibold hover:bg-primary-dark transition-colors">
          Sign Up
        </button>
      </form>
    </div>
  </div>
);

export default Signup;
