<template>
  <div id="main">
    <p class="title">Todo List</p>
    <todo-list :todoList="todoList" v-if="!createItem"></todo-list>
    <button class="btn btn-outline-success" type="button" v-if="!createItem" @click="createNewItem">Nova tarefa</button>
    <new-item @saveItem="saveNewItem" @backTodoList="backMainPage" v-if="createItem"></new-item>
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue';
import NewItem from './components/NewItem.vue';

export default {
  data() {
    return {
      createItem: false,
      todoList: []
    }
  },
  components: { 
    TodoList,
    NewItem 
  }, 
  methods: {
    createNewItem() {
      this.createItem = true;
    },
    backMainPage() {
      this.createItem = false;
    },
    saveNewItem(newItem) {
      this.todoList.push(newItem);
      localStorage.setItem("todoList", JSON.stringify(this.todoList));
      this.createItem = false;
    }
  },
  created() {
    // Atualizar lista - localStorage

    let todoList = localStorage.getItem("todoList");

    if (todoList) {

      // Object

      this.todoList = JSON.parse(todoList);
    }
  }
}
</script>

<style>
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin: 0;
  padding: 0;
}
</style>
