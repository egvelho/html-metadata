"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetaTitle = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
function MetaTitle(_a) {
    var title = _a.title;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("title", { key: "title" }, title),
        react_1.default.createElement("meta", { key: "og-title", property: "og:title", content: title }),
        react_1.default.createElement("meta", { key: "twitter-title", name: "twitter:title", content: title }),
        react_1.default.createElement("meta", { key: "apple-mobile-web-app-title", name: "apple-mobile-web-app-title", content: title })));
}
exports.MetaTitle = MetaTitle;
//# sourceMappingURL=title.js.map