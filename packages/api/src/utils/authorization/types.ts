export interface DecodedToken {
	payload: string
	exp: number
	iat: number
}

export interface UserSessionData {
	accountId: string
	userId: string
	access: 'user' | 'admin'
}
