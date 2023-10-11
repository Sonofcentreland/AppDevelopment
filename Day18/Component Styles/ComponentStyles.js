import { useEffect, useState } from 'react';

const CommonScreenSizes = ({ size }) => {

  let [width, height] = size ? size.split(':').map(Number) : [100, 100];

  const [frameWidth, setFrameWidth] = useState();
  const [frameHeight, setFrameHeight] = useState();

  const updateDimensions = () => {
          if(window.innerWidth<576){
               setFrameWidth(window.innerWidth);
               setFrameHeight(window.innerHeight);
          }
          else if(window.innerWidth<width){
               setFrameWidth(576);
               setFrameHeight(width);
          }
          else{
               setFrameWidth(width);
               setFrameHeight(height);
          }
     };

  useEffect(() => {
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  const BoxStyle = {
     width: `${frameWidth}px`,
     height: `${frameHeight}px`,
  }

  return {BoxStyle};
};

export default CommonScreenSizes;
