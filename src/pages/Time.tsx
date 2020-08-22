import React from 'react';
import styled from 'styled-components';
import { createImage, createHoveredImage } from 'utils/imageUtil';
// import { moveSlowly } from './Disconnected';

const Container = styled.div`
  position: relative;

  .title {
    /* left: 4vh; */
    left: 2vw;
    margin-block-start: 0;
    margin-block-end: 0;
    text-align: center;
    z-index: 2;
    /* font-size: 16vh; */
    font-size: 8vw;
    top: 0;
  }

  .label {
    /* margin-top: 40vh; */
    margin-top: 20vw;
    width: 70%;
    /* width: 600px; */
    /* width: 65vh; */
  }

  .first-left-image {
    /* margin-top: 14vh; */
    margin-top: 7vw;
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
`;

const Time = () => {
  const titleRef = React.useRef<HTMLParagraphElement>(null);
  const labelRef = React.useRef<HTMLParagraphElement>(null);

  // React.useEffect(() => {
  //   function handleWheel(e: WheelEvent) {
  //     if (labelRef.current) moveSlowly(e.deltaY, 0, labelRef.current);
  //     if (titleRef.current) moveSlowly(e.deltaY, 0, titleRef.current);
  //   }
  //   const container = document.getElementById('container');
  //   if (container) {
  //     container.addEventListener('wheel', handleWheel);
  //     return () => {
  //       container.removeEventListener('wheel', handleWheel);
  //     };
  //   }
  // }, []);

  return (
    <Container id='container' className='flex-container'>
      <div className='flex-item-1'>
        <p id='title' className='title' ref={titleRef}>
          Lost track of time
        </p>
        <div className='image-box image-2 vertical'>
          <img
            className='images first-left-image'
            src='https://www.dropbox.com/s/f4rnkswrwhlwpo0/Time%2001.jpg?dl=1'
            alt='Time-01'
            width={600}
            height={800}
          />
          <img
            className='images hover first-left-image'
            src='https://www.dropbox.com/s/3yu25vbiue2qhqq/Time%2001_hover.jpg?dl=1'
            alt='Time-01'
            width={600}
            height={800}
          />
        </div>
        <div
          className='image-box image-1 vertical'
          style={{ marginTop: '10vw' }}
        >
          <img
            className='images'
            src='https://www.dropbox.com/s/uwx6wlrg46pz9o9/Time%2003.jpg?dl=1'
            alt='Time-03'
            width={600}
            height={800}
          />
          <img
            className='images hover'
            src='https://www.dropbox.com/s/2yqxc2k8rspcbk0/Time%2003_hover.jpg?dl=1'
            alt='Time-03'
            width={600}
            height={800}
          />
        </div>
        {createImage({
          position: 'right',
          src: 'https://www.dropbox.com/s/l5unjfkwpcy2l4c/Time%2005.jpg?dl=1',
          alt: 'Time-05',
          direction: 'horizontal',
          style: { marginTop: '10vw', position: 'relative' },
        })}
        {createImage({
          className: 'vertical',
          position: 'left',
          src: 'https://www.dropbox.com/s/ml944gj4j70bn3g/Time%2007.jpg?dl=1',
          alt: 'Time-07',
        })}
      </div>
      <div className='flex-item-2'>
        <p id='label' className='label' ref={labelRef}>
          &emsp;&emsp;&emsp;&emsp;&emsp;If you ask yourself ‘What day is it’
          more often these days, you are not alone. Being stuck at home during
          the quarantine has distorted our sense of time. And when outdoor
          activities become more challenging, our days at home tend to be the
          same.
          <br />
          &emsp;&emsp;&emsp;&emsp;&emsp;In this experiment, it shows that time
          started to drift aimlessly. We are sometimes confused, lost in the
          dimension of time and just need to bring ourselves back to the
          present.
        </p>
        <video
          autoPlay
          loop
          muted
          className='images image-1'
          width={800}
          height={600}
          style={{ marginTop: '14vw' }}
        >
          <source
            src='https://www.dropbox.com/s/ufgh7s60fl2ivlw/Time%2002.mp4?dl=1'
            type='video/mp4'
          />
        </video>
        <img
          className='images image-3 vertical'
          src='https://www.dropbox.com/s/i6elpc554esb5h0/Time%2004.jpg?dl=1'
          alt='Time-04'
          width={600}
          height={800}
        />
        {createHoveredImage({
          src: 'https://www.dropbox.com/s/pkz92tqmulefkmz/Time%2006.jpg?dl=1',
          hoveredSrc:
            'https://www.dropbox.com/s/od604gv0g470ak4/Time%2006_hover.jpg?dl=1',
          position: 'left',
          alt: 'Time-06',
          direction: 'horizontal',
          style: { marginTop: '30vw' },
        })}
        {createImage({
          src: 'https://www.dropbox.com/s/ou5d69cz5rh7qsc/Time%2008.png?dl=1',
          alt: 'Time-08',
          position: 'right',
          direction: 'horizontal',
          style: { marginTop: '15vw', position: 'relative' },
        })}
      </div>
    </Container>
  );
};

export { Time };
