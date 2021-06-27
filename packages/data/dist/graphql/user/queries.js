var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import gql from 'graphql-tag';
export var GET_USER_BY_ID = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tquery UserById($id: ID!) {\n\t\tuserById(id: $id) {\n\t\t\t... on User {\n\t\t\t\tid\n\t\t\t\tusername\n\t\t\t}\n\t\t}\n\t}\n"], ["\n\tquery UserById($id: ID!) {\n\t\tuserById(id: $id) {\n\t\t\t... on User {\n\t\t\t\tid\n\t\t\t\tusername\n\t\t\t}\n\t\t}\n\t}\n"])));
export var GET_USERS = gql(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\tquery AllUsers {\n\t\tallUsers {\n\t\t\t... on UsersList {\n\t\t\t\tusers {\n\t\t\t\t\tid\n\t\t\t\t\tusername\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"], ["\n\tquery AllUsers {\n\t\tallUsers {\n\t\t\t... on UsersList {\n\t\t\t\tusers {\n\t\t\t\t\tid\n\t\t\t\t\tusername\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"])));
var templateObject_1, templateObject_2;
//# sourceMappingURL=queries.js.map