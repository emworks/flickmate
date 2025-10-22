import BaseView from "./base-view.js";

export default class PlayerView extends BaseView {
    /** Метод для рендера HTML (обязательный для BaseView) */
    _createInnerHTML() {
        return `
            <div class="player-wrapper" style="background: url(${this._data.imgBig}) center/contain no-repeat;">
                <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/${this._data.id}" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerpolicy="strict-origin-when-cross-origin" 
                    allowfullscreen>
                </iframe>
            </div>
        `;
    }
}