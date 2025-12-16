import movies from "src/data/movies.js";

/**
 * Класс модели фильмов.
 * Отвечает за работу с данными о фильмах.
 */
export class MovieService {
    /**
     * Возвращает все фильмы
     * @returns {Array<Object>} Массив объектов фильмов
     */
    static getAll() {
        return movies;
    }

    /**
     * Возвращает фильм по его идентификатору
     * @param {number} id - Идентификатор фильма
     * @returns {Object|undefined} Объект фильма или undefined, если не найден
     */
    static getById(id) {
        return movies.find(movie => movie.id === id);
    }
}