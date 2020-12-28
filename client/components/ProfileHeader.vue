<template>
    <!-- Header row -->
    <div class="flex flex-col lg:flex-row items-center justify-center mb-4 mb-8">
        <!-- Page header -->
        <h1 class="flex flex-col lg:flex-row items-center justify-center text-center mr-0 lg:text-left text-2xl font-semibold text-gray-900 flex flex-row lg:mr-auto items-center justify-start">
            <img :src="avatar" class="mb-4 lg:mb-0 rounded-full w-12 lg:w-10 mr-4"/>
            {{ label }}
        </h1>
        <!-- Datepicker -->
        <div v-if="datepicker" class="mx-auto lg:mr-0 lg:mt-0 mt-4 flex flex-row items-center justify-center text-sm rounded-lg p-2 bg-white shadow text-gray-500 font-medium tracking-tight cursor-pointer">
            <img src="/icons/calendar.svg" class="w-4 h-auto opacity-50 hover:opacity-60 mr-2"/>
            <span class="hover:text-indigo-600 mr-2">Nov 16 2020</span> - <span class="ml-2 hover:text-indigo-600">Dec 15, 2020</span>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            label: {
                type: String,
                default: 'Cowlytics'
            },
            avatar: {
                type: String,
                default: 'https://neutroncreative.com/favicon.ico'
            },
            datepicker: {
                type: Boolean,
                default: false
            }
        }
    }
</script>