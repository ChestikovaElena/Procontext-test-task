<template>
  <div class="item-wrapper">
    <h2 class="item-title">{{ list.label }}</h2>
    <ul v-if="list.items && list.items.length" class="item-list">
      <li
        v-for="item in list.items"
        :key="item.id"
        class="item"
      >
        <div v-if="item.checked && item.count > 0">
          <ViewRowOfSquare
            :count="item.count"
            :color="item.color"
            :itemId="item.id"
            :listId="list.id"
          />
        </div>
      </li>
    </ul>
    
  </div>
</template>

<script>
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
  margin-bottom: 10px;
}

.item-list {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

</style>
