import React, { useEffect, useRef, useState } from 'react';
import styles from './Popup.module.scss';
import cb from 'classnames/bind';
import Draggable from 'react-draggable';
import useMediaQuery from '../../hook/useMediaQuery';

const cn = cb.bind(styles);

const Popup = (props) => {
  const { highlight, title, maxWidth, width, top, left, id, children, padding ,fixed} = props;
  const [screenWidth] = useMediaQuery();


  // Popup Render Position Set
  const myRef = useRef(null);

  useEffect(() => {
    if (!fixed && (!top || !left)) {
      popupPosition();
    }
  }, []);

  const popupPosition = () => {
    if(myRef.current){
      myRef.current.style.left = `${ Math.random() * ((window.innerWidth - myRef.current.offsetWidth) * 0.8) + window.innerWidth * 0.15 }px`;
      myRef.current.style.top = `${ Math.random() * ((window.innerHeight - myRef.current.offsetHeight) * 0.7) + window.innerHeight * 0.13 }px`;
    }
  };

  // Popup Close
  const [hide, setHide] = useState(false);
  const [hidePosition, setHidePosition] = useState(false);

  const onClickClose = () => {
    setHide(true);
    setTimeout(function () {
      if(myRef.current){
        myRef.current.remove();
      }
    }, 250);
  };

  // Popup zIndex
  const [zindex, setZindex] = useState(highlight? 100 : 5);

  return (
    <Draggable
      disabled={screenWidth > 769 ? false : true}
      axis="both"
      handle={'.handleTarget' }
      defaultPosition={{ x: 0, y: 0 }}
      position={null}
      grid={[25, 25]}
      scale={1}
      onDrag={() => setZindex(9999)}
    >
      <div
        className={cn('container', 'handleTarget', highlight && 'highlight', hide && 'hide', hidePosition && 'hide--position')}
        id={`popup${id}`}
        style={{
          width: `${width}px`,
          maxWidth: `${maxWidth}px`,
          top: `${top && top}px`,
          left: `${left && left}px`,
          zIndex: `${zindex && zindex+id}` 
        }}
        onMouseEnter={() => setZindex(999)}
        onTouchStart={() => screenWidth > 769 && setZindex(999)}
        onMouseLeave={() => setZindex(highlight? 100 : 5)}
        onTouchEnd={() =>  screenWidth > 769 && setZindex(highlight? 100 : 5)}
        ref={myRef}
      >
        <div className={cn('title')}>
          {title}
          <span
            className={cn('btn--close')}
            onClick={() => onClickClose()}
            onTouchStart={() => screenWidth > 769 && onClickClose()}
          >
            ×
          </span>
        </div>
        <div
          className={cn('content', padding && 'content--isPadding')}
        >
          {children}
        </div>
      </div>
    </Draggable>
  ) 
}

export default React.memo(Popup);
