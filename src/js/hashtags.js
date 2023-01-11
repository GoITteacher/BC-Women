const refs = {
  formEl: document.querySelector('.js-form1'),
  listHashtagEl: document.querySelector('.js-container1'),
};

refs.formEl.addEventListener('submit', e => {
  e.preventDefault();
  const tag = e.target.elements.tag.value;
  getTags(tag).then(data => {
    const tags = data.data.best1.tags;
    renderTags(tags);
  });
});

function getTags(tag) {
  const options = {
    headers: {
      'X-RapidAPI-Key': '9b3ff61931msh1b42d77d34e33dap1c29cajsn3d3169e0e2f4',
      'X-RapidAPI-Host': 'top-instagram-hashtag.p.rapidapi.com',
    },
  };

  const url = `https://top-instagram-hashtag.p.rapidapi.com/hashtag/${tag}`;

  return fetch(url, options).then(response => response.json());
}

function renderTags(tags) {
  const markup = tags
    .map(element => {
      return `<li>${element}</li>`;
    })
    .join('');
  refs.listHashtagEl.innerHTML = markup;
}
