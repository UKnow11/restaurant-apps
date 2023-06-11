import FavoriterestoIdb from '../../data/favorite-resto-idb';
import { createrestoItemTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Your Liked Resto</h2>
        <br>
        <hr>
        <div id="restos" class="restos">
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restos = await FavoriterestoIdb.getAllrestos();
    const restosContainer = document.querySelector('#restos');
    restos.forEach((restaurant) => {
      restosContainer.innerHTML += createrestoItemTemplate(restaurant);
    });
  },
};

export default Like;
