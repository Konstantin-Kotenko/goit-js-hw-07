import {galleryItems} from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryDiv = document.querySelector('.gallery');

const img = galleryItems
  .map((element) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href=${element.original}>
    <img
      class="gallery__image"
      src=${element.preview}
      data-source= ${element.original}
      alt=${element.description}
    />
  </a>
</div>`;
  })
  .join('');

galleryDiv.insertAdjacentHTML('beforeend', img);

const onLinkClick = (e) => {
  e.preventDefault();

  if (e.target.nodeName === '.gallery__link') {
    return;
  }
  console.log(e.target);
  console.log(e.target.dataset.source);
};

galleryDiv.addEventListener('click', onLinkClick);

console.log(galleryDiv);
