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
  font-size: 3.8vh;
  text-align: center;

  p {
    margin-block-start: 0;
  }
`;

const startCountingDate = '03/09/2020';

const diffDays = Math.ceil(
  (new Date().getTime() - new Date(startCountingDate).getTime()) /
    (1000 * 3600 * 24)
);

const interval = ((150 / diffDays) * 1000) / 60;

const Home = ({
  setShowCursor,
  state: { step },
  stepIncrement,
}: {
  setShowCursor: React.Dispatch<React.SetStateAction<boolean>>;
  state: State;
  stepIncrement: () => void;
}) => {
  const [count, setCount] = React.useState(0);
  const transitions = useTransition(step, null, {
    from: { position: 'absolute', opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  React.useEffect(() => {
    if (step === 0) setShowCursor(false);
    else if (step === 2) {
      setShowCursor(true);
    }
    if (step < 2) {
      const increment = () => {
        stepIncrement();
      };
      const intervalId = setInterval(increment, 3000);
      return () => {
        clearInterval(intervalId);
      };
    }
  }, [step, stepIncrement, setShowCursor]);

  React.useEffect(() => {
    const id = setInterval(() => {
      setCount((count) => (count < diffDays ? count + 1 : count));
    }, interval);
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
              We've been in lockdown for {count} days
            </animated.p>
          </Container>
        ) : item === 1 ? (
          <Container key={key}>
            <animated.p style={props}>How are you hanging in there?</animated.p>
          </Container>
        ) : (
          <MainContainer key={key}>
            <NavContent setShowCursor={setShowCursor} />
          </MainContainer>
        )
      )}
    </>
  );
};

export default Home;
