// import { useEffect, useState } from 'react';

// const CommonScreenSizes = ({ ratio, size }) => {
//   let width, height;
  

//   if (size) {
//     [width, height] = ratio.split(':').map(Number);
//   } else if (ratio & size) {
//     aspectRatio = size;
//   }

//   let [widthPercentage, heightPercentage] = aspectPercentage ? aspectPercentage.split(':').map(Number) : [100, 100];

//   const [frameWidth, setFrameWidth] = useState();
//   const [frameHeight, setFrameHeight] = useState();
//   const [calculatedWidth, setCalculatedWidth] = useState(0);
//   const [calculatedHeight, setCalculatedHeight] = useState(0);

//   const updateDimensions = () => {
//     const Screen = [
//       5000, 4500, 4000, 3500, 3000, 2500, 2000,
//       1500, 1000, 500, 400, 300
//     ];

//     for (let i = 0; i < Screen.length; i++) {
//       if (window.innerWidth >= Screen[i]) {
//         setFrameWidth(Screen[i]);
//         break;
//       }
//     }

//     for (let i = 0; i < Screen.length; i++) {
//       if (window.innerHeight >= Screen[i]) {
//         setFrameHeight(Screen[i]);
//         break;
//       }
//     }
//   };

//   useEffect(() => {
//     updateDimensions();
//     window.addEventListener('resize', updateDimensions);
//     return () => {
//       window.removeEventListener('resize', updateDimensions);
//     };
//   }, []);

//   useEffect(() => {
//     if (frameWidth && frameHeight) {
//       calculateSize();
//     } else {
//       setFrameHeight(360);
//       setFrameWidth(360);
//     }
//   }, [frameHeight, frameWidth, aspectRatio, aspectPercentage]);

//   const calculateSize = () => {
//     if(size){
//       let BoxWidth = ( frameWidth > 2*width ) ?  : width;
//       let BoxHeight = 
//       setCalculatedWidth(width);
//       setCalculatedHeight(height);
//     }
//   };

//   const BoxSize = {
//     width: `${calculatedWidth}px`,
//     height: `${calculatedHeight}px`,
//   };

//   return { BoxSize };
// };

// export default CommonScreenSizes;
