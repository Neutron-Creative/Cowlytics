<template>
    <div class="flex flex-col w-full h-screen px-8 lg:px-0 py-12">
        <div class="flex flex-row items-center justify-center">
            <h1 class="text-2xl font-semibold text-gray-900 flex flex-row mr-auto items-center justify-start">
                <img src="https://neutroncreative.com/favicon.ico" class="rounded-full w-8 mr-4"/>
                Monthly recurring revenue
            </h1>
            <!-- Datepicker -->
            <div class="ml-auto flex flex-row items-center justify-center text-sm rounded-lg p-2 bg-white text-gray-500 font-medium tracking-tight cursor-pointer">
                <img src="/icons/calendar.svg" class="w-4 h-auto opacity-50 hover:opacity-60 mr-2"/>
                <span class="hover:text-indigo-600 mr-2">Nov 16 2020</span> - <span class="ml-2 hover:text-indigo-600">Dec 15, 2020</span>
            </div>
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
            <div class="w-full lg:w-5/6 flex flex-col items-start rounded-lg justify-center bg-white shadow">
                <div class="hidden lg:flex flex-row items-center justify-start space-x-4 px-6 py-4 border border-gray-200 border-t-0 border-l-0 border-r-0 w-full">
                    <button class="text-gray-500 hover:text-indigo-600 text-sm border border-gray-300 px-4 py-2 rounded-lg">Compare Plans</button>
                    <button class="text-gray-500 hover:text-indigo-600 text-sm border border-gray-300 px-4 py-2 rounded-lg">Compare Segments</button>
                    <button class="text-gray-500 hover:text-indigo-600 text-sm border border-gray-300 px-4 py-2 rounded-lg">Compare Dates</button>
                    <button class="text-gray-500 hover:text-indigo-600 text-sm border border-gray-300 px-4 py-2 rounded-lg">Trendlines</button>
                    <button class="text-gray-500 hover:text-indigo-600 text-sm border border-gray-300 px-4 py-2 rounded-lg">Annotations</button>
                </div>
                <div class="flex flex-col lg:flex-row w-full p-6">
                    <div class="flex flex-col mr-4">
                        <span class="uppercase text-gray-500 text-sm mb-2">MRR</span>
                        <span class="text-3xl font-semibold text-gray-900 mb-2">$242</span>
                        <div class="flex flex-row items-center justify-center text-sm text-gray-500">
                            <div class="w-4 h-4 rounded-full bg-green-100 mr-1"></div>
                            <span class="text-green-500 font-semibold mr-1">16.37%</span> in selected period
                        </div>
                    </div>
                    <div class="flex flex-col ml-auto">
                        <select class="p-2 rounded-lg border border-gray-200 ml-auto text-sm text-gray-600">
                            <option>Days</option>
                            <option>Weeks</option>
                            <option>Months</option>
                            <option>Years</option>
                        </select>
                    </div>
                </div>
                <line-chart class="w-full p-6 pt-0" :data="lineChartData" :options="lineChartOptions" :height="125" />
                <div class="overflow-hidden" style="width:calc(100% + 1px);">
                <table class="relative" style="margin-left: 200px; width: calc(100% - 200px);">
                    <div style="width:200px;left:-200px;top:0; box-shadow: 5px 0 10px rgba(0,0,0,.15);" class="flex flex-col absolute">
                        <td class="w-full uppercase text-gray-500 bg-gray-100 hover:bg-gray-200 text-xs font-bold py-2 px-6">Breakout</td>
                        <td class="px-6 py-3 text-gray-600 border border-gray-200 border-l-0 border-r-0 border-b-0 text-sm hover:bg-indigo-100 font-semibold">New</td>
                        <td class="px-6 py-3 text-gray-600 border border-gray-200 border-l-0 border-r-0 border-b-0 text-sm hover:bg-indigo-100 font-semibold">Expansion</td>
                        <td class="px-6 py-3 text-gray-600 border border-gray-200 border-l-0 border-r-0 border-b-0 text-sm hover:bg-indigo-100 font-semibold">Reactivation</td>
                        <td class="px-6 py-3 text-gray-600 border border-gray-200 border-l-0 border-r-0 border-b-0 text-sm hover:bg-indigo-100 font-semibold">Contraction</td>

                    </div>
                    <thead class="w-full border border-gray-200 bg-gray-100 border-l-0 border-r-0">
                        <td class="uppercase text-gray-500 hover:bg-gray-200 text-xs font-bold py-2 px-6">Jan 21</td>
                        <td class="uppercase text-gray-500 hover:bg-gray-200 text-xs font-bold py-2 px-6">Feb 21</td>
                        <td class="uppercase text-gray-500 hover:bg-gray-200 text-xs font-bold py-2 px-6">Mar 21</td>
                        <td class="uppercase text-gray-500 hover:bg-gray-200 text-xs font-bold py-2 px-6">Apr 21</td>
                        <td class="uppercase text-gray-500 hover:bg-gray-200 text-xs font-bold py-2 px-6">May 21</td>
                        <td class="uppercase text-gray-500 hover:bg-gray-200 text-xs font-bold py-2 px-6">Jun 21</td>
                        <td class="uppercase text-gray-500 hover:bg-gray-200 text-xs font-bold py-2 px-6">Jul 21</td>
                    </thead>
                    <tr class="bg-white text-center">
                        <td class="px-6 py-3 text-gray-400 text-sm hover:bg-indigo-100">$0</td>
                        <td class="px-6 py-3 text-gray-400 text-sm hover:bg-indigo-100">$0</td>
                        <td class="px-6 py-3 text-gray-400 text-sm hover:bg-indigo-100">$0</td>
                        <td class="px-6 py-3 text-gray-400 text-sm hover:bg-indigo-100">$0</td>
                        <td class="px-6 py-3 text-gray-400 text-sm hover:bg-indigo-100">$0</td>
                        <td class="px-6 py-3 text-gray-400 text-sm hover:bg-indigo-100">$0</td>
                        <td class="px-6 py-3 text-gray-400 text-sm hover:bg-indigo-100">$0</td>
                    </tr>
                    <tr class="bg-white text-center">
                        <td class="px-6 py-3 text-gray-400 text-sm hover:bg-indigo-100">$0</td>
                        <td class="px-6 py-3 text-gray-400 text-sm hover:bg-indigo-100">$0</td>
                        <td class="px-6 py-3 text-gray-400 text-sm hover:bg-indigo-100">$0</td>
                        <td class="px-6 py-3 text-gray-400 text-sm hover:bg-indigo-100">$0</td>
                        <td class="px-6 py-3 text-gray-400 text-sm hover:bg-indigo-100">$0</td>
                        <td class="px-6 py-3 text-gray-400 text-sm hover:bg-indigo-100">$0</td>
                        <td class="px-6 py-3 text-gray-400 text-sm hover:bg-indigo-100">$0</td>
                    </tr>
                    <tr class="bg-white text-center">
                        <td class="px-6 py-3 text-gray-400 text-sm hover:bg-indigo-100">$0</td>
                        <td class="px-6 py-3 text-gray-400 text-sm hover:bg-indigo-100">$0</td>
                        <td class="px-6 py-3 text-gray-400 text-sm hover:bg-indigo-100">$0</td>
                        <td class="px-6 py-3 text-gray-400 text-sm hover:bg-indigo-100">$0</td>
                        <td class="px-6 py-3 text-gray-400 text-sm hover:bg-indigo-100">$0</td>
                        <td class="px-6 py-3 text-gray-400 text-sm hover:bg-indigo-100">$0</td>
                        <td class="px-6 py-3 text-gray-400 text-sm hover:bg-indigo-100">$0</td>
                    </tr>
                    <tr class="bg-white text-center">
                        <td class="px-6 py-3 text-gray-400 text-sm hover:bg-indigo-100">$0</td>
                        <td class="px-6 py-3 text-gray-400 text-sm hover:bg-indigo-100">$0</td>
                        <td class="px-6 py-3 text-gray-400 text-sm hover:bg-indigo-100">$0</td>
                        <td class="px-6 py-3 text-gray-400 text-sm hover:bg-indigo-100">$0</td>
                        <td class="px-6 py-3 text-gray-400 text-sm hover:bg-indigo-100">$0</td>
                        <td class="px-6 py-3 text-gray-400 text-sm hover:bg-indigo-100">$0</td>
                        <td class="px-6 py-3 text-gray-400 text-sm hover:bg-indigo-100">$0</td>
                    </tr>
                </table>
                </div>
            </div>
        </div>
        <div class="p-20 opacity-0">placeholder</div>
    </div>
</template>
<script>
export default {
    layout: 'profile',
    data: () => {
        return {
            lineChartData: {
                labels: [
                'Jan 21',
                'Feb 21',
                'Mar 21',
                'Apr 21',
                'May 21',
                'Jun 21',
                'Jul 21',
                'Aug 21',
                'Sep 21',
                'Oct 21'
                ],
                datasets: [
                {
                    label: 'Forecast based on active subscriptions',
                    data: [
                        302310,
                        312342,
                        311203,
                        342139,
                        364241,
                        367132,
                        391234,
                        402503,
                        409314,
                        422920, 
                    ],
                    hoverBackgroundColor: '#5353EC',
                    pointBackgroundColor: '#5353EC',
                    pointBorderColor: 'rgba(0,0,0,0)',
                    pointBorderWidth:0,
                    borderColor: '#5353EC',
                    borderWidth: 4,
                    backgroundColor: 'rgba(83,83,236,.25)',
                    radius: 5,
                    fill: true
                },
                ]
            },
            lineChartOptions: {
                responsive: true,
                legend: {
                    display: false
                },
                title: {
                    display: false
                },
                tooltips: {
                    callbacks: {
                        label:(item) => {
                            return (parseInt(item.value)).toLocaleString('en-US', {
                                style: 'currency',
                                currency: 'USD',
                            }).slice(0, -3);
                        }
                    },
                    backgroundColor: '#5353ec'
                },
                scales: {
                    xAxes: [
                        {
                            ticks: {
                                maxTicksLimit: 8
                            },
                            gridLines: {
                                display: false
                            }
                        }
                    ],
                    yAxes: [
                        {
                        ticks: {
                            beginAtZero: true,
                            callback: function(value, index, values) {
                                return (parseInt(value)).toLocaleString('en-US', {
                                    style: 'currency',
                                    currency: 'USD',
                                }).slice(0, -3);
                            },
                            maxTicksLimit: 6
                        },
                            gridLines: {
                                display: true
                            }
                        }
                    ]
                }
            },
        }
    },
    head: {
        title: 'Monthly recurring revenue - Cowlytics'
    },
}
</script>