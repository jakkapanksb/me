import React from 'react';
import { Disconnected } from 'pages/Disconnected';
import { Time } from 'pages/Time';
import {
  // BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from 'react-router-dom';
import Anxious from 'pages/Anxious';
import Cursor from 'components/Cursor';
// import styled from 'styled-components';
import './style.css';
import Home from 'pages/Home';
import About from 'pages/About';
import styled, { css } from 'styled-components';
import withNav from 'hoc/withNav';

export type State = {
  step: number;
};

export const MainContainer = styled.div`
  margin: ${(props: { pathname?: string }) =>
    props.pathname !== '/whoweare' ? '3.5vw 4vw 4vw 4vw' : '7vh 8vh 8vh 8vh'};

  ${(props: { pathname?: string }) =>
    props.pathname === '/whoweare' &&
    css`
      height: 100%;
    `}/* margin: 3.8vw 4vw 4vw 4vw; */
  /* margin: 0 8vh 8vh 8vh; */
  /* margin: 7vh 8vh 8vh 8vh; */
`;

const MainLayout = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;

  ${(props: { pathname: string }) =>
    props.pathname === '/' &&
    css`
      overflow: hidden;
    `}

  ${(props: { pathname: string }) =>
    props.pathname === '/whoweare' &&
    css`
      background-color: white;
      color: black;
      /* width: 3500px; */
      /* width: 200%; */
      overflow-y: hidden;
    `}
`;

const NavDisconnected = withNav(Disconnected);
const NavTime = withNav(Time);
const NavAnxious = withNav(Anxious);
const NavAbout = withNav(About);

const cacheImages = (srcArray: string[]) => {
  srcArray.forEach((src) => {
    new Promise(function (resolve, reject) {
      const img = new Image();

      img.src = src;
      img.onload = resolve;
      img.onerror = reject;
    });
  });
};

const App = () => {
  const [state, setState] = React.useState({ step: 0 });
  const [showCursor, setShowCursor] = React.useState(true);

  const { pathname } = useLocation();

  const stepIncrement = React.useCallback(() => {
    setState((state) => ({ ...state, step: state.step + 1 }));
  }, [setState]);

  React.useEffect(() => {
    const imgs = [
      // Disconnected
      'https://www.dropbox.com/s/hlvvtza3894b9z1/Disconnected%2001.jpg?raw=1',
      'https://www.dropbox.com/s/kj931zhnfyvcnad/Disconnected%2002.jpg?raw=1',
      'https://www.dropbox.com/s/b6q8hlvo548r4y8/Disconnected%2006.png?raw=1',
      // 'https://www.dropbox.com/s/u9dlkh6q7iu77fo/Disconnected%2006_hover.png?raw=1',
      // 'https://www.dropbox.com/s/qtcnrxf1ix9p5r6/Disconnected%2003_hover.jpg?raw=1',
      // 'https://www.dropbox.com/s/iffl5v4bhng3vzs/Disconnected%2003.png?raw=1',
      // 'https://www.dropbox.com/s/kiaucokh13nnhom/Disconnected%2005.jpg?raw=1',
      // 'https://www.dropbox.com/s/lunv6jrrqxyd09i/Disconnected%2005_hover.jpg?raw=1',
      // 'https://www.dropbox.com/s/f4ud04587hro140/Disconnected%2007.png?raw=1',
      // 'https://www.dropbox.com/s/zxn0nr7k06ceyqj/Disconnected%2007_hover.jpg?raw=1',

      // Time
      'https://www.dropbox.com/s/f4rnkswrwhlwpo0/Time%2001.jpg?raw=1',
      'https://www.dropbox.com/s/uwx6wlrg46pz9o9/Time%2003.jpg?raw=1',
      'https://www.dropbox.com/s/i6elpc554esb5h0/Time%2004.jpg?raw=1',

      // Anxiety
      'https://www.dropbox.com/s/y3cp4d1gvf1es33/Anxious%2001.jpg?raw=1',
      'https://www.dropbox.com/s/pevtu8xjils69hq/Anxious%2002.jpg?raw=1',
    ];

    cacheImages(imgs);
  }, []);

  return (
    <MainLayout id='main-layout' pathname={pathname}>
      <Cursor showCursor={showCursor} />

      <Switch>
        <Route exact path='/'>
          <Home
            state={state}
            stepIncrement={stepIncrement}
            setShowCursor={setShowCursor}
          />
        </Route>
        <Route path='/disconnected'>
          <MainContainer>
            <NavDisconnected />
          </MainContainer>
        </Route>
        <Route path='/time'>
          <MainContainer>
            <NavTime />
          </MainContainer>
        </Route>
        <Route path='/anxious'>
          <MainContainer>
            <NavAnxious />
          </MainContainer>
        </Route>
        <Route path='/whoweare'>
          <MainContainer pathname={pathname}>
            <NavAbout setShowCursor={setShowCursor} />
          </MainContainer>
        </Route>
      </Switch>
    </MainLayout>
  );
};
export default App;
