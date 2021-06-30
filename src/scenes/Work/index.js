import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { animateScroll as scroll } from 'react-scroll';
import Popup from '../../components/Popup';
import Card from '../../components/Card';
import Layout from '../../components/Layout';

import useMediaQuery from '../../hook/useMediaQuery';
import touchRedirect from '../../lib/touchRedirect';

// import './Work.scss';
import styles from './Work.module.scss';
import cb from 'classnames/bind';

const cn = cb.bind(styles);

const Work = (props) => {
  const { data } = props;
  const [screenSize] = useMediaQuery();
  const [targetVisble, setTargetVisible] = useState(null);
  const history = useHistory();
    
  
  // FootNote
  const onClickFootnote = (id) => {
    initPopup();
    setTargetVisible(id);
    if(document.getElementById(`popup${id}`)) {
      history.push(`#work${id}`)
      document.getElementById(`popup${id}`).style.zIndex = 999;
      scrollSet(id);
    } else {
      history.push(`/works/${id}`);
    }
  };

  // Initialize Popup
  const initPopup = () => {
    data.map((item) => {
      return (document.getElementById(`popup${item.id}`) ? document.getElementById(`popup${item.id}`).style.zIndex = 5+item.id : undefined);
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
                targetId={item.id === targetVisble && targetVisble}
                onMouseOut={()=> setTargetVisible(null)}
              />
            </Popup>
          );
        })}
    </Layout>
  );
}

export default React.memo(Work);
