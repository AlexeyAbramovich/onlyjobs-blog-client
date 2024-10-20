'use client'
import cn from 'clsx'
import NextLink from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'
import styles from './Link.module.scss'

type LinkProps = {
	link: string
	children: ReactNode
}

export default function Link({ link, children }: LinkProps) {
	const pathname = usePathname()

	return (
		<NextLink
			href={link}
			className={cn(styles.link, { [styles.active]: pathname === link })}
		>
			{children}
		</NextLink>
	)
}
