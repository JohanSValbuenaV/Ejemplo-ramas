<template>
  <div class="crs shadow p-3 mb-5 bg-white rounded">
    <CrsIntro v-show="VerifyCurrentSlide==1"></CrsIntro> 
 <transition name="fade" mode="out-in"> 
  <CrsItem1  v-show="VerifyCurrentSlide==2"></CrsItem1>
 </transition> 
    <CrsItem2 v-show="VerifyCurrentSlide==3"></CrsItem2>
    <CrsItem3 v-show="VerifyCurrentSlide==4"></CrsItem3>
  </div>
</template>

<script>
import CrsIntro from "./CrsIntro.vue";
import CrsItem1 from "./CrsItem1.vue";
import CrsItem2 from "./CrsItem2.vue";
import CrsItem3 from "./CrsItem3.vue";

export default {
  data() {
    return {
      LogoMult: require("../assets/LogoMultimedia.jpg"),

      CarouselItems: [
        { name: "Intro", First: true, ItemNo: 1 },
        { name: "Item1", First: false, ItemNo: 2 },
        { name: "Item2", First: false, ItemNo: 3 },
        { name: "Item3", First: false, ItemNo: 4 }
      ]
    };
  },

  components: {
    CrsIntro: CrsIntro,
    CrsItem1: CrsItem1,
    CrsItem2: CrsItem2,
    CrsItem3: CrsItem3
  },

  computed: {
    VerifyCurrentSlide() {
      return this.$store.state.CurrentSlideShowItem;
    },

   
  },

  methods: {}
};
</script>


<style scoped>
.crs {
  margin-top: 100px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0
}


</style>
