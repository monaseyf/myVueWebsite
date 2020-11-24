<template>
<div :style="image" id="aboutMeSection" class="section">
  <v-container  >
    <v-row class="innerDiv">
      <v-col  lg = "4" md = "4" sm ="12">
       
        <div  v-on:mouseover="activeSegmentA">
          <h4 class="segmentTitle">B.Sc.In Architecture</h4>
        </div>
        
        <div  v-on:mouseover="activeSegmentB">
           <h4 class="segmentTitle">Ui/Ux Design</h4>
        </div>
        <div  v-on:mouseover="activeSegmentC">
           <h4 class="segmentTitle"> Other Expriences</h4>
        </div>
        

      </v-col>
      
       <v-col lg="8" md="8" sm="12">
         
         <div v-if="type === 'A'">
         <p class= "descriptionP">
          Managed to graduate from University of Science and Culture with  GPA of 17.94 / 20 in 4 years. <br/>
          Within the top 10 % of the architecture department. <br />
          Awarded from the head of Architecture Department as being a member of Architecture Students Union Committee 
          </p>
        </div>
        <div v-else-if="type === 'B'">
           <p class="descriptionP">
            Working in Rayan Pajouh Salamat company as a Ui / Ux designer and software tester.I have learned many things
            here especially how to communicate with client and be patient in my way 
          </p>
        </div>
        <div v-else-if="type === 'C'">
            <p class="descriptionP">
              Was coach of student organizations for their summer camps in
              Ramsar, Iran.(From secondary schools in district five,
                  Tehran.) <br />
              Taught English in two institutes in Tehran.
            </p> 
        </div>
        <div v-else>
          " "
        </div>
       </v-col>
    </v-row>
  </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return { 
      image:{ backgroundImage: `url(${require("../images/aboutMe/1.jpg")})` },
      
      hover: false,
      type:'A',
    };
  },

  methods: {

    activeSegmentA: function(){
      this.type = 'A' 
    },
    activeSegmentB: function(){
      this.type = 'B' 
    },
    activeSegmentC: function(){
      this.type = 'C'
    }
  }
}
</script>

<style scoped>
#aboutMeSection {
    background-size: cover;
    width: 100%;
    min-height: 100vh;
    position: relative;
}

.aboutMeOverlay {
    width: 100%;
    min-height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
}

.segmentTitle {
    color: #ffffff;
    font-family: "Pacifico", cursive;
    line-height: 2;
    text-align: center;
    cursor: pointer;
    transition: all 500ms;
}

.activeSegmentTitle {
    color: #e22b6f;
    border-bottom: solid 1px #e22b6f;
    border-radius: 5px;
    padding: 1%;
}

.descriptionP {
    width: 80%;
    margin-left: 10%;
    text-align: justify;
    font-family: montserrat, sans-serif;
    color: #ffffff;
}

p.eventDate {
    text-align: center;
    color: #e22a6b;
    font-family: "Pacifico", cursive;
}

.innerDiv{
  padding-top: 20%;
}
</style>
