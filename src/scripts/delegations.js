import { users, albums, photos } from './data.js';

const refs = {
  userListElem: document.querySelector('.js-user-list'),
  albumsListElem: document.querySelector('.js-album-list'),
  photoListEl: document.querySelector('.js-photo-list'),
  usersFilterEl: document.querySelector('.js-users-filter'),
  userFormElem: document.querySelector('.js-user-form'),
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
  refs.albumsListElem.innerHTML = albumsMarkup(albums);
};

renderAlbums(albums);

// ==============================

const photoMarkup = photos => {
  return photos
    .map(photo => {
      return `<img src="${photo.thumbnailUrl}" alt="${photo.title}">`;
    })
    .join('');
};

const renderPhotos = photos => {
  refs.photoListEl.innerHTML = photoMarkup(photos);
};

// renderPhotos(photos);

// ==================

refs.usersFilterEl.addEventListener('input', event => {
  let value = event.currentTarget.value;
  const filteredUser = users.filter(elem => elem.name.includes(value));

  if (filteredUser.length === 0) {
    refs.userListElem.innerHTML = '<h3>ERROR</h3>';
  } else {
    renderUsers(filteredUser);
  }
});

refs.userFormElem.addEventListener('submit', event => {
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

  const obj = {};

  for (let [key, value] of data.entries()) {
    obj[key] = value;
  }

  // const userData = {};
  // for (const [key, value] of data.entries()) {
  //   userData[key] = value;
  // }
});
