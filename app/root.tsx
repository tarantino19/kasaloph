import { isRouteErrorResponse, Links, Meta, NavLink, Outlet, Scripts, ScrollRestoration } from 'react-router';

import type { Route } from './+types/root';
import stylesheet from './app.css?url';

export const links: Route.LinksFunction = () => [
	{ rel: 'preconnect', href: 'https://fonts.googleapis.com' },
	{
		rel: 'preconnect',
		href: 'https://fonts.gstatic.com',
		crossOrigin: 'anonymous',
	},
	{
		rel: 'stylesheet',
		href:
			'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap',
	},
	{ rel: 'stylesheet', href: stylesheet },
];

export function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<head>
				<meta charSet='utf-8' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<Meta />
				<Links />
			</head>
			<body>
				{children}
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	);
}

export default function App() {
	return (
		<div>
			<div className='text-xl p-4 w-full md:w-[calc(100%-4rem)] bg-primary flex justify-between items-center mx-8 font-bold'>
				<h1>Kasal Kasali Kasalo</h1>
			</div>
			<nav className='text-md p-4 w-full md:w-[calc(100%-4rem)] bg-primary flex justify-between items-center mx-8'>
				<ul className='flex md:flex-row flex-col space-x-4 md:space-x-4 text-xl md:text-lg'>
					<li className='group'>
						<NavLink
							to='/'
							className={({ isActive }) =>
								`relative inline-block text-gray-800 hover:text-gray-600 transition-all duration-300 ${
									isActive ? 'font-bold text-gray-900' : ''
								}`
							}
						>
							Home
							<span className='absolute bottom-[-4px] left-0 w-0 h-1 bg-gray-600 transition-all duration-300 group-hover:w-full'></span>
						</NavLink>
					</li>
					<li className='group'>
						<NavLink
							to='/wedding-directory'
							className={({ isActive }) =>
								`relative inline-block text-gray-800 hover:text-gray-600 transition-all duration-300 ${
									isActive ? 'font-bold text-gray-900' : ''
								}`
							}
						>
							Wedding Directory
							<span className='absolute bottom-[-4px] left-0 w-0 h-1 bg-gray-600 transition-all duration-300 group-hover:w-full'></span>
						</NavLink>
					</li>
					<li className='group'>
						<NavLink
							to='/about'
							className={({ isActive }) =>
								`relative inline-block text-gray-800 hover:text-gray-600 transition-all duration-300 ${
									isActive ? 'font-bold text-gray-900' : ''
								}`
							}
						>
							About
							<span className='absolute bottom-[-4px] left-0 w-0 h-1 bg-gray-600 transition-all duration-300 group-hover:w-full'></span>
						</NavLink>
					</li>
					<li className='group'>
						<NavLink
							to='/featured-stories'
							className={({ isActive }) =>
								`relative inline-block text-gray-800 hover:text-gray-600 transition-all duration-300 ${
									isActive ? 'font-bold text-gray-900' : ''
								}`
							}
						>
							Featured Stories
							<span className='absolute bottom-[-4px] left-0 w-0 h-1 bg-gray-600 transition-all duration-300 group-hover:w-full'></span>
						</NavLink>
					</li>
					<li className='group'>
						<NavLink
							to='/vendorspotlight'
							className={({ isActive }) =>
								`relative inline-block text-gray-800 hover:text-gray-600 transition-all duration-300 ${
									isActive ? 'font-bold text-gray-900' : ''
								}`
							}
						>
							Vendor Spotlight
							<span className='absolute bottom-[-4px] left-0 w-0 h-1 bg-gray-600 transition-all duration-300 group-hover:w-full'></span>
						</NavLink>
					</li>
					<li className='group'>
						<button className='text-lg md:text-lg'>
							<NavLink
								to='/user-login'
								className='relative inline-block text-gray-300 hover:text-gray-600 transition-all duration-300'
							>
								User Log In
								<span className='absolute bottom-[-4px] left-0 w-0 h-1 bg-gray-600 transition-all duration-300 group-hover:w-full'></span>
							</NavLink>
						</button>
					</li>
					<li className='group'>
						<button className='text-lg md:text-lg'>
							<NavLink
								to='/user-login'
								className='relative inline-block text-gray-300 hover:text-gray-600 transition-all duration-300'
							>
								Vendor Log In
								<span className='absolute bottom-[-4px] left-0 w-0 h-1 bg-gray-600 transition-all duration-300 group-hover:w-full'></span>
							</NavLink>
						</button>
					</li>
					<li className='group'>
						<button className='text-lg md:text-lg'>
							<NavLink
								to='/user-login'
								className='relative inline-block text-gray-300 hover:text-gray-600 transition-all duration-300'
							>
								User Profile
								<span className='absolute bottom-[-4px] left-0 w-0 h-1 bg-gray-600 transition-all duration-300 group-hover:w-full'></span>
							</NavLink>
						</button>
					</li>
					<li className='group'>
						<button className='text-lg md:text-lg'>
							<NavLink
								to='/user-login'
								className='relative inline-block text-gray-300 hover:text-gray-600 transition-all duration-300'
							>
								Vendor Profile
								<span className='absolute bottom-[-4px] left-0 w-0 h-1 bg-gray-600 transition-all duration-300 group-hover:w-full'></span>
							</NavLink>
						</button>
					</li>
				</ul>
			</nav>

			{/* Outlet content with larger text */}
			<div className='p-4 w-full md:w-[calc(100%-4rem)] mx-8 text-lg md:text-xl'>
				<Outlet />
			</div>
		</div>
	);
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
	let message = 'Oops!';
	let details = 'An unexpected error occurred.';
	let stack: string | undefined;

	if (isRouteErrorResponse(error)) {
		message = error.status === 404 ? '404' : 'Error';
		details = error.status === 404 ? 'The requested page could not be found.' : error.statusText || details;
	} else if (import.meta.env.DEV && error && error instanceof Error) {
		details = error.message;
		stack = error.stack;
	}

	return (
		<main className='pt-16 p-4 container mx-auto'>
			<h1>{message}</h1>
			<p>{details}</p>
			{stack && (
				<pre className='w-full p-4 overflow-x-auto'>
					<code>{stack}</code>
				</pre>
			)}
		</main>
	);
}
