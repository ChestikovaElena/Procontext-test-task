import {
  CHANGE_ITEM_SELECTED,
  CHANGE_ITEM_COUNT,
  CHANGE_ITEM_COLOR,
  SELECT_ALL_ITEMS_IN_LIST,
  DECREASE_COUNT_OF_ITEM,
} from "./mutations.js";
import initialLists from "../assets/lists";
import { getItemById, getListById } from "../utils/findFunctions.js";

const state = {
  lists: initialLists,
};

const getters = {
  getRenderedItems: (state) => (listId) => {
    return getListById(state.lists, listId).items.filter(
      (item) => item.checked && item.count > 0
    );
  },
};

const mutations = {
  [CHANGE_ITEM_SELECTED](state, payload) {
    const currentItem = getItemById(
      state.lists,
      payload.listId,
      payload.itemId
    );

    currentItem.checked = !currentItem.checked;
  },
  [CHANGE_ITEM_COUNT](state, payload) {
    const currentItem = getItemById(
      state.lists,
      payload.listId,
      payload.itemId
    );

    currentItem.count = payload.count;
    if (currentItem.count === 0) {
      currentItem.checked = false;
    }
  },
  [CHANGE_ITEM_COLOR](state, payload) {
    const currentItem = getItemById(
      state.lists,
      payload.listId,
      payload.itemId
    );

    currentItem.color = payload.color;
  },
  [SELECT_ALL_ITEMS_IN_LIST](state, payload) {
    const currentList = getListById(state.lists, payload.listId);

    currentList.items.forEach((item) => (item.checked = payload.isAllSelected));
  },
  [DECREASE_COUNT_OF_ITEM](state, payload) {
    const currentItem = getItemById(
      state.lists,
      payload.listId,
      payload.itemId
    );

    currentItem.count = currentItem.count - 1;

    if (currentItem.count === 0) {
      currentItem.checked = false;
    }
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
};
