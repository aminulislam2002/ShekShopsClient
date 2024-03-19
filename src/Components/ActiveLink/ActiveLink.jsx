/* eslint-disable react/prop-types */
import { Link, useLocation } from "react-router-dom";

const ActiveLink = ({ to, label, activeClassName, className }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link to={to} className={`${className} ${isActive ? activeClassName : ""}`}>
      {label}
    </Link>
  );
};

export default ActiveLink;
