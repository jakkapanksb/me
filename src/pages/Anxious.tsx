import React from 'react';
import styled from 'styled-components';
import { createImage, createHoveredImage } from 'utils/imageUtil';
// import { moveSlowly } from './Disconnected';

const Container = styled.div`
  position: relative;
  p {
    margin-block-start: 0;
    margin-block-end: 0;
  }

  .title {
    text-align: left;
    left: 60vh;
    top: 0vh;
    z-index: 2;
  }

  .label {
    margin-top: 33vh;
    /* width: 600px; */
    width: 65vh;
    font-size: 2vh;
  }

  .flex-item-2 > .image-box > .first-right {
    margin-top: 5vh;
  }
`;

const Anxious = () => {
  const titleRef = React.useRef<HTMLParagraphElement>(null);
  const labelRef = React.useRef<HTMLParagraphElement>(null);

  // React.useEffect(() => {
  //   function handleWheel(e: WheelEvent) {
  //     if (labelRef.current)
  //       moveSlowly(e.deltaY, 0, labelRef.current, {
  //         minRange: 0,
  //         maxRange: 20,
  //       });
  //     if (titleRef.current)
  //       moveSlowly(e.deltaY, 40, titleRef.current, {
  //         minRange: 0,
  //         maxRange: 20,
  //       });
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
        <p className='title' ref={titleRef}>
          Anxiety
        </p>
        <p className='label image-2' ref={labelRef}>
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
            'https://www.dropbox.com/s/pevtu8xjils69hq/Anxious%2002.jpg?dl=1',
          hoveredSrc:
            'https://www.dropbox.com/s/sceu6c3ynatbcnx/Anxious%2002_hover.jpg?dl=1',
          position: 'center',
          alt: 'Anxious-02',
          direction: 'vertical',
        })}
        {createImage({
          src:
            'https://www.dropbox.com/s/02tdqgwd1a6862l/Anxious%2004.jpg?dl=1',
          position: 'left',
          alt: 'Anxious-04',
          direction: 'horizontal',
        })}
        {createImage({
          position: 'right',
          src:
            'https://www.dropbox.com/s/o0aqw8mjexfsuzb/Anxious%2006.png?dl=1',
          alt: 'Anxious-06',
          direction: 'horizontal',
        })}
        {createImage({
          position: 'center',
          src:
            'https://www.dropbox.com/s/rddohu4y2kvmckk/Anxious%2008.png?dl=1',
          alt: 'Anxious-08',
          direction: 'horizontal',
          style: { marginTop: '50vh' },
        })}
      </div>
      <div className='flex-item-2'>
        {createHoveredImage({
          src:
            'https://www.dropbox.com/s/y3cp4d1gvf1es33/Anxious%2001.jpg?dl=1',
          hoveredSrc:
            'https://www.dropbox.com/s/n3fws82xsw7a5fe/Anxious%2001_hover.jpg?dl=1',
          position: 'center',
          alt: 'Anxious-01',
          direction: 'vertical',
          className: 'first-right',
        })}

        <video
          autoPlay
          loop
          muted
          className='images image-1'
          width={800}
          height={600}
          style={{ marginTop: '60vh' }}
        >
          <source
            src='https://www.dropbox.com/s/i2vfldzru1z3o8z/Anxious%2003.mp4?dl=1'
            type='video/mp4'
          />
        </video>
        {createHoveredImage({
          src:
            'https://www.dropbox.com/s/2lpbwaei7psb695/Anxious%2005.jpg?dl=1',
          hoveredSrc:
            'https://www.dropbox.com/s/82ja3ee8oo8cdrm/Anxious%2005_hover.jpg?dl=1',
          position: 'center',
          alt: 'Anxious-05',
          direction: 'vertical',
          style: { marginTop: '60vh' },
        })}
        {createImage({
          src:
            'https://www.dropbox.com/s/ig48oj35r83tvn1/Anxious%2007.png?dl=1',
          alt: 'Anxious-07',
          position: 'right',
          direction: 'horizontal',
          style: { marginTop: '40vh' },
        })}
      </div>
    </Container>
  );
};

export default Anxious;
