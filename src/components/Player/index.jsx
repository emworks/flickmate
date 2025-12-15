import styles from "./index.module.css"

export function Player({ poster, movieId }) {
    return (
        <div className={styles.wrapper} style={{ background: `url(${poster}) center/contain no-repeat` }}>
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
    )
}