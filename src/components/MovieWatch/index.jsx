import { Player, Chat } from "src/components";
import styles from "./index.module.css"

export function MovieWatch({ movieId, poster }) {
    return (
        <div className={styles.container}>
            <section id="watch-player">
                <Player movieId={movieId} poster={poster} />
            </section>
            <section id="watch-chat">
                <Chat movieId={movieId} />
            </section>
        </div>
    )
}
