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
    DateTime: Date;
    /** A field whose value conforms to the standard internet email address format as specified in RFC822: https://www.w3.org/Protocols/rfc822/. */
    EmailAddress: string;
    /** A field whose value is a JSON Web Token (JWT): https://jwt.io/introduction. */
    JWT: any;
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
/** The result of the accountById query */
export declare type AccountByIdResult = Account | InvalidArgumentsError | NotFoundError | UserAuthenticationError | UserForbiddenError;
/** Return an account or account related errors */
export declare type AccountResult = Account | InvalidArgumentsError | NotFoundError | UnableToProcessError | UserAuthenticationError | UserForbiddenError;
/** List of accounts */
export declare type AccountsList = {
    __typename: 'AccountsList';
    accounts?: Maybe<Array<Maybe<Account>>>;
};
/** Represent the minimal fields required for any actors */
export declare type Actor = {
    accountId: Scalars['ID'];
    createdAt: Scalars['DateTime'];
    id: Scalars['ID'];
    updatedAt: Scalars['DateTime'];
};
/** The result of the accounts query */
export declare type AllAccountsResult = AccountsList | UnableToProcessError | UserAuthenticationError | UserForbiddenError;
/** The result of the allUsers query */
export declare type AllUsersResult = UnableToProcessError | UserAuthenticationError | UserForbiddenError | UsersList;
export declare type BooleanResult = {
    __typename: 'BooleanResult';
    success?: Maybe<Scalars['Boolean']>;
};
export declare type CreateAccountInput = {
    email: Scalars['EmailAddress'];
    password: Scalars['String'];
    username: Scalars['String'];
};
/** The result of the createAccount mutation */
export declare type CreateAccountResult = Account | InvalidArgumentsError | UnableToProcessError;
/** The result of the currentAccount query */
export declare type CurrentAccountResult = Account | NotFoundError | UserAuthenticationError | UserForbiddenError;
/** The result of the deleteAccount mutation */
export declare type DeleteAccountResult = BooleanResult | InvalidArgumentsError | NotFoundError | UserAuthenticationError;
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
    createAccount?: Maybe<CreateAccountResult>;
    /** Access restricted to logged in user */
    deleteAccount?: Maybe<DeleteAccountResult>;
    lostPassword?: Maybe<LostPasswordResult>;
    /** Access restricted to logged in user */
    modifyEmail?: Maybe<ModifyEmailResult>;
    /** Access restricted to logged in user */
    modifyPassword?: Maybe<ModifyPasswordResult>;
    resetPassword?: Maybe<ResetPasswordResult>;
    sendVerificationEmail?: Maybe<SendVerificationEmailResult>;
    signIn?: Maybe<SignInResult>;
    /** Access restricted to logged in user */
    signOut?: Maybe<SignOutResult>;
    verifyUser?: Maybe<VerifyUserResult>;
};
export declare type MutationCreateAccountArgs = {
    input: CreateAccountInput;
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
    input: ResetPasswordInput;
};
export declare type MutationSendVerificationEmailArgs = {
    email: Scalars['String'];
};
export declare type MutationSignInArgs = {
    input: EmailAndPasswordInput;
};
export declare type MutationVerifyUserArgs = {
    input: VerifyUserInput;
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
export declare type Query = {
    __typename: 'Query';
    /** Access restricted to admin users */
    accountById?: Maybe<AccountByIdResult>;
    /** Access restricted to admin users */
    allAccounts?: Maybe<AllAccountsResult>;
    /** Access restricted to admin users */
    allUsers?: Maybe<AllUsersResult>;
    /** Access restricted to logged in user */
    currentAccount?: Maybe<CurrentAccountResult>;
    /** Access restricted to admin users */
    userById?: Maybe<UserByIdResult>;
};
export declare type QueryAccountByIdArgs = {
    id: Scalars['ID'];
};
export declare type QueryUserByIdArgs = {
    id: Scalars['ID'];
};
export declare type ResetPasswordInput = {
    newPassword: Scalars['String'];
    token: Scalars['JWT'];
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
export declare type User = Actor & {
    __typename: 'User';
    accountId: Scalars['ID'];
    createdAt: Scalars['DateTime'];
    id: Scalars['ID'];
    updatedAt: Scalars['DateTime'];
    username?: Maybe<Scalars['String']>;
};
export declare type UserAuthenticationError = {
    __typename: 'UserAuthenticationError';
    code: ErrorCode;
    message: ErrorMessage;
};
/** The result of the userById query */
export declare type UserByIdResult = InvalidArgumentsError | NotFoundError | User | UserAuthenticationError | UserForbiddenError;
export declare type UserForbiddenError = {
    __typename: 'UserForbiddenError';
    code: ErrorCode;
    message: ErrorMessage;
};
/** List of users */
export declare type UsersList = {
    __typename: 'UsersList';
    users?: Maybe<Array<Maybe<User>>>;
};
export declare type VerifyUserInput = {
    token: Scalars['JWT'];
};
/** The result of the verifyUser mutation */
export declare type VerifyUserResult = BooleanResult | InvalidArgumentsError | NotFoundError | UnableToProcessError;
export declare type UserByIdQueryVariables = Exact<{
    id: Scalars['ID'];
}>;
export declare type UserByIdQuery = ({
    __typename: 'Query';
} & {
    userById?: Maybe<{
        __typename: 'InvalidArgumentsError';
    } | {
        __typename: 'NotFoundError';
    } | ({
        __typename: 'User';
    } & Pick<User, 'id' | 'username'>) | {
        __typename: 'UserAuthenticationError';
    } | {
        __typename: 'UserForbiddenError';
    }>;
});
export declare type AllUsersQueryVariables = Exact<{
    [key: string]: never;
}>;
export declare type AllUsersQuery = ({
    __typename: 'Query';
} & {
    allUsers?: Maybe<{
        __typename: 'UnableToProcessError';
    } | {
        __typename: 'UserAuthenticationError';
    } | {
        __typename: 'UserForbiddenError';
    } | ({
        __typename: 'UsersList';
    } & {
        users?: Maybe<Array<Maybe<({
            __typename: 'User';
        } & Pick<User, 'id' | 'username'>)>>>;
    })>;
});
export declare const UserByIdDocument: import("graphql").DocumentNode;
export declare function useUserByIdQuery(options?: Omit<Urql.UseQueryArgs<UserByIdQueryVariables>, 'query'>): Urql.UseQueryResponse<UserByIdQuery, object>;
export declare const AllUsersDocument: import("graphql").DocumentNode;
export declare function useAllUsersQuery(options?: Omit<Urql.UseQueryArgs<AllUsersQueryVariables>, 'query'>): Urql.UseQueryResponse<AllUsersQuery, object>;
//# sourceMappingURL=index.d.ts.map