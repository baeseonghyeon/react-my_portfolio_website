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
import profileData from './data/profile.json';
import workData from './data/work.json';

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
  const data = {
    profile: profileData,
    work: workData,
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
      document.querySelector('meta[name="theme-color"]').setAttribute('content',  '#111');
    } else {
      document.body.classList.add('light-theme');
      document.body.classList.remove('dark-theme');
      document.querySelector('meta[name="theme-color"]').setAttribute('content',  '#ffffff');
    }
  }, [darkState]);

  useEffect(() => {
    if (prefersDarkScheme.matches) {
      setDarkState(true);
    } else {
      setDarkState(false);
    }
  }, [prefersDarkScheme.matches]);

  // console.log(data.profile);

  return (
    <div className="App">
      <Header />
      <ScrollToTop>
        <Switch>
          <Route
            path="/"
            exact
            render={() => (
              <About data={data.profile.data} />
            )}
          />
          <Route
            path="/about"
            exact
            render={() => 
            <About data={data.profile.data} />
          }
          />
          <Route
            path="/works"
            exact
            render={() => 
            <Work data={data.work.data}
            />}
          />
          <Route
            path="/works/:id"
            render={(match) => (
              <Detail data={data.work.data} {...match} />
            )}
          />
          <Route path="*" component={NotFound} />
        </Switch>
      </ScrollToTop>
      <Footer
        darkModeToggle={(e) => setDarkState(e)}
        darkState={darkState}
      />
    </div>
  );
}

export default App;
