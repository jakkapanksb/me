import React from 'react';
import { Disconnected } from 'pages/Disconnected';
import { Time } from 'pages/Time';
import {
  // BrowserRouter as Router,
  Switch,
  Route,
  HashRouter,
} from 'react-router-dom';
import Anxious from 'pages/Anxious';
import Cursor from 'components/Cursor';
// import styled from 'styled-components';
import './style.css';
import Home from 'pages/Home';
import About from 'pages/About';
import styled from 'styled-components';
import withNav from 'hoc/withNav';

export const MainContainer = styled.div`
  /* margin: 4vw 4vw 0 4vw; */
  margin: 3.8vw 4vw 4vw 4vw;
  height: 100%;
`;

const NavDisconnected = withNav(Disconnected);
const NavTime = withNav(Time);
const NavAnxious = withNav(Anxious);
const NavAbout = withNav(About);

const App = () => {
  const [showCursor, setShowCursor] = React.useState(true);
  return (
    <HashRouter basename='/'>
      <Cursor showCursor={showCursor} />

      <Switch>
        <Route exact path='/'>
          <Home setShowCursor={setShowCursor} />
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
          <MainContainer>
            <NavAbout />
          </MainContainer>
        </Route>
      </Switch>
    </HashRouter>
  );
};
export default App;
