import Vue from "vue";
import Vuex from "vuex";
import { RootState } from "./types";
import db from "@/firebase";
import "firebase/auth";

Vue.use(Vuex);

export default new Vuex.Store<RootState>({
  state: {
    filter: "all",
    todos: [
      {
        id: 1,
        title: "Finish",
        completed: false,
        editing: false,
      },
      {
        id: 2,
        title: "Take over",
        completed: true,
        editing: false,
      },
    ],
    user: "",
    infos: [],
    profileInitials: "",
    address: "",
    name: "",
    email: "",
    phone: "",
    uuid: "",
    products: [],
    news: [],
    filterProduct: "all",
    currentPage: 1,
  },
  getters: {
    checkEmail(state) {
      return state.infos.filter((item) => item.email.includes(state.email))
        .length > 0
        ? true
        : false;
    },
    slideProducts(state) {
      state.currentPage = 1;
      return state.products.slice(0, 8);
    },
    productFilter(state) {
      if (state.filterProduct == "all") return state.products;
      else
        return state.products.filter((item) =>
          item.type.includes(state.filterProduct)
        );
    },
    remaining(state) {
      return state.todos.filter((todo) => !todo.completed).length;
    },
    anyRemaining(state, getters) {
      return getters.remaining != 0;
    },
    todosFiltered(state) {
      if (state.filter == "all") {
        return state.todos;
      } else if (state.filter == "active") {
        return state.todos.filter((todo) => !todo.completed);
      } else if (state.filter == "completed") {
        return state.todos.filter((todo) => todo.completed);
      }
      return state.todos;
    },
    showClearCompleteButton(state) {
      return state.todos.filter((todo) => todo.completed).length > 0;
    },
  },
  mutations: {
    updateUser(state, payload) {
      state.user = payload;
    },
    getDbInfo(state, doc) {
      state.infos = doc;
      if (state.user) {
        doc
          .filter((item: RootState) => item.email.includes(state.user.email))
          .map((item: RootState) => {
            state.address = item.address;
            state.name = item.name;
            state.phone = item.phone;
            state.uuid = item.uuid;
          });
      }
    },
    getDbProduct(state, doc) {
      state.products = doc;
    },
    getDbNew(state, doc) {
      state.news = doc;
    },
    setProfileInitials(state) {
      state.profileInitials = state.name
        .replace(/^[a-zA-Z]/, (match) => {
          return match.toUpperCase();
        })
        .slice(0, 1);
    },
    addTodo(state, todo) {
      state.todos.push({
        id: todo.id,
        title: todo.title,
        completed: false,
        editing: false,
      });
    },
    removeTodo(state, todo) {
      state.todos.splice(todo.index, 1);
    },
    checkAllTodos(state, todo) {
      state.todos.forEach(
        (item) => (item.completed = todo.event.target.checked)
      );
    },
    clearCompleted(state) {
      state.todos = state.todos.filter((todo) => !todo.completed);
    },
  },
  actions: {
    async getDbInfo({ commit }) {
      const snapshot = await db.ref("Info").once("value");
      const dbInfo = await Object.values(snapshot.val());
      commit("getDbInfo", dbInfo);
      commit("setProfileInitials");
    },
    async getDbProduct({ commit }) {
      const snapshot = await db.ref("Products").once("value");
      const dbProduct = await Object.values(snapshot.val());
      commit("getDbProduct", dbProduct);
    },
    async getDbNew({ commit }) {
      const snapshot = await db.ref("New").once("value");
      const dbNew = await Object.values(snapshot.val());
      commit("getDbNew", dbNew);
    },
    addTodo(context, todo) {
      setTimeout(() => {
        context.commit("addTodo", todo);
      }, 100);
    },
    removeTodo(context, todo) {
      setTimeout(() => {
        context.commit("removeTodo", todo);
      }, 100);
    },
    checkAllTodos(context, todo) {
      setTimeout(() => {
        context.commit("checkAllTodos", todo);
      }, 100);
    },
    clearCompleted(context) {
      setTimeout(() => {
        context.commit("clearCompleted");
      }, 100);
    },
  },
});
