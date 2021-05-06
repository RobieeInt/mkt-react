import React from 'react';
import Footer from '../parts/Footer';
import Header from '../parts/Header';
import PageErrorMessage from '../parts/PageErrorMessage';
import Sitemap from '../parts/Sitemap';

export default function NotFound() {
	return (
		<>
			<Header />

			<PageErrorMessage />

			<Sitemap />
			<Footer />
		</>
	);
}
