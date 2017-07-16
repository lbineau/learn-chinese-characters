<template>
  <div class="grid-x">
    <div class="cell" v-if="currentRef">
      <div class="chinese">
        <h1 class="text-center" v-text="currentRef[1]"></h1>
        <form @submit.prevent="validate">
          <div class="input-group">
            <input v-model="userValue" name="userValue" ref="input" class="input-group-field large" type="text" :readonly="success">
            <div class="input-group-button">
              <input type="submit" class="button large" value="👍" :readonly="success">
            </div>
          </div>
          <p v-show="errors.has('email')"><span class="help is-danger">{{ errors.first('email') }}</span></p>
          <p>{{ currentIdx + 1 }} / {{ refs.length }}</p>
        </form>

        <transition enter-active-class="animated rubberBand" leave-active-class="animated fadeOut">
          <div class="text-center" v-show="success">
            <div class="chinese__pinying">{{ pinying }}</div>
            <div class="chinese__translation">{{ translation }}</div>
          </div>
        </transition>
      </div>

      <transition enter-active-class="animated fadeInUp" leave-active-class="animated fadeOut">
        <div v-show="success" class="text-center next-hint">Press enter to continue</div>
      </transition>
    </div>
  </div>
</template>

<script>
import db from '../database'
let hskRefs = db.ref('references')

export default {
  name: 'training',
  firebase () {
    return {
      refs: hskRefs.child(this.$route.params.id)
    }
  },
  data: () => ({
    currentIdx: 0,
    userValue: '',
    success: false
  }),
  computed: {
    currentRef () {
      return this.refs && this.refs[this.currentIdx] ? this.refs[this.currentIdx]['.value'] : []
    },
    characters () {
      return this.currentRef[1]
    },
    pinying () {
      return this.currentRef[2]
    },
    translation () {
      return this.currentRef[3]
    }
  },
  methods: {
    validate () {
      if (this.success) {
        this.nextRef()
      } else {
        this.$validator.validate('userValue', { value: this.userValue, ref: this.currentRef }).then(result => {
          if (result) this.success = true
        })
      }
    },
    nextRef () {
      this.currentIdx++
      this.success = false
      this.userValue = ''
    }
  },
  created () {
    this.$validator.attach('userValue', 'required|pinyin')
    console.log(this.$validator)
  }
}
</script>
<style scoped>
  .next-hint.v-enter-to {
    animation-delay: 0.8s;
  }
</style>
