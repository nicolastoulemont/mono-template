import React from 'react'
import { DarkTextColor } from '../variables'

export function Text({ text }: { text: string }) {
	return (
		<p
			style={{
				fontFamily:
					"-apple-system,-webkit-system-font,'Segoe UI','Helvetica Neue',Helvetica,Arial,sans-serif!important",
				fontSize: '17px',
				fontWeight: 400,
				lineHeight: '120% !important',
				color: DarkTextColor,
			}}
		>
			{text}
		</p>
	)
}
