<template>
  <div class="todo-item">
    <div class="todo-item--left">
      <input type="checkbox" v-model="todo.completed" />
      <div
        v-if="!todo.editing"
        @dblclick="editTodo"
        class="todo-item--left--label"
        :class="{ completed: todo.completed }"
      >
        {{ todo.title }}
      </div>
      <input
        v-else
        class="todo-item--left--edit"
        type="text"
        v-model="todo.title"
        @blur="doneEdit(todo)"
        @keyup.enter="doneEdit(todo)"
        @keyup.esc="cancelEdit"
      />
    </div>
    <div class="remove-item" @click="removeTodo(index)">&times;</div>
  </div>
</template>

<script lang="ts">
import { Todos } from "@/models/Todo";
import Vue from "vue";
import Component from "vue-class-component";

@Component({
  props: {
    todo: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
})
export default class ToDoItem extends Vue {
  public todo!: Todos;
  public index!: number;
  public beforeEditCache: String = "";

  public removeTodo(index: number) {
    this.$emit("removedTodo", index);
  }
  public editTodo() {
    this.beforeEditCache = this.todo.title;
    this.todo.editing = true;
  }
  public doneEdit(todo: Todos) {
    this.$emit("finishedEdit", todo);
  }
  public cancelEdit() {
    this.todo.title = this.beforeEditCache;
    this.todo.editing = false;
  }
}
</script>
<style lang="scss" scoped>
.todo-item {
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &--left {
    display: flex;
    align-items: center;
    .completed {
      text-decoration: line-through;
      color: grey;
    }
    &--label {
      padding: 10px;
      border: 1px solid white;
      margin-left: 12px;
    }
    &--edit {
      font-size: 24px;
      color: #2c3e50;
      margin-left: 12px;
      width: 100%;
      padding: 10px;
      border: 1px solid #ccc;
      font-family: "Avenir", Helvetica, Arial, sans-serif;
      &:focus {
        outline: none;
      }
    }
  }
  .remove-item {
    cursor: pointer;
    margin-left: 14px;
    &:hover {
      color: black;
    }
  }
}
</style>
