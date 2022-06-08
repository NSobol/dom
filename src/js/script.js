import image from '../pic/goblin.png';

const cont = document.querySelector('.container');

// функция возвращающая случайное число в заданном диапазоне
export function getRandomInt(min, max) {
  const mini = Math.ceil(min);
  const maxi = Math.floor(max);
  return Math.floor(Math.random() * (maxi - mini)) + mini;
  // Максимум не включается, минимум включается
}

// функция создающая определенный HTML-элемент с заданным классом
export function getElement(tag, clas) {
  const el = document.createElement(tag);
  el.classList.add(clas);
  return el;
}

for (let i = 0; i < 16; i += 1) {
  const item = getElement('div', 'item');
  cont.append(item);
}

const items = document.querySelectorAll('.item');
export const itemsArray = Array.from(items);

// перемещение элемента по DOM-дереву в пределах одной коллекции
setInterval(() => {
  const imeg = getElement('img', 'image');
  imeg.src = image;
  const index = getRandomInt(0, 16);
  itemsArray[index].appendChild(imeg);
  setTimeout(() => {
    imeg.remove();
  }, 1000);
}, 2000);
