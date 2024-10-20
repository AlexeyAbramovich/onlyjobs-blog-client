import { PropsWithChildren } from 'react'
import styles from './Layout.module.scss'

export default function Layout({ children }: PropsWithChildren) {
	return <div className={styles.layout}>{children}</div>
}
