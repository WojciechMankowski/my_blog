import { data } from "../data"
const page = ({ params }) => {
	const id = params.id
	const article = data[id]
	return (
		<div className="flex flex-col border-opacity-50 justify-center items-center flex-wrap" key={id}>
		<div className="title bg-orange-300 w-1/2 p-5 rounded-lg text-center mt-5">
		  <h2 className="text-2xl font-medium text-gray-700">{article.title}</h2>
		  <p className="text-sm pl-2.5 pt-2.5">
			Autor: {article.author} | Data:  {article.date}
		  </p>
		</div>
		<p className="w-1/2 h-10vh p-2.5">
		{article.fullcontent}
		</p>
		
  </div>
	)
}

export default page
