import React from 'react';
import styled from 'styled-components';
import { StyledLink } from 'hoc/withNav';

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  /* height: 100%; */
  font-size: 4vh;
  position: relative;
  margin-top: 38vh;
  /* max-height: 100%; */
  flex-wrap: wrap;

  #myVideo {
    position: fixed;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
    z-index: -1;
  }
`;

const Link = styled(StyledLink)`
  font-size: 4vh;
  :hover {
    color: #2e47ff;
    cursor: pointer;
  }
`;

const HomeContent = ({
  setShowCursor,
}: {
  setShowCursor: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const handleMouseEnter = () => {
    setShowCursor(false);
  };

  const handleMouseLeave = () => {
    setShowCursor(true);
  };

  const handleClick = () => {
    setShowCursor(true);
  };

  return (
    <Container>
      <video autoPlay muted loop id='myVideo'>
        <source
          src='https://www.dropbox.com/s/z1m86t6ajlqixf5/homepage.mp4?raw=1'
          type='video/mp4'
        />
      </video>
      <Link
        to='/disconnected'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        Isolation
      </Link>
      <Link
        to='/time'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        Lost track of time
      </Link>
      <Link
        to='/anxious'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        Anxiety
      </Link>
    </Container>
  );
};

export default HomeContent;
