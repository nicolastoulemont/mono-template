import React from 'react'
import {
	BrandHeader,
	Container,
	HeroSectionWithImage,
	Table,
	Text,
	VeryLargeHeading,
	Button,
	Footer,
} from '../components'

export function VerificationEmail({
	lang = 'fr',
	buttonHref,
}: {
	lang: 'fr' | 'en'
	buttonHref: string
}) {
	const content = {
		title: {
			fr: 'Vérification de votre email',
			en: 'Email verification',
		},
		message: {
			fr:
				'Votre lien est actif pour 24 heures. Après ce délai, vous devrez demander une nouvelle vérification de votre email',
			en:
				'Your link is active for 24 hours. After that, you will need to resend the verification email.',
		},
		link: {
			fr: 'Vérifier votre email',
			en: 'Verify your mail',
		},
	}

	return (
		<>
			<Container>
				<BrandHeader />
				<HeroSectionWithImage imageSrc='https://ohmonpepet-dev.s3.eu-west-3.amazonaws.com/email-assets/message.png'>
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
