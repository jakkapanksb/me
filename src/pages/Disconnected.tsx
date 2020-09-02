import React from 'react';
import styled from 'styled-components';
import { useParallax } from 'hooks/useParallax';

const path = '/images/Isolation';

const sources = {
  disconnectedOne: path + '/Disconnected 01.jpg',
  disconnectedTwo: path + '/Disconnected 02.jpg',
  disconnectedThree: path + '/Disconnected 03.png',
  disconnectedThreeHover: path + '/Disconnected 03_hover.jpg',
  disconnectedFour: path + '/Disconnected 04.mp4',
  disconnectedFive: path + '/Disconnected 05.jpg',
  disconnectedFiveHover: path + '/Disconnected 05-hover.jpg',
  disconnectedSix: path + '/Disconnected 06.png',
  disconnectedSeven: path + '/Disconnected 07.png',
  disconnectedSevenHover: path + '/Disconnected 07_hover.jpg',
};

const Container = styled.div`
  position: relative;
  .title {
    top: 7.5vw;
  }

  .label {
    /* font-size: 2.2vh; */
    /* font-size: 1.1vw; */
    font-size: 1vw;
    width: 70%;
    @media only screen and (max-width: 600px) {
      width: 100%;
      font-size: 1em;
      margin-top: 10vw;
    }
  }

  .first-left {
    @media only screen and (min-width: 600px) {
      margin-top: 53vw;
    }
  }

  .first-right-image {
    @media only screen and (min-width: 600px) {
      margin-top: 2.5vw;
    }
  }

  .second-right-image {
    @media only screen and (min-width: 600px) {
      margin-top: 15vw;
    }
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

  .video {
    @media only screen and (min-width: 600px) {
      margin-top: 28vw;
    }
  }

  .last-image {
    @media only screen and (min-width: 600px) {
      margin-top: 15vw;
    }
  }

  .flex-item-2 {
    @media only screen and (max-width: 600px) {
      margin-top: 10vw;
    }
  }
`;

export function moveSlowly(
  deltaY: number,
  offsetTop: number,
  element: HTMLElement,
  range: { maxRange: number; minRange: number } | undefined = {
    minRange: 10,
    maxRange: 10,
  }
) {
  const maxRange = offsetTop + range.maxRange,
    minRange = offsetTop - range.minRange;
  if (element.style.top === '') element.style.top = `${offsetTop}vh`;
  if (
    (parseInt(element.style.top) > maxRange && deltaY > 0) ||
    (parseInt(element.style.top) < minRange && deltaY < 0)
  )
    return;
  if (deltaY > 0) element.style.top = `${parseInt(element.style.top) - 2}vh`;
  else element.style.top = `${parseInt(element.style.top) + 2}vh`;
}

const Disconnected = () => {
  const titleRef = React.useRef(null);
  const { parallaxStyles } = useParallax();

  return (
    <Container id='container' className='flex-container'>
      <div className='flex-item-1'>
        <p id='title' className='title' ref={titleRef} style={parallaxStyles}>
          Isolation
        </p>
        <img
          className='images image-2 first-left vertical'
          // src='https://www.dropbox.com/s/kj931zhnfyvcnad/Disconnected%2002.jpg?dl=1'
          src={sources.disconnectedTwo}
          alt='Disconnected-02'
        />
        <video
          autoPlay
          loop
          className='images image-1 video'
          width={800}
          height={600}
        >
          <source
            // src='https://www.dropbox.com/s/nmwost8czpsc4gb/Disconnected%2004.mp4?dl=1'
            src={sources.disconnectedFour}
            type='video/mp4'
          />
        </video>
        <div className='image-box image-2 vertical last-image'>
          <img
            className='images'
            // src='https://www.dropbox.com/s/b6q8hlvo548r4y8/Disconnected%2006.png?dl=1'
            src={sources.disconnectedSix}
            alt='Disconnected-06'
          />
          <img
            className='images hover'
            // src='https://www.dropbox.com/s/u9dlkh6q7iu77fo/Disconnected%2006_hover.png?dl=1'
            src={sources.disconnectedSix}
            alt='Disconnected-06'
            title='Disconnected-06'
          />
        </div>
      </div>
      <div className='flex-item-2'>
        <img
          // className='images image-1 first-right-image'
          className='first-right-image image-1'
          src={sources.disconnectedOne}
          alt='Disconnected-01'
          // width={800}
          // height={600}
        />
        <p id='label' className='label' style={parallaxStyles}>
          &emsp;&emsp;&emsp;&emsp;&emsp;Many of us are restricted to see our
          loved ones. The feelings of isolation hit us in more places than the
          heart and head. We may feel lonelier even though technology enables us
          to connect with our family and friends regardless of where we are.
          What we truly need are hugs, physical touch, or someone to look at us
          in the eyes.
          <br />
          &emsp;&emsp;&emsp;&emsp;&emsp;Feeling disconnected is the most
          powerful impact to us during this time. In this experiment, we played
          with negative space to show distance, constraint and isolation. And
          nostalgic photography shows just how much we want to see our loved
          ones again.
        </p>
        <div className='image-box image-2 second-right-image'>
          <img
            className='images hover'
            // src='https://www.dropbox.com/s/qtcnrxf1ix9p5r6/Disconnected%2003_hover.jpg?dl=1'
            src={sources.disconnectedThreeHover}
            alt='Disconnceted-03'
            width={800}
            height={600}
          />
          <img
            className='images'
            // src='https://www.dropbox.com/s/iffl5v4bhng3vzs/Disconnected%2003.png?dl=1'
            src={sources.disconnectedThree}
            alt='Disconnected-03'
            width={800}
            height={600}
          />
        </div>
        <div
          className='image-box image-3 vertical'
          style={{ marginTop: '5vw' }}
        >
          <img
            className='images'
            // src='https://www.dropbox.com/s/kiaucokh13nnhom/Disconnected%2005.jpg?dl=1'
            src={sources.disconnectedFive}
            alt='Disconnected-05'
          />
          <img
            className='images hover'
            // src='https://www.dropbox.com/s/lunv6jrrqxyd09i/Disconnected%2005_hover.jpg?dl=1'
            src={sources.disconnectedFiveHover}
            alt='Disconnected-05'
          />
        </div>
        <div
          className='image-box image-1 vertical'
          style={{ marginTop: '2.5vw' }}
        >
          <img
            className='images'
            // src='https://www.dropbox.com/s/f4ud04587hro140/Disconnected%2007.png?dl=1'
            src={sources.disconnectedSeven}
            alt='Disconnected-07'
          />
          <img
            className='images hover'
            // src='https://www.dropbox.com/s/zxn0nr7k06ceyqj/Disconnected%2007_hover.jpg?dl=1'
            src={sources.disconnectedSevenHover}
            alt='Disconnected-07'
          />
        </div>
      </div>
    </Container>
  );
};

export { Disconnected };
