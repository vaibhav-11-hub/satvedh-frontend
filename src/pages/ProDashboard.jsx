export default function ProDashboard() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Professional Dashboard</h1>

      <p className="mt-2">Welcome, {user?.name}</p>

      <div className="mt-4 space-y-3">
        <a href="/requests" className="block p-3 bg-green-600 text-white rounded">
          View Student Requests
        </a>
      </div>
    </div>
  );
}
