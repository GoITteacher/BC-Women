import { users, albums, photos } from './data.js';

const refs = {
  backdrop: document.querySelector('.backdrop'),
  userListElem: document.querySelector('.js-user-list'),
  albumsListElem: document.querySelector('.js-album-list'),
  photoListEl: document.querySelector('.js-photo-list'),
  usersFilterEl: document.querySelector('.js-users-filter'),
  userFormElem: document.querySelector('.js-user-form'),
  modalElem: document.querySelector('.modalka'),
};

// =============================================
const userMarkup = user => {
  return `
<li class="user-item" data-id=${user.id}>
  <h3>${user.name}</h3>
</li>`;
};

const usersMarkup = users => {
  return users.map(userMarkup).join('');
};

const renderUsers = users => {
  refs.userListElem.innerHTML = usersMarkup(users);
};

renderUsers(users);
// =============================================

const albumsMarkup = albums => {
  return albums
    .map(album => {
      return `
    <li class="album" data-id=${album.id}>
                <h3>${album.title}</h3>
                <div class="fb">
                    <img src="https://via.placeholder.com/150/92c952" alt="1" style="width: 50px; height: 50px;">
                    <img src="https://via.placeholder.com/150/92c952" alt="2" style="width: 50px; height: 50px;">
                    <img src="https://via.placeholder.com/150/92c952" alt="3" style="width: 50px; height: 50px;">
                </div>
    </li>
    `;
    })
    .join('');
};

const renderAlbums = albums => {
  const filteredAlbums = (refs.albumsListElem.innerHTML = albumsMarkup(albums));
};

// ==============================

const photoMarkup = photos => {
  return photos
    .map(photo => {
      //
      return `<img loading="lazy" class="lazyload" src="lqip-src.jpg" data-src="${photo.url}" alt="${photo.title}">`;
    })
    .join('');
};

const renderPhotos = photos => {
  refs.photoListEl.innerHTML = photoMarkup(photos);
};

// ========================================

const onFilterUsers = event => {
  console.log('DEBOUNCE');
  let value = event.target.value;
  const filteredUser = users.filter(elem => elem.name.includes(value));

  if (filteredUser.length === 0) {
    refs.userListElem.innerHTML = '<h3>ERROR</h3>';
  } else {
    renderUsers(filteredUser);
  }
};

refs.usersFilterEl.addEventListener('input', _.debounce(onFilterUsers, 1000));

/* refs.userFormElem.addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);

  const userName = data.get('user-name');

  const user = {
    id: Date.now().toString(),
    name: userName,
  };

  users.push(user);

  renderUsers(users);

  event.target.reset();
}); */

// =====================================
// DELEGATION
// =====================================

refs.userListElem.addEventListener('click', event => {
  if (event.target === event.currentTarget) return;

  const liElem = event.target.closest('li');
  const id = liElem.dataset.id;

  if (event.shiftKey === true) {
    openModal(id);
  } else {
    let filteredAlbums = albums.filter(el => el.userId === +id);
    renderAlbums(filteredAlbums);
  }
});

// =======================================
refs.albumsListElem.addEventListener('click', event => {
  if (event.target === event.currentTarget) return;

  const liElem = event.target.closest('li');
  const id = +liElem.dataset.id;

  let filteredPhoto = photos.filter(el => el.albumId === id);

  renderPhotos(filteredPhoto);
});

//========================

// MODAL

function openModal(id) {
  const user = users.find(user => user.id === +id);
  renderModal(user);
  document.body.classList.add('show-modal');
  document.addEventListener('keydown', onCloseModal);
}

function createModalMarkup(user) {
  return `
<div class="modalka">
    <h2>${user.name}</h2>
    <hr>
    - <span>${user.email}</span><br>
    - <span>${user.phone}</span><br>
    - <a href="awda">${user.website}</a>
    <hr>
    Adress: ${Object.values(user.address).slice(0, -1).join(', ')}
    <hr>
    Company: ${Object.values(user.company).join(', ')}
    <hr>
</div>
`;
}

function renderModal(user) {
  refs.modalElem.innerHTML = createModalMarkup(user);
}

/* 
        <div class="modalka">
            <h2>name</h2>
            <hr>
            - <span>email</span><br>
            - <span>phone</span><br>
            - <a href="awda">website</a>
            <hr>
            Adress: awdawdawd
            <hr>
            Company: awdawdawdawd
            <hr>
        </div>
*/

function onCloseModal(event) {
  if (event.code === 'Escape') {
    document.body.classList.remove('show-modal');
    document.removeEventListener('keydown', onCloseModal);
  }
}

refs.backdrop.addEventListener('click', event => {
  if (event.target === event.currentTarget) {
    document.body.classList.remove('show-modal');
    document.removeEventListener('keydown', onCloseModal);
  }
});
