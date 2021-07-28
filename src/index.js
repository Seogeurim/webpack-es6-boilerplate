import './styles';
import icon from './assets/code.png';

const $app = document.querySelector('#app');

$app.innerHTML = `
  <div class="welcome">
    <h1 class="welcome__title">Webpack es6 Boilerplate</h1>
    <p class="welcome__desc">
      <img src="${icon}" alt="icon" />
      This is JavaScript boilerplate using webpack v5.
    </p>
  </div>
`;
