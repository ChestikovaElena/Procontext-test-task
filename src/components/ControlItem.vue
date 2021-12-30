<template>
  <div class="item-wrapper">
    <label class="check">
      <input
        type="checkbox"
        id="value.id"
        @click="clickHandler"
        v-model="value.checked"
        class="check-input"
      />
      <span class="check-box"></span>
      {{ value.label }}
    </label>
    <div class="item-inputs">
      <input
        type="number"
        min=0
        :value="value.count"
        @change="changeCountHandler"
        class="input-number"
      />
      <input
        type="color"
        :value="value.color"
        @change="changeColorHandler"
        class="input-color"
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
  methods: {
    clickHandler() {
      this.$emit('selectItem', { listId: this.listId, itemId: this.value.id });
    },
    changeCountHandler(e) {
      const newCount = e.target.value;
      
      this.$emit('changeCount', { listId: this.listId, itemId: this.value.id, count: +newCount })
    },
    changeColorHandler(e) {
      const newColor = e.target.value;
      
      this.$emit('changeColor', { listId: this.listId, itemId: this.value.id, color: newColor })
    }
  },
}
</script>

<style scoped>
.item-wrapper {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 30%;
}

.item-inputs {
  display: flex;
}

.input-number {
  width: 40px;
  border: none;
  outline: none;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

.input-color,
.input-color::-webkit-color-swatch-wrapper {
  width: 25px;
  height: 25px;
  border: none;
  border-color: transparent;
  padding: 0;
}

</style>
