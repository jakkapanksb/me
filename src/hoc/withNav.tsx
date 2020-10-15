import { useBreakpoint } from 'hooks';
import React, { useMemo, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { Link, useLocation } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const StyledLink = styled(Link)`
  color: inherit;
  cursor: none;
  text-decoration: none;
`;

const MainLink = styled(StyledLink)`
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  white-space: nowrap;

  :hover {
    border-bottom: 3px #2e47ff solid;
    margin-bottom: -3px;
  }

  ${(props: { pathname: string; isMobile?: boolean }) =>
    props.pathname === '/whoweare' &&
    !props.isMobile &&
    css`
      font-size: calc(12px + (19 - 12) * ((100vw - 300px) / (1600 - 300)));
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
  font-size: calc(12px + (19 - 12) * ((100vw - 300px) / (1600 - 300)));

  ${(props: { pathname: string }) =>
    props.pathname === '/whoweare' &&
    css`
      @media only screen and (min-width: 1301px) {
        position: fixed;
        width: 92%;
      }

      @media only screen and (min-width: 600px) and (max-width: 1300px) {
        position: fixed;
        width: 80vw;
      }
    `}
`;

const LinkGroup = styled.span`
  display: flex;
  align-items: flex-start;
  * {
    margin: 0 1vw;
  }
`;

const LinkContainer = styled.div<{ isShowMenu: boolean }>`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 30vh;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  font-size: calc(25px + (38 - 25) * ((100vw - 300px) / (1600 - 300)));

  ${({ isShowMenu }) =>
    isShowMenu &&
    css`
      padding-bottom: 58vw;
    `}

  a:hover {
    color: #2e47ff;
    cursor: pointer;
    border: 0;
  }
`;

const withNav = <
  P extends object & {
    setShowCursor?: React.Dispatch<React.SetStateAction<boolean>>;
  }
>(
  WrappedComponent: React.ComponentType<P>
): React.FC<P> => (props) => {
  const [isShowMenu, setIsShowMenu] = useState(false);
  const { pathname } = useLocation();
  const { isMatched, isMobile } = useBreakpoint();

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

  const shouldShowMenu = useMemo(
    () => (isMatched('xs') || isMatched('sm')) && isShowMenu,
    [isShowMenu, isMatched]
  );

  return (
    <>
      {(isMatched('xs') || isMatched('sm')) && !isHome ? (
        <AiOutlineMenu
          onClick={() => setIsShowMenu((isShowMenu) => !isShowMenu)}
        />
      ) : (
        <Nav pathname={pathname}>
          <MainLink
            pathname={pathname}
            to='/'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Co-experiments
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
            Who we are
          </MainLink>
        </Nav>
      )}
      {shouldShowMenu ? (
        <LinkContainer isShowMenu={isShowMenu}>
          <MainLink
            pathname={pathname}
            to='/'
            isMobile={isMobile}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Co-experiments
          </MainLink>
          <MainLink pathname={pathname} to='/disconnected' isMobile={isMobile}>
            Isolation
          </MainLink>
          <MainLink pathname={pathname} to='/time' isMobile={isMobile}>
            Lost track of time
          </MainLink>
          <MainLink pathname={pathname} to='/anxious' isMobile={isMobile}>
            Anxiety
          </MainLink>
          <MainLink
            pathname={pathname}
            to='/whoweare'
            isMobile={isMobile}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
          >
            Who we are
          </MainLink>
        </LinkContainer>
      ) : (
        <WrappedComponent {...(props as P)} />
      )}
    </>
  );
};

export default withNav;
