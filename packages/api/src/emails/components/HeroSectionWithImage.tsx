import React from 'react'
import { DarkTextColor } from '../variables'
interface HeroSectionWithImageParams {
	children: React.ReactNode
	imageSrc: string
}

export function HeroSectionWithImage({ children, imageSrc }: HeroSectionWithImageParams) {
	return (
		<table
			style={{ width: '100%' }}
			// @ts-ignore
			border='0'
			cellSpacing='0'
			cellPadding='0'
			role='presentation'
		>
			<tbody>
				<tr>
					<td style={{ paddingBottom: '20px', borderBottom: '1px solid #d6d6d6' }}>
						<table
							cellSpacing='0'
							cellPadding='0'
							width='100%'
							// @ts-ignore
							border='0'
							style={{
								margin: '0',
								padding: '0',
								width: '100%',
								fontSize: '14px',
								fontWeight: 300,
								color: '#666',
								lineHeight: '160% !important',
							}}
						>
							<tbody>
								<tr>
									<td
										// @ts-ignore
										align='left'
										style={{
											fontFamily:
												"-apple-system,-webkit-system-font,'Segoe UI','Helvetica Neue',Helvetica,Arial,sans-serif!important",
											textAlign: 'left',
											fontSize: '0',
											direction: 'ltr',
											borderCollapse: 'collapse',
											padding: '10px 0 0',
											textDecoration: 'none',
											margin: '0',
										}}
									>
										<table
											width='100%'
											style={{
												borderSpacing: '0',
												fontFamily: 'Arial,sans-serif',
												color: DarkTextColor,
												margin: '0',
												padding: '0',
											}}
										>
											<tbody>
												<tr>
													<td
														style={{
															borderCollapse: 'collapse',
															padding: '0px',
														}}
													>
														<table
															style={{
																borderSpacing: '0',
																width: '100%',
																fontSize: '12px',
																margin: '0',
																padding: '0',
															}}
														>
															<tbody>
																<tr>
																	<td
																		style={{
																			borderCollapse:
																				'collapse',
																			padding: '20px',
																			textAlign: 'center',
																		}}
																	>
																		<img
																			src={imageSrc}
																			style={{
																				width: '200px',
																				margin: '0 auto',
																			}}
																			alt=''
																			className='large-image'
																		/>
																	</td>
																</tr>
															</tbody>
														</table>
													</td>
												</tr>
											</tbody>
										</table>

										<table
											width='100%'
											style={{
												borderSpacing: '0',
												fontFamily: 'Arial, sans-serif',
												color: '#333333',
												margin: '0',
												padding: '0',
											}}
										>
											<tbody>
												<tr>
													<td
														style={{
															borderCollapse: 'collapse',
															padding: '0px',
														}}
													>
														<table
															// @ts-ignore
															align='left'
															style={{
																borderSpacing: '0',
																textAlign: 'left',
																margin: '0',
																padding: '0',
																color: `${DarkTextColor} !important`,
															}}
														>
															<tbody>
																<tr>
																	<td
																		style={{
																			borderCollapse:
																				'collapse',
																			padding: '10px',
																		}}
																	>
																		{children}
																	</td>
																</tr>
															</tbody>
														</table>
													</td>
												</tr>
											</tbody>
										</table>
									</td>
								</tr>
							</tbody>
						</table>
					</td>
				</tr>
			</tbody>
		</table>
	)
}
