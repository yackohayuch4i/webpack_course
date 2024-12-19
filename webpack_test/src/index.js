//import './styles/main.scss';

document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header');
  const button = document.getElementById('changeColorBtn');

  button.addEventListener('click', () => {
    header.style.color = header.style.color === 'red' ? '#333' : 'red';
  });
});

console.log('Hello, Webpack!');
