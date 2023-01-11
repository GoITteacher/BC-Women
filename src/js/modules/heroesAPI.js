export class HeroesAPI {
  static searchHero(name) {
    const options = {
      headers: {
        'X-RapidAPI-Key': '9b3ff61931msh1b42d77d34e33dap1c29cajsn3d3169e0e2f4',
        'X-RapidAPI-Host': 'superhero-search.p.rapidapi.com',
      },
    };

    const params = new URLSearchParams({
      hero: name,
    });

    const url = `https://superhero-search.p.rapidapi.com/api/?${params}`;

    return fetch(url, options).then(res => res.json());
  }
}
