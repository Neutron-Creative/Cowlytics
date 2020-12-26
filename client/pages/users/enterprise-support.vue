<template>
    <div class="flex flex-col flex-grow">
        <div v-if="!complete" class="my-8 lg:my-20 flex flex-col max-w-xl text-center items-center justify-center">
            <a href="https://cowlytics.neutron.so" class="mb-8">
                <img src="/Favicon@512w.png" class="w-16 h-auto"/>
            </a>
            <h1 class="text-gray-900 text-4xl font-bold mb-3">Request enterprise support</h1>
            <p class="text-xl text-gray-500 mb-6">Fill out the form below and we'll get back to you as soon as we can, typically within 1-2 business days.</p>
            <form class="flex flex-col w-full space-y-6 text-left">
                    <div class="flex flex-col space-y-2 flex-grow">
                        <label class="text-lg font-medium text-gray-800" for="full_name">Full name</label>
                        <input id="full_name" name="full_name" type="text" placeholder="e.g. Jane Doe" class="text-gray-600 bg-white px-3 py-4 w-full rounded-lg"/>
                    </div>
                <div class="flex flex-col lg:flex-row items-center justify-center w-full space-x-4">
                    <div class="flex flex-col space-y-2 flex-grow">
                        <label class="text-lg font-medium text-gray-800" for="full_name">Company</label>
                        <input id="company_name" name="company_name" type="text" placeholder="e.g. Neutron Creative Inc." class="text-gray-600 bg-white px-3 py-4 w-full rounded-lg"/>
                    </div>
                    <div class="flex flex-col space-y-2 flex-grow">
                        <label class="text-lg font-medium text-gray-800" for="full_name">Job title</label>
                        <input id="email_address" name="email_address" type="text" placeholder="e.g. CEO, VP, Director, etc." class="text-gray-600 bg-white px-3 py-4 w-full rounded-lg"/>
                    </div>
                </div>
                <div class="flex flex-col lg:flex-row items-center justify-center w-full space-x-4">
                    <div class="flex flex-col space-y-2 flex-grow">
                        <label class="text-lg font-medium text-gray-800" for="full_name">Email address</label>
                        <input id="email_address" name="email_address" type="text" placeholder="e.g. jane@google.com" class="text-gray-600 bg-white px-3 py-4 w-full rounded-lg"/>
                    </div>
                    <div class="flex flex-col space-y-2 flex-grow">
                        <label class="text-lg font-medium text-gray-800" for="full_name">Phone Number</label>
                        <input id="email_address" name="email_address" type="text" placeholder="e.g. (919) 653-0790" class="text-gray-600 bg-white px-3 py-4 w-full rounded-lg"/>
                    </div>
                </div>
                <div class="flex flex-col space-y-2 flex-grow">
                    <label class="text-lg font-medium text-gray-800" for="full_name">Department</label>
                    <select id="message_subject" name="message_subject" type="text" class="text-gray-600 bg-white px-3 py-4 w-full rounded-lg">
                        <option>Sales</option>
                        <option>Development</option>
                        <option>Operations</option>
                    </select>
                </div>
                <div class="flex flex-col space-y-2 flex-grow">
                    <label class="text-lg font-medium text-gray-800" for="full_name">Message body</label>
                    <textarea id="message_body" :rows="5" name="message_body" type="text" placeholder="e.g. Looking for assistance building a custom fork of Cowlytics for..." class="text-gray-600 bg-white px-3 py-4 w-full rounded-lg"></textarea>
                </div>
                <button @click="submit_form" type="button" class="w-full bg-indigo-600 hover:bg-indigo-500 py-4 px-8 text-white font-semibold rounded-lg mb-2">Submit inquiry</button>
                <a href="tel:+19196530790" class="text-center text-gray-500 hover:underline text-sm w-full">In need of urgent assistance? Call us at (919) 653-0790</a>
            </form>
        </div>
        <div v-if="complete" class="my-auto max-w-lg flex flex-col items-center justify-center w-full">
            <a href="https://cowlytics.neutron.so" class="mb-8">
                <img src="/Favicon@512w.png" class="w-16 h-auto"/>
            </a>
            <h1 class="text-3xl font-semibold text-gray-900 mb-4 text-center">Your inquiry has been submitted</h1>
            <p class="text-center text-gray-500 mb-8">We'll get back to you as soon as we can. In the meantime, create your free account or join our community on Discord.</p>
            <n-link to="/users/login" type="button" class="flex flex-row items-center justify-center mb-4 text-center active:ring ring-indigo-600 ring-opacity-50 hover:bg-indigo-500 bg-indigo-600 text-white text-sm font-semibold rounded-lg w-full px-6 py-3">Try out Cowlytics, 100% free</n-link>
            <n-link to="/users/login" type="button" class="flex flex-row items-center justify-center mb-4 text-center active:ring ring-gray-600 ring-opacity-50  text-white text-sm font-semibold rounded-lg w-full px-6 py-3" style="background:#7289da;">Join our community on Discord</n-link>
            <a href="tel:+19196530790" class="text-center text-gray-500 hover:underline text-sm w-full">In need of urgent assistance? Call us at (919) 653-0790</a>
        </div>
    </div>
</template>

<script>
export default {
    data: () => {
        return {
            full_name: null,
            company_name: null,
            job_title: null,
            email_address: null,
            phone_number: null,
            department: null,
            message_body: null,
            complete: false,
        }
    },
    methods: {
        submit_form() {
            this.complete = true;
        }
    }
}
</script>