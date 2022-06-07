import React, { useEffect, useRef, useState } from 'react';
import styles from './Card.module.scss';
import cb from 'classnames/bind';
import CardHover from './CardHover';
import YoutubeIframe from '../YoutubeIframe';
import useMediaQuery from '../../hook/useMediaQuery';

const cn = cb.bind(styles);

const Card = (props) => {
  const { id, item, targetId, onClickClose, onClickIcon } = props;
  const [width] = useMediaQuery();
  
  // Card Position
  const cardRef = useRef(null);
  const iconRef = useRef(null);

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

  useEffect(() => {
    pointerPosition();
  }, []);

  // InnerCard Visible Set
  const [visibility, setVisibility] = useState(false);
  const [iconVisibility, setIconVisibility] = useState(true);

  const showInnerCard  = () => {
    setIconVisibility(false);
    setVisibility(true);
  };

  const hideInnerCard = () => {
    setVisibility(false);
  }

  // FootNote Target Show 
  useEffect(()=>{
    if (visibility) setVisibility(false);
    if (targetId === id) {
      showInnerCard();
    }
  }, [targetId])

  return (
    <div
      className={cn('card', 'container')}
      id={`work${id}`}
      onMouseEnter={() => width > 769 && [onClickIcon(), showInnerCard()]}
      onMouseLeave={() => width > 769 && hideInnerCard()}
      ref={cardRef}
    >

    {iconVisibility && 
      <span
        className={cn('icon--pointer')}
        id={`pointer${id}`}
        onClick={() => [onClickIcon(), showInnerCard()]}
        onTouchStart={() => [onClickIcon(), showInnerCard()]}
        ref={iconRef}
      />
    }

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
      {/* InnerCard */}
      <CardHover 
        id={id}
        item={item} 
        isVisible={visibility} 
        onClickClose={() => [onClickClose(), hideInnerCard()]}
      />
    </div>
  );
}

export default React.memo(Card);