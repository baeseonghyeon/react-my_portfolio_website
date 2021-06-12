/* eslint-disable no-use-before-define */

const egDataForm = (idx, data) => {
  const index = idx - 1;
  const egData = {
    id: index,
    title: data.title,
    content: {
      text: data.text,
      get links() {
        const newWorkData = JSON.parse(
          JSON.stringify(workData[0].data[index].content.links)
        );
        if (data.descLinks) {
          data.descLinks.map((link, id) => {
            newWorkData[id].title = link.title;
            return null;
          });
        }
        return newWorkData;
      }
    },
    get info() {
      const newWorkData = JSON.parse(
        JSON.stringify(workData[0].data[index].info)
      );
      if (data.collabor) newWorkData.collabor = data.collabor;
      return newWorkData;
    },
    get links() {
      return workData[0].data[index].links;
    },
    get thumb() {
      return workData[0].data[index].thumb;
    },
    get images() {
      return workData[0].data[index].images;
    },
    get videos() {
      return workData[0].data[index].videos;
    },
    eg: true
  };

  return egData;
};

const workData = [
  {
    lang: 'kr',
    data: [
      {
        id: 1,
        title: '멋쟁이 사자처럼 at 삼육대학교',
        info: {
          date: '2018-2019',
          cate: 'Website',
          role: 'development / planning / design',
          stack:
            'HTML5, CSS3, JavaScript, jQuery, Ruby on Rails, SQLite, Git, AWS(EC2, bucket), Heroku',
          collabor: null
        },
        content: {
          text: '멋쟁이 사자처럼 at 삼육대학교 웹사이트입니다. 멋쟁이 사자처럼 활동 중 멤버관리, 공지사항게시, 과제게시, 수업자료게시, 활동홍보를 목적으로 제작하였습니다. 웹사이트의 기획과 설계, 디자인, 기능개발, 서버 배포를 담당했습니다.'
        },
        links: [
          {
            type: 'web',
            src: 'http://sahmyook.likelion.org/'
          },
          {
            type: 'github',
            src: 'https://github.com/baeseonghyeon/likelion_syu_website'
          }
        ],
        thumb:
          'https://ww.namu.la/s/3f55b7c22bebc146f5b172e73512b8951690eb1012225cb764f2a104dcf26aa541388fe5373b9c044365f71a2c4b505aa61c87c504a7e74bbe9e2e4a14bb9304f10c59bd1a3d8a0f5f787edb19905b45fd69c92c122a0b13675932867818dfb0',
        images: null,
        videos: [
          { src: 'https://www.youtube.com/embed/9405iJIMVEo' },
          { src: 'https://www.youtube.com/embed/QQvG98s9LVI' }
        ]
      },
      {
        id: 2,
        title: '삼육대학교 학술정보원 출석 이벤트',
        info: {
          date: '2019',
          cate: 'Website',
          role: 'development / planning ',
          stack: 'HTML5, CSS3, JavaScript, jQuery, PHP, phpMyAdmin',
          collabor: '오픈버스'
        },
        content: {
          text: '삼육대학교 학술정보원 출석 이벤트 페이지 입니다. 기간동안 이벤트 참여후 출석체크 진행 및 출석내역을 확인할 수 있습니다. 출석체크 이벤트 기능과, 관리자 기능, 서버 및 화면설계, UI를 구현하였습니다.'
        },
        links: [
          {
            type: 'web',
            src: 'http://syulib.suedumi.com/bbs/event.php'
          }
        ],
        thumb:
          'https://drive.google.com/uc?export=view&id=1q5YBrzaW25dIq5_67alYj-87MkXzIuWV',
        images: [
          {
            src: 'https://drive.google.com/uc?export=view&id=1laO33PX7qyR4KrTJEFLNGBEDJ35WroMi',
            fullSize: true
          },
          {
            src: 'https://drive.google.com/uc?export=view&id=1q5YBrzaW25dIq5_67alYj-87MkXzIuWV',
            fullSize: true
          }
        ],
        videos: null
      },
      {
        id: 3,
        title: '팜클라우드',
        info: {
          date: '2018-2019',
          cate: 'Website',
          role: 'development / planning ',
          stack: 'HTML5, CSS3, JavaScript, jQuery, PHP, phpMyAdmin',
          collabor: '오픈버스'
        },
        content: {
          text: '팜클라우드의 유저 웹 모듈 입니다. 웹 기반 모듈을 통해 무인 스마트팜의 재배 환경을 모니터링하고 제어할 수 있습니다. 사업초기 웹 모듈 프로토타입의 기획과 화면설계, 프론트 엔드 개발을 담당했습니다.'
        },
        links: [
          {
            type: 'web',
            src: 'http://dfarmcloud.com/'
          }
        ],
        thumb:
          'https://drive.google.com/uc?export=view&id=1wJTQsc703hGdbF-zHOPYDXfjBoi-dOjh',
        images: [
          {
            src: 'https://drive.google.com/uc?export=view&id=19zCQJ46CRhF0BBI5YuZCJVZsx0MVGr88'
          },
          {
            src: 'https://drive.google.com/uc?export=view&id=1QuaaumhJQEp2WBZKPufNAIduVPnKSUW_'
          },
          {
            src: 'https://drive.google.com/uc?export=view&id=1bcHdwg1JFkXBq41jFo78cSf9xxlIXrMh',
            fullSize: true
          },
          {
            src: 'https://drive.google.com/uc?export=view&id=1kYbEGZJSsfoIR8qSL26TytSRIlfyHn8S',
            fullSize: true
          }
        ],
        videos: null
      },
      {
        id: 4,
        title: '항만 자율주행 운반차량 인터페이스',
        info: {
          date: '2019',
          cate: 'Web',
          role: 'development / planning / design',
          stack:
            'HTML5, CSS3, JavaScript, jQuery, Django, Restful API, MySQL, Git',
          collabor: 'YAHAIT(한정우, 박순호, 김준형, 김태양)'
        },
        content: {
          text: '항만 자율주행 운반차량 모니터링 및 제어 웹 인터페이스입니다. 웹 기반 인터페이스를 통해 아두이노로 개발된 프로토타입 자율주행 자동차를 모니터링하고 관리하며 제어할 수 있습니다. YAHAIT팀과 협업하며 인터페이스의 디자인과 프론트엔드 개발을 담당하였습니다. 해당 프로젝트의 결과로, 2019 스마트 해상물류 프로젝트 경진대회(스마트 항만물류 공모전) ‘항만 지능형 자율 운반 스마트 차량’ 동상 수상과 울산항만공사 스마트항만물류지원센터 주관‘2019 스마트 항만물류 창업아이템 발굴 지원사업’에 선정되어, 2640만원 수주하였습니다.',
          links: [
            {
              title: '조선일보',
              src: 'http://news.chosun.com/pan/site/data/html_dir/2019/11/06/2019110601298.html'
            },
            {
              title: '중앙일보',
              src: 'https://news.joins.com/article/23625842'
            }
          ]
        },
        links: [
          {
            type: 'github',
            src: 'https://github.com/baeseonghyeon/hanium-smartcar'
          }
        ],
        thumb: null,
        images: [
          {
            src: 'https://drive.google.com/uc?export=view&id=1o4BkXnkMhu1sZovfJbaP8I2FzgByQzSC'
          }
        ],
        videos: [
          {
            src: 'https://www.youtube.com/embed/56Nr-upcPYU'
          },
          {
            src: 'https://www.youtube.com/embed/v3SlDoEIcBo'
          }
        ]
      },
      {
        id: 5,
        title: 'SYUFESTA',
        info: {
          date: '2019',
          cate: 'Website',
          role: 'development / planning',
          stack:
            'HTML5, CSS3, JavaScript, jQuery, Django, Git, AWS(Elastic Beanstalk, bucket, RDS)',
          collabor: '멋쟁이사자처럼 at 삼육대학교'
        },
        content: {
          text: '삼육대학교 천보축전 & 체육대회 웹사이트입니다. 삼육대학교 축제(천보축전)와 체육대회의 홍보, 정보게시, 이벤트 진행을 목적으로 개발되었습니다. 메인페이지를 통해 각각 다른 컨셉과 디자인의 축제 웹사이트와 체육대회 웹사이트를 이용할 수 있습니다. 삼육대학교 총학생회와 멋쟁이사자처럼 at 삼육대학교가 협업하여 제작하였습니다. 프로젝트와 웹사이트의 기획과 프론트엔드 개발을 총괄하였습니다.'
        },
        links: [
          {
            type: 'github',
            src: 'https://github.com/likelion-syu/syufesta'
          }
        ],
        thumb: null,
        images: [
          {
            src: 'https://drive.google.com/uc?export=view&id=158QoYY-KWHzXAD_GZKTELeSiEOPHAEr1'
          },
          {
            src: 'https://drive.google.com/uc?export=view&id=1LE4HyxyAyJyUy2eDf7GqBvkDGZNDKWyv'
          }
        ],
        videos: [
          {
            src: 'https://www.youtube.com/embed/_8kgo70qmbA'
          },
          {
            src: 'https://www.youtube.com/embed/Zq1rC8LJ6oE'
          }
        ]
      },
      {
        id: 6,
        title: '올드루키(프로토타입)',
        info: {
          date: '2019',
          cate: 'Website',
          role: 'development / planning',
          stack: 'React, scss, Git',
          collabor: 'OldRookie(유경수, 곽예린)'
        },
        content: {
          text: '(주)올드루키의 기업 홈페이지 입니다. 회사의 정보게시를 위해 제작되었습니다. 웹사이트 기획과 프론트엔드 개발을 담당하였습니다. (아직 개발중인 프로젝트 입니다.)'
        },
        links: [
          {
            type: 'web',
            src: 'https://www.oldrookiecorp.com/'
          }
        ],
        thumb: null,
        images: null,
        videos: [
          {
            src: 'https://www.youtube.com/embed/UeceY8Muza4'
          }
        ]
      },
      {
        id: 7,
        title: '마스터피스(프로토타입)',
        info: {
          date: '2020',
          cate: 'Application',
          role: 'development / planning / design',
          stack: 'React Native, scss, Git',
          collabor: 'OldRookie(유경수, 곽예린)'
        },
        content: {
          text: '미술전시, 관람 서비스 마스터피스의 애플리케이션 프로토타입 입니다.'
        },
        links: null,
        thumb: null,
        images: null,
        videos: [
          {
            src: 'https://www.youtube.com/embed/lwBelR3pVNk'
          }
        ]
      },
      {
        id: 8,
        title: '두유 Know 잔디?',
        info: {
          date: '2020',
          cate: 'Website',
          role: 'development / planning / design',
          stack:
            'HTML5, CSS3, JavaScript, jQuery, Django, MySQL, Docker, Git, GCP(Compute Engine)',
          collabor: '박기홍'
        },
        content: {
          text: '미술전시, 관람 서비스 마스터피스의 애플리케이션 프로토타입 입니다.',
          links: [
            {
              title: 'junho85 Github Link',
              src: 'https://github.com/junho85/garden4'
            }
          ]
        },
        links: [
          {
            type: 'github',
            src: 'https://github.com/DSC-Sahmyook/SYU_Garden'
          }
        ],
        thumb: null,
        images: null,
        videos: [
          {
            src: 'https://www.youtube.com/embed/m8TAnOVKJnI'
          },
          {
            src: 'https://www.youtube.com/embed/ZmYICebhaoQ'
          }
        ]
      },
      {
        id: 9,
        title: '디젤트럭',
        info: {
          date: '2021',
          cate: 'Application, Website',
          role: 'development',
          stack:
            'ReactNative, React, TypeScript, SCSS, StoryBook, Git, GraphQL',
          collabor: 'OldRookie(유경수, 박기홍, 김혜원), 유미스'
        },
        content: {
          text: '화물 거래 플랫폼 디젤트럭(Diesel Truck)의 딜러앱, 셀러앱 클라이언트, 관리자 웹 클라이언트를 외주 개발하였습니다.',
          links: [
            {
              title: 'GooglePlay(딜러)',
              src: 'https://play.google.com/store/apps/details?id=net.dstruck.dieseltruckDealer'
            },
            {
              title: 'GooglePlay(셀러)',
              src: 'https://play.google.com/store/apps/details?id=net.dstruck.dieseltruckSeller'
            }
          ]
        },
        links: null,
        thumb:
          'https://drive.google.com/uc?export=view&id=1QRhdOFpdSWytIMEuv2LuwACKRJ8uWzB2',
        images: [
          {
            src: 'https://drive.google.com/uc?export=view&id=1WnzXpSgqGDgLwUHFIbyJAiMEAAlmzXAr'
          },
          {
            src: 'https://drive.google.com/uc?export=view&id=1Aa-Uy-jepOf0lIOvPusXA6pgpfTGB6Y_',
            fullSize: true
          },
          {
            src: 'https://drive.google.com/uc?export=view&id=1YR8EtN8ecO-_HXxI-fHAWV-SHdPDg-L1',
            fullSize: true
          }
        ],
        videos: null
      },
      {
        id: 10,
        title: '클러버',
        info: {
          date: '2021',
          cate: 'Application, Website',
          role: 'development',
          stack:
            'ReactNative, React, TypeScript, SCSS, StoryBook, Git, GraphQL',
          collabor: 'OldRookie(유경수, 박기홍, 김혜원), 유미스'
        },
        content: {
          text: '클럽 모임 커뮤니티, 연결 플랫폼 클러버(Diesel Truck)의 앱 클라이언트, 관리자 웹 클라이언트를 외주 개발하였습니다.',
          links: [
            {
              title: 'GooglePlay',
              src: 'https://play.google.com/store/apps/details?id=com.wonitclient'
            },
            {
              title: 'AppStore',
              src: 'https://apps.apple.com/kr/app/clubber/id1561355313'
            }
          ]
        },
        links: null,
        thumb:
          'https://drive.google.com/uc?export=view&id=17qWFUoWSJtMzN1sdSD_-Don0jKweUTTs',
        images: [
          {
            src: 'https://drive.google.com/uc?export=view&id=1RgCr-0OUuRKLjAghej719wXrUCbbW9pO'
          },
          {
            src: 'https://drive.google.com/uc?export=view&id=1P8ULJQiJaQ31Gk4I_8BPowTHr3w0ReXV'
          }
        ],
        videos: null
      }
    ]
  },
  /** English :: Data Language */
  {
    lang: 'eg',
    data: [
      egDataForm(1, {
        title: 'Likelion at Sahmyook University',
        text: 'It is a website of Likelion at Sahmyook University. It is produced for the purpose of managing members, posting notices, posting assignments, posting class materials, and promoting activities during activities Likelion. I was in charge of planning, design, function development, and server deploy of the website.'
      }),
      egDataForm(2, {
        title: 'Sahmyook University Library Event',
        text: 'This is the attendance check event page of Sahmyook University Academic Information Service. After participating in the event, you can attendance and check attendance details. I developed attendance check event function, administrator function, server and screen design, and UI.',
        collabor: 'OPENBUS'
      }),
      egDataForm(3, {
        title: 'FarmCloud',
        text: 'It is User Web module for the farm cloud. The Web-based modules allow to monitor and control the growing environment of unattended smart farms. I was responsible for planning, screen design, and front-end development of early web module prototypes.',
        collabor: 'OPENBUS'
      }),
      egDataForm(4, {
        title: 'Port Self-driving Car Interface',
        text: "This is the web interface for monitoring and control of port self-driving vehicles. Web-based interfaces allow you to monitor, manage and control prototype self-driving vehicles developed use Arduino. I worked with the YAHAIT team to design the interface and develop the front end. As a result of this project, we won the 2019 Smart Port Logistics Project Competition (Smart Port Logistics Contest) 'Port Intelligent Autonomous Transport Smart Vehicle' and was selected as the '2019 Smart Port Logistics Startup Item Discovery Support Project' by Ulsan Port Corporation. Through this, we received business funds 26.4 million won.",
        collabor: 'YAHAIT',
        descLinks: [
          {
            title: 'ChosunMedia'
          },
          {
            title: 'JoongAng Ilbo'
          }
        ]
      }),
      egDataForm(5, {
        title: 'SYUFESTA',
        text: 'This is the website of the Cheonbo Festival & Athletic Competition of Sahmyook University. It was developed for the purpose of promoting Sahmyook University Festival (Cheonbo Festival) and Athletic Competition, posting information, and support events. Through the one main page, you can experience two website with a different design and concept. Like the student council of Sahmyook University and Likelion at Sahmyook University collaborated and produced it. I taken the lead of planning the project and front-end developing the front-end.',
        collabor: 'LIKELION at SYU'
      }),
      egDataForm(6, {
        title: 'OldRookie Corp.(Prototype)',
        text: "This is website of the OldRookie corporate. It is designed to publish the company's information. I was in charge of website planning and front-end development. (This project is still in development.)",
        collabor: 'OldRookie'
      }),
      egDataForm(7, {
        title: 'Masterpiece(Prototype)',
        text: "This is an application prototype for the 'Masterpiece' of the art exhibition and viewing service.",
        collabor: 'OldRookie'
      }),
      egDataForm(8, {
        title: 'Do you Know Jandi?',
        text: "This is the Github gardener's ('Do you Know Grass?') event attendance website held by the Developer Student Clubs Sahmyook University. This website was developed through code and design refactoring of Gardeners season5 of GDG Pangyo.",
        collabor: 'Gihong-Park'
      }),
      egDataForm(9, {
        title: 'Diesel Truck',
        text: 'We have developed a dealer app, seller app client, and admin web client for the cargo trading platform named Diesel Truck.',
        collabor: 'OldRookie, Yumis',
        descLinks: [
          {
            title: 'GooglePlay(Dealer)'
          },
          {
            title: 'GooglePlay(Seller)'
          }
        ]
      }),
      egDataForm(10, {
        title: 'CLUBBER',
        text: 'We have developed the app client, and admin web client for the club party connection platform named Clubber.',
        collabor: 'OldRookie, Yumis'
      })
    ]
  }
];

export default workData;
