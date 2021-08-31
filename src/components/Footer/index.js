import React from 'react';
import styles from './Footer.module.scss';
// import './Footer.scss';
import cb from 'classnames/bind';
import { FiSun, FiMoon } from 'react-icons/fi';

import TopBtn from '../TopBtn';

const cn = cb.bind(styles);

function Footer(props) {
  const { langs, darkState } = props;

  return (
    <div className={cn('container')}>
      <TopBtn />
      <span className={cn("copy__right")}>
        <a
          href="https://analytics.google.com/analytics/web/?authuser=1#/report-home/a174985234w242601509p226122997"
          target="blank"
          rel="noopener noreferrer"
        />
        <span>2020 Bae Seonghyeon (github.io)</span>
      </span>
      <span className={cn("toggle__container")}>
        <span className={cn("darkmode__wrapper")}>
          <span
            className={cn('darkmode__toggle', !darkState && 'darkmode__toggle--active')}
            onClick={() => props.darkModeToggle(false)}
          >
            {/* Day */}
            <FiSun size="18" />
          </span>
          <span
            className={cn('darkmode__toggle', darkState && 'darkmode__toggle--active')}
            onClick={() => props.darkModeToggle(true)}
          >
            {/* Night */}
            <FiMoon size="18" />
          </span>
        </span>
        <span className={cn("dividing__line")}>|</span>
        {langs.map((lang, index) => {
          return (
            <span className={cn("language__wrapper")} key={index}>
              <span
                className={cn('language__toggle', lang.set === 'KR' && 'language__toggle--active')}
                onClick={() => props.langToggle('KR')}
              >
                KR
              </span>
              <span
                className={cn('language__toggle', 'mr-0', lang.set === 'EN' && 'language__toggle--active')}
                onClick={() => props.langToggle('EN')}
              >
                EN
              </span>
            </span>
          );
        })}
      </span>
    </div>
  );
}
export default React.memo(Footer);
