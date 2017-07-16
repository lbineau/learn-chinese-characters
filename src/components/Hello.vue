<template>
  <div class="hello">
    <table class="stripped" v-for="hskLevel in hskRefs">
      <thead>
        <tr>
          <th width="50">id</th>
          <th width="150">Caractère</th>
          <th width="150">Pinyin</th>
          <th>Traduction</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="hskRef in hskLevel['.value']">
          <td v-for="field in hskRef" v-text="field"></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'hello',
  props: {
    hskRefs: Array
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js PWA'
    }
  }
}
</script>

<style scoped>
</style>
