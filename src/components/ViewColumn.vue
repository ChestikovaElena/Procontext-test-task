<template>
  <div class="column-wrapper">
    <ul v-if="lists && lists.length" class="list">
      <li
        v-for="list in lists"
        :key="list.id"
      >
        <ViewItem :list="list"/>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
import ViewItem from "./ViewItem.vue";

export default {
  name: "ViewColumn",
  components: {
    ViewItem
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

.list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

</style>
