<template>
  <div id="app">
    <ul v-for="target of targets" :key="target.name">
      <!--<router-link :to="{ path: target.path }">-->
      <li>
        <div class="target-container" v-on:click="accordionToggle">
          <p class="target-name">{{ target.name }}</p>
        </div>
        <ul v-for="target of titles" :key="target.name" :class="{ '_state-open': isOpen }" v-on:click="accordionToggle">
          <li>
            <div class="target-container2" v-if="isOpen">
              <p class="target-name">{{ target.name }}</p>
            </div>
          </li>
        </ul>
      </li>
      <!--<</router-link>-->
    </ul>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      // Reference :https://roadmap.sh/frontend
      titles: [{ name: 'npm' }, { name: 'yarn' }],
      targets: [{ name: 'Build Tools', path: 'buildTools' }],
      isOpen: false
    }
  },
  computed: {
    limitCount () {
      return this.targets.slice(0, 4)
    }
  },
  methods: {
    accordionToggle: function () {
      this.isOpen = !this.isOpen
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
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
