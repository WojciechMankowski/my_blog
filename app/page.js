import { data } from './articles/data'
import { Aricle } from './components/aricle'

export default function Home() {
	return (
		<section className="container ">
		
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
}
