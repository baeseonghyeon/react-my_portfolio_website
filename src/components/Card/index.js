import React, { useEffect, useRef, useState } from 'react';
import styles from './Card.module.scss';
import cb from 'classnames/bind';
import CardHover from './CardHover';
import YoutubeIframe from '../YoutubeIframe';

const cn = cb.bind(styles);

const Card = (props) => {
  const { item, targetId, onMouseEnter, onMouseLeave, onClickIcon } = props;

  // Pointer Icon Position Set
  const cardRef = useRef(null);
  const iconRef = useRef(null);

  useEffect(() => {
    pointerPosition();
  }, []);

  const pointerPosition = () => {
    if (cardRef.current && iconRef.current) {
      iconRef.current.style.left = `${
        Math.random() * (cardRef.current.offsetWidth - iconRef.current.offsetWidth)
      }px`;
      iconRef.current.style.top = `${
        Math.random() * (cardRef.current.offsetHeight - iconRef.current.offsetHeight)
      }px`;
    }
  };

  // Close Set
  // const [visibility, setVisibility] = useState(false);
  // const [pointerVisibility, setPointerVisibility] = useState(true);

  // const onClickIcon = () => {
  //   setPointerVisibility(false);
  //   setVisibility(true);
  // };

  // const onMouseEnter = () => {
  //   setPointerVisibility(false);
  //   setVisibility(true);
  // };

  // // FootNote Target Show 
  // useEffect(()=>{
  //   if (visibility) setVisibility(false);
  //   if (targetId) {
  //     setVisibility(true)
  //     setPointerVisibility(false);
  //   } 
  // }, [targetId])


  return (
    <div className={cn('container')}>
      <div
        className={cn('card', 'wrapper')}
        id={`work${item.id}`}
        // onMouseEnter={() => onMouseEnter(item.id)}
        // onMouseLeave={()=> [setVisibility(false), onMouseOut()]}
        onMouseEnter={() => onMouseEnter(item.id)}
        onMouseLeave={() => onMouseLeave(item.id)}
        ref={cardRef}
      >

      {/* {pointerVisibility &&  */}
        <span
          className={cn('icon--pointer')}
          id={`pointer${item.id}`}
          onClick={() => onClickIcon(item.id)}
          onTouchStart={() => onClickIcon(item.id)}
          ref={iconRef}
        />
      {/* } */}

      {item.videos ? (
        <div className={cn('iframe--wrapper')}>
          <YoutubeIframe
            className={cn('iframe--video')}
            width={550}
            height={344}
            src={item.videos[0].src}
          />
        </div>
      ) : item.thumb || item.images ? (
        <img
          src={item.thumb ? item.thumb : item.images[0].src}
          className={cn('image')}
          alt={item.title}
        />
      ) : (
        <div className={cn('placeholder')}>
          <span>Thumbnail is Empty :-(</span>
        </div>
      )}
        {/* Description */}
        <CardHover item={item} 
        // isVisible={visibility} 
        />
      </div>
    </div>
  );
}

export default React.memo(Card);