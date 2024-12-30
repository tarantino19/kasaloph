import type { Route } from './+types/home';

export function meta({}: Route.MetaArgs) {
	return [{ title: 'Kasal Kasali Kasalo' }, { name: 'description', content: 'A wedding directory' }];
}

export default function Home({}: Route.ComponentProps) {
	return (
		<>
			<h1 className='text-md font-medium'>Handa Ka Na Bang Makisalo?</h1>
		</>
	);
}
