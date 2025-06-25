const Signup = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4">
    <div className="bg-white shadow-lg rounded-2xl p-10 w-full max-w-md">
      <h2 className="text-3xl font-bold text-indigo-700 mb-8 text-center">Sign Up</h2>
      <form className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input className="w-full border border-gray-300 rounded px-3 py-2" type="text" placeholder="Full name" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input className="w-full border border-gray-300 rounded px-3 py-2" type="email" placeholder="Enter your email" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Password</label>
          <input className="w-full border border-gray-300 rounded px-3 py-2" type="password" placeholder="Create a password" />
        </div>
        <button className="w-full bg-indigo-700 text-white py-2 rounded font-semibold hover:bg-indigo-800 transition">Sign Up</button>
      </form>
    </div>
  </div>
);

export default Signup; 