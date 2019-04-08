<template>
  <div class="GContainer">
    <ul class="List1">
      <li class="Item1">
        <a @click="PreviousSlide" class="carousel-control-prev ">
          <img class="ctrlHeight" :src="getArrowLeft" alt="GoBack">
          <span class="sr-only">Previous</span>
        </a>
      </li>

      <li class="Item1">
        <ul class="List2">
          <li class="Item2">
            <ul class="List3">
              <li class="Item3">
                <img class="MedSmall animated swing infinite" :src="QuestMark" alt="QuestMark">
              </li>
              <li class="Item3 TittleP">
                ¿Qué es la
                <span class="yellowtxt">corrupción?</span>
              </li>
            </ul>
          </li>
          <li class="Item2">
            <ul class="List5">
              <li class="Item5">
                <ul class="List4 animated zoomIn">
                  <li class="Item4 animated">
                    <img :class="{Openend:ShowPink} " class="DefImage" :src="Definition" alt="Definition">
                  </li>
                  <li :class="{heartBeat: !ShowPink, infinite: !ShowPink}" class="Item4 animated">
                    <button>
                      <img class="OpenArrow"
                        v-show="!ShowPink"
                        :class="{Openend: ShowPink }"
                        @click="ShowPink=!ShowPink"
                        :src="ArrowGray"
                        alt="Arrow"
                      >
                    </button>

                    <button>
                      <img class="OpenYellowArrow"
                        v-show="ShowPink"
                        :class="{Openend: ShowPink }"
                        @click="ShowPink=!ShowPink"
                        :src="ArrowYellow"
                        alt="Arrow"
                      >
                    </button>
                  </li>
                </ul>
              </li>
              <li class="Item5">
                <div v-show="ShowPink" class="PinkBG animated fadeInLeft">
                  <p class="Definition">{{getInfoOfFirstItem}}</p>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li class="Item1">
        <ul class="List6">
          <li class="Item6">
            <img class="MediumImg animated bounceInUp " :src=" PoliticsYellow" alt=" CargosPublicos">
          </li>
          <li class="Item6 animated zoomIn delay-1s">
            <p class="SemiTittle ">
              Suele creerse que la corrupción es algo
              que solo los políticos ejercen, pero
              NO es así.
            </p>
          </li>
          <li class="Item6 animated zoomIn delay-2s">
            <p
              class="LittleDef"
            >Cualquier cargo público que abuse de su poder para obtener beneficios personales esta directamente ejerciendo el acto de corrupción. Esto incluye cargos como:</p>
          </li>
          <li class="Item6">
            <button
              v-show="!VerCargos"
              @click="VerCargos=!VerCargos"
              class="verCargos"
              href="#"
            >Ver cargos</button>

            <ul v-show="VerCargos" class="List7">
              <li
                v-for="(item, index) in CargosPublicos"
                :key="index"
                class="Item7 animated zoomIn"
              >
                <ul class="InternCargosList">
                  <li class="InternItem">
                    <h3 class="Cargo">{{item.Cargo}}</h3>
                  </li>
                  <li class="InternItem">
                    <img class="LittleImg" :src="item.Img" alt>
                  </li>
                </ul>
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
      ShowPink: false,
      VerCargos: false,

      QuestMark: require("../assets/QuestMark.png"),
      Definition: require("../assets/Definition.png"),
      ArrowGray: require("../assets/ArrowGray.png"),    
      ArrowYellow: require("../assets/ArrowYellow.png"),
      PoliticsYellow: require("../assets/PoliticsYellow.png"),

      CargosPublicos: [
        { Cargo: "Funcionarios de EPS", Img: require("../assets/Doctors.png") },
        { Cargo: "Jueces y magistrados", Img: require("../assets/Judges.png") },
        {
          Cargo: "Autoridades y Oficiales",
          Img: require("../assets/Cops.png")
        },
        {
          Cargo: "Medios Informativos",
          Img: require("../assets/Journalists.png")
        }
      ]
    };
  },

  mounted() {},

  methods: {
    PreviousSlide: function() {
      this.$store.dispatch("ReduceSlide");
    },
    NextSlide: function() {
      this.$store.dispatch("IncreaseSlide");
    }
  },

  computed: {

    getArrowLeft(){
  return this.$store.state.ArrowGrayHoverBackwards;
    },

    getArrowRight(){
  return this.$store.state.ArrowGrayHover;
    },
    getInfoOfFirstItem() {
      return this.$store.state.DefinicionCorrupcion;
    }
  }
};
</script>


<style scoped>
.GContainer {
  background-image: url("../assets/Dip1.jpg");
  background-size: cover;
}

.yellowtxt {
  color: yellow;
}

.MedSmall {
  width: 100px;
}

.Openend {
  width: 50px;
  margin-right: 30px;
  margin-bottom: 50px;
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
  margin-right: 20px;
  margin-top: 30px;
  margin-bottom: 30px;
}

.Item2 {
  margin-bottom: 20px;
  width: 600px;
}

.TittleP {
  font-size: 300%;
  font-weight: bold;
  color: white;
}

.List2 {
  border-radius: 20px;
  margin-top: 70px;
  margin-bottom: 70px;
  background: rgb(224, 61, 42);
  width: 100%;
  list-style-type: none;
}

.List3 {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  list-style-type: none;
}

.Item3 {
  padding: 10px;
  padding-top: 30px;
}

.List4 {
  background: #bc3728;
  height: 250px;
  border-radius: 20px;
  width: 50px;
  padding-bottom: 30px;
  margin-bottom: 50px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-around;
  align-content: center;
  list-style-type: none;
}

.List5 {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;

  list-style-type: none;
}

.PinkBG {
  background: #ec584a;
  width: 400px;
  height: 220px;
  margin-top: 15px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
}

.Definition {
  color: white;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  font-size: 110%;
  font-weight: 400;
  text-align: justify;
}

.Item4 {
}

/* Second part */

.verCargos:hover {
  background: #4b707f;
}

.verCargos {
  background: #5e9eb8;
  width: 180px;
  text-align: center;
  padding: 5px;
  padding-left: 25px;
  padding-right: 25px;

  border-radius: 30px;
  font-weight: bold;

  font-size: 180%;
  color: white;
}

.List6 {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  color: white;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  list-style-type: none;
}

.MediumImg {
  width: 250px;
}

.Item6 {
  width: 500px;
}

.SemiTittle {
  font-size: 200%;
  font-weight: 500;
  padding-top: 30px;
  margin-bottom: 30px;
}

.LittleDef {
  font-size: 120%;
  font-weight: 300;
}

.List7 {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  color: white;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  list-style-type: none;
}

.InternCargosList {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: blueviolet;
  border-radius: 30px;
  margin-bottom: 10px;
  margin-right: 10px;
  width: 180px;
  list-style-type: none;
}

.InternItem {
  padding-right: 8px;
}

.LittleImg {
  width: 50px;
}

.Cargo {
  font-size: 100%;
  font-weight: 300;
  width: 80px;
}

@media (max-width: 990px) {

  .GContainer {
  background-image: url("../assets/Dip1Mobile.jpg");
  background-size: cover;
}
  .Item2 {
    margin-bottom: 20px;
    width: 300px;
  }

  .List4 {
    height: 50px;
    width: 250px;
    flex-direction: row;
  }

  .Item4 {
    width: 100px;
}

.DefImage{
  width: 80px;
}

.OpenArrow{
  transform: rotate(90deg);
}

.OpenYellowArrow{
  transform: rotate(90deg);
}

.Openend {
  width: 50px;
 margin-top: 80px;
  
}

.PinkBG {
  background: #ec584a;
  width: 250px;
  height: 350px;
  margin-top: 0px;
  border-radius: 30px;
  margin-bottom: 20px;
  margin-right: 45px;
}

.Item6 {
  width: 250px;
}

.ctrlHeight{
  height: 50px;
}

}
</style>
