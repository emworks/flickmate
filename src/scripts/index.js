import MovieList from "./movie-list";
import MovieModal from "./movie-modal";
import movies from "../data/movies";

class IndexPage {
    movieList
    movieModal

    constructor() {
        this.#init();
    }

    #init() {
        this.movieList = new MovieList("#movie-list-container", movies);
        this.movieModal = new MovieModal("#movie-modal");
    }

    render() {
        this.movieList.render();
    }
}

document.addEventListener("DOMContentLoaded", () => {
    window.indexPage = new IndexPage();
    window.indexPage.render();
});