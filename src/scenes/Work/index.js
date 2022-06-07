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
import { useSelector } from 'react-redux';

const cn = cb.bind(styles);

const Work = (props) => {
  const { data } = props;
  const [screenSize] = useMediaQuery();
  const history = useHistory();
  const LANG = useSelector((state) => state.languageReducer).lang;
  const [targetId, setTargetId] = useState(null);  
  
  // FootNote Click Event
  const onClickFootnote = (id) => {
    setTargetId(id);
    if(document.getElementById(`popup${id}`)) {
      history.push(`#work${id}`)
      scrollSet(id);
    } else {
      history.push(`/works/${id}`);
    }
  };

  const onClickIcon = (id) => {
    setTargetId(id);
  }

  // Popup Scroll Set
  const scrollSet = (id) => {
    const height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    const target_height = document.getElementById(`popup${id}`).offsetHeight;
    scroll.scrollTo(
      document.getElementById(`popup${id}`).offsetTop - (height / 2 - target_height / 2)
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
          .map((item, idx) => {
            const id = data.length - idx;
            return (
              <span className={cn('list--wrapper', 'mr-2')} key={id}>
                <span className={cn('list--footnote')}
                  onClick={() => onClickFootnote(id)}
                  onTouchStart={() => onClickFootnote(id)}
                >
                  [{id}]
                </span>
                <Link
                  to={`/works/${id}`}
                  className={cn('list--link')}
                  onTouchStart={() => touchRedirect(`/works/${id}`, screenSize)}
                >
                  {item.title[LANG]} ( {item.info.date} ) [{item.info.cate}] 
                </Link>
              </span>
            );
          })}
      </Popup>

      {data
        .slice(0)
        .reverse()
        .map((item, idx) => {
          const id = data.length - idx;
          return (
            <Popup
              id={id}
              key={id}
              title={item.title[LANG]}
              width="500"
              isPadding={false}
              zIndex={id === targetId ? 999 : 5+id} 
            >
              <Card
                id={id}
                key={id}
                item={item}
                targetId={id === targetId && targetId}
                onClickClose={()=>setTargetId(null)}
                onClickIcon={()=>[setTargetId(null), onClickIcon(id)]}
              />
            </Popup>
          );
        })}
    </Layout>
  );
}

export default React.memo(Work);
