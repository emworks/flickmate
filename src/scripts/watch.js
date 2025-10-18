import WatchHeaderView from "./views/watch-header-view";
import MovieWatchView from "./views/movie-watch-view.js";
import MovieModel from "./models/movie-model.js";

/**
 * Класс страницы совместного просмотра фильма.
 * Отвечает за инициализацию и рендер экрана совместного просмотра.
 */
class WatchPage {
    /** @type {WatchHeaderView} Хэдер */
    watchHeaderView
    /** @type {MovieWatchView} Экран совместного просмотра */
    movieWatchView

    constructor() {
        // Получаем id фильма из ?movie_id
        const params = new URLSearchParams(window.location.search);
        const movieId = Number(params.get("movie_id"));

        // Получаем информацию о фильме из модели
        const movie = MovieModel.getById(movieId);

        // Создаём View хэдера
        this.watchHeaderView = new WatchHeaderView("#page-header", movie);
        // Создаём View совместного просмотра
        this.movieWatchView = new MovieWatchView("#movie-watch-container", movie);
    }

    /** Рендерит страницу совместного просмотра */
    render() {
        this.watchHeaderView.render();
        this.movieWatchView.render();
    }
}

/**
 * Инициализация приложения после полной загрузки DOM
 * - чтобы все селекторы уже существовали
 * - window.watchPage даёт доступ к корневому объекту в консоли браузера (для отладки)
 */
document.addEventListener("DOMContentLoaded", () => {
    window.watchPage = new WatchPage();
    window.watchPage.render();
});