export default class SwapiService {
  _baseUrl = "https://swapi.dev/api";
  async getResource(url) {
    const res = await fetch(`${this._baseUrl}${url}`);

    if (!res.ok)
      throw new Error(
        `Could not fetch ${url}, 
      received ${res.status}`
      );
    return await res.json();
  }

  // --- People
  async getAllPeople() {
    const persons = await this.getResource(`/people/`);
    return persons.results.map(el => this._transformPerson(el));
  }

  async getPerson(id) {
    const person = await this.getResource(`/people/${id}/`);
    return this._transformPerson(person)
  }

  // --- Planets
  async getAllPlanets() {
    const planets = await this.getResource(`/planets/`);
    return planets.results.map(el => this._transformPlanet(el));
  }

  async getPlanet(id) {
    const planet = await this.getResource(`/planets/${id}/`);
    return this._transformPlanet(planet)
  }

  // --- starships
  async getAllStarships() {
    const starships = await this.getResource(`/starships/`);
    return starships.results.map(el => this._transformStarships(el));
  }

  async getStarship(id) {
    const starship = await this.getResource(`/starships/${id}/`);
    return this._transformStarships(starship)
  }

  // --- transform --- 
  _extractId(item) {
    const idRegexp = /\/([0-9]*)\/$/;
    return item.url.match(idRegexp)[1];
  }

  _transformPlanet(planet) {
    return {
      id: this._extractId(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter
    }
  }

  _transformStarships(starships) {
    return {
      id: this._extractId(starships),
      name: starships.name,
      model: starships.model,
      manufactures: starships.manufactures,
      costInCredit: starships.cost_in_credit,
      length: starships.length,
      crew: starships.crew,
      passengers: starships.passengers,
      cargoCapacity: starships.cargo_capacity
    }
  }

  _transformPerson(person) {
    return {
      id: this._extractId(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
      eyeColor: person.eye_color
    }
  }
}
