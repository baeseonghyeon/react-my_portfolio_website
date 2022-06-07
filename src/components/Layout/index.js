import React, { useRef } from 'react';
import styles from './Layout.module.scss';

import cb from 'classnames/bind';
import useRenderEffect from '../../hook/useRenderEffect';
const cn = cb.bind(styles);

function Layout(props) {
  const { children, className } = props;

  // 랜더 이펙트
  const containerRef = useRef(null);
  useRenderEffect(containerRef);

  return (
    <div className={cn('container', className)} ref={containerRef}>
      {children}
    </div>
  );
}
export default Layout;
