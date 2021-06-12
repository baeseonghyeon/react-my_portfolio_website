import React, { useEffect } from 'react';
import YoutubeIframe from '../YoutubeIframe';
import './Card.scss';
import CardHover from './CardHover';

function Card(props) {
  const { item } = props;

  useEffect(() => {
    pointerPosition();
  }, []);

  const pointerPosition = () => {
    const pointer = document.getElementById(`pointer${item.id}`);
    const parent = document.getElementById(`work${item.id}`);
    pointer.style.left = `${
      Math.random() * (parent.offsetWidth - pointer.offsetWidth)
    }px`;
    pointer.style.top = `${
      Math.random() * (parent.offsetHeight - pointer.offsetHeight)
    }px`;
  };

  return (
    <div className="card-wrapper">
      <div
        className={`card card${item.id % 2}`}
        id={`work${item.id}`}
        onMouseEnter={() => props.onMouseEnter(item.id)}
        onMouseLeave={() => props.onMouseLeave(item.id)}
      >
        <span
          className="pointer"
          id={`pointer${item.id}`}
          onClick={() => props.onClickIcon(item.id)}
          onTouchStart={() => props.onClickIcon(item.id)}
        />
        {item.videos ? (
          <div className="ifram-wrapper">
            <YoutubeIframe
              className="work-video"
              width={550}
              height={344}
              src={item.videos[0].src}
            />
          </div>
        ) : item.thumb || item.images ? (
          <img
            src={item.thumb ? item.thumb : item.images[0].src}
            className="work-img"
            alt={item.title}
          />
        ) : (
          <div className="empty-thumb">
            <span>Thumbnail is Empty :-(</span>
          </div>
        )}
        {/* Description */}
        <CardHover item={item} />
      </div>
    </div>
  );
}

export default React.memo(Card);
