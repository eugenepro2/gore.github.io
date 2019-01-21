<template>
  <section>
    <div class="container">
      <h1>FAST GESCHAFFT.</h1>
      <h2>BEVOR ES LOS GEHT benötigen</h2> 
      <h2>Wir noch deine Daten:</h2>
      <hr>
      <form action="" class="form" @submit.prevent="onSubmit()" ref="form">
        <div class="form__input">
          <label for="">Name</label>
          <input v-model="name" type="text">
        </div>
        <div class="form__input">
          <label for="">Vorname</label>
          <input v-model="vorname" type="text">
        </div>
        <div class="form__input">
          <label for="">E-mail</label>
          <input v-model="email" type="text">
        </div>
        <div class="form__checkbox">
          <div class="form__checkbox__item">
            <input v-model="checkedValues" value="agb" type="checkbox" id="agb">
            <label for="agb"></label>
            <span>Agb</span>
          </div>
          
          <div class="form__checkbox__item">
            <input v-model="checkedValues" value="tnl" type="checkbox" id="tnl">
            <label for="tnl"></label>
            <span>Tnl</span>
          </div>

          <div class="form__checkbox__item">
            <input v-model="checkedValues" value="nl" type="checkbox" id="nl">
            <label for="nl"></label>
            <span>Nl</span>
          </div>
        </div>
        <button>weiter</button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  data: function(){
    return{
      name: '',
      vorname: '',
      email: '',
      checkedValues: []
    }
  },
  methods: {
    onSubmit: function(){
      this.name
      this.vorname
      this.email
      this.checkedValues;
      this.$router.push('/answer/1');
      
    }
  }
}
</script>


<style lang="sass" scoped>
section
  background-color: #d9e506
h1, h2, a
  color: #024731
  font-size: 50px
hr
  width: 710px
  border: 1px solid #024731
  margin: 55px 0
.form
  width: 710px
  position: relative
  &__input
    display: flex
    margin-bottom: 30px
    align-items: center
    label
      font-size: 36px
      width: 170px
      display: block
      font-weight: 300
    input
      flex: 1
      border: 0
      height: 50px
      font-size: 36px
  &__checkbox
    padding-left: 170px
    display: flex
    &__item
      position: relative
      width: 100px
      display: flex
      align-items: center
      span
        display: block
        font-size: 24px
        color: #024731
        font-weight: 300
        margin-left: 10px
      label
        width: 28px
        height: 28px
        cursor: pointer
        position: relative
        background: #fff
        display: flex
        &:after
          content: ""
          width: 13px
          height: 8px
          position: absolute
          top: 6px
          left: 6px
          border: 3px solid #024731
          border-top: none
          border-right: none
          background: transparent
          opacity: 0
          -webkit-transform: rotate(-45deg)
          transform: rotate(-45deg)
      input[type="checkbox"]
        visibility: hidden
        display: none
        &:checked + label:after
          opacity: 1
  button
    width: 160px
    height: 85px
    background: #4472c4
    cursor: pointer
    border: 2px solid #2f528f
    display: flex
    justify-content: center
    align-items: center
    color: #fff
    text-transform: lowercase
    font-family: sans-serif
    font-size: 24px
    position: absolute
    right: -300px
    bottom: 0
</style>


