"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetaImage = void 0;
function MetaImage(_a) {
    var image = _a.image;
    return (<>
      <meta name="twitter:image" content={image}/>
      <meta property="og:image" content={image}/>
    </>);
}
exports.MetaImage = MetaImage;
//# sourceMappingURL=image.jsx.map