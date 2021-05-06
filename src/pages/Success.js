import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
import Footer from '../parts/Footer';
import Header from '../parts/Header';
import Sitemap from '../parts/Sitemap';

export default function Success() {
	return (
		<>
			<Header />

			<Breadcrumb
				list={[
					{ url: '/', name: 'Home' },
					{ url: '/success', name: 'Sukses Checkout' }
				]}
			/>
			<section className="">
				<div NameclassName="container mx-auto min-h-screen">
					<div NameclassName="flex flex-col items-center justify-center">
						<div NameclassName="w-full md:w-4/12 text-center">
							<img src="/images/content/illustration-success.png" alt="congrats illustration" />
							<h2 NameclassName="text-3xl font-semibold mb-6">Ah yes it’s success!</h2>
							<p NameclassName="text-lg mb-12">
								Barang yang anda beli akan kami kirimkan saat ini juga so now please sit tight and be
								ready for it
							</p>
							<Link
								to="/"
								NameclassName="text-gray-900 bg-red-200 focus:outline-none w-full py-3 rounded-full text-lg focus:text-black transition-all duration-200 px-8 cursor-pointer"
							>
								Back to Shop
							</Link>
						</div>
					</div>
				</div>
			</section>

			<Sitemap />
			<Footer />
		</>
	);
}
