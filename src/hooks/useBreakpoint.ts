import { useState, useEffect, useCallback } from 'react';
import { throttle } from 'lodash';

type Size = 'xs' | 'sm' | 'md' | 'lg';

const getDeviceConfig = (width: number): Size => {
  if (width < 320) {
    return 'xs';
  } else if (width >= 320 && width < 720) {
    return 'sm';
  } else if (width >= 720 && width < 1024) {
    return 'md';
  } else {
    return 'lg';
  }
};

const useBreakpoint = () => {
  const [breakpoint, setBrkPnt] = useState(() =>
    getDeviceConfig(window.innerWidth)
  );

  useEffect(() => {
    const calcInnerWidth = throttle(function () {
      setBrkPnt(getDeviceConfig(window.innerWidth));
    }, 200);
    window.addEventListener('resize', calcInnerWidth);
    return () => window.removeEventListener('resize', calcInnerWidth);
  }, []);

  const isMatched = useCallback(
    (x: Size) => {
      return breakpoint === x;
    },
    [breakpoint]
  );

  return { breakpoint, isMatched };
};

export default useBreakpoint;
