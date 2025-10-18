export default class BroadcastChannelAdapter {
    #channel

    constructor(channelName) {
        this.#channel = new BroadcastChannel(channelName);
    }

    /**
     * Отправка сообщения
     * @param {any} message
     */
    send(message) {
        this.#channel.postMessage(message);
    }

    /**
     * Подписка на новые сообщения
     * @param {function(any):void} callback
     */
    onMessage(callback) {
        this.#channel.onmessage = (event) => callback(event.data);
    }
}

/** Фабрика для создания канала сообщений */
export const createMessageChannel = (channelName) => new BroadcastChannelAdapter(channelName);