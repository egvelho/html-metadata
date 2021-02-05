"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetaMisc = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
function MetaMisc(_a) {
    var facebookAppId = _a.facebookAppId, twitterAt = _a.twitterAt, url = _a.url, name = _a.name, dashColor = _a.dashColor;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        "facebookAppId && ",
        react_1.default.createElement("meta", { property: "fb:app_id", content: facebookAppId }),
        "twitterAt && ",
        react_1.default.createElement("meta", { name: "twitter:creator", content: twitterAt }),
        "twitterAt && ",
        react_1.default.createElement("meta", { name: "twitter:site", content: twitterAt }),
        react_1.default.createElement("meta", { name: "url", content: url }),
        react_1.default.createElement("meta", { property: "og:site_name", content: name }),
        react_1.default.createElement("meta", { name: "application-name", content: name }),
        react_1.default.createElement("meta", { name: "msapplication-TileColor", content: dashColor }),
        react_1.default.createElement("meta", { name: "theme-color", content: dashColor })));
}
exports.MetaMisc = MetaMisc;
//# sourceMappingURL=misc.js.map