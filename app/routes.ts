import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
	//user routes

	route('user-login', 'routes/user-login.tsx'),

	//vendor routes

	//password change routes

	//page routes

	index('routes/home.tsx'),

	route('wedding-directory', 'routes/wedding-directory.tsx', [
		route('categories', 'routes/wedding-directory/categories.tsx'),
	]),

	route('featured-stories', 'routes/featured-stories.tsx'),
	route('vendorspotlight', 'routes/vendorspotlight.tsx'),
	route('about', 'routes/about.tsx'),
] satisfies RouteConfig;
