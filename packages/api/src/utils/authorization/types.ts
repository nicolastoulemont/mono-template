export interface DecodedToken {
	payload: string
	exp: number
	iat: number
}

export interface UserSessionData {
	accountId: string
	actorId: string
	access: 'user' | 'admin'
}
