import { useEffect, useState } from "react";
import axios from "axios";

export default function Professionals() {
  const [pros, setPros] = useState([]);
  const [search, setSearch] = useState("");
  const [domain, setDomain] = useState("");

  async function fetchData() {
    const res = await axios.get(
      "http://localhost:5000/api/users/professionals",
      { params: { search, domain } }
    );
    setPros(res.data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  function handleFilter() {
    fetchData();
  }

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Find Professionals</h1>

      {/* Search + Filter */}
      <div className="flex gap-2">
        <input
          className="flex-1 p-2 border rounded"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="p-2 border rounded"
          value={domain}
          onChange={(e) => setDomain(e.target.value)}
        >
          <option value="">All Domains</option>
          <option value="Ayurveda">Ayurveda</option>
          <option value="IT">IT</option>
          <option value="Commerce">Commerce</option>
          <option value="Medical">Medical</option>
        </select>

        <button
          onClick={handleFilter}
          className="px-4 bg-indigo-600 text-white rounded"
        >
          Apply
        </button>
      </div>

      {/* Results */}
      <div className="mt-5 space-y-3">
        {pros.map((p) => (
          <div key={p._id} className="p-3 border rounded shadow-sm bg-white">
            <h2 className="text-lg font-semibold">{p.name}</h2>
            <p className="text-gray-600">{p.email}</p>
            <p className="text-sm">{p.domain}</p>
            <p className="italic">{p.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
