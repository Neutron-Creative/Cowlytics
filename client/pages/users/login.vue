<template>
    <div class="flex flex-col max-w-xs items-center justify-center w-full mx-auto my-auto py-8">
        <a href="https://cowlytics.neutron.so" class="mb-8">
            <img src="/Favicon%20Rounded.png" class="w-16 h-auto"/>
        </a>
        <h1 class="text-3xl font-semibold text-gray-900 mb-4">Sign in</h1>
        <p class="text-gray-500 mb-2">Don't have an account yet?</p>
        <n-link class="text-indigo-600 hover:underline mb-8" to="/users/create-account">Start your free 14 day trial</n-link>
        <input type="text" placeholder="Email Address" class="mb-4 outline-none text-gray-500 text-sm p-3 rounded-lg border-gray-200 w-full focus:ring focus:ring-indigo-600 focus:ring-opacity-50"/>
        <input type="password" placeholder="Email Address" class="mb-4 outline-none text-gray-500 text-sm p-3 rounded-lg border-gray-200 w-full focus:ring focus:ring-indigo-600 focus:ring-opacity-50"/>
        <n-link to="/" type="button" class="mb-4 text-center active:ring ring-indigo-600 ring-opacity-50 hover:bg-indigo-500 bg-indigo-600 text-white text-sm font-semibold rounded-lg w-full px-6 py-3">Sign in</n-link>
        <n-link class="text-indigo-600 hover:underline mb-8 text-sm" to="/users/forgot-password">Forgot your password?</n-link>
    </div>
</template>