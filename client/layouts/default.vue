<template>
  <div class="flex flex-col items-center justify-center w-screen min-h-screen h-auto">
    <Nuxt />
    <footer class="mt-auto flex flex-col items-center justify-center p-4 lg:p-8 text-center text-gray-500 text-sm font-medium">
      Copyright ©{{ current_year }} Neutron Creative Inc.<br>All rights reserved.
    </footer>
  </div>
</template>

<style>
  @import url('https://rsms.me/inter/inter.css');
  html, body {
    @apply bg-gray-100 overflow-x-hidden;
  }
  html {
    font-family:
      'Inter',
      'Source Sans Pro',
      -apple-system,
      BlinkMacSystemFont,
      'Segoe UI',
      Roboto,
      'Helvetica Neue',
      Arial,
      sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    line-height: 1.35;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }

  * {outline:none !important;}
</style>
<script>
export default {
  data: () => {
    return {
    }
  },
  computed: {
    current_year: () => {
      return new Date().getFullYear();
    }
  }
}
</script>