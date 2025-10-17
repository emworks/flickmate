export default class MovieList {
    #$el
    #data

    constructor(selector, initialData = []) {
        this.#$el = document.querySelector(selector);
        this.#data = initialData;
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
                ${this.#data.map(this.#createItem.bind(this)).join("")}
            </section>
        `;
    }

    #attachEvents() {
        const movieList = document.querySelector(".movie-list");
        movieList.addEventListener("click", (event) => {
            event.preventDefault();
            const movieItem = event.target.closest("[data-modal-open]");
            if (movieItem) {
                const movieId = +movieItem.dataset.id;
                window.indexPage.movieModal.open(movieId);
            }
        });
    }

    render() {
        const movieListHTML = this.#createList();
        this.#$el.replaceChildren();
        this.#$el.innerHTML = movieListHTML;
        this.#attachEvents();
    }
}