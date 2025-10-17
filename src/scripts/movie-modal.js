import movies from "../data/movies";

export default class MovieModal {
    #$el
    #data

    constructor(selector) {
        this.#$el = document.querySelector(selector);
    }

    open(movieId) {
        this.#fetchData(movieId);
        this.render();
        this.#$el.showModal();
    }

    close() {
        this.#$el.close();
    }

    #fetchData(movieId) {
        this.#data = movies.find(({ id }) => id === movieId);
    }

    #createMetadataList() {
        if (!this.#data.metadata || !this.#data.metadata.length) {
            return "Нет информации";
        }

        return `
            <ul>
                ${this.#data.metadata.map(({ name, value }) => `
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
                        <img src="${this.#data.imgBig}" alt="${this.#data.title}" loading="lazy" />
                    </div>
                    <div class="movie-modal-content">
                        <div>
                            <h2 id="movie-modal-title">${this.#data.title}</h2>
                            ${this.#createMetadataList()}
                        </div>
                        <menu>
                            <button class="movie-modal-settings-btn secondary-btn">Настройки сеанса</button>
                            <a class="movie-modal-watch-btn primary-btn" href="${this.#data.link}">Смотреть вместе →</a>
                        </menu>
                    </div>
                </section>
            </div>
        `;
    }

    #showSettings() {
        alert("Settings are not implemented");
    }

    #navigateToWatchPage(movieId) {
        alert("Watch page is not implemented");
    }

    #attachEvents() {
        const closeButtons = this.#$el.querySelectorAll("[data-modal-close]");
        closeButtons.forEach(btn => btn.addEventListener("click", () => this.close()));

        const settingsButton = this.#$el.querySelector(".movie-modal-settings-btn");
        settingsButton.addEventListener("click", (event) => {
            event.preventDefault();
            this.#showSettings();
        });

        const watchButton = this.#$el.querySelector(".movie-modal-watch-btn");
        watchButton.addEventListener("click", (event) => {
            event.preventDefault();
            this.#navigateToWatchPage(this.#data.id);
        });
    }

    render() {
        const modalHTML = this.#createModal();
        this.#$el.replaceChildren();
        this.#$el.innerHTML = modalHTML;
        this.#attachEvents();
    }
}