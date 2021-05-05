import React from 'react';
import Header from '../parts/Header';

import Breadcrumb from '../components/Breadcrumb';
import ProductDetails from '../parts/Details/ProductDetails';
import Suggestion from '../parts/Details/Suggestion';
import Sitemap from '../parts/Sitemap';
import Footer from '../parts/Footer';

export default function Home(props) {
	return (
		<>
			<Header theme="black" />

			<Breadcrumb
				list={[
					{ url: '/', name: 'Home' },
					{ url: '/categories/111', name: 'Obat-obatan' },
					{ url: '/categories/111/products/454', name: 'Details' }
				]}
			/>

			<ProductDetails />
			<Suggestion />
			<Sitemap />
			<Footer />
		</>
	);
}
