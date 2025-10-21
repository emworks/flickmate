import BaseView from "./base-view.js";
import PlayerView from "./player-view.js";
import ChatView from "./chat-view.js";

export default class MovieWatchView extends BaseView {
    /** @type {PlayerView} Плеер */
    playerView
    /** @type {ChatView} Чат */
    chatView

    _createInnerHTML() {
        return `
            <div class="watch-container">
                <section id="watch-player"></section>
                <section id="watch-chat"></section>
            </div>
        `;
    }

    render() {
        super.render();

        // Создаём View плеера
        this.playerView = new PlayerView("#watch-player", this._data);
        this.playerView.render();

        // Создаём View чата
        this.chatView = new ChatView("#watch-chat", this._data);
        this.chatView.render();
    }
}
