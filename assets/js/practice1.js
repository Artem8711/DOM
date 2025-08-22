const btn = document.querySelector(`button`);

function handleClick(e) {
   const h1 = document.querySelector(`h1`);
   h1.setAttribute(`style`, `background-color: red; color: white;`);
   const img = document.querySelector(`.mainImg`);
   img.src = `https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.theguardian.com%2Fus-news%2F2025%2Fmay%2F22%2Fginger-cats-mystery-solved&psig=AOvVaw1HlTJSWw1JfXvFFCe7gtl_&ust=1755989005336000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJjDmvi-n48DFQAAAAAdAAAAABAE`;
   img.alt = `cat`;
   img.style.width = `300px`;
   img.style.height = `200px`;

   const h2s = document.querySelectorAll(`h2`);
   h2s.forEach((h2) => {
      h2.style.color = `blue`;
      h2.style.fontSize = `20px`;
   });
}
btn.addEventListener(`click`, handleClick);
