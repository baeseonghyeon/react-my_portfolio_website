import React from 'react';
import styles from './Footer.module.scss';
import cb from 'classnames/bind';
import { FiSun, FiMoon } from 'react-icons/fi';
import moment from 'moment';
import 'moment/locale/ko';
import TopBtn from '../TopBtn';
import { setLanguage } from '../../modules/Language/actions';
import { useDispatch, useSelector } from 'react-redux';

const cn = cb.bind(styles);

function Footer(props) {
  const { darkState } = props;
  const nowYear = moment().format('YYYY'); 
  const dispatch = useDispatch();
  const LANG = useSelector((state) => state.languageReducer).lang;

  return (
    <div className={cn('container')}>
      <TopBtn />
      <span className={cn("copy__right")}>
        <a
          href="https://analytics.google.com/analytics/web/?authuser=1#/report-home/a174985234w242601509p226122997"
          target="blank"
          rel="noopener noreferrer"
        />
        <span>{nowYear ? nowYear : '2021'} Bae Seonghyeon (github.io)</span>
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
            <span className={cn("language__wrapper")} >
              <span
                className={cn('language__toggle', LANG === 'KR' && 'language__toggle--active')}
                onClick={()=> dispatch(setLanguage('KR'))}
              >
                KR
              </span>
              <span
                className={cn('language__toggle', 'mr-0', LANG === 'EN' && 'language__toggle--active')}
                onClick={()=> dispatch(setLanguage('EN'))}
              >
                EN
              </span>
            </span>
 
      </span>
    </div>
  );
}
export default React.memo(Footer);
