<template>
  <div id="app">
    【Attention】<br>
    This site supports developers filling out their own skills according to 2020 developers roadmap <br>
    <a href="https://roadmap.sh/frontend" target="blank" rel="norefferer noopener" >https://roadmap.sh/frontend</a><br><br>

    【links】<br>
    <router-link to="/">top</router-link><br>
    <router-link to="/internet">internet</router-link><br>
    <router-link to="/htmls">htmls</router-link><br>
    <router-link to="/css">css</router-link><br>
    <router-link to="/javascript">javascript</router-link><br>
    <hr>
    <router-view/>

  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
