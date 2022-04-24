import {galleryItems} from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

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

galleryDiv.insertAdjacentHTML('beforeend', img);

const onLinkClick = (e) => {
  e.preventDefault();
  if (e.target.nodeName === '.gallery__image') {
    return;
  }
  const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="800" height="600">
`);

  instance.show();
};

galleryDiv.addEventListener('click', onLinkClick);
