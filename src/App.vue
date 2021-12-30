<template>
  <div id="app">
    <div class="wrapper">
      <div class="container">
        <ControlColumn />
        <ViewColumn />
      </div>
    </div>
  </div>
</template>

<script>
import ControlColumn from "./components/ControlColumn.vue";
import ViewColumn from "./components/ViewColumn.vue";

export default {
  name: 'App',
  components: {
    ControlColumn,
    ViewColumn
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

html {
  box-sizing: border-box;
  font-size: 16px;
}

*,
*::after,
*::before {
  box-sizing: inherit;
}

body {
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

ul {
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
}

h2 {
  margin: 0;
  font-weight: normal;
}

p {
  padding: 0;
  margin: 0;
}

.check {
  padding-left: 30px;
}

.check-input {
  position: absolute;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

.check-box {
  position: absolute;
  width: 20px;
  height: 20px;
  margin-left: -30px;
  border: 1px solid #000;
  background-image: none;
}

.check-input:checked + .check-box {
  background-image: url("./assets/Check.svg");
  background-position: center center;
}

</style>

<style scoped>
.wrapper {
  margin: 20px 50px;
  padding: 5px 10px;
  border: 1px solid #000;
}

.container {
  padding: 20px;
  display: flex;
  justify-content: space-between;
  border: 1px solid #000;
}

</style>
