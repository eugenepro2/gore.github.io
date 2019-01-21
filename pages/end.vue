<template>
  <div>
    <section v-if="right" style="background-color: #d9e506; color: #024731; ">
      <div class="container">
        <h1>GLÜCKWUNSCH</h1>
        <h2>DU HAST ES GESCHAFFT!</h2> 
        <p>DU WIRST PER MAIL BENACHRICHTIGT, WENN DU GEWONNEN HAST</p>
      </div>
    </section>
    <section v-else style="background-color: #024731; color: #fff; ">
      <div class="container">
        <h1>SCHADE</h1>
        <h2>DU HAST VERLOREN.</h2> 
        <nuxt-link to="/answer/1">Versuche es noch einmal!</nuxt-link>
        <nuxt-link to="">EIN ANDERES MAL</nuxt-link>
      </div>
    </section>
  </div>
</template>

<script>
import Cookies from 'js-cookie';

export default {
  data: function(){
    return {
      right: true,
    }
  },
  created: function () {
    let a = Cookies.get();
    let right = this.right;
    
    
    for (var key in a) {
       if (a[key] == 'false') {
         this.right = false;
       }
    }
  }
}
</script>


<style lang="sass" scoped>
h1, h2, a, p
  color: inherit
p
  font-size: 38px
  font-weight: 300
a
  padding: 10px
  background: #fff
  border: 3px solid #d9e506
  font-size: 35px
  color: #024731
  margin-right: 20px
  display: inline-block
  margin-top: 40px
  font-weight: 300
  width: 500px
  text-align: center
</style>


