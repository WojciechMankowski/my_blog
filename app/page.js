import { data } from './articles/data'
import { Aricle } from './components/aricle'

export default function Home() {
	return (
		<section className="w-4/5 p-5 flex flex-col justify-center items-center">
			{data.map((articleData, id) => {
				return (
					<Aricle
						title={articleData.title}
						author={articleData.author}
						content={articleData.content}
						commentsCount={articleData.commentsCount}
						id
					/>
				)
			})}
		</section>
	)
}
