import { useState } from "react";
import { registerUser } from "../api/api";

export default function RegisterPro() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    domain: "",
    bio: ""
  });

  // Handle form input updates
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  // Submit form
  async function handleSubmit(e) {
    e.preventDefault();

    // Send data to backend
    await registerUser({ 
      ...form, 
      role: "professional" 
    });

    alert("Professional Registered Successfully!");
  }

  return (
    <div className="max-w-xl mx-auto mt-6 bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold">Professional Registration</h2>

      <form onSubmit={handleSubmit} className="mt-4 space-y-3">

        <input
          className="w-full p-2 border rounded"
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
        />

        <input
          className="w-full p-2 border rounded"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />

        <input
          className="w-full p-2 border rounded"
          name="domain"
          placeholder="Domain (Example: Cardiology, IT, Commerce)"
          onChange={handleChange}
        />

        <textarea
          className="w-full p-2 border rounded"
          name="bio"
          placeholder="Short Bio / Experience"
          onChange={handleChange}
        />

        <button
          className="px-4 py-2 bg-indigo-600 text-white rounded">
          Register
        </button>
      </form>
    </div>
  );
}
