<template>
  <div>
    <div
      class="dropdown"
      v-click-outside="hideDropdown"
    >
      <div
        class="icon-wrapper"
        @click="toggleDropdown"
      >
        <Icon iconType="arrow" />
      </div>
      <div>
        <input
          type="checkbox"
          id="selectAll"
          v-model="isAllSelected"
        />
        <label for="selectAll">{{ list.label }}</label>
      </div>
      <div v-if="isDropdownOpen">
        <ul v-if="list.items && list.items.length > 0">
          <li
            v-for="item in list.items"
            :key="item.id"
          >
            <Item
              :listId = "list.id"
              :value="item"
              @selectItem="selectItem"
              @changeCount="changeCount"
              @changeColor="changeColor"
            />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import ClickOutside from "vue-click-outside";
import Icon from "./Icon.vue";
import Item from "./Item.vue";

export default {
  name: "Dropdown",
  directives: {
    ClickOutside,
  },
  props: {
    list: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      isDropdownOpen: false,
    }
  },
  components: {
    Icon,
    Item
  },
  computed: {
    isAllSelected: {
      get: function() {
        return this.list.items.length > 0 ? this.list.items.every(item => item.checked) : false;
      },
      set: function( isAllSelected ) {
        const payload = {
          listId: this.list.id,
          isAllSelected
        };

        this.selectAllItemsInList(payload);
      }
    },
    isSomeSelected() {
      return this.list.items.some(item => item.checked);
    }
  },
  methods: {
    ...mapMutations(
      "data",
      ["changeItemSelected", "changeItemCount", "changeItemColor", "selectAllItemsInList"]
    ),
    hideDropdown() {
      this.isDropdownOpen = false;
    },
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    selectItem(payload) {
      this.changeItemSelected(payload);
    },
    changeCount(payload) {
      this.changeItemCount(payload);
    },
    changeColor(payload) {
      this.changeItemColor(payload);
    }
  }
}
</script>

<style scoped>
.dropdown {
  position: relative;
}

.icon-wrapper {
  position: absolute;
  left: 0;
  top: -5px;
}
</style>
