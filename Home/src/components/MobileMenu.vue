

<template>
  <ul class="List">
    <div class="line"></div>
    <li
      class="Item"
      @mouseover="ChangeArrow"
      v-for="CurrentItem in MenuItems"
      :key="CurrentItem.id"
    >
      <a class="LinkItem" href="#">
        <ul class="InternList">
          <li >{{CurrentItem.name}}</li>
          <li>
            <div class="IconArrow"></div>
          </li>
        </ul>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      Icon: require("../assets/Arrow.png")
    };
  },

  computed: {
    MenuItems() {
      return this.$store.state.MenuItems;
    }
  },

  methods: {
    ChangeArrow: function() {
      this.Icon = require("../assets/ArrowBlack.png");
    }
  }
};
</script>


<style scoped>
.List {
  transform: translateX(-5%);
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: left;
  align-items: flex-start;
  list-style: none;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 130%;
  font-weight: 400;
}

.InternList {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  list-style: none;

  border-radius: 5px;
  padding-top: 15px;
  padding-right: 10px;
  padding-bottom: 15px;
  color: white;
}

.IconArrow {
  background-image: url("../assets/Arrow.png");
  width: 20px;
  height: 20px;
  background: cover;
}

.InternList:hover {
  color: black;
  font-weight: 500;
  background-color: rgb(68, 222, 255);
}

.InternList:hover .IconArrow {
  background-image: url("../assets/ArrowBlack.png");
}

.line {
  height: 1px;
  width: 100%;
  background: rgb(68, 222, 255);
}

.arrowIcon {
  margin-left: 60px;
  align-items: flex-end;
}

.LinkItem {
  text-decoration: none;
}

.Item {
  margin-bottom: 2px;
  margin-top: 5px;
  width: 250px;
}
</style>
