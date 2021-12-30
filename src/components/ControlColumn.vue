<template>
  <div class="column-wrapper">
    <ul v-if="lists && lists.length" class="column-list">
      <li
        v-for="list in lists"
        :key="list.id"
      >
        <Dropdown :list="list"/>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Dropdown from "./Dropdown";

export default {
  name: "ControlColumn",
  components: {
    Dropdown
  },
  computed: {
    ...mapState('data', ['lists']),
  }
}
</script>

<style scoped>
.column-wrapper {
  width: 40%;
  border: 1px solid #000;
  padding: 20px;
}

.column-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

</style>
