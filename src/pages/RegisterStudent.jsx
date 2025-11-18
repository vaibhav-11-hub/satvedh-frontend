import { useState } from "react";
import { registerUser } from "../api/api";

export default function RegisterStudent() {
  const [form, setForm] = useState({ name: "", email: "", domain: "", bio: "" });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await registerUser({ ...form, role: "student" });
    alert("Student registered successfully!");
  }

  return (
    <div className="max-w-xl mx-auto mt-6 bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold">Student Registration</h2>

      <form onSubmit={handleSubmit} className="mt-4 space-y-3">
        <input className="w-full p-2 border rounded" name="name" placeholder="Full Name" onChange={handleChange}/>
        <input className="w-full p-2 border rounded" name="email" placeholder="Email" onChange={handleChange}/>
        <input className="w-full p-2 border rounded" name="domain" placeholder="Domain" onChange={handleChange}/>
        <textarea className="w-full p-2 border rounded" name="bio" placeholder="Short Bio" onChange={handleChange}/>
        <button className="px-4 py-2 bg-indigo-600 text-white rounded">Register</button>
      </form>
    </div>
  );
}
