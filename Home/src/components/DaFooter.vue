<template>
  <footer>
    <ul class="footerList">
      <li class="footerItem">
        <h2>
          Colombia contra la corrupción 2019 | desarrollado por
          <span class="bold">Simulmedios</span>
        </h2>
      </li>

      <li class="footerItem">
        <img :src="LogoMult" alt="LogoMultimedia">
        <h2>Ingeniería en Multimedia</h2>
      </li>

      <li class="footerItem">
        <ul class="InternFooterList">
          <li class="ImgItemFooter">
            <img :src="LogoUni" alt="LogoUMNG">
          </li>
          <li>
            <h2>Universidad Militar Nueva Granada</h2>
            <h2> <span class="bold">2019 Copyright © </span>Todos los derechos reservados</h2>
          </li>
        </ul>
      </li>
    </ul>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      LogoMult: require("../assets/LogoMultimedia.jpg"),
      LogoUni: require("../assets/LogoUMNG.jpg")
    };
  },

  methods: {}
};
</script>


<style scoped>
* {
  margin: 0px;
}

.InternFooterList {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  text-align: left;
  list-style-type: none;
  
}

.ImgItemFooter{
    margin-right: 10px;
}

.footerList {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  list-style-type: none;
  
}

.bold {
  font-weight: bold;
}

h2 {
  font-weight: 400;
  font-size: 110%;
}

.footerItem {
  margin-top: 20px;
  margin-bottom: 20px;
  margin-right: 10px;
 
}

@media (max-width: 990px) {
  .footerList {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    list-style-type: none;
    
    padding-right: 30px;
  }

  .InternFooterList {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    list-style-type: none;
   

    font-size: 90%;
  }

  .footerItem {
    margin-top: 20px;
    margin-bottom: 20px;
    width: 95%;
  }
}
</style>
