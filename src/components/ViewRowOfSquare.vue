<template>
  <div class="row-wrapper">
    <ul class="row-list">
      <li
        v-for="index in count"
        :key="`${itemId}-${index}`"
      >
        <ViewSquare
          :color="color"
          :itemId="itemId"
          :listId="listId"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import ViewSquare from "./ViewSquare.vue";

export default {
  name: "ViewRowOfSquare",
  props: {
    count: {
      type: Number,
      required: true
    },
    color: {
      type: String,
      required: true
    },
    itemId: {
      type: String,
      required: true
    },
    listId: {
      type: String,
      required: true
    }
  },
  components: {
    ViewSquare
  },
}
</script>

<style scoped>
.row-wrapper {
  width: 100%;
}

.row-list {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}

</style>
