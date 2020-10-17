export default class SwapiService {
  _baseUrl = "https://swapi.dev/api";
  _imageBase = "https://starwars-visualguide.com/assets/img";

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
  getAllPeople = async () => {
    const persons = await this.getResource(`/people/`);
    return persons.results.map((el) => this._transformPerson(el));
  };

  getPerson = async (id) => {
    const person = await this.getResource(`/people/${id}/`);
    return this._transformPerson(person);
  };

  // --- Planets
  getAllPlanets = async () => {
    const planets = await this.getResource(`/planets/`);
    return planets.results.map((el) => this._transformPlanet(el));
  };

  getPlanet = async (id) => {
    const planet = await this.getResource(`/planets/${id}/`);
    return this._transformPlanet(planet);
  };

  // --- starships
  getAllStarships = async () => {
    const starships = await this.getResource(`/starships/`);
    return starships.results.map((el) => this._transformStarships(el));
  };

  getStarship = async (id) => {
    const starship = await this.getResource(`/starships/${id}/`);
    return this._transformStarships(starship);
  };

  // --- transform ---
  _extractId = (item) => {
    const idRegexp = /\/([0-9]*)\/$/;
    return item.url.match(idRegexp)[1];
  };

  _transformPlanet = (planet) => {
    return {
      id: this._extractId(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter,
    };
  };

  _transformStarships = (starships) => {
    return {
      id: this._extractId(starships),
      name: starships.name,
      model: starships.model,
      manufactures: starships.manufactures,
      costInCredit: starships.cost_in_credit,
      length: starships.length,
      crew: starships.crew,
      passengers: starships.passengers,
      cargoCapacity: starships.cargo_capacity,
    };
  };

  _transformPerson = (person) => {
    return {
      id: this._extractId(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
      eyeColor: person.eye_color,
    };
  };

  getPeopleImage = (id) => {
    return `${this._imageBase}/characters/${id}.jpg`;
  };

  getStarshipImage = (id) => {
    return `${this._imageBase}/starships/${id}.jpg`;
  };

  getPlanetImage = (id) => {
    return `${this._imageBase}/planets/${id}.jpg`;
  };
}
