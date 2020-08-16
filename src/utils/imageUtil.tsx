import React from 'react';

type Position = 'left' | 'center' | 'right';
type Direction = 'vertical' | 'horizontal';

interface createImageProps {
  className?: string;
  alt: string;
  src: string;
  position?: Position;
  direction?: Direction;
  style?: React.CSSProperties;
}

interface createHoveredImageProps extends createImageProps {
  hoveredSrc: string;
  hoveredAlt?: string;
}

const createImagePositionClassName = (position: Position): string => {
  return position === 'left'
    ? 'image-1'
    : position === 'center'
    ? 'image-2'
    : 'image-3';
};

export const createImage = ({
  className,
  src,
  alt,
  position = 'center',
  direction = 'vertical',
  style,
}: createImageProps): JSX.Element => {
  let posClassName = createImagePositionClassName(position);
  return (
    <img
      className={`images ${posClassName}${className ? ` ${className}` : ''}`}
      src={src}
      alt={alt}
      width={direction === 'vertical' ? 600 : 800}
      height={direction === 'vertical' ? 800 : 600}
      style={style}
    />
  );
};

export const createHoveredImage = ({
  className,
  src,
  alt,
  hoveredSrc,
  position = 'center',
  direction = 'vertical',
  style,
}: createHoveredImageProps): JSX.Element => {
  return (
    <div className={`image-box ${createImagePositionClassName(position)}`}>
      <img
        className={`images${className ? ` ${className}` : ''}`}
        src={src}
        alt={alt}
        width={direction === 'vertical' ? 600 : 800}
        height={direction === 'vertical' ? 800 : 600}
        style={style}
      />
      <img
        className={`images hover${className ? ` ${className}` : ''}`}
        src={hoveredSrc}
        alt={alt}
        width={direction === 'vertical' ? 600 : 800}
        height={direction === 'vertical' ? 800 : 600}
        style={style}
      />
    </div>
  );
};
