<template>
 <div id="app">

  <!-- <ul v-for="target of targets" :key="target.name"> -->

    <!-- <router-link :to="{ path: target.path }"> -->
      <internet></internet>
      <htmls></htmls>
      <css></css>
      <javascript></javascript>
    <!-- </router-link> -->
    <!--
      <li>
        <div class="target-container">
          <p class="target-name">{{ target.name }}</p>
        </div>
        <ul v-for="target of Internet" :key="target.name">
          <li>
            <div class="target-container2">
              <p class="target-name">{{ target.name }}</p>
            </div>
          </li>
        </ul>
      </li> -->
    <!---->
  <!-- </ul> -->

 </div>
</template>

<script>
import internet from './internet.vue'
import htmls from './htmls.vue'
import javascript from './javascript.vue'
import css from './css.vue'

export default {
  data: function () {
    return {
      // Reference :https://roadmap.sh/frontend
      Internet: [
        { name: 'How dows the internet works?' },
        { name: 'What is HTTP?' },
        { name: 'Browsers and how they works?' },
        { name: 'DNS and how it works?' },
        { name: 'What is Domain Name?' },
        { name: 'What is hosting?' }
      ],
      targets: [
        { name: 'Internet', path: 'internet' },
        { name: 'HTML', path: 'HTML' }
      //   { name: 'CSS', path: 'CSS' },
      //   { name: 'JavaScript', path: 'JavaScript' },
      //   { name: 'VersionControl Systems' },
      //   { name: 'Repo hosting services' },
      //   { name: 'Web Security Knowledge' },
      //   { name: 'Package Manager' },
      //   { name: 'CSS Architecture' },
      //   { name: 'CSS Processeor' },
      //   { name: 'Build Tools' },
      //   { name: 'Pick a Framework' },
      //   { name: 'Modern CSS' },
      //   { name: 'Web Components' },
      //   { name: 'CSS Frameworks' },
      //   { name: 'Testing your Apps' },
      //   { name: 'Type Checkers' },
      //   { name: 'Progressive Web Apps' },
      //   { name: 'Server Side Rendering' },
      //   { name: 'GraphQL' },
      //   { name: 'Staric Site Generators' },
      //   { name: 'Mobile Applications' },
      //   { name: 'Desktop Applicaions' },
      //   { name: 'Web Assembly' }
      ]
    }
  },
  computed: {
    limitCount () {
      return this.targets.slice(0, 4)
    }
  },
  components: {
    internet,
    htmls,
    css,
    javascript
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
  color: black;
}

.target-container {
    background: yellow;
    height: 4vh;
    width: 20vw;
    border: black solid 2px;
}

.target-container2 {
    background: orange;
    height: 4vh;
    width: 20vw;
    border: black solid 2px;
}

p.target-name {
    position: relative;
    bottom: 7px;
    font-family: "Gill Sans", sans-serif;
    font-weight: 600;
}
</style>
