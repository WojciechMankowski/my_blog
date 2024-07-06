import Image from 'next/image'
import Link from 'next/link'
import { data } from './articles/article'

export default function Home() {
	return (
		<section className="container">
			{data.map(article => {
				return (
					<div className='article'>
						<div className="title">
							<h2>{article['title']}</h2>
							<p className="meta">
								Autor: {article['author']}| Data: {article['date']}
							</p>
						</div>
						<p className="content">{article['content']}</p>
						<button className="btn">Czytaj więcej</button>
						<p className="comments">
							<Link href="#" className='comments'>Komentarze ({article['commentsCount']})</Link>
						</p>
					</div>
				)
			})}
		</section>
	)
}
