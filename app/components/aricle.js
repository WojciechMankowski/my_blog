import Link from 'next/link'

export const Aricle = ({ title, author, date, content, commentsCount, id }) => {
	return (
		<div className="flex w-full flex-col border-opacity-50 justify-center items-center flex-wrap" key={id}>
			<div className="title bg-orange-300 w-1/2 p-5">
				<h2 className="text-2xl font-medium text-gray-700">{title}</h2>
				<p className="pl-2.5 pt-2.5">
					Autor: {author}| Data: {date}
				</p>
			</div>
			<p className="w-1/2 h-10vh p-2.5">{content}</p>
			<button className="btn btn-rounded bg-primary p-3 ">
				<Link href={'/articles/' + id} className="comennts btn btn-active btn-link">
					Czytaj więcej
				</Link>
			</button>

			<p className="mb-6 mt-4 p-4">
				<Link href={'/' + id} className="comennts btn btn-active btn-link">
					Komentarze ({commentsCount})
				</Link>
			</p>
		</div>
	)
}
