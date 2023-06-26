<template>
  <div>
    <common-navbar />
    <Nuxt />
  </div>
</template>

<script>
import CommonNavbar from '~/components/CommonNavbar'
import SiteFooter from '../components/Footer/SiteFooter.vue'

export default {
  components: { CommonNavbar, SiteFooter }
}
</script>
