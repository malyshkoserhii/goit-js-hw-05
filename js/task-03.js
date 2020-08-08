class Storage {
  constructor(items) {
    this.items = items;
  }

  getItems() {
    return this.items;
  }

  addItem(item) {
    return items.push(item);
  }

  removeItem(item) {
    for (let i = 0; i < items.length; i += 1) {
      if (item === items[i]) {
        items.splice(i, 1);
      }
    }
  }
}

const storage = new Storage([
  "Нанитоиды",
  "Пролонгер",
  "Железные жупи",
  "Антигравитатор",
]);

const items = storage.getItems();
console.table(items);

storage.addItem("Дроид");
console.table(storage.items);

storage.removeItem("Пролонгер");
console.log(storage.items);
