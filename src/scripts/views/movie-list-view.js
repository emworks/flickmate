
import BaseView from "./base-view";
import { createMovieModal } from "./movie-modal-view";
import MovieModel from "../models/movie-model";

export default class MovieListView extends BaseView {
    #movieModal

    constructor(selector, initialData = []) {
        super(selector, initialData);
        this.#movieModal = createMovieModal();
    }

    #createItem({ id, link, title, subtitle, img, details }) {
        return `
            <article class="movie-item">
                <a href="${link}" data-modal-open data-id="${id}">
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

    #createList() {
        return `
            <section class="movie-list">
                ${this._data.map(this.#createItem.bind(this)).join("")}
            </section>
        `;
    }

    _createInnerHTML() {
        return this.#createList();
    }

    #handleModal = (event) => {
        event.preventDefault();
        const movieItem = event.target.closest("[data-modal-open]");
        if (movieItem) {
            const movieId = +movieItem.dataset.id;
            const movie = MovieModel.getById(movieId);
            this.#movieModal.open(movie);
        }
    }

    _detachEvents() {
        this._$el.removeEventListener("click", this.#handleModal);
    }

    _attachEvents() {
        this._$el.addEventListener("click", this.#handleModal);
    }
}