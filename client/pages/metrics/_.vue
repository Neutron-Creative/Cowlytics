<template>
    <div class="flex flex-col w-full h-screen px-8 lg:px-0 py-12">
        <profile-header v-if="metric" :label="metric.label" :datepicker="true" />
        <div class="flex flex-row items-start justify-start w-full space-x-8">
            <div class="w-full lg:w-1/6 flex flex-col items-start justify-center">
                <div v-for="category in metric_categories" :key="category.label" class="flex flex-col items-start justify-center flex w-full">
                    <h3 class="mb-2 uppercase tracking-wider font-semibold text-gray-500 text-xs">{{ category.label }}</h3>
                    <div class="w-full flex flex-col items-center justify-center space-y-1 mb-8">
                        <div class="flex flex-col w-full" v-for="item in category.items" :key="item">
                            <n-link v-if="item.replaceAll(' ', '-').toLowerCase() == active_category" class="bg-indigo-600 text-white w-full p-2 font-medium rounded-lg text-xs" :to="'/metrics/' + item.replaceAll(' ', '-').toLowerCase()">{{ item }}</n-link>
                            <n-link v-if="item.replaceAll(' ', '-').toLowerCase() != active_category" class="text-gray-500 w-full p-2 hover:bg-indigo-100 hover:text-indigo-600 font-medium rounded-lg text-xs" :to="'/metrics/' + item.replaceAll(' ', '-').toLowerCase()">{{ item }}</n-link>
                        </div>
                    </div>
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
                        <span class="uppercase text-gray-500 text-sm mb-2" v-if="metric">{{ metric.abbrv }}</span>
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
import ProfileHeader from '../../components/ProfileHeader.vue';
import profile from '../../layouts/profile.vue';
export default {
  components: { profile, ProfileHeader },
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
            metric_categories: [],
            active_category: null,
            metric: null
        }
    },
    mounted() {
        // Set active category
        this.active_category = window.location.href.split('/').pop();

        // Fetch metrics for display from API
        this.fetch_categories();

        // Fetch current category data from API
        this.fetch_metrics();
    },
    methods: {
       fetch_categories() {
           this.metric_categories = [
                {
                    label: 'Revenue',
                    items: [
                        'Monthly recurring revenue',
                        'Annual run rate',
                        'Net revenue',
                        'MRR Growth Rate',
                        'Fees',
                        'Other Revenue',
                        'Quick Ratio'
                    ]
                },
                {

                    label: 'MRR Movements',
                    items: [
                        'Active Subscriptions',
                        'New Subscriptions',
                        'Plan Quantities',
                        'Upgrades',
                        'Downgrades',
                        'Failed Charges',
                        'Refunds',
                        'Coupons Redeemed'
                    ]
                },
                {
                    label: 'Customer',
                    items: [
                        'Average Revenue Per User',
                        'Lifetime Value',
                        'New Customers',
                        'Active Customers',
                        'Churned Customers',
                        'Reactivated Customers'
                    ]
                },
                {
                    label: 'Churn',
                    items: [
                        'User Churn',
                        'Revenue Churn',
                        'Net Revenue Churn',
                        'Churned Subscriptions'
                    ]
                },
                {
                    label: 'Trial Insights',
                    items: [
                        'Trial Insights'
                    ]
                }
            ];

       },
       fetch_metrics() {
           // Fetch Metric data based on active_category

           // Validate response

           // Set metric value to response
           this.metric = {
               label: 'Monthly Recurring Revenue',
               abbrv: 'MRR',
               dataset: [
                   1000,
                   2000,
                   3000,
                   4000,
                   5000,
                   6000,
                   7000,
                   8000,
                   9000,
                   10000
               ]
           };

           // Update graph dataset
           this.lineChartData.datasets[0].data = this.metric.dataset;
       }
    },
    head: {
        title: 'Monthly recurring revenue - Cowlytics'
    },
}
</script>