import Image from 'next/image'
import styles from './UserFriendlyPlatform.module.scss'

export default function UserFriendlyPlatform() {
	return (
		<section className={styles.user_friendly_platform}>
			<p>
				The platform is user-friendly and makes it easy to post job listings,
				screen resumes, and communicate with potential candidates. The candidate
				match feature is particularly useful in finding the right fit for open
				positions.
			</p>
			<div className={styles.wrapper}>
				<div className={styles.ai_chat}>
					<h2>Chat GPT</h2>
					<h3>AI chat, from OpenAI</h3>
				</div>
				<Image src='/images/stars.svg' alt='Rating' width={132} height={20} />
			</div>
			<Image
				src='/images/site-preview.svg'
				alt='Site preview'
				width={806}
				height={350}
			/>
		</section>
	)
}
