import { Player, Chat } from "src/components";
import "./MovieWatch.css"

export function MovieWatch({ movieId, poster }) {
    return (
        <div className="watch-container">
            <section id="watch-player">
                <Player movieId={movieId} poster={poster} />
            </section>
            <section id="watch-chat">
                <Chat movieId={movieId} />
            </section>
        </div>
    )
}
