
<template>
  <div id="internet" class="component-box first" :class="{ '_state-open': isOpen }">
    <ul v-for="target of targets" :key="target.name" >
      <!--<router-link :to="{ path: target.path }">-->
      <li>
        <div class="checkbox-counter">
          {{selectedTargets.length}}
        </div>
        <div class="target-container" v-on:click="accordionToggle" :class="{ '_state-open': isOpen }">
          <p class="target-page-name">{{ target.name }}</p>
        </div>
        <ul v-for="target of titles" :key="target.name" :class="{ '_state-open': isOpen }">
          <li>
            <div class="target-container2" v-if="isOpen">
              <input type="checkbox" class="checkbox-internet" v-model="selectedTargets" :value="target.name">
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
      titles: [
        { name: 'How dows the internet works?' },
        { name: 'What is HTTP?' },
        { name: 'Browsers and how they works?' },
        { name: 'DNS and how it works?' },
        { name: 'What is Domain Name?' },
        { name: 'What is hosting?' }
      ],
      targets: [
        { name: 'Internet', path: 'internet' }
      ],
      selectedTargets: [],
      isOpen: true
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

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
  height: 4vh;
  padding-bottom: 1vh;
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
.target-container._state-open {
  margin-left: 10px;
  margin-bottom: 8px;
}

.target-container2 {
  background: orange;
  height: 4vh;
  width: 20vw;
  border: black solid 2px;
}

p.target-name {
  position: relative;
  bottom: 30px;
  font-family: 'Gill Sans', sans-serif;
  font-weight: 600;
  padding-bottom: 100px;
}

p.target-page-name {
  position: relative;
  bottom: 8px;
  font-family: 'Gill Sans', sans-serif;
  font-weight: 600;
}

div#internet {
    background: red;
    width: 25vw;
    margin: auto;
    height: 10vh;
}

input.checkbox-internet {
    position: relative;
    right: 11.2vw;
    top: 5px;
}

.checkbox-counter {
    position: relative;
    left: 18vw;
    top: 15px;
    background: cornflowerblue;
    text-align: center;
    width: 25px;
    color: white;
    border-radius: 14px;
}

.component-box {
  height: 10vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.component-box._state-open.first {
  height: 34vh!important;
  min-width: 20vw;
  max-height: 40vh;
  background: blanchedalmond!important;
}
</style>
