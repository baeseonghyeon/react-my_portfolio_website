import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { animateScroll as scroll } from 'react-scroll';
import Popup from '../../components/Popup';
import Card from '../../components/Card';

import useMediaQuery from '../../hook/useMediaQuery';
import touchRedirect from '../../lib/touchRedirect';

import './Work.scss';


function Work(props) {
  const { data } = props;
  const [screenSize] = useMediaQuery();

  // 랜더 애니메이션
  useEffect(() => {
    document.getElementById('view-layout').style.opacity = 1;
    document.getElementById('view-layout').style.transform = 'initial';
  }, []);


  const onClickFootnote = (id) => {
    hideCard();
    hidePopup();
    document.getElementById(`desc${id}`).style.opacity = 1;
    document.getElementById(`desc${id}`).style.zIndex = 1;
    document.getElementById(`popup${id}`).style.zIndex = 5;
    document.getElementById(`pointer${id}`).style.opacity = 0;
    document.getElementById(`popup${id}`).style.zIndex = 9;
    scrollSet(id);
  };

  const onClickIcon = (id) => {
    hideCard();
    document.getElementById(`desc${id}`).style.opacity = 1;
    document.getElementById(`desc${id}`).style.zIndex = 1;
    document.getElementById(`pointer${id}`).style.opacity = 0;
  };

  const onMouseEnter = (id) => {
    hideCard();
    document.getElementById(`desc${id}`).style.opacity = 1;
    document.getElementById(`desc${id}`).style.zIndex = 1;
    document.getElementById(`pointer${id}`).style.opacity = 0;
  };

  const onMouseLeave = (id) => {
    hideCard();
  };

  // Initialize Popup
  const hidePopup = () => {
    data.map((item) => {
      return (document.getElementById(`popup${item.id}`).style.zIndex = 5);
    });
  };

  // Initialize Card
  const hideCard = () => {
    data.map((item) => {
      return (
        (document.getElementById(`desc${item.id}`).style.opacity = 0),
        (document.getElementById(`desc${item.id}`).style.zIndex = -1)
      );
    });
  };

  // Popup Scroll Set
  const scrollSet = (id) => {
    const height =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight;
    const target_height = document.getElementById(`popup${id}`).offsetHeight;
    scroll.scrollTo(
      document.getElementById(`popup${id}`).offsetTop -
        (height / 2 - target_height / 2)
    );
  };

  return (
    <div className="view-layout container" id="view-layout">
      <Popup
        id="x"
        title="All works"
        width="400"
        position
        top="50"
        left="26"
        padding
        highlight
      >
        {data
          .slice(0)
          .reverse()
          .map((item) => {
            return (
              <span className="mr-2" key={item.id}>
                <span className="f-n">
                  <a
                    href={`#work${item.id}`}
                    onClick={() => onClickFootnote(item.id)}
                    onTouchStart={() => onClickFootnote(item.id)}
                  >
                    [{item.id}]
                  </a>
                </span>
                <Link
                  to={`/works/${item.id}`}
                  className="text-decoration-none"
                  onTouchStart={() => touchRedirect(`/works/${item.id}`, screenSize)}
                >
                  <span className="work-list">
                    {item.title} ( {item.info.date} ) [{item.info.cate}]
                  </span>
                </Link>
              </span>
            );
          })}
      </Popup>
      <div className="bd-t" />
      {data
        .slice(0)
        .reverse()
        .map((item) => {
          return (
            <Popup
              id={item.id}
              key={item.id}
              title={item.title}
              width="500"
              position={false}
              padding={false}
              highlight={false}
            >
              <Card
                key={item.id}
                index={item.id}
                item={item}
                onClickIcon={onClickIcon}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
              />
            </Popup>
          );
        })}
    </div>
  );
}

export default React.memo(Work);
