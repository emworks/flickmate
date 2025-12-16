const API_URL = import.meta.env.BASE_URL + "api";

/**
 * Класс модели фильмов.
 * Отвечает за работу с данными о фильмах.
 */
export class MovieService {
    /**
     * Возвращает все фильмы
     * @returns {Array<Object>} Массив объектов фильмов
     */
    static async getAll() {
        const response = await fetch(`${API_URL}/movies.json`);
        return response.json();
    }

    /**
     * Возвращает фильм по его идентификатору
     * @param {number} id - Идентификатор фильма
     * @returns {Object|undefined} Объект фильма или undefined, если не найден
     */
    static async getById(id) {
        const movies = await MovieService.getAll()
        return movies.find(movie => movie.id === id);
    }
}