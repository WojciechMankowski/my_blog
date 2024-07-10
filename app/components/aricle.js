import Link from 'next/link'

export const Article = ({ title, author, date, content, commentsCount, id }) => {
  return (
    <div className="flex flex-col border-opacity-50 justify-center items-center flex-wrap" key={id}>
      <div className="title bg-orange-300 w-full p-5 rounded-lg text-center">
        <h2 className="text-2xl font-medium text-gray-700">{title}</h2>
        <p className="text-sm pl-2.5 pt-2.5">
          Autor: {author} | Data: {date}
        </p>
      </div>
      <p className="w-1/2 h-10vh p-2.5">{content}</p>
      <button className="btn rounded bg-primary p-3 flex items-center mb-10">
        <Link href={'/articles/' + id} className="text-white hover:text-opacity-75">
          Czytaj więcej
        </Link>
      </button>

    </div>
  )
}
