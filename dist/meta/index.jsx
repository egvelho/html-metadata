"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Meta = void 0;
var author_1 = require("./author");
var description_1 = require("./description");
var image_1 = require("./image");
var keywords_1 = require("./keywords");
var misc_1 = require("./misc");
var page_url_1 = require("./page-url");
var title_1 = require("./title");
function Meta(props) {
    return (<>
      <author_1.MetaAuthor author={props.developerName}/>
      <description_1.MetaDescription description={props.description}/>
      <image_1.MetaImage image={props.image}/>
      <keywords_1.MetaKeywords keywords={props.keywords}/>
      <page_url_1.MetaPageUrl url={props.url}/>
      <title_1.MetaTitle title={props.name}/>
      <misc_1.MetaMisc facebookAppId={props.facebookAppId} twitterAt={props.twitterAt} name={props.name} dashColor={props.dashColor} url={props.url}/>
    </>);
}
exports.Meta = Meta;
//# sourceMappingURL=index.jsx.map