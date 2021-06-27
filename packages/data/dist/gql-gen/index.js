var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import gql from 'graphql-tag';
import * as Urql from 'urql';
/** The differents error codes the api will return if needed */
export var ErrorCode;
(function (ErrorCode) {
    ErrorCode["BadRequest"] = "BAD_REQUEST";
    ErrorCode["Forbidden"] = "FORBIDDEN";
    ErrorCode["NotFound"] = "NOT_FOUND";
    ErrorCode["UnableToProcess"] = "UNABLE_TO_PROCESS";
    ErrorCode["Unauthorized"] = "UNAUTHORIZED";
})(ErrorCode || (ErrorCode = {}));
/** The differents error message the api will return if needed */
export var ErrorMessage;
(function (ErrorMessage) {
    ErrorMessage["ForbiddenYouDoNotHaveAccessToThisResource"] = "FORBIDDEN_YOU_DO_NOT_HAVE_ACCESS_TO_THIS_RESOURCE";
    ErrorMessage["ResourceNotFound"] = "RESOURCE_NOT_FOUND";
    ErrorMessage["UnableToProcessRequestDueToClientError"] = "UNABLE_TO_PROCESS_REQUEST_DUE_TO_CLIENT_ERROR";
    ErrorMessage["UnableToProcessRequestDueToServerError"] = "UNABLE_TO_PROCESS_REQUEST_DUE_TO_SERVER_ERROR";
    ErrorMessage["UnauthenticatedPleaseLogin"] = "UNAUTHENTICATED_PLEASE_LOGIN";
})(ErrorMessage || (ErrorMessage = {}));
export var UserByIdDocument = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    query UserById($id: ID!) {\n  userById(id: $id) {\n    ... on User {\n      id\n      username\n    }\n  }\n}\n    "], ["\n    query UserById($id: ID!) {\n  userById(id: $id) {\n    ... on User {\n      id\n      username\n    }\n  }\n}\n    "])));
export function useUserByIdQuery(options) {
    if (options === void 0) { options = {}; }
    return Urql.useQuery(__assign({ query: UserByIdDocument }, options));
}
;
export var AllUsersDocument = gql(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    query AllUsers {\n  allUsers {\n    ... on UsersList {\n      users {\n        id\n        username\n      }\n    }\n  }\n}\n    "], ["\n    query AllUsers {\n  allUsers {\n    ... on UsersList {\n      users {\n        id\n        username\n      }\n    }\n  }\n}\n    "])));
export function useAllUsersQuery(options) {
    if (options === void 0) { options = {}; }
    return Urql.useQuery(__assign({ query: AllUsersDocument }, options));
}
;
var templateObject_1, templateObject_2;
//# sourceMappingURL=index.js.map