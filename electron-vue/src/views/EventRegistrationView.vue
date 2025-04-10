<template>
  <div>
    <form @submit.prevent="addItem">
      <p>Add item</p>
      <p>Item name: <input type="text" required v-model="itemName" /></p>
      <p>How many: <input type="number" v-model="itemNumber" /></p>
      <button type="submit">Add item</button>
    </form>

    <p>Shopping list:</p>
    <ul>
      <li v-for="item in shoppingList" :key="item.name">
        {{ item.name }}, {{ item.number }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      itemName: null,
      itemNumber: null,
      shoppingList: [
      ]
    };
  },
  methods: {
    addItem() {
      this.shoppingList.push({
        name: this.itemName,
        number: this.itemNumber
      });
      this.itemName = null;
      this.itemNumber = null;
    }
  }
};
</script>