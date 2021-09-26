<template>
  <div class="main">
    <p class="title">Lista de Tarefas</p>
    <ul class="todo-list" v-for="(item, index) in todoList" :key="index">
      <li class="item-list description">{{ item.description }}</li>
      <li class="item-list">
        <svg @click="editItemList(index)"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-pencil"
          viewBox="0 0 16 16"
        >
          <path
            d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"
          />
        </svg>
      </li>
      <li class="item-list">
        <svg @click="deleteItemList(index)"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-archive"
          viewBox="0 0 16 16"
        >
          <path
            d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1V2zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5H2zm13-3H1v2h14V2zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"
          />
        </svg>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    todoList: Array,
  },
  methods: {
      deleteItemList(index) {
          this.$emit("deleteItem", index);
      },
      editItemList(index) {
          this.$emit("editItem", index);
      }
  }
};
</script>

<style scoped>
    .todo-list {
        display: flex;
        list-style-type: none;
    }

    .item-list {
        padding: 0 10px;
    }

    /* Flex-grow: 1 = width 100% */
    .description {
        flex-grow: 1;
    }
</style>