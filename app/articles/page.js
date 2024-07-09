import { data } from './data'
import { Aricle } from '../components/aricle'

const articles = () => (
	<section className="container">
		{data.map(articleData => {
			return (
				<Aricle
					title={articleData.title}
					author={articleData.author}
					content={articleData.content}
					commentsCount={articleData.commentsCount}
				/>
			)
		})}
	</section>
)

export default articles
