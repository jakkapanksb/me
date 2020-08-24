import React from 'react';
import styled, { css } from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

export const StyledLink = styled(Link)`
  color: inherit;
  cursor: none;
  text-decoration: none;
  font-size: 1vw;
`;

const MainLink = styled(StyledLink)`
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  :hover {
    border-bottom: 3px #2e47ff solid;
    margin-bottom: -3px;
  }

  ${(props: { pathname: string }) =>
    props.pathname === '/whoweare' &&
    css`
      font-size: 2vh;
    `}

  ${(props: { pathname: string }) =>
    props.pathname === '/' &&
    css`
      cursor: pointer;
    `}
`;

const Nav = styled.nav`
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

const withNav = <
  P extends object & {
    setShowCursor?: React.Dispatch<React.SetStateAction<boolean>>;
  }
>(
  WrappedComponent: React.ComponentType<P>
): React.FC<P> => (props) => {
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  const { setShowCursor } = props;

  const handleMouseEnter = () => {
    if (setShowCursor && pathname === '/') {
      setShowCursor(false);
    }
  };

  const handleMouseLeave = () => {
    if (setShowCursor && pathname === '/') {
      setShowCursor(true);
    }
  };

  const handleClick = () => {
    if (setShowCursor && pathname === '/') {
      setShowCursor(true);
    }
  };

  return (
    <>
      <Nav pathname={pathname}>
        <MainLink
          pathname={pathname}
          to='/'
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          co-experiment
        </MainLink>
        {!isHome ? (
          <LinkGroup>
            <MainLink pathname={pathname} to='/disconnected'>
              Isolation
            </MainLink>
            <MainLink pathname={pathname} to='/time'>
              Lost track of time
            </MainLink>
            <MainLink pathname={pathname} to='/anxious'>
              Anxiety
            </MainLink>
          </LinkGroup>
        ) : null}
        <MainLink
          pathname={pathname}
          to='/whoweare'
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}
        >
          who we are
        </MainLink>
      </Nav>
      <WrappedComponent {...(props as P)} />
    </>
  );
};

export default withNav;
