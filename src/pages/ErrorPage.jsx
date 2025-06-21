import React from 'react';
import { Home, RefreshCw, ArrowLeft, AlertTriangle, Wifi, Server, ShoppingCart } from 'lucide-react';

const ErrorPage = ({
  errorCode = "404",
  errorTitle = "Page Not Found",
  errorMessage = "The page you're looking for doesn't exist or has been moved.",
  errorType = "notFound", // notFound, serverError, networkError, maintenance, forbidden
  showRetry = true,
  showGoHome = true,
  showGoBack = true,
  onRetry = () => window.location.reload(),
  onGoHome = () => window.location.href = "/",
  onGoBack = () => window.history.back(),
  customActions = null,
  theme = "light" // light, dark
}) => {
  const getErrorIcon = () => {
    switch (errorType) {
      case "serverError":
        return <Server className="w-16 h-16 text-red-500" />;
      case "networkError":
        return <Wifi className="w-16 h-16 text-orange-500" />;
      case "maintenance":
        return <RefreshCw className="w-16 h-16 text-blue-500" />;
      case "forbidden":
        return <AlertTriangle className="w-16 h-16 text-yellow-500" />;
      case "cart":
        return <ShoppingCart className="w-16 h-16 text-purple-500" />;
      default:
        return <AlertTriangle className="w-16 h-16 text-gray-500" />;
    }
  };

  const getErrorColor = () => {
    switch (errorType) {
      case "serverError":
        return "text-red-600";
      case "networkError":
        return "text-orange-600";
      case "maintenance":
        return "text-blue-600";
      case "forbidden":
        return "text-yellow-600";
      case "cart":
        return "text-purple-600";
      default:
        return "text-gray-600";
    }
  };

  const getBackgroundPattern = () => {
    if (theme === "dark") {
      return "bg-gradient-to-br from-gray-900 via-gray-800 to-black";
    }
    return "bg-gradient-to-br from-gray-50 via-white to-gray-100";
  };

  const getCardStyle = () => {
    if (theme === "dark") {
      return "bg-gray-800 border-gray-700 text-white";
    }
    return "bg-white border-gray-200 text-gray-900";
  };

  const getTextColor = () => {
    return theme === "dark" ? "text-gray-300" : "text-gray-600";
  };

  return (
    <div className={`min-h-screen flex items-center justify-center p-4 ${getBackgroundPattern()}`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="relative w-full max-w-2xl mx-auto">
        {/* Main Error Card */}
        <div className={`${getCardStyle()} rounded-2xl border shadow-2xl p-8 md:p-12 text-center relative overflow-hidden`}>
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-500 via-orange-500 to-purple-500"></div>
          
          {/* Error Icon */}
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-full bg-gray-100 dark:bg-gray-700">
              {getErrorIcon()}
            </div>
          </div>

          {/* Error Code */}
          <div className={`text-6xl md:text-8xl font-bold ${getErrorColor()} mb-4`}>
            {errorCode}
          </div>

          {/* Error Title */}
          <h1 className="text-2xl md:text-3xl font-bold mb-4">
            {errorTitle}
          </h1>

          {/* Error Message */}
          <p className={`${getTextColor()} text-lg mb-8 leading-relaxed`}>
            {errorMessage}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {showGoHome && (
              <button
                onClick={onGoHome}
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              >
                <Home className="w-5 h-5 mr-2" />
                Go Home
              </button>
            )}

            {showRetry && (
              <button
                onClick={onRetry}
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              >
                <RefreshCw className="w-5 h-5 mr-2" />
                Try Again
              </button>
            )}

            {showGoBack && (
              <button
                onClick={onGoBack}
                className={`w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-gray-300 hover:border-gray-400 ${theme === 'dark' ? 'border-gray-600 hover:border-gray-500 text-gray-300' : 'text-gray-700'} font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2`}
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Go Back
              </button>
            )}
          </div>

          {/* Custom Actions */}
          {customActions && (
            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
              {customActions}
            </div>
          )}
        </div>

        {/* Additional Info Card */}
        <div className={`mt-6 ${getCardStyle()} rounded-xl border p-6 text-center`}>
          <h3 className="font-semibold mb-2">Need Help?</h3>
          <p className={`${getTextColor()} text-sm mb-4`}>
            If you continue to experience issues, please contact our support team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
            <a href="mailto:support@exclusive.com" className="text-red-600 hover:text-red-700 font-medium">
              Email Support
            </a>
            <a href="/contact" className="text-red-600 hover:text-red-700 font-medium">
              Contact Us
            </a>
            <a href="/faq" className="text-red-600 hover:text-red-700 font-medium">
              FAQ
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

// Example usage with different error types
const ErrorPageExamples = () => {
  const [currentError, setCurrentError] = React.useState("404");

  const errorConfigs = {
    "404": {
      errorCode: "404",
      errorTitle: "Page Not Found",
      errorMessage: "The page you're looking for doesn't exist or has been moved.",
      errorType: "notFound"
    },
    "500": {
      errorCode: "500",
      errorTitle: "Server Error",
      errorMessage: "Something went wrong on our end. We're working to fix it.",
      errorType: "serverError",
      showRetry: true
    },
    "network": {
      errorCode: "No Connection",
      errorTitle: "Network Error",
      errorMessage: "Please check your internet connection and try again.",
      errorType: "networkError"
    },
    "maintenance": {
      errorCode: "503",
      errorTitle: "Under Maintenance",
      errorMessage: "We're currently performing scheduled maintenance. Please check back soon.",
      errorType: "maintenance",
      showRetry: false
    },
    "forbidden": {
      errorCode: "403",
      errorTitle: "Access Forbidden",
      errorMessage: "You don't have permission to access this resource.",
      errorType: "forbidden",
      showRetry: false
    },
    "cart": {
      errorCode: "Oops!",
      errorTitle: "Cart Error",
      errorMessage: "There was an issue with your shopping cart. Please try again.",
      errorType: "cart"
    }
  };

  return (
    <div>
      {/* Error Type Selector for Demo */}
      <div className="fixed top-4 left-4 z-50 bg-white rounded-lg shadow-lg p-4 border">
        <h3 className="font-semibold mb-2 text-sm">Demo Error Types:</h3>
        <div className="grid grid-cols-2 gap-2">
          {Object.keys(errorConfigs).map((key) => (
            <button
              key={key}
              onClick={() => setCurrentError(key)}
              className={`px-3 py-1 text-xs rounded ${
                currentError === key 
                  ? 'bg-red-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {key.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Current Error Display */}
      <ErrorPage
        {...errorConfigs[currentError]}
        customActions={
          currentError === "cart" ? (
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm">
                View Cart
              </button>
              <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm">
                Continue Shopping
              </button>
            </div>
          ) : null
        }
      />
    </div>
  );
};

export default ErrorPageExamples;