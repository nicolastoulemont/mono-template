import { NexusGenFieldTypes } from '../../schema/nexus-typegen'

export const NotFoundError: NexusGenFieldTypes['NotFoundError'] = {
	code: 'NOT_FOUND',
	message: 'RESOURCE_NOT_FOUND'
}
export const UnableToProcessError: NexusGenFieldTypes['UnableToProcessError'] = {
	code: 'UNABLE_TO_PROCESS',
	message: 'UNABLE_TO_PROCESS_REQUEST_DUE_TO_SERVER_ERROR'
}

export const UserForbiddenError: NexusGenFieldTypes['UserForbiddenError'] = {
	code: 'FORBIDDEN',
	message: 'FORBIDDEN_YOU_DO_NOT_HAVE_ACCESS_TO_THIS_RESOURCE'
}
export const UserAuthenticationError: NexusGenFieldTypes['UserAuthenticationError'] = {
	code: 'UNAUTHORIZED',
	message: 'UNAUTHENTICATED_PLEASE_LOGIN'
}

export const PartialInvalidArgumentsError: Pick<
	NexusGenFieldTypes['InvalidArgumentsError'],
	'code' | 'message'
> = {
	code: 'BAD_REQUEST',
	message: 'UNABLE_TO_PROCESS_REQUEST_DUE_TO_CLIENT_ERROR'
}
