'use client'
import { useEffect, useState } from 'react'
import styles from './Posts.module.scss'
import Post from './components/post/Post'

export default function Posts() {
	const [data, setData] = useState<TPost[]>([])
	const [isLoading, setLoading] = useState(true)

	useEffect(() => {
		fetch('http://localhost:4200/posts', { method: 'GET' })
			.then(res => res.json())
			.then(data => {
				setData(data)
				setLoading(false)
			})
	}, [])

	if (isLoading) return <p>Loading...</p>
	if (data.length === 0) return <p>No profile data</p>

	return (
		<section className={styles.posts}>
			{data.map(post => (
				<Post key={post.id} info={post} />
			))}
		</section>
	)
}
