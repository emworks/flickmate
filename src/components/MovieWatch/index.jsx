import { Player, Chat } from "src/components";
import styles from "./index.module.css"

export function MovieWatch({ movieId, poster }) {
    return (
        <div className={styles.container}>
            <Player movieId={movieId} poster={poster} />
            <Chat movieId={movieId} />
        </div>
    )
}
