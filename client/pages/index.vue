<template>
    <div class="flex flex-col w-full h-screen px-8 py-12">
        <div class="flex flex-row items-center justify-center">
            <h1 class="text-2xl font-semibold text-gray-900 flex flex-row mr-auto items-center justify-start">
                <img src="https://neutroncreative.com/favicon.ico" class="rounded-full w-8 mr-4"/>
                Company overview
            </h1>
            <div class="ml-auto flex flex-row items-center justify-center text-sm rounded-lg p-2 bg-white text-gray-500 font-medium tracking-tight cursor-pointer">
                <img src="/icons/calendar.svg" class="w-4 h-auto opacity-50 hover:opacity-60 mr-2"/>
                <span class="hover:text-indigo-600 mr-2">Nov 16 2020</span> - <span class="ml-2 hover:text-indigo-600">Dec 15, 2020</span>
                </div>
        </div>
        <div class="flex flex-row items-start justify-start py-10 w-full space-x-8">
            <div class="w-full lg:w-2/3 flex-col items-center justify-center space-y-8">
                <div class="flex flex-row items-center justify-start space-x-8">
                    <div class="flex flex-col rounded-lg bg-white p-4 space-y-3 w-full">
                        <span class="text-gray-400 font-medium">Monthly Recurring Revenue</span>
                        <div class="flex flex-row items-end justify-center">
                            <span class="text-gray-900 text-xl font-semibold mr-2">$149,201</span>
                            <span class="text-gray-400 text-sm font-medium mr-2">from $124.5k</span>
                            <div class="ml-auto flex flex-row items-center justify-center space-x-2">
                                <div class="w-2 h-2 rounded-full bg-green-400"></div>
                                <span class="text-green-400 font-medium text-lg">3.1%</span>
                            </div>
                        </div>
                        <img src="/graph-example.png" class="w-full h-auto">
                    </div>
                    <div class="flex flex-col rounded-lg bg-white p-4 space-y-3 w-full">
                        <span class="text-gray-400 font-medium">Net Revenue</span>
                        <div class="flex flex-row items-end justify-center">
                            <span class="text-gray-900 text-xl font-semibold mr-2">$213,230</span>
                            <span class="text-gray-400 text-sm font-medium mr-2">from $184.2k</span>
                            <div class="ml-auto flex flex-row items-center justify-center space-x-2">
                                <div class="w-2 h-2 rounded-full bg-green-400"></div>
                                <span class="text-green-400 font-medium text-lg">4.8%</span>
                            </div>
                        </div>
                        <img src="/graph-example.png" class="w-full h-auto">
                    </div>
                </div>
                <div class="flex flex-row items-center justify-start space-x-8">
                    <div class="flex flex-col rounded-lg bg-white p-4 space-y-3 w-full">
                        <span class="text-gray-400 font-medium">Fees</span>
                        <div class="flex flex-row items-end justify-center">
                            <span class="text-gray-900 text-xl font-semibold mr-2">$149,201</span>
                            <span class="text-gray-400 text-sm font-medium mr-2">from $124.5k</span>
                            <div class="ml-auto flex flex-row items-center justify-center space-x-2">
                                <div class="w-2 h-2 rounded-full bg-green-400"></div>
                                <span class="text-green-400 font-medium text-lg">3.1%</span>
                            </div>
                        </div>
                        <img src="/graph-example.png" class="w-full h-auto">
                    </div>
                    <div class="flex flex-col rounded-lg bg-white p-4 space-y-3 w-full">
                        <span class="text-gray-400 font-medium">Other Revenue</span>
                        <div class="flex flex-row items-end justify-center">
                            <span class="text-gray-900 text-xl font-semibold mr-2">$213,230</span>
                            <span class="text-gray-400 text-sm font-medium mr-2">from $184.2k</span>
                            <div class="ml-auto flex flex-row items-center justify-center space-x-2">
                                <div class="w-2 h-2 rounded-full bg-green-400"></div>
                                <span class="text-green-400 font-medium text-lg">4.8%</span>
                            </div>
                        </div>
                        <img src="/graph-example.png" class="w-full h-auto">
                    </div>
                </div>
                <div class="flex flex-row items-center justify-start space-x-8">
                    <div class="flex flex-col rounded-lg bg-white p-4 space-y-3 w-full">
                        <span class="text-gray-400 font-medium">Average Revenue Per User</span>
                        <div class="flex flex-row items-end justify-center">
                            <span class="text-gray-900 text-xl font-semibold mr-2">$149,201</span>
                            <span class="text-gray-400 text-sm font-medium mr-2">from $124.5k</span>
                            <div class="ml-auto flex flex-row items-center justify-center space-x-2">
                                <div class="w-2 h-2 rounded-full bg-green-400"></div>
                                <span class="text-green-400 font-medium text-lg">3.1%</span>
                            </div>
                        </div>
                        <img src="/graph-example.png" class="w-full h-auto">
                    </div>
                    <div class="flex flex-col rounded-lg bg-white p-4 space-y-3 w-full">
                        <span class="text-gray-400 font-medium">Annual Run Rate</span>
                        <div class="flex flex-row items-end justify-center">
                            <span class="text-gray-900 text-xl font-semibold mr-2">$213,230</span>
                            <span class="text-gray-400 text-sm font-medium mr-2">from $184.2k</span>
                            <div class="ml-auto flex flex-row items-center justify-center space-x-2">
                                <div class="w-2 h-2 rounded-full bg-green-400"></div>
                                <span class="text-green-400 font-medium text-lg">4.8%</span>
                            </div>
                        </div>
                        <img src="/graph-example.png" class="w-full h-auto">
                    </div>
                </div>
                <div class="flex flex-row items-center justify-start space-x-8">
                    <div class="flex flex-col rounded-lg bg-white p-4 space-y-3 w-full">
                        <span class="text-gray-400 font-medium">Lifetime Value</span>
                        <div class="flex flex-row items-end justify-center">
                            <span class="text-gray-900 text-xl font-semibold mr-2">$149,201</span>
                            <span class="text-gray-400 text-sm font-medium mr-2">from $124.5k</span>
                            <div class="ml-auto flex flex-row items-center justify-center space-x-2">
                                <div class="w-2 h-2 rounded-full bg-green-400"></div>
                                <span class="text-green-400 font-medium text-lg">3.1%</span>
                            </div>
                        </div>
                        <img src="/graph-example.png" class="w-full h-auto">
                    </div>
                    <div class="flex flex-col rounded-lg bg-white p-4 space-y-3 w-full">
                        <span class="text-gray-400 font-medium">MRR Growth Rate</span>
                        <div class="flex flex-row items-end justify-center">
                            <span class="text-gray-900 text-xl font-semibold mr-2">$213,230</span>
                            <span class="text-gray-400 text-sm font-medium mr-2">from $184.2k</span>
                            <div class="ml-auto flex flex-row items-center justify-center space-x-2">
                                <div class="w-2 h-2 rounded-full bg-green-400"></div>
                                <span class="text-green-400 font-medium text-lg">4.8%</span>
                            </div>
                        </div>
                        <img src="/graph-example.png" class="w-full h-auto">
                    </div>
                </div>
                <div class="flex flex-row items-center justify-start space-x-8">
                    <div class="flex flex-col rounded-lg bg-white p-4 space-y-3 w-full">
                        <span class="text-gray-400 font-medium">User Churn</span>
                        <div class="flex flex-row items-end justify-center">
                            <span class="text-gray-900 text-xl font-semibold mr-2">$149,201</span>
                            <span class="text-gray-400 text-sm font-medium mr-2">from $124.5k</span>
                            <div class="ml-auto flex flex-row items-center justify-center space-x-2">
                                <div class="w-2 h-2 rounded-full bg-green-400"></div>
                                <span class="text-green-400 font-medium text-lg">3.1%</span>
                            </div>
                        </div>
                        <img src="/graph-example.png" class="w-full h-auto">
                    </div>
                    <div class="flex flex-col rounded-lg bg-white p-4 space-y-3 w-full">
                        <span class="text-gray-400 font-medium">Revenue Churn</span>
                        <div class="flex flex-row items-end justify-center">
                            <span class="text-gray-900 text-xl font-semibold mr-2">$213,230</span>
                            <span class="text-gray-400 text-sm font-medium mr-2">from $184.2k</span>
                            <div class="ml-auto flex flex-row items-center justify-center space-x-2">
                                <div class="w-2 h-2 rounded-full bg-green-400"></div>
                                <span class="text-green-400 font-medium text-lg">4.8%</span>
                            </div>
                        </div>
                        <img src="/graph-example.png" class="w-full h-auto">
                    </div>
                </div>
                <div class="flex flex-row items-center justify-start space-x-8">
                    <div class="flex flex-col rounded-lg bg-white p-4 space-y-3 w-full">
                        <span class="text-gray-400 font-medium">Quick Ratio</span>
                        <div class="flex flex-row items-end justify-center">
                            <span class="text-gray-900 text-xl font-semibold mr-2">$149,201</span>
                            <span class="text-gray-400 text-sm font-medium mr-2">from $124.5k</span>
                            <div class="ml-auto flex flex-row items-center justify-center space-x-2">
                                <div class="w-2 h-2 rounded-full bg-green-400"></div>
                                <span class="text-green-400 font-medium text-lg">3.1%</span>
                            </div>
                        </div>
                        <img src="/graph-example.png" class="w-full h-auto">
                    </div>
                    <div class="flex flex-col rounded-lg bg-white p-4 space-y-3 w-full">
                        <span class="text-gray-400 font-medium">Active Customers</span>
                        <div class="flex flex-row items-end justify-center">
                            <span class="text-gray-900 text-xl font-semibold mr-2">$213,230</span>
                            <span class="text-gray-400 text-sm font-medium mr-2">from $184.2k</span>
                            <div class="ml-auto flex flex-row items-center justify-center space-x-2">
                                <div class="w-2 h-2 rounded-full bg-green-400"></div>
                                <span class="text-green-400 font-medium text-lg">4.8%</span>
                            </div>
                        </div>
                        <img src="/graph-example.png" class="w-full h-auto">
                    </div>
                </div>
                <div class="flex flex-row items-center justify-start space-x-8">
                    <div class="flex flex-col rounded-lg bg-white p-4 space-y-3 w-full">
                        <span class="text-gray-400 font-medium">New Customers</span>
                        <div class="flex flex-row items-end justify-center">
                            <span class="text-gray-900 text-xl font-semibold mr-2">$149,201</span>
                            <span class="text-gray-400 text-sm font-medium mr-2">from $124.5k</span>
                            <div class="ml-auto flex flex-row items-center justify-center space-x-2">
                                <div class="w-2 h-2 rounded-full bg-green-400"></div>
                                <span class="text-green-400 font-medium text-lg">3.1%</span>
                            </div>
                        </div>
                        <img src="/graph-example.png" class="w-full h-auto">
                    </div>
                    <div class="flex flex-col rounded-lg bg-white p-4 space-y-3 w-full">
                        <span class="text-gray-400 font-medium">Reactivations</span>
                        <div class="flex flex-row items-end justify-center">
                            <span class="text-gray-900 text-xl font-semibold mr-2">$213,230</span>
                            <span class="text-gray-400 text-sm font-medium mr-2">from $184.2k</span>
                            <div class="ml-auto flex flex-row items-center justify-center space-x-2">
                                <div class="w-2 h-2 rounded-full bg-green-400"></div>
                                <span class="text-green-400 font-medium text-lg">4.8%</span>
                            </div>
                        </div>
                        <img src="/graph-example.png" class="w-full h-auto">
                    </div>
                </div>
                <div class="flex flex-row items-center justify-start space-x-8">
                    <div class="flex flex-col rounded-lg bg-white p-4 space-y-3 w-full">
                        <span class="text-gray-400 font-medium">New Subscriptions</span>
                        <div class="flex flex-row items-end justify-center">
                            <span class="text-gray-900 text-xl font-semibold mr-2">$149,201</span>
                            <span class="text-gray-400 text-sm font-medium mr-2">from $124.5k</span>
                            <div class="ml-auto flex flex-row items-center justify-center space-x-2">
                                <div class="w-2 h-2 rounded-full bg-green-400"></div>
                                <span class="text-green-400 font-medium text-lg">3.1%</span>
                            </div>
                        </div>
                        <img src="/graph-example.png" class="w-full h-auto">
                    </div>
                    <div class="flex flex-col rounded-lg bg-white p-4 space-y-3 w-full">
                        <span class="text-gray-400 font-medium">Active Subscriptions</span>
                        <div class="flex flex-row items-end justify-center">
                            <span class="text-gray-900 text-xl font-semibold mr-2">$213,230</span>
                            <span class="text-gray-400 text-sm font-medium mr-2">from $184.2k</span>
                            <div class="ml-auto flex flex-row items-center justify-center space-x-2">
                                <div class="w-2 h-2 rounded-full bg-green-400"></div>
                                <span class="text-green-400 font-medium text-lg">4.8%</span>
                            </div>
                        </div>
                        <img src="/graph-example.png" class="w-full h-auto">
                    </div>
                </div>
                <div class="flex flex-row items-center justify-start space-x-8">
                    <div class="flex flex-col rounded-lg bg-white p-4 space-y-3 w-full">
                        <span class="text-gray-400 font-medium">Upgrades</span>
                        <div class="flex flex-row items-end justify-center">
                            <span class="text-gray-900 text-xl font-semibold mr-2">$149,201</span>
                            <span class="text-gray-400 text-sm font-medium mr-2">from $124.5k</span>
                            <div class="ml-auto flex flex-row items-center justify-center space-x-2">
                                <div class="w-2 h-2 rounded-full bg-green-400"></div>
                                <span class="text-green-400 font-medium text-lg">3.1%</span>
                            </div>
                        </div>
                        <img src="/graph-example.png" class="w-full h-auto">
                    </div>
                    <div class="flex flex-col rounded-lg bg-white p-4 space-y-3 w-full">
                        <span class="text-gray-400 font-medium">Downgrades</span>
                        <div class="flex flex-row items-end justify-center">
                            <span class="text-gray-900 text-xl font-semibold mr-2">$213,230</span>
                            <span class="text-gray-400 text-sm font-medium mr-2">from $184.2k</span>
                            <div class="ml-auto flex flex-row items-center justify-center space-x-2">
                                <div class="w-2 h-2 rounded-full bg-green-400"></div>
                                <span class="text-green-400 font-medium text-lg">4.8%</span>
                            </div>
                        </div>
                        <img src="/graph-example.png" class="w-full h-auto">
                    </div>
                </div>
                <div class="flex flex-row items-center justify-start space-x-8">
                    <div class="flex flex-col rounded-lg bg-white p-4 space-y-3 w-full">
                        <span class="text-gray-400 font-medium">Churned Customers</span>
                        <div class="flex flex-row items-end justify-center">
                            <span class="text-gray-900 text-xl font-semibold mr-2">$149,201</span>
                            <span class="text-gray-400 text-sm font-medium mr-2">from $124.5k</span>
                            <div class="ml-auto flex flex-row items-center justify-center space-x-2">
                                <div class="w-2 h-2 rounded-full bg-green-400"></div>
                                <span class="text-green-400 font-medium text-lg">3.1%</span>
                            </div>
                        </div>
                        <img src="/graph-example.png" class="w-full h-auto">
                    </div>
                    <div class="flex flex-col rounded-lg bg-white p-4 space-y-3 w-full">
                        <span class="text-gray-400 font-medium">Coupons Redeemed</span>
                        <div class="flex flex-row items-end justify-center">
                            <span class="text-gray-900 text-xl font-semibold mr-2">$213,230</span>
                            <span class="text-gray-400 text-sm font-medium mr-2">from $184.2k</span>
                            <div class="ml-auto flex flex-row items-center justify-center space-x-2">
                                <div class="w-2 h-2 rounded-full bg-green-400"></div>
                                <span class="text-green-400 font-medium text-lg">4.8%</span>
                            </div>
                        </div>
                        <img src="/graph-example.png" class="w-full h-auto">
                    </div>
                </div>
                <div class="flex flex-row items-center justify-start space-x-8">
                    <div class="flex flex-col rounded-lg bg-white p-4 space-y-3 w-full">
                        <span class="text-gray-400 font-medium">Failed Charges</span>
                        <div class="flex flex-row items-end justify-center">
                            <span class="text-gray-900 text-xl font-semibold mr-2">$149,201</span>
                            <span class="text-gray-400 text-sm font-medium mr-2">from $124.5k</span>
                            <div class="ml-auto flex flex-row items-center justify-center space-x-2">
                                <div class="w-2 h-2 rounded-full bg-green-400"></div>
                                <span class="text-green-400 font-medium text-lg">3.1%</span>
                            </div>
                        </div>
                        <img src="/graph-example.png" class="w-full h-auto">
                    </div>
                    <div class="flex flex-col rounded-lg bg-white p-4 space-y-3 w-full">
                        <span class="text-gray-400 font-medium">Refunds</span>
                        <div class="flex flex-row items-end justify-center">
                            <span class="text-gray-900 text-xl font-semibold mr-2">$213,230</span>
                            <span class="text-gray-400 text-sm font-medium mr-2">from $184.2k</span>
                            <div class="ml-auto flex flex-row items-center justify-center space-x-2">
                                <div class="w-2 h-2 rounded-full bg-green-400"></div>
                                <span class="text-green-400 font-medium text-lg">4.8%</span>
                            </div>
                        </div>
                        <img src="/graph-example.png" class="w-full h-auto">
                    </div>
                </div>
            </div>
            <div class="w-full lg:w-1/3 flex flex-col items-center justify-center space-y-8">
                <div class="w-full h-auto flex flex-col items-center justify-center rounded overflow-hidden bg-white">
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
                    <div class="w-full px-8 py-4 border border-gray-200 flex flex-row items-center justify-center border-l-0 border-r-0 border-t-0">
                        <span class="font-semibold text-indigo-600 mr-4">5</span>
                        <span class="text-gray-400 mr-4">New Customers</span>
                        <span class="text-green-600 font-semibold ml-auto">+$60.00</span>
                    </div>
                    <div class="w-full px-8 py-4 border border-gray-200 flex flex-row items-center justify-center border-l-0 border-r-0 border-t-0">
                        <span class="font-semibold text-indigo-600 mr-4">-2</span>
                        <span class="text-gray-400 mr-4">New trials</span>
                        <span class="text-red-600 font-semibold ml-auto">-$23.00</span>
                    </div>
                    <div class="flex flex-row items-center justify-center p-4 px-8 w-full">
                        <span class="text-gray-400 mr-4">Total Change</span>
                        <span class="text-green-600 font-semibold ml-auto">+$30.00</span>
                    </div>
                </div>
                <div class="w-full h-auto flex flex-col items-center justify-center rounded overflow-hidden bg-white">
                    <div class="flex flex-row items-center justify-center p-4 w-full border border-gray-200 border-t-0 border-r-0 border-l-0">
                        <span class="text-lg text-gray-900 font-semibold mr-2">Live stream</span>
                        <select class="p-2 rounded-lg border border-gray-200 ml-auto text-sm text-gray-600">
                            <option>Everything</option>
                            <option>New customers</option>
                            <option>Upgrades</option>
                            <option>Cancellations</option>
                        </select>
                    </div>
                    <div class="w-full p-4 border border-gray-200 flex flex-row items-center justify-center border-l-0 border-r-0 border-t-0">
                        <div class="w-2 h-2 bg-red-400 rounded-full mr-4"></div>
                        <p class="text-gray-400 text-sm">US$49 payment failed by <span class="cursor-pointer text-indigo-600 hover:underline">Company Inc.</span></p>
                        <span class="text-xs text-gray-400 ml-auto">22mins ago</span>
                    </div>
                    <div class="w-full p-4 border border-gray-200 flex flex-row items-center justify-center border-l-0 border-r-0 border-t-0">
                        <div class="w-2 h-2 bg-green-400 rounded-full mr-4"></div>
                        <p class="text-gray-400 text-sm">US$15 paid by <span class="cursor-pointer text-indigo-600 hover:underline">Company Inc.</span></p>
                        <span class="text-xs text-gray-400 ml-auto">1hr ago</span>
                    </div>
                    <div class="w-full p-4 border border-gray-200 flex flex-row items-center justify-center border-l-0 border-r-0 border-t-0">
                        <div class="w-2 h-2 bg-indigo-400 rounded-full mr-4"></div>
                        <p class="text-gray-400 text-sm"><span class="cursor-pointer text-indigo-600 hover:underline">Company Inc.</span> signed up for free plan</p>
                        <span class="text-xs text-gray-400 ml-auto">3hrs ago</span>
                    </div>
                    <div class="w-full p-4 border border-gray-200 flex flex-row items-center justify-center border-b-0 border-l-0 border-r-0 border-t-0">
                        <div class="w-2 h-2 bg-blue-400 rounded-full mr-4"></div>
                        <p class="text-gray-400 text-sm"><span class="cursor-pointer text-indigo-600 hover:underline">Company Inc.</span> upgraded to the enterprise plan</p>
                        <span class="text-xs text-gray-400 ml-auto">9hrs ago</span>
                    </div>
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