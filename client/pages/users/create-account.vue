<template>
    <div class="w-screen h-screen flex flex-row items-center justify-center">
        <div class="flex flex-col items-center lg:items-end justify-center w-full lg:w-1/2 lg:h-screen bg-gray-100">
            <div class="max-w-md flex flex-col items-start justify-center w-full p-12 lg:mr-20">
                <div class="flex flex-row items-center justify-start mb-12">
                    <img class="w-10 mr-4" src="/Icon Bare.png"/>
                    <span class="text-3xl font-bold">Cowlytics</span>
                </div>
                <div class="flex flex-row items-start w-full mb-6">
                    <img class="mt-1 w-5 h-5 h-auto" src="/Checkmark Filled.svg"/>
                    <div class="flex flex-col ml-4">
                        <h2 class="text-2xl font-bold mb-2">Easy to use</h2>
                        <p class="text-gray-400">Get started in seconds and learn more about how you can improve your Stripe powered SaaS immediately</p>
                    </div>
                </div>
                <div class="flex flex-row items-start w-full mb-6">
                    <img class="mt-1 w-5 h-5 h-auto" src="/Checkmark Filled.svg"/>
                    <div class="flex flex-col ml-4">
                        <h2 class="text-2xl font-bold mb-2">No video calls to Brian</h2>
                        <p class="text-gray-400">Our competitors do dumb things like force you to take 15 minutes to video call "Brian" to cancel - we don't.</p>
                    </div>
                </div>
                <div class="flex flex-row items-start w-full mb-6">
                    <img class="mt-1 w-5 h-5 h-auto" src="/Checkmark Filled.svg"/>
                    <div class="flex flex-col ml-4">
                        <h2 class="text-2xl font-bold mb-2">Better with open-source</h2>
                        <p class="text-gray-400">Built for consumers by consumers, the team at Neutron Creative built Cowlytics as free & open-source software in our mission to make the world open-source.</p>
                    </div>
                </div>
                <h3 class="mt-4 mb-2 uppercase text-sm tracking-widest text-gray-500 font-semibold">Proudly built on Github</h3>
                <div class="flex flex-row w-full items-center justify-start space-x-2">
                    <iframe src="https://ghbtns.com/github-btn.html?user=Neutron-Creative&type=sponsor&size=large" frameborder="0" scrolling="0" width="260" height="30" title="GitHub"></iframe>
                    <iframe src="https://ghbtns.com/github-btn.html?user=Neutron-Creative&repo=Cowlytics&type=star&count=true&size=large" frameborder="0" scrolling="0" width="170" height="30" title="GitHub"></iframe>
                </div>
            </div>
        </div>
        <div class="flex flex-col items-center lg:items-start justify-center w-full lg:w-1/2 lg:h-screen bg-white">
            <div class="max-w-md flex flex-col items-center justify-center w-full p-12 lg:ml-20">
                <h1 class="w-full text-4xl font-bold text-gray-900 mb-8">Get smarter SaaS insights in seconds</h1>
                <div v-if="error" class="w-full rounded-lg bg-red-200 border border-red-400 text-red-400 font-medium text-xs text-center p-3 mb-4">{{ error }}</div>
                <input v-model="name" type="text" placeholder="Full Name" class="mb-4 outline-none text-gray-500 text-sm p-3 border rounded-lg border-gray-200 w-full focus:ring focus:ring-indigo-600 focus:ring-opacity-50"/>
                <input v-model="email" type="text" placeholder="Email Address" class="mb-4 outline-none text-gray-500 text-sm p-3 border rounded-lg border-gray-200 w-full focus:ring focus:ring-indigo-600 focus:ring-opacity-50"/>
                <input v-model="password" type="password" placeholder="Password" class="mb-4 outline-none text-gray-500 text-sm p-3 border rounded-lg border-gray-200 w-full focus:ring focus:ring-indigo-600 focus:ring-opacity-50"/>
                <button @click="attempt_signup" type="button" class="mb-4 text-center active:ring ring-indigo-600 ring-opacity-50 hover:bg-indigo-500 bg-indigo-600 text-white text-sm font-semibold rounded-lg w-full px-6 py-4">Start your 14 day free trial</button>
                <n-link to="/users/login" class="text-center mx-auto text-xs font-medium text-indigo-600 hover:underline">Already have an account?</n-link>
                <div class="leading-relaxed text-sm my-8 text-gray-500">By clicking Sign Up, you agree to our <a class="text-gray-800 hover:underline" href="#">Terms of Service</a> and <a class="text-gray-800 hover:underline" href="#">Privacy Policy</a></div>
                <div class="my-4 flex flex-col w-full text-gray-700">
                    Have a unique organization use case?
                    <n-link to="/users/enterprise-support" class="text-indigo-600 font-medium mt-1 hover:underline">Get enterprise assistance</n-link>
                </div>
            </div>
            
        </div>
    </div>
</template>
<script>
export default {
    head: {
        title: 'Create account - Cowlytics'
    },
    data: () => {
        return {
            email: null,
            password: null,
            name: null,
            error: null
        };
    },
    middleware: 'unauthenticated',
    methods: {
        async attempt_signup() {
            // Validate data
                if(!this.email) return this.error = 'Email is required to sign up!';
                if(!this.password) return this.error = 'Password is required to sign up!';
                if(!this.name) return this.error = 'Full name is required to sign up!';
            // Attempt signup
            let { user, error } = await this.$supabase.auth.signUp({
                email: this.email,
                password: this.password
            });
            // Check for errors
            if(error) return this.error = error;
            const session = this.$supabase.auth.session()
            // Else, store auth and continue
            this.$store.commit('auth/login', session.access_token);
            this.$store.commit('user/login', user);
            // Goto dashboard
            window.location.href='/get-started';
        }
    }
}
</script>