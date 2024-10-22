import Link from 'next/link'
import style from './Post.module.scss'

export default function Post({ info }: { info: TPost }) {
	return (
		<Link className={style.post} href={'/' + info.title.split(' ').join('-')}>
			<img src={info.img} alt='Post image' />
			<div className={style.author_wrapper}>
				<div className={style.author}>
					<img src={info.authorImg} alt='Author image' />
					<span aria-label='Author name'>{info.author}</span>
				</div>
				<span aria-label='Post tag'>{info.tag}</span>
			</div>
			<h2>{info.title}</h2>
			<p>
				{info.content.length > 104
					? info.content.substring(0, 104) + '...'
					: info.content}
			</p>
			<div className={style.published}>
				<span aria-label='Published at'>{info.published}</span>
				<span aria-label='Time to read'>{info.timeToRead + ' min read'}</span>
			</div>
		</Link>
	)
}
