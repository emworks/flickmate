import BaseView from "../views/base-view.js";
import { createMessageChannel } from "../adapters/broadcast-channel-adapter.js";
import UserModel from "../models/user-model.js";

export default class MovieWatchView extends BaseView {
    #messageChannel
    #currentUser
    #messages = []

    constructor(selector, initialData = {}) {
        super(selector, initialData);

        // чат должен быть привязан к фильму
        const channelName = `flickmate_channel_${this._data.id}`;
        this.#messageChannel = createMessageChannel(channelName);

        this.#messageChannel.onMessage((messageData) => {
            if (!messageData) return;
            const message = JSON.parse(messageData);
            this.#addChatMessage(message);
        });

        this.#currentUser = UserModel.getUsername();
    }

    sendMessage(messageText) {
        if (!messageText) return;
        const message = { sender: this.#currentUser, text: messageText };
        this.#messageChannel.send(JSON.stringify(message));
        this.#addChatMessage(message);
    }

    #addChatMessage(message) {
        this.#messages.push(message);
        this.render();
    }

    #createMessageHTML({ sender, text }) {
        const isMyMessage = sender === this.#currentUser;
        return `
            <div class="watch-chat-message">
                <span class="watch-chat-sender${isMyMessage ? " watch-chat-message-author" : ""}">${sender}:&nbsp;</span>
                ${text}
            </div>
        `;
    }

    _createInnerHTML() {
        return `
            <div class="watch-container">
                <div class="watch-player">
                    <video controls src="movie.mp4"></video>
                </div>
                <div class="watch-chat">
                    <h2>Чат</h2>
                    <div class="watch-chat-messages" id="chat-messages">
                        ${this.#messages.map(this.#createMessageHTML.bind(this)).join("")}
                    </div>
                    <form class="watch-chat-form" id="chat-form">
                        <input class="chat-input" type="text" placeholder="Написать сообщение..." />
                        <button class="watch-send-btn primary-btn" type="submit">↑</button>
                    </form>
                </div>
            </div>
        `;
    }

    /**
     * Обработчик кликов
     * @param {MouseEvent} event
     */
    #handleClicks = (event) => {
        const sendBtn = event.target.closest(".watch-send-btn");
        if (sendBtn) {
            event.preventDefault();
            const input = document.querySelector(".chat-input");
            this.sendMessage(input.value);
            input.value = "";
        }
    }

    /** Убирает события перед перерендером (BaseView) */
    _detachEvents() {
        this._$el.removeEventListener("click", this.#handleClicks);
    }

    /** Добавляет события после рендера (BaseView) */
    _attachEvents() {
        // Делегирование событий на контейнер
        // Позволяет обрабатывать события внутри одной функции
        this._$el.addEventListener("click", this.#handleClicks);
    }

    render() {
        super.render();
        const chat = document.querySelector(".watch-chat");
        chat.scrollTop = chat.scrollHeight;
        chat.querySelector(".chat-input").focus();
    }
}
