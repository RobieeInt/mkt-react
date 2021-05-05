import React from 'react';

export default function Suggestion() {
	return (
		<section class="bg-gray-100 px-4 py-16">
			<div class="container mx-auto">
				<div class="flex flex-start mb-4">
					<h3 class="text-2xl capitalize font-semibold">
						Mungkin anda juga mencari <br class="" />
						apa yang kami sediakan
					</h3>
				</div>
				<div class="flex overflow-x-auto mb-4 -mx-3">
					<div class="px-3 flex-none" style={{ width: 320 }}>
						<div class="rounded-xl p-4 pb-8 relative bg-white">
							<div class="rounded-xl overflow-hidden card-shadow w-full h-36">
								<img
									src="/images/content/doctor.jpg"
									alt=""
									class="w-full h-full object-cover object-center"
								/>
							</div>
							<h5 class="text-lg font-semibold mt-4">Cangkir Mauttie</h5>
							<span class="">IDR 89.300.000</span>
							<a href="details.html" class="stretched-link">
								{/* <!-- fake children --> */}
							</a>
						</div>
					</div>
					<div class="px-3 flex-none" style={{ width: 320 }}>
						<div class="rounded-xl p-4 pb-8 relative bg-white">
							<div class="rounded-xl overflow-hidden card-shadow w-full h-36">
								<img
									src="/images/content/doctor1.jpg"
									alt=""
									class="w-full h-full object-cover object-center"
								/>
							</div>
							<h5 class="text-lg font-semibold mt-4">Saman Kakka</h5>
							<span class="">IDR 14.500.399</span>
							<a href="details.html" class="stretched-link">
								{/* <!-- fake children --> */}
							</a>
						</div>
					</div>
					<div class="px-3 flex-none" style={{ width: 320 }}>
						<div class="rounded-xl p-4 pb-8 relative bg-white">
							<div class="rounded-xl overflow-hidden card-shadow w-full h-36">
								<img
									src="/images/content/doctor11.jpg"
									alt=""
									class="w-full h-full object-cover object-center"
								/>
							</div>
							<h5 class="text-lg font-semibold mt-4">Lino Dino</h5>
							<span class="">IDR 22.000.000</span>
							<a href="details.html" class="stretched-link">
								{/* <!-- fake children --> */}
							</a>
						</div>
					</div>
					<div class="px-3 flex-none" style={{ width: 320 }}>
						<div class="rounded-xl p-4 pb-8 relative bg-white">
							<div class="rounded-xl overflow-hidden card-shadow w-full h-36">
								<img
									src="/images/content/doctor12.jpg"
									alt=""
									class="w-full h-full object-cover object-center"
								/>
							</div>
							<h5 class="text-lg font-semibold mt-4">Syail Ammeno</h5>
							<span class="">IDR 6.399.999</span>
							<a href="details.html" class="stretched-link">
								{/* <!-- fake children --> */}
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}