<template>
  <div>
    <ToDoDetail />
  </div>
</template>

<script lang="ts">
import ToDoDetail from "../components/todo/Todo.vue";
import Component from "vue-class-component";
import Vue from "vue";

@Component({
  components: {
    ToDoDetail,
  },
})
export default class TodoPage extends Vue {}
</script>

<style></style>
