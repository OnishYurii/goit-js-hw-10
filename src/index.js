import { fetchBreeds } from './cat-api';
import { fetchCatByBreed } from './cat-api';

const select = document.querySelector('.breed-select');
const div = document.querySelector('.cat-info');

fetchBreeds()
  .then(breeds => renderSelect(breeds))
  .catch(error => console.log(error));

select.addEventListener('input', e => {
  e.preventDefault();
  const breedId = select.options[select.selectedIndex].value;
  fetchCatByBreed(breedId)
    .then(cat => {
      renderCat(cat);
    })
    .catch(err => console.log(err));
});

function renderSelect(breeds) {
  const markup = breeds
    .map(breed => {
      return `<option value="${breed.id}">${breed.name}</option>`;
    })
    .join('');
  select.insertAdjacentHTML('beforeend', markup);
}

function catTemplate(cat) {
  const image = cat[0].url;
  const catTemperament = cat[0].breeds[0].temperament;
  const catName = cat[0].breeds[0].name;
  const catDescription = cat[0].breeds[0].description;
  return `
<div class="image-container">
  <img src="${image}" alt="${catName}" class="cat-image" />
</div>
<div class="cat-body">
  <h4 class="cat-name">${catName}</h4>
  <p>${catDescription}</p>
  <p class="cat-temperament"><span class="cat-temp-span">Temperament:</span> ${catTemperament}</p>
</div>`;
}

function renderCat(cat) {
  const markup = catTemplate(cat);
  div.innerHTML = markup;
}
