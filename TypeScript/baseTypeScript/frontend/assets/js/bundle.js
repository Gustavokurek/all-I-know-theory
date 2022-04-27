/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/A034-exercicio-video/A034-exercicio-video.ts":
/*!**********************************************************!*\
  !*** ./src/A034-exercicio-video/A034-exercicio-video.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class VideoPlayer {
    constructor(videoElements) {
        this.VideoPlayer = videoElements.VideoPlayer;
        this.ButtonPlay = videoElements.ButtonPlay;
        this.ButtonPause = videoElements.ButtonPause;
    }
    play() {
        this.ButtonPlay.addEventListener('click', () => {
            if (this.VideoPlayer.paused) {
                this.VideoPlayer.play();
                this.ButtonPlay.innerText = 'Pause';
            }
            else {
                this.VideoPlayer.pause();
                this.ButtonPlay.innerText = 'Play';
            }
        });
    }
    pause() {
        this.ButtonPause.addEventListener('click', () => {
            this.VideoPlayer.currentTime = 0;
            this.VideoPlayer.pause();
            this.ButtonPlay.innerText = 'Play';
        });
    }
    init() {
        this.play();
        this.pause();
    }
}
exports["default"] = VideoPlayer;
const video = new VideoPlayer({
    VideoPlayer: document.querySelector('.video'),
    ButtonPlay: document.querySelector('.play'),
    ButtonPause: document.querySelector('.stop'),
});
video.init();


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!*****************************************!*\
  !*** ./src/A019-exercicio/exercicio.ts ***!
  \*****************************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ../A034-exercicio-video/A034-exercicio-video */ "./src/A034-exercicio-video/A034-exercicio-video.ts");

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map