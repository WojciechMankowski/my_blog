import { data } from './article'
import Link from 'next/link'
const articles = () => (
	<section className="container">
		{data.map(article => {
			return (
				<div>
					<div className="title">
						<h2>{article['title']}</h2>
						<p className="meta">
							Autor: {article['author']}| Data: {article['date']}
						</p>
					</div>
					<p className="content">{article['content']}</p>
					<button className="btn">Czytaj więcej</button>
					<p className="comments">
						<Link href="#" className='comennts'>Komentarze ({article['commentsCount']})</Link>
					</p>
				</div>
			)
		})}
	</section>
)

export default articles
