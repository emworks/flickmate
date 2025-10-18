import BaseView from "./base-view.js";

export default class IndexHeaderView extends BaseView {
    constructor(selector) {
        super(selector);
    }

    /** Метод для рендера HTML (обязательный для BaseView) */
    _createInnerHTML() {
        return "<h1>Каталог фильмов</h1>";
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
