import Button from '@/components/ui/button/Button'
import Link from '@/components/ui/link/Link'
import Image from 'next/image'
import styles from './Header.module.scss'

export default function Header() {
	return (
		<header className={styles.header}>
			<Image
				priority
				src='/logo.svg'
				alt='Onlyjobs.it site logo'
				width={172}
				height={24}
			/>
			<div className={styles.wrapper}>
				<nav>
					<Link link='/'>Jobs</Link>
					<Link link='/smart-match'>Smart Match</Link>
				</nav>
				<div className={styles.btn_wrapper}>
					<Button isMain={false} padding='pd-12-16'>
						Vacancy Feed
					</Button>
					<Button isMain={true} padding='pd-12-21'>
						Sign Up
					</Button>
				</div>
			</div>
		</header>
	)
}
