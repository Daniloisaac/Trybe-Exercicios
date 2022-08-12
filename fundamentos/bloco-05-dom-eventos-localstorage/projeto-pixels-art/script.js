function randomColor() {
  const r = Math.random() * 255;
  const g = Math.random() * 255;
  const b = Math.random() * 255;

  return `rgb(${r}, ${g}, ${b})`;
}

const cor = document.getElementsByClassName('color');

for (let i = 0; i < cor.length; i += 1) {
  if (cor[i] === cor[0]) {
    cor[i].style.background = 'black';
  } else if (cor[i] === cor[1]) {
    cor[i].style.background = 'white';
  } else if (cor[i] === cor[2]) {
    cor[i].style.background = randomColor();
  } else if (cor[i] === cor[3]) {
    cor[i].style.background = randomColor();
  } else {
    cor[i].style.background = randomColor();
  }
}
const headerTitle = document.querySelector('#title');
headerTitle.style.background  = randomColor();

let pixelBoard;

let Rows = 5;
let Columns = 5;

function borderPixel() {
  const boardContainer = document.querySelector('#board-container');
  pixelBoard = document.createElement('div');
  pixelBoard.id = 'pixel-board';
  boardContainer.appendChild(pixelBoard);
}

borderPixel();

function selecionadorCores(event) {
  const corSelecionada = document.querySelector('.selected');
  corSelecionada.classList.remove('selected');
  event.target.classList.add('selected');
}

cor[0].addEventListener('click', selecionadorCores);
cor[1].addEventListener('click', selecionadorCores);
cor[2].addEventListener('click', selecionadorCores);
cor[3].addEventListener('click', selecionadorCores);
cor[4].addEventListener('click', selecionadorCores);



function createPixel() {
  for (let i = 0; i < Rows; i += 1) {
    const newRow = document.createElement('div');
    newRow.className = 'row';
    pixelBoard.appendChild(newRow);
    for (let j = 0; j < Columns; j += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel coll';
      pixel.style.backgroundColor = 'white';
      newRow.appendChild(pixel);
    }
  }
}
createPixel();

function setDayColor() {
  const selected = document.getElementsByClassName('selected');
  const palette = document.querySelector('#pixel-board');
  palette.addEventListener('click', (event) => {
    const eventColor = event.target;
    if ((selected.length > 0) && (eventColor !== selected)) {
      const color = selected[0].style.background;
      eventColor.style.background = color;

    }
  });
}
setDayColor();

function evente() {
  const button = document.querySelector('#clear-board');
  const pixel = document.querySelectorAll('.pixel');
  const color = 'white';

  button.addEventListener('click', () => {
    for (let i = 0; i < pixel.length; i += 1) {
      if (pixel[i].style.background !== color) {
        pixel[i].style.background = color;
      }
    }
  });
}
evente();

const palle = document.querySelector('#div-input');

const inpu = document.createElement('input');
inpu.type = 'number';
inpu.id = 'board-size';
inpu.min = '1';
palle.appendChild(inpu);

const butto = document.createElement('button');
butto.id = 'generate-board';
butto.innerText = 'VQV';
palle.appendChild(butto);

function removeBoard() {
  const getBoard = document.querySelector('#pixel-board');
  getBoard.remove();
}

butto.addEventListener('click', () => {
  const inputValue = inpu.value;
  let inputNumber = parseInt(inputValue, 10);
  if (inputValue === '') {
    window.alert('Board inválido!');
    inputNumber = 5;
  } else if (inputNumber < 5) {
    window.alert('Board inválido!');
    inputNumber = 5;
  } else if (inputNumber > 10) {
    window.alert('Board inválido!');
    inputNumber = 10;
  }
  removeBoard();
  borderPixel();
  Rows = inputNumber;
  Columns = inputNumber;
  createPixel();
  setDayColor();
  evente()
  inpu.value = '';
});

