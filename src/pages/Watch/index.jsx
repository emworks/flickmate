import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { MovieWatch, PageWrapper, PageHeader, ContentWrapper } from "src/components";
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
        <PageWrapper>
            <PageHeader>
                <h1 className="truncate">
                    <Link to="/">←</Link>&nbsp;{movie.title}
                </h1>
            </PageHeader>
            <ContentWrapper>
                <MovieWatch movieId={movie.id} poster={movie.imgBig} />
            </ContentWrapper>
        </PageWrapper >
    )
}