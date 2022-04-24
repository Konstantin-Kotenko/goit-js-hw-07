import {galleryItems} from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryDiv = document.querySelector('.gallery');

const img = galleryItems
  .map((element) => {
    const {original, preview, description} = element;
    return `<a class='gallery__item' href=${original}>
          <img
            class='gallery__image'
            src=${preview}
            alt=${description}
          />
        </a>`;
  })
  .join('');

galleryDiv.innerHTML = img;

const lightbox = new SimpleLightbox('.gallery a', {});

const onLinkClick = (e) => {
  e.preventDefault();

  if (e.target.nodeName === '.gallery__image') {
    return;
  }
};

galleryDiv.addEventListener('click', onLinkClick);
