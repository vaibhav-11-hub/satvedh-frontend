export default function StudentDashboard() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Student Dashboard</h1>

      <p className="mt-2">Welcome, {user?.name}</p>

      <div className="mt-4 space-y-3">
        <a href="/pros" className="block p-3 bg-indigo-600 text-white rounded">
          View Professionals
        </a>
      </div>
    </div>
  );
}
