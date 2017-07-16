<template>
  <div class="grid-x">
    <div class="cell">
      <table class="stripped" v-if="refs">
        <thead>
          <tr>
            <th width="50">id</th>
            <th width="150">Caractère</th>
            <th width="150">Pinyin</th>
            <th>Traduction</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="ref in refs">
            <td v-for="field in ref['.value']" v-text="field"></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import db from '../database'
let hskRefs = db.ref('references')

export default {
  name: 'list',
  firebase () {
    return {
      refs: hskRefs.child(this.$route.params.id)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}
</style>
