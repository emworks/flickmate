// Базовый класс для View-компонентов –
// содержит общие методы рендера и работы с событиями

export default class BaseView {
    _$el
    _data

    constructor(selector, initialData = {}) {
        this._$el = document.querySelector(selector);
        this._data = initialData;
    }

    _createInnerHTML() {
        throw new Error("Method _createInnerHTML() must be implemented");
    }

    _detachEvents() {
        throw new Error("Method _detachEvents() must be implemented");
    }

    _attachEvents() {
        throw new Error("Method _attachEvents() must be implemented");
    }

    render() {
        this._detachEvents();
        const innerHTML = this._createInnerHTML();
        this._$el.innerHTML = innerHTML;
        this._attachEvents();
    }
}