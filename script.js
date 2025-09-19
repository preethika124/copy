// Change background color randomly on button click
const button = document.getElementById('newQuote');
button.addEventListener('click', () => {
  const randomColor = `hsl(${Math.floor(Math.random() * 360)}, 70%, 50%)`;
  document.body.style.backgroundColor = randomColor;
});
