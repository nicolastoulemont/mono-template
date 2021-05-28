var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import gql from 'graphql-tag';
export var CREATE_POST = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tmutation CreatePost($title: String!, $content: String, $authorEmail: String!) {\n\t\tcreatePost(title: $title, content: $content, authorEmail: $authorEmail) {\n\t\t\t... on Post {\n\t\t\t\tid\n\t\t\t\ttitle\n\t\t\t}\n\t\t\t... on InvalidArgumentsError {\n\t\t\t\tcode\n\t\t\t\tmessage\n\t\t\t\tinvalidArguments {\n\t\t\t\t\tkey\n\t\t\t\t\tmessage\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"], ["\n\tmutation CreatePost($title: String!, $content: String, $authorEmail: String!) {\n\t\tcreatePost(title: $title, content: $content, authorEmail: $authorEmail) {\n\t\t\t... on Post {\n\t\t\t\tid\n\t\t\t\ttitle\n\t\t\t}\n\t\t\t... on InvalidArgumentsError {\n\t\t\t\tcode\n\t\t\t\tmessage\n\t\t\t\tinvalidArguments {\n\t\t\t\t\tkey\n\t\t\t\t\tmessage\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"])));
var templateObject_1;
//# sourceMappingURL=mutation.js.map