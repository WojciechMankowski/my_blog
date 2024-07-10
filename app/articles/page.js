import { data } from './data'
import { Aricle } from '../components/aricle'

const articles = () => (
	<section className="w-4/5 p-5 flex flex-col justify-center items-center">
		{data.map((articleData, id) => {
			return (
				<Aricle
					title={articleData.title}
					author={articleData.author}
					content={articleData.content}
					mb-6
					mt-4
					p-4Count={articleData.commentsCount}
					id={id}
				/>
			)
		})}
	</section>
)

export default articles
