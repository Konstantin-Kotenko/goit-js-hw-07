import {galleryItems} from './gallery-items.js';
// Change code below this line

const galleryDiv = document.querySelector('.gallery');

const img = galleryItems
  .map((element) => {
    const {original, preview, description} = element;
    return `<div class="gallery__item">
  <a class="gallery__link" href=${original}>
    <img
      class="gallery__image"
      src=${preview}
      data-source= ${original}
      alt=${description}
    />
  </a>
</div>`;
  })
  .join('');

galleryDiv.innerHTML = img;

let instance = null;

const onLinkClick = (e) => {
  e.preventDefault();

  if (e.target.nodeName === '.gallery__image') {
    return;
  }

  instance = basicLightbox.create(`
      <img src="${e.target.dataset.source}" width="800" height="600">
  `);

  instance.show();
};

const onKeyDown = (e) => {
  if (e.key === 'Escape' && instance !== null) instance.close();
};

document.body.addEventListener('keydown', onKeyDown);
galleryDiv.addEventListener('click', onLinkClick);
