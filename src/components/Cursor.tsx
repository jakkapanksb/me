import React from 'react';
import styled, { css } from 'styled-components';
import { useLocation } from 'react-router-dom';

const Cursor = styled.div<{ isCircle: boolean }>`
  position: absolute;
  pointer-events: none;
  z-index: 9999;

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

  const isCircle = pathname !== '/';

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

  return showCursor ? (
    <Cursor
      isCircle={isCircle}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      {isCircle ? null : 'Shit we have been through'}
    </Cursor>
  ) : null;
};

export default CursorParent;
