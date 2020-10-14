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
    const res = await this.getResource(`/people/`);
    return res.results;
  }

  getPerson(id) {
    return this.getResource(`/people/${id}/`);
  }

  // --- Planets
  async getAllPlanets() {
    const res = await this.getResource(`/planets/`);
    return res.results;
  }

  getPlanet(id) {
    return this.getResource(`/planets/${id}/`);
  }

  // --- starships
  async getAllStarships() {
    const res = await this.getResource(`/starships/`);
    return res.results;
  }

  getStarship(id) {
    return this.getResource(`/starships/${id}/`);
  }
}
