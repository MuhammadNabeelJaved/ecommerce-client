import React from "react";
import { Link, useLocation, useParams } from "react-router";
import { ChevronRight, Home } from "lucide-react";

const capitalizeFirstLetter = (string) => {
  if (!string) return "";
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const Breadcrumb = () => {
  const location = useLocation();
  const params = useParams();

  const pathnames = location.pathname.split("/").filter((x) => x);

  const items = pathnames.map((segment, index) => {
    const to = `/${pathnames.slice(0, index + 1).join("/")}`;

    // Use params or default segment
    let label = segment;

    if (params && params[segment]) {
      label = params[segment];
    }

    // Capitalize first letter of label
    label = capitalizeFirstLetter(label);

    return { label, to };
  });

  return (
    <nav
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
    </nav>
  );
};

export default Breadcrumb;
