import BaseView from "./base-view.js";
import UserModel from "../models/user-model.js";
import { createMessageChannel } from "../adapters/broadcast-channel-adapter.js";
import { createLocalStorage } from "../adapters/local-storage-adapter.js";

export default class ChatView extends BaseView {
    #messageChannel
    #messageStorage
    #currentUser

    #messages

    constructor(...args) {
        super(...args);

        // чат привязан к фильму
        const channelName = `flickmate_channel_${this._data.id}`;
        this.#messageChannel = createMessageChannel(channelName);

        this.#messageChannel.onMessage((messageData) => {
            if (!messageData) return;
            const message = JSON.parse(messageData);
            this.#addChatMessage(message);
        });

        // история сообщений чата привязана к фильму
        const storageKey = `flickmate_chat_${this._data.id}`;
        this.#messageStorage = createLocalStorage(storageKey);
        this.#messages = this.#messageStorage.value ?? [];

        this.#currentUser = UserModel.getUsername();
    }

    #isMyMessage(sender) {
        return sender === this.#currentUser;
    }

    #createMessageHTML({ sender, text }) {
        const messageClass = `watch-chat-sender${this.#isMyMessage(sender) ? " watch-chat-message-author" : ""}`;
        return `
            <div class="watch-chat-message">
                <span class="${messageClass}">${sender}:&nbsp;</span>
                ${text}
            </div>
        `;
    }

    #sendMessage(messageText) {
        if (!messageText) return;

        const message = { sender: this.#currentUser, text: messageText };
        this.#messageChannel.send(JSON.stringify(message));
        this.#messageStorage.value = [...this.#messages, message];

        this.#addChatMessage(message);
    }

    #addChatMessage(message) {
        this.#messages.push(message);
        this.render();
    }

    #createEmptyPlaceholder() {
        return `
            <div class="chat-empty-state">
                <button class="popcorn" title="Пока никто не написал... щёлкни!">🍿</button>
                <p>Тут пока тихо...</p>
            </div>
        `;
    }

    #createList() {
        if (!this.#messages?.length) {
            return this.#createEmptyPlaceholder();
        }

        return `
            <div class="watch-chat-messages" id="chat-messages">
                ${this.#messages.map(this.#createMessageHTML.bind(this)).join("")}
            </div>
        `
    }

    /** Метод для рендера HTML (обязательный для BaseView) */
    _createInnerHTML() {
        return `
            <div>
                <h2>Чат</h2>
                ${this.#createList()}
                <form class="watch-chat-form" id="chat-form">
                    <input class="chat-input" type="text" placeholder="Написать сообщение..." />
                    <button class="watch-send-btn primary-btn" type="submit">↑</button>
                </form>
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
            const input = this._$el.querySelector(".chat-input");
            this.#sendMessage(input.value);
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

    #scrollToBottom() {
        const messagesContainer = this._$el.querySelector("#chat-messages");
        if (messagesContainer) {
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }
    }

    #focusOnInput() {
        this._$el.querySelector(".chat-input").focus();
    }

    render() {
        super.render();
        this.#scrollToBottom();
        this.#focusOnInput();
    }
}
