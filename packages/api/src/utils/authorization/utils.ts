import { ApiContext, RequestWithSession } from '../../config'
import { NexusGenFieldTypes } from '../../schema/nexus-typegen'
import { UserAuthenticationError, UserForbiddenError } from '../errors'
import { UserSessionData } from './types'

export function getUserFromSession(req: RequestWithSession): UserSessionData | undefined {
	if (!req.session.user) return undefined
	return req.session.user
}

export type Access = 'admin' | 'user'

export function authorize(
	ctx: ApiContext,
	requiredAccess: Access
):
	| NexusGenFieldTypes['UserAuthenticationError']
	| NexusGenFieldTypes['UserForbiddenError']
	| undefined {
	const { user } = ctx
	if (user && handleAccess(user.access, requiredAccess)) {
		return undefined
	} else if (user) {
		return UserForbiddenError
	} else {
		return UserAuthenticationError
	}
}

export const handleAccess = (userAccess: string, requiredAccess: Access): boolean => {
	switch (userAccess) {
		case 'admin':
			// Admin access always grant access
			return true
		case 'user':
			switch (requiredAccess) {
				case 'admin':
					return false
				case 'user':
					return true
				default:
					return false
			}
		default:
			return false
	}
}
