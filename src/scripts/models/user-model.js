// генерируем имя пользователя
// определяем функцию для генерации имени пользователя
// и сразу же её вызываем, записывая значение в переменную
const username = (() => {
    const adjectives = ["Смешной", "Быстрый", "Ловкий", "Солнечный", "Тихий"];
    const nouns = ["Кот", "Пёс", "Лис", "Медведь", "Ёж"];
    
    const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
    const noun = nouns[Math.floor(Math.random() * nouns.length)];
    const number = Math.floor(Math.random() * 1000); // добавляем число для уникальности

    return `${adj}${noun}${number}`;
})();

/**
 * Класс пользователя.
 * Отвечает за работу с данными о пользователе.
 */
export default class UserModel {
    /**
     * Возвращает имя пользователя
     * @returns {string}
     */
    static getUsername() {
        return username; // заглушка
    }
}