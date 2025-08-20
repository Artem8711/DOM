console.log(document);

console.log(document.head);

console.log(document.body);

const rootE1 = document.getElementById(`root`);
console.log(rootE1);
console.dir(rootE1);

const divEls = document.getElementsByTagName(`div`);
console.log(divEls);

const divRoot2 = divEls[0];

const contentDivs = document.getElementsByClassName(`content`);
console.log(contentDivs);

/* const rootE3 = document.querySelector('#root');
console.log(rootE3); */

const divEls1 = document.querySelectorAll('div');
console.log(divEls1);

const contentDivs2 = document.querySelectorAll(`.content`);
console.log(contentDivs2);
