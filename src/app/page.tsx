import Layout from '@/components/layout/layout/Layout'
import CallToAction from '@/components/screens/jobs/call-to-action/CallToAction'
import Intro from '@/components/screens/jobs/intro/Intro'
import Posts from '@/components/screens/jobs/posts/Posts'

export default function Jobs() {
	return (
		<Layout>
			<Intro />
			<Posts />
			<CallToAction />
		</Layout>
	)
}
