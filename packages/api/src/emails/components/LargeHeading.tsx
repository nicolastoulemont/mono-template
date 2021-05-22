import React from 'react'

export function LargeHeading({ text }: { text: string }) {
	return (
		<h2
			style={{
				fontFamily:
					"-apple-system,-webkit-system-font,'Segoe UI','Helvetica Neue',Helvetica,Arial,sans-serif!important",
				fontSize: '28px',
				fontWeight: 400,
				margin: '0',
				lineHeight: '110% !important',
				padding: '0',
			}}
		>
			{text}
		</h2>
	)
}
