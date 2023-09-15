
const widthGreaterThanHeight = window.innerWidth > window.innerHeight;
const widthGreaterThan500 = window.innerWidth > window.innerHeight;
const widthGreaterThan = window.innerWidth > window.innerHeight;

const containerStyle = {
  width: widthGreaterThanHeight ? '80vw' : '50vw',
  height: widthGreaterThanHeight ? '50vh' : '80vh',
};

const containerStyle2 = {
  width: '70vw',
  height: '70vh',
  backgroundColor: 'lightblue',
};

export { containerStyle, containerStyle2 };
