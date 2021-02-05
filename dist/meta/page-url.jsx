"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetaPageUrl = void 0;
function MetaPageUrl(_a) {
    var url = _a.url;
    return (<>
      <meta key="og-url" property="og:url" content={url}/>
      <link key="canonical" rel="canonical" href={url}/>
    </>);
}
exports.MetaPageUrl = MetaPageUrl;
//# sourceMappingURL=page-url.jsx.map