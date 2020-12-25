<template>
    <div class="flex flex-col w-full h-screen px-8 py-12">
        <div class="mb-12 flex flex-row items-center justify-center">
            <h1 class="text-2xl font-semibold text-gray-900 flex flex-row mr-auto items-center justify-start">
                <img src="https://neutroncreative.com/favicon.ico" class="rounded-full w-8 mr-4"/>
                Customers
            </h1>
        </div>
    </div>
</template>
<script>
export default {
    layout: 'profile',
    data: () => {
        return {
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
    }
}
</script>