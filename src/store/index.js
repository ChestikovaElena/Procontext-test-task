import Vue from "vue";
import Vuex from "vuex";
import data from "./data.js";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  modules: {
    data,
  },
});
