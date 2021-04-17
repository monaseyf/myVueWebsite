<template>
  <v-container>
 
      <div class="myBody">
      
        <h1 class="text-center text-primary p-2">photography</h1>
        <v-row >
          <v-col :lg="item.lg" :md="item.md" :sm="item.sm" v-for="item in images" :key="item.src">
          <v-img v-bind:src="item.src" class="photo" />
          </v-col>
          
        </v-row>
      </div>

  </v-container>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      images:[
       {
            src: require("../images/photography/7.jpg"),
            lg: "3",
            md: "6",
            sm: "12",
            alt: "gallery",
        },
        {
            src: require("../images/photography/3.jpg"),
            lg: "3",
            md: "6",
            sm: "12",
            alt: "gallery",
        },
        {
            src: require("../images/photography/8.jpg"),
            lg: "3",
            md: "6",
            sm: "12",
            alt: "gallery",
        },
        {
            src: require("../images/photography/6.jpg"),
            lg: "3",
            md: "6",
            sm: "12",
            alt: "gallery",
        },
        {
            src: require("../images/photography/9.jpg"),
            lg: "3",
            md: "6",
            sm: "12",
            alt: "gallery",
        },
        {
            src: require("../images/photography/17.jpg"),
            lg: "6",
            md: "6",
            sm: "12",
            alt: "gallery",
        },
        {
            src: require("../images/photography/11.jpg"),
            lg: "3",
            md: "6",
            sm: "12",
            alt: "gallery",
        },
      ]
    };
  },
  methods: {
    // showImages:function (){
    //   images.map((img) =>{
    //     return 
    //   })
    // }
  }
};
</script>

<style>
.photo {
    width: 100%;
    height: 600px;
    filter: grayscale(.85) brightness(.7);
}
</style>
