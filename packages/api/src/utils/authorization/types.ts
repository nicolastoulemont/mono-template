export interface DecodedToken {
	payload: string
	exp: number
	iat: number
}

export interface UserSessionData {
	id: string
	access: string
}
