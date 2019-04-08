<template>
  <div class="GContainer">
    <ul class="List1">
      <li class="Item1">
        <a @click="PreviousSlide" class="carousel-control-prev">
          <img class="ctrlHeight" :src="getArrowLeft" alt="GoBack">
          <span class="sr-only">Previous</span>
        </a>
      </li>
      <li class="Item1 ">
        <ul class="List2">
          <li class="Item2 RedBg">
            <ul class="List3">
              <li class="Item3">
                <ul class="List4">
                  <li class="Item4">
                    <h3 class="ColVsMundo"> <span class="BlackTittle">Colombia</span> vs el mundo</h3>
                    <div class="WhiteLine"></div>
                  </li>
                  <li class="Item4">
                    <img :src="ColombiaMap" alt="colombiavectorwhitemap">
                  </li>
                  <li class="Item4">
                    <img class="MedLittleImg" :src="CorruptionIcon" alt="corrupcionVector">
                  </li>
                </ul>
              </li>
              <li class="Item3">
                <p
                  class="Info"
                >Según la organización <span class="YellowTXT"> Transparency International </span> en <span class="YellowTXT"> {{getCurrentYear}} Colombia logro entrar al top {{getCurrentTop}}  </span> de los paises menos corruptos del mundo ocupando <span class="DarkRedTXT SemiBigTXT"> el puesto {{ getColombiaCurrentRanking}} de 180 en el ranking mundial. </span>  Recibiendo una puntuación de <span class="YellowTXT"> {{getColombiaCurrentPoints}} puntos. </span>  Siendo 0 máxima corrupción y 100 mínima corrupción.</p>
              </li>
            </ul>
          </li>
          <li class="Item2 WhiteBg">
            <ul class="List5">
              <li class="Item5">
                <ul class="List6">
                  <li class="Item6">
                    <h2>Índice de Percepción de Corrupción {{getCurrentYear}}</h2>
                  </li>
                  <li class="Item6">
                    <ul class="List7">
                      <li
                        v-for="(item, index) in ItemsInIndiceCorrupcion"
                        :key="index"
                        class="Item7"
                      >
                        <ul class="IntenrList">
                          <li class="InternItem">{{item.Puesto}}</li>
                          <li class="InternItem">{{item.Pais}}</li>
                          <li class="InternItem">{{item.Puntaje}}</li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li class="Item6">
                    <p
                      class="LittleInfo"
                    >*Info obtenida de la página Transparencia Internacional {{getCurrentYear}}</p>
                  </li>
                </ul>
              </li>
              <li class="Item5">
                <img :src="Map2018" alt="MapaCorrupcion 2018">


                <!-- <div class="cpi-node" data-embed="map"></div><script src="https://www.transparency.org/assets/scripts/cpi2018/embed.js"></script> -->



              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li class="Item1">
        <a @click="NextSlide" class="carousel-control-next">
          <img class="ctrlHeight" :src="getArrowRight" alt="GoForward">
          <span class="sr-only">Next</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ColombiaMap: require("../assets/ColombiaVector.png"),
      CorruptionIcon: require("../assets/CorruptionVector.jpg"),
      Map2018: require("../assets/Map2018.jpg")
    };
  },

  methods: {
    PreviousSlide: function() {
      this.$store.dispatch("ReduceSlide");
    },
    NextSlide: function() {
      this.$store.dispatch("IncreaseSlide");
    }
  },

  computed: {
    getArrowLeft() {
      return this.$store.state.ArrowGrayHoverBackwards;
    },

    getArrowRight() {
      return this.$store.state.ArrowGrayHover;
    },

    getColombiaCurrentRanking() {
      return this.$store.state.ColombiaCurrentRanking;
    },

    getColombiaCurrentPoints() {
      return this.$store.state.ColombiaCurrentPoints;
    },

    getCurrentYear() {
      return this.$store.state.JustYear;
    },

    getCurrentTop() {
      return this.$store.state.JustTop;
    },

    ItemsInIndiceCorrupcion() {
      return this.$store.state.IndiceCorrupcionPaises2018;
    }
  }
};
</script>


<style scoped>

@font-face {
    font-family: "My Custom Font";
    src: url(http://www.example.org/mycustomfont.ttf) format("truetype");
}

ul {
  list-style-type: none;
}

.GContainer {
  background-image: url("../assets/Dip1.jpg");
  background-size: cover;
}

.List1 {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  list-style-type: none;
}

.Item1 {
  margin-right: 300px;
  margin-left: 300px;

  margin-top: 30px;
  margin-bottom: 30px;
}

.List2 {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.List3 {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
 
}

.List4 {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  
  width: 800px;
  
  
}

.ColVsMundo{
  color: white;
  font-weight: 400;
}

.BlackTittle{
   color: black;
   font-size: 170%;
   font-weight: bold;
}

.WhiteLine{
  height: 8px;
  width: 100%;
  background: white;
}

.Item4 {
  margin-right: 50px;  
  width: 150px;
  margin-top: 20px;
 
}

.MedLittleImg{
  width: 300px;
}

.Info{
  margin-top: 30px;
  margin-bottom: 30px;
  margin-right: 20px;
  margin-left: 20px;
  text-align: justify;
  color: white;
  font-size: 150%;
  font-weight: 500;
 
}

.YellowTXT{
 color: gold;
}
.DarkRedTXT{
 color: rgb(46, 12, 12);
  font-weight: bolder;
}
.SemiBigTXT{
font-size: 120%;
}

/*-Second part--*/

.RedBg{
 background: #d65d51;
}

.WhiteBg{
background: white;
}

.Item1{
    width: 1000px;
}

.List5 {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 30px;
  margin-right: 20px;
  margin-left: 20px;
  
}

@media (max-width: 990px) {
  .GContainer {
    background-image: url("../assets/Dip1Mobile.jpg");
    background-size: cover;
  }

  .ctrlHeight {
    height: 50px;
  }
}
</style>
