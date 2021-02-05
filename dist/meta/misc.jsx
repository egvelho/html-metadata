"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetaMisc = void 0;
function MetaMisc(_a) {
    var facebookAppId = _a.facebookAppId, twitterAt = _a.twitterAt, url = _a.url, name = _a.name, dashColor = _a.dashColor;
    return (<>
      facebookAppId && <meta property="fb:app_id" content={facebookAppId}/>
      twitterAt && <meta name="twitter:creator" content={twitterAt}/>
      twitterAt && <meta name="twitter:site" content={twitterAt}/>
      <meta name="url" content={url}/>
      <meta property="og:site_name" content={name}/>
      <meta name="application-name" content={name}/>
      <meta name="msapplication-TileColor" content={dashColor}/>
      <meta name="theme-color" content={dashColor}/>
    </>);
}
exports.MetaMisc = MetaMisc;
//# sourceMappingURL=misc.jsx.map