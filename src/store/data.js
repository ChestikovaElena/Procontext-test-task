import Vue from "vue";
import {
  CHANGE_ITEM_SELECTED,
  CHANGE_ITEM_COUNT,
  CHANGE_ITEM_COLOR,
  SELECT_ALL_ITEMS_IN_LIST,
  DECREASE_COUNT_OF_ITEM,
} from "./mutations.js";
import initialLists from "../assets/lists";

const state = {
  lists: initialLists,
};

const getters = {
  getRenderedItems: (state) => (listId) => {
    const currentList = state.lists.findIndex((list) => list.id === listId);

    return state.lists[currentList].items.filter(
      (item) => item.checked && item.count > 0
    );
  },
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
  getters,
  mutations,
};
