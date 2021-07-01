import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { animateScroll as scroll } from 'react-scroll';
import Popup from '../../components/Popup';
import Card from '../../components/Card';
import Layout from '../../components/Layout';

import useMediaQuery from '../../hook/useMediaQuery';
import touchRedirect from '../../lib/touchRedirect';

import styles from './Work.module.scss';
import cb from 'classnames/bind';

const cn = cb.bind(styles);

const Work = (props) => {
  const { data } = props;
  const [screenSize] = useMediaQuery();
  const history = useHistory();
    
  
  // FootNote
  const onClickFootnote = (id) => {
    // initCard();
    initPopup();
    if(document.getElementById(`popup${id}`)) {
      onMouseEnter(id);
      document.getElementById(`popup${id}`).style.zIndex = 9999;
      scrollSet(id);
    } else {
      history.push(`/works/${id}`);
    }
  };

  // Mouse In & Click
  const onMouseEnter = (id) => {
    // initCard();
    initPopup();
    document.getElementById(`pointer${id}`).style.opacity = 0;
    document.getElementById(`desc${id}`).style.opacity = 1;
    document.getElementById(`desc${id}`).style.zIndex = 1;
  };

  // Mouse Out
  const onMouseLeave = (id) => {
    initPopup();
    // initCard();
  };

  // Initialize Popup
  const initPopup = () => {
    data.map((item) => {
      return (
        (document.getElementById(`popup${item.id}`) ? document.getElementById(`popup${item.id}`).style.zIndex = 5+item.id : undefined),
        (document.getElementById(`desc${item.id}`).removeAttribute("style"))
      );
    });
  };

  // // Initialize Card
  // const initCard = () => {
  //   data.map((item) => {
  //     return (
  //       (document.getElementById(`desc${item.id}`).removeAttribute("style"))
  //     );
  //   });
  // };

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
    <Layout>
      <Popup
        title="All works"
        width="400"
        top="50"
        left="26"
        highlight
      >
        {data
          .slice(0)
          .reverse()
          .map((item) => {
            return (
              <span className={cn('list--wrapper', 'mr-2')} key={item.id}>
                <span className={cn('list--footnote')}
                  onClick={() => onClickFootnote(item.id)}
                  onTouchStart={() => onClickFootnote(item.id)}
                >
                  [{item.id}]
                </span>
                <Link
                  to={`/works/${item.id}`}
                  className={cn('list--link')}
                  onTouchStart={() => touchRedirect(`/works/${item.id}`, screenSize)}
                >
                  {item.title} ( {item.info.date} ) [{item.info.cate}] 
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
              isPadding={false}
            >
              <Card
                key={item.id}
                item={item}
                // targetId={item.id === targetVisble && targetVisble}
                onClickIcon={onMouseEnter}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
              />
            </Popup>
          );
        })}
    </Layout>
  );
}

export default React.memo(Work);
