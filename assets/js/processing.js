const btn = document.getElementById('clikBtn');
console.log(btn);

const clicklHandler = function (event) {
   console.log(`btn was clicked`);
};

btn.onclick = clicklHandler; // Установка обработчика события

/* btn.onclick = null; // Удаление обработчика события */

/////////////////////

const loginBtn = document.getElementById('loginBtn');

function loginHandler(e) {
   alert('Login button clicked');
}

loginBtn.addEventListener(`click`, loginHandler); // Установка обработчика события

/* loginBtn.removeEventListener(`click`, loginHandler); // Удаление обработчика события */

//////////////////////

function mouseMoveHandler(e) {
   console.log(`Click me!`);
}

loginBtn.addEventListener(`mousemove`, mouseMoveHandler);

////////////////////////

const clickBtns = document.getElementsByClassName(`ClickBtn1`);
console.log(clickBtns);

const clickBtnHandler = function (e) {
   console.log(` hello world was clicked`);
};

clickBtns[0].addEventListener(`click`, clickBtnHandler); // Установка обработчика события

//////////////////////////////

const greetingBtn = document.getElementById('greetingBtn');

function greetingHandler(e) {
   alert('Hello world');
}

greetingBtn.addEventListener(`click`, greetingHandler); // Установка обработчика события
