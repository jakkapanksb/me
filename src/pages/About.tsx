import { useBreakpoint } from 'hooks';
import React from 'react';
import styled, { css } from 'styled-components';
import './About.css';

const Container = styled.div<{ isMobile?: boolean }>`
  display: flex;
  height: 91%;
  flex-wrap: nowrap;
  justify-content: flex-start;
  color: black;
  font-size: ${({ isMobile }) => (isMobile ? '1em' : '4vh')};
  background-color: white;
  padding-top: 4vh;

  flex-direction: ${({ isMobile }: { isMobile?: boolean }) =>
    isMobile ? 'column' : 'row'};
`;

const FlexItem = styled.div<{ isMobile?: boolean }>`
  margin: ${({ isMobile }) => (isMobile ? '0' : '0 6vh')};
`;

const FirstItem = styled(FlexItem)`
  ${({ isMobile }) =>
    !isMobile &&
    css`
      flex: 0 0 16em;
    `}
`;

const SecondItem = styled(FlexItem)`
  ${({ isMobile }) =>
    !isMobile &&
    css`
      flex: 0 0 16em;
      padding-right: 5vh;
    `}
`;

const NormalItem = styled(FlexItem)`
  flex: 0 0;
  margin: 0;
  align-self: ${(props: { name: string | undefined }) =>
    props.name === 'blu' ? 'flex-end' : 'flex-start'};
  display: flex;
  /* 
  img.blu:hover {
    cursor: url(https://www.dropbox.com/s/dzzg5urlxj6pxek/blu_hover128x128.jpg?dl=1),
      none;
  } */

  /* img.eve:hover {
    cursor: url(https://www.dropbox.com/s/n9i6g0yy53scseq/eve_hover128x128.jpg?dl=1),
      none;
  } */
`;

const BluName = styled.p<{ isMobile?: boolean }>`
  font-size: ${({ isMobile }) => (isMobile ? '14vw' : '18vh')};
  position: relative;
  top: ${({ isMobile }) => (isMobile ? '-4vw' : '-4vh')};
  left: ${({ isMobile }) => (isMobile ? '-5vw' : '-6vh')};
`;

const EveName = styled.p<{ isMobile?: boolean }>`
  font-size: ${({ isMobile }) => (isMobile ? '14vw' : '18vh')};
  position: relative;
  margin-left: ${({ isMobile }) => (isMobile ? 0 : '-91.5vh')};
  top: ${({ isMobile }) => (isMobile ? '-6vw' : '-6vh')};
  ${({ isMobile }) =>
    isMobile &&
    css`
      left: 4vw;
    `}
`;

const About = ({
  setShowCursor,
}: {
  setShowCursor: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [bluPosition, setBluPosition] = React.useState({ x: 0, y: 0 });
  const [evePosition, setEvePosition] = React.useState({ x: 0, y: 0 });

  const { isMobile } = useBreakpoint();

  React.useEffect(() => {
    if (!isMobile) {
      const container = document.getElementById('main-layout');
      if (container) {
        const handleWheel = (e: WheelEvent) => {
          if (e.deltaY > 0) container.scrollLeft += e.deltaY;
          else if (e.deltaY < 0) container.scrollLeft += e.deltaY;
        };
        container.addEventListener('wheel', handleWheel);
        return () => {
          container.removeEventListener('wheel', handleWheel);
        };
      }
    }
  }, [isMobile]);

  return (
    <Container className='container' isMobile={isMobile}>
      <NormalItem
        name='blu'
        style={{
          position: 'relative',
          bottom: '0vh',
          left: isMobile ? '0' : '-8vh',
        }}
      >
        <img
          src='https://www.dropbox.com/s/dxanp0t3vphs3e8/blu_hover.jpg?raw=1'
          alt='Blu'
          style={{
            display:
              bluPosition.x === 0 && bluPosition.y === 0 ? 'none' : undefined,
            position: 'fixed',
            width: '30vh',
            left: bluPosition.x,
            top: bluPosition.y + 10,
            zIndex: 1,
          }}
        />
        <img
          className='blu'
          src='https://www.dropbox.com/s/dx23fdw7u3as95z/blu_main.jpg?raw=1'
          alt='Blu'
          height={'auto'}
          onMouseMove={(e) => setBluPosition({ x: e.pageX, y: e.pageY })}
          onMouseLeave={() => {
            setBluPosition({ x: 0, y: 0 });
          }}
          style={{ alignSelf: 'flex-end', width: isMobile ? '70%' : '60vh' }}
        />
        <BluName isMobile={isMobile}>Blu</BluName>
      </NormalItem>

      <NormalItem
        name='eve'
        style={{
          marginLeft: isMobile ? 0 : '42vh',
          position: 'relative',
          bottom: isMobile ? 0 : '14vh',
          marginRight: isMobile ? 0 : '64vh',
          ...(isMobile && {
            marginTop: '5vw',
          }),
        }}
      >
        {isMobile ? (
          <>
            <EveName isMobile={isMobile}>Eve</EveName>
            <img
              src='https://www.dropbox.com/s/1ia0iqpqonrs8kd/eve_hover.jpg?raw=1'
              alt='Eve'
              style={{
                display:
                  evePosition.x === 0 && evePosition.y === 0
                    ? 'none'
                    : undefined,
                position: 'fixed',
                width: '30vh',
                left: evePosition.x,
                top: evePosition.y + 10,
                zIndex: 1,
              }}
            />
            <img
              className='eve'
              src='https://www.dropbox.com/s/3iyfgfaylynnp8f/eve_main.jpg?raw=1'
              alt='Eve'
              height={'auto'}
              onMouseMove={(e) => {
                setEvePosition({ x: e.pageX, y: e.pageY });
              }}
              onMouseLeave={() => {
                setEvePosition({ x: 0, y: 0 });
              }}
              style={{
                width: isMobile ? '70%' : '60vh',
                alignSelf: 'flex-end',
              }}
            />
          </>
        ) : (
          <>
            <img
              src='https://www.dropbox.com/s/1ia0iqpqonrs8kd/eve_hover.jpg?raw=1'
              alt='Eve'
              style={{
                display:
                  evePosition.x === 0 && evePosition.y === 0
                    ? 'none'
                    : undefined,
                position: 'fixed',
                width: '30vh',
                left: evePosition.x,
                top: evePosition.y + 10,
                zIndex: 1,
              }}
            />
            <img
              className='eve'
              src='https://www.dropbox.com/s/3iyfgfaylynnp8f/eve_main.jpg?raw=1'
              alt='Eve'
              height={'auto'}
              onMouseMove={(e) => {
                setEvePosition({ x: e.pageX, y: e.pageY });
              }}
              onMouseLeave={() => {
                setEvePosition({ x: 0, y: 0 });
              }}
              style={{
                width: isMobile ? '70%' : '60vh',
                alignSelf: 'flex-start',
              }}
            />
            <EveName isMobile={isMobile}>Eve</EveName>
          </>
        )}
      </NormalItem>
      <FirstItem isMobile={isMobile}>
        <p>
          Blu and Eve are designers based in the Bay area originally from
          Bangkok.
        </p>
        {!isMobile && (
          <>
            <br />
            <br />
          </>
        )}
        <p style={{ marginBlockEnd: isMobile ? 0 : undefined }}>
          In the quarantine world, they came together to create Co-experiments
          project with beliefs that this is time to practice, to learn and to
          grow.
        </p>
      </FirstItem>

      <SecondItem isMobile={isMobile}>
        <p>
          Co-experiments is an experiment of expressions in the new-normal world
          through design.
        </p>
        {!isMobile && (
          <>
            <br />
          </>
        )}
        <p>
          Contact <br />
          blueve.design@gmail.com <br />
          Instagram{' '}
          <a
            href='https://www.instagram.com/co.experiments/'
            target='blank'
            onMouseEnter={() => setShowCursor(false)}
            onMouseLeave={() => setShowCursor(true)}
            style={{ color: 'black', textDecoration: 'none' }}
          >
            @co.experiments
          </a>
        </p>
      </SecondItem>
    </Container>
  );
};

export default About;
