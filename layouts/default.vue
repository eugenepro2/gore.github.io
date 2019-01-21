<template>
  <div>
    <nuxt/>
    <div>
      <app-logo/>
    </div>
  </div>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  }
}
</script>


<style lang="sass">
body
  background: #024731
.container
  width: 100%
  padding: 0 100px
section
  height: 100vh
  display: flex
  align-items: center
  transition: all .5s
h1, h2, a
  font-size: 80px
  font-weight: 300
  margin: 0
h2, a
  font-weight: normal
  text-decoration: none
.page-enter-active
  transition: all .5s
.page-leave
  transform: translateY(0%)
.page-leave-to
  transform: translateY(-100%)
.page-enter
  transform: translateY(100%)
.page-enter-to
  transform: translateY(0%)
</style>

