<template>
  <div class="container">
    <input
      class="todo__input"
      type="text"
      placeholder="What needs to be done"
      v-model="newTodo"
      @keyup.enter="addTodo"
    />
    <todo-item
      v-for="(todo, index) in todosFiltered"
      :key="todo.id"
      :todo="todo"
      :index="index"
      @removedTodo="removeTodo"
      @finishedEdit="doneEdit"
    >
    </todo-item>
    <div class="extra__container">
      <div>
        <label
          ><input
            type="checkbox"
            :checked="!anyRemaining"
            @change="checkAllTodos"
          />
          Check All</label
        >
      </div>
      <div>{{ remaining }} item left</div>
    </div>
    <div class="extra__container">
      <div>
        <button
          :class="{ active: $store.state.filter == 'all' }"
          @click="$store.state.filter = 'all'"
        >
          All
        </button>
        <button
          :class="{ active: $store.state.filter == 'active' }"
          @click="$store.state.filter = 'active'"
        >
          Active
        </button>
        <button
          :class="{ active: $store.state.filter == 'completed' }"
          @click="$store.state.filter = 'completed'"
        >
          Completed
        </button>
      </div>

      <div>
        <transition name="fade">
          <button v-if="showClearCompleteButton" @click="clearCompleted">
            Clear Completed
          </button>
        </transition>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Todos } from "@/models/Todo";
import Vue from "vue";
import Component from "vue-class-component";
import TodoItem from "./TodoItem.vue";

@Component({
  components: {
    TodoItem,
  },
})
export default class ToDoDetail extends Vue {
  public newTodo: String = "";
  public idForTodo: number = 3;
  public beforeEditCache: String = "";
  public addTodo() {
    if (this.newTodo.length == 0 || this.newTodo == " ") {
      return;
    }
    this.$store.dispatch("addTodo", {
      id: this.idForTodo,
      title: this.newTodo,
    });

    this.newTodo = "";
    this.idForTodo++;
  }
  public doneEdit(todo: Todos) {
    if (todo.title.length == 0) {
      todo.title = this.beforeEditCache;
    }
    todo.editing = false;
  }
  public removeTodo(index: number) {
    this.$store.dispatch("removeTodo", {
      index: index,
    });
  }
  public checkAllTodos(event: any) {
    this.$store.dispatch("checkAllTodos", {
      event: event,
    });
  }
  public clearCompleted() {
    this.$store.dispatch("clearCompleted");
  }
  public get remaining() {
    return this.$store.getters.remaining;
  }
  public get anyRemaining() {
    return this.$store.getters.anyRemaining;
  }
  public get todosFiltered() {
    return this.$store.getters.todosFiltered;
  }
  public get showClearCompleteButton() {
    return this.$store.getters.showClearCompleteButton;
  }
}
</script>

<style lang="scss" scoped>
.container {
  max-width: 600px;
  .todo__input {
    width: 100%;
    padding: 10px 18px;
    margin-bottom: 10px;
  }
  .extra__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 16px;
    border-top: 1px solid lightgrey;
    padding-top: 14px;
    margin-bottom: 14px;
  }
  button {
    font-size: 14px;
    background-color: white;
    margin-right: 4px;
    appearance: none;

    &:hover {
      background: lightgreen;
    }
    &:focus {
      outline: none;
    }
  }
  .active {
    background: lightgreen;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.2s;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
}
</style>
