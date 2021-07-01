import React, { useEffect, useRef, useState }  from 'react';
import { Link, useHistory } from 'react-router-dom';

import Popup from '../../Popup';
import useMediaQuery from '../../../hook/useMediaQuery';
import externalLinkText from '../../../lib/externalLinkText';

import styles from './CardHover.module.scss';
import cb from 'classnames/bind';

const cn = cb.bind(styles);


const CardHover = (props) => {
  const { item } = props;

  // // Initialize style
  const myRef = useRef(null);
  // const [visibility, setVisibility] = useState();

  // useEffect(()=>{
  //   if(myRef.current) {
  //     myRef.current.removeAttribute("style");
  //   }
  //   setVisibility(isVisible);
  // }, [isVisible])

  // Popup Touch Screen Redirect Set
  const history = useHistory();
  const [width] = useMediaQuery();
  const touchRedirect = (url, _blank) => {
    if (width > 769) {
      if (_blank) {
        window.location.href = url;
      } else {
        history.push(url);
      }
    }
  };

  const onHidePopup = () => {
    myRef.current.removeAttribute("style");
  }

  return (
    <div 
      className={cn('container', 'ft-s-s'
      // , visibility && 'show'
      )}
      id={`desc${item.id}`}
      ref={myRef}
    >
      <Popup
        id={`desc${item.id}`}
        title={`${item.info.cate} - ${item.info.role}`}
        isPadding
        isFixed
        // onClickCloseBtn={() => setVisibility(false)}
        onClickCloseBtn={() => onHidePopup()}
      >
        <span>
          <p className="desc">
            {item.content.text.substr(0, item.eg ? 110 : 65)}
            {item.content.text.length > (item.eg ? 110 : 65) ? (
              <span>
                ...
                <Link
                  to={`/works/${item.id}`}
                  onTouchStart={() => touchRedirect(`/works/${item.id}`)}
                >
                  {' '}
                  read more
                </Link>
              </span>
            ) : (
              ''
            )}
            <br />
          </p>
        </span>
        <span>
          {/* 외부 링크 */}
          {item.links &&
            item.links.map((link) => {
              return (
                <a
                  href={link.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="d-block"
                  onTouchStart={() => touchRedirect(link.src, true)}
                >
                  {externalLinkText(link.type)}
                  <br />
                </a>
              );
            })}

          {/* 더보기 버튼 */}
          {item.content.text.length < (item.eg ? 110 : 65) && (
            <Link
              className="more-btn d-block"
              to={`/works/${item.id}`}
              onTouchStart={() => touchRedirect(`/works/${item.id}`)}
            >
              Read More →
            </Link>
          )}
        </span>
      </Popup>
    </div>
  );
}

export default React.memo(CardHover);
