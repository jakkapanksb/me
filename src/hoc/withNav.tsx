import React from 'react';
import styled, { css } from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

export const StyledLink = styled(Link)`
  color: inherit;
  /* margin: 5px; */
  cursor: none;
  text-decoration: none;
  font-size: 2vh;
`;

const MainLink = styled(StyledLink)`
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  :hover {
    border-bottom: 3px #2e47ff solid;
    margin-bottom: -3px;
  }
`;

const Nav = styled.nav`
  /* padding: 20px 0px; */
  /* position: fixed; */
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  ${(props: { pathname: string }) =>
    props.pathname === '/whoweare' &&
    css`
      position: fixed;
      width: 92%;
    `}
`;

const LinkGroup = styled.span`
  display: flex;
  align-items: flex-start;
  * {
    margin: 0 1vw;
  }
`;

// const withNav = (Component: JSX.Element) => (props: any) => {
//   return (
//     <>
//       <Nav>
//         <StyledLink to='/me'>co-experiment</StyledLink>
//         <LinkGroup>
//           <StyledLink to='/me/disconnected'>Disconnected</StyledLink>
//           <StyledLink to='/me/time'>Lost track of time</StyledLink>
//           <StyledLink to='/me/anxious'>Anxious</StyledLink>
//         </LinkGroup>
//         <StyledLink to='/me'>who we are</StyledLink>
//       </Nav>
//       <Component {...props} />
//     </>
//   );
//   }
const withNav = <P extends object>(
  WrappedComponent: React.ComponentType<P>
): React.FC<P> => (props) => {
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  return (
    <>
      <Nav pathname={pathname}>
        <MainLink to='/'>co-experiment</MainLink>
        {!isHome ? (
          <LinkGroup>
            <MainLink to='/disconnected'>Isolation</MainLink>
            <MainLink to='/time'>Lost track of time</MainLink>
            <MainLink to='/anxious'>Anxiety</MainLink>
          </LinkGroup>
        ) : null}
        <MainLink to='/whoweare'>who we are</MainLink>
      </Nav>
      <WrappedComponent {...(props as P)} />
    </>
  );
};

export default withNav;
