import React from 'react';
import styled from 'styled-components';
import { createImage, createHoveredImage } from 'utils/imageUtil';
import { useParallax } from 'hooks/useParallax';
// import { moveSlowly } from './Disconnected';

const Container = styled.div`
  position: relative;
  p {
    margin-block-start: 0;
    margin-block-end: 0;
  }

  .title {
    text-align: left;
    left: 30vw;
    top: 0;
    z-index: 2;
  }

  .label {
    margin-top: 16vw;
    /* width: 600px; */
    @media only screen and (max-width: 600px) {
      width: 100%;
      font-size: 1em;
      margin-top: 15vw;
    }
  }

  .flex-item-2 > .image-box > .first-right {
    margin-top: 2.5vw;
  }

  .flex-item-1 > img,
  .flex-item-2 > img,
  .flex-item-1 > .image-box,
  .flex-item-2 > .image-box {
    max-width: 100%;
    width: 90%;
  }

  .flex-item-1 > img.vertical,
  .flex-item-2 > img.vertical,
  .flex-item-1 > .image-box.vertical,
  .flex-item-2 > .image-box.vertical {
    max-width: 100%;
    width: 70%;
  }

  .image-box > img {
    width: 100%;
  }

  .last-left-image {
    @media only screen and (min-width: 600px) {
      margin-top: 25vw;
    }
  }

  video {
    @media only screen and (min-width: 600px) {
      margin-top: 30vw;
    }
  }

  .image-5 {
    @media only screen and (min-width: 600px) {
      margin-top: 30vw;
    }
  }

  .image-6 {
    @media only screen and (min-width: 600px) {
      margin-top: 20vw;
    }
  }

  .flex-item-2 {
    @media only screen and (max-width: 600px) {
      margin-top: 10vw;
    }
  }
`;

const Anxious = () => {
  const titleRef = React.useRef<HTMLParagraphElement>(null);
  const labelRef = React.useRef<HTMLParagraphElement>(null);
  const { parallaxStyles } = useParallax(3);

  return (
    <Container id='container' className='flex-container'>
      <div className='flex-item-1'>
        <p className='title' style={parallaxStyles} ref={titleRef}>
          Anxiety
        </p>
        <p className='label image-2' style={parallaxStyles} ref={labelRef}>
          &emsp;&emsp;&emsp;&emsp;&emsp;Uncertainty is all around us, never more
          so than today. It leaves us feeling anxious, stressed, and powerless
          whether when you are out for grocery shopping or thinking over the
          direction of your life. Anxiety can drain us emotionally and trap us
          in a spiral of endless '“what-ifs”.
          <br />
          &emsp;&emsp;&emsp;&emsp;&emsp;Anxiety flows inside our mind
          unconsciously. In this experiment, we use different types of liquid as
          a medium to express the feeling. The movement of the ink created a
          sense of fear, spreading, and haunting like coronavirus.
        </p>

        {createHoveredImage({
          src:
            'https://www.dropbox.com/s/pevtu8xjils69hq/Anxious%2002.jpg?raw=1',
          hoveredSrc:
            'https://www.dropbox.com/s/sceu6c3ynatbcnx/Anxious%2002_hover.jpg?raw=1',
          position: 'center',
          alt: 'Anxious-02',
          direction: 'vertical',
        })}
        {createImage({
          src:
            'https://www.dropbox.com/s/02tdqgwd1a6862l/Anxious%2004.jpg?raw=1',
          position: 'left',
          alt: 'Anxious-04',
          direction: 'horizontal',
        })}
        {createImage({
          position: 'right',
          src:
            'https://www.dropbox.com/s/o0aqw8mjexfsuzb/Anxious%2006.png?raw=1',
          alt: 'Anxious-06',
          direction: 'horizontal',
        })}
        {createImage({
          className: 'last-left-image',
          position: 'center',
          src:
            'https://www.dropbox.com/s/rddohu4y2kvmckk/Anxious%2008.png?raw=1',
          alt: 'Anxious-08',
          direction: 'horizontal',
        })}
      </div>
      <div className='flex-item-2'>
        {createHoveredImage({
          src:
            'https://www.dropbox.com/s/y3cp4d1gvf1es33/Anxious%2001.jpg?raw=1',
          hoveredSrc:
            'https://www.dropbox.com/s/n3fws82xsw7a5fe/Anxious%2001_hover.jpg?raw=1',
          position: 'center',
          alt: 'Anxious-01',
          direction: 'vertical',
          className: 'first-right',
        })}

        <video
          autoPlay
          loop
          muted
          playsInline
          className='images image-1'
          width={800}
          height={600}
        >
          <source
            src='https://www.dropbox.com/s/i2vfldzru1z3o8z/Anxious%2003.mp4?raw=1'
            type='video/mp4'
          />
        </video>
        {createHoveredImage({
          src:
            'https://www.dropbox.com/s/2lpbwaei7psb695/Anxious%2005.jpg?raw=1',
          hoveredSrc:
            'https://www.dropbox.com/s/82ja3ee8oo8cdrm/Anxious%2005_hover.jpg?raw=1',
          position: 'center',
          alt: 'Anxious-05',
          direction: 'vertical',
          className: 'image-5',
        })}
        {createImage({
          src:
            'https://www.dropbox.com/s/ig48oj35r83tvn1/Anxious%2007.png?raw=1',
          alt: 'Anxious-07',
          position: 'right',
          direction: 'horizontal',
          className: 'image-6',
        })}
      </div>
    </Container>
  );
};

export default Anxious;
