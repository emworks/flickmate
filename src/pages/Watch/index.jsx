import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { WatchHeader, MovieWatch } from "src/components";
import { MovieService } from "src/services";

/**
 * Компонент страницы совместного просмотра фильма.
 * Отвечает за инициализацию и рендер экрана совместного просмотра.
 */
export function WatchPage() {
    const [movie, setMovie] = useState({});
    const { movieId } = useParams();

    useEffect(() => {
        const decodedMovieId = decodeURIComponent(movieId);

        // Получаем информацию о фильме из модели
        const movie = MovieService.getById(decodedMovieId);
        setMovie(movie);
    }, [movieId])

    return (
        <div className="page-wrapper">
            <header id="page-header" className="main-header">
                <WatchHeader title={movie.title} />
            </header>
            <main id="movie-watch-container" className="content-wrapper">
                <MovieWatch movieId={movie.id} poster={movie.imgBig} />
            </main>
        </div>
    )
}