const profileData = [
  {
    lang: 'kr',
    data: 
      {
        intro:
          '배성현은 프론트엔드 개발자, UI개발자, 웹/앱 개발자, UI/UX 기획자, IT서비스 기획자, 프로덕트 매니저입니다.',
        comment:
          // '배성현은 프론트엔드 개발자, UI개발자, 웹/앱 개발자, UI/UX 기획자, IT서비스 기획자, 프로덕트 매니저입니다.',
          '디자이너의 시선으로 기획하며, 기획자의 생각으로 개발합니다. 심미적으로 아름답고 기능적으로 효과적인 서비스를 만들고 있습니다. 대한민국에 거주하며 삼육대학교에서 경영정보학과를 전공했습니다.',
        career: [
          {
            title: '(주)올드루키 프론트엔드 개발자, 서비스 기획자',
            date: '2019-2021',
            url: 'https://oldrookiecorp.notion.site/152e5886209e4832a350dbc74b22a7ae'
          },
          {
            title: 'Google Developer Student Clubs Lead',
            date: '2019-2020',
            url: 'https://google.dev/badges/community/dsc/2019/lead?fbclid=IwAR0bSPj_62TH30Xa5ZbkIfVdjsXLmX9V_yt2oei95m-lfQqTz3veIk5Ry9A'
          },
          {
            title: '멋쟁이사자처럼 at 삼육대학교 6기, 7기 대표',
            date: '2018-2019',
            url: 'http://sahmyook.likelion.org/users/2'
          },
          {
            title: '오픈버스(주) 개발팀 인턴',
            date: '2018-2019',
            url: 'http://www.openbus.me/index.php'
          }
        ],
        stack: [
          {
            category: '웹',
            stacks:
              'HTML5, CSS3, SCSS, React, Svelte, StoryBook, A-frame, Django, Ruby on Rails, CodeIgniter'
          },
          {
            category: '앱',
            stacks: 'React Native'
          },
          {
            category: '프로그래밍언어',
            stacks: 'JavaScript, TypeScript, Python, PHP, Ruby, C++'
          },
          {
            category: '데이터베이스',
            stacks: 'MySQL, GraphQL, MongoDB, SQLite, PostgreSQL'
          },
          {
            category: '인프라',
            stacks: 'Git, AWS, GCP, Docker'
          }
        ],
        footer: [
          {
            text: '이 웹사이트는 React.js를 통해 개발되어 Github.io에 배포 되었습니다.'
          },
          {
            text: '웹사이트 개발 및 디자인 (배성현)'
          }
        ]
      }
  },
  /** English :: Data Language */
  {
    lang: 'eg',
    data: 
      {
        intro:
          'Bae Seonghyeon is a Front-end Developer, UI Developer, WEB/APP Developer, UI/UX Planner, IT Service Planner, Product Manager.',
        comment:
          "I plan with the eyes of the designer and develop with the idea of the planner. I'm interested in creating a service that is aesthetically beautiful and functionally effective. I live in Korea and majored in Management Information Systems at Sahmyook University.",
        career: [
          {
            title: 'OldRookie Corp FE Developer, Service Planner ',
            get date() {
              return profileData[0].data.career[0].date;
            },
            get url() {
              return profileData[0].data.career[0].url;
            }
          },
          {
            title: 'Google Developer Student Clubs Lead',
            get date() {
              return profileData[0].data.career[1].date;
            },
            get url() {
              return profileData[0].data.career[1].url;
            }
          },
          {
            title: 'LIKELION at Sahmyook University 6th, 7th Leader',
            get date() {
              return profileData[0].data.career[2].date;
            },
            get url() {
              return profileData[0].data.career[2].url;
            }
          },
          {
            title: 'OPENBUS Development Team Intern',
            get date() {
              return profileData[0].data.career[3].date;
            },
            get url() {
              return profileData[0].data.career[3].url;
            }
          }
        ],
        stack: [
          {
            category: 'WEB',
            get stacks() {
              return profileData[0].data.stack[0].stacks;
            }
          },
          {
            category: 'APP',
            get stacks() {
              return profileData[0].data.stack[1].stacks;
            }
          },
          {
            category: 'LANGUAGE',
            get stacks() {
              return profileData[0].data.stack[2].stacks;
            }
          },
          {
            category: 'DATABASE',
            get stacks() {
              return profileData[0].data.stack[3].stacks;
            }
          },
          {
            category: 'INFRA',
            get stacks() {
              return profileData[0].data.stack[4].stacks;
            }
          }
        ],
        footer: [
          {
            text: 'This website was developed using React.js and Deployed on Github.io'
          },
          {
            text: 'Website developed and designed by Bae Seonghyeon'
          }
        ]
      }
    
  }
];

export default profileData;
