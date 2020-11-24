<template>
  <section id="portfolioSection" class="section">
    <h1 class="sectionTitle">Portfolio</h1>

    <v-row>
      <v-col class="col-lg-3 col-md-6 col-sm-12">
      <router-link to="ArchProjects">
        <div class="categoryContainer" :style="image">
          <h3 class="categoryTitle">Architectural Projects</h3>
        </div>
      </router-link>
      </v-col>

      <v-col class="col-lg-3 col-md-6 col-sm-12">
        <div class="categoryContainer" :style="imageOne">
          <h3 class="categoryTitle">UI/UX Projects</h3>
        </div>
      </v-col>

      <v-col class="col-lg-3 col-md-6 col-sm-12">
        <div class="categoryContainer" :style="imageTwo">
          <h3 class="categoryTitle">photographies</h3>
        </div>
      </v-col>
   
      <v-col class="col-lg-3 col-md-6 col-sm-12">
       <router-link to="OtherProjects">
        <div class="categoryContainer" :style="imageThree">
          <h3 class="categoryTitle">Other Projects</h3>
        </div>
        </router-link>
      </v-col>
      
    </v-row>
  </section>
</template>

<script>
// import ArchProjects from "@/pages/ArchProjects.vue";
export default {
  name: "Portfolio",
  components: {
    // ArchProjects,
  },

  data() {
    return {
      image: { backgroundImage: `url(${require("@/images/porfolio/5.jpg")})` },
      imageOne: {
        backgroundImage: `url(${require("@/images/porfolio/2.jpg")})`,
      },
      imageTwo: {
        backgroundImage: `url(${require("@/images/photography/5.jpg")})`,
      },
      imageThree: {
        backgroundImage: `url(${require("@/images/porfolio/7.jpg")})`,
      },
    };
  },
};
</script>

<style>

#portfolioSection {
    background-color: black;
    background-size: cover;
    width: 100%;
    min-height: 100vh;
}
.sectionTitle {
    text-align: center;
    font-family: "Pacifico", cursive;
    justify-content: center;
}
</style>
