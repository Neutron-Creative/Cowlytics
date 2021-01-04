<template>
	<div>
		<div class="flex flex-col p-6 pt-2 items-start justify-center">
			<div style="width:calc(100vw - 94px);transform:translateX(-50%);position:absolute;left:calc(50% + 47px);top:0;">
				<GMap
					ref="gMap"
					language="en"
					:center="{lat: location.lat, lng: location.lng}"
					:zoom="10"
					:options="map_options"
				>
					<GMapMarker
						:position="{lat: location.lat, lng: location.lng}"
					/>
				</GMap>
				<div class="w-full h-full absolute top-0 left-0 right-0 bottom-0" style="backdrop-filter:blur(3px);mix-blend-mode:color;opacity:.5;z-index:2;background: #8e2de2;background: -webkit-linear-gradient(to right, #8e2de2, #4a00e0);background: linear-gradient(to right, #8e2de2, #4a00e0);"></div>
				<div class="w-full h-full absolute top-0 left-0 right-0 bottom-0" style="mix-blend-mode:multiply;opacity:.5;z-index:3;background: #8e2de2;background: -webkit-linear-gradient(to right, #8e2de2, #4a00e0);background: linear-gradient(to right, #8e2de2, #4a00e0);"></div>
				<div class="w-full h-full absolute top-0 left-0 right-0 bottom-0" style="opacity:.65;z-index:3;background: #8e2de2;background: -webkit-linear-gradient(to right, #8e2de2, #4a00e0);background: linear-gradient(to right, #8e2de2, #4a00e0);"></div>
			</div>
			<div class="flex flex-col relative z-10 max-w-lg justify-center items-start">
				<div class="flex flex-row items-center justify-start text-white">
					<h1 class="flex flex-col lg:flex-row items-center justify-center text-center mr-0 lg:text-left text-2xl font-semibold text-white flex flex-row lg:mr-auto items-center justify-start">
						<img src="https://neutroncreative.com/favicon.ico" class="mb-4 lg:mb-0 rounded-full w-12 lg:w-10 mr-4"/>
						Customers
					</h1>
				</div>
				<h1 class="mt-8 mb-2 text-3xl text-white font-medium">Bare Performance Nutrition</h1>
				<p class="mb-4 text-gray-100">Bare Performance Nutrition is a Nutrition Supplements company based in Austin Texas.</p>
				<div class="flex flex-row items-center justify-center space-x-4 text-gray-300 mb-8">
					<span>Austin, TX (5:32 PM)</span>
					<a href="https://bareperformancenutrition.com" class="hover:underline">bareperformancenutrition.com</a>
				</div>
				<div class="flex flex-row items-start justify-start flex-wrap space-x-10">
					<div class="flex-grow flex flex-col space-y-1">
						<span class="text-gray-300 text-lg">Signed Up</span>
						<span class="text-2xl text-white font-medium">Dec 2013</span>
					</div>
					<div class="flex-grow flex flex-col space-y-1">
						<span class="text-gray-300 text-lg">Current MRR</span>
						<span class="text-2xl text-white font-medium">$0.00</span>
					</div>
					<div class="flex-grow flex flex-col space-y-1">
						<span class="text-gray-300 text-lg">Lifetime Value</span>
						<span class="text-2xl text-white font-medium">$8,000</span>
					</div>
				</div>
			</div>
		</div>
		<div class="flex flex-row items-center justify-center p-6 rounded-lg bg-white shadow-lg z-20">
			<img src="https://neutroncreative.com/favicon.ico" class="w-14 rounded-full mr-4"/>
			<div class="flex flex-col">
				<span class="text-lg">Nick Bare</span>
				<a href="mailto:email@company.com" class="text-indigo-600 hover:underline">email@company.com</a>
			</div>
			<a href="#" class="ml-auto text-gray-600 hover:text-gray-900 mx-4">LinkedIn</a>
			<a href="#" class="text-gray-600 hover:text-gray-900 mx-4">Facebook</a>
			<a href="#" class="text-gray-600 hover:text-gray-900 mx-4">Twitter</a>
			<a href="#" class="text-gray-600 hover:text-gray-900 mx-4">Youtube</a>
			<a href="" class="text-sm bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-lg ml-4">Send email</a>
		</div>
	</div>
</template>
<script>
	export default {
		layout: 'profile',
		middleware: 'is-setup',
		data: () => {
			return {
				location: {
					lat: 44.933076,
					lng: 15.629058
				},
				map_options: {
					disableDefaultUI: true
					/*pins: {
						selected: "data:image/png;base64,iVBORw0KGgo...",
						notSelected: "data:image/png;base64,iVBORw0KGgo..."
					},*/
				}
			};
		}
	}
</script>