import React from 'react'
import {
	BrandHeader,
	Container,
	HeroSectionWithImage,
	Table,
	Text,
	VeryLargeHeading,
	Button,
	Footer
} from '../components'

export function ForgotPassword({
	lang = 'fr',
	buttonHref
}: {
	lang: 'fr' | 'en'
	buttonHref: string
}) {
	const content = {
		title: {
			fr: 'Demande de réinitialisation de mot passe',
			en: 'Request for password reset'
		},
		message: {
			fr: 'Votre lien est actif pour 1 heure. Après ce délai, vous devrez demander une nouvelle réinitialisation de mot passe',
			en: 'Your link is active for 1 hour. After that, you will need to resend the reset password email.'
		},
		link: {
			fr: 'Réinitialiser votre mot de passe',
			en: 'Reset your Password'
		}
	}

	return (
		<>
			<Container>
				<BrandHeader />
				<HeroSectionWithImage
					imageSrc={`https://${process.env.S3_BUCKET_NAME}.s3.eu-west-3.amazonaws.com/email-assets/password.png`}
				>
					<VeryLargeHeading text={content.title[lang]} />
					<Text text={content.message[lang]} />
				</HeroSectionWithImage>
				<Table>
					<Button href={buttonHref} text={content.link[lang]} />
				</Table>
			</Container>
			<Footer />
		</>
	)
}
