import BaseView from "./base-view.js";

export default class WatchHeaderView extends BaseView {
    constructor(selector, initialData = {}) {
        super(selector, initialData);
    }

    /** Метод для рендера HTML (обязательный для BaseView) */
    _createInnerHTML() {
        return `<h1><a href="index.html">←</a>&nbsp;${this._data.title}</h1>`;
    }

    /** Убирает события перед перерендером (BaseView) */
    _detachEvents() {
        return;
    }

    /** Добавляет события после рендера (BaseView) */
    _attachEvents() {
        return;
    }
}
