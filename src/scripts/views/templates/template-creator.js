import CONFIG from '../../globals/config';

const createrestoDetailTemplate = (resto) => `
<h2 class="resto__title">${resto.name}</h2>
<img class="resto__poster" src="${resto.pictureId ? CONFIG.BASE_IMAGE_URL + resto.pictureId : 'https://picsum.photos/id/113/1000/500'}" />

<div class="resto__info">
  <h3>Information</h3>
  <h4>City</h4>
  <p>${resto.city}</p>
  <h4>Address</h4>
  <p>${resto.address}</p>
</div>

<div class="resto__desc">
  <h3>Deskripsi</h3>
  <p>${resto.description}</p>
</div>

<div class="resto__reviews">
<h3>Reviews</h3>
${resto.consumerReviews.map((review) => `
  <div class="detail-review-item">
    <div class="review-header">
      <p class="review-name"><img src="./images/boy.png" alt="reviewer ${review.name}">&nbsp;${review.name}</p>
      <p class="review-date">${review.date}</p>
    </div>
    <div class="review-body">
      ${review.review}
    </div>
  </div>`).join('')}
</div>

<div class="resto__menu">
  <h3>Menu</h3>
    <div class="detail-food">
        <h4><i class="fas fa-cheese"></i>Makanan</h4>
        <h4></h4>
        <h4></h4>
        <h4></h4>
        <h4></h4>
        <ul>
            ${resto.menus.foods.map((food) => `<li>${food.name}</li>`).join('')}
        </ul>
    </div>
    <div class="detail-drink">
        <h4><i class="fas fa-mug-hot"></i>Minuman</h4>
        <h4></h4>
        <h4></h4>
        <h4></h4>
        <h4></h4>
        <ul>
            ${resto.menus.drinks.map((drink) => `<li>${drink.name}</li>`).join('')}
        </ul>
    </div>
</div>
`;

const createrestoItemTemplate = (resto) => `
  <div class="resto-item">
    <div class="resto-item__header">
      <img class="resto-item__header__poster" alt="${resto.name}"
           src="${resto.pictureId ? CONFIG.BASE_IMAGE_URL + resto.pictureId : 'https://picsum.photos/id/113/1000/500'}">
           <div class="city">${resto.city}</div>

      <div class="resto-item__header__rating">
        <p>⭐️<span class="resto-item__header__rating__score">${resto.rating}</span></p>
      </div>
    </div>
    <div class="resto-item__content">
      <h3><a href="/#/detail/${resto.id}">${resto.name}</a></h3>
      <p>${resto.description}</p>
    </div>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this resto" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createrestoItemTemplate,
  createrestoDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
