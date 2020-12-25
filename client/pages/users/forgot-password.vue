<template>
    <div class="flex flex-col max-w-xs items-center justify-center w-full mx-auto my-auto py-8">
        <a href="https://cowlytics.neutron.so" class="mb-8">
            <img src="/Favicon@512w.png" class="w-16 h-auto"/>
        </a>
        <h1 class="text-3xl font-semibold text-gray-900 mb-4 text-center">Forgot your password?</h1>
        <p class="text-center text-gray-500 mb-2">Enter your email below to reset your account password.</p>
        <input v-model="email" type="text" placeholder="Email Address" class="mb-4 outline-none text-gray-500 text-sm p-3 rounded-lg border-gray-200 w-full focus:ring focus:ring-indigo-600 focus:ring-opacity-50"/>
        <button @click="attempt_reset" type="button" class="mb-4 text-center active:ring ring-indigo-600 ring-opacity-50 hover:bg-indigo-500 bg-indigo-600 text-white text-sm font-semibold rounded-lg w-full px-6 py-3">Request password reset</button>
        <n-link class="text-indigo-600 hover:underline mb-8 text-sm" to="/users/login">Go back to login</n-link>
    </div>
</template>
<script>
export default {
    data: () => {
        return {
            email: null,
            error: null
        };
    },
    methods: {
        async attempt_reset() {
            // Validate data
                if(!this.email) return this.error = 'Email is required to reset password';
            // Attempt login

            // Check for errors

            // If errors, return error

            // Else, store auth data & continue

            // Display password reset confirmation
            console.log('Password reset successfully');
        }
    }
}
</script>