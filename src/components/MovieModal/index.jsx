
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { MovieService } from "src/services";
import styles from "./index.module.css"

/**
 * Класс модального окна фильма.
 * Отвечает за отображение деталей фильма и работу с кнопками внутри модалки.
 */
export function MovieModal({ movieId, isOpen, onClose }) {
    const [movie, setMovie] = useState({})
    const dialogRef = useRef(null);

    useEffect(() => {
        if (movieId) {
            const movie = MovieService.getById(movieId);
            setMovie(movie);
        } else {
            setMovie({});
        }
    }, [movieId]);

    // Открытие/закрытие нативного <dialog>
    useEffect(() => {
        const dialog = dialogRef.current;
        if (!dialog) return;

        if (isOpen && !dialog.open) dialog.showModal();
        if (!isOpen && dialog.open) dialog.close();
    }, [isOpen]);

    // Обработчик закрытия диалога (клик вне модалки)
    const handleCancel = (e) => {
        e.preventDefault(); // чтобы не закрывалось через ESC автоматически
        onClose();
    };

    if (!movie) return null;

    const createMetadataList = () => {
        if (!movie.metadata?.length) return <p>Нет информации</p>;

        return (
            <ul>
                {movie.metadata.map(({ name, value }) => (
                    <li key={name}>
                        <span>{name}:</span> <span>{value}</span>
                    </li>
                ))}
            </ul>
        );
    };

    /** TODO: Показ уведомления о настройках (заглушка) */
    const showSettings = () => {
        alert("Settings are not implemented");
    }

    return (
        <dialog ref={dialogRef} onCancel={handleCancel} aria-labelledby="movie-modal-title" aria-modal="true">
            <div className={styles.wrapper}>
                <header className={styles.header}>
                    <h3>Выбор фильма</h3>
                    <button className={styles.closeBtn} onClick={onClose}>×</button>
                </header>

                <section className={styles.body}>
                    <div className={styles.poster}>
                        <img src={movie.imgBig} alt={movie.title} loading="lazy" />
                    </div>

                    <div className={styles.content}>
                        <div>
                            <h2 id="movie-modal-title">{movie.title}</h2>
                            {createMetadataList()}
                        </div>

                        <menu>
                            <button className="secondary-btn" onClick={showSettings}>
                                Настройки сеанса
                            </button>

                            <Link
                                className="primary-btn"
                                to={`/watch/${encodeURIComponent(movieId)}`}
                            >
                                Смотреть вместе →
                            </Link>
                        </menu>
                    </div>
                </section>
            </div>
        </dialog>
    );
}
