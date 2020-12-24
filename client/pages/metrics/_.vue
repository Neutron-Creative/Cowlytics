<template>
    <div class="flex flex-col w-full h-screen px-8 py-12">
        <div class="flex flex-row items-center justify-center">
            <h1 class="text-2xl font-semibold text-gray-900 flex flex-row mr-auto items-center justify-start">
                <img src="https://neutroncreative.com/favicon.ico" class="rounded-full w-8 mr-4"/>
                Monthly recurring revenue
            </h1>
            <div class="ml-auto flex flex-row items-center justify-center text-sm rounded-lg p-2 bg-white text-gray-500 font-medium tracking-tight hover:text-gray-400 cursor-pointer">Nov 16 2020 - Dec 15, 2020</div>
        </div>
        <div class="flex flex-row items-start justify-start py-10 w-full space-x-8">
            <div class="w-full lg:w-1/6 flex flex-col items-start justify-center">
                <h3 class="mb-2 uppercase tracking-wider font-semibold text-gray-500 text-xs">Revenue</h3>
                <div class="w-full flex flex-col items-center justify-center space-y-1 mb-8">
                    <n-link class="bg-indigo-600 text-white w-full p-2 font-medium rounded-lg text-xs" to="/metrics/mrr">Monthly recurring revenue</n-link>
                    <n-link class="text-gray-500 w-full p-2 hover:bg-indigo-100 hover:text-indigo-600 font-medium rounded-lg text-xs" to="/metrics/mrr">Annual run rate</n-link>
                    <n-link class="text-gray-500 w-full p-2 hover:bg-indigo-100 hover:text-indigo-600 font-medium rounded-lg text-xs" to="/metrics/mrr">Net revenue</n-link>
                    <n-link class="text-gray-500 w-full p-2 hover:bg-indigo-100 hover:text-indigo-600 font-medium rounded-lg text-xs" to="/metrics/mrr">MRR growth rate</n-link>
                    <n-link class="text-gray-500 w-full p-2 hover:bg-indigo-100 hover:text-indigo-600 font-medium rounded-lg text-xs" to="/metrics/mrr">Other revenue</n-link>
                    <n-link class="text-gray-500 w-full p-2 hover:bg-indigo-100 hover:text-indigo-600 font-medium rounded-lg text-xs" to="/metrics/mrr">Quick ratio</n-link>
                </div>
                <h3 class="mb-2 uppercase tracking-wider font-semibold text-gray-500 text-xs">MRR Movements</h3>
                <div class="w-full flex flex-col items-center justify-center space-y-1 mb-8">
                    <n-link class="text-gray-500 w-full p-2 hover:bg-indigo-100 hover:text-indigo-600 font-medium rounded-lg text-xs" to="/metrics/mrr">Active subscriptions</n-link>
                    <n-link class="text-gray-500 w-full p-2 hover:bg-indigo-100 hover:text-indigo-600 font-medium rounded-lg text-xs" to="/metrics/mrr">New subscriptions</n-link>
                    <n-link class="text-gray-500 w-full p-2 hover:bg-indigo-100 hover:text-indigo-600 font-medium rounded-lg text-xs" to="/metrics/mrr">Plan quantities</n-link>
                    <n-link class="text-gray-500 w-full p-2 hover:bg-indigo-100 hover:text-indigo-600 font-medium rounded-lg text-xs" to="/metrics/mrr">Upgrades</n-link>
                    <n-link class="text-gray-500 w-full p-2 hover:bg-indigo-100 hover:text-indigo-600 font-medium rounded-lg text-xs" to="/metrics/mrr">Downgrades</n-link>
                    <n-link class="text-gray-500 w-full p-2 hover:bg-indigo-100 hover:text-indigo-600 font-medium rounded-lg text-xs" to="/metrics/mrr">Failed charges</n-link>
                    <n-link class="text-gray-500 w-full p-2 hover:bg-indigo-100 hover:text-indigo-600 font-medium rounded-lg text-xs" to="/metrics/mrr">Refunds</n-link>
                    <n-link class="text-gray-500 w-full p-2 hover:bg-indigo-100 hover:text-indigo-600 font-medium rounded-lg text-xs" to="/metrics/mrr">Coupons redeemed</n-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    layout: 'profile',
    data: () => {
        return {
            
        }
    }
}
</script>