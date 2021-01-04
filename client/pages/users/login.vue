<template>
    <div class="flex flex-col max-w-sm items-center justify-center w-full mx-auto my-auto py-8">
        <a href="https://cowlytics.neutron.so" class="mb-8">
            <img src="/Favicon@512w.png" class="w-16 h-auto"/>
        </a>
        <h1 class="text-3xl font-semibold text-gray-900 mb-4">Sign in</h1>
        <p class="text-gray-500 mb-2">Don't have an account yet?</p>
        <a class="text-indigo-600 hover:underline mb-8" href="/users/create-account">Start your free 14 day trial</a>
        <div v-if="error" class="w-full rounded-lg bg-red-200 border border-red-400 text-red-400 font-medium text-xs text-center p-3 mb-4">{{ error }}</div>
        <input v-model="email" type="text" placeholder="Email Address" class="mb-4 outline-none text-gray-500 text-sm p-3 rounded-lg border-gray-200 w-full focus:ring focus:ring-indigo-600 focus:ring-opacity-50"/>
        <input v-model="password" type="password" placeholder="Password" class="mb-4 outline-none text-gray-500 text-sm p-3 rounded-lg border-gray-200 w-full focus:ring focus:ring-indigo-600 focus:ring-opacity-50"/>
        <button @click="attempt_login" type="button" class="mb-4 text-center active:ring ring-indigo-600 ring-opacity-50 hover:bg-indigo-500 bg-indigo-600 text-white text-sm font-semibold rounded-lg w-full px-6 py-3">Sign in</button>
        <a class="text-indigo-600 hover:underline mb-8 text-sm" href="/users/forgot-password">Forgot your password?</a>
    </div>
</template>
<script>
export default {
    head: {
        title: 'Login - Cowlytics'
    },
    middleware: 'unauthenticated',
    data: () => {
        return {
            email: null,
            password: null,
            error: null
        };
    },
    methods: {
        async attempt_login() {
            // Validate data
            if(!this.email) return this.error = 'Email is required to sign up!';
            if(!this.password) return this.error = 'Password is required to sign up!';
            
            // Clear any previous validation erros
            this.error = false;

            // Attempt login
            const { user, error } = await this.$supabase.auth.signIn({
                email: this.email,
                password: this.password,
            });
            // Check for errors
            if(error) return this.error = error;
            // Else, fetch session
            const session = this.$supabase.auth.session();
            // Else, store auth data and continue
            this.$store.commit('auth/login', session.access_token);
            this.$store.commit('user/login', user);
            // Goto dashboard
            this.$router.push('/');
        }
    }
}
</script>