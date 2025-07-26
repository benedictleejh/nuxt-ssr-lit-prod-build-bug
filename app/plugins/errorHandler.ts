export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hooks.hook('vue:error', (error, instance, info) =>{
    console.error('Vue Error', error, instance, info)
  })
})
