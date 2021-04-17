<template>
  <v-container >
  <div class="section">
    <v-row class="innerDiv">
    
      <v-col  lg = "4" md = "4" sm ="12" text-center >
        
          <div class="tabContainer" 
              :style="filterStyle" v-on:click="activeSegmentA()" >
              <h4 class="segmentTitle"
               :class="[show ? activeColor : cssClass3]">UI/UX Design</h4>

            </div>
        
        </v-col>

      <v-col lg = "4" md = "4" sm ="12" text-center>
        <div class="tabContainer"
         :style="filterStyle" v-on:click="activeSegmentB()" >
            <h4 class="segmentTitle"
            :class="[show ? activeColor : cssClass3]">Architectural Software</h4>
          </div>
      </v-col>

        <v-col lg = "4" md = "4" sm ="12" text-center>
        <!--v-bind:class="[show ? cssClass1 : cssClass2]" -->
         <div class="tabContainer"
          :style="filterStyle" v-on:click="activeSegmentC()">
           <h4 class="segmentTitle" 
           :class="[show ? activeColor : cssClass3]"> Language Skills</h4>
        </div>
        </v-col>
       
    </v-row>
        
      <v-row>
     <v-col lg="2" md="2" sm="0"></v-col>

       <v-col lg="8" md="8" sm="12">
         
        
        <div v-if="type === 'A'" >

          <transition-group name="flip-list" >
            <div v-for="item in UI" :key="item.name">
              <p class="skillLabel"> {{item.name}}</p>
              <v-progress-linear v-model="power" color="pink" height="20"></v-progress-linear> 
            </div>
          </transition-group>
     
        </div> 
        
        <div v-else-if="type === 'B'">

          <transition-group name="flip-list" >
            <div v-for="item in Arch" :key="item.name">
              <p class="skillLabel"> {{item.name}}</p>
              <v-progress-linear v-model="skill" color="pink" height="20"></v-progress-linear> 
            </div>
          </transition-group>

        </div>
        
        <div v-else-if="type === 'C'">
          
          <transition-group name="flip-list" >
            <div v-for="item in Language" :key="item.name">
              <p class="skillLabel"> {{item.name}}</p>
              <v-progress-linear v-model="knowledge" color="pink" height="20"></v-progress-linear> 
            </div>
          </transition-group>

        </div>
        <div v-else></div> 
     
       </v-col>
    </v-row>
    </div>
  </v-container>
</template>

<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.14.1/lodash.min.js"></script>
<script>

export default {
  data: () => ({
     show:false,
     activeColor: '#e22b6f',
     type:'A',
      UI: [
        {name:"HTML 5/ CSS 3 / BOOTSTRAP", percent: "80%" },
        {name:"VUE JS", percent: "70%" },
        {name:"React JS", percent: "60%" },
        {name:"PHOTOSHOP / ILLUSTRATOR", percent: "70%" },
        {name:"INDESIGN / AdobeXD", percent: "80%" },
      ],
      Arch:[
        {name:"Revit", percent: "80%" },
        {name:"AutoCad (2d ,3d)", percent: "70%" },
        {name:"3D Max", percent: "60%" },
        {name:"Lumion", percent: "70%" },
      ],
      Language:[
        {name:"English Profeciency", percent: "80%" },
        {name:"Persian", percent: "70%" },
        {name:"Arabic", percent: "60%" },
        {name:"Germany", percent: "70%" },
      ],
    skill: 20,
    knowledge: 33,
    power: 78,
    fontSize:18,
    activeTabContainer:'activeTabContainer',
     cssClass1: `class1`,
     cssClass2: `class2`,
     cssClass3: 'class3',
  }),
   methods: {

    activeSegmentA: function(){
      this.type = 'A'
      this.fontSize = 25
      this.show = !this.show
    },
  
    activeSegmentB: function(){
      this.type = 'B';
      this.activeColor ='#e22b6f'
      this.fontSize = 25
      this.show = !this.show
    },
    activeSegmentC: function(){
      this.type = 'C';
      this.activeColor ='#e22b6f'
      this.fontSize = 25
      this.show = !this.show
    },
    shuffle: function () {
      this.UI = shuffle(this.UI)
    }
  },
  computed: {
  filterStyle() {
    if (this.show) {
       return {
          borderBottom: 'solid 2px #e22b6f',
          borderRadius: '10px',
          color:'#e22b6f',
          fontSize: '20px',
       };
    } else {
      return '';
    }
  }
}
};
</script>
<style scoped>
.flip-list-enter-active, .flip-list-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.flip-list-enter, .flip-list-leave-to /* .UI-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
            opacity: 0;
}
.flip-list-move {
  transition: transform 1s;
}
.skillLabel{
  color: white;
  margin-bottom: 2px;
  margin-top: 17px;
}
.class1 {
   color: white;
}
.class2 {
  border-bottom: solid 2px #e22b6f;
  border-radius: 10px;
  color: #e22b6f;
  font-size: 20px;
}
.class3 {
   color: white;
}
</style>