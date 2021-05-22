import { __prod__ } from 'src/constants'

const DEV_TRUSTED_URLS = ['http://localhost:3000']
const PROD_TRUSTED_URLS = [process.env.CLIENT_APP_URL as string]

export const origin = __prod__ ? PROD_TRUSTED_URLS : DEV_TRUSTED_URLS
