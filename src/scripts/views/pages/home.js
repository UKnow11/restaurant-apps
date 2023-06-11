import TherestoDbSource from '../../data/therestodb-source';
import { createrestoItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Find Your Favorite</h2>
        <br>
        <hr>
        <div id="restos" class="restos">
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restos = await TherestoDbSource.nowPlayingrestos();
    const restosContainer = document.querySelector('#restos');
    restos.forEach((restaurants) => {
      restosContainer.innerHTML += createrestoItemTemplate(restaurants);
    });
  },
};

export default Home;
