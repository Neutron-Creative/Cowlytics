<template>
    <div>
        <profile-header label="Forecasting"/>
        <div class="mb-6 flex flex-col lg:flex-row p-8 rounded-lg bg-white shadow lg:space-x-12">
            <div class="flex flex-col w-full lg:w-5/12">
                <h2 class="text-lg text-gray-500 mb-4">Cash flow</h2>
                <div class="flex flex-row items-end justify-start mb-4">
                    <span class="text-4xl font-semibold text-gray-900 mr-2">$123,301</span>
                    <span class="text-gray-500 text-sm">Next 12 months</span>
                </div>
                <p class="text-gray-500 leading-6 mb-auto">
                    Over the next <span class="text-blue-500">12 months</span> you’ll bill an estimated <span class="text-green-400">$10,767,441</span> from <span class="text-blue-500">13243</span> customers or <span class="text-green-400">$13,287,542</span> with a growth of <span class="text-green-400">~3.6%</span> (3 month average).
                </p>
                <div class="mt-2 mb-2 flex flex-row items-center text-gray-500 text-sm">
                    <div class="mr-4 border-2 rounded-lg border-gray-300">
                        <div class="w-12 h-5 rounded" style="background:#5353EC;margin:2px;"></div>
                    </div>
                    Forecast based on <span class="font-semibold text-gray-800 ml-2">active subscriptions</span>
                </div>
                <div class="flex flex-row items-center text-gray-500 text-sm">
                    <div class="mr-4 border-2 rounded-lg border-gray-300">
                        <div class="w-12 h-5 rounded" style="background:#2ecc71;margin:2px;"></div>
                    </div>
                    Forecast based on <span class="font-semibold text-gray-800 ml-2">revenue</span>
                </div>
            </div>
            <div class="flex flex-col w-full lg:w-7/12">
                <div class="flex flex-row items-center justify-center">
                    <select class="ml-auto p-2 mb-4 bg-white border border-gray-200 rounded-lg">
                        <option>Monthly</option>
                        <option>Annually</option>
                    </select>
                </div>
                <bar-chart :data="barChartData" :options="barChartOptions" :height="150" />
            </div>
        </div>
        <div class="mb-6 flex flex-col lg:flex-row p-8 rounded-lg bg-white shadow lg:space-x-12">
            <div class="flex flex-col w-full lg:w-5/12">
                <h2 class="text-lg text-gray-500 mb-4">Monthly Recurring Revenue</h2>
                <div class="flex flex-row items-end justify-start mb-4">
                    <span class="text-4xl font-semibold text-gray-900 mr-2">33,249</span>
                    <span class="text-gray-500 text-sm">Next 12 months</span>
                </div>
                <p class="text-gray-500 leading-6 mb-auto">
                    Over the next <span class="text-blue-500">12 months</span> you’ll bill an estimated <span class="text-green-400">$10,767,441</span> from <span class="text-blue-500">13243</span> customers or <span class="text-green-400">$13,287,542</span> with a growth of <span class="text-green-400">~3.6%</span> (3 month average).
                </p>
                <div class="mt-2 mb-2 flex flex-row items-center text-gray-500 text-sm">
                    <div class="mr-4 border-2 rounded-lg border-gray-300">
                        <div class="w-12 h-5 rounded" style="background:#5353EC;margin:2px;"></div>
                    </div>
                    Forecast based on <span class="font-semibold text-gray-800 ml-2">active subscriptions</span>
                </div>
                <div class="flex flex-row items-center text-gray-500 text-sm">
                    <div class="mr-4 border-2 rounded-lg border-gray-300">
                        <div class="w-12 h-5 rounded" style="background:#2ecc71;margin:2px;"></div>
                    </div>
                    Forecast based on <span class="font-semibold text-gray-800 ml-2">revenue</span>
                </div>
            </div>
            <div class="flex flex-col w-full lg:w-7/12">
                <div class="flex flex-row items-center justify-center">
                    <select class="ml-auto p-2 mb-4 bg-white border border-gray-200 rounded-lg">
                        <option>Monthly</option>
                        <option>Annually</option>
                    </select>
                </div>
                <line-chart class="w-full" :data="lineChartData" :options="lineChartOptions" :height="150" />
            </div>
        </div>
        <div class="mb-6 flex flex-col lg:flex-row p-8 rounded-lg bg-white shadow lg:space-x-12">
            <div class="flex flex-col w-full lg:w-5/12">
                <h2 class="text-lg text-gray-500 mb-4">Customers</h2>
                <div class="flex flex-row items-end justify-start mb-4">
                    <span class="text-4xl font-semibold text-gray-900 mr-2">$123,301</span>
                    <span class="text-gray-500 text-sm">Next 12 months</span>
                </div>
                <p class="text-gray-500 leading-6 mb-auto">
                    Over the next <span class="text-blue-500">12 months</span> you’ll bill an estimated <span class="text-green-400">$10,767,441</span> from <span class="text-blue-500">13243</span> customers or <span class="text-green-400">$13,287,542</span> with a growth of <span class="text-green-400">~3.6%</span> (3 month average).
                </p>
                <div class="mt-2 mb-2 flex flex-row items-center text-gray-500 text-sm">
                    <div class="mr-4 border-2 rounded-lg border-gray-300">
                        <div class="w-12 h-5 rounded" style="background:#5353EC;margin:2px;"></div>
                    </div>
                    Forecast based on <span class="font-semibold text-gray-800 ml-2">active subscriptions</span>
                </div>
                <div class="flex flex-row items-center text-gray-500 text-sm">
                    <div class="mr-4 border-2 rounded-lg border-gray-300">
                        <div class="w-12 h-5 rounded" style="background:#2ecc71;margin:2px;"></div>
                    </div>
                    Forecast based on <span class="font-semibold text-gray-800 ml-2">revenue</span>
                </div>
            </div>
            <div class="flex flex-col w-full lg:w-7/12">
                <div class="flex flex-row items-center justify-center">
                    <select class="ml-auto p-2 mb-4 bg-white border border-gray-200 rounded-lg">
                        <option>Monthly</option>
                        <option>Annually</option>
                    </select>
                </div>
                <line-chart class="w-full" :data="lineChartData" :options="lineChartOptions" :height="150" />
            </div>
        </div>
        <div class="w-full p-10 flex opacity-0">placeholder</div>
    </div>
</template>
<script>
export default {
    layout: 'profile',
    head: {
        title: 'Forecasting - Cowlytics'
    },
    middleware: 'is-setup',
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
                            maxTicksLimit: 5
                        },
                            gridLines: {
                                display: true
                            }
                        }
                    ]
                }
            },
            barChartData: {
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
                    backgroundColor: '#5353ec',
                    barThickness: 22,
                },
                {
                    label: 'Forecast based on revenue growth',
                    data: [
                        332310,
                        342342,
                        350203,
                        391139,
                        401241,
                        424132,
                        471234,
                        501503,
                        539314,
                        590920, 
                    ],
                    backgroundColor: '#2ecc71',
                    barThickness: 22,
                    radius:10
                },
                /*{
                    label: 'Users',
                    data: [45, 65, 30, 53, 34, 35, 26, 37, 34, 45, 67, 87, 98],
                    backgroundColor: '#665191'
                }*/
                ]
            },
            barChartOptions: {
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
                            }
                        },
                            gridLines: {
                                display: true
                            }
                        }
                    ]
                }
            }
        }
    }
}
</script>