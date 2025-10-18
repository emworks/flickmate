import IndexHeaderView from "./views/index-header-view";
import MovieListView from "./views/movie-list-view";
import MovieModel from "./models/movie-model";

/**
 * Класс главной страницы приложения.
 * Отвечает за инициализацию и рендер списка фильмов.
 */
class IndexPage {
    /** @type {IndexHeaderView} Хэдер */
    indexHeaderView
    /** @type {MovieListView} Список фильмов */
    movieListView

    constructor() {
        // Создаём View хэдера
        this.indexHeaderView = new IndexHeaderView("#page-header");
        // Получаем все фильмы из модели
        const movies = MovieModel.getAll();
        // Создаём View для списка фильмов
        this.movieListView = new MovieListView("#movie-list-container", movies);
    }

    /** Рендерит главную страницу */
    render() {
        this.indexHeaderView.render();
        this.movieListView.render();
    }
}

/**
 * Инициализация приложения после полной загрузки DOM
 * - чтобы все селекторы уже существовали
 * - window.indexPage даёт доступ к корневому объекту в консоли браузера (для отладки)
 */
document.addEventListener("DOMContentLoaded", () => {
    window.indexPage = new IndexPage();
    window.indexPage.render();
});