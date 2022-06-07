import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

import styles from './Header.module.scss';
import cb from 'classnames/bind';
const cn = cb.bind(styles);

const Header = () => {
  const location = useLocation();

  if (location.pathname.includes('/works/')) {
    return (
      <div className={cn('container', 'center')}>
        <span className={cn('toggle', 'm-auto', 'text-center')}>
          <Link to="/works" className="mt-0">
            ← Back to home
          </Link>
        </span>
      </div>
    );
  }
  return (
    <div className={cn('container')}>
      <NavLink
        to="/about"
        className={cn('toggle', 'mr-3', location.pathname === '/' && 'active')}
        activeClassName={cn('active')}
      >
        Bae Seonghyeon
      </NavLink>
      <NavLink to="/works" className={cn('toggle')} activeClassName={cn('active')}>
        Works
      </NavLink>
    </div>
  );
};

export default React.memo(Header);
