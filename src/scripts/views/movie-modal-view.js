import BaseView from "./base-view";

/**
 * Класс модального окна фильма.
 * Отвечает за отображение деталей фильма и работу с кнопками внутри модалки.
 * Наследуется от BaseView.
 */
export default class MovieModalView extends BaseView {
    /**
     * @param {string} selector - CSS-селектор контейнера модалки
     * @param {Object} initialData - Начальные данные для модалки
     */
    constructor(selector, initialData = {}) {
        super(selector, initialData);
    }

    /**
     * Открывает модалку с переданными данными фильма
     * @param {Object} movie - Объект фильма
     */
    open(movie) {
        this._data = movie;
        this.render();
        this._$el.showModal(); // встроенный метод HTML-элемента <dialog>
    }

    /** Закрывает модалку */
    close() {
        this._$el.close();
    }

    /** 
     * Генерирует HTML для списка метаданных фильма
     * @returns {string} HTML-строка с метаданными
     */
    #createMetadataList() {
        if (!this._data.metadata || !this._data.metadata.length) {
            return "Нет информации";
        }

        return `
            <ul>
                ${this._data.metadata.map(({ name, value }) => `
                    <li>
                        <span>${name}:</span><span>${value}</span>
                    </li>
                `).join("")}
            </ul>
        `;
    }

    /** Генерирует полный HTML модалки */
    #createModal() {
        return `
            <div class="movie-modal-wrapper">
                <header class="movie-modal-header">
                    <h3>Выбор фильма</h3>
                    <button class="movie-modal-close-btn" data-modal-close>×</button>
                </header>
                <section class="movie-modal-body">
                    <div class="movie-modal-poster">
                        <img src="${this._data.imgBig}" alt="${this._data.title}" loading="lazy" />
                    </div>
                    <div class="movie-modal-content">
                        <div>
                            <h2 id="movie-modal-title">${this._data.title}</h2>
                            ${this.#createMetadataList()}
                        </div>
                        <menu>
                            <button class="movie-modal-settings-btn secondary-btn">Настройки сеанса</button>
                            <a class="primary-btn" href="watch.html?movie_id=${this._data.id}">Смотреть вместе →</a>
                        </menu>
                    </div>
                </section>
            </div>
        `;
    }

    /** Метод для рендера HTML (обязательный для BaseView) */
    _createInnerHTML() {
        return this.#createModal();
    }

    /** TODO: Показ уведомления о настройках (заглушка) */
    #showSettings() {
        alert("Settings are not implemented");
    }

    /**
     * Обработчик кликов
     * @param {MouseEvent} event
     */
    #handleClicks = (event) => {
        const closeBtn = event.target.closest("[data-modal-close]");
        if (closeBtn) return this.close();

        const settingsBtn = event.target.closest(".movie-modal-settings-btn");
        if (settingsBtn) {
            event.preventDefault();
            this.#showSettings();
        }
    }

    /** Убирает события перед перерендером (BaseView) */
    _detachEvents() {
        this._$el.removeEventListener("click", this.#handleClicks);
    }

    /** Добавляет события после рендера (BaseView) */
    _attachEvents() {
        // Делегирование событий кликов на контейнер
        // Позволяет обрабатывать все клики внутри одной функции
        this._$el.addEventListener("click", this.#handleClicks);
    }
}

/** Фабрика для создания модалки */
export const createMovieModal = () => new MovieModalView("#movie-modal");