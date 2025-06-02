import React from "react";
import { Link, useLocation, useParams } from "react-router";
import { ChevronRight, Home } from "lucide-react";

const capitalizeFirstLetter = (string) => {
  if (!string) return "";
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const Breadcrumb = ({ user }) => {
  const location = useLocation();
  const params = useParams();

  const pathnames = location.pathname.split("/").filter((x) => x);

  const filteredPathnames = pathnames.filter((segment, idx) => idx !== 2);

  const items = filteredPathnames.map((segment, index) => {
    // id skip hone ke baad "to" ko sahi banana hoga
    // original index nikalne ke liye ek helper bana lein
    const originalIndexes = pathnames
      .map((_, idx) => idx)
      .filter((idx) => idx !== 2);
    const to = `/${pathnames.slice(0, originalIndexes[index] + 1).join("/")}`;

    // label logic
    let label = segment;
    if (params && Object.values(params).includes(segment)) {
      label = segment;
    }
    label = capitalizeFirstLetter(label);

    return { label, to };
  });

  return (
    <nav className="flex items-center justify-between">
      <div
        aria-label="Breadcrumb"
        className="flex items-center my-14 space-x-1 text-sm text-gray-600"
      >
        <Link
          to="/"
          className="flex items-center text-black opacity-[0.5] hover:underline"
        >
          <Home className="h-4 w-4 mr-1" />
          Home
        </Link>
        {items.map((item, index) => (
          <div key={index} className="flex items-center space-x-1">
            <ChevronRight className="h-4 w-4 text-gray-400" />
            {index === items.length - 1 ? (
              <span className="text-gray-900 font-medium">{item.label}</span>
            ) : (
              <Link to={item.to} className="text-blue-600 hover:underline">
                {item.label}
              </Link>
            )}
          </div>
        ))}
      </div>
      {user && (
        <div className="text-[14px] text-black font-poppins font-[400]">
          Welcome! <span className="text-[#DB4444]">{user}</span>
        </div>
      )}
    </nav>
  );
};

export default Breadcrumb;
