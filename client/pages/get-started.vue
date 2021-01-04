<template>
    <div class="lg:h-screen lg:items-center lg:justify-center">
        <div class="flex flex-col items-center justify-center text-center">
            <h1 class="text-gray-900 text-3xl font-semibold mb-4">Howdy! Let's get you set up.</h1>
            <p class="text-gray-500 text-lg mb-8">First, let's connect your payment proccessor.</p>
            <button type="button" @click="attempt_stripe_connect" class="mb-8 shadow-lg px-6 py-4 text-center font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg">Connect with Stripe</button>
            <p class="text-gray-400 text-xs mb-8">Other processors coming soon.</p>
        </div>
    </div>
</template>
<script>
export default {
    layout: 'profile',
    methods: {
        attempt_stripe_connect: () => {
            return window.location.href='https://connect.stripe.com/oauth/authorize?response_type=code&client_id=ca_Gga0JdNXOGKqNN3d4pyA4d4gD7haJDAV&scope=read_only';
        }
    }
}
</script>