import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import staticUsers from "../data/staticUsers";
import { ArrowLeft } from "lucide-react";

const roleToRoute = {
  admin: "/admin",
  editor: "/editor",
  reviewer: "/reviewer",
  author: "/author",
  reader: "/reader",
};

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    const user = staticUsers.find(
      (u) => u.email === form.email && u.password === form.password
    );
    if (user) {
      navigate(roleToRoute[user.role]);
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-primary-light px-4">
      <div className="bg-white shadow-lg rounded-2xl p-10 w-full max-w-md relative">
        <h2 className="text-3xl font-bold text-primary-dark mb-8 font-serif text-center">
          Login
        </h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-text mb-1">
              Email
            </label>
            <input
              className="w-full border border-accent-light text-text rounded px-3 py-2 bg-white"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              autoComplete="username"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-text mb-1">
              Password
            </label>
            <input
              className="w-full border border-accent-light text-text rounded px-3 py-2 bg-white"
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Enter your password"
              autoComplete="current-password"
            />
          </div>
          {error && (
            <div className="text-red-600 text-sm text-center">{error}</div>
          )}
          <button className="w-full bg-primary text-white py-2 rounded font-semibold hover:bg-primary-dark transition-colors">
            Login
          </button>
        </form>
        <div className="mt-6 text-center">
          <span className="text-subtext">Don't have an account? </span>
          <Link
            to="/signup"
            className="text-primary font-semibold hover:underline"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
