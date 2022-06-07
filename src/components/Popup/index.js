import React, { useEffect, useRef, useState } from 'react';
import styles from './Popup.module.scss';
import cb from 'classnames/bind';
import Draggable from 'react-draggable';
import useMediaQuery from '../../hook/useMediaQuery';

const cn = cb.bind(styles);

const Popup = (props) => {
  const {
    id,
    children,
    highlight,
    title,
    width,
    maxWidth,
    top,
    left,
    className,
    isPadding = true,
    isFixed,
    onClickCloseBtn,
    zIndex,
  } = props;

  const [screenWidth] = useMediaQuery();

  // Popup Render Position Set
  const myRef = useRef(null);

  useEffect(() => {
    if (!isFixed && (!top || !left)) {
      popupPosition();
    }
  }, []);

  



  const popupPosition = () => {
    if (myRef.current) {
      myRef.current.style.left = `${Math.random() * ((window.innerWidth - myRef.current.offsetWidth) * 0.8) + window.innerWidth * 0.13}px`;
      myRef.current.style.top = `${Math.random() * ((window.innerHeight - myRef.current.offsetHeight) * 0.7) + window.innerHeight * 0.12}px`;
    }
  };

  // Popup Close
  const [hide, setHide] = useState(false);

  const onClickClose = (id) => {
    setHide(true);
    setTimeout(function () {
      if (myRef.current && myRef.current.id === `popup${id}`) {
        myRef.current.remove();
      }
    }, 250);
  };

  // Popup zIndex
  const [zIndexValue, setZIndexValue] = useState(highlight ? 100 : 5 + id);

  useEffect(() => {
    setZIndexValue(highlight ? zIndex + 100 : zIndex)
  }, [zIndex])

  return (
    <Draggable
      disabled={screenWidth > 769 ? false : true}
      axis="both"
      handle={'.handleTarget'}
      defaultPosition={{ x: 0, y: 0 }}
      position={null}
      grid={[25, 25]}
      scale={1}
      onDrag={() => setZIndexValue(9999)}
      onStop={() => setZIndexValue(highlight ? 100 : 5 + id)}
    >
      <div
        className={cn('container', 'handleTarget', highlight && 'highlight', hide && 'hide', className)}
        id={`popup${id}`}
        style={{
          width: `${width}px`,
          maxWidth: `${maxWidth}px`,
          top: `${top && top}px`,
          left: `${left && left}px`,
          zIndex: `${zIndexValue && zIndexValue}`
        }}
        onMouseEnter={() => screenWidth > 769 && setZIndexValue(999)}
        onMouseLeave={() => screenWidth > 769 && setZIndexValue(highlight ? 100 : 5 + id)}
        ref={myRef}
      >
        <div className={cn('title')}>
          <span>{title}</span>
          <span
            className={cn('btn--close')}
            onClick={() => onClickCloseBtn ? onClickCloseBtn() : onClickClose(id)}
            onTouchStart={() => screenWidth > 769 && (onClickCloseBtn ? onClickCloseBtn() : onClickClose(id))}
          >
            ×
          </span>
        </div>
        <div
          className={cn('content', isPadding && 'content--isPadding')}
        >
          <span className={cn('content__wrapper')} >
            {children}
          </span>
        </div>
      </div>
    </Draggable>
  )
}

export default React.memo(Popup);
