import FooterSubscribeSection from './components/footer-subscribe-section/FooterSubscribeSection'
import FooterTopNavigation from './components/footer-top-navigation/FooterTopNavigation'
import styles from './FooterTopSection.module.scss'

export default function FooterTopSection() {
	return (
		<section className={styles.footer_top_section}>
			<FooterTopNavigation />
			<FooterSubscribeSection />
		</section>
	)
}
