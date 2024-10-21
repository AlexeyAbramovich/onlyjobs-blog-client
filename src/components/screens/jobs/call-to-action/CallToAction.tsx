import styles from './CallToAction.module.scss'
import EasyTrackingPlatform from './components/easy-tracking-platform/EasyTrackingPlatform'
import UserFriendlyPlatform from './components/user-friendly-platform/UserFriendlyPlatform'

export default function CallToAction() {
	return (
		<article className={styles.call_to_action}>
			<EasyTrackingPlatform />
			<UserFriendlyPlatform />
		</article>
	)
}
