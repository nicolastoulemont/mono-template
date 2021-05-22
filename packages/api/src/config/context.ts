import { UserSessionData, getUserFromSession } from '@utils/authorization'
import { pubsub } from './pubSub'
import { Request, Response } from 'express'
import { Session, SessionData } from 'express-session'
export interface ContextParams {
	req: Request
	res: Response
	connection: any
}

export type RequestWithSession = Request & {
	session: Session & Partial<SessionData> & { user?: UserSessionData }
}

export interface ApiContext {
	user: UserSessionData
	req: RequestWithSession
	res: Response
	pubsub: typeof pubsub
	connection: any
}

export const context = ({ req, res, connection }: ContextParams): ApiContext => ({
	user: getUserFromSession(req ? req : connection.context) as UserSessionData,
	req,
	res,
	pubsub,
	connection
})
