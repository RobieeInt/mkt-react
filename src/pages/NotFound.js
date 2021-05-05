import React from 'react';

import { Link } from 'react-router-dom';

import Header from '../parts/Header';
import Breadcrumb from '../components/Breadcrumb';
import ShopCart from '../parts/Cart/ShopCart';
import ShippingDetails from '../parts/Cart/ShippingDetails';

import Sitemap from '../parts/Sitemap';
import Footer from '../parts/Footer';
import PageErrorMessage from '../parts/PageErrorMessage';

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
