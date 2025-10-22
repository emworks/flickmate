export default class LocalStorageAdapter {
    #key

    constructor(storageKey) {
        this.#key = storageKey;
    }

    get value() {
        try {
            const data = localStorage.getItem(this.#key);
            return JSON.parse(data);
        } catch (err) {
            console.error("Ошибка чтения из localStorage:", err);
        }
    }

    set value(data) {
        if (data === null) {
            localStorage.removeItem(this.#key);
            return;
        }

        try {
            localStorage.setItem(this.#key, JSON.stringify(data));
        } catch (err) {
            console.error("Ошибка сохранения в localStorage:", err);
        }
    }
}

/** Фабрика для создания локального хранилища */
export const createLocalStorage = (storageKey) => new LocalStorageAdapter(storageKey);
