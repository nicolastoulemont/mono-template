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
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
import { GET_USERS } from '../graphql/user/queries';
import { isEither, isType } from 'gql-typeguards';
export var changeUserStatus = function (result, args, cache, info) {
    cache.updateQuery({ query: GET_USERS }, function (data) {
        var filteredUsers = data.users.filter(function (user) {
            return isEither(user, ['ActiveUser', 'BannedUser', 'DeletedUser']) &&
                isEither(result.changeUserStatus, ['ActiveUser', 'BannedUser', 'DeletedUser']) &&
                user.id !== result.changeUserStatus.id;
        });
        return __assign(__assign({}, data), { users: __spreadArray(__spreadArray([], filteredUsers), [result.changeUserStatus]) });
    });
};
export var createUser = function (result, args, cache, info) {
    cache.updateQuery({ query: GET_USERS }, function (data) {
        if (isType(result.createUser, 'ActiveUser')) {
            return __assign(__assign({}, data), { users: __spreadArray(__spreadArray([], data.users), [result.createUser]) });
        }
        else {
            return data;
        }
    });
};
export var createPost = function (result, args, cache, info) {
    cache.updateQuery({ query: GET_USERS }, function (data) {
        if (isType(result.createPost, 'Post')) {
            var updatedUsers = data.users.map(function (user) {
                // Post author
                if (isType(user, 'ActiveUser') && user.email === args.authorEmail) {
                    return __assign(__assign({}, user), { posts: [user.posts, result.createPost] });
                }
                else {
                    return user;
                }
            });
            return __assign(__assign({}, data), { users: __spreadArray([], updatedUsers) });
        }
        else {
            return data;
        }
    });
};
//# sourceMappingURL=mutations.js.map