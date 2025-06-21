import React from 'react';
import { AlertTriangle, RefreshCw, Home, ArrowLeft } from 'lucide-react';

const ErrorPage = () => {
  // Sample error for demonstration - you can pass this as props
  const error = "Failed to load data. Please check your internet connection and try again.";

  const handleRefresh = () => {
    window.location.reload();
  };

  const handleGoHome = () => {
    // You can replace this with your routing logic
    window.history.back();
  };

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl mx-auto">
        {/* Main Error Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-red-500 to-red-600 px-6 py-8 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-4 animate-pulse">
              <AlertTriangle className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">Oops! Something went wrong</h1>
            <p className="text-red-100 text-lg">We encountered an unexpected error</p>
          </div>

          {/* Error Message Section */}
          <div className="px-6 py-8">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="text-sm font-semibold text-red-800 mb-1">Error Details:</h3>
                  <p className="text-red-700 text-sm leading-relaxed">{error}</p>
                </div>
              </div>
            </div>

            {/* Helpful Information */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">What you can try:</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Refresh the page to try again</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Check your internet connection</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Clear your browser cache and cookies</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Try again in a few minutes</span>
                </li>
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleRefresh}
                className="flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                <RefreshCw className="w-5 h-5" />
                <span>Try Again</span>
              </button>
              
              <button
                onClick={handleGoBack}
                className="flex items-center justify-center space-x-2 bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Go Back</span>
              </button>
              
              <button
                onClick={handleGoHome}
                className="flex items-center justify-center space-x-2 border-2 border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-800 px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              >
                <Home className="w-5 h-5" />
                <span>Home</span>
              </button>
            </div>
          </div>
        </div>

        {/* Support Section */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">Still having trouble?</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
            <a 
              href="mailto:support@example.com" 
              className="text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
            >
              Contact Support
            </a>
            <span className="hidden sm:inline text-gray-400">•</span>
            <a 
              href="/help" 
              className="text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
            >
              Help Center
            </a>
            <span className="hidden sm:inline text-gray-400">•</span>
            <a 
              href="/status" 
              className="text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
            >
              Service Status
            </a>
          </div>
        </div>

        {/* Error Code (Optional) */}
        <div className="mt-6 text-center">
          <p className="text-xs text-gray-400">Error Code: ERR_500_INTERNAL</p>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;