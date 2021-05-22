import React from 'react'

interface ButtonParams {
	href: string
	text: string
}

export function Button({ href, text }: ButtonParams) {
	return (
		<tr>
			<td width='100%'>
				<table
					style={{
						height: '31px',
						width: '100%',
						maxWidth: '370px',
						padding: '50px',
						textAlign: 'left',
						margin: '0 auto',
					}}
				>
					<tbody>
						<tr>
							<td
								style={{
									backgroundColor: '#0070c9',
									fontFamily:
										"system,-apple-system,-webkit-system-font,'Segoe UI','Helvetica Neue',Helvetica,Arial,sans-serif!important",
									color: '#ffffff',
									fontSize: '17px',
									paddingLeft: '17px',
									paddingRight: '17px',
									paddingTop: '3px',
									paddingBottom: '4px',
									lineHeight: '1.52947',
									background: 'linear-gradient(#42a1ec,#0070c9)',
									border: '1px solid #07c',
									borderRadius: '4px',
									display: 'block',
									textAlign: 'center',
									whiteSpace: 'nowrap',
									fontWeight: 400,
								}}
							>
								<a
									href={href}
									target='_blank'
									style={{
										textDecoration: 'none',
										color: '#ffffff !important',
										display: 'block',
									}}
								>
									<span style={{ color: '#ffffff' }}>{text}</span>
								</a>
							</td>
						</tr>
					</tbody>
				</table>
			</td>
		</tr>
	)
}
