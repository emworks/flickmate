import BaseView from "./views/base-view";
import IndexHeaderView from "./views/index-header-view";
import MovieListView from "./views/movie-list-view";
import MovieModel from "./models/movie-model";

/**
 * Класс главной страницы приложения.
 * Отвечает за инициализацию и рендер списка фильмов.
 */
class IndexPage extends BaseView {
    /** @type {IndexHeaderView} Хэдер */
    indexHeaderView
    /** @type {MovieListView} Список фильмов */
    movieListView

    #movies

    constructor(...args) {
        super(...args);
        
        // Получаем все фильмы из модели
        this.#movies = MovieModel.getAll();
    }

    _createInnerHTML() {
        return `
            <div class="page-wrapper">
                <header id="page-header" class="main-header"></header>
                <main id="movie-list-container" class="content-wrapper"></main>
            </div>
        `;
    }

    /** Рендерит главную страницу */
    render() {
        super.render();

        // Создаём View хэдера
        this.indexHeaderView = new IndexHeaderView("#page-header");
        this.indexHeaderView.render();

        // Создаём View для списка фильмов
        this.movieListView = new MovieListView("#movie-list-container", this.#movies);
        this.movieListView.render();
    }
}

/**
 * Инициализация приложения после полной загрузки DOM
 * - чтобы все селекторы уже существовали
 * - window.indexPage даёт доступ к корневому объекту в консоли браузера (для отладки)
 */
document.addEventListener("DOMContentLoaded", () => {
    window.indexPage = new IndexPage("#root");
    window.indexPage.render();
});