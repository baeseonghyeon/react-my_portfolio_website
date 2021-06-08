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
import workData from './data/work.json';
import profileData from './data/profile.json';

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
  const Data = {
    ui: {
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
      data: Data.work.kr,
      uidata: Data.ui.kr
    }
  ]);

  const langToggle = (data) => {
    setLangs(
      langs.map((lang) =>
        data === 'EN'
          ? { ...lang, set: 'EN', data: Data.work.en, uidata: Data.ui.en }
          : { ...lang, set: 'KR', data: Data.work.kr, uidata: Data.ui.kr }
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
            render={() => <About uiData={langs[0].uidata} path={0} />}
          />
          <Route
            path="/about"
            exact
            render={() => <About uiData={langs[0].uidata} />}
          />
          <Route
            path="/works"
            exact
            render={() => (
              <Work Data={langs[0].data} uiData={langs[0].uidata} />
            )}
          />
          <Route
            path="/works/:id"
            render={(match) => (
              <Detail
                Data={langs[0].data}
                uiData={langs[0].uidata}
                {...match}
              />
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
