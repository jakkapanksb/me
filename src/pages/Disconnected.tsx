import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  .title {
    top: 7.5vw;
  }

  .label {
    /* font-size: 2.2vh; */
    /* font-size: 1.1vw; */
    width: 70%;
  }

  .first-left {
    margin-top: 53vw;
  }

  .first-right-image {
    margin-top: 2.5vw;
  }

  .second-right-image {
    margin-top: 15vw;
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
  if (deltaY > 0) element.style.top = `${parseInt(element.style.top) + 2}vh`;
  else element.style.top = `${parseInt(element.style.top) - 2}vh`;
}

const Disconnected = () => {
  // React.useEffect(() => {
  //   function handleWheel(e: WheelEvent) {
  //     const title = document.getElementById('title');
  //     const label = document.getElementById('label');
  //     if (label) moveSlowly(e.deltaY, 0, label);
  //     if (title) moveSlowly(e.deltaY, 15, title);
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
        <p id='title' className='title'>
          Isolation
        </p>
        <img
          className='images image-2 first-left vertical'
          src='https://www.dropbox.com/s/kj931zhnfyvcnad/Disconnected%2002.jpg?dl=1'
          alt='Disconnected-02'
        />
        <video
          autoPlay
          loop
          className='images image-1'
          width={800}
          height={600}
          style={{ marginTop: '28vw' }}
        >
          <source
            src='https://www.dropbox.com/s/nmwost8czpsc4gb/Disconnected%2004.mp4?dl=1'
            type='video/mp4'
          />
        </video>
        <div
          className='image-box image-2 vertical'
          style={{ marginTop: '15vw' }}
        >
          <img
            className='images'
            src='https://www.dropbox.com/s/b6q8hlvo548r4y8/Disconnected%2006.png?dl=1'
            alt='Disconnected-06'
          />
          <img
            className='images hover'
            src='https://www.dropbox.com/s/u9dlkh6q7iu77fo/Disconnected%2006_hover.png?dl=1'
            alt='Disconnected-06'
            title='Disconnected-06'
          />
        </div>
      </div>
      <div className='flex-item-2'>
        <img
          // className='images image-1 first-right-image'
          className='first-right-image image-1'
          src='https://www.dropbox.com/s/hlvvtza3894b9z1/Disconnected%2001.jpg?dl=1'
          alt='Disconnected-01'
          // width={800}
          // height={600}
        />
        <p id='label' className='label'>
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
            src='https://www.dropbox.com/s/qtcnrxf1ix9p5r6/Disconnected%2003_hover.jpg?dl=1'
            alt='Disconnceted-03'
            width={800}
            height={600}
          />
          <img
            className='images'
            src='https://www.dropbox.com/s/iffl5v4bhng3vzs/Disconnected%2003.png?dl=1'
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
            src='https://www.dropbox.com/s/kiaucokh13nnhom/Disconnected%2005.jpg?dl=1'
            alt='Disconnected-05'
          />
          <img
            className='images hover'
            src='https://www.dropbox.com/s/lunv6jrrqxyd09i/Disconnected%2005_hover.jpg?dl=1'
            alt='Disconnected-05'
          />
        </div>
        <div
          className='image-box image-1 vertical'
          style={{ marginTop: '2.5vw' }}
        >
          <img
            className='images'
            src='https://www.dropbox.com/s/f4ud04587hro140/Disconnected%2007.png?dl=1'
            alt='Disconnected-07'
          />
          <img
            className='images hover'
            src='https://www.dropbox.com/s/zxn0nr7k06ceyqj/Disconnected%2007_hover.jpg?dl=1'
            alt='Disconnected-07'
          />
        </div>
      </div>
    </Container>
  );
};

export { Disconnected };
