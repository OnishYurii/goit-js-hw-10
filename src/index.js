import { fetchBreeds } from './cat-api';
import { fetchCatByBreed } from './cat-api';

const select = document.querySelector('.breed-select');

console.log(fetchBreeds());
fetchBreeds()
  .then(breeds => renderSelect(breeds))
  .catch(error => console.log(error));

select.addEventListener('input', e => {
  e.preventDefault();
  const breedId = select.options[select.selectedIndex].value;
  fetchCatByBreed(breedId).then(cat => {
    console.log(cat);
  });
});

function renderSelect(breeds) {
  const markup = breeds
    .map(breed => {
      return `<option value="${breed.id}">${breed.name}</option>`;
    })
    .join('');
  select.insertAdjacentHTML('beforeend', markup);
}
