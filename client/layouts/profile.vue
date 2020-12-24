<template>
  <div class="flex flex-row items-center justify-center w-screen h-screen">
    <div class="fixed z-10 shadow-lg top-0 left-0 bg-white hidden lg:flex flex-col px-5 py-4 pt-12 items-center justify-start space-y-4 h-screen mr-auto text-gray-400" style="font-size:9px;">
      
      <img title="Cowlytics by Neutron Creative" style="width:40px;height:40px;" class="cursor-pointer rounded-lg bg-indigo-100 mb-4 flex flex-row items-center justify-center" src="/Favicon%20Padded.png"/>
      
      <n-link to='/' class="flex flex-col items-center justify-center space-y-2">
        <div style="width:36px;height:36px;" class="flex items-center justify-center rounded-lg bg-blue-100 border border-2 border-white hover:border-blue-200 hover:bg-blue-200 cursor-pointer">
          <img class="w-4 h-auto" src="/icons/overview.svg"/>
        </div>
        <span>Overview</span>
      </n-link>
      <n-link to="/metrics/mrr" class="flex flex-col items-center justify-center space-y-2">
        <div style="width:36px;height:36px;" class="flex items-center justify-center rounded-lg bg-pink-100 border border-2 border-white hover:border-pink-200 hover:bg-pink-200 cursor-pointer">
          <img class="w-4 h-auto" src="/icons/metrics.svg"/>
        </div>
        <span>Metrics</span>
      </n-link>
      <n-link to="/forecast" class="flex flex-col items-center justify-center space-y-2">
        <div style="width:36px;height:36px;" class="flex items-center justify-center rounded-lg bg-purple-100 border border-2 border-white hover:border-purple-200 hover:bg-purple-200 cursor-pointer">
          <img class="w-4 h-auto" src="/icons/forecast.svg"/>
        </div>
        <span>Forecast</span>
      </n-link>
      <n-link to="/compare" class="flex flex-col items-center justify-center space-y-2">
        <div style="width:36px;height:36px;" class="flex items-center justify-center rounded-lg bg-green-100 border border-2 border-white hover:border-green-200 hover:bg-green-200 cursor-pointer">
          <img class="w-4 h-auto" src="/icons/compare.svg"/>
        </div>
        <span>Compare</span>
      </n-link>
      <div class="text-2xs text-gray-400 text-center hover:underline cursor-pointer" style="width:38px;margin-top:auto !important;">9 days left</div>
      <div class="relative w-10 h-10">
        <img @click="profile_menu=!profile_menu" class="w-10 h-10 rounded-full cursor-pointer" src="https://scontent-iad3-1.cdninstagram.com/v/t51.2885-19/s150x150/106238897_725586734946472_5048956344165679204_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_ohc=hIC4pMKn26EAX---DUZ&tp=1&oh=e970e1aa8782ae9d4affd3d199c9adcb&oe=600EB36F"/>
        <div v-if="profile_menu" class="absolute bg-white text-xs rounded-lg shadow-lg border border-gray-200" style="width:150px;left: calc(100% + 20px);bottom:0;">
          <n-link to="/users/settings" class="flex flex-row items-center justify-center space-x-4 text-center p-2 w-full hover:bg-gray-100 cursor-pointer">Settings</n-link>
          <a href="#" class="flex flex-row items-center justify-center space-x-4 text-center p-2 w-full hover:bg-gray-100 cursor-pointer">Help Center</a>
          <a href="https://github.com/Neutron-Creative/Cowlytics" class="flex flex-row items-center justify-center space-x-4 text-center p-2 w-full hover:bg-gray-100 cursor-pointer">Changelog</a>
          <a href="https://status.singlelink.co" class="flex flex-row items-center justify-center space-x-4 text-center p-2 w-full hover:bg-gray-100 cursor-pointer">Status Page</a>
          <n-link to='/users/login' class="flex flex-row items-center justify-center space-x-4 text-center p-2 w-full hover:bg-gray-100 cursor-pointer">Sign Out</n-link>
        </div>
      </div>
    </div>
        <div class="flex flex-col max-w-8xl mx-auto w-10/12 relative">
          <Nuxt/>
          <div style="bottom:20px;" class="flex flex-row items-center justify-center w-10/12 max-w-8xl p-4 rounded-lg bg-gray-800 fixed shadow-lg">
            <span class="text-white font-medium mr-2 text-sm">Cowlytics for Company Inc: </span>
            <span class="text-gray-400 text-sm">Get these metrics for your company!</span>
            <n-link class="bg-white text-indigo-600 font-semibold text-sm px-6 py-3 rounded-lg ml-auto hover:bg-gray-100" to="/create-account">
              Start your free trial
            </n-link>
          </div>
      </div>
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
      profile_menu: false
    }
  }
}
</script>