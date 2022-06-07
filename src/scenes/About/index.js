import React  from 'react';
import {
  faGithub,
  faInstagram,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TistoryIcon from '../../components/Icon/TistoryIcon';

import Popup from '../../components/Popup';
import useMediaQuery from '../../hook/useMediaQuery';
import touchRedirect from '../../lib/touchRedirect';
import Layout from '../../components/Layout';

import styles from './About.module.scss';
import cb from 'classnames/bind';
import { useSelector } from 'react-redux';


const cn = cb.bind(styles);

function About(props) {
  const { data } = props;
  const [screenSize] = useMediaQuery();
  const LANG = useSelector((state) => state.languageReducer).lang;

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
    // {
    //   text: 'Blog',
    //   url: 'https://baeseongh.tistory.com/',
    //   icon: [<TistoryIcon />]
    // },
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
      top: 50,
      left: 26,
      isHighlight: true,
      children: [<p>{data.intro[LANG]}</p>]
    },
    {
      title: 'CONTACT',
      width: 250,
      top: 195,
      left: 50,
      children: [
        <ul>
          {contactContents.map((item) => {
            return (
              <li>
                  {item.icon && 
                  (
                    <span className={cn('icon--container')}>
                      {item.icon}
                    </span>
                  )}
                <a
                  target="_blank"
                  href={item.url}
                  rel="noopener noreferrer"
                  onTouchStart={() => touchRedirect(item.url, screenSize)}
                >
                  {item.text}
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
      children: [<p>{data.comment[LANG]}</p>]
    },
    {
      title: 'CAREER',
      width: 500,
      children: [
        <span className="style--list">
          <ul>
            {data.career.map((item) => {
              return (
                <li>
                  {item.url ? (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onTouchStart={() => touchRedirect(item.url, screenSize)}
                    >
                      {item.title[LANG]} ( {item.date} )
                    </a>
                  ) : (
                    `${item.title[LANG]} ( ${item.date} )`
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
        <span className="style--list">
          <ul>
            {data.stack.map((item) => {
              return (
                <li>
                  <p>{item.category[LANG]}({item.stacks})</p>
                </li>
              );
            })}
          </ul>
        </span>
      ]
    },
    {
      title: 'ABOUT WEBSITE',
      width: 300,
      children: [
        data.footer.map((item, idx) => {
          return (
            <p className={cn(idx !== data.footer.length - 1 && 'mb-3')}>{item[LANG]}</p>
          );
        })
      ]
    }
  ];

  return (
    <Layout>  
      {popupContents.map((item, idx) => {
        return (
          <Popup
            key={item.id}
            id={popupContents.length-idx}
            title={item.title}
            width={item.width}
            top={item.top && item.top}
            left={item.left && item.left}
            highlight={item.isHighlight}
          >
            {item.children}
          </Popup>
        );
      })}
    </Layout>
  );
}

export default React.memo(About);
