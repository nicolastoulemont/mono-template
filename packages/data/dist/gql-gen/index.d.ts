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
    /** A field whose value conforms to the standard internet email address format as specified in RFC822: https://www.w3.org/Protocols/rfc822/. */
    EmailAddress: any;
};
export declare type Account = Node & {
    __typename: 'Account';
    createdAt?: Maybe<Scalars['DateTime']>;
    email?: Maybe<Scalars['EmailAddress']>;
    /** GUID for a resource */
    id?: Maybe<Scalars['Int']>;
    updatedAt?: Maybe<Scalars['DateTime']>;
    verifiedAt?: Maybe<Scalars['DateTime']>;
};
/** Return an account or account related errors */
export declare type AccountResult = Account | InvalidArgumentsError | NotFoundError | UnableToProcessError | UserAuthenticationError | UserForbiddenError;
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
export declare type BooleanResult = {
    __typename: 'BooleanResult';
    success?: Maybe<Scalars['Boolean']>;
};
/** The result of the createAccount mutation */
export declare type CreateAccountResult = Account | InvalidArgumentsError | UnableToProcessError;
/** The result of the deleteAccount mutation */
export declare type DeleteAccountResult = BooleanResult | InvalidArgumentsError | NotFoundError | UserAuthenticationError;
export declare type DeletedUser = Node & User & {
    __typename: 'DeletedUser';
    deletedAt?: Maybe<Scalars['DateTime']>;
    /** GUID for a resource */
    id?: Maybe<Scalars['Int']>;
    name?: Maybe<Scalars['String']>;
    status?: Maybe<UserStatus>;
};
export declare type EmailAndPasswordInput = {
    email: Scalars['EmailAddress'];
    password: Scalars['String'];
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
/** The result of the lostPassword mutation */
export declare type LostPasswordResult = BooleanResult | NotFoundError;
/** The result of the modifyEmail mutation */
export declare type ModifyEmailResult = Account | InvalidArgumentsError | UnableToProcessError | UserAuthenticationError;
/** The result of the modifyPassword mutation */
export declare type ModifyPasswordResult = Account | InvalidArgumentsError | NotFoundError | UserAuthenticationError;
export declare type Mutation = {
    __typename: 'Mutation';
    changeUserStatus?: Maybe<UserResult>;
    createAccount?: Maybe<CreateAccountResult>;
    createPost?: Maybe<PostResult>;
    createUser?: Maybe<UserResult>;
    deleteAccount?: Maybe<DeleteAccountResult>;
    lostPassword?: Maybe<LostPasswordResult>;
    modifyEmail?: Maybe<ModifyEmailResult>;
    modifyPassword?: Maybe<ModifyPasswordResult>;
    resetPassword?: Maybe<ResetPasswordResult>;
    sendVerificationEmail?: Maybe<SendVerificationEmailResult>;
    signIn?: Maybe<SignInResult>;
    signOut?: Maybe<SignOutResult>;
    verifyUser?: Maybe<VerifyUserResult>;
};
export declare type MutationChangeUserStatusArgs = {
    id: Scalars['Int'];
    status: UserStatus;
};
export declare type MutationCreateAccountArgs = {
    account: EmailAndPasswordInput;
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
export declare type MutationDeleteAccountArgs = {
    confirmPassword: Scalars['String'];
};
export declare type MutationLostPasswordArgs = {
    email: Scalars['String'];
};
export declare type MutationModifyEmailArgs = {
    email: Scalars['String'];
};
export declare type MutationModifyPasswordArgs = {
    newPassword: Scalars['String'];
    password: Scalars['String'];
};
export declare type MutationResetPasswordArgs = {
    newPassword: Scalars['String'];
    token: Scalars['String'];
};
export declare type MutationSendVerificationEmailArgs = {
    email: Scalars['String'];
};
export declare type MutationSignInArgs = {
    account: EmailAndPasswordInput;
};
export declare type MutationVerifyUserArgs = {
    token: Scalars['String'];
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
/** The result of the resetPassword mutation */
export declare type ResetPasswordResult = BooleanResult | InvalidArgumentsError | UnableToProcessError;
/** The result of the sendVerificationEmail mutation */
export declare type SendVerificationEmailResult = BooleanResult | InvalidArgumentsError | NotFoundError | UnableToProcessError;
/** The result of the signIn mutation */
export declare type SignInResult = Account | InvalidArgumentsError | NotFoundError | UnableToProcessError;
/** The result of the signOut mutation */
export declare type SignOutResult = BooleanResult | UserAuthenticationError;
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
/** The result of the verifyUser mutation */
export declare type VerifyUserResult = BooleanResult | InvalidArgumentsError | NotFoundError | UnableToProcessError;
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