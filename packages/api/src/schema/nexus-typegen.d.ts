/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import { ApiContext } from "./../config/context"
import { FieldValidationResolver, FieldAuthorizationResolver } from "./plugins"
import { core } from "nexus"
declare global {
  interface NexusGenCustomInputMethods<TypeName extends string> {
    /**
     * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    date<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "DateTime";
  }
}
declare global {
  interface NexusGenCustomOutputMethods<TypeName extends string> {
    /**
     * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    date<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "DateTime";
  }
}


declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  Sign: { // input type
    email: string; // String!
    password: string; // String!
  }
}

export interface NexusGenEnums {
  ErrorCode: "BAD_REQUEST" | "FORBIDDEN" | "NOT_FOUND" | "UNABLE_TO_PROCESS" | "UNAUTHORIZED"
  ErrorMessage: "FORBIDDEN_YOU_DO_NOT_HAVE_ACCESS_TO_THIS_RESOURCE" | "RESOURCE_NOT_FOUND" | "UNABLE_TO_PROCESS_REQUEST_DUE_TO_CLIENT_ERROR" | "UNABLE_TO_PROCESS_REQUEST_DUE_TO_SERVER_ERROR" | "UNAUTHENTICATED_PLEASE_LOGIN"
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
  DateTime: any
}

export interface NexusGenObjects {
  BooleanResponse: { // root type
    errors?: Array<NexusGenRootTypes['Error'] | null> | null; // [Error]
    success?: boolean | null; // Boolean
  }
  Error: { // root type
    key?: string | null; // String
    message?: string | null; // String
  }
  InvalidArgument: { // root type
    key?: string | null; // String
    message?: string | null; // String
  }
  InvalidArgumentsError: { // root type
    invalidArguments?: Array<NexusGenRootTypes['InvalidArgument'] | null> | null; // [InvalidArgument]
  }
  Mutation: {};
  NotFoundError: {};
  Query: {};
  Success: { // root type
    success?: boolean | null; // Boolean
  }
  UnableToProcessError: {};
  User: { // root type
    access?: string | null; // String
    createdAt?: NexusGenScalars['DateTime'] | null; // DateTime
    email?: string | null; // String
    id?: string | null; // ID
    updatedAt?: NexusGenScalars['DateTime'] | null; // DateTime
    verified?: boolean | null; // Boolean
  }
  UserAuthenticationError: {};
  UserForbiddenError: {};
  UserResponse: { // root type
    errors?: Array<NexusGenRootTypes['Error'] | null> | null; // [Error]
    user?: NexusGenRootTypes['User'] | null; // User
  }
  Users: { // root type
    users?: Array<NexusGenRootTypes['User'] | null> | null; // [User]
  }
  UsersResponse: { // root type
    errors?: Array<NexusGenRootTypes['Error'] | null> | null; // [Error]
    users?: Array<NexusGenRootTypes['User'] | null> | null; // [User]
  }
}

export interface NexusGenInterfaces {
  Node: any;
}

export interface NexusGenUnions {
  BooleanResult: NexusGenRootTypes['InvalidArgumentsError'] | NexusGenRootTypes['NotFoundError'] | NexusGenRootTypes['Success'] | NexusGenRootTypes['UnableToProcessError'] | NexusGenRootTypes['UserAuthenticationError'] | NexusGenRootTypes['UserForbiddenError'];
  UserResult: NexusGenRootTypes['InvalidArgumentsError'] | NexusGenRootTypes['NotFoundError'] | NexusGenRootTypes['UnableToProcessError'] | NexusGenRootTypes['User'] | NexusGenRootTypes['UserAuthenticationError'] | NexusGenRootTypes['UserForbiddenError'];
  UsersResult: NexusGenRootTypes['InvalidArgumentsError'] | NexusGenRootTypes['NotFoundError'] | NexusGenRootTypes['UnableToProcessError'] | NexusGenRootTypes['UserAuthenticationError'] | NexusGenRootTypes['UserForbiddenError'] | NexusGenRootTypes['Users'];
}

export type NexusGenRootTypes = NexusGenInterfaces & NexusGenObjects & NexusGenUnions

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars & NexusGenEnums

export interface NexusGenFieldTypes {
  BooleanResponse: { // field return type
    errors: Array<NexusGenRootTypes['Error'] | null> | null; // [Error]
    success: boolean | null; // Boolean
  }
  Error: { // field return type
    key: string | null; // String
    message: string | null; // String
  }
  InvalidArgument: { // field return type
    key: string | null; // String
    message: string | null; // String
  }
  InvalidArgumentsError: { // field return type
    code: NexusGenEnums['ErrorCode'] | null; // ErrorCode
    invalidArguments: Array<NexusGenRootTypes['InvalidArgument'] | null> | null; // [InvalidArgument]
    message: NexusGenEnums['ErrorMessage'] | null; // ErrorMessage
  }
  Mutation: { // field return type
    deleteUser: NexusGenRootTypes['BooleanResponse'] | null; // BooleanResponse
    lostPassword: NexusGenRootTypes['BooleanResponse'] | null; // BooleanResponse
    modifyEmail: NexusGenRootTypes['UserResponse'] | null; // UserResponse
    modifyPassword: NexusGenRootTypes['UserResponse'] | null; // UserResponse
    reSendVerificationEmail: NexusGenRootTypes['BooleanResponse'] | null; // BooleanResponse
    resetPassword: NexusGenRootTypes['BooleanResponse'] | null; // BooleanResponse
    signIn: NexusGenRootTypes['UserResult'] | null; // UserResult
    signOut: NexusGenRootTypes['BooleanResult'] | null; // BooleanResult
    signUp: NexusGenRootTypes['UserResponse'] | null; // UserResponse
    verifyUser: NexusGenRootTypes['BooleanResponse'] | null; // BooleanResponse
  }
  NotFoundError: { // field return type
    code: NexusGenEnums['ErrorCode'] | null; // ErrorCode
    message: NexusGenEnums['ErrorMessage'] | null; // ErrorMessage
  }
  Query: { // field return type
    currentUser: NexusGenRootTypes['UserResult'] | null; // UserResult
    userById: NexusGenRootTypes['UserResponse'] | null; // UserResponse
    users: NexusGenRootTypes['UsersResponse'] | null; // UsersResponse
  }
  Success: { // field return type
    success: boolean | null; // Boolean
  }
  UnableToProcessError: { // field return type
    code: NexusGenEnums['ErrorCode'] | null; // ErrorCode
    message: NexusGenEnums['ErrorMessage'] | null; // ErrorMessage
  }
  User: { // field return type
    access: string | null; // String
    createdAt: NexusGenScalars['DateTime'] | null; // DateTime
    email: string | null; // String
    id: string | null; // ID
    updatedAt: NexusGenScalars['DateTime'] | null; // DateTime
    verified: boolean | null; // Boolean
  }
  UserAuthenticationError: { // field return type
    code: NexusGenEnums['ErrorCode'] | null; // ErrorCode
    message: NexusGenEnums['ErrorMessage'] | null; // ErrorMessage
  }
  UserForbiddenError: { // field return type
    code: NexusGenEnums['ErrorCode'] | null; // ErrorCode
    message: NexusGenEnums['ErrorMessage'] | null; // ErrorMessage
  }
  UserResponse: { // field return type
    errors: Array<NexusGenRootTypes['Error'] | null> | null; // [Error]
    user: NexusGenRootTypes['User'] | null; // User
  }
  Users: { // field return type
    users: Array<NexusGenRootTypes['User'] | null> | null; // [User]
  }
  UsersResponse: { // field return type
    errors: Array<NexusGenRootTypes['Error'] | null> | null; // [Error]
    users: Array<NexusGenRootTypes['User'] | null> | null; // [User]
  }
  Node: { // field return type
    id: number | null; // Int
  }
}

export interface NexusGenFieldTypeNames {
  BooleanResponse: { // field return type name
    errors: 'Error'
    success: 'Boolean'
  }
  Error: { // field return type name
    key: 'String'
    message: 'String'
  }
  InvalidArgument: { // field return type name
    key: 'String'
    message: 'String'
  }
  InvalidArgumentsError: { // field return type name
    code: 'ErrorCode'
    invalidArguments: 'InvalidArgument'
    message: 'ErrorMessage'
  }
  Mutation: { // field return type name
    deleteUser: 'BooleanResponse'
    lostPassword: 'BooleanResponse'
    modifyEmail: 'UserResponse'
    modifyPassword: 'UserResponse'
    reSendVerificationEmail: 'BooleanResponse'
    resetPassword: 'BooleanResponse'
    signIn: 'UserResult'
    signOut: 'BooleanResult'
    signUp: 'UserResponse'
    verifyUser: 'BooleanResponse'
  }
  NotFoundError: { // field return type name
    code: 'ErrorCode'
    message: 'ErrorMessage'
  }
  Query: { // field return type name
    currentUser: 'UserResult'
    userById: 'UserResponse'
    users: 'UsersResponse'
  }
  Success: { // field return type name
    success: 'Boolean'
  }
  UnableToProcessError: { // field return type name
    code: 'ErrorCode'
    message: 'ErrorMessage'
  }
  User: { // field return type name
    access: 'String'
    createdAt: 'DateTime'
    email: 'String'
    id: 'ID'
    updatedAt: 'DateTime'
    verified: 'Boolean'
  }
  UserAuthenticationError: { // field return type name
    code: 'ErrorCode'
    message: 'ErrorMessage'
  }
  UserForbiddenError: { // field return type name
    code: 'ErrorCode'
    message: 'ErrorMessage'
  }
  UserResponse: { // field return type name
    errors: 'Error'
    user: 'User'
  }
  Users: { // field return type name
    users: 'User'
  }
  UsersResponse: { // field return type name
    errors: 'Error'
    users: 'User'
  }
  Node: { // field return type name
    id: 'Int'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    deleteUser: { // args
      confirmPassword: string; // String!
    }
    lostPassword: { // args
      email: string; // String!
      lang: string; // String!
    }
    modifyEmail: { // args
      email: string; // String!
    }
    modifyPassword: { // args
      newPassword: string; // String!
      password: string; // String!
    }
    reSendVerificationEmail: { // args
      email: string; // String!
      lang?: string | null; // String
    }
    resetPassword: { // args
      newPassword: string; // String!
      token: string; // String!
    }
    signIn: { // args
      lang?: string | null; // String
      user: NexusGenInputs['Sign']; // Sign!
    }
    signUp: { // args
      firstName: string; // String!
      lang: string; // String!
      originUrl?: string | null; // String
      user: NexusGenInputs['Sign']; // Sign!
    }
    verifyUser: { // args
      token: string; // String!
    }
  }
  Query: {
    userById: { // args
      id: string; // ID!
    }
  }
}

export interface NexusGenAbstractTypeMembers {
  BooleanResult: "InvalidArgumentsError" | "NotFoundError" | "Success" | "UnableToProcessError" | "UserAuthenticationError" | "UserForbiddenError"
  UserResult: "InvalidArgumentsError" | "NotFoundError" | "UnableToProcessError" | "User" | "UserAuthenticationError" | "UserForbiddenError"
  UsersResult: "InvalidArgumentsError" | "NotFoundError" | "UnableToProcessError" | "UserAuthenticationError" | "UserForbiddenError" | "Users"
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = keyof NexusGenInputs;

export type NexusGenEnumNames = keyof NexusGenEnums;

export type NexusGenInterfaceNames = keyof NexusGenInterfaces;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = keyof NexusGenUnions;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = "InvalidArgumentsError" | "NotFoundError" | "Success" | "UnableToProcessError" | "User" | "UserAuthenticationError" | "UserForbiddenError" | "Users";

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: true
    __typename: false
    resolveType: false
  }
}

export interface NexusGenTypes {
  context: ApiContext;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
    /**
     * Validation for an individual field. Returning "undefined"
     * or "Promise<undefined>" means the field can be accessed.
     * Returning InvalidArgumentsError or "Promise<InvalidArgumentsError>" will prevent the resolver from executing.
     */
    validation?: FieldValidationResolver<TypeName, FieldName>
    /**
     * Authorization for an individual field. Returning "undefined"
     * or "Promise<undefined>" means the field can be accessed.
     * Returning "UserAuthenticationError" will prevent the resolver from executing.
     */
    authorization?: FieldAuthorizationResolver<TypeName, FieldName>
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}