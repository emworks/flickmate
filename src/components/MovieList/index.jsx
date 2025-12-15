
import { useState } from "react";
import { MovieModal } from "src/components";
import styles from "./index.module.css"

/**
 * Класс для отображения списка фильмов.
 * Рендерит карточки фильмов и обрабатывает открытие модалки при клике.
 */
export function MovieList({ movies }) {
    const [selectedMovieId, setSelectedMovieId] = useState(null)

    /**
     * Генерирует HTML для одной карточки фильма
     * @param {Object} movie - Объект фильма
     * @returns {string} HTML-код карточки
     */
    const createItem = ({ id, title, subtitle, img, details }) => {
        return (
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
        )
    }

    return (
        <section className={styles.list}>
            {movies.map(createItem)}
            <MovieModal
                movieId={selectedMovieId}
                isOpen={!!selectedMovieId}
                onClose={() => setSelectedMovieId(null)}
            />
        </section>
    )
}