import { UserService } from "src/services";
import { createMessageChannel } from "src/adapters/broadcast-channel-adapter.js";
import { createLocalStorage } from "src/adapters/local-storage-adapter.js";
import "./Chat.css"

export function Chat() {
    // #messageChannel
    // #messageStorage
    // #currentUser

    // #messages

    // constructor(...args) {
    //     super(...args);

    //     // чат привязан к фильму
    //     const channelName = `flickmate_channel_${this._data.id}`;
    //     this.#messageChannel = createMessageChannel(channelName);

    //     this.#messageChannel.onMessage((messageData) => {
    //         if (!messageData) return;
    //         const message = JSON.parse(messageData);
    //         this.#addChatMessage(message);
    //     });

    //     // история сообщений чата привязана к фильму
    //     const storageKey = `flickmate_chat_${this._data.id}`;
    //     this.#messageStorage = createLocalStorage(storageKey);
    //     this.#messages = this.#messageStorage.value ?? [];

    //     this.#currentUser = UserService.getUsername();
    // }

    // #isMyMessage(sender) {
    //     return sender === this.#currentUser;
    // }

    // #createMessageHTML({ sender, text }) {
    //     const messageClass = `watch-chat-sender${this.#isMyMessage(sender) ? " watch-chat-message-author" : ""}`;
    //     return `
    //         <div className="watch-chat-message">
    //             <span className="${messageClass}">${sender}:&nbsp;</span>
    //             ${text}
    //         </div>
    //     `;
    // }

    // #sendMessage(messageText) {
    //     if (!messageText) return;

    //     const message = { sender: this.#currentUser, text: messageText };
    //     this.#messageChannel.send(JSON.stringify(message));
    //     this.#messageStorage.value = [...this.#messages, message];

    //     this.#addChatMessage(message);
    // }

    // #addChatMessage(message) {
    //     this.#messages.push(message);
    //     this.render();
    // }

    // #createEmptyPlaceholder() {
    //     return `
    //         <div className="chat-empty-state">
    //             <button className="popcorn" title="Пока никто не написал... щёлкни!">🍿</button>
    //             <p>Тут пока тихо...</p>
    //         </div>
    //     `;
    // }

    // #createList() {
    //     if (!this.#messages?.length) {
    //         return this.#createEmptyPlaceholder();
    //     }

    //     return `
    //         <div className="watch-chat-messages" id="chat-messages">
    //             ${this.#messages.map(this.#createMessageHTML.bind(this)).join("")}
    //         </div>
    //     `
    // }

    return (
        <div>
            <h2>Чат</h2>
            {/* ${this.#createList()} */}
            <form className="watch-chat-form" id="chat-form">
                <input className="chat-input" type="text" placeholder="Написать сообщение..." />
                <button className="watch-send-btn primary-btn" type="submit">↑</button>
            </form>
        </div>
    )

    // /**
    //  * Обработчик кликов
    //  * @param {MouseEvent} event
    //  */
    // #handleClicks = (event) => {
    //     const sendBtn = event.target.closest(".watch-send-btn");
    //     if (sendBtn) {
    //         event.preventDefault();
    //         const input = this._$el.querySelector(".chat-input");
    //         this.#sendMessage(input.value);
    //         input.value = "";
    //     }
    // }

    // /** Убирает события перед перерендером (BaseView) */
    // _detachEvents() {
    //     this._$el.removeEventListener("click", this.#handleClicks);
    // }

    // /** Добавляет события после рендера (BaseView) */
    // _attachEvents() {
    //     // Делегирование событий на контейнер
    //     // Позволяет обрабатывать события внутри одной функции
    //     this._$el.addEventListener("click", this.#handleClicks);
    // }

    // #scrollToBottom() {
    //     const messagesContainer = this._$el.querySelector("#chat-messages");
    //     if (messagesContainer) {
    //         messagesContainer.scrollTop = messagesContainer.scrollHeight;
    //     }
    // }

    // #focusOnInput() {
    //     this._$el.querySelector(".chat-input").focus();
    // }

    // render() {
    //     super.render();
    //     this.#scrollToBottom();
    //     this.#focusOnInput();
    // }
}
