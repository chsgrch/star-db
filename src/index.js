class SwapiService {
  _baseUrl = 'https://swapi.dev/api';
  async getResource(url) {
    const res = await fetch(`${this._baseUrl}${url}`)

    if (!res.ok) throw new Error(
      `Could not fetch ${url}, 
      received ${res.status}`)
    return await res.json()
  }

  // --- People
  async getAllPeople() {
    const res = await this.getResource(`/people/`);
    return res.results;
  }

  getPerson(id) {
    return this.getResource(`/people/${id}/`)
  }

  // --- Planets
  async getAllPlanets() {
    const res = await this.getResource(`/planets/`);
    return res.results;
  }

  getPlanet(id) {
    return this.getResource(`/planets/${id}/`)
  }

  // --- starships
  async getAllStarships() {
    const res = await this.getResource(`/starships/`);
    return res.results;
  }

  getStarship(id) {
    return this.getResource(`/starships/${id}/`)
  }

}

let swapi = new SwapiService(); //экзкмпляр класса

// --- people --- 
/**
 * Get all people
 */
swapi.getAllPeople()
  .then((body) => {
    body.forEach(el => { console.log(el.name) })
  })
  .catch(e => console.error('!Error:', e))

/**
 * Get one person
 */
swapi.getPerson(1)
  .then((body) => console.log(body.name))
  .catch(e => console.error('!Error:', e))


// --- planet --- 
/**
 * Get all panet
 */
swapi.getAllPlanets()
  .then((body) => {
    body.forEach(el => { console.log(el.name) })
  })
  .catch(e => console.error('!Error:', e))

/**
* Get one person
*/
swapi.getPlanet(1)
  .then((body) => console.log(body.name))
  .catch(e => console.error('!Error:', e))


// --- starships --- 
/**
 * Get all starships
 */
swapi.getAllStarships()
  .then((body) => {
    body.forEach(el => { console.log(el) })
  })
  .catch(e => console.error('!Error:', e))

/**
* Get one starship
*/
swapi.getStarship(9)
  .then((body) => console.log(body.name))
  .catch(e => console.error('!Error:', e))