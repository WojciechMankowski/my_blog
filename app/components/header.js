import { Nav } from "./nav"
export const Header = () => (
    <header className="header">
					<div className="logo">
						<img src="./assets/logo.png" alt="Logo programista Wojciech" id="logo" />
						<h1>Blog programista Wojciech</h1>
					</div>
					<Nav />
				</header>
)