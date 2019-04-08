<template>
  <div class="GContainer">
    <!-- <img class="sml" src="../assets/HandsFondoIntro.jpg" alt=""> -->
    <ul class="IntroContainer">
      <li class="ItemContainer">
        <ul class="iconsList4">
          <li v-for="(ImageItem, index) in FourImagespt1" :key="index" class="iconsItem4">
            <img class="sml animated zoomIn faster" :src="ImageItem.ImageSource" alt>
          </li>
        </ul>

        <ul class="iconsList4">
          <li v-for="(ImageItem, index) in FourImagespt2" :key="index" class="iconsItem4">
            <img class="sml  animated zoomIn " :src="ImageItem.ImageSource" alt>
          </li>
        </ul>
      </li>

      <li class="ItemContainer">
        <p class="Ptittle">Descubre aquí</p>
        <p class="Ptext">
          ¿Qué es la corrupción?
          y como puedes ayudar a
          combatir este problema
        </p>

        <a @click="NextSlide"
          class="LeftButton"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >Empezar</a>
      </li>
    </ul>

  
  </div>
</template>

<script>
export default {
  data() {
    return {
      FourImagespt1: [
        {
          ImageSource: require("../assets/Img3.png")
        },
        {
         ImageSource: require("../assets/Img4.png")
        }
      ],

      FourImagespt2: [
        {
         ImageSource: require("../assets/Img2.png")
        },
        {
         ImageSource: require("../assets/Img1.png")
        }
      ]
    };
  },

   methods: {
    PreviousSlide: function() {
     this.$store.dispatch('ReduceSlide');
    },
     NextSlide: function() {
     this.$store.dispatch('IncreaseSlide');
    }

  },
};
</script>


<style scoped>
.IntroContainer {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  list-style-type: none;
  
}

.LeftButton:hover{
 text-decoration: none;
  border-width: 3px;
  border-style: solid;
  border-color: rgb(68, 222, 255);
  background-color: rgba(27, 27, 27,0);
  color: rgb(255, 255, 255);
}

.LeftButton {
  text-decoration: none;
  background: rgb(68, 222, 255);
  color: rgb(27, 27, 27);
  padding: 10px;
  padding-left: 8%;
   padding-right: 8%;
  border-radius: 5px;
  font-weight: 500;
  margin-left: 60%;
  font-size: 250%;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.Ptittle {
  color: white;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  text-align: left;
  font-size: 400%;
  font-weight: 500;
}

.Ptext {
  color: white;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  text-align: left;
  font-size: 300%;
  font-weight: 300;
}

.ItemContainer {
  margin-top: 80px;
 
  width: 40%;
  margin-right: 80px;
  margin-bottom: 50px;
}

.iconsList4 {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  list-style-type: none;
}

.iconsItem4 {
  margin-top: 10px;
  margin-bottom: 10px;
  margin-right: 30px;
}

.GContainer {
  

  
  
  background-image: url("../assets/HandsFondoIntroFull.jpg");
  background-size: cover;

  text-align: center;
}

.sml {
  width: 300px;
   border-radius: 30px;
}



@media (max-width: 990px) {
  .GContainer {
    
   
    background-image: url("../assets/HandsFondoIntroMobile.jpg");
  }

  .sml {
  width: 100%;
 
}

.ItemContainer {
  
   margin-top: 0px;
  width: 100%;  
  margin-bottom: 50px;
  margin-right: 20px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;

}

.iconsItem4 {
  margin-top: 10px;
  margin-bottom: 10px;
  
}

.LeftButton {
  
  
  margin-left: 10%;
  font-size: 200%;
 
}

.Ptittle {
   
  font-size: 250%;
  
}

.Ptext { 
 
  font-size: 200%;
  
}

}
</style>
