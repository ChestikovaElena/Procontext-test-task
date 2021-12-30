<template>
  <div
    class="square"
    :style="{ 'background-color': color }"
    @click="squareClickHandler"
  >
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "ViewSquare",
  props: {
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
  methods: {
    ...mapMutations(
      "data",
      ["decreaseCountOfItem"]
    ),
    squareClickHandler() {
      const payload = {
        listId: this.listId,
        itemId: this.itemId,
      }
      console.log(payload);
      this.decreaseCountOfItem(payload);
    }
  }
}
</script>

<style scoped>
.square {
  width: 20px;
  height: 20px;
}
</style>
