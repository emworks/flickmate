
import { createMovieModal } from "src/components";
import { MovieService } from "src/services";
import { Link } from "react-router-dom";
import styles from "./index.module.css"

/**
 * Класс для отображения списка фильмов.
 * Рендерит карточки фильмов и обрабатывает открытие модалки при клике.
 */
export function MovieList({ movies }) {
    /**
     * Генерирует HTML для одной карточки фильма
     * @param {Object} movie - Объект фильма
     * @returns {string} HTML-код карточки
     */
    // console.log(styles)
    const createItem = ({ id, title, subtitle, img, details }) => {
        return (
            <article className={styles.item} key={id}>
                <Link to={`/watch/${encodeURIComponent(id)}`} data-modal-open data-id={id}>
                    <div className={styles.poster}>
                        <img src={img} alt={title} loading="lazy" />
                    </div>
                    <div className={styles.desc}>
                        <h2 className="truncate">{title}</h2>
                        <h3 className="truncate">{subtitle}</h3>
                        <p className="truncate">{details}</p>
                    </div>
                </Link>
            </article>
        )
    }

    return (
        <section className={styles.list}>
            {movies.map(createItem)}
            <dialog id="movie-modal" aria-labelledby="movie-modal-title" aria-modal="true"></dialog>
        </section>
    )

    // /**
    //  * Обработчик клика на карточке фильма.
    //  * Делегирование: ищет ближайший элемент с data-modal-open
    //  * и открывает соответствующую модалку.
    //  * @param {MouseEvent} event
    //  */
    // #handleModal = (event) => {
    //     event.preventDefault();

    //     // Используем event.target.closest('[data-modal-open]')
    //     // чтобы найти ближайший элемент с атрибутом data-modal-open
    //     // даже если кликнули по вложенному тегу внутри карточки
    //     const movieItem = event.target.closest("[data-modal-open]");
    //     if (movieItem) {
    //         const movieId = movieItem.dataset.id;
    //         const movie = MovieService.getById(movieId);
    //         this.#movieModal.open(movie);
    //     }
    // }

    // render() {
    //     super.render();

    //     // Создаём View модалки детального просмотра фильма
    //     this.#movieModal = createMovieModal();
    // }
}