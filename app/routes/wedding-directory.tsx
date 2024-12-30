// src/routes/wedding-directory.tsx
import { Outlet } from 'react-router';

const WeddingDirectory = () => {
	return (
		<div>
			<h1>Wedding Directory</h1>
			<p>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui quisquam, fugit aliquid omnis sapiente fuga aliquam
				molestiae minus id officiis ullam. Aperiam, necessitatibus numquam? Id debitis neque asperiores labore ipsum.
			</p>
			<p>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui quisquam, fugit aliquid omnis sapiente fuga aliquam
				molestiae minus id officiis ullam. Aperiam, necessitatibus numquam? Id debitis neque asperiores labore ipsum.
			</p>{' '}
			<p>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui quisquam, fugit aliquid omnis sapiente fuga aliquam
				molestiae minus id officiis ullam. Aperiam, necessitatibus numquam? Id debitis neque asperiores labore ipsum.
			</p>{' '}
			<p>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui quisquam, fugit aliquid omnis sapiente fuga aliquam
				molestiae minus id officiis ullam. Aperiam, necessitatibus numquam? Id debitis neque asperiores labore ipsum.
			</p>
			<Outlet />
		</div>
	);
};

export default WeddingDirectory;
