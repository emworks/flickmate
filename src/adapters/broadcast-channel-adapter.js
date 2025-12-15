export default class BroadcastChannelAdapter {
    #channel

    constructor(channelName) {
        try {
            this.#channel = new BroadcastChannel(channelName);
        } catch (err) {
            console.error("Ошибка создания Broadcast Channel:", err);
        }

    }

    /**
     * Отправка сообщения
     * @param {any} message
     */
    send(message) {
        try {
            this.#channel.postMessage(message);
        } catch (err) {
            console.error("Ошибка отправки сообщения:", err);
        }
    }

    /**
     * Подписка на новые сообщения
     * @param {function(any):void} callback
     */
    onMessage(callback) {
        try {
            this.#channel.onmessage = (event) => callback(event.data);
        } catch (err) {
            console.error("Ошибка подписки на новые сообщения:", err);
        }
    }

    close() {
        this.#channel.close();
    }
}

/** Фабрика для создания канала сообщений */
export const createMessageChannel = (channelName) => new BroadcastChannelAdapter(channelName);