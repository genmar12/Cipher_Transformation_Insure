import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-y-auto">
      {/* Navigation */}
      <nav className="bg-black/20 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              {/* Logo */}
              <div className="flex-shrink-0 flex items-center mr-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
              </div>
              <div className="flex-shrink-0">
                <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  SUCs Grievance Management
                </h1>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-4">
                <button
                  onClick={() => navigate('/auth')}
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-4 py-2 rounded-lg transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Login
                </button>
              </div>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => navigate('/auth')}
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-3 py-1.5 rounded-lg transition-all duration-300 font-medium text-sm"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Left-aligned Content */}
      <section className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-blue-600/5 to-cyan-600/5 rounded-full blur-2xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-16 z-10 py-12 lg:py-0">
          {/* Text Content - Strictly Left-aligned */}
          <div className="flex-1 max-w-2xl">
            <div className="text-left space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></span>
                <span className="text-blue-300 text-sm font-medium">AI-Powered Grievance Management</span>
              </div>
              
              <div className="text-left">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
                  <span className="block text-white mb-2">Streamlined</span>
                  <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent mb-2">
                    Grievance
                  </span>
                  <span className="block text-white">Management</span>
                </h1>
              </div>
              
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl leading-relaxed text-left">
                Efficiently handle and resolve grievances within State Universities and Colleges with our 
                <span className="text-blue-300 font-semibold"> secure, transparent, and AI-assisted</span> system.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <button
                  onClick={() => navigate('/auth?role=complainant')}
                  className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold rounded-xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center sm:justify-start"
                >
                  File a Complaint
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
                <button
                  onClick={() => navigate('/auth?role=admin')}
                  className="group px-8 py-4 border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-semibold rounded-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center sm:justify-start"
                >
                  Admin Portal
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Phone Animation - Right Side (Centered) */}
          <div className="flex-1 flex justify-center lg:justify-center mt-12 lg:mt-0">
            <div className="relative">
              {/* Floating Elements */}
              <div className="absolute -top-8 -left-8 w-20 h-20 bg-blue-500/20 rounded-full animate-ping"></div>
              <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-cyan-500/20 rounded-full animate-pulse"></div>
              <div className="absolute top-1/2 -right-12 w-12 h-12 bg-purple-500/20 rounded-full animate-bounce"></div>
              
              {/* Phone Frame */}
              <div className="relative w-64 h-[500px] bg-gradient-to-b from-gray-900 to-black rounded-[3rem] border-8 border-gray-800 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                {/* Screen */}
                <div className="absolute inset-4 bg-gradient-to-b from-blue-900 to-indigo-900 rounded-[2rem] overflow-hidden">
                  {/* Chat Interface */}
                  <div className="h-full flex flex-col p-4">
                    {/* Chat Header */}
                    <div className="flex items-center mb-4 p-3 bg-blue-800/30 backdrop-blur-sm rounded-xl border border-blue-700/30">
                      <div className="w-3 h-3 rounded-full bg-green-400 mr-3 animate-pulse"></div>
                      <div>
                        <h3 className="text-white font-semibold">AI Assistant</h3>
                        <p className="text-blue-300 text-xs">Always Available</p>
                      </div>
                    </div>
                    
                    {/* Chat Messages */}
                    <div className="flex-1 space-y-4 mb-4 overflow-y-auto">
                      {/* Bot Message */}
                      <div className="flex justify-start">
                        <div className="bg-blue-600/90 backdrop-blur-sm text-white rounded-2xl rounded-tl-none px-4 py-3 max-w-[80%] border border-blue-500/30 animate-fade-in">
                          <p className="text-sm">Hello! How can I help you with your grievance today? I'm here 24/7 to assist you.</p>
                        </div>
                      </div>
                      
                      {/* User Message */}
                      <div className="flex justify-end">
                        <div className="bg-gray-700/80 backdrop-blur-sm text-white rounded-2xl rounded-tr-none px-4 py-3 max-w-[80%] border border-gray-600/30 animate-fade-in-delay">
                          <p className="text-sm">I need to file a complaint about my grades.</p>
                        </div>
                      </div>
                      
                      {/* Bot Message */}
                      <div className="flex justify-start">
                        <div className="bg-blue-600/90 backdrop-blur-sm text-white rounded-2xl rounded-tl-none px-4 py-3 max-w-[80%] border border-blue-500/30 animate-fade-in-delay-2">
                          <p className="text-sm">I can help you with that. Let me guide you through our secure complaint process step by step.</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Input Area */}
                    <div className="flex items-center bg-gray-800/80 backdrop-blur-sm rounded-xl p-3 border border-gray-700/30">
                      <input 
                        type="text" 
                        placeholder="Type your message..." 
                        className="flex-1 bg-transparent text-white placeholder-gray-400 outline-none text-sm"
                        readOnly
                      />
                      <button className="ml-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-full p-2 transition-all duration-300 transform hover:scale-110">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Home Button */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gray-800 border-2 border-gray-700 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-b from-gray-700 to-gray-900"></div>
                </div>
                
                {/* Camera Notch */}
                <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-800 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
              <span className="text-blue-300 text-sm font-medium">Powerful Features</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6">
              Everything you need to manage grievances
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our comprehensive platform provides all the tools needed for efficient grievance resolution
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-500/30 transition-all duration-300 hover:bg-white/10 hover:-translate-y-2">
              <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Secure & Confidential</h3>
              <p className="text-gray-300 text-lg text-center leading-relaxed">
                Your grievances are handled with complete privacy and security through end-to-end encryption and role-based access controls.
              </p>
            </div>
            
            <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-500/30 transition-all duration-300 hover:bg-white/10 hover:-translate-y-2">
              <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Fast Resolution</h3>
              <p className="text-gray-300 text-lg text-center leading-relaxed">
                Quick processing and timely resolution of all grievances with automated workflow and real-time notifications.
              </p>
            </div>
            
            <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-500/30 transition-all duration-300 hover:bg-white/10 hover:-translate-y-2">
              <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Transparent Tracking</h3>
              <p className="text-gray-300 text-lg text-center leading-relaxed">
                Real-time status updates and progress tracking with detailed audit trails and comprehensive reporting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/30 backdrop-blur-sm border-t border-white/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-3">
            <div className="text-center">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-6">
                SUCs Grievance Management
              </h3>
              <p className="text-gray-400 text-lg max-w-xs mx-auto">
                Secure and efficient grievance management for State Universities and Colleges.
              </p>
            </div>
            <div className="text-center">
              <h4 className="text-xl font-semibold text-white mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <button 
                    onClick={() => navigate('/auth?role=complainant')}
                    className="text-gray-400 hover:text-blue-400 transition-colors text-lg"
                  >
                    File a Complaint
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => navigate('/auth?role=admin')}
                    className="text-gray-400 hover:text-blue-400 transition-colors text-lg"
                  >
                    Admin Portal
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => navigate('/auth')}
                    className="text-gray-400 hover:text-blue-400 transition-colors text-lg"
                  >
                    Login
                  </button>
                </li>
              </ul>
            </div>
            <div className="text-center">
              <h4 className="text-xl font-semibold text-white mb-6">Contact</h4>
              <div className="text-gray-400 text-lg space-y-3">
                <p>support@suc-grievance.edu</p>
                <p>+1 (555) 123-4567</p>
                <p>24/7 Support Available</p>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 mt-16 pt-10 text-center">
            <p className="text-gray-500 text-lg">
              © {new Date().getFullYear()} SUCs Grievance Management. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;