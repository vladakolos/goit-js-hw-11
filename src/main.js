import { fetchImages } from './js/pixabay-api.js';
import { renderTemplate } from './js/render-functions.js';
import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import 'izitoast/dist/css/iziToast.min.css';

const formEl = document.querySelector('form.form-search');
const galleryEl = document.querySelector('.gallery');
const loaderEl = document.querySelector('.loader');

const lightbox = new SimpleLightbox('.gallery a', {});

if (formEl) {
  formEl.addEventListener('submit', event => {
    event.preventDefault();

    const inputValue = formEl.elements.search.value;

    if (!inputValue) {
      iziToast.error({
        message: 'Please enter a search term',
        position: 'topRight',
        class: 'error',
        color: 'white',
      });
    } else {
      galleryEl.innerHTML = '';
      galleryEl.classList.add('is-load');
      loaderEl.classList.remove('is-hidden');
      fetchImages(inputValue)
        .catch(error => {
          console.log(error);
        })
        .then(response => response.json())
        .then(data => {
          galleryEl.classList.remove('is-load');
          const imagesHtml = [];

          if (data.total === 0) {
            iziToast.error({
              message:
                'Sorry, there are no images matching your search query. Please try again!',
              position: 'topRight',
              class: 'error',
              color: 'white',
            });
          } else {
            data.hits.forEach(image => {
              imagesHtml.push(renderTemplate(image));
            });

            galleryEl.innerHTML = imagesHtml.join('');
            lightbox.refresh();
          }
        })
        .finally(() => {
          loaderEl.classList.add('is-hidden');
        });

      formEl.reset();
    }
  });
}
