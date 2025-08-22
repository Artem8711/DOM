const p1 = document.querySelector(`#p1`);
console.dir(p1);

console.log(p1.title);

//////////////////////

p1.title = `New Title`; //изменяем атрибут title

///////////////////

p1.hidden = true; //скрываем элемент
p1.hidden = false; //показываем элемент

//////////////////////

p1.style.color = `red`; //изменяем цвет текста
p1.style.backgroundColor = `lightGreen`; //изменяем цвет фона

////////////////////////////////////

const p2 = document.querySelector(`#p2`);
p2.setAttribute(`title`, `title of p2`); //устанавливаем атрибут title
p2.setAttribute(`style`, `color: blue; background-color: yellow; font-size: 22px;`); //устанавливаем атрибут style
console.log(p2.getAttribute(`style`));

/////////////////////////////////////

const body = document.querySelector(`body`);
body.setAttribute(`style`, `background-color: lightGray;`); //устанавливаем атрибут style для body

/////////////////////////////////

p2.textContent = `New text for p2`; //изменяем текстовое содержимое элемента p2

const imgAttr = {
   src: `https://www.google.com/imgres?q=cat&imgurl=http%3A%2F%2Fwww.alleycat.org%2Fwp-content%2Fuploads%2F2019%2F03%2FFELV-cat.jpg&imgrefurl=https%3A%2F%2Fwww.alleycat.org%2Fresources%2Fthe-natural-history-of-the-cat%2F&docid=9rMsr632qCnewM&tbnid=r2UYNPzMVoocFM&vet=12ahUKEwi2ppafmp-PAxW47LsIHfvGOCQQM3oECBYQAA..i&w=703&h=463&hcb=2&ved=2ahUKEwi2ppafmp-PAxW47LsIHfvGOCQQM3oECBYQAA`,
   alt: `Placeholder Image`,
   title: `This is a placeholder image`
};

const imgEl = document.querySelector(`img`);

imgEl.src = imgAttr.src; //устанавливаем атрибут src
imgEl.alt = imgAttr.alt; //устанавливаем атрибут alt
