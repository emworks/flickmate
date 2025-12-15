
import { useState } from "react";
import { MovieModal } from "src/components";
import styles from "./index.module.css"

/**
 * Компонент списка фильмов
 *
 * Props:
 * - movies: Array — массив объектов фильма
 *
 * Компонент:
 * - Рендерит карточки фильмов
 * - Обрабатывает открытие модалки при клике на карточку
 */
export function MovieList({ movies }) {
    // Если selectedMovieId !== null, открывается модалка
    const [selectedMovieId, setSelectedMovieId] = useState(null)

    return (
        <section className={styles.list}>
            {movies.map(({ id, title, subtitle, img, details }) => (
                <article className={styles.item} key={id} onClick={() => setSelectedMovieId(id)}>
                    <div className={styles.poster}>
                        <img src={img} alt={title} loading="lazy" />
                    </div>
                    <div className={styles.desc}>
                        <h2 className="truncate">{title}</h2>
                        <h3 className="truncate">{subtitle}</h3>
                        <p className="truncate">{details}</p>
                    </div>
                </article>
            ))}
            <MovieModal
                movieId={selectedMovieId}
                isOpen={!!selectedMovieId}
                onClose={() => setSelectedMovieId(null)}
            />
        </section>
    )
}