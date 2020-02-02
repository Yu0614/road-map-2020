<template>

 <div id="app">
   <div class="parent-subject">
    <p class="parent-name">Internet</p>
   </div>
  <ul v-for="target of targets" :key="target.name">
    <a class="target" href="#">
      <li>
        <div class="target-container" v-on:click="is_active01=!is_active01" v-bind:class='{active:is_active01}'>
          <p class="target-name">{{ target.name }}</p>
        </div>
      </li>
    </a>
  </ul>
 </div>
</template>

<script>
export default {
  data: function () {
    return {
      // Reference :https://roadmap.sh/frontend
      targets: [
        { name: 'How dows the internet works?' },
        { name: 'What is HTTP?' },
        { name: 'Browsers and how they works?' },
        { name: 'DNS and how it works?' },
        { name: 'What is Domain Name?' },
        { name: 'What is hosting?' }
      ],
      targets2: [
        { name: 'Internet', path: 'internet' },
        { name: 'HTML', path: 'HTML' },
        { name: 'CSS', path: 'CSS' },
        { name: 'JavaScript', path: 'JavaScript' },
        { name: 'VersionControl Systems' },
        { name: 'Repo hosting services' },
        { name: 'Web Security Knowledge' },
        { name: 'Package Manager' },
        { name: 'CSS Architecture' },
        { name: 'CSS Processeor' },
        { name: 'Build Tools' },
        { name: 'Pick a Framework' },
        { name: 'Modern CSS' },
        { name: 'Web Components' },
        { name: 'CSS Frameworks' },
        { name: 'Testing your Apps' },
        { name: 'Type Checkers' },
        { name: 'Progressive Web Apps' },
        { name: 'Server Side Rendering' },
        { name: 'GraphQL' },
        { name: 'Staric Site Generators' },
        { name: 'Mobile Applications' },
        { name: 'Desktop Applicaions' },
        { name: 'Web Assembly' }
      ],
      is_active01: false
    }
  },
  methods: {
    colorize: function () {
      console.log('herer')
    }
  },
  status: {
    is_active01: false,
    is_active02: false
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
    background: palegoldenrod;
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

.parent-subject {
    background: yellow;
    height: 4vh;
    width: 20vw;
    border: black solid 2px;
}

p.parent-name {
    position: relative;
    bottom: 7px;
    font-family: "Gill Sans", sans-serif;
    font-weight: 600;
}
</style>
