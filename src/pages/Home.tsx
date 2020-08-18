import React from 'react';
import styled from 'styled-components';
import { useTransition, animated } from 'react-spring';
import withNav from 'hoc/withNav';
import HomeContent from 'components/HomeContent';
import { MainContainer, State } from 'App';

const NavContent = withNav(HomeContent);

const Container = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-color: #d0ccc9;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4vh;
  text-align: center;

  p {
    margin-block-start: 0;
  }

  .counter {
    margin-top: 20vh;
  }
`;

const diffDays = Math.ceil(
  (new Date().getTime() - new Date('03/09/2020').getTime()) / (1000 * 3600 * 24)
);

const Home = ({
  setShowCursor,
  state: { step },
  stepIncrement,
}: {
  setShowCursor: React.Dispatch<React.SetStateAction<boolean>>;
  state: State;
  stepIncrement: () => void;
}) => {
  // const [step, setStep] = React.useState(
  //   localStorage.getItem('step')
  //     ? parseInt(sessionStorage.getItem('step') ?? '0')
  //     : 0
  // );
  const [count, setCount] = React.useState(0);
  const transitions = useTransition(step, null, {
    from: { position: 'absolute', opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  const counter = count < 100 ? <p className='counter'>{count}</p> : null;

  React.useEffect(() => {
    if (step === 0) setShowCursor(false);
    else if (step === 2) {
      setShowCursor(true);
      // sessionStorage.setItem('step', '2');
    }
    if (step < 2) {
      const increment = () => {
        stepIncrement();
      };
      const interval = setInterval(increment, 3000);
      return () => {
        clearInterval(interval);
      };
    }
  }, [step, stepIncrement, setShowCursor]);

  React.useEffect(() => {
    const id = setInterval(() => {
      setCount((count) => (count < 100 ? count + 1 : count));
    }, 60);
    return () => {
      clearInterval(id);
    };
  }, [setCount]);

  return (
    <>
      {transitions.map(({ item, props, key }) =>
        item === 0 ? (
          <Container key={key}>
            <animated.p style={props}>
              We've been in lockdown for {diffDays} days
            </animated.p>
            {counter}
          </Container>
        ) : item === 1 ? (
          <Container key={key}>
            <animated.p style={props}>How are you hanging in there?</animated.p>
            {counter}
          </Container>
        ) : (
          <MainContainer key={key}>
            <NavContent />
          </MainContainer>
        )
      )}
    </>
  );
};

export default Home;
