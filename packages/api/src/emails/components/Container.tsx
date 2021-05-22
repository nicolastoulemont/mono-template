import React from 'react'

export function Container({ children }: { children: React.ReactNode }) {
	return (
		<div
			style={{
				backgroundColor: '#f2f2f2',
				fontFamily:
					"-apple-system,-webkit-system-font,'Segoe UI','Helvetica Neue',Helvetica,Arial,sans-serif!important",
				tableLayout: 'fixed',
				width: '100% !important',
			}}
		>
			<table
				style={{ lineHeight: '160% !important', margin: '0', padding: '0' }}
				width='100%'
			>
				<tbody>
					<tr>
						<td
							style={{
								backgroundColor: '#ffffff !important',
								borderCollapse: 'collapse',
							}}
							width='100%'
						>
							<div style={{ maxWidth: '660px', margin: '0 auto' }}>{children}</div>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	)
}
