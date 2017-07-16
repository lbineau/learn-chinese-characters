<template>
  <div id="app">
    <header>
      <div class="top-bar">
        <div class="top-bar-left">
          <ul class="dropdown menu" data-dropdown-menu>
            <li class="menu-text">HSK</li>
            <li>
              <a href="#">List</a>
              <ul class="menu vertical">
                <li><router-link :to="{ name: 'list', params: { id: 0 } }">HSK 1</router-link></li>
                <li><router-link :to="{ name: 'list', params: { id: 1 } }">HSK 2</router-link></li>
                <li><router-link :to="{ name: 'list', params: { id: 2 } }">HSK 3</router-link></li>
              </ul>
            </li>
            <li>
              <a href="#">Training HSK</a>
              <ul class="menu vertical">
                <li><router-link :to="{ name: 'training', params: { id: 0 } }">HSK 1</router-link></li>
                <li><router-link :to="{ name: 'training', params: { id: 1 } }">HSK 2</router-link></li>
                <li><router-link :to="{ name: 'training', params: { id: 2 } }">HSK 3</router-link></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </header>
    <main>
      <div class="grid-container">
        <router-view :key="$route.fullPath"></router-view>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  margin-top: 40px;
}
</style>
