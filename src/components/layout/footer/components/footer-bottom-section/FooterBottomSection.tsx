import Link from '@/components/ui/link/Link'
import styles from './FooterBottomSection.module.scss'

export default function FooterBottomSection() {
	return (
		<section className={styles.footer_bottom_section}>
			<p>© 2077 Untitled UI. All rights reserved.</p>
			<nav>
				<Link link='/terms'>Terms</Link>
				<Link link='/privacy-policy'>Privacy</Link>
				<Link link='/cookies'>Cookies</Link>
			</nav>
		</section>
	)
}
