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

const App = () => {
  const [state, setState] = React.useState({ step: 0 });
  const [showCursor, setShowCursor] = React.useState(true);

  const { pathname } = useLocation();

  const stepIncrement = React.useCallback(() => {
    setState((state) => ({ ...state, step: state.step + 1 }));
  }, [setState]);

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
