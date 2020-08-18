import React from 'react';
import './About.css';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  /* height: 98.2vh; */
  /* width: 210%; */
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
  flex: 0 0 600px;
`;

const SecondItem = styled(FlexItem)`
  flex: 0 0 600px;
`;

const NormalItem = styled(FlexItem)`
  flex: 0 0 400px;
  margin: 0;
  align-self: ${(props: { name: string | undefined }) =>
    props.name === 'blu' ? 'flex-end' : 'flex-start'};
  display: flex;

  img.blu:hover {
    cursor: url(https://www.dropbox.com/s/dzzg5urlxj6pxek/blu_hover128x128.jpg?dl=1),
      none;
  }

  img.eve:hover {
    cursor: url(https://www.dropbox.com/s/n9i6g0yy53scseq/eve_hover128x128.jpg?dl=1),
      none;
  }
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

const About = () => {
  React.useEffect(() => {
    const container = document.getElementsByTagName('html')[0];
    // const container = document.getElementById('main-layout');
    if (container) {
      const handleWheel = (e: WheelEvent) => {
        if (e.deltaY > 0) container.scrollLeft += 100;
        else container.scrollLeft -= 100;
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
        style={{ position: 'relative', top: '8vh', right: '8vh' }}
      >
        <img
          className='blu'
          src='https://www.dropbox.com/s/dx23fdw7u3as95z/blu_main.jpg?dl=1'
          alt='Blu'
          width={600}
          height={'auto'}
          style={{ alignSelf: 'flex-end' }}
        />
        <BluName>Blu</BluName>
      </NormalItem>

      <NormalItem
        name='eve'
        style={{
          marginLeft: '42vh',
          position: 'relative',
          bottom: '14vh',
          marginRight: '32vh',
        }}
      >
        <img
          className='eve'
          src='https://www.dropbox.com/s/3iyfgfaylynnp8f/eve_main.jpg?dl=1'
          alt='Eve'
          width={600}
          height={'auto'}
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
          In the quarantine world, they came together to create Co-experiment
          project with beliefs that this is time to practice, to learn and to
          grow.
        </p>
      </FirstItem>

      <SecondItem>
        <p>
          Co-experiment is an experiment of expressions in the new-normal world
          through design.
        </p>
        <br />
        <br />
        <p>
          Contact <br />
          blueve.design@gmail.com <br />
          Instagram @co.experiments
        </p>
      </SecondItem>
    </Container>
  );
};

export default About;