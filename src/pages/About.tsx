import React from 'react';
import './About.css';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  height: 91%;
  /* width: 210%; */
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  color: black;
  font-size: 4vh;
  background-color: white;
  padding-top: 4vh;
`;

const FlexItem = styled.div`
  margin: 0 6vh;
`;

const FirstItem = styled(FlexItem)`
  flex: 0 0 16em;
`;

const SecondItem = styled(FlexItem)`
  flex: 0 0 16em;
  padding-right: 5vh;
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

const BluName = styled.p`
  font-size: 18vh;
  position: relative;
  top: -4vh;
  left: -6vh;
`;

const EveName = styled.p`
  font-size: 18vh;
  position: relative;
  margin-left: -91.5vh;
  top: -6vh;
`;

const About = ({
  setShowCursor,
}: {
  setShowCursor: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [bluPosition, setBluPosition] = React.useState({ x: 0, y: 0 });
  const [evePosition, setEvePosition] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    // const container = document.getElementsByTagName('html')[0];
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
  }, []);
  return (
    <Container className='container'>
      <NormalItem
        name='blu'
        style={{ position: 'relative', bottom: '0vh', left: '-8vh' }}
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
          style={{ alignSelf: 'flex-end', width: '60vh' }}
        />
        <BluName>Blu</BluName>
      </NormalItem>

      <NormalItem
        name='eve'
        style={{
          marginLeft: '42vh',
          position: 'relative',
          bottom: '14vh',
          marginRight: '64vh',
        }}
      >
        <img
          src='https://www.dropbox.com/s/1ia0iqpqonrs8kd/eve_hover.jpg?raw=1'
          alt='Eve'
          style={{
            display:
              evePosition.x === 0 && evePosition.y === 0 ? 'none' : undefined,
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
          style={{ width: '60vh' }}
        />
        <EveName>Eve</EveName>
      </NormalItem>
      <FirstItem>
        <p>
          Blu and Eve are designers based in the Bay area originally from
          Bangkok.
        </p>
        <br />
        <br />
        <p>
          In the quarantine world, they came together to create Co-experiments
          project with beliefs that this is time to practice, to learn and to
          grow.
        </p>
      </FirstItem>

      <SecondItem>
        <p>
          Co-experiments is an experiment of expressions in the new-normal world
          through design.
        </p>
        <br />
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
