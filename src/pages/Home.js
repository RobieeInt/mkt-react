import React from 'react';
import Header from '../parts/Header';
import Hero from '../parts/Hero';
import Browse from '../parts/Home/Browse';
import JustArrived from '../parts/Home/JustArrived';
// import Clients from '../parts/Clients';
import Sitemap from '../parts/Sitemap';
import Footer from '../parts/Footer';

export default function Home(props) {
	return (
		<>
			<Header theme="white" position="absolute" />
			<Hero />
			<Browse />
			<JustArrived />
			{/* <Clients /> */}
			<Sitemap />
			<Footer />
		</>
	);
}
