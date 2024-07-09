import Link from 'next/link'

export const Aricle = ({ title, author, date, content, commentsCount }) => {
	return (
		<div>
			<div className="title">
				<h2>{title}</h2>
				<p className="meta">
					Autor: {author}| Data: {date}
				</p>
			</div>
			<p className="content">{content}</p>
			<button className="btn">Czytaj więcej</button>
			<p className="comments">
				<Link href="#" className="comennts">
					Komentarze ({commentsCount})
				</Link>
			</p>
		</div>
	)
}
