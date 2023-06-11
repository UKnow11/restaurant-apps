import UrlParser from '../../routes/url-parser';
import TherestoDbSource from '../../data/therestodb-source';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import { createrestoDetailTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
        <div id="resto" class="resto">Detail Resto</div>
        <div id="likeButtonContainer"></div>
        `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await TherestoDbSource.detailresto(url.id);
    const restoContainer = document.querySelector('#resto');
    restoContainer.innerHTML = createrestoDetailTemplate(resto);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      resto: {
        id: resto.id,
        name: resto.name,
        description: resto.description,
        city: resto.city,
        address: resto.address,
        pictureId: resto.pictureId,
        rating: resto.rating,
        foods: resto.foods,
        menus: resto.menus,
        drinks: resto.drinks,
      },
    });
  },
};

export default Detail;
