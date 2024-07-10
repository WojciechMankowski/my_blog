import { Nav } from './nav'
export const Header = () => (
	<header className="bg-primary w-full text-center">
		<div className="p-2.5 flex flex-row justify-center items-center">
			<img src="../assets/logo.png" alt="Logo programista Wojciech" className="rrounded-full w-20 h-20" />
			<h1 className="pl-5 text-3xl font-bold text-gray-900">Blog programista Wojciech</h1>
		</div>
		<Nav />
	</header>
)
