import Link from '@/components/ui/link/Link'
import Image from 'next/image'
import styles from './FooterTopNavigation.module.scss'

export default function FooterTopNavigation() {
	return (
		<section className={styles.footer_top_navigation}>
			<Image
				src='/logo-only.svg'
				alt='Onlyjobs.it site logo'
				width={116}
				height={24}
			/>
			<nav>
				<Link link='/job-board'>Job Board</Link>
				<Link link='/about-us'>About Us</Link>
				<Link link='/pricing'>Pricing</Link>
				<Link link='/blog'>Blog</Link>
			</nav>
		</section>
	)
}
