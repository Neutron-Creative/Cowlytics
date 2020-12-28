<template>
    <!-- Container -->
    <div class="flex flex-col w-full h-screen lg:px-0 py-12">
        <!-- Header row -->
        <profile-header label="Company overview" :datepicker="true"/>
        <!-- Content row -->
        <div class="flex flex-col lg:flex-row items-start justify-start w-full">
            <!-- Metrics section -->
            <div class="w-full lg:w-2/3 flex-col items-center justify-center space-y-4">
                <div class="flex flex-col lg:flex-row items-center justify-start space-y-4 lg:space-y-0 flex-wrap">
                    <div v-cloak="stripe_data" v-for="metric in stripe_data" class="flex flex-col w-full lg:w-1/2 pb-4 lg:pr-4">
                        <div class="flex flex-col rounded-lg bg-white p-4 space-y-2 lg:space-y-3 flex-grow shadow">
                            <span class="text-gray-400 font-medium">{{ metric.title }}</span>
                            <div class="flex lg:flex-row items-center justify-center">
                                <div class="flex flex-col lg:flex-row items-start lg:items-end justify-center">
                                    <span class="text-gray-900 text-lg lg:text-xl font-semibold mr-2" v-if="metric.dataset && metric.dataset.length > 0">{{ metric.dataset[metric.dataset.length-1].toLocaleString('en-US', {style: 'currency',currency: 'USD' }).slice(0, -3) }}</span>
                                    <span class="text-gray-400 text-sm font-medium mr-2">from {{ metric.dataset[0].toLocaleString('en-US', {style: 'currency',currency: 'USD' }).slice(0, -3) }}</span>
                                </div>
                                <div class="ml-auto flex flex-row items-center justify-center space-x-2">
                                    <div class="w-2 h-2 rounded-full bg-green-400"></div>
                                    <span class="text-green-400 font-medium text-sm lg:text-lg">{{ (((metric.dataset[metric.dataset.length-1] / metric.dataset[0]) - 1) * 100).toFixed(2) }} %</span>
                                </div>
                            </div>
                            <line-chart class="w-full" :data="lineChartData" :options="lineChartOptions" :height="200" />
                        </div>
                    </div>
                </div>
                <div class="p-4 opacity-0 hidden lg:flex">placeholder</div>
            </div>
            <!-- Breakdown section -->
            <div class="w-full lg:w-1/3 flex flex-col items-center justify-center space-y-4">
                <div class="w-full h-auto flex flex-col items-center justify-center rounded overflow-hidden bg-white shadow">
                    <div class="flex flex-row items-center justify-center p-4 w-full border border-gray-200 border-t-0 border-r-0 border-l-0">
                        <span class="text-lg text-gray-900 font-semibold mr-2">Breakdown</span>
                        <select class="p-2 rounded-lg border border-gray-200 ml-auto text-sm text-gray-600">
                            <option>Yesterday</option>
                            <option>Last 7 days</option>
                            <option>Last 30 days</option>
                            <option>Last 365 days</option>
                        </select>
                    </div>
                    <div class="w-full px-8 py-4 border border-gray-200 flex flex-row items-center justify-center border-l-0 border-r-0 border-t-0">
                        <span class="font-semibold text-indigo-200 mr-4">0</span>
                        <span class="text-gray-400 mr-4">New trials</span>
                        <span class="text-gray-400 ml-auto">-</span>
                    </div>
                </div>
                <div class="w-full h-auto flex flex-col items-center justify-center rounded overflow-hidden bg-white shadow">
                    <div class="flex flex-row items-center justify-center p-4 w-full border border-gray-200 border-t-0 border-r-0 border-l-0">
                        <span class="text-lg text-gray-900 font-semibold mr-2">Live stream</span>
                        <select class="p-2 rounded-lg border border-gray-200 ml-auto text-sm text-gray-600">
                            <option>Everything</option>
                            <option>New customers</option>
                            <option>Upgrades</option>
                            <option>Cancellations</option>
                        </select>
                    </div>
                    <div v-for="event in live_stream" class="w-full p-4 border border-gray-200 flex flex-row items-center justify-center border-l-0 border-r-0 border-t-0">
                        <div class="w-2 h-2 bg-red-400 rounded-full mr-4"></div>
                        <p class="text-gray-400 text-sm">US${{ event.amount }} payment {{ event.status }} by <span class="cursor-pointer text-indigo-600 hover:underline">{{ event.customer }}</span></p>
                        <span class="text-xs text-gray-400 ml-auto">{{ event.timestamp }} ago</span>
                    </div>
                </div>
                <div class="flex lg:hidden p-10 opacity-0">placeholder</div>
            </div>
        </div>
    </div>
</template>
<script>
import ProfileHeader from '../components/ProfileHeader.vue';
export default {
  components: { ProfileHeader },
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
                    pointBackgroundColor: 'rgba(0,0,0,0)',
                    pointBorderColor: 'rgba(0,0,0,0)',
                    pointBorderWidth:0,
                    borderColor: '#5353EC',
                    borderWidth: 4,
                    backgroundColor: 'rgba(83,83,236,.25)',
                    radius: 10,
                    fill: false
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
            stripe_data: [
                    {
                        title: 'Monthly recurring revenue',
                        dataset: [901573, 919494],
                        format: 'USD'
                    },
                    {
                        title: 'Net revenue',
                        dataset: [899451,898172],
                        format: 'USD'
                    },
                    {
                        title: 'Fees',
                        dataset: [24663,25554],
                        format: 'USD'
                    }
            ],
            live_stream: [
                {
                    amount: 49,
                    customer: 'Company Inc.',
                    status: 'failed',
                    timestamp: '22m'
                }
            ]
        }
    },
    head: {
        title: 'Company overview - Cowlytics'
    }
}
</script>