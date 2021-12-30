<template>
  <div>
    <div
      class="dropdown"
    >
      <div
        class="icon-wrapper"
        :class="['icon-wrapper', {
          'icon-wrapper icon-wrapper--active': isDropdownOpen
        }]"
        @click="toggleDropdown"
      >
        <Icon iconType="arrow" />
      </div>
      <div class="dropdown-content">
        <div>
          <label class="check">
          <input
            type="checkbox"
            id="selectAll"
            v-model="isAllSelected"
            class="check-input"
          />
            <span
              class="check-box"
              :class="['check-box', {
                'check-box check-box--some': !isAllSelected && isSomeSelected
              }]"
            ></span>
            {{ list.label }}
          </label>
        </div>
        <div v-if="isDropdownOpen">
          <ul v-if="list.items && list.items.length > 0" class="dropdown-list">
            <li
              v-for="item in list.items"
              :key="item.id"
            >
              <ControlItem
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
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import Icon from "./Icon.vue";
import ControlItem from "./ControlItem.vue";

export default {
  name: "Dropdown",
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
    ControlItem
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
  display: flex;
}

.icon-wrapper {
  position: absolute;
  left: 0;
  top: 0;
  cursor: pointer;
}

.icon-wrapper--active {
  transform: rotate(90deg);
}

.dropdown-content {
  width: 100%;
  margin-left: 30px;
  text-align: left;
}

.dropdown-list {
  margin: 10px 0 10px 20px;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.check-box--some {
  background-image: url("../assets/Point.svg");
}

/* input[type=checkbox] {
  display:none;
}

input[type=checkbox] + label:before {
  font-family: FontAwesome;
  display: inline-block;
}

input[type=checkbox] + label:before {
  content: "\f096";
}
input[type=checkbox] + label:before {
  letter-spacing: 10px;
}

input[type=checkbox]:checked + label:before {
  content: "\f046";
} */
/* input[type=checkbox]:checked + label:before {
  letter-spacing: 5px;
} */

</style>
