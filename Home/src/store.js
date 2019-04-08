import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

    CurrentSlideShowItem:1,
    MenuItems: [
        {name: "Inicio", Special:false, Init:true},
        {name: "Denuncia aquí", Special:true, Init:false},
        {name: "Sobre nosotros", Special:false, Init:false},
        {name: "Contáctanos", Special:false, Init:false}, 
        
    ],
    ArrowGrayHover: require("./assets/ArrowGrayHover.png"),
    ArrowGrayHoverBackwards: require("./assets/ArrowGrayHoverBackwards.png"),


    // Info que se guardara en la base de datos----------------------------------------

    // Item 1 Infografia

    DefinicionCorrupcion: 'La corrupción se refiere a los actos delictivos cometidos por funcionarios y autoridades públicas que abusan de su poder e influencia al hacer un mal uso intencional de los recursos financieros y humanos a los que tienen acceso, anticipando sus intereses personales y los de sus allegados para conseguir una ventaja ilegítima generalmente de forma secreta y privada',

    // Item 2 Infografia

    JustTop: "100",
    ColombiaCurrentRanking: "96",
    ColombiaCurrentPoints: "36",
    JustYear: "2018",
    
    IndiceCorrupcionPaises2018: [
      {Puesto: "Puesto", Pais:"País", Puntaje:"Puntaje"},
      {Puesto: "1", Pais:"Nueva Zelanda", Puntaje:"89"},
      {Puesto: "2", Pais:"Dinamarca", Puntaje:"88"},
      {Puesto: "16", Pais:"Estados Unidos", Puntaje:"75"},
      {Puesto: "23", Pais:"Uruguay", Puntaje:"70"},
      {Puesto: "96", Pais:"Colombia", Puntaje:"37"},
      {Puesto: "168", Pais:"Venezuela", Puntaje:"18"},
      
  ],

  },
  mutations: {

    reduceCurrentSlideShowItem: (state) => {
      state.CurrentSlideShowItem-= 1;
    },

    IncreaseCurrentSlideShowItem: (state) => {
      state.CurrentSlideShowItem+= 1;
    }

  },
  actions: {

    ReduceSlide: (context) => {     
        context.commit('reduceCurrentSlideShowItem');      
    },

    IncreaseSlide: (context) => {     
      context.commit('IncreaseCurrentSlideShowItem');      
  }

  },
})
