const ContactPage = () => {
  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
      <form className="space-y-4 bg-white p-6 rounded shadow">
        <div>
          <label className="block mb-1 font-medium">Name</label>
          <input type="text" className="w-full border border-gray-300 rounded px-3 py-2" placeholder="Your Name" />
        </div>
        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input type="email" className="w-full border border-gray-300 rounded px-3 py-2" placeholder="Your Email" />
        </div>
        <div>
          <label className="block mb-1 font-medium">Message</label>
          <textarea className="w-full border border-gray-300 rounded px-3 py-2" rows="4" placeholder="Your Message"></textarea>
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Send</button>
      </form>
    </div>
  );
};

export default ContactPage; 