'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const Nav = () => {
	const pathname = usePathname()
	return (
		<nav className="menu">
			<ul className="flex justify-center items-center py-2.5">
				<li className="list-none px-1">
					<Link href="/" className={	pathname === '/' ? 'text-red-600' : ''}>
						Strona główna
					</Link>
				</li>
				<li className="list-none px-1">
					<Link href="/articles" className={pathname === '/articles' ? 'text-red-600' : ''}>
						Artykuły
					</Link>
				</li>
				<li className="list-none px-1">
					<Link href="/about" className={pathname === '/about' ? 'text-red-600' : ''}>
						O mnie
					</Link>
				</li>
				<li>
					<Link href="/contact" className={pathname === '/contact' ? 'text-red-600' : ''}>
						Kontakt
					</Link>
				</li>
			</ul>
		</nav>
	)
}
