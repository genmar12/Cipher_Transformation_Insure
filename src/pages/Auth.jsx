import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AuthPage() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen w-screen bg-[#0A1A3F] flex items-center justify-center px-4">
      {/* Card */}
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 md:p-10">

        {/* Logo */}
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
            LOGO
          </div>
        </div>

        {/* Head Text */}
        <h1 className="text-2xl font-bold text-center text-gray-800">
          SUC Grievance System
        </h1>

        {/* Subtext */}
        <p className="text-center text-gray-500 mt-1 mb-6">
          PNLP-Powered Complaint Management Platform
        </p>

        {/* Switch Button */}
        <div className="flex bg-gray-100 rounded-full p-1 mb-6 w-full">
          <button
            className={`flex-1 py-2 rounded-full text-sm font-semibold transition ${
              isLogin
                ? "bg-blue-600 text-white"
                : "text-gray-600"
            }`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>

          <button
            className={`flex-1 py-2 rounded-full text-sm font-semibold transition ${
              !isLogin
                ? "bg-blue-600 text-white"
                : "text-gray-600"
            }`}
            onClick={() => setIsLogin(false)}
          >
            Sign Up
          </button>
        </div>

        {/* CONTENT BELOW SWITCH */}
        {isLogin ? (
          /* LOGIN VIEW */
          <div>
            <p className="text-center text-gray-600 mb-4">
              Login as:
            </p>

            <div className="space-y-3">
              <button onClick={() => navigate("/admin")} className="w-full py-3 rounded-lg border border-blue-600 text-blue-600 font-medium hover:bg-blue-600 hover:text-white transition">
                Administrator
              </button>

              <button
                onClick={() => navigate("/complainant")}
                className="w-full py-3 rounded-lg border border-blue-600 text-blue-600 font-medium hover:bg-blue-600 hover:text-white transition">
                Complainant
              </button>

              <button
                className="w-full py-3 rounded-lg border border-blue-600 text-blue-600 font-medium hover:bg-blue-600 hover:text-white transition"
              >
                Office Handler
              </button>
            </div>
          </div>
        ) : (
          /* SIGN UP VIEW */
          <form className="space-y-4">
            <p className="text-center text-gray-600">
              Create your account
            </p>

            <input
              type="email"
              placeholder="Email address"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Sign Up
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default AuthPage;
