<template>
  <div class="wrapper">
    <ul v-if="lists && lists.length">
      <li
        v-for="list in lists"
        :key="list.id"
      >
        <Select :list="list"/>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Select from "./Select";

export default {
  name: "ControlColumn",
  components: {
    Select
  },
  computed: {
    ...mapState('data', ['lists']),
  }
}
</script>

<style scoped>
.wrapper {
  width: 40%;
}
</style>
