import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="flex justify-between items-center bg-indigo-600 p-4 text-white rounded-lg">
      <div>
        <h1 className="font-bold text-xl">Satvedh Connect</h1>
        <p className="text-sm">Students ↔ Professionals</p>
      </div>

      <div className="flex gap-2">
        <Link className="bg-white/20 px-3 py-1 rounded" to="/">Home</Link>
        <Link className="bg-white/20 px-3 py-1 rounded" to="/register-student">Student</Link>
        <Link className="bg-white/20 px-3 py-1 rounded" to="/register-pro">Professional</Link>
        <Link to="/login" className="bg-white/20 px-3 py-1 rounded">Login</Link>

        <Link className="bg-white/20 px-3 py-1 rounded" to="/pros">Find Pros</Link>
        <Link className="bg-white/20 px-3 py-1 rounded" to="/dashboard">Dashboard</Link>
      </div>
    </div>
  );
}
