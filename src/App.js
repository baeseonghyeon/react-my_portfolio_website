import React, { useState, useEffect, useMemo } from 'react';
import { Route, Switch, useLocation, withRouter } from 'react-router-dom';
// scenes
import Header from './components/Header';
import Footer from './components/Footer';
import About from './scenes/About';
import Work from './scenes/Work';
import Detail from './scenes/Detail';
import NotFound from './scenes/NotFound';
// data
import workData from './data/work';
import profileData from './data/profile';

// Render Scroll Top Set
function _ScrollToTop(props) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return props.children;
}

const ScrollToTop = withRouter(_ScrollToTop);

function App() {
  // Data Setting
  const DATA = {
    profile: {
      kr: profileData[0],
      en: profileData[1]
    },
    work: {
      kr: workData[0],
      en: workData[1]
    }
  };

  // Language Setting
  const [langs, setLangs] = useState([
    {
      set: 'KR',
      work_data: DATA.work.kr,
      profile_data: DATA.profile.kr
    }
  ]);

  const langToggle = (data) => {
    setLangs(
      langs.map((lang) =>
        data === 'EN'
          ? {
              ...lang,
              set: 'EN',
              work_data: DATA.work.en,
              profile_data: DATA.profile.en
            }
          : {
              ...lang,
              set: 'KR',
              work_data: DATA.work.kr,
              profile_data: DATA.profile.kr
            }
      )
    );
  };

  // OS UI-Mode Check
  const prefersDarkScheme = useMemo(
    () => window.matchMedia('(prefers-color-scheme: dark)'),
    []
  );

  // Dark&Light Mode setting
  const [darkState, setDarkState] = useState();

  useEffect(() => {
    if (darkState) {
      document.body.classList.add('dark-theme');
      document.body.classList.remove('light-theme');
    } else {
      document.body.classList.add('light-theme');
      document.body.classList.remove('dark-theme');
    }
  }, [darkState]);

  useEffect(() => {
    if (prefersDarkScheme.matches) {
      setDarkState(true);
    } else {
      setDarkState(false);
    }
  }, [prefersDarkScheme.matches]);

  return (
    <div className="App">
      <Header />
      <ScrollToTop>
        <Switch>
          <Route
            path="/"
            exact
            render={() => (
              <About data={langs[0].profile_data.data} />
            )}
          />
          <Route
            path="/about"
            exact
            render={() => <About data={langs[0].profile_data.data} />}
          />
          <Route
            path="/works"
            exact
            render={() => <Work data={langs[0].work_data.data} />}
          />
          <Route
            path="/works/:id"
            render={(match) => (
              <Detail data={langs[0].work_data.data} {...match} />
            )}
          />
          <Route path="*" component={NotFound} />
        </Switch>
      </ScrollToTop>
      <Footer
        langs={langs}
        langToggle={langToggle}
        darkModeToggle={(e) => setDarkState(e)}
        darkState={darkState}
      />
    </div>
  );
}

export default App;
