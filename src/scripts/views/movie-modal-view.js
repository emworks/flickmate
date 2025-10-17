import BaseView from "./base-view";

export default class MovieModalView extends BaseView {
    constructor(selector, initialData = {}) {
        super(selector, initialData);
    }

    open(movie) {
        this._data = movie;
        this.render();
        this._$el.showModal();
    }

    close() {
        this._$el.close();
    }

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
                            <a class="movie-modal-watch-btn primary-btn" href="${this._data.link}">Смотреть вместе →</a>
                        </menu>
                    </div>
                </section>
            </div>
        `;
    }

    _createInnerHTML() {
        return this.#createModal();
    }

    #showSettings() {
        alert("Settings are not implemented");
    }

    #navigateToWatchPage(movieId) {
        alert("Watch page is not implemented");
    }

    #handleButtons = (event) => {
        const closeBtn = event.target.closest("[data-modal-close]");
        if (closeBtn) return this.close();

        const settingsBtn = event.target.closest(".movie-modal-settings-btn");
        if (settingsBtn) {
            event.preventDefault();
            this.#showSettings();
        }

        const watchBtn = event.target.closest(".movie-modal-watch-btn");
        if (watchBtn) {
            event.preventDefault();
            this.#navigateToWatchPage(this._data.id);
        }
    }

    _detachEvents() {
        this._$el.removeEventListener("click", this.#handleButtons);
    }

    _attachEvents() {    
        this._$el.addEventListener("click", this.#handleButtons);
    }
}

export const createMovieModal = () => new MovieModalView("#movie-modal");