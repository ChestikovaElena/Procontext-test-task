import Vue from "vue";
import {
  CHANGE_ITEM_SELECTED,
  CHANGE_ITEM_COUNT,
  CHANGE_ITEM_COLOR,
  SELECT_ALL_ITEMS_IN_LIST,
  DECREASE_COUNT_OF_ITEM,
} from "./mutations.js";

const state = {
  lists: [
    {
      id: "1",
      label: "List1",
      items: [
        {
          id: "11",
          label: "Item1",
          count: 5,
          color: "#000000",
          checked: false,
        },
        {
          id: "12",
          label: "Item2",
          count: 8,
          color: "#1dc6c9",
          checked: false,
        },
        {
          id: "13",
          label: "Item3",
          count: 3,
          color: "#f20707",
          checked: false,
        },
        {
          id: "14",
          label: "Item4",
          count: 30,
          color: "#159d1e",
          checked: false,
        },
      ],
    },
    {
      id: "2",
      label: "List2",
      items: [
        {
          id: "21",
          label: "Item2",
          count: 12,
          color: "#000000",
          checked: false,
        },
        {
          id: "22",
          label: "Item2",
          count: 8,
          color: "#1dc6c9",
          checked: false,
        },
        {
          id: "23",
          label: "Item3",
          count: 6,
          color: "#f20707",
          checked: false,
        },
        {
          id: "24",
          label: "Item4",
          count: 3,
          color: "#159d1e",
          checked: false,
        },
        {
          id: "25",
          label: "Item5",
          count: 7,
          color: "#159d1e",
          checked: false,
        },
      ],
    },
    {
      id: "3",
      label: "List3",
      items: [
        {
          id: "31",
          label: "Item1",
          count: 32,
          color: "#000000",
          checked: false,
        },
        {
          id: "32",
          label: "Item2",
          count: 8,
          color: "#1dc6c9",
          checked: false,
        },
        {
          id: "33",
          label: "Item3",
          count: 6,
          color: "#f20707",
          checked: false,
        },
        {
          id: "34",
          label: "Item4",
          count: 3,
          color: "#159d1e",
          checked: false,
        },
        {
          id: "35",
          label: "Item5",
          count: 7,
          color: "#159d1e",
          checked: false,
        },
        {
          id: "36",
          label: "Item6",
          count: 2,
          color: "#159d1e",
          checked: false,
        },
      ],
    },
    {
      id: "4",
      label: "List4",
      items: [],
    },
  ],
};

const mutations = {
  [CHANGE_ITEM_SELECTED](state, payload) {
    const currentList = state.lists.findIndex(
      (list) => list.id === payload.listId
    );
    const currentItem = state.lists[currentList].items.findIndex(
      (value) => value.id == payload.itemId
    );

    Vue.set(
      state.lists[currentList].items[currentItem],
      "checked",
      !state.lists[currentList].items[currentItem].checked
    );
  },
  [CHANGE_ITEM_COUNT](state, payload) {
    const currentList = state.lists.findIndex(
      (list) => list.id === payload.listId
    );
    const currentItem = state.lists[currentList].items.findIndex(
      (value) => value.id == payload.itemId
    );

    Vue.set(
      state.lists[currentList].items[currentItem],
      "count",
      payload.count
    );

    if (state.lists[currentList].items[currentItem].count === 0) {
      Vue.set(state.lists[currentList].items[currentItem], "checked", false);
    }
  },
  [CHANGE_ITEM_COLOR](state, payload) {
    const currentList = state.lists.findIndex(
      (list) => list.id === payload.listId
    );
    const currentItem = state.lists[currentList].items.findIndex(
      (value) => value.id == payload.itemId
    );

    Vue.set(
      state.lists[currentList].items[currentItem],
      "color",
      payload.color
    );
  },
  [SELECT_ALL_ITEMS_IN_LIST](state, payload) {
    const currentList = state.lists.findIndex(
      (list) => list.id === payload.listId
    );

    state.lists[currentList].items.forEach((item) =>
      Vue.set(item, "checked", payload.isAllSelected)
    );
  },
  [DECREASE_COUNT_OF_ITEM](state, payload) {
    const currentList = state.lists.findIndex(
      (list) => list.id === payload.listId
    );

    const currentItem = state.lists[currentList].items.findIndex(
      (value) => value.id == payload.itemId
    );

    Vue.set(
      state.lists[currentList].items[currentItem],
      "count",
      state.lists[currentList].items[currentItem].count - 1
    );

    if (state.lists[currentList].items[currentItem].count === 0) {
      Vue.set(state.lists[currentList].items[currentItem], "checked", false);
    }
  },
};

export default {
  namespaced: true,
  state,
  mutations,
};
