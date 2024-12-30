import { NavLink } from 'react-router';
import type { Route } from './+types/home';

export function meta({}: Route.MetaArgs) {
	return [{ title: 'Kasal Kasali Kasalo' }, { name: 'description', content: 'A wedding directory' }];
}

export default function Home({}: Route.ComponentProps) {
	return (
		<div className='px-6 py-10 max-w-3xl mx-auto space-y-6'>
			<h1 className='text-2xl font-semibold text-center text-gray-800'>Handa Ka Na Bang Makisalo?</h1>
			<p className='text-lg text-gray-700'>
				Welcome to <span className='italic'>Kasal Kasali Kasalo</span>, your one-stop wedding directory.
			</p>
			<p className='text-gray-600'>
				Here you can find all your wedding suppliers' needs, from venues to catering, photographers, and more.
			</p>
			<p className='text-gray-600'>
				From venue recommendations to catering services, we have compiled the best options to make your special day
				unforgettable. Browse through our extensive list of vendors, all dedicated to providing top-notch services for your
				dream wedding.
			</p>
			<p className='text-gray-600'>
				Planning a wedding can be overwhelming, but with Kasal Kasali Kasalo, it's easier than ever. Use our platform to
				compare packages, read reviews, and connect directly with trusted professionals who understand your vision.
			</p>
			<p className='text-gray-600'>
				Visit our{' '}
				<NavLink className='text-blue-600 underline ' to='/wedding-directory'>
					wedding directory
				</NavLink>{' '}
				today and let us help you make your dream wedding a reality.
			</p>
		</div>
	);
}
