import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import Popup from '../../Popup';
import useMediaQuery from '../../../hook/useMediaQuery';
import externalLinkText from '../../../lib/externalLinkText';

import styles from './CardHover.module.scss';
import cb from 'classnames/bind';
import { useSelector } from 'react-redux';

const cn = cb.bind(styles);


const CardHover = (props) => {
  const { item, id, onClickClose, isVisible } = props;
  const LANG = useSelector((state) => state.languageReducer).lang;

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

  return (
    <Popup
      id={`desc${id}`}
      title={`${item.info.cate} - ${item.info.role}`}
      className={cn('container', isVisible ? 'show' : 'hide' )}
      isPadding
      isFixed
      onClickCloseBtn={() => onClickClose()}
    >
      <p>
        {item.content[LANG].substr(0, LANG === 'EN' ? 110 : 65)}
        {item.content[LANG].length > (LANG === 'EN' ? 110 : 65) && (
          <span>
            ...
            <Link
              to={`/works/${id}`}
              onTouchStart={() => touchRedirect(`/works/${id}`)}
            >
              read more
            </Link>
          </span>
        )}
      </p>
      
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
      {item.content[LANG].length < (LANG === 'EN' ? 110 : 65) && (
        <Link
          className="more-btn d-block"
          to={`/works/${id}`}
          onTouchStart={() => touchRedirect(`/works/${id}`)}
        >
          Read More →
        </Link>
      )}
    </Popup>
  );
}

export default React.memo(CardHover);
