<template>
  <section>
    <div class="container">
      <h1>FRAGE #{{$route.params.id}}/{{questions.length}}</h1>
      <div v-for="question in questions" :key="question.id" v-if="question.id == $route.params.id">
        <h2 v-html="question.title"></h2>      
        <form action="" class="form">
          <div class="form__radio">
            <div class="form__radio__item" v-for="answer in question.answers" :key="answer.id">
              <input @change="onChange($event)" ref="input" :value="question.right" :id="answer.id" name="answer" type="radio">
              <label :for="answer.id"><i>{{answer.id}}</i></label>
              <span>{{answer.title}}</span>
            </div>
          </div>
        </form>
      </div>
    </div>
    <transition name="modal">
      <div class="modal-mask" v-if="show">
        <div class="modal-wrapper">
          <div class="modal-container">


            <div class="modal-body" v-if="right">
              <h2>Richtig</h2>
              <p>Ein blatt papier (80g/m2) ist 0,08mm dick.</p>
              <a href="#" @click="hideModal()">Nächste Frage</a>
            </div>
            <div class="modal-body" v-else>
              <h2>Falsch</h2>
              <p>Ein blatt papier (80g/m2) ist 0,08mm dick.</p>
              <a href="#" @click="hideModal()">Nächste Frage</a>
            </div>

          </div>
        </div>
      </div>
    </transition>
  </section>
</template>

<script>
import Cookies from 'js-cookie';
let questions = [
  {
    id: 1,
    title: 'Lorem ipsum dolor sit<br>amet, consectetuer?',
    right: 1,
    answers: [
      {
        id: 1,
        title: 'Qui duciur sum faccupt atiae. Di diore volut ex ea volorec ulluptatate ma id que conet.1',
      },
      {
        id: 2,
        title: 'Qui duciur sum faccupt atiae. Di diore volut ex ea volorec.1',
      },
      {
        id: 3,
        title: 'Di diore volut ex ea volorec ulluptatate ma id que conet.1',
      }
    ]
  },
  {
    id: 2,
    title: 'Lorem ipsum dolor sit<br>amet, consectetuer2?',
    right: 3,
    answers: [
      {
        id: 1,
        title: 'Qui duciur sum faccupt atiae. Di diore volut ex ea volorec ulluptatate ma id que conet.2',
      },
      {
        id: 2,
        title: 'Qui duciur sum faccupt atiae. Di diore volut ex ea volorec.2',
      },
      {
        id: 3,
        title: 'Di diore volut ex ea volorec ulluptatate ma id que conet.2',
      }
    ]
  }
]
export default {
  data: function(){
    return {
      questions: questions,
      show: false,
      right: false,
    }
  },
  methods: {
    showModal: function(e){
      this.show = true;
      this.right = e;
      console.log(Cookies.get());
      
    },
    hideModal: function(){
      this.show = false;
      this.next = parseInt(this.$route.params.id) + 1;
      this.next = this.next.toString();
      
      
      if (this.questions.length <= +this.$route.params.id) {
        this.$router.push('/end')  
      } else{
        setTimeout(() => {
        this.$router.push(this.next)  
      }, 500);
      }
      
    },
    onChange: function(e){
      if (e.target.id == e.target.value) {
        this.showModal(true);
        Cookies.set(`answer-${this.$route.params.id}`, true);
      } else{
        this.showModal(false);
        Cookies.set(`answer-${this.$route.params.id}`, false);
      }
    }
  }
}
</script>


<style lang="sass" scoped>
h1, h2, a
  color: #d9e506
.form
  padding-top: 90px
  &__radio
    display: flex
    justify-content: space-between
    &__item
      display: flex
      width: 33%
      input
        display: none
        &:checked + label
          background: #d9e506
          &:before
            border-color: transparent #d9e506 transparent transparent
          &:after
            border-color: transparent transparent transparent #dfe182
      label
        width: 70px
        height: 70px
        display: flex
        position: relative
        justify-content: center
        align-items: center
        background: #fff
        border: 3px solid #d9e506
        margin-right: 20px
        cursor: pointer
        i
          color: #024731
          font-size: 48px
          position: relative
          z-index: 1
          font-weight: 300
          font-style: normal
        &:before
          content: ''
          width: 0
          height: 0
          border-style: solid
          border-width: 0 70px 70px 0
          border-color: transparent #fff transparent transparent
          position: absolute
        &:after
          content: ''
          width: 0
          height: 0
          border-style: solid
          border-width: 70px 0 0 70px
          border-color: transparent transparent transparent #e5e5e5
          position: absolute
      span
        color: #fff
        font-weight: 300
        width: 60%
        font-size: 22px





</style>


