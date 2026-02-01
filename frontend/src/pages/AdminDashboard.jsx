import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminDashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("grievances");

  return (
    <div className="min-h-screen bg-gray-100">

      {/* HEADER */}
      <header className="bg-[#0A1A3F] text-white px-6 py-4 flex justify-between items-center w-full mx-auto">

        {/* Left */}
        <div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white text-[#6495ED] rounded-full flex items-center justify-center font-bold">
              LOGO
            </div>
            <div className="flex flex-col">
            <h1 className="text-xl font-bold">Grievance Management System</h1>
            <p className="text-sm opacity-90">
              Administrative Control Panel
            </p>
            </div>
            
          </div>
         
        </div>

        {/* Right */}
        <div className="flex items-center gap-6">
          <span className="text-xl">🔔</span>

          <div className="text-right">
            <h2 className="font-semibold">Admin User</h2>
            <p className="text-sm opacity-90">Administrator</p>
          </div>

          <button onClick={() => navigate("/auth")} className="text-xl cursor-pointer">🚪</button>
        </div>
      </header>

      {/* BODY */}
       <main className="p-6 space-y-6">


        {/* STAT BOXES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {[
            { name: "Total Grievances", color: "bg-[#0A1A3F] text-white" },
            { name: "Pending", color: "bg-white" },
            { name: "In Progress", color: "bg-white" },
            { name: "Resolved", color: "bg-white" },
            { name: "Critical", color: "bg-white" },
          ].map((box, i) => (
            <div
              key={i}
              className={`${box.color} h-40 rounded-xl p-4 shadow flex flex-col justify-between`}
            >
              <h3 className="font-semibold">
                {box.name}
              </h3>
              <div className="flex justify-between items-end">
                <span className="text-2xl font-bold">0</span>
                <span className="text-xl">📊</span>
              </div>
            </div>
          ))}
        </div>

        {/* SWITCH BUTTONS */}
        <div className="flex bg-white rounded-full p-1 w-4xl max-w-4xl mx-auto shadow">
          {[
            { key: "grievances", label: "Grievances" },
            { key: "analytics", label: "Analytics" },
            { key: "reports", label: "Reports" },
          ].map((btn) => (
            <button
              key={btn.key}
              onClick={() => setActiveTab(btn.key)}
              className={`w-full sm:w-1/3 px-6 py-1 rounded-full font-medium transition ${
                activeTab === btn.key ? "bg-[#0A1A3F] text-white" : "text-gray-600"
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {activeTab === "grievances" && (
          <div className="bg-white rounded-xl p-6 shadow space-y-4">

            {/* Header */}
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-bold">
                  Grievance Management
                </h2>
                <p className="text-sm text-gray-500">
                  View, filter, and manage all grievances
                </p>
              </div>

              <button className="bg-[#6495ED] text-white px-4 py-2 rounded-lg">
                + Create Grievance
              </button>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-3">
              <input
                placeholder="Search grievances..."
                className="flex-1 min-w-[200px] border p-2 rounded-lg"
              />
              <select className="border p-2 rounded-lg">
                <option>All Statuses</option>
              </select>
              <select className="border p-2 rounded-lg">
                <option>All Categories</option>
              </select>
            </div>

            {/* Info */}
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">
                Showing 5 of 5 grievances
              </span>

              <button className="bg-[#6495ED] text-white px-4 py-2 rounded-lg flex items-center gap-2">
                📤 Export
              </button>
            </div>

            {/* Data Placeholder */}
            <div className="space-y-3">
              <div className="h-16 bg-gray-100 rounded-lg" />
              <div className="h-16 bg-gray-100 rounded-lg" />
              <div className="h-16 bg-gray-100 rounded-lg" />
            </div>
          </div>
        )}

        {activeTab === "analytics" && (
          <div className="space-y-6 h-[calc(100vh-6rem)] overflow-y-auto p-4">
            {/* Small Boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                "Resolution Rate",
                "Avg Response Time",
                "Most Common Category",
                "User Satisfaction",
              ].map((title, i) => (
                <div key={i} className="bg-white p-4 rounded-xl shadow">
                  <h3 className="font-semibold">{title}</h3>
                  <p className="text-2xl font-bold mt-2">—</p>
                </div>
              ))}
            </div>

            {/* Big Boxes */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
              <div className="bg-white h-48 rounded-xl shadow" />
              <div className="bg-white h-48 rounded-xl shadow" />
              <div className="bg-white h-48 rounded-xl shadow" />
              <div className="bg-white h-48 rounded-xl shadow" />
            </div>

            {/* Trend Graph */}
            <div className="bg-white h-64 rounded-xl shadow" />
          </div>
        )}

        {activeTab === "reports" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Monthly Report",
              "Annual Summary",
              "Critical Issues",
              "Custom Report",
            ].map((title, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow space-y-3">
                <h3 className="font-bold">{title}</h3>
                <p className="text-sm text-gray-500">
                  Download or configure report
                </p>

                <button
                  className={`px-4 py-2 rounded-lg ${i === 3
                      ? "border hover:bg-orange-400 hover:text-white"
                      : "bg-[#6495ED] text-white"
                    }`}
                >
                  {i === 3 ? "Configure" : "Download"}
                </button>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default AdminDashboard;
