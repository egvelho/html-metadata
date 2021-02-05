"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetaDescription = void 0;
function MetaDescription(_a) {
    var description = _a.description;
    return (<>
      <meta key="og-description" property="og:description" content={description}/>
      <meta key="twitter-description" name="twitter:description" content={description}/>
      <meta name="twitter:image:alt" content={description}/>
      <meta key="description" name="description" content={description}/>
    </>);
}
exports.MetaDescription = MetaDescription;
//# sourceMappingURL=description.jsx.map