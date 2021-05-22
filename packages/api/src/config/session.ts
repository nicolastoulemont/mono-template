import session from 'express-session'
import connectRedis from 'connect-redis'
import Redis from 'ioredis'
import { COOKIE_NAME, __prod__, SESSION_DURATION } from '../constants'

const RedisStore = connectRedis(session)
const redis = new Redis(process.env.REDIS_URL)

export const SESSION_CONFIG = session({
	name: COOKIE_NAME,
	store: new RedisStore({
		client: redis,
		disableTouch: true
	}),
	cookie: {
		maxAge: SESSION_DURATION,
		httpOnly: true,
		sameSite: 'lax', // csrf
		secure: __prod__, // cookie only works in https
		domain: __prod__ ? `.${process.env.DOMAIN_URL}` : undefined
	},
	saveUninitialized: false,
	secret: process.env.SESSION_SECRET as string,
	resave: false
})
