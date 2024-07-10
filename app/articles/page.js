import { data } from './data'
import { Article } from '../components/aricle'

const Articles = () => (
	<section className="w-4/5 p-5 flex flex-col justify-center items-center">
		{data.map((articleData, id) => (
			<Article
				key={id} // Dodaj klucz key dla każdego elementu w mapowaniu
				title={articleData.title}
				author={articleData.author}
				content={articleData.content}
				commentsCount={articleData.commentsCount}
				id={id}
				
			/>
		))}
	</section>
)

export default Articles
