<template>
  <div id="main">
    <p class="title">Todo List</p>
    <todo-list @editItem="editItem" @deleteItem="deleteItem" :todoList="todoList" v-if="!saveItem"></todo-list>
    <button class="btn btn-outline-success" type="button" v-if="!saveItem" @click="createNewItem">Nova tarefa</button>
    <new-item :itemList="itemList" @saveItem="saveNewItem" @backTodoList="backMainPage" v-if="saveItem"></new-item>
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue';
import NewItem from './components/NewItem.vue';

export default {
  data() {
    return {
      saveItem: false,
      todoList: [],
      itemList: null
    }
  },
  components: { 
    TodoList,
    NewItem 
  }, 
  methods: {
    createNewItem() {
      this.saveItem = true;
    },
    backMainPage() {
      this.saveItem = false;
    },
    saveNewItem(newItem) {
      this.todoList.push(newItem);
      localStorage.setItem("todoList", JSON.stringify(this.todoList));
      this.saveItem = false;
    },
    deleteItem(index) {

      // Splice: index, qtde itens
      this.todoList.splice(index, 1);

      localStorage.setItem("todoList", JSON.stringify(this.todoList));
    },
    editItem(index) {
      // Setar a variável itemList (controle para edição)

      this.itemList = this.todoList[index];

      // Edição
      this.saveItem = true;
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
