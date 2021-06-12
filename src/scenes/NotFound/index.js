import React, { useEffect, useState } from 'react';
import './NotFound.scss';
import { Link, useHistory } from 'react-router-dom';

const NotFound = () => {
  const [counter, setCounter] = useState(5);
  const history = useHistory();

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
      <h1>Page Not Found</h1>
      <p>uh-oh! Nothing here..</p>
      <p>After {counter} seconds, move to main.</p>
      <Link to="/" className="mt-0">
        ← Back to home
      </Link>
    </div>
  );
};

export default NotFound;
