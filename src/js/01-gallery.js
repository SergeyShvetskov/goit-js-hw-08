// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const newGalery = createNewGallery(galleryItems);
const gallery = document.querySelector(".gallery");

gallery.insertAdjacentHTML('beforeend', newGalery);
gallery.addEventListener('click', onClickGallery);

function onClickGallery(event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
        return;
    }
      new SimpleLightbox('.gallery a', {captionsData:"alt", captionDelay:250});
}

function createNewGallery(event) {
    return event.map(({ preview, original, description }) => {
        return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    }).join('');
}