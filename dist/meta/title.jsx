"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetaTitle = void 0;
function MetaTitle(_a) {
    var title = _a.title;
    return (<>
      <title>{title}</title>
      <meta key="og-title" property="og:title" content={title}/>
      <meta key="twitter-title" name="twitter:title" content={title}/>
      <meta name="apple-mobile-web-app-title" content={title}/>
    </>);
}
exports.MetaTitle = MetaTitle;
//# sourceMappingURL=title.jsx.map