<template>
 <div id="htmls" class="component-box first" :class="{ '_state-open': isOpen }">
  <ul v-for="target of targets" :key="target.name">
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
  </ul>
 </div>
</template>

<script>
export default {
  data: function () {
    return {
      // Reference :https://roadmap.sh/frontend
      titles: [
        { name: 'Learn the basics' },
        { name: 'Writing Semantic HTML' },
        { name: 'Forms and Validations' },
        { name: 'Conventions and Beat Practice' },
        { name: 'Accesibility' },
        { name: 'SEO Basics' }
      ],
      targets: [
        { name: 'HTML', path: 'htmls' }
      ],
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

div#htmls {
    background: blue; /*debug*/
}
</style>
