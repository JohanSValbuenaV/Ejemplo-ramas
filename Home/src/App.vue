<template>
  <v-app>
    <DaHeader></DaHeader>
    <BodyIntro></BodyIntro>
    <DaFooter></DaFooter>
  </v-app>
</template>

<script>
import DaHeader from "./components/DaHeader.vue";
import BodyIntro from "./components/BodyIntro.vue";
import DaFooter from "./components/DaFooter.vue";

export default {
  components: {
    DaHeader: DaHeader,
    DaFooter: DaFooter,
    BodyIntro: BodyIntro
  },
  data() {
    return {
      //
    };
  }
};
</script>

<style scoped>
</style>
