import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  const location = useLocation();

  if (location.pathname.includes('/works/')) {
    return (
      <div id="Nav" className="w-100">
        <span className="nav-toggle m-auto text-center">
          <Link to="/works" className="mt-0">
            ← Back to home
          </Link>
        </span>
      </div>
    );
  }
  return (
    <div id="Nav">
      <NavLink
        to="/about"
        className={`nav-toggle mr-3 ${location.pathname === '/' && 'active'}`}
        activeClassName="active"
      >
        Bae Seonghyeon
      </NavLink>
      <NavLink to="/works" className="nav-toggle" activeClassName="active">
        Works
      </NavLink>
    </div>
  );
};

export default React.memo(Header);
