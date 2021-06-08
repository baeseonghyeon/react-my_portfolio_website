import React, { useEffect } from 'react';
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
        {item.movie1 ? (
          <div className="ifram-wrapper">
            <iframe
              title={item.title}
              className="work-video"
              width="550"
              height="344"
              src={`${item.movie1}?autoplay=1&showinfo=0&loop=1&mute=1&rel=0`}
              frameBorder="0"
              allow="autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ) : item.thumb ? (
          <img src={item.thumb} className="work-img" alt={item.title} />
        ) : item.img1 ? (
          <img src={item.thumb} className="work-img" alt={item.title} />
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
