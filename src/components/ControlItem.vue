<template>
  <div class="wrapper">
    <div>
      <input
        type="checkbox"
        id="value.id"
        @click="clickHandler"
        v-model="value.checked"
      />
      <label for="value.id">
        {{ value.label }}
      </label>
    </div>
    <div>
      <input
        type="number"
        min=0
        :value="count"
        @change="changeCountHandler"
      />
      <input
        type="color"
        :value="color"
        @change="changeColorHandler"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "ControlItem",
  props: {
    listId: {
      type: String,
      required: true
    },
    value: {
      type: Object,
      required: true,
    }
  },
  data() {
    return {
      count: this.value.count,
      color: this.value.color,
    }
  },
  methods: {
    clickHandler() {
      this.$emit('selectItem', { listId: this.listId, itemId: this.value.id });
    },
    changeCountHandler(e) {
      const newCount = e.target.value;
      this.count = newCount;
      this.$emit('changeCount', { listId: this.listId, itemId: this.value.id, count: +this.count })
    },
    changeColorHandler(e) {
      const newColor = e.target.value;
      this.color = newColor;
      this.$emit('changeColor', { listId: this.listId, itemId: this.value.id, color: this.color })
    }
  },
}
</script>

<style scoped>
.wrapper {
  width: 100%;
  display: flex;
}

</style>
