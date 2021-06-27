import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
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

export type Account = Node & {
  __typename: 'Account';
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['EmailAddress']>;
  /** GUID for a resource */
  id?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  verifiedAt?: Maybe<Scalars['DateTime']>;
};

/** The result of the accountById query */
export type AccountByIdResult = Account | InvalidArgumentsError | NotFoundError | UserAuthenticationError | UserForbiddenError;

/** Return an account or account related errors */
export type AccountResult = Account | InvalidArgumentsError | NotFoundError | UnableToProcessError | UserAuthenticationError | UserForbiddenError;

/** List of accounts */
export type AccountsList = {
  __typename: 'AccountsList';
  accounts?: Maybe<Array<Maybe<Account>>>;
};

/** Represent the minimal fields required for any actors */
export type Actor = {
  accountId: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  updatedAt: Scalars['DateTime'];
};

/** The result of the accounts query */
export type AllAccountsResult = AccountsList | UnableToProcessError | UserAuthenticationError | UserForbiddenError;

/** The result of the allUsers query */
export type AllUsersResult = UnableToProcessError | UserAuthenticationError | UserForbiddenError | UsersList;

export type BooleanResult = {
  __typename: 'BooleanResult';
  success?: Maybe<Scalars['Boolean']>;
};

export type CreateAccountInput = {
  email: Scalars['EmailAddress'];
  password: Scalars['String'];
  username: Scalars['String'];
};

/** The result of the createAccount mutation */
export type CreateAccountResult = Account | InvalidArgumentsError | UnableToProcessError;

/** The result of the currentAccount query */
export type CurrentAccountResult = Account | NotFoundError | UserAuthenticationError | UserForbiddenError;


/** The result of the deleteAccount mutation */
export type DeleteAccountResult = BooleanResult | InvalidArgumentsError | NotFoundError | UserAuthenticationError;


export type EmailAndPasswordInput = {
  email: Scalars['EmailAddress'];
  password: Scalars['String'];
};

/** The differents error codes the api will return if needed */
export enum ErrorCode {
  BadRequest = 'BAD_REQUEST',
  Forbidden = 'FORBIDDEN',
  NotFound = 'NOT_FOUND',
  UnableToProcess = 'UNABLE_TO_PROCESS',
  Unauthorized = 'UNAUTHORIZED'
}

/** The differents error message the api will return if needed */
export enum ErrorMessage {
  ForbiddenYouDoNotHaveAccessToThisResource = 'FORBIDDEN_YOU_DO_NOT_HAVE_ACCESS_TO_THIS_RESOURCE',
  ResourceNotFound = 'RESOURCE_NOT_FOUND',
  UnableToProcessRequestDueToClientError = 'UNABLE_TO_PROCESS_REQUEST_DUE_TO_CLIENT_ERROR',
  UnableToProcessRequestDueToServerError = 'UNABLE_TO_PROCESS_REQUEST_DUE_TO_SERVER_ERROR',
  UnauthenticatedPleaseLogin = 'UNAUTHENTICATED_PLEASE_LOGIN'
}

export type InvalidArgument = {
  __typename: 'InvalidArgument';
  key: Scalars['String'];
  message: Scalars['String'];
};

export type InvalidArgumentsError = {
  __typename: 'InvalidArgumentsError';
  code: ErrorCode;
  invalidArguments: Array<Maybe<InvalidArgument>>;
  message: ErrorMessage;
};


/** The result of the lostPassword mutation */
export type LostPasswordResult = BooleanResult | NotFoundError;

/** The result of the modifyEmail mutation */
export type ModifyEmailResult = Account | InvalidArgumentsError | UnableToProcessError | UserAuthenticationError;

/** The result of the modifyPassword mutation */
export type ModifyPasswordResult = Account | InvalidArgumentsError | NotFoundError | UserAuthenticationError;

export type Mutation = {
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


export type MutationCreateAccountArgs = {
  input: CreateAccountInput;
};


export type MutationDeleteAccountArgs = {
  confirmPassword: Scalars['String'];
};


export type MutationLostPasswordArgs = {
  email: Scalars['String'];
};


export type MutationModifyEmailArgs = {
  email: Scalars['String'];
};


export type MutationModifyPasswordArgs = {
  newPassword: Scalars['String'];
  password: Scalars['String'];
};


export type MutationResetPasswordArgs = {
  input: ResetPasswordInput;
};


export type MutationSendVerificationEmailArgs = {
  email: Scalars['String'];
};


export type MutationSignInArgs = {
  input: EmailAndPasswordInput;
};


export type MutationVerifyUserArgs = {
  input: VerifyUserInput;
};

export type Node = {
  /** GUID for a resource */
  id?: Maybe<Scalars['Int']>;
};

export type NotFoundError = {
  __typename: 'NotFoundError';
  code: ErrorCode;
  message: ErrorMessage;
};

export type Query = {
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


export type QueryAccountByIdArgs = {
  id: Scalars['ID'];
};


export type QueryUserByIdArgs = {
  id: Scalars['ID'];
};

export type ResetPasswordInput = {
  newPassword: Scalars['String'];
  token: Scalars['JWT'];
};

/** The result of the resetPassword mutation */
export type ResetPasswordResult = BooleanResult | InvalidArgumentsError | UnableToProcessError;

/** The result of the sendVerificationEmail mutation */
export type SendVerificationEmailResult = BooleanResult | InvalidArgumentsError | NotFoundError | UnableToProcessError;

/** The result of the signIn mutation */
export type SignInResult = Account | InvalidArgumentsError | NotFoundError | UnableToProcessError;

/** The result of the signOut mutation */
export type SignOutResult = BooleanResult | UserAuthenticationError;

export type UnableToProcessError = {
  __typename: 'UnableToProcessError';
  code: ErrorCode;
  message: ErrorMessage;
};

export type User = Actor & {
  __typename: 'User';
  accountId: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  updatedAt: Scalars['DateTime'];
  username?: Maybe<Scalars['String']>;
};

export type UserAuthenticationError = {
  __typename: 'UserAuthenticationError';
  code: ErrorCode;
  message: ErrorMessage;
};

/** The result of the userById query */
export type UserByIdResult = InvalidArgumentsError | NotFoundError | User | UserAuthenticationError | UserForbiddenError;

export type UserForbiddenError = {
  __typename: 'UserForbiddenError';
  code: ErrorCode;
  message: ErrorMessage;
};

/** List of users */
export type UsersList = {
  __typename: 'UsersList';
  users?: Maybe<Array<Maybe<User>>>;
};

export type VerifyUserInput = {
  token: Scalars['JWT'];
};

/** The result of the verifyUser mutation */
export type VerifyUserResult = BooleanResult | InvalidArgumentsError | NotFoundError | UnableToProcessError;

export type UserByIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type UserByIdQuery = (
  { __typename: 'Query' }
  & { userById?: Maybe<{ __typename: 'InvalidArgumentsError' } | { __typename: 'NotFoundError' } | (
    { __typename: 'User' }
    & Pick<User, 'id' | 'username'>
  ) | { __typename: 'UserAuthenticationError' } | { __typename: 'UserForbiddenError' }> }
);

export type AllUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type AllUsersQuery = (
  { __typename: 'Query' }
  & { allUsers?: Maybe<{ __typename: 'UnableToProcessError' } | { __typename: 'UserAuthenticationError' } | { __typename: 'UserForbiddenError' } | (
    { __typename: 'UsersList' }
    & { users?: Maybe<Array<Maybe<(
      { __typename: 'User' }
      & Pick<User, 'id' | 'username'>
    )>>> }
  )> }
);


export const UserByIdDocument = gql`
    query UserById($id: ID!) {
  userById(id: $id) {
    ... on User {
      id
      username
    }
  }
}
    `;

export function useUserByIdQuery(options: Omit<Urql.UseQueryArgs<UserByIdQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<UserByIdQuery>({ query: UserByIdDocument, ...options });
};
export const AllUsersDocument = gql`
    query AllUsers {
  allUsers {
    ... on UsersList {
      users {
        id
        username
      }
    }
  }
}
    `;

export function useAllUsersQuery(options: Omit<Urql.UseQueryArgs<AllUsersQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<AllUsersQuery>({ query: AllUsersDocument, ...options });
};