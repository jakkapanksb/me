import React from 'react';
import styled from 'styled-components';
import { useTransition, animated } from 'react-spring';
import withNav from 'hoc/withNav';
import HomeContent from 'components/HomeContent';
import { MainContainer } from 'App';

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
  font-size: 2vw;

  p {
    margin-block-start: 0;
  }
`;

const diffDays = Math.ceil(
  (new Date().getTime() - new Date('03/09/2020').getTime()) / (1000 * 3600 * 24)
);

const Home = ({
  setShowCursor,
}: {
  setShowCursor: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [step, setStep] = React.useState(0);
  const transitions = useTransition(step, null, {
    from: { position: 'absolute', opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  React.useEffect(() => {
    if (step === 0) setShowCursor(false);
    else if (step === 2) setShowCursor(true);
    if (step < 2) {
      const increment = () => {
        setStep((step) => {
          return step + 1;
        });
      };
      const interval = setInterval(increment, 3000);
      return () => {
        clearInterval(interval);
      };
    }
  }, [step, setShowCursor]);

  return (
    <>
      {transitions.map(({ item, props }) =>
        item === 0 ? (
          <Container>
            <animated.p style={props}>
              We've been in lockdown for {diffDays} days
            </animated.p>
          </Container>
        ) : item === 1 ? (
          <Container>
            <animated.p style={props}>How are you hanging in there?</animated.p>
          </Container>
        ) : (
          <MainContainer>
            <NavContent />
          </MainContainer>
        )
      )}
    </>
  );
};

export default Home;
