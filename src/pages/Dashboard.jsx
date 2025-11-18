import { useEffect, useState } from "react";
import { getUsers, getRequests, updateRequestStatus } from "../api/api";

export default function Dashboard() {
  const [users, setUsers] = useState([]);
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    getUsers().then(res => setUsers(res.data));
    getRequests().then(res => setRequests(res.data));
  }, []);

  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold">Dashboard</h2>

      <div className="grid grid-cols-3 gap-4 my-4">
        <div className="p-4 bg-white shadow rounded">
          Students: {users.filter(u => u.role === "student").length}
        </div>
        <div className="p-4 bg-white shadow rounded">
          Professionals: {users.filter(u => u.role === "professional").length}
        </div>
        <div className="p-4 bg-white shadow rounded">
          Requests: {requests.length}
        </div>
      </div>

      <div className="bg-white p-4 shadow rounded">
        <h3 className="font-semibold mb-3">Requests</h3>

        {requests.map(r => (
          <div key={r._id} className="p-3 border rounded mb-3">
            <div><strong>{r.topic}</strong></div>
            <div className="text-sm">{r.details}</div>
            <div className="mb-2">Status: {r.status}</div>

            <button
              onClick={() => updateRequestStatus(r._id, "accepted")}
              className="px-3 py-1 border rounded mr-2">
              Accept
            </button>

            <button
              onClick={() => updateRequestStatus(r._id, "declined")}
              className="px-3 py-1 border rounded">
              Decline
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
