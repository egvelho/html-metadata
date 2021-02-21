"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateAssets = void 0;
var tslib_1 = require("tslib");
function generateAssets(_a) {
    var appPath = _a.appPath, outPath = _a.outPath;
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var favicons, fs, path, app, configuration, callback;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (typeof window !== "undefined") {
                        return [2 /*return*/];
                    }
                    console.log("Generating meta assets...");
                    favicons = eval('require("favicons")');
                    fs = eval('require("fs")');
                    path = eval('require("path")');
                    app = JSON.parse(fs.readFileSync(appPath));
                    configuration = {
                        path: "/",
                        appName: app.name,
                        appShortName: app.shortName,
                        appDescription: app.description,
                        developerName: app.developerName,
                        developerURL: app.developerURL,
                        dir: "auto",
                        lang: app.lang,
                        background: app.backgroundColor,
                        theme_color: app.dashColor,
                        appleStatusBarStyle: "default",
                        display: "standalone",
                        orientation: app.orientation,
                        scope: "/",
                        start_url: "/",
                        version: app.version,
                        logging: false,
                        pixel_art: false,
                        loadManifestWithCredentials: false,
                        icons: {
                            android: true,
                            appleIcon: true,
                            appleStartup: true,
                            coast: false,
                            favicons: true,
                            firefox: true,
                            windows: true,
                            yandex: false,
                        },
                    }, callback = function (error, response) {
                        if (error) {
                            console.error(error.message);
                            return;
                        }
                        tslib_1.__spread(response.images, response.files).forEach(function (_a) {
                            var name = _a.name, contents = _a.contents;
                            console.log("Writing to " + outPath + "/" + name + "...");
                            fs.writeFileSync(path.join(outPath, name), contents, "binary");
                        });
                    };
                    return [4 /*yield*/, new Promise(function (resolve) {
                            return favicons(app.iconPath, configuration, function () {
                                var args = [];
                                for (var _i = 0; _i < arguments.length; _i++) {
                                    args[_i] = arguments[_i];
                                }
                                callback.apply(void 0, tslib_1.__spread(args));
                                resolve(undefined);
                            });
                        })];
                case 1:
                    _b.sent();
                    console.log("Assets generation success!");
                    return [2 /*return*/];
            }
        });
    });
}
exports.generateAssets = generateAssets;
//# sourceMappingURL=generate-assets.js.map