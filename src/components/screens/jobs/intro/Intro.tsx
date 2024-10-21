import Button from '@/components/ui/button/Button'
import Field from '@/components/ui/field/Field'
import PrivacyPolicy from '@/components/ui/privacy-policy/PrivacyPolicy'
import styles from './Intro.module.scss'

export default function Intro() {
	return (
		<section className={styles.intro}>
			<h2>Resources and insights</h2>
			<h3>
				The latest industry news, interviews, technologies, and resources.
			</h3>
			<div className={styles.wrapper}>
				<Field />
				<Button padding='pd-12-16'>Subscribe</Button>
			</div>
			<PrivacyPolicy />
		</section>
	)
}
