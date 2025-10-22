/**
 * Базовый класс для всех View-компонентов.
 * Содержит общие методы рендера и управления событиями.
 * 
 * Примечание: методы _createInnerHTML, _attachEvents и _detachEvents
 * должны быть реализованы в наследниках, иначе будет ошибка.
 */
export default class BaseView {
    /** @type {HTMLElement} Элемент контейнера, куда рендерится контент */
    _$el
    /** @type {any} Данные для отображения в компоненте */
    _data

    /**
     * @param {string} selector - CSS-селектор контейнера в DOM
     * @param {any} initialData - Начальные данные для компонента
     */
    constructor(selector, initialData = {}) {
        this._$el = document.querySelector(selector);

        if (!this._$el) {
            throw new Error("Element is not found");
        }

        this._data = initialData;
    }

    /**
     * Метод должен вернуть HTML-контент компонента.
     * Должен быть реализован в наследнике.
     * @returns {string} HTML-код компонента
     */
    _createInnerHTML() {
        throw new Error("Method _createInnerHTML() must be implemented");
    }

    /**
     * Метод для удаления событий перед перерендером.
     * Может быть реализован в наследнике.
     */
    _detachEvents() {
        return;
    }

    /**
     * Метод для установки событий после рендера.
     * Может быть реализован в наследнике.
     */
    _attachEvents() {
        return;
    }

    /**
     * Основной метод рендера компонента.
     * Сначала удаляет старые события, затем создаёт HTML,
     * затем вешает новые события.
     */
    render() {
        this._detachEvents();
        const innerHTML = this._createInnerHTML();
        this._$el.innerHTML = innerHTML;
        this._attachEvents();
    }
}