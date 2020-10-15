import React from 'react';
import styled, { css } from 'styled-components';
import { useLocation } from 'react-router-dom';
import { isMobile } from 'react-device-detect';

const Cursor = styled.div<{ isCircle: boolean; isAbout: boolean }>`
  position: ${(props) => (props.isAbout ? 'fixed' : 'absolute')};
  pointer-events: none;
  z-index: 9999;
  /* height: 5vh; */

  ${(props: { isCircle: boolean }) =>
    props.isCircle
      ? css`
          width: 40px;
          height: 40px;
          border: 2px solid #fefefe;
          border-radius: 100%;
          background-color: #414141;
          transform: translate(-50%, -50%);
          mix-blend-mode: multiply;
        `
      : css`
          color: white;
          font-size: 2vw;
          white-space: nowrap;
        `}
`;

const CursorParent = ({ showCursor }: { showCursor: boolean }) => {
  const { pathname } = useLocation();
  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  const cursorRef = React.useRef<HTMLDivElement>(null);

  const isCircle = pathname !== '/';
  const isAbout = pathname === '/whoweare';

  const offsetX = (cursorRef?.current?.clientWidth ?? 0) / 2;
  const offsetY = (cursorRef?.current?.clientHeight ?? 0) / 2;

  React.useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.pageX, y: e.pageY });
    };
    const addEventListeners = () => {
      document.addEventListener('mousemove', onMouseMove);
    };

    const removeEventListeners = () => {
      document.removeEventListener('mousemove', onMouseMove);
    };
    addEventListeners();
    return () => removeEventListeners();
  }, []);

  return showCursor && !isMobile ? (
    <Cursor
      isCircle={isCircle}
      isAbout={isAbout}
      style={{
        left: `${isCircle ? position.x : position.x - offsetX}px`,
        top: `${isCircle ? position.y : position.y - offsetY}px`,
      }}
      ref={cursorRef}
    >
      {isCircle ? null : 'Shit we have been through'}
    </Cursor>
  ) : null;
};

export default CursorParent;
