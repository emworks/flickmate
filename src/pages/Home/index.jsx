import { useState, useEffect } from "react";
import { HomeHeader, MovieList } from "src/components";
import { MovieService } from "src/services";

/**
 * Компонент главной страницы приложения.
 * Отвечает за инициализацию и рендер списка фильмов.
 */
export function HomePage() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        // Получаем все фильмы из модели
        const movies = MovieService.getAll();
        setMovies(movies);
    }, [])

    return (
        <div className="page-wrapper">
            <header id="page-header" className="main-header">
                <HomeHeader />
            </header>
            <main id="movie-list-container" className="content-wrapper">
                <MovieList movies={movies} />
            </main>
        </div>
    )
}