"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetaAuthor = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
function MetaAuthor(_a) {
    var author = _a.author;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("meta", { key: "author", name: "author", content: author })));
}
exports.MetaAuthor = MetaAuthor;
//# sourceMappingURL=author.js.map