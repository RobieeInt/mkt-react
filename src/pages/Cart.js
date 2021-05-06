import React from 'react';

import Header from '../parts/Header';
import Breadcrumb from '../components/Breadcrumb';
import ShopCart from '../parts/Cart/ShopCart';
import ShippingDetails from '../parts/Cart/ShippingDetails';

import Sitemap from '../parts/Sitemap';
import Footer from '../parts/Footer';

export default function Home() {
	return (
		<>
			<Header theme="black" />

			<Breadcrumb
				list={[
					{ url: '/', name: 'Home' },
					{ url: '/cart', name: 'Isi Keranjang' }
				]}
			/>

			<section className="md:py-16">
				<div className="container mx-auto px-4">
					<div className="flex -mx-4 flex-wrap">
						<ShopCart />
						<ShippingDetails />
					</div>
				</div>
			</section>
			<Sitemap />
			<Footer />
		</>
	);
}
