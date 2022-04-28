/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Game.js":
/*!*********************!*\
  !*** ./src/Game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Game\": () => (/* binding */ Game)\n/* harmony export */ });\n/* harmony import */ var _Shape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Shape */ \"./src/Shape.js\");\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ \"./src/util.js\");\n\r\n\r\n\r\n\r\nclass Game {\r\n    constructor(ctx) {\r\n        this.objects = [];\r\n        this.level = 0;\r\n        this.ctx = ctx;\r\n        this.spawnObjects();\r\n        this.bullets = [];\r\n        this.missed = 0;\r\n        this.score = 0;\r\n    }\r\n\r\n    spawnObjects(max = 3) {\r\n        let ctx = this.ctx;\r\n        for (let i = 0; i < max; i++) {\r\n            this.objects.push(this.pickShape());\r\n            // document.getElementById(\"whoosh\").play();\r\n        }\r\n        // let a = UTIL.genRandVec;\r\n        //sampleshapes\r\n        // this.objects.push(new Triangle([800, 800], this.ctx, 'black', { \"h\": 50}, [1, -40]));\r\n        // this.objects.push(new Rectangle([420, 800], this.ctx, \"green\", { \"h\": 20, \"w\": 20}, [0, -40]));\r\n        // this.objects.push(new Circle([100, 800], this.ctx, \"red\", { \"r\": 69 }, [0, 0]));\r\n        // this.objects.push(new Triangle([800, 800], this.ctx, 'black', { \"h\": 50}, a(800)));\r\n        // this.objects.push(new Rectangle([420, 800], this.ctx, \"green\", { \"h\": 20, \"w\": 20}, a(420)));\r\n        // this.objects.push(new Circle([100, 800], this.ctx, \"red\", { \"r\": 69 }, a(100)));\r\n        // this.objects.push(new Triangle(UTIL.genRandPos(), this.ctx, 'black', { \"h\": 50}, a(800)));\r\n        // this.objects.push(new Rectangle(UTIL.genRandPos(), this.ctx, \"green\", { \"h\": 20, \"w\": 20}, a(420)));\r\n        // this.objects.push(new Circle(UTIL.genRandPos(), this.ctx, \"red\", { \"r\": 40 }, a(420)));\r\n        // setTimeout( () => {\r\n        //     document.getElementById(\"whoosh\").play();\r\n        // }, 500)\r\n    }\r\n\r\n    pickShape() {\r\n        let num = Math.floor(Math.random() * 3);\r\n        let randPos = _util__WEBPACK_IMPORTED_MODULE_1__[\"default\"].genRandPos();\r\n        let a = _util__WEBPACK_IMPORTED_MODULE_1__[\"default\"].genRandVec;\r\n        if (num === 0) {\r\n            return new _Shape__WEBPACK_IMPORTED_MODULE_0__.Triangle(randPos, this.ctx, 'green', { \"h\": 50, \"w\": 50}, a(randPos[0]));\r\n        }\r\n        else if (num === 1) {\r\n            return new _Shape__WEBPACK_IMPORTED_MODULE_0__.Circle(randPos, this.ctx, 'red', { \"r\": 50 }, a(randPos[0]));\r\n        }\r\n        else {\r\n            return new _Shape__WEBPACK_IMPORTED_MODULE_0__.Rectangle(randPos, this.ctx, 'black', { \"h\": 50, \"w\": 50}, a(randPos[0]));\r\n        }\r\n    }\r\n\r\n    // draw() {\r\n    //     this.ctx.clearRect(0, 0, 1700, 860);\r\n    //     for (let i = 0; i < this.objects.length; i++) {\r\n    //         this.objects[i].draw();\r\n    //     }\r\n    // }\r\n\r\n    // moveObjects() {\r\n    //     for (let i = 0; i < this.objects.length; i++) {\r\n    //         this.objects[i].move();\r\n    //     }\r\n    // }\r\n\r\n    animate() {\r\n        setInterval( () => {\r\n            this.ctx.clearRect(0, 0, 1700, 860);\r\n            for (let i = 0; i < this.objects.length; i++) {\r\n                this.objects[i].move();\r\n                // this.objects[i].draw();\r\n                this.objects[i].changeVelocity(_util__WEBPACK_IMPORTED_MODULE_1__[\"default\"].GRAVITY);\r\n                \r\n            }\r\n\r\n            for (let i = 0; i < this.bullets.length; i++) {\r\n                for (let k = 0; k < this.objects[i].length; k++) {\r\n                    if (this.bullets[i].collided(this.objects[i])) {\r\n                        this.deleteObject(this.objects[i]);\r\n                    }\r\n                }\r\n            }\r\n\r\n            this.checkShapePositions();\r\n            console.log(this.objects);\r\n\r\n        }, 25)\r\n    }\r\n\r\n    deleteObjects() {\r\n        for (let i = 0; i < this.objects.length; i++) {\r\n            delete(this.objects[i]);\r\n        }\r\n    }\r\n\r\n    deleteObject(object) {\r\n        // this.objects[this.objects.indexOf(object)] = undefined;\r\n        let arr = [];\r\n        for (let i = 0; i < this.objects.length; i++) {\r\n            if (object !== this.objects[i]) {\r\n                arr.push(this.objects[i]);\r\n            }\r\n        }\r\n\r\n        this.objects = arr;\r\n\r\n        if (this.checkLevelCompletion()) {\r\n            let that = this;\r\n            setTimeout( this.newLevel.bind(that), 1500 )\r\n        }\r\n    }\r\n\r\n    checkLevelCompletion() {\r\n        if (this.objects.length === 0) {\r\n            return true;\r\n        }\r\n        else {\r\n            return false;\r\n        }\r\n    }\r\n\r\n    newLevel() {\r\n        this.level += 1;\r\n        this.spawnObjects(this.level + 3);\r\n        let lev = document.getElementById(\"level\");\r\n        lev.innerHTML = `Level: ${this.level}`;\r\n    }\r\n\r\n    checkShapePositions() {\r\n        for (let i = 0; i < this.objects.length; i++) {\r\n            let shape = this.objects[i];\r\n            if (shape.y > 1000) {\r\n                this.missed += 1;\r\n                this.deleteObject(this.objects[i]);\r\n                let missed = document.getElementById(\"missed\");\r\n                missed.innerHTML = `Missed: ${this.missed}`;\r\n            }\r\n        }\r\n    }\r\n\r\n\r\n\r\n\r\n\r\n}\n\n//# sourceURL=webpack://hateshapes/./src/Game.js?");

/***/ }),

/***/ "./src/Shape.js":
/*!**********************!*\
  !*** ./src/Shape.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Bullet\": () => (/* binding */ Bullet),\n/* harmony export */   \"Circle\": () => (/* binding */ Circle),\n/* harmony export */   \"Rectangle\": () => (/* binding */ Rectangle),\n/* harmony export */   \"Shape\": () => (/* binding */ Shape),\n/* harmony export */   \"Triangle\": () => (/* binding */ Triangle)\n/* harmony export */ });\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ \"./src/util.js\");\n\r\n\r\nclass Shape {\r\n    constructor(pos, ctx, color, dimensions, velocity) {\r\n        this.pos = pos;\r\n        this.ctx = ctx;\r\n\r\n        this.color = color;\r\n        this.x = pos[0];\r\n        this.y = pos[1];\r\n        this.w = dimensions[\"w\"];  //width\r\n        this.h = dimensions[\"h\"];  //height\r\n        this.r = dimensions[\"r\"];  //radius\r\n        if (dimensions[\"r\"] === undefined) {\r\n            if (this.h > this.w) {\r\n                this.r = this.h;\r\n            }\r\n            else {\r\n                this.r = this.w;\r\n            }\r\n        }\r\n        this.v = velocity;\r\n    }\r\n\r\n    move() {\r\n        let v = this.v;\r\n        this.x += v[0];\r\n        this.y += v[1];\r\n        this.pos = [this.x, this.y];\r\n        this.draw();\r\n        // console.log(this.pos)\r\n    }\r\n\r\n    changeVelocity(vector) {\r\n        this.v = [this.v[0], this.v[1] + vector];\r\n    }\r\n\r\n}\r\n\r\nclass Rectangle extends Shape {\r\n\r\n    draw() {\r\n        // let ctx = this.ctx;\r\n        this.ctx.fillStyle = this.color;\r\n        this.ctx.fillRect(this.x, this.y, this.w, this.h);\r\n        \r\n    }\r\n}\r\n\r\nclass Circle extends Shape {\r\n    \r\n    draw() {\r\n        \r\n        this.ctx.beginPath();\r\n        this.ctx.arc(this.x, this.y, this.r, 0, 2*Math.PI, false);\r\n        this.ctx.fillStyle = this.color;\r\n        \r\n        this.ctx.fill();\r\n    }\r\n}\r\n\r\nclass Triangle extends Shape {\r\n\r\n    draw() {\r\n        // console.log(this)\r\n        // let ctx = this.ctx;\r\n        let X = this.x;\r\n        let Y = this.y;\r\n        \r\n        let height = this.h * (Math.sqrt(3)/2);\r\n        this.ctx.beginPath();\r\n        this.ctx.moveTo(X, Y);\r\n        this.ctx.lineTo(X+height, Y+height + height/2); \r\n        this.ctx.lineTo(X-height, Y+height + height/2);\r\n        this.ctx.lineTo(X, Y);\r\n        \r\n        this.ctx.fillstyle = this.color;\r\n        this.ctx.fill();\r\n        \r\n    }\r\n}\r\n\r\n\r\nclass Bullet extends Shape {\r\n\r\n    constructor(pos, ctx, color, dimensions, velocity) {\r\n        super(pos, ctx, color, dimensions, velocity);\r\n        console.log(\"bullet made!\")\r\n    }\r\n\r\n    draw() {\r\n\r\n    }\r\n\r\n    collided(object) {\r\n        if (_util__WEBPACK_IMPORTED_MODULE_0__[\"default\"].dist(this.pos, object.pos) < object.r * 3.5) {\r\n            return true;\r\n        }\r\n        else {\r\n            return false;\r\n        }\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://hateshapes/./src/Shape.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Game */ \"./src/Game.js\");\n/* harmony import */ var _Shape__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Shape */ \"./src/Shape.js\");\n\r\n\r\n\r\nwindow.Game = _Game__WEBPACK_IMPORTED_MODULE_0__.Game;\r\nwindow.Shape = _Shape__WEBPACK_IMPORTED_MODULE_1__.Shape; \r\nwindow.Circle = _Shape__WEBPACK_IMPORTED_MODULE_1__.Circle; \r\nwindow.Triangle = _Shape__WEBPACK_IMPORTED_MODULE_1__.Triangle; \r\nwindow.Rectangle = _Shape__WEBPACK_IMPORTED_MODULE_1__.Rectangle;\r\nWindow.Bullet = _Shape__WEBPACK_IMPORTED_MODULE_1__.Bullet;\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", () => {\r\n    \r\n    \r\n    document.getElementById(\"whoosh\").style.display = 'none';\r\n    document.getElementById(\"hitmarker\").style.display = 'none';\r\n    \r\n    let canvas = document.getElementById(\"canvas\");\r\n    let ctx = canvas.getContext('2d');\r\n    let game = new _Game__WEBPACK_IMPORTED_MODULE_0__.Game(ctx);\r\n    let score = document.getElementById(\"score\");\r\n    \r\n    game.animate();\r\n    \r\n    document.addEventListener( \"click\", (e) => {\r\n        let pos = [e.pageX, e.pageY];\r\n        let bullet = new _Shape__WEBPACK_IMPORTED_MODULE_1__.Bullet(pos, ctx, 'white', { r: 10 }, [0, 0]);\r\n        \r\n\r\n        for (let i = 0; i < game.objects.length; i++) {\r\n            if (bullet.collided(game.objects[i])) {\r\n                game.deleteObject(game.objects[i]);\r\n                game.score += 1;\r\n                score.innerHTML = `Score: ${game.score}`;\r\n            }\r\n        }\r\n\r\n        document.getElementById(\"hitmarker\").play()\r\n    });\r\n    // game.deleteObjects();\r\n\r\n\r\n    // let circle = new Circle([100, 420], ctx, \"red\", { \"r\": 69 });\r\n    // circle.draw();\r\n\r\n    // let square = new Rectangle([420, 100], ctx, \"green\", { \"h\": 20, \"w\": 20});\r\n    // square.draw();\r\n    \r\n    // let triangle = new Triangle([420, 420], ctx, 'black', { \"h\": 50}); \r\n    // triangle.draw();\r\n});\n\n//# sourceURL=webpack://hateshapes/./src/index.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet UTIL = {\r\n    genRandNum: function(max) {\r\n        return Math.floor(Math.random() * max);\r\n    },\r\n    COLORS: [\r\n        'red',\r\n        'yellow',\r\n        'blue',\r\n        'green',\r\n        'orange',\r\n        'purple',\r\n        'pink'\r\n    ],\r\n    GRAVITY: 0.8,\r\n    genRandPos: function() {\r\n        return [\r\n            Math.floor(Math.random() * 1700),\r\n            900\r\n        ]\r\n    },\r\n    genRandVec: function(xVal) {\r\n        if (xVal > 850) {\r\n            return [\r\n                Math.floor(Math.random() * -20),\r\n                Math.floor(Math.random() * -20) + -20\r\n            ]\r\n        }\r\n        else {\r\n            return [\r\n                Math.floor(Math.random() * 20),\r\n                Math.floor(Math.random() * -20) + -20\r\n            ]\r\n        }\r\n    },\r\n    dist: function (pos1, pos2) {\r\n        return Math.sqrt(\r\n            Math.pow(pos1[0] - pos2[0], 2) + Math.pow(pos1[1] - pos2[1], 2)\r\n        );\r\n    },\r\n\r\n\r\n\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UTIL);\n\n//# sourceURL=webpack://hateshapes/./src/util.js?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;