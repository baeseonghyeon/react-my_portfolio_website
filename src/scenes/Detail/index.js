import React, { useEffect } from 'react';
import Popup from '../../components/Popup';
import './Detail.scss';

import useMediaQuery from '../../hook/useMediaQuery';
import NotFound from '../NotFound';
import YoutubeIframe from '../../components/YoutubeIframe';
import externalLinkText from '../../lib/externalLinkText';

function Detail({ match, data }) {
  const item = data[match.params.id - 1];

  // Popup Touch Screen Redirect Set
  const [width] = useMediaQuery();
  const touchRedirect = (url) => {
    if (width > 769) {
      window.location.href = url;
    }
  };

  useEffect(() => {
    if (document.getElementById('detail-scroll')) {
      document.getElementById('detail-scroll').style.opacity = 1;
      document.getElementById('detail-scroll').style.transform = 'initial';
    }
  });

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
      content: item.info.collabor,
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
                  <strong>{info.type}:</strong> {info.content}
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
            {/* Text */}
            {item.content.text}
            {/* Content Links */}
            {item.content.links &&
              item.content.links.map((link, idx) => {
                return (
                  <a
                    href={link.src}
                    target="_blank"
                    rel="noopener noreferrer"
                    onTouchStart={() => touchRedirect(link.src)}
                  >
                    {idx === 0 && ' ('}
                    {link.title}
                    {idx !== item.content.links.length - 1 ? ', ' : ') '}
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
                  // className="d-block"
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
    <div id="Detail">
      <div className="detail-layout">
        <div className="detail-section">
          <div className="view-layout px-0" id="detail-scroll">
            <div className="container ft-s-s">
              <div className="detail-desc">
                {popupContents.map((content, idx) => {
                  return (
                    <Popup
                      id={idx}
                      title={item.title}
                      width={content.width}
                      position={content.position ? content.position : false}
                      top={content.top && content.top}
                      left={content.left && content.left}
                      padding
                      highlight={content.isHighlight}
                    >
                      {content.children}
                    </Popup>
                  );
                })}
              </div>

              {/* Videos */}
              <div className="row mt-5 m-auto justify-content-center">
                {item.videos &&
                  item.videos.map((video) => {
                    return (
                      <div className="col-md-6 mb-0 p-0">
                        <div className="detail-video-wrapper">
                          <YoutubeIframe
                            className="detail-video"
                            width={550}
                            height={350}
                            src={video.src}
                          />
                        </div>
                      </div>
                    );
                  })}
              </div>

              {/* Images */}
              <div className="row mb-4 m-auto justify-content-center">
                {item.images &&
                  item.images.map((image) => {
                    return (
                      <div
                        className={
                          image.fullSize
                            ? 'col-md-12 mb-0 p-0'
                            : 'col-md-6 mb-0 p-0'
                        }
                      >
                        <img
                          src={image.src}
                          className="detail-img"
                          alt={item.title}
                        />
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
