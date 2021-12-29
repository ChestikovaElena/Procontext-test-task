<template>
  <div
    class="icon__wrapper"
  >
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      class="icon"
      v-html="types[iconType]"
    >
    </svg>
  </div>
</template>

<script>
export default {
  name: 'Icon',
  props: {
    iconType: {
      type: String,
      default: 'home'
    }
  },
  data: () => ({
    types: {
      check:
        `<path d="M3 12L9 18L21 6" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />`,
      arrow:
        `<path d="M4 8L12 16L20 8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />`,
    }
  })
}
</script>

<style scoped>
.icon__wrapper {
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.icon {
  fill: inherit;
}
</style>
