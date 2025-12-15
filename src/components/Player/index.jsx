import styles from "./index.module.css"

/**
 * Компонент видеоплеера
 *
 * Props:
 * - poster: string — ссылка на постер фильма, показывается на фоне плеера
 * - movieId: string — ID видео на YouTube (будет вставлено в iframe)
 *
 * Компонент просто оборачивает iframe YouTube в блок с постером
 */
export function Player({ poster, movieId }) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.player} style={{ background: `url(${poster}) center/contain no-repeat` }}>
                <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${movieId}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen>
                </iframe>
            </div>
        </div>
    )
}