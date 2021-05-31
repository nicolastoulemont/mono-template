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
/** User account status */
export var UserStatus;
(function (UserStatus) {
    UserStatus["Active"] = "ACTIVE";
    UserStatus["Banned"] = "BANNED";
    UserStatus["Deleted"] = "DELETED";
})(UserStatus || (UserStatus = {}));
export var CreatePostDocument = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    mutation CreatePost($title: String!, $content: String, $authorEmail: String!) {\n  createPost(title: $title, content: $content, authorEmail: $authorEmail) {\n    ... on Post {\n      id\n      title\n    }\n    ... on InvalidArgumentsError {\n      code\n      message\n      invalidArguments {\n        key\n        message\n      }\n    }\n  }\n}\n    "], ["\n    mutation CreatePost($title: String!, $content: String, $authorEmail: String!) {\n  createPost(title: $title, content: $content, authorEmail: $authorEmail) {\n    ... on Post {\n      id\n      title\n    }\n    ... on InvalidArgumentsError {\n      code\n      message\n      invalidArguments {\n        key\n        message\n      }\n    }\n  }\n}\n    "])));
export function useCreatePostMutation() {
    return Urql.useMutation(CreatePostDocument);
}
;
export var CreateUserDocument = gql(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    mutation CreateUser($name: String!, $email: String!) {\n  createUser(name: $name, email: $email) {\n    ... on ActiveUser {\n      id\n      name\n      status\n      email\n      posts {\n        id\n        title\n      }\n    }\n    ... on UserAuthenticationError {\n      code\n      message\n    }\n    ... on InvalidArgumentsError {\n      code\n      message\n      invalidArguments {\n        key\n        message\n      }\n    }\n  }\n}\n    "], ["\n    mutation CreateUser($name: String!, $email: String!) {\n  createUser(name: $name, email: $email) {\n    ... on ActiveUser {\n      id\n      name\n      status\n      email\n      posts {\n        id\n        title\n      }\n    }\n    ... on UserAuthenticationError {\n      code\n      message\n    }\n    ... on InvalidArgumentsError {\n      code\n      message\n      invalidArguments {\n        key\n        message\n      }\n    }\n  }\n}\n    "])));
export function useCreateUserMutation() {
    return Urql.useMutation(CreateUserDocument);
}
;
export var ChangeUserStatusDocument = gql(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    mutation ChangeUserStatus($status: UserStatus!, $id: Int!) {\n  changeUserStatus(status: $status, id: $id) {\n    ... on Node {\n      id\n    }\n    ... on User {\n      name\n      status\n      ... on ActiveUser {\n        email\n        posts {\n          id\n          title\n        }\n      }\n      ... on DeletedUser {\n        deletedAt\n      }\n      ... on BannedUser {\n        banReason\n      }\n    }\n    ... on UserAuthenticationError {\n      code\n      message\n    }\n    ... on InvalidArgumentsError {\n      code\n      message\n    }\n    ... on NotFoundError {\n      code\n      message\n    }\n  }\n}\n    "], ["\n    mutation ChangeUserStatus($status: UserStatus!, $id: Int!) {\n  changeUserStatus(status: $status, id: $id) {\n    ... on Node {\n      id\n    }\n    ... on User {\n      name\n      status\n      ... on ActiveUser {\n        email\n        posts {\n          id\n          title\n        }\n      }\n      ... on DeletedUser {\n        deletedAt\n      }\n      ... on BannedUser {\n        banReason\n      }\n    }\n    ... on UserAuthenticationError {\n      code\n      message\n    }\n    ... on InvalidArgumentsError {\n      code\n      message\n    }\n    ... on NotFoundError {\n      code\n      message\n    }\n  }\n}\n    "])));
export function useChangeUserStatusMutation() {
    return Urql.useMutation(ChangeUserStatusDocument);
}
;
export var UserByIdDocument = gql(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    query UserById($id: ID!) {\n  userById(id: $id) {\n    ... on Node {\n      id\n    }\n    ... on User {\n      name\n      status\n      ... on ActiveUser {\n        email\n        posts {\n          id\n          title\n        }\n      }\n      ... on DeletedUser {\n        deletedAt\n      }\n      ... on BannedUser {\n        banReason\n      }\n    }\n  }\n}\n    "], ["\n    query UserById($id: ID!) {\n  userById(id: $id) {\n    ... on Node {\n      id\n    }\n    ... on User {\n      name\n      status\n      ... on ActiveUser {\n        email\n        posts {\n          id\n          title\n        }\n      }\n      ... on DeletedUser {\n        deletedAt\n      }\n      ... on BannedUser {\n        banReason\n      }\n    }\n  }\n}\n    "])));
export function useUserByIdQuery(options) {
    if (options === void 0) { options = {}; }
    return Urql.useQuery(__assign({ query: UserByIdDocument }, options));
}
;
export var UsersDocument = gql(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    query Users {\n  users {\n    ... on Node {\n      id\n    }\n    ... on User {\n      name\n      status\n      ... on ActiveUser {\n        email\n        posts {\n          id\n          title\n        }\n      }\n      ... on DeletedUser {\n        deletedAt\n      }\n      ... on BannedUser {\n        banReason\n      }\n    }\n  }\n}\n    "], ["\n    query Users {\n  users {\n    ... on Node {\n      id\n    }\n    ... on User {\n      name\n      status\n      ... on ActiveUser {\n        email\n        posts {\n          id\n          title\n        }\n      }\n      ... on DeletedUser {\n        deletedAt\n      }\n      ... on BannedUser {\n        banReason\n      }\n    }\n  }\n}\n    "])));
export function useUsersQuery(options) {
    if (options === void 0) { options = {}; }
    return Urql.useQuery(__assign({ query: UsersDocument }, options));
}
;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=index.js.map