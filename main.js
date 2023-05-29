// first
/*
При наведении на любой из блоков с классом .box все его дочерние элементы должны поменять свой фон на один из списка.
ВАЖНО, только дочерние относительно блока на который навели мышь.

Вот массив (список) рандомных цветов

['red', 'blue', 'olive', 'orange', 'pink', 'yellow', 'green', 'gray', 'aqua', 'brown'];
*/

// second
/*
Возращаете фон обратно когда пользователь уводит мышку с блока.
*/

// third
/*
Добавление фона из первой части задания сделать с задержкой в 200мс.
Т.е каждый последующий блок должен изменить свой фон за 200мс позже предыдущего.
Например если первый блок поменял через 200мс то следующий должен поменять через 400 и т.д.
*/

const colors = [
  "red",
  "blue",
  "olive",
  "orange",
  "pink",
  "yellow",
  "green",
  "gray",
  "aqua",
  "brown",
];

const box = document.querySelectorAll(".box");
let pause = 200;

const getColors = (event) => {
  let ms = (event.timeout = event.timeout + pause || 0);
  let target = event.currentTarget;
  colors.forEach((color) => {
    setTimeout(function () {
      console.log(target);
    }, ms);
  });
};

box.forEach((event) => {
  event.addEventListener("click", getColors, true);
});

box.forEach((event) => {
  event.addEventListener("click", getColors);
});
