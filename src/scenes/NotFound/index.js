import React, { useEffect, useState } from 'react';
import './NotFound.scss';
import { Link, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

const NotFound = () => {
  const [counter, setCounter] = useState(5);
  const history = useHistory();
  const LANG = useSelector((state) => state.languageReducer).lang;

  // 카운트 인터벌
  useEffect(() => {
    const countdown = setInterval(() => {
      if (counter > 0) {
        setCounter(counter - 1);
      }
      if (counter === 0) {
        clearInterval(countdown);
      }
    }, 1000);
    return () => clearInterval(countdown);
  }, [counter]);

  // 메인 리다이렉트
  useEffect(() => {
    const timeout = setTimeout(() => {
      history.push('/');
    }, 5000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="NotFound">
      <h1>404</h1>
      <h1>{LANG === 'EN'? 'Page Not Found': '페이지를 찾을 수 없습니다!'}</h1>
      <p>{LANG === 'EN'? 'uh-oh! Nothing here..': '오.. 아무것도 없네요..'}</p>
      {LANG === 'EN' ?
        <p>After <strong>{counter}</strong> seconds, move to main.</p>
        :
        <p><strong>{counter}</strong>초 후 메인으로 이동합니다.</p>
      }
      <Link to="/" className="mt-0">
        ← Back to home
      </Link>
    </div>
  );
};

export default NotFound;
