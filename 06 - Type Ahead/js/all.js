(function typeAhead() {
  const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
  const searchInput = document.querySelector('.formSearch__search');
  const suggestions = document.querySelector('.formSearch__suggestions');
  const cities = [];
  fetch(endpoint)
    .then(responses => responses.json())
    .then(data => cities.push(...data));

  function findMatch(matchCity, city) {
    return city.filter((place) => {
      const regex = new RegExp(matchCity, 'gi');
      return place.city.match(regex) || place.state.match(regex);
    });
  }

  function numberWithCommas(num) {
    // return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return (num * 1).toLocaleString();
  }

  function displayMatch() {
    const matchArray = findMatch(this.value, cities);
    const html = matchArray.map((place) => {
      const regex = new RegExp(this.value, 'gi');
      const city = place.city.replace(regex, `<span class="h1">${this.value}</span>`);
      const state = place.state.replace(regex, `<span class="h1">${this.value}</span>`);
      return `
        <li>
          <span>${city}, ${state}</span>
          <span class="population">${numberWithCommas(place.population)}</span>
        </li>
      `;
    }).join('');
    suggestions.innerHTML = html;
  }

  searchInput.addEventListener('change', displayMatch);
  searchInput.addEventListener('keyup', displayMatch);
}());
