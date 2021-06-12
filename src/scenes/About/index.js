import React, { useEffect } from 'react';
import {
  faGithub,
  faInstagram,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TistoryIcon from '../../components/Icon/TistoryIcon';

import Popup from '../../components/Popup';
import useMediaQuery from '../../hook/useMediaQuery';

import './About.scss';

function About(props) {
  const { data } = props;

  useEffect(() => {
    document.getElementById('view-layout').style.opacity = 1;
    document.getElementById('view-layout').style.transform = 'initial';
  });

  // Popup Touch Screen Redirect Set
  const [width] = useMediaQuery();
  const touchRedirect = (url) => {
    if (width > 769) {
      window.location.href = url;
    }
  };

  const contactContents = [
    {
      text: 'baesh.dev@gmail.com',
      url: 'mailto:baesh.dev@gmail.com'
    },
    {
      text: 'Github',
      url: 'https://github.com/baeseonghyeon',
      icon: [<FontAwesomeIcon icon={faGithub} />]
    },
    {
      text: 'Blog',
      url: 'https://baeseongh.tistory.com/',
      icon: [<TistoryIcon />]
    },
    {
      text: 'Linkedin',
      url: 'https://www.linkedin.com/in/%EC%84%B1%ED%98%84-%EB%B0%B0-abb1441a4/',

      icon: [<FontAwesomeIcon icon={faLinkedin} />]
    },
    {
      text: 'Instagram',
      url: 'https://www.instagram.com/baeshash/',
      icon: [<FontAwesomeIcon icon={faInstagram} />]
    }
  ];

  const popupContents = [
    {
      title: 'BAE-SEONGHYEON',
      width: 350,
      position: true,
      top: 50,
      left: 26,
      isHighlight: true,
      children: [<p>{data.intro}</p>]
    },
    {
      title: 'CONTACT',
      width: 250,
      position: true,
      top: 195,
      left: 50,
      children: [
        <ul>
          {contactContents.map((item) => {
            return (
              <li>
                <a
                  target="_blank"
                  href={item.url}
                  rel="noopener noreferrer"
                  onTouchStart={() => touchRedirect(item.url)}
                >
                  {item.icon && item.icon} {item.text}
                </a>
              </li>
            );
          })}
        </ul>
      ]
    },
    {
      title: 'COMMENT',
      width: 400,
      children: [<p className="about-align-left">{data.comment}</p>]
    },
    {
      title: 'CAREER',
      width: 500,
      children: [
        <span className="style-list">
          <ul>
            {data.career.map((item) => {
              return (
                <li>
                  {item.url ? (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onTouchStart={() => touchRedirect(item.url)}
                    >
                      {item.title} ( {item.date} )
                    </a>
                  ) : (
                    `${item.title} ( ${item.date} )`
                  )}
                </li>
              );
            })}
          </ul>
        </span>
      ]
    },
    {
      title: 'SKILL',
      width: 500,
      children: [
        <span className="style-list">
          <ul>
            {data.stack.map((item) => {
              return (
                <li>
                  {item.category}({item.stacks})
                </li>
              );
            })}
          </ul>
        </span>
      ]
    },
    {
      title: 'INFORMATION',
      width: 300,
      children: [
        <span>
          {data.footer.map((item, idx) => {
            return (
              <>
                <p>{item.text}</p>
                {idx !== data.footer.length - 1 && <br />}
              </>
            );
          })}
        </span>
      ]
    }
  ];

  return (
    <div className="view-layout container" id="view-layout">
      {popupContents.map((item, idx) => {
        return (
          <Popup
            id={idx}
            title={item.title}
            width={item.width}
            position={item.position ? item.position : false}
            top={item.top && item.top}
            left={item.left && item.left}
            padding
            highlight={item.isHighlight}
          >
            {item.children}
          </Popup>
        );
      })}
    </div>
  );
}

export default React.memo(About);
