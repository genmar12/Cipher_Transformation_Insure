import { useState, useEffect } from "react";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";

function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [showSignup, setShowSignup] = useState(false);

  // Listen for switch events from child components
  useEffect(() => {
    const handleSwitchToLogin = () => {
      setIsLogin(true);
      setShowSignup(false);
    };

    const handleSwitchToSignup = () => {
      setIsLogin(false);
      setShowSignup(true);
    };

    window.addEventListener('switchToLogin', handleSwitchToLogin);
    window.addEventListener('switchToSignup', handleSwitchToSignup);
    
    return () => {
      window.removeEventListener('switchToLogin', handleSwitchToLogin);
      window.removeEventListener('switchToSignup', handleSwitchToSignup);
    };
  }, []);

  const toggleView = () => {
    setIsLogin(!isLogin);
    setShowSignup(!showSignup);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Full Navy Blue Background */}
      <div className="w-full lg:w-1/2 bg-gradient-to-br from-slate-800 to-blue-900">
        <div className="min-h-screen flex flex-col justify-center p-8">
          {/* Animated SVG Illustration - Bigger Size */}
          <div className="relative h-96 mb-8">
            {/* Background Elements */}
            <div className="absolute inset-0">
              <div className="absolute top-12 left-12 w-20 h-20 bg-blue-500/20 rounded-full animate-ping"></div>
              <div className="absolute bottom-12 right-12 w-16 h-16 bg-cyan-500/20 rounded-full animate-pulse"></div>
              <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-purple-500/10 rounded-full animate-bounce"></div>
            </div>
            
            {/* Main Illustration - Larger Size */}
            <div className="relative z-10 flex items-center justify-center h-full">
              {/* Document Icon - Bigger */}
              <div className="relative">
                <div className="w-32 h-40 bg-white/10 backdrop-blur-sm rounded-xl border-2 border-white/20 flex flex-col items-center justify-center p-6 transform hover:scale-105 transition-transform duration-300">
                  <svg className="w-16 h-16 text-white mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <div className="text-white text-sm font-medium text-center">Grievance</div>
                </div>
                
                {/* Floating Elements - Bigger */}
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center animate-bounce">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                
                <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center animate-pulse">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              
              {/* Connecting Lines - Longer */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-32 h-1.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-pulse"></div>
              </div>
            </div>
            
            {/* Animated Particles - More Spread Out */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-3 h-3 bg-white/30 rounded-full animate-float"
                  style={{
                    left: `${15 + i * 12}%`,
                    top: `${25 + (i % 4) * 15}%`,
                    animationDelay: `${i * 0.5}s`,
                    animationDuration: `${3 + i}s`
                  }}
                ></div>
              ))}
            </div>
          </div>
          
          {/* Text Content */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">SUC Grievance System</h2>
            <p className="text-blue-200 text-lg mb-8">Secure and efficient complaint management for State Universities and Colleges</p>
            
            {/* Feature Highlights - Bigger Icons */}
            <div className="grid grid-cols-3 gap-6 mt-10">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600/30 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-8 h-8 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <span className="text-blue-200 text-base">Secure</span>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-600/30 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-8 h-8 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-cyan-200 text-base">Fast</span>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600/30 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-8 h-8 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <span className="text-purple-200 text-base">Transparent</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Full White Background */}
      <div className="w-full lg:w-1/2 bg-white">
        <div className="min-h-screen flex flex-col">
          {/* Header */}
          <div className="p-8 border-b border-gray-200">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
            </div>
            <h1 className="text-2xl font-bold text-center text-gray-900">Welcome Back</h1>
            <p className="text-center text-gray-600 mt-1">PNLP-Powered Complaint Management</p>
          </div>

          {/* Toggle Switch */}
          <div className="p-8">
            <div className="flex bg-gray-100 rounded-full p-1 mb-8">
              <button
                className={`flex-1 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                  isLogin
                    ? "bg-white text-blue-600 shadow-sm"
                    : "text-gray-600 hover:text-gray-800"
                }`}
                onClick={() => {
                  setIsLogin(true);
                  setShowSignup(false);
                }}
              >
                Sign In
              </button>
              <button
                className={`flex-1 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                  !isLogin
                    ? "bg-white text-blue-600 shadow-sm"
                    : "text-gray-600 hover:text-gray-800"
                }`}
                onClick={toggleView}
              >
                Sign Up
              </button>
            </div>

            {/* Form Content */}
            <div className="flex-1">
              {isLogin ? (
                <LoginForm />
              ) : (
                <SignupForm />
              )}
            </div>
          </div>

          {/* Footer */}
          <div className="mt-auto p-8 text-center border-t border-gray-200">
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} SUC Grievance Management System
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthPage;