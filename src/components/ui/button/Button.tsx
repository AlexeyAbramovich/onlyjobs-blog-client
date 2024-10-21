import cn from 'clsx'
import { ReactNode } from 'react'
import styles from './Button.module.scss'

type ButtonProps = {
	padding: 'pd-12-16' | 'pd-12-21' | 'pd-16-0' | 'pd-15-28'
	children: ReactNode
	isMain?: boolean
}

export default function Button({
	padding = 'pd-12-16',
	children,
	isMain = true,
}: ButtonProps) {
	return (
		<button
			className={cn(
				styles.button,
				isMain ? styles.main : styles.accent,
				styles[padding]
			)}
		>
			{children}
		</button>
	)
}
