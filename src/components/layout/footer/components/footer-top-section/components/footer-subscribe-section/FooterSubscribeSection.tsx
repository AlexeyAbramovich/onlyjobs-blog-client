import Button from '@/components/ui/button/Button'
import Field from '@/components/ui/field/Field'
import PrivacyPolicy from '@/components/ui/privacy-policy/PrivacyPolicy'
import styles from './FooterSubscribeSection.module.scss'

export default function FooterSubscribeSection() {
	return (
		<section className={styles.footer_subscribe_section}>
			<h2>Be the first to see new jobs</h2>
			<h3>
				Subscribe new jobs alert &<br />
				never miss new listed jobs
			</h3>
			<form>
				<Field />
				<Button padding='pd-15-28'>Subscribe</Button>
			</form>
			<PrivacyPolicy />
		</section>
	)
}
