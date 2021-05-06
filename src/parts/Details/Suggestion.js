import React from 'react';

export default function Suggestion() {
	return (
		<section className="bg-gray-100 px-4 py-16">
			<div className="container mx-auto">
				<div className="flex flex-start mb-4">
					<h3 className="text-2xl capitalize font-semibold">
						Mungkin anda juga mencari <br className="" />
						apa yang kami sediakan
					</h3>
				</div>
				<div className="flex overflow-x-auto mb-4 -mx-3">
					<div className="px-3 flex-none" style={{ width: 320 }}>
						<div className="rounded-xl p-4 pb-8 relative bg-white">
							<div className="rounded-xl overflow-hidden card-shadow w-full h-36">
								<img
									src="/images/content/doctor.jpg"
									alt=""
									className="w-full h-full object-cover object-center"
								/>
							</div>
							<h5 className="text-lg font-semibold mt-4">Cangkir Mauttie</h5>
							<span className="">IDR 89.300.000</span>
							<a href="details.html" className="stretched-link">
								{/* <!-- fake children --> */}
							</a>
						</div>
					</div>
					<div className="px-3 flex-none" style={{ width: 320 }}>
						<div className="rounded-xl p-4 pb-8 relative bg-white">
							<div className="rounded-xl overflow-hidden card-shadow w-full h-36">
								<img
									src="/images/content/doctor1.jpg"
									alt=""
									className="w-full h-full object-cover object-center"
								/>
							</div>
							<h5 className="text-lg font-semibold mt-4">Saman Kakka</h5>
							<span className="">IDR 14.500.399</span>
							<a href="details.html" className="stretched-link">
								{/* <!-- fake children --> */}
							</a>
						</div>
					</div>
					<div className="px-3 flex-none" style={{ width: 320 }}>
						<div className="rounded-xl p-4 pb-8 relative bg-white">
							<div className="rounded-xl overflow-hidden card-shadow w-full h-36">
								<img
									src="/images/content/doctor11.jpg"
									alt=""
									className="w-full h-full object-cover object-center"
								/>
							</div>
							<h5 className="text-lg font-semibold mt-4">Lino Dino</h5>
							<span className="">IDR 22.000.000</span>
							<a href="details.html" className="stretched-link">
								{/* <!-- fake children --> */}
							</a>
						</div>
					</div>
					<div className="px-3 flex-none" style={{ width: 320 }}>
						<div className="rounded-xl p-4 pb-8 relative bg-white">
							<div className="rounded-xl overflow-hidden card-shadow w-full h-36">
								<img
									src="/images/content/doctor12.jpg"
									alt=""
									className="w-full h-full object-cover object-center"
								/>
							</div>
							<h5 className="text-lg font-semibold mt-4">Syail Ammeno</h5>
							<span className="">IDR 6.399.999</span>
							<a href="details.html" className="stretched-link">
								{/* <!-- fake children --> */}
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
