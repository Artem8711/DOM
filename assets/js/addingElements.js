`use strict`;

const section = document.createElement('section');

const divRoot = document.querySelector('#root');

//додавання дочірнього елемента append/prepend
divRoot.append(section);
section.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.';
section.style.backgroundColor = 'grey';

const article = document.createElement('article');
section.prepend(article);
article.textContent = 'Article';
article.style.backgroundColor = 'yellow';
article.style.margin = `10px`;

///////////////

const btn = document.createElement(`button`);

section.after(btn);
btn.textContent = 'Click me';
btn.style.margin = `10px`;
