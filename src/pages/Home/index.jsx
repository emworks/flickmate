import { useState, useEffect } from "react";
import { MovieList, PageWrapper, PageHeader, ContentWrapper } from "src/components";
import { MovieService } from "src/services";

/**
 * Компонент главной страницы приложения.
 * Отвечает за инициализацию и рендер списка фильмов.
 */
export function HomePage() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        // Получаем все фильмы из модели
        MovieService.getAll().then((data) => {
            setMovies(data);
        }).catch(() => {
            // TODO: Добавить обработку ошибки
        });
    }, [])

    return (
        <PageWrapper>
            <PageHeader>
                <h1 className="truncate">Каталог фильмов</h1>
            </PageHeader>
            <ContentWrapper>
                <MovieList movies={movies} />
            </ContentWrapper>
        </PageWrapper>
    )
}