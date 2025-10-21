import BaseView from "./views/base-view";
import WatchHeaderView from "./views/watch-header-view";
import MovieWatchView from "./views/movie-watch-view.js";
import MovieModel from "./models/movie-model.js";

/**
 * Класс страницы совместного просмотра фильма.
 * Отвечает за инициализацию и рендер экрана совместного просмотра.
 */
class WatchPage extends BaseView {
    /** @type {WatchHeaderView} Хэдер */
    watchHeaderView
    /** @type {MovieWatchView} Экран совместного просмотра */
    movieWatchView

    #movie

    constructor(...args) {
        super(...args);

        // Получаем id фильма из ?movie_id
        const params = new URLSearchParams(window.location.search);
        const movieId = Number(params.get("movie_id"));

        // Получаем информацию о фильме из модели
        this.#movie = MovieModel.getById(movieId);
    }

    _createInnerHTML() {
        return `
            <div class="page-wrapper">
                <header id="page-header" class="main-header"></header>
                <main id="movie-watch-container" class="content-wrapper"></main>
            </div>
        `;
    }

    /** Рендерит страницу совместного просмотра */
    render() {
        super.render();

        // Создаём View хэдера
        this.watchHeaderView = new WatchHeaderView("#page-header", this.#movie);
        this.watchHeaderView.render();

        // Создаём View совместного просмотра
        this.movieWatchView = new MovieWatchView("#movie-watch-container", this.#movie);
        this.movieWatchView.render();
    }
}

/**
 * Инициализация приложения после полной загрузки DOM
 * - чтобы все селекторы уже существовали
 * - window.watchPage даёт доступ к корневому объекту в консоли браузера (для отладки)
 */
document.addEventListener("DOMContentLoaded", () => {
    window.watchPage = new WatchPage("#root");
    window.watchPage.render();
});