<template>
  <div class="item-wrapper">
    <h2 class="item-title">{{ list.label }}</h2>
    <ul v-if="getRenderedItems(list.id) && getRenderedItems(list.id).length" class="item-list">
      <li
        v-for="item in getRenderedItems(list.id)"
        :key="item.id"
        class="item"
      >
        <ViewRowOfSquare
          :count="item.count"
          :color="item.color"
          :itemId="item.id"
          :listId="list.id"
        />
      </li>
    </ul>
    
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ViewRowOfSquare from "./ViewRowOfSquare.vue";

export default {
  name: "ViewItem",
  props: {
    list: {
      type: Object,
      required: true
    }
  },
  components: {
    ViewRowOfSquare
  },
  computed: {
    ...mapGetters('data',['getRenderedItems']),
  },
}
</script>

<style scoped>
.item-wrapper {
  border: 1px solid #000;
  padding: 10px;
  text-align: left;
}

.item-title {
  font-size: 18px;
}

.item-list {
  width: 100%;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

</style>
