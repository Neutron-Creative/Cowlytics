<template>
    <div>
        <!--
        <div class="mb-12 flex flex-row items-center justify-center">
            <h1 class="text-2xl font-semibold text-gray-900 flex flex-row mr-auto items-center justify-start">
                <img src="https://neutroncreative.com/favicon.ico" class="rounded-full w-8 mr-4"/>
                Customers
            </h1>
        </div>
        -->
        <profile-header label="Customers" />
        <div class="flex flex-col lg:flex-row items-start justify-start py-2 w-full">
            <div class="w-full lg:w-1/4 flex flex-col items-start justify-center">
                <select class="shadow mb-4 text-sm w-full rounded-lg text-gray-500 py-3 p-2">
                    <option>Add filter</option>
                </select>
                <p class="hidden lg:flex text-sm text-gray-500 leading-relaxed">Use filters to segment your customers with data. Combine & save filters to easily reuse them in Metrics.</p>
            </div>
            <div class="w-full lg:ml-6 lg:w-auto flex-grow flex flex-col items-start justify-center">
                <div class="bg-white rounded-lg w-full shadow">
                    <div class="flex flex-row items-center justify-center py-3 px-6 text-gray-900">
                        <span class="font-medium">All customers</span>
                        <span class="text-gray-500 text-sm mx-2">(300)</span>
                        <button class="p-2 px-3 hover:border-gray-400 hover:text-gray-800 font-medium rounded-lg border border-gray-200 ml-auto text-gray-600 text-xs lg:text-sm mr-2">Show map</button>
                        <button class="hidden lg:flex p-2 px-3 hover:border-gray-400 hover:text-gray-800 font-medium rounded-lg border border-gray-200 text-gray-600 text-sm">Export</button>
                    </div>
                    <table class="w-full">
                        <thead>
                            <tr class="text-gray-600 text-sm border border-gray-100 border-l-0 border-r-0 border-t-0">
                                <td style="width:1.25rem;"></td>
                                <td class="py-3 px-1 border border-gray-100 border-t-0 border-r-0 border-l-0">Customer</td>
                                <td class="py-3 px-1 border-gray-100 border-t-0 border-r-0 border-l-0">Status</td>
                                <td class="hidden lg:table-cell py-3 px-1 border-gray-100 border-t-0 border-r-0 border-l-0">Subscriptions</td>
                                <td class="hidden lg:table-cell py-3 px-1 border-gray-100 border-t-0 border-r-0 border-l-0">Signed up</td>
                                <td class="hidden lg:table-cell py-3 px-1 border-gray-100 border-t-0 border-r-0 border-l-0">MRR</td>
                                <td class="hidden lg:table-cell py-3 px-1 border-gray-100 border-t-0 border-r-0 border-l-0">LTV</td>
                                <td style="width:1.25rem;"></td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="customer in customers" @click="goto_customer(customer.name)" class="text-sm text-gray-500 hover:bg-gray-50 cursor-pointer">
                                <td></td>
                                <td class="py-3 px-1 text-sm text-gray-600 hover:underline hover:text-gray-800 cursor-pointer border border-t-0 border-l-0 border-r-0 border border-gray-100">{{ customer.name }}</td>
                                <td class="py-3 px-1 border border-t-0 border-l-0 border-r-0 border border-gray-100">
                                    <span v-if="customer.status=='inactive'" style="padding-top:.35rem;padding-bottom:.35rem;" class="bg-red-200 hover:bg-red-100 cursor-pointer rounded-full px-3 font-medium text-sm text-red-500">Inactive</span>
                                    <span v-if="customer.status=='active'" style="padding-top:.35rem;padding-bottom:.35rem;" class="bg-green-200 hover:bg-green-100 cursor-pointer rounded-full px-3 font-medium text-xs text-green-500">Active</span>
                                </td>
                                <td class="hidden lg:table-cell py-3 px-1 border border-t-0 border-l-0 border-r-0 border border-gray-100"><span v-if="customer.subscriptions.length<1">-</span><span v-for="subscription in customer.subscriptions">{{ subscription }}</span></td>
                                <td class="hidden lg:table-cell py-3 px-1 border border-t-0 border-l-0 border-r-0 border border-gray-100">{{ customer.signed_up }}</td>
                                <td class="hidden lg:table-cell py-3 px-1 border border-t-0 border-l-0 border-r-0 border border-gray-100">{{ customer.mrr }}</td>
                                <td class="hidden lg:table-cell py-3 px-1 border border-t-0 border-l-0 border-r-0 border border-gray-100">{{ customer.ltv }}</td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    layout: 'profile',
    middleware: 'is-setup',
    head: {
        title: 'Customers - Cowlytics'
    },
    data: () => {
        return {
            customers: [],
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
            }
        }
    },
    mounted() {
        this.fetch_customers();
    },
    methods: {
        fetch_customers() {
            return this.customers = [
                {
                    name: 'Bare Performance Nutrition',
                    status: 'inactive',
                    subscriptions: [],
                    signed_up: '8 months ago',
                    mrr: '$0.00',
                    ltv: '$8,000.00'
                },
                {
                    name: 'Sculpture Studios',
                    status: 'active',
                    subscriptions: ['Monthly'],
                    signed_up: '4 months ago',
                    mrr: '$35.00',
                    ltv: '$4,330.00'
                }
            ];
        },
        goto_customer(name) {
            return window.location.href='/customers/' + name.toLowerCase().replaceAll(' ', '-');
        }
    }
}
</script>