import Link from 'next/link'

export const Nav = () => (
	<nav className="menu">
		<ul>
			<li>
				<Link href="/">Strona główna</Link>
			</li>
			<li>
				<Link href="/articles">Artykuły</Link>
			</li>
			<li>
				<Link href="/about">O mnie</Link>
			</li>
			<li>
				<Link href="/contact">Kontakt</Link>
			</li>
		</ul>
	</nav>
)
