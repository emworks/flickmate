import MovieListView from "./views/movie-list-view";
import MovieModel from "./models/movie-model";

class IndexPage {
    movieListView

    constructor() {
        const movies = MovieModel.getAll();
        this.movieListView = new MovieListView("#movie-list-container", movies);
    }

    render() {
        this.movieListView.render();
    }
}

document.addEventListener("DOMContentLoaded", () => {
    window.indexPage = new IndexPage();
    window.indexPage.render();
});