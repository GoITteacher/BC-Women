import { HeroesAPI } from './modules/heroesAPI';

const refs = {
  formEl: document.querySelector('.js-form'),
  cardHeroEl: document.querySelector('.js-container'),
};

refs.formEl.addEventListener('submit', e => {
  e.preventDefault();

  const heroName = e.target.elements['hero-name'].value;

  HeroesAPI.searchHero(heroName)
    .then(hero => {
      renderHero(hero);
    })
    .catch(err => {
      refs.cardHeroEl.innerHTML = '';
    });
});

function renderHero(hero) {
  const markup = `
  <img src="${hero.images.md}" alt="">
  <ul>
      <li> Name: <b>${hero.name}</b></li>
      <li> FullName: ${hero.biography.fullName}</li>
      <li> WorkL: ${hero.work.base}</li>
  </ul>
    `;

  refs.cardHeroEl.innerHTML = markup;
}
