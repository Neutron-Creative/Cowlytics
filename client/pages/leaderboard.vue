<template>
    <div>
        <profile-header label="Leaderboard"/>
        <div class="flex-grow flex flex-col rounded-lg shadow bg-white">
            <div class="flex flex-row items-center p-6">
                <span class="text-xl font-semibold text-gray-900">Your standings</span>
            </div>
            <div class="flex flex-row items-center justify-start bg-indigo-100  text-sm text-indigo-400 border border-l-0 border-r-0  p-6 border-gray-100">
                You are in the bottom 38% for all metrics compared to others in your cohort.
            </div>
            <div class="flex flex-col p-6">
                <div v-if="metrics && metrics.length>0" v-for="metric in metrics" class="flex flex-row items-center justify-start text-sm text-gray-500 flex-grow border border-l-0 border-r-0 border-t-0 border-gray-100 px-6 py-3 hover:bg-gray-100 cursor-pointer">
                    <span v-if="metric.score>60" class="text-green-400 font-semibold mr-2">
                        Top {{ metric.score }}%
                    </span>
                    <span v-if="metric.score > 39 && metric.score < 61" class="text-yellow-400 font-semibold mr-2">
                        Middle {{ metric.score }}%
                    </span>
                    <span v-if="metric.score<40" class="text-red-400 font-semibold mr-2">
                        Bottom {{ metric.score }}%
                    </span>
                    {{ metric.label }}
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import ProfileHeader from "../components/ProfileHeader.vue"

export default {
    components: { ProfileHeader },
    layout: 'profile',
    middleware: 'is-setup',
    head: {
        title: 'Compare - Cowlytics'
    },
    data: () => {
        return {
            metrics: [
                {
                    score: 95,
                    label: 'Monthly Recurring Revenue'
                },
                {
                    score: 42,
                    label: 'Lifetime Value'
                },
                {
                    score: 82,
                    label: 'User Churn'
                },
                {
                    score: 91,
                    label: 'Revenue Churn'
                },
                {
                    score: 84,
                    label: 'Active Customers'
                },
                {
                    score: 90,
                    label: 'Quick Ratio'
                },
                {
                    score: 77,
                    label: 'Failed Charges ($)'
                },
                {
                    score: 81,
                    label: 'Failed Charges (%)'
                }
            ],
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
                            beginAtZero: true 
                        },
                            gridLines: {
                                display: true
                            }
                        }
                    ]
                }
            },

        }
    }
}
</script>