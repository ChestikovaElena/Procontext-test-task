import Vue from "vue";
import {
  CHANGE_ITEM_SELECTED,
  CHANGE_ITEM_COUNT,
  CHANGE_ITEM_COLOR,
  SELECT_ALL_ITEMS_IN_LIST,
} from "./mutations.js";

const state = {
  lists: [
    {
      id: 1,
      label: "List1",
      items: [
        {
          id: "11",
          label: "Item1",
          count: 0,
          color: "#000000",
          checked: false,
        },
        {
          id: "12",
          label: "Item2",
          count: 0,
          color: "#1dc6c9",
          checked: false,
        },
        {
          id: "13",
          label: "Item3",
          count: 0,
          color: "#f20707",
          checked: false,
        },
        {
          id: "14",
          label: "Item4",
          count: 0,
          color: "#159d1e",
          checked: false,
        },
      ],
    },
    {
      id: 2,
      label: "List2",
      items: [
        {
          id: "21",
          label: "Item2",
          count: 0,
          color: "#000000",
          checked: false,
        },
        {
          id: "22",
          label: "Item2",
          count: 0,
          color: "#1dc6c9",
          checked: false,
        },
        {
          id: "23",
          label: "Item3",
          count: 0,
          color: "#f20707",
          checked: false,
        },
        {
          id: "24",
          label: "Item4",
          count: 0,
          color: "#159d1e",
          checked: false,
        },
        {
          id: "25",
          label: "Item5",
          count: 0,
          color: "#159d1e",
          checked: false,
        },
      ],
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
};

export default {
  namespaced: true,
  state,
  mutations,
};
