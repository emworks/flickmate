import BaseView from "./base-view.js";

export default class PlayerView extends BaseView {
    /** Метод для рендера HTML (обязательный для BaseView) */
    _createInnerHTML() {
        return `<video controls src="movie.mp4"></video>`;
    }
}
