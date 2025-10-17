import movies from "../../data/movies.js";

export default class MovieModel {
    static getAll() {
        return movies;
    }

    static getById(id) {
        return movies.find(movie => movie.id === id);
    }
}