import Link from 'next/link'
import styles from './PrivacyPolicy.module.scss'

export default function PrivacyPolicy() {
	return (
		<p className={styles.privacy_policy}>
			We care about your data in our{' '}
			<Link href={'/privacy-policy'}>privacy policy</Link>
		</p>
	)
}
