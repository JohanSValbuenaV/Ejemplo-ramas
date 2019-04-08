<template>
  <div>
    <media :query="{minWidth: 990}" @media-enter="mediaEnter" @media-leave="mediaLeave"></media>

    <nav class="navbar navbar-expand-lg navbar-dark SpecialGray justify-content-sm-start fixed-top">
      <img
        class="rspImage navbar-brand order-1 order-lg-0 ml-lg-0 ml-2 mr-auto"
        :src="Logo"
        alt="Logo Colombia #conta la corrupción"
      >

      <button class="navbar-toggler menuu" type="button">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div
        class="collapse navbar-collapse d-flex flex-column flex-lg-row flex-xl-row justify-content-lg-end mobileMenu SpecialGray p-3 p-lg-0 mt-lg-0"
        id="navbarTogglerDemo02"
      >
        <ul v-if="!SmallerThan990" class="navbar-nav mt-2 pa-1 mb-2 HeaderList align-self-stretch">
          <li class="nav-item HeaderItem" v-for="CurrentItem in MenuItems" :key="CurrentItem.id">
            <a
              v-if="CurrentItem.Special"
              class=" bold font-weight-medium NoDec BlueLinkItem SpecialBlue DenunciarCaso"
              href="#"
            >{{CurrentItem.name}}</a>
            <a v-else-if="CurrentItem.Init" class="SpecialBlueFont font-weight-medium NoDec Init" href="#">{{CurrentItem.name}}</a>
            <a v-else class="font-weight-medium LinkItem" href="#">{{CurrentItem.name}}</a>
          </li>

          <!-- 
           InitCLASS=  SpecialBlueFont font-weight-medium NoDec Init
           DENUNCIA CLASS= bold font-weight-medium NoDec BlueLinkItem SpecialBlue DenunciarCaso
           NORMAL CLASS= font-weight-medium LinkItem
          -->
        </ul>
        <MobileMenu v-else></MobileMenu>
      </div>
    </nav>

    <div class="overlay"></div>
    
  </div>
</template>




<script>
import MobileMenu from "./MobileMenu.vue";
import Media from "vue-media";

export default {
  name: "App",
  components: {
    Media,
    MobileMenu: MobileMenu
  },
  data() {
    return {
      Logo: require("../assets/Logo.jpg"),

      SmallerThan990: window.innerWidth < 990,
     
    };
  },

  methods: {
    mediaEnter(mediaQueryString) {
      this.SmallerThan990 = false;
    },
    mediaLeave(mediaQueryString) {
      this.SmallerThan990 = true;
    }
  },

  computed: {
    MenuItems() {
      return this.$store.state.MenuItems;
    }
  }
};

$(document).ready(function() {
  $(".navbar-toggler , .overlay").on("click", function() {
    $(".mobileMenu, .overlay").toggleClass("open , openOverlay");
  });
});



</script>

<style scoped>



.menuu {
  border-color: rgb(94, 94, 94);
  border-width: 1px;
}
.menuu:hover {
  border-color: rgb(68, 222, 255);
  border-width: 2px;
}

.MtopMenu {
  margin-top: 100px;
}

.NoDec {
  text-decoration: none;
}

.rspImage {
  width: 320px;
}

.HeaderList {
  display: flex;

  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 70%;

  margin-left: 1%;
}

.Init {
  color: rgb(68, 222, 255);
}

.Init:hover {
  color: rgb(255, 255, 255);
}

.HeaderItem {
  margin-right: 8%;
  padding-top: 1%;
  padding-bottom: 1%;
  font-size: 120%;
}

.BlueLinkItem {
  text-decoration: none;
  color: rgb(0, 0, 0);
}

.BlueLinkItem:hover {
  text-decoration: none;
  border-width: 3px;
  border-style: solid;
  border-color: rgb(68, 222, 255);
  background-color: rgb(27, 27, 27);
  color: rgb(255, 255, 255);
}

.LinkItem {
  text-decoration: none;
  color: rgb(255, 255, 255);
}

.LinkItem:hover {
  text-decoration: none;
  color: rgb(68, 222, 255);
}

.DenunciarCaso {
  border-radius: 6px;
  padding: 9px;
}

.SpecialGray {
  background-color: rgb(27, 27, 27);
}

.SpecialBlue {
  background-color: rgb(68, 222, 255);
}

.SpecialBlueFont {
  color: rgb(68, 222, 255);
}

@media (max-width: 990px) {


  .mobileMenu {
    transition: all ease 0.25s;   
    left: 0;
    position: fixed;
    top: 0;
    bottom: 0;
    margin: auto;
    transform: translateX(-100%);
    width: 300px;
    margin-top: 103px;
  }

  .overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    background-color: rgba(0, 0, 0, 0.5);
    display: none;
  }

  .openOverlay {
    display: block;
  }

  .open {
    transition: all ease 0.25s;
    transform: translate(0);
  }

  .rspImage {
    width: 250px;
  }
}
</style>
