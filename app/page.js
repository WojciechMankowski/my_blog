import { data } from './articles/data'
import { Article } from './components/aricle'

export default function Home() {
	return (
		<section className="w-4/5 p-5 flex flex-col justify-center items-center">
			{data.map((articleData, ids) => {
				return (
					<Article
						title={articleData.title}
						author={articleData.author}
						content={articleData.content}
						date={articleData.date}
						commentsCount={articleData.commentsCount}
						id={ids}
					/>
				)
			})}
		</section>
	)
}
