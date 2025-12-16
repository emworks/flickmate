const API_URL = "https://jsonplaceholder.typicode.com/comments";

/**
 * Сервис для работы с сообщениями чата
 */
export class ChatService {
    /**
     * Загружает сообщения с сервера
     * Используется для демонстрации GET-запроса
     */
    static async getMessages() {
        const response = await fetch(`${API_URL}?postId=1`);
        return response.json();
    }

    /**
     * Отправляет сообщение на сервер
     * Используется для демонстрации POST-запроса
     */
    static async sendMessage(message) {
        return fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(message),
        });
    }
}
