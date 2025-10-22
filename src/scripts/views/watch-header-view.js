import BaseView from "./base-view.js";

export default class WatchHeaderView extends BaseView {
    /** Метод для рендера HTML (обязательный для BaseView) */
    _createInnerHTML() {
        return `<h1 class="truncate"><a href="index.html">←</a>&nbsp;${this._data.title}</h1>`;
    }
}
