import React from 'react';
import styles from './Detail.module.scss';
import cb from 'classnames/bind';

import useMediaQuery from '../../hook/useMediaQuery';
import NotFound from '../NotFound';
import YoutubeIframe from '../../components/YoutubeIframe';
import externalLinkText from '../../lib/externalLinkText';
import Popup from '../../components/Popup';
import Layout from '../../components/Layout';
import { useSelector } from 'react-redux';

const cn = cb.bind(styles);

function Detail({ match, data }) {
  const item = data[match.params.id - 1];
  const LANG = useSelector((state) => state.languageReducer).lang;

  // Popup Touch Screen Redirect Set
  const [width] = useMediaQuery();
  const touchRedirect = (url) => {
    if (width > 769) {
      window.location.href = url;
    }
  };

  // 404 Error (Data 범주 초과, 문자 포함 접근)
  if (
    match.params.id < 1 ||
    data.length < match.params.id ||
    match.params.id.match(/[^0-9]/)
  ) {
    return <NotFound />;
  }

  const detailInfos = [
    {
      content: item.info.date,
      type: 'Date'
    },
    {
      content: item.info.cate,
      type: 'Category'
    },
    {
      content: item.info.role,
      type: 'Role'
    },
    {
      content: item.info.stack,
      type: 'Stack'
    },
    {
      content: item.info.collabor ? item.info.collabor[LANG] : null,
      type: 'Collaborator'
    }
  ];

  const popupContents = [
    // 상세 정보 팝업
    {
      width: 350,
      position: true,
      top: 25,
      left: 20,
      isHighlight: true,
      children: [
        <ul className="work-info">
          {detailInfos.map((info) => {
            if (info.content) {
              return (
                <li>
                  <p><strong>{info.type} : </strong> {info.content}</p>
                </li>
              );
            }
            return null;
          })}
        </ul>
      ]
    },
    // 컨텐츠 팝업
    {
      width: 450,
      position: true,
      top: 270,
      left: 40,
      isHighlight: false,
      children: [
        <div className="desc px-0">
          <p>
            {/* 내용 */}
            {item.content[LANG]}
            {' '}
            {/* 관련 링크 */}
            {item.content.links &&
              item.content.links.map((link, idx) => {
                return (
                  <a
                    href={link.src}
                    target="_blank"
                    rel="noopener noreferrer"
                    onTouchStart={() => touchRedirect(link.src)}
                  >
                    {idx === 0 && '('}
                    {link[LANG] ? link[LANG] : link['KR']}
                    {idx !== item.content.links.length - 1 ? ', ' : ')'}
                  </a>
                );
              })}
          </p>
          {/* Links */}
          {item.links &&
            item.links.map((link) => {
              return (
                <a
                  href={link.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  onTouchStart={() => touchRedirect(link.src, true)}
                >
                  {externalLinkText(link.type)}
                  <br />
                </a>
              );
            })}
        </div>
      ]
    }
  ];

  return (
    <Layout className={cn('container')}>
      {popupContents.map((content, idx) => {
        return (
          <Popup
            id={idx}
            title={item.title[LANG]}
            width={content.width}
            position={content.position ? content.position : false}
            top={content.top && content.top}
            left={content.left && content.left}
            highlight={content.isHighlight}
          >
            {content.children}
          </Popup>
        );
      })}

      {/* 영상 */}
      <div className="row mt-5 m-auto justify-content-center">
        {item.videos &&
          item.videos.map((video) => {
            return (
              <div
              className={`
                ${video.fullSize ? 'col-md-12' : 'col-md-6'} mb-0 p-0
              `}
              >
                <div className={cn("video--wrapper")}>
                  <YoutubeIframe
                    className={cn('video')}
                    width={550}
                    height={350}
                    src={video.src}
                  />
                </div>
              </div>
            );
          })}
      </div>

      {/* 이미지 */}
      <div className="row mb-4 m-auto justify-content-center">
        {item.images &&
          item.images.map((image) => {
            return (
              <div
                className={`
                  ${image.fullSize ? 'col-md-12' : 'col-md-6'} mb-0 p-0
                `}
              >
                <img
                  src={image.src}
                  className={cn('image')}
                  alt={item.title}
                />
              </div>
            );
          })}
      </div>
    </Layout> 
  );
}

export default Detail;
