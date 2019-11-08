export default class SwapiService {

    _apiBase = 'https://swapi.co/api'

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`)

        if(!res.ok) {
            throw new Error(`Coudn't fetch ${url} recieved ${res.status}`)
        }
        return await res.json()
    }

    async getPeople() {
        const res = await this.getResource(`/people/`)
        return res.results
    }

    getPerson(id) {
        return this.getResource(`/people/${id}/`)
    }

    async getPlanets() {
        const res = await this.getResource(`/planets/`)
        return res.results
    }

    getPlanet(id) {
        return this.getResource(`/planets/${id}/`)
    }

    async getStarships() {
        const res = await this.getResource(`/starships/`)
        return res.results
    }

    getStarship(id) {
        return this.getResource(`/starships/${id}/`)
    }
}