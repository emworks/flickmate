
import BaseView from "./base-view";
import { createMovieModal } from "./movie-modal-view";
import MovieModel from "../models/movie-model";

/**
 * Класс для отображения списка фильмов.
 * Рендерит карточки фильмов и обрабатывает открытие модалки при клике.
 * Наследуется от BaseView.
 */
export default class MovieListView extends BaseView {
    /** @type {MovieModalView} Экземпляр модального окна */
    #movieModal;

    /**
     * @param {string} selector - CSS-селектор контейнера списка фильмов
     * @param {Array<Object>} initialData - Массив объектов фильмов
     */
    constructor(selector, initialData = []) {
        super(selector, initialData);
        this.#movieModal = createMovieModal();
    }

    /**
     * Генерирует HTML для одной карточки фильма
     * @param {Object} movie - Объект фильма
     * @returns {string} HTML-код карточки
     */
    #createItem({ id, title, subtitle, img, details }) {
        return `
            <article class="movie-item">
                <a href="watch.html?movie_id=${id}" data-modal-open data-id="${id}">
                    <div class="movie-item-poster">
                        <img src="${img}" alt="${title}" loading="lazy" />
                    </div>
                    <div class="movie-item-desc">
                        <h2 class="truncate">${title}</h2>
                        <h3 class="truncate">${subtitle}</h3>
                        <p class="truncate">${details}</p>
                    </div>
                </a>
            </article>                    
        `;
    }

    /**
     * Генерирует HTML для всего списка фильмов
     * @returns {string} HTML-код списка фильмов
     */
    #createList() {
        return `
            <section class="movie-list">
                ${this._data.map(this.#createItem.bind(this)).join("")}
            </section>
        `;
    }

    /** Метод рендера HTML (обязательный для BaseView) */
    _createInnerHTML() {
        return this.#createList();
    }

    /**
     * Обработчик клика на карточке фильма.
     * Делегирование: ищет ближайший элемент с data-modal-open
     * и открывает соответствующую модалку.
     * @param {MouseEvent} event
     */
    #handleModal = (event) => {
        event.preventDefault();

        // Используем event.target.closest('[data-modal-open]')
        // чтобы найти ближайший элемент с атрибутом data-modal-open
        // даже если кликнули по вложенному тегу внутри карточки
        const movieItem = event.target.closest("[data-modal-open]");
        if (movieItem) {
            const movieId = +movieItem.dataset.id;
            const movie = MovieModel.getById(movieId);
            this.#movieModal.open(movie);
        }
    }

    /** Убирает обработчики событий перед перерендером */
    _detachEvents() {
        this._$el.removeEventListener("click", this.#handleModal);
    }

    /** Добавляет обработчики событий после рендера */
    _attachEvents() {
        this._$el.addEventListener("click", this.#handleModal);
    }
}