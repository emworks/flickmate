import BaseView from "./base-view.js";

export default class IndexHeaderView extends BaseView {
    /** Метод для рендера HTML (обязательный для BaseView) */
    _createInnerHTML() {
        return "<h1>Каталог фильмов</h1>";
    }
}
