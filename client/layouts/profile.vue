<template>
  <div class="flex flex-col lg:flex-row items-center justify-start lg:justify-center lg:items-start w-screen h-screen">
    <div class="fixed z-10 shadow-lg top-0 left-0 bg-white flex-row lg:flex-col p-3 lg:px-5 lg:py-4 lg:pt-12 items-center justify-start lg:space-y-4 lg:h-screen w-screen lg:w-auto lg:mr-auto text-gray-400" style="display:flex !important;font-size:9px;">
      
      <n-link to="/"><img title="Cowlytics by Neutron Creative" class="icon cursor-pointer rounded-lg bg-indigo-100 lg:mb-4 flex flex-row items-center justify-center" src="/Favicon@2x.png"/></n-link>
      <div class="font-semibold text-gray-700 mx-auto lg:hidden" style="font-size: 16px;">Company overview</div>
      <div @click="profile_menu=!profile_menu" class="p-1 px-2 icon hover:bg-gray-100 rounded-lg flex lg:hidden cursor-pointer flex-col items-center justify-center">
            <div style="width:100%; height:2px; background:rgba(0,0,0,.25); margin-bottom:4px;"></div>
            <div style="width:100%; height:2px; background:rgba(0,0,0,.25);margin-bottom:4px;"></div>
            <div style="width:100%; height:2px; background:rgba(0,0,0,.25);"></div>
      </div>
      <div class="hidden lg:flex flex-col dropdown lg:space-y-3 shadow-lg lg:shadow-none flex-grow">
          <n-link to='/' class="p-2 lg:p-0 hover:bg-indigo-100 flex flex-row lg:flex-col items-center justify-center space-x-2 lg:space-x-0 lg:space-y-2">
            <div class="space-x-2 lg:space-x-0 lg:space-y-2 w-full flex flex-row lg:flex-col items-center justify-center" style="max-width:120px">
            <div class="mini-icon flex items-center justify-center rounded-lg bg-blue-100 border border-2 border-white hover:border-blue-200 hover:bg-blue-200 cursor-pointer">
              <img class="w-4 h-auto" src="/icons/overview.svg"/>
            </div>
            <span class="icon-label">Overview</span>
            </div>
          </n-link>
          <n-link to="/metrics/mrr" class="p-2 lg:p-0 hover:bg-gray-100 flex flex-row lg:flex-col items-center justify-center space-x-2 lg:space-x-0 lg:space-y-2">
            <div class="space-x-2 lg:space-x-0 lg:space-y-2 w-full flex flex-row lg:flex-col items-center justify-center" style="max-width:120px">
            <div class="mini-icon flex items-center justify-center rounded-lg bg-pink-100 border border-2 border-white hover:border-pink-200 hover:bg-pink-200 cursor-pointer">
              <img class="w-4 h-auto" src="/icons/metrics.svg"/>
            </div>
            <span class="icon-label">Metrics</span>
            </div>
          </n-link>
          <n-link to="/forecast" class="p-2 lg:p-0 hover:bg-gray-100 flex flex-row lg:flex-col items-center justify-center space-x-2 lg:space-x-0 lg:space-y-2">
            <div class="space-x-2 lg:space-x-0 lg:space-y-2 w-full flex flex-row lg:flex-col items-center justify-center" style="max-width:120px">
            <div class="mini-icon flex items-center justify-center rounded-lg bg-purple-100 border border-2 border-white hover:border-purple-200 hover:bg-purple-200 cursor-pointer">
              <img class="w-4 h-auto" src="/icons/forecast.svg"/>
            </div>
            <span class="icon-label">Forecast</span>
            </div>
          </n-link>
          <n-link to="/customers" class="p-2 lg:p-0 hover:bg-gray-100 flex flex-row lg:flex-col items-center justify-center space-x-2 lg:space-x-0 lg:space-y-2">
            <div class="space-x-2 lg:space-x-0 lg:space-y-2 w-full flex flex-row lg:flex-col items-center justify-center" style="max-width:120px">
            <div class="mini-icon flex items-center justify-center rounded-lg bg-yellow-100 border border-2 border-white hover:border-yellow-200 hover:bg-yellow-200 cursor-pointer">
              <img class="w-4 h-auto" src="/icons/customers.svg"/>
            </div>
            <span class="icon-label">Customers</span>
            </div>
          </n-link>
          <n-link to="/leaderboard" class="p-2 lg:p-0 hover:bg-gray-100 flex flex-row lg:flex-col items-center justify-center space-x-2 lg:space-x-0 lg:space-y-2">
            <div class="space-x-2 lg:space-x-0 lg:space-y-2 w-full flex flex-row lg:flex-col items-center justify-center" style="max-width:120px">
              <div class="mini-icon flex items-center justify-center rounded-lg bg-green-100 border border-2 border-white hover:border-green-200 hover:bg-green-200 cursor-pointer">
                <img class="w-4 h-auto" src="/icons/compare.svg"/>
              </div>
              <span class="icon-label">Leaderboard</span>
            </div>
          </n-link>
          <div class="hidden lg:flex text-2xs mb-2 text-gray-400 text-center hover:underline cursor-pointer" style="width:38px;margin-top:auto !important;">9 days left</div>
          <div class="hidden lg:flex relative w-10 h-10">
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
      <div v-if="profile_menu" class="lg:hidden flex flex-col dropdown lg:space-y-3 shadow-lg lg:shadow-none flex-grow">
          <n-link to='/' class="p-2 lg:p-0 hover:bg-indigo-100 flex flex-row lg:flex-col items-center justify-center space-x-2 lg:space-x-0 lg:space-y-2">
            <div class="space-x-2 lg:space-x-0 lg:space-y-2 w-full flex flex-row lg:flex-col items-center justify-center" style="max-width:120px">
            <div class="mini-icon flex items-center justify-center rounded-lg bg-blue-100 border border-2 border-white hover:border-blue-200 hover:bg-blue-200 cursor-pointer">
              <img class="w-4 h-auto" src="/icons/overview.svg"/>
            </div>
            <span class="icon-label">Overview</span>
            </div>
          </n-link>
          <n-link to="/metrics/mrr" class="p-2 lg:p-0 hover:bg-gray-100 flex flex-row lg:flex-col items-center justify-center space-x-2 lg:space-x-0 lg:space-y-2">
            <div class="space-x-2 lg:space-x-0 lg:space-y-2 w-full flex flex-row lg:flex-col items-center justify-center" style="max-width:120px">
            <div class="mini-icon flex items-center justify-center rounded-lg bg-pink-100 border border-2 border-white hover:border-pink-200 hover:bg-pink-200 cursor-pointer">
              <img class="w-4 h-auto" src="/icons/metrics.svg"/>
            </div>
            <span class="icon-label">Metrics</span>
            </div>
          </n-link>
          <n-link to="/forecast" class="p-2 lg:p-0 hover:bg-gray-100 flex flex-row lg:flex-col items-center justify-center space-x-2 lg:space-x-0 lg:space-y-2">
            <div class="space-x-2 lg:space-x-0 lg:space-y-2 w-full flex flex-row lg:flex-col items-center justify-center" style="max-width:120px">
            <div class="mini-icon flex items-center justify-center rounded-lg bg-purple-100 border border-2 border-white hover:border-purple-200 hover:bg-purple-200 cursor-pointer">
              <img class="w-4 h-auto" src="/icons/forecast.svg"/>
            </div>
            <span class="icon-label">Forecast</span>
            </div>
          </n-link>
          <n-link to="/customers" class="p-2 lg:p-0 hover:bg-gray-100 flex flex-row lg:flex-col items-center justify-center space-x-2 lg:space-x-0 lg:space-y-2">
            <div class="space-x-2 lg:space-x-0 lg:space-y-2 w-full flex flex-row lg:flex-col items-center justify-center" style="max-width:120px">
            <div class="mini-icon flex items-center justify-center rounded-lg bg-yellow-100 border border-2 border-white hover:border-yellow-200 hover:bg-yellow-200 cursor-pointer">
              <img class="w-4 h-auto" src="/icons/customers.svg"/>
            </div>
            <span class="icon-label">Customers</span>
            </div>
          </n-link>
          <n-link to="/leaderboard" class="p-2 lg:p-0 hover:bg-gray-100 flex flex-row lg:flex-col items-center justify-center space-x-2 lg:space-x-0 lg:space-y-2">
            <div class="space-x-2 lg:space-x-0 lg:space-y-2 w-full flex flex-row lg:flex-col items-center justify-center" style="max-width:120px">
              <div class="mini-icon flex items-center justify-center rounded-lg bg-green-100 border border-2 border-white hover:border-green-200 hover:bg-green-200 cursor-pointer">
                <img class="w-4 h-auto" src="/icons/compare.svg"/>
              </div>
              <span class="icon-label">Leaderboard</span>
            </div>
          </n-link>
          <div class="hidden lg:flex text-2xs mb-2 text-gray-400 text-center hover:underline cursor-pointer" style="width:38px;margin-top:auto !important;">9 days left</div>
          <div class="hidden lg:flex relative w-10 h-10">
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
    </div>
        <div class="flex flex-col max-w-8xl mx-auto w-10/12 relative">
          <Nuxt class="flex flex-col w-full lg:py-12 py-24 lg:px-4"/>
          <div class="banner flex flex-col lg:flex-row items-center justify-center w-full lg:w-10/12 max-w-8xl p-4 lg:rounded-lg bg-gray-800 fixed shadow-lg">
            <span class="text-white font-medium mb-1 lg:mb-0 lg:mr-2 text-sm">Cowlytics for Company Inc: </span>
            <span class="text-gray-400 text-sm lg:mb-0 mb-3">Get these metrics for your company!</span>
            <n-link class="w-full lg:w-auto text-center bg-white text-indigo-600 font-semibold text-sm px-6 py-3 rounded-lg ml-auto hover:bg-gray-100" to="/users/create-account">
              Start your free trial
            </n-link>
          </div>
      </div>
    </div>
</template>

<style>
    @import url('https://rsms.me/inter/inter.css');
    .banner {
      bottom: 20px;
    }
    .icon {
      width:40px;
      height:40px;
    }
    .mini-icon {
      width:36px;
      height: 36px;
    }
    @media(min-width:1024px) {
      .dropdown a:hover {
        background:transparent!important;
      }
    }
    @media(max-width:1023px) {
      .icon-label {
        font-size: 12px !important;
      }
      .mini-icon {
        width:26px;
        height:26px;
        margin-right: auto;
        border: none !important;
      }
      .mini-icon img {
        @apply w-3 !important;
      }
      .dropdown {
        position: absolute;
        top:55px;
        left:0;
        right:0;
        background:#FFF;
        shadow: 0 5px 15px rgba(0,0,0,.25);
      }
      .banner {
        bottom: 0;
        left: 0;
        right:0;
      }
      .icon {
        width:32px;
        height:32px;
      }
    }
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
      profile_menu: false,
    }
  },
  middleware: 'authenticated'
}
</script>