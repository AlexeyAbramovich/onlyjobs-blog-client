import { PropsWithChildren } from 'react'
import styles from './OtherPagesLayout.module.scss'

export default function OtherPagesLayout({ children }: PropsWithChildren) {
	return <main className={styles.layout}>{children}</main>
}
