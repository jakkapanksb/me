import React from 'react';
import { throttle } from 'lodash';

const useParallax = (speed: number = 1) => {
  const [offset, setOffset] = React.useState(0);
  const [width, setWidth] = React.useState(window.innerWidth);

  const transformOffset = (offset * -1) / 30;

  const parallaxStyles = {
    transform:
      width > 600
        ? `translate3d(0px, ${transformOffset * speed}%, 0px)`
        : undefined,
  };

  const handleViewportChange = React.useCallback(() => {
    throttle(() => {
      setWidth(window.innerWidth);
    }, 250);
  }, [setWidth]);

  React.useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };

    return () => {
      window.onscroll = null;
    };
  }, []);

  React.useEffect(() => {
    window.addEventListener('resize', handleViewportChange);
    return () => {
      window.removeEventListener('resize', handleViewportChange);
    };
  }, [handleViewportChange]);

  return {
    parallaxStyles,
  };
};

export { useParallax };
