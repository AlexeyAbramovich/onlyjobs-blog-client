import Button from '@/components/ui/button/Button'
import Image from 'next/image'
import styles from './EasyTrackingPlatform.module.scss'

export default function EasyTrackingPlatform() {
	return (
		<section className={styles.easy_tracking_advantage}>
			<Image
				src='/logo-only.svg'
				alt='Onlyjobs.it site logo'
				width={116}
				height={24}
			/>
			<h2>Growth performance tracking made easy</h2>
			<h3>Find your perfect job easy</h3>
			<Button padding='pd-16-0'>Try Now</Button>
		</section>
	)
}
