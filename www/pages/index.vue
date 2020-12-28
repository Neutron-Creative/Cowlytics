<template>
  <div>
    <section class="flex flex-col items-center justify-center w-full p-8 lg:py-20 text-center">
      <div class="flex flex-col w-full max-w-7xl items-center justify-center">
        <nav class="flex flex-row items-center justify-start w-full max-w-7xl mb-24">
          <img src="/Icon Bare@2x.png" class="w-8 h-auto mr-3">
          <span class="text-2xl font-bold text-gray-900">Cowlytics</span>
        </nav>
        <!--<h1 class="text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 flex flex-row items-center justify-center flex-wrap">
          Forecast my 
          <span class="font-extrabold mx-4 text-indigo-600 cursor-pointer">subscribers</span>
          in
          <span class="font-extrabold ml-4 text-indigo-600 cursor-pointer">1 year</span>
          </h1>-->
        <h1 class="text-4xl lg:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6" style="line-height:1.2;">Realtime analytics and forecasts <br class="hidden lg:block">for your Stripe subscription business</h1>
        <!--<p class="max-w-4xl text-xl lg:text-2xl text-gray-500 mb-6 italic">Doesn't that sound nice?</p>-->
        <p class="max-w-5xl text-xl lg:text-2xl text-gray-500 mb-6" style="line-height:150%;">Meet Cowlytics, the open-source analytics & forecasting tool that provides automated insights alongside your real-time formatted data from Stripe to help you make intelligent decisions with predictable results for your subscription business.</p>
        <div class="pb-8 lg:pb-0 flex flex-col lg:flex-row items-center justify-center mb-12 space-y-4 lg:space-y-0 lg:space-x-4" v-if="launched">
          <a class="lg:w-auto w-full shadow px-8 py-5 font-semibold bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 active:ring-4 ring-indigo-600 ring-opacity-50" href="https://app.cowlytics.co/users/create-account">Start your 14 day free trial</a>
          <a class="lg:w-auto w-full shadow px-8 py-5 font-semibold bg-gray-100 text-indigo-600 rounded-lg hover:bg-gray-200 active:ring-4 ring-indigo-600 ring-opacity-50" href="https://app.cowlytics.co/users/login">Sign in</a>
        </div>
        <div class="pb-8 lg:pb-0 flex flex-col lg:flex-row items-center justify-center mb-12 space-y-4 lg:space-y-0 lg:space-x-4" v-if="!launched">
          <a class="lg:w-auto w-full shadow px-8 py-5 font-semibold bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 active:ring-4 ring-indigo-600 ring-opacity-50" href="https://www.producthunt.com/upcoming/cowlytics">Join our waitlist on ProductHunt</a>
        </div>
        <img class="rounded overflow-hidden shadow-lg" src="/Application Screenshot.png"/>
      </div>
    </section>
    <section class="flex flex-col items-center justify-center w-screen p-8  text-white lg:py-20 text-center bg-gray-800 overlay-container">
      <div class="flex flex-col w-full max-w-6xl items-center justify-center">
        <h3 class="text-gray-400 uppercase tracking-wide font-semibold mb-8">Monitor your SaaS performance from</h3>
        <div class="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-12">
          <!--<img title="Coming soon" class="w-24 h-auto opacity-50" style="filter:grayscale(1);" src="/chargebee.svg"/>-->
          <img title="Stripe integration now available" class="w-24 h-auto" src="/stripe.svg"/>
          <!--<img title="Coming soon" class="w-24 h-auto opacity-50" style="filter:grayscale(1);" src="/recurly.svg"/>-->
        </div>
      </div>
    </section>
    <!--<section class="bg-gray-700 flex flex-col lg:flex-row items-center justify-center w-screen">
        <div class="flex flex-col lg:flex-row w-full max-w-6xl items-center justify-center">
          <div class="flex flex-col w-full lg:w-1/2 p-16 border border-gray-600 border-l-0 border-t-0 border-b-0">
            <img class="w-24 mb-4 opacity-50" style="filter:grayscale(1) invert(1) brightness(100);" src="https://summit-cfo.s3.amazonaws.com/static/images/vendors/chartmogul_logo.svg"/>
            <div class="relative text-white font-medium leading-7 mb-4">
              I am in love with Cowlytics. I can't tell you how much it's changed my life. I'm fucking mooing around the house for crying out loud. 
            </div>
            <div class="flex flex-row">
              <img class="rounded-full  h-14 mr-4 border-white border-2" src="https://scontent-iad3-1.cdninstagram.com/v/t51.2885-19/s150x150/106238897_725586734946472_5048956344165679204_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_ohc=hIC4pMKn26EAX---DUZ&tp=1&oh=e970e1aa8782ae9d4affd3d199c9adcb&oe=600EB36F"/>
              <div class="flex flex-col items-start justify-center">
                <span class="font-semibold text-white mb-1">Jane Doe</span>
                <span class="text-indigo-100 font-medium">CEO, Company Inc</span>
              </div>
            </div>
          </div>
          <div class="flex flex-col w-full lg:w-1/2 p-16">
            <img class="w-24 mb-4 opacity-50" style="filter:grayscale(1) invert(1) brightness(100);" src="https://summit-cfo.s3.amazonaws.com/static/images/vendors/chartmogul_logo.svg"/>
            <div class="relative text-white font-medium leading-7 mb-4">
              I am in love with Cowlytics. I can't tell you how much it's changed my life. I'm fucking mooing around the house for crying out loud. 
            </div>
            <div class="flex flex-row">
              <img class="rounded-full w-14 h-14 mr-4 border-white border-2" src="https://scontent-iad3-1.cdninstagram.com/v/t51.2885-19/s150x150/106238897_725586734946472_5048956344165679204_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_ohc=hIC4pMKn26EAX---DUZ&tp=1&oh=e970e1aa8782ae9d4affd3d199c9adcb&oe=600EB36F"/>
              <div class="flex flex-col items-start justify-center">
                <span class="font-semibold text-white mb-1">Jane Doe</span>
                <span class="text-indigo-100 font-medium">CEO, Company Inc</span>
              </div>
            </div>
          </div>
        </div>
    </section>-->
    <section class="flex flex-col items-center justify-center w-full p-8 py-16 lg:py-32 text-center">
      <div class="flex flex-col w-full max-w-6xl items-center justify-center">
        <h2 class="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6">Simple fixed pricing</h2>
        <p class="max-w-4xl text-xl text-gray-500 mb-12">Import your Stripe account, invite your team, and get going in seconds.</p>
        <div class="flex flex-col lg:flex-row w-full rounded-lg shadow-lg overflow-hidden mb-4 lg:mb-0">
          <div class="flex flex-col w-full lg:w-3/4 p-12 text-left">
            <h3 class="text-2xl font-bold mb-2 text-gray-900 w-full">Everything included for one fixed price.</h3>
            <p class="text-lg leading-relaxed text-gray-500 mb-6">At Cowlytics, we belive pricing should be simple and scale friendly. That's why Cloudlytics Cloud is an unmetered fixed price no matter your revenue or team size, and Cloudlytics self-hosted is open-source & forever free.</p>
            <div class="flex flex-row items-center justify-center w-full mb-6">
              <h4 class="uppercase tracking-wide text-indigo-600 font-semibold mr-2">Everything included</h4>
              <div style="height:2px;" class="hidden lg:flex flex-grow bg-indigo-600 opacity-50"></div>
            </div>
            <div class="flex flex-col lg:flex-row items-center justify-start w-full">
              <div class="flex flex-row items-center justify-start w-full lg:w-1/3 mb-6 font-medium text-gray-500">
                <img src="/Checkmark Filled Purple.svg" class="w-4 opacity-50 mr-2"/>
               Customizable dashboard
              </div>
              <div class="flex flex-row items-center justify-start w-full lg:w-1/3 mb-6 font-medium text-gray-500">
                <img src="/Checkmark Filled Purple.svg" class="w-4 opacity-50 mr-2"/>
                Subscription metrics
              </div>
              <div class="flex flex-row items-center justify-start w-full lg:w-1/3 mb-6 font-medium text-gray-500">
                <img src="/Checkmark Filled Purple.svg" class="w-4 opacity-50 mr-2"/>
                Financial forecasts
              </div>
            </div>
            <div class="flex flex-col lg:flex-row items-center justify-start w-full">
              <div class="flex flex-row items-center justify-start w-full lg:w-1/3 mb-6 font-medium text-gray-500">
                <img src="/Checkmark Filled Purple.svg" class="w-4 opacity-50 mr-2"/>
                Unlimited revenue
              </div>
              <div class="flex flex-row items-center justify-start w-full lg:w-1/3 mb-6 font-medium text-gray-500">
                <img src="/Checkmark Filled Purple.svg" class="w-4 opacity-50 mr-2"/>
                Unlimited team members
              </div>
              <div class="flex flex-row items-center justify-start w-full lg:w-1/3 mb-6 font-medium text-gray-500">
                <img src="/Checkmark Filled Purple.svg" class="w-4 opacity-50 mr-2"/>
                Unlimited reports
              </div>
            </div>
          </div>
          <div class="flex flex-col flex-grow bg-gray-100 w-full lg:w-1/4 p-8 items-center justify-center">
            <span class="text-gray-500 font-medium mb-3">Starting at</span>
            <div class="flex flex-row items-center justify-center mb-3">
              <span class="font-extrabold text-5xl text-gray-900">$30</span>
              <span class="text-gray-500 font-medium ml-2">USD</span>
            </div>
            <span class="text-gray-500 font-medium text-sm mb-6">per month, paid annually</span>
            <span class="text-xs text-gray-500 mb-6">$35/Month if paid monthly</span>
            <a v-if="launched" class="text-sm font-semibold w-full text-white bg-indigo-600 hover:bg-indigo-500 text-center py-4 px-6 rounded-lg" href="https://app.cowlytics.co/users/create-account">Start your free trial</a>
            <a v-if="!launched" class="text-sm font-semibold w-full text-white bg-indigo-600 hover:bg-indigo-500 text-center py-4 px-6 rounded-lg" href="https://www.producthunt.com/upcoming/cowlytics">Join our waitlist</a>
          </div>
        </div>
        <div class="border border-gray-200 bg-white shadow-xl text-lg font-medium text-gray-600 z-10 flex flex-col lg:flex-row items-center justify-center p-4 rounded-lg mb-12" style="margin-top:-30px;">
          <span class="text-indigo-600 font-semibold mb-1 lg:mb-0 lg:mr-2">Better for small business:</span>
          Cowlytics is free under $500 MRR & 50% off until you reach $1000 MRR!
        </div>
        <a href="https://github.com/Neutron-Creative/Cowlytics" class="text-sm text-gray-500 hover:underline mb-20">Looking for the free, self-hosted version - Cowlytics Core?</a>
        <div class="flex flex-col w-full text-left">
          <h2 class="text-3xl font-extrabold text-gray-900 py-6 border border-gray-200 border-t-0 border-l-0 border-r-0 w-full text-left">Frequently asked questions</h2>
          <div v-for="q in faq" class="flex flex-col lg:flex-row border border-gray-200 border-l-0 border-b-0 border-r-0">
            <div class="flex flex-col w-full lg:w-1/3 p-8 pb-2 lg:pb-8 font-medium text-gray-800">
              {{ q.question }}
            </div>
            <p v-html="q.answer" class="w-full lg:w-2/3 p-8 pt-2 lg:pt-8 text-gray-500 leading-relaxed"></p>
          </div>
        </div>
      </div>
    </section>
    <section class="flex flex-col items-center justify-center w-full p-8 py-12 lg:py-24 text-center bg-indigo-100">
      <div class="flex flex-col lg:flex-row w-full max-w-6xl items-center justify-center">
        <div class="flex flex-col flex-grow lg:text-left text-center">
          <h2 class="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 lg:mb-2 lg:mb-6">Ready to get started?</h2>
          <p class="lg:text-lg text-gray-500 mb-6 lg:mb-0">Import your Stripe account, invite your team, and get going in seconds.</p>
        </div>
        <a v-if="launched" class="text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 text-center py-4 px-6 rounded-lg" href="https://app.cowlytics.co/users/create-account">Start your free trial</a>
        <a v-if="!launched" class="text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 text-center py-4 px-6 rounded-lg" href="https://www.producthunt.com/upcoming/cowlytics">Join our waitlist</a>
      </div>
    </section>
  </div>
</template>

<style scoped>
  .a:hover {
    text-decoration: underline;
  }
  .overlay-container {
    margin-top:-800px;
    padding-top: 790px;
  }

  @media(max-width:1000px) {
    .overlay-container {
      margin-top:-360px;
      padding-top: 400px;
    }
  }
</style>

<script>
export default {
  data: () => {
    return {
      launched: false,
      faq: [
        {
          question: 'How does Cowlytics work?',
          answer: 'Cowlytics monitors & learns from your businesses Stripe data in order to provided automated insights and make intelligent suggestions for your business targeting specific SaaS metrics. By further understanding your subscription specific metrics and using what\'s already worked to further improve them, you can quickly implement, monitor, and adjust to find increased success with Cowlytics.'
        },
        {
          question: 'That sounds challenging - do I have to be experienced to use Cowlytics?',
          answer: 'Absolutely not! Cowlytics was built to be easy to learn from the ground up. There\'s plenty of advanced settings & extensibility for power users looking to go further - but Cowlytics by default assumes you\'re starting from scratch.'
        },
        {
          question: 'How does pricing work?',
          answer: 'Cowlytics is free for all businesses with under $500/mo in MRR (monthly recurring revenue), and 50% off for those under $1,000 MRR. After which, Cowlytics costs a flat rate of $35/mo ($30/mo paid annually). Discounts are automatically applied based on your Stripe data.'
        },
        {
          question: 'Can I invite my team?',
          answer: 'Yes! You can add additional team members for free at any time under settings.'
        },
        {
          question: 'Do I have to install or host it?',
          answer: 'Not with Cowlytics Cloud! <a style="font-weight:500;color:#5353EC;" href="https://cowlytics.co">Cowlytics Cloud</a> is our managed & hosted offering of <a style="font-weight:500;color:#5353EC;" href="https://github.com/Neutron-Creative/Cowlytics">Cowlytics Core</a>, with managed hosting, quick & reliable support, and 60 second onboarding.'
        },
        {
          question: 'How are you different from other Stripe metric/forecasting providers?',
          answer: 'Cowlytics was built from the ground up for open-source. Licensed with GPL, you can vet our source code personally to verify our application is safe & secure, you can modify & self-host the application if needed, and help build & shape the future of Cowlytics together with our wonderful open-source community.<br><br><a style="text-decoration:underline;font-weight:500;color:#5353EC;" href="https://twitter.com/cmdkhalilov/status/1341462579680587778">Plus, we\'ll never do awful things like make you video call Brian to cancel.</a>',
        },
        {
          question: 'What if I need help/support?',
          answer: 'Our team is avaiilable 24/7 on our <a href="https://discord.com/invite/3pBM4Px" style="font-weight:500;color:#5353EC;">community Discord</a>, as well as from 9AM-5PM Monday-Friday via Email, Phone, and Github. No matter how big or small your issue, we\'re always happy to help!'
        },
        {
          question: 'Who made Cowlytics?',
          answer: 'Cowlytics is a product of Neutron Creative Inc. - a small team of coding cowboys on a mission to make the world open-source. Based in Raleigh, North Carolina - we enjoy building & sharing software consumers love with our passionate open-source community.<br><br><a href="https://neutroncreative.com" style="font-weight:500;color:#5353EC;">Learn more about us at neutroncreative.com</a>'
        }
      ]
    }
  }
}
</script>