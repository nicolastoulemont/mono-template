import React from 'react'

export function Table({
	children,
	tableProps = {},
}: {
	children: React.ReactNode
	tableProps?: React.DetailedHTMLProps<
		React.TableHTMLAttributes<HTMLTableElement>,
		HTMLTableElement
	>
}) {
	return (
		<table role='presentation' {...tableProps} width='100%'>
			<tbody>{children}</tbody>
		</table>
	)
}
