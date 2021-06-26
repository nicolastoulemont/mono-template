import { ONE_HOUR, ONE_DAY, DecodedToken } from '../utils'
import jwt from 'jsonwebtoken'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { VerificationEmail } from '../emails/layouts/VerificationEmail'
import { ForgotPassword } from '../emails/layouts/ForgotPassword'
import { createTransporter, emailStyles } from './config'
import { __prod__ } from '../constants'

interface AccountWithEmail {
	id: string
	email: string
}

export interface DecodedVerificationEmailToken extends DecodedToken {
	id: string
	originUrl?: string
}

export const sendVerificationEmail = async (
	account: AccountWithEmail,
	lang: 'fr' | 'en' = 'fr',
	originUrl?: string | undefined | null
) => {
	const transporter = createTransporter()

	const payload = originUrl ? { id: account.id, originUrl } : { id: account.id }

	const emailToken = jwt.sign(payload, process.env.TOKEN_SECRET as string, {
		expiresIn: ONE_DAY
	})

	const verificationUrl = __prod__
		? `https://${process.env.DOMAIN_URL}/email-verification?token=${emailToken}`
		: `http://localhost:3000/email-verification?token=${emailToken}`

	const emailHTML = `
		<!DOCTYPE html>
		<html>
			${emailStyles}
				<body>
					${ReactDOMServer.renderToStaticMarkup(
						React.createElement(VerificationEmail, {
							lang,
							buttonHref: verificationUrl
						})
					)}
				</body>
		</html>
		`

	const verification = {
		subject: {
			fr: 'Vérification de votre email',
			en: 'Email verification'
		}
	}

	try {
		await transporter.sendMail({
			from: 'Ohmonpepet <contact@ohmonpepet.com>',
			to: account.email,
			subject: `Ohmonpepet - ${verification.subject[lang]}`,
			html: emailHTML
		})
	} catch (error) {
		console.log(error)
	}
}

export interface DecodedForgotPwdEmailToken extends DecodedToken {
	id: string
}

export const sendForgotPwdEmail = async (account: AccountWithEmail, lang: 'fr' | 'en' = 'fr') => {
	const transporter = createTransporter()
	const resetPwdToken = jwt.sign({ id: account.id }, process.env.TOKEN_SECRET as string, {
		expiresIn: ONE_HOUR
	})

	const resetUrl = __prod__
		? `https://${process.env.DOMAIN_URL}/reset-password?token=${resetPwdToken}`
		: `http://localhost:3000/reset-password?token=${resetPwdToken}`

	const emailHTML = `
			<!DOCTYPE html>
			<html>
				${emailStyles}
					<body>
						${ReactDOMServer.renderToStaticMarkup(
							React.createElement(ForgotPassword, { lang, buttonHref: resetUrl })
						)}
					</body>
			</html>
			`

	const forgot = {
		subject: {
			fr: 'Réinitialisation de mot passe',
			en: 'Password reset'
		}
	}

	try {
		await transporter.sendMail({
			from: 'Ohmonpepet <contact@ohmonpepet.com>',
			to: account.email,
			subject: `Ohmonpepet - ${forgot.subject[lang]}`,
			html: emailHTML
		})
	} catch (error) {
		console.log(error.message)
	}
}
