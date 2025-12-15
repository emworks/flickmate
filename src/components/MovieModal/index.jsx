
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { MovieService } from "src/services";
import styles from "./index.module.css"

/**
 * Компонент модального окна фильма
 * 
 * Props:
 * - movieId: string | undefined — id фильма для отображения
 * - isOpen: boolean — открыта ли модалка
 * - onClose: function — функция закрытия модалки
 */
export function MovieModal({ movieId, isOpen, onClose }) {
    const [movie, setMovie] = useState({})
    // Ref для управления нативным <dialog>
    const dialogRef = useRef(null)

    // Получение данных фильма при смене movieId
    useEffect(() => {
        if (movieId) {
            const movie = MovieService.getById(movieId);
            setMovie(movie);
        } else {
            setMovie({});
        }
    }, [movieId]);

    // Открытие/закрытие нативного <dialog> при изменении isOpen
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

    // Если movie нет — не рендерим ничего
    if (!movie) return null;

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
                            {!movie.metadata?.length && <p>Нет информации</p>}
                            {/* Информация о фильме (если есть) */}
                            {!!movie.metadata?.length && (
                                <ul>
                                    {movie.metadata.map(({ name, value }) => (
                                        <li key={name}>
                                            <span>{name}:</span> <span>{value}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                        <menu>
                            <button className="secondary-btn" onClick={showSettings}>
                                Настройки сеанса
                            </button>
                            {/* Link из react-router-dom для навигации без перезагрузки */}
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
