import React from 'react'

export function Row({ children }: { children: React.ReactNode }) {
	return (
		<tr>
			<td style={{ padding: '30px 10px' }}>{children}</td>
		</tr>
	)
}
