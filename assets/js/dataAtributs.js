`use strict`;

const btn = document.querySelectorAll('button');

function btnClick(e) {
   console.log(e.target.dataset.host);
}

/* btn[0].onclick = btnClick;
btn[1].onclick = btnClick; */

btn.forEach((b) => (b.onclick = btnClick));
