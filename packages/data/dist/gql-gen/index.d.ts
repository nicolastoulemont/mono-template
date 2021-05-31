import * as Urql from 'urql';
export declare type Maybe<T> = T | null;
export declare type Exact<T extends {
    [key: string]: unknown;
}> = {
    [K in keyof T]: T[K];
};
export declare type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>;
};
export declare type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>;
};
export declare type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export declare type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
    DateTime: any;
};
export declare type ActiveUser = Node & User & {
    __typename: 'ActiveUser';
    email?: Maybe<Scalars['String']>;
    /** GUID for a resource */
    id?: Maybe<Scalars['Int']>;
    name?: Maybe<Scalars['String']>;
    posts?: Maybe<Array<Maybe<Post>>>;
    status?: Maybe<UserStatus>;
};
export declare type BannedUser = Node & User & {
    __typename: 'BannedUser';
    banReason?: Maybe<Scalars['String']>;
    /** GUID for a resource */
    id?: Maybe<Scalars['Int']>;
    name?: Maybe<Scalars['String']>;
    status?: Maybe<UserStatus>;
};
export declare type DeletedUser = Node & User & {
    __typename: 'DeletedUser';
    deletedAt?: Maybe<Scalars['DateTime']>;
    /** GUID for a resource */
    id?: Maybe<Scalars['Int']>;
    name?: Maybe<Scalars['String']>;
    status?: Maybe<UserStatus>;
};
/** The differents error codes the api will return if needed */
export declare enum ErrorCode {
    BadRequest = "BAD_REQUEST",
    Forbidden = "FORBIDDEN",
    NotFound = "NOT_FOUND",
    UnableToProcess = "UNABLE_TO_PROCESS",
    Unauthorized = "UNAUTHORIZED"
}
/** The differents error message the api will return if needed */
export declare enum ErrorMessage {
    ForbiddenYouDoNotHaveAccessToThisResource = "FORBIDDEN_YOU_DO_NOT_HAVE_ACCESS_TO_THIS_RESOURCE",
    ResourceNotFound = "RESOURCE_NOT_FOUND",
    UnableToProcessRequestDueToClientError = "UNABLE_TO_PROCESS_REQUEST_DUE_TO_CLIENT_ERROR",
    UnableToProcessRequestDueToServerError = "UNABLE_TO_PROCESS_REQUEST_DUE_TO_SERVER_ERROR",
    UnauthenticatedPleaseLogin = "UNAUTHENTICATED_PLEASE_LOGIN"
}
export declare type InvalidArgument = {
    __typename: 'InvalidArgument';
    key: Scalars['String'];
    message: Scalars['String'];
};
export declare type InvalidArgumentsError = {
    __typename: 'InvalidArgumentsError';
    code: ErrorCode;
    invalidArguments: Array<Maybe<InvalidArgument>>;
    message: ErrorMessage;
};
export declare type Mutation = {
    __typename: 'Mutation';
    changeUserStatus?: Maybe<UserResult>;
    createPost?: Maybe<PostResult>;
    createUser?: Maybe<UserResult>;
};
export declare type MutationChangeUserStatusArgs = {
    id: Scalars['Int'];
    status: UserStatus;
};
export declare type MutationCreatePostArgs = {
    authorEmail: Scalars['String'];
    content?: Maybe<Scalars['String']>;
    title: Scalars['String'];
};
export declare type MutationCreateUserArgs = {
    email: Scalars['String'];
    name: Scalars['String'];
};
export declare type Node = {
    /** GUID for a resource */
    id?: Maybe<Scalars['Int']>;
};
export declare type NotFoundError = {
    __typename: 'NotFoundError';
    code: ErrorCode;
    message: ErrorMessage;
};
export declare type Post = Node & {
    __typename: 'Post';
    author?: Maybe<User>;
    content?: Maybe<Scalars['String']>;
    createdAt?: Maybe<Scalars['DateTime']>;
    /** GUID for a resource */
    id?: Maybe<Scalars['Int']>;
    published?: Maybe<Scalars['Boolean']>;
    title?: Maybe<Scalars['String']>;
    updatedAt?: Maybe<Scalars['DateTime']>;
};
/** Return a post and post related errors */
export declare type PostResult = InvalidArgumentsError | Post | UserAuthenticationError;
export declare type Query = {
    __typename: 'Query';
    userById?: Maybe<UserResult>;
    users?: Maybe<Array<Maybe<UserResult>>>;
};
export declare type QueryUserByIdArgs = {
    id: Scalars['ID'];
};
export declare type UnableToProcessError = {
    __typename: 'UnableToProcessError';
    code: ErrorCode;
    message: ErrorMessage;
};
export declare type User = {
    name?: Maybe<Scalars['String']>;
    status?: Maybe<UserStatus>;
};
export declare type UserAuthenticationError = {
    __typename: 'UserAuthenticationError';
    code: ErrorCode;
    message: ErrorMessage;
};
export declare type UserForbiddenError = {
    __typename: 'UserForbiddenError';
    code: ErrorCode;
    message: ErrorMessage;
};
/** Return a user or user related errors */
export declare type UserResult = ActiveUser | BannedUser | DeletedUser | InvalidArgumentsError | NotFoundError | UserAuthenticationError;
/** User account status */
export declare enum UserStatus {
    Active = "ACTIVE",
    Banned = "BANNED",
    Deleted = "DELETED"
}
export declare type CreatePostMutationVariables = Exact<{
    title: Scalars['String'];
    content?: Maybe<Scalars['String']>;
    authorEmail: Scalars['String'];
}>;
export declare type CreatePostMutation = ({
    __typename: 'Mutation';
} & {
    createPost?: Maybe<({
        __typename: 'InvalidArgumentsError';
    } & Pick<InvalidArgumentsError, 'code' | 'message'> & {
        invalidArguments: Array<Maybe<({
            __typename: 'InvalidArgument';
        } & Pick<InvalidArgument, 'key' | 'message'>)>>;
    }) | ({
        __typename: 'Post';
    } & Pick<Post, 'id' | 'title'>) | {
        __typename: 'UserAuthenticationError';
    }>;
});
export declare type CreateUserMutationVariables = Exact<{
    name: Scalars['String'];
    email: Scalars['String'];
}>;
export declare type CreateUserMutation = ({
    __typename: 'Mutation';
} & {
    createUser?: Maybe<({
        __typename: 'ActiveUser';
    } & Pick<ActiveUser, 'id' | 'name' | 'status' | 'email'> & {
        posts?: Maybe<Array<Maybe<({
            __typename: 'Post';
        } & Pick<Post, 'id' | 'title'>)>>>;
    }) | {
        __typename: 'BannedUser';
    } | {
        __typename: 'DeletedUser';
    } | ({
        __typename: 'InvalidArgumentsError';
    } & Pick<InvalidArgumentsError, 'code' | 'message'> & {
        invalidArguments: Array<Maybe<({
            __typename: 'InvalidArgument';
        } & Pick<InvalidArgument, 'key' | 'message'>)>>;
    }) | {
        __typename: 'NotFoundError';
    } | ({
        __typename: 'UserAuthenticationError';
    } & Pick<UserAuthenticationError, 'code' | 'message'>)>;
});
export declare type ChangeUserStatusMutationVariables = Exact<{
    status: UserStatus;
    id: Scalars['Int'];
}>;
export declare type ChangeUserStatusMutation = ({
    __typename: 'Mutation';
} & {
    changeUserStatus?: Maybe<({
        __typename: 'ActiveUser';
    } & Pick<ActiveUser, 'id' | 'name' | 'status' | 'email'> & {
        posts?: Maybe<Array<Maybe<({
            __typename: 'Post';
        } & Pick<Post, 'id' | 'title'>)>>>;
    }) | ({
        __typename: 'BannedUser';
    } & Pick<BannedUser, 'id' | 'banReason' | 'name' | 'status'>) | ({
        __typename: 'DeletedUser';
    } & Pick<DeletedUser, 'id' | 'deletedAt' | 'name' | 'status'>) | ({
        __typename: 'InvalidArgumentsError';
    } & Pick<InvalidArgumentsError, 'code' | 'message'>) | ({
        __typename: 'NotFoundError';
    } & Pick<NotFoundError, 'code' | 'message'>) | ({
        __typename: 'UserAuthenticationError';
    } & Pick<UserAuthenticationError, 'code' | 'message'>)>;
});
export declare type UserByIdQueryVariables = Exact<{
    id: Scalars['ID'];
}>;
export declare type UserByIdQuery = ({
    __typename: 'Query';
} & {
    userById?: Maybe<({
        __typename: 'ActiveUser';
    } & Pick<ActiveUser, 'id' | 'name' | 'status' | 'email'> & {
        posts?: Maybe<Array<Maybe<({
            __typename: 'Post';
        } & Pick<Post, 'id' | 'title'>)>>>;
    }) | ({
        __typename: 'BannedUser';
    } & Pick<BannedUser, 'id' | 'banReason' | 'name' | 'status'>) | ({
        __typename: 'DeletedUser';
    } & Pick<DeletedUser, 'id' | 'deletedAt' | 'name' | 'status'>) | {
        __typename: 'InvalidArgumentsError';
    } | {
        __typename: 'NotFoundError';
    } | {
        __typename: 'UserAuthenticationError';
    }>;
});
export declare type UsersQueryVariables = Exact<{
    [key: string]: never;
}>;
export declare type UsersQuery = ({
    __typename: 'Query';
} & {
    users?: Maybe<Array<Maybe<({
        __typename: 'ActiveUser';
    } & Pick<ActiveUser, 'id' | 'name' | 'status' | 'email'> & {
        posts?: Maybe<Array<Maybe<({
            __typename: 'Post';
        } & Pick<Post, 'id' | 'title'>)>>>;
    }) | ({
        __typename: 'BannedUser';
    } & Pick<BannedUser, 'id' | 'banReason' | 'name' | 'status'>) | ({
        __typename: 'DeletedUser';
    } & Pick<DeletedUser, 'id' | 'deletedAt' | 'name' | 'status'>) | {
        __typename: 'InvalidArgumentsError';
    } | {
        __typename: 'NotFoundError';
    } | {
        __typename: 'UserAuthenticationError';
    }>>>;
});
export declare const CreatePostDocument: import("graphql").DocumentNode;
export declare function useCreatePostMutation(): Urql.UseMutationResponse<CreatePostMutation, Exact<{
    title: string;
    content?: string;
    authorEmail: string;
}>>;
export declare const CreateUserDocument: import("graphql").DocumentNode;
export declare function useCreateUserMutation(): Urql.UseMutationResponse<CreateUserMutation, Exact<{
    name: string;
    email: string;
}>>;
export declare const ChangeUserStatusDocument: import("graphql").DocumentNode;
export declare function useChangeUserStatusMutation(): Urql.UseMutationResponse<ChangeUserStatusMutation, Exact<{
    status: UserStatus;
    id: number;
}>>;
export declare const UserByIdDocument: import("graphql").DocumentNode;
export declare function useUserByIdQuery(options?: Omit<Urql.UseQueryArgs<UserByIdQueryVariables>, 'query'>): Urql.UseQueryResponse<UserByIdQuery, object>;
export declare const UsersDocument: import("graphql").DocumentNode;
export declare function useUsersQuery(options?: Omit<Urql.UseQueryArgs<UsersQueryVariables>, 'query'>): Urql.UseQueryResponse<UsersQuery, object>;
//# sourceMappingURL=index.d.ts.map