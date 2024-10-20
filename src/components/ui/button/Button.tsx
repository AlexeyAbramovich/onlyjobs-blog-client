import cn from 'clsx'
import { ReactNode } from 'react'
import styles from './Button.module.scss'

type ButtonProps = {
	isMain: boolean
	padding: string
	children: ReactNode
}

export default function Button({
	isMain = true,
	padding = 'pd-12-16',
	children,
}: ButtonProps) {
	console.log(styles[padding])
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
