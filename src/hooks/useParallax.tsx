import React from 'react';

const useParallax = (speed: number = 1) => {
  const [offset, setOffset] = React.useState(0);

  const transformOffset = (offset * -1) / 30;

  const parallaxStyles = {
    transform: `translate3d(0px, ${transformOffset * speed}%, 0px)`,
  };

  React.useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };

    return () => {
      window.onscroll = null;
    };
  }, []);

  return {
    parallaxStyles,
  };
};

export { useParallax };
