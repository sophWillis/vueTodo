var todoList = new Vue({
  el: '#todo-list',
  data: {
    state: 'default',
    header: 'VUE todo',
    newItem: '',
    items: [{
        label: '10 party hats',
        purchased: false,
      },
      {
        label: '2 board games',
        purchased: true,
      },
      {
        label: '20 cups',
        purchased: false,
      },
    ]
  },
  computed: {
    reversedItems() {
      return this.items.slice(0).reverse();
    }
  },
  methods: {
    saveItem: function() {
      this.items.push({
        label: this.newItem,
        purchased: false,
      }, );
      this.newItem = '';
    },
    changeState: function(newState) {
      this.state = newState;
      this.newItem = '';
    },
    togglePurchased: function(item) {
      item.purchased = !item.purchased;
    }
  }
})
