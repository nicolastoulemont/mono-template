import nodemailer from 'nodemailer'

export const createTransporter = () =>
	nodemailer.createTransport({
		host: 'smtp.privateemail.com',
		port: 465,
		secure: true,
		auth: {
			user: process.env.EMAIL_USER as string,
			pass: process.env.EMAIL_PASSWORD as string,
		},
		tls: { rejectUnauthorized: false },
	})

export const emailStyles = `
	<head>
		<style>
		@media screen and (max-width: 100px) {
			h1, h2, p {
				text-align:center !important;
			}

			.large-image {
				max-width: 200px !important;
				margin: 0 auto !important;
			}
		}
		</style>
	</head>	
`
