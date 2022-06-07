const cont = document.querySelector('.container');

function getElement() {
  const el = document.createElement('div');
  el.classList.add('item');
  return el;
}

for (let i = 0; i < 16; i += 1) {
  const item = getElement();
  cont.append(item);
}

const items = document.querySelectorAll('.item');
const itemsArray = Array.from(items);

function getRandomInt(min, max) {
  const mini = Math.ceil(min);
  const maxi = Math.floor(max);
  return Math.floor(Math.random() * (maxi - mini)) + mini;
  // Максимум не включается, минимум включается
}

setInterval(() => {
  const imeg = document.createElement('img');
  imeg.src = '../pic/goblin.png';
  imeg.classList.add('image');
  const index = getRandomInt(0, 16);
  itemsArray[index].appendChild(imeg);
  setTimeout(() => {
    imeg.remove();
  }, 2000);
}, 3000);
