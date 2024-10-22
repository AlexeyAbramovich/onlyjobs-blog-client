import FooterBottomSection from './components/footer-bottom-section/FooterBottomSection'
import FooterTopSection from './components/footer-top-section/FooterTopSection'
import styles from './Footer.module.scss'

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<FooterTopSection />
			<FooterBottomSection />
		</footer>
	)
}
