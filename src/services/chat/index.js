import stringToNumberInRange from "src/utils/stringToNumberInRange"

const API_URL = "https://jsonplaceholder.typicode.com/comments";

/**
 * Сервис для работы с сообщениями чата
 */
export class ChatService {
    /**
     * Загружает сообщения с сервера
     * Используется для демонстрации GET-запроса
     */
    static async getMessages(movieId) {
        // В jsonplaceholder всего 100 posts,
        // поэтому для использования movieId в качестве postId
        // генерируем на основе movieId число от 1 до 100
        const id = stringToNumberInRange(movieId, 1, 100)
        const response = await fetch(`${API_URL}?postId=${id}`);
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
