// Generating a random color
let changeColorInterval;

const randomColor = function () {
  const hexVal = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hexVal[Math.floor(Math.random() * 16)];
  }
  return color;
};

// setInterval()
const startChangingColor = function () {
  function changeColor() {
    document.body.style.backgroundColor = randomColor();
  }
  if (!changeColorInterval) {
    changeColorInterval = setInterval(changeColor, 1000);
  }
  console.log('Color generation has started');
};

document.querySelector('#start').addEventListener('click', startChangingColor);

//clearInterval()
const stopChangingColor = function () {
  clearInterval(changeColorInterval);
  changeColorInterval = null;
  console.log('Color generation has stopped');
};

document.querySelector('#stop').addEventListener('click', stopChangingColor);