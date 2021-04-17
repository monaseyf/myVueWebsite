<template>
<div class="section">
  <v-container >
    
    <v-row>
      <v-col lg="12" class=" mt-2">
          <h1>professional projects</h1>
        </v-col>
    </v-row>

    <v-row v-for="item in Content" :key="item"> 
      <v-col lg="9">
        <a>
          <img class="UiPhoto" :src="item.src" />
        </a>
      </v-col>

      <v-col lg="3" >
        <h3 class="UiTitle">{{item.title}}</h3>
        <p class="descriptOne">{{item.other}}</p>
      </v-col>
    
    
    <v-row>
      <v-col lg="12" class="descript">
      
        <v-row v-for="item in Descript" :key="item">
          <v-col lg="3" md="6" sm="12">
              <img class="UiLogo" src="../images/team.png" alt = "/"/>
              <h4 class ="UiTitle" > Team: </h4> 
              <p> {{item.team}} </p>
            </v-col>

            <v-col lg="3" md="6" sm="12" >
              <img class="UiLogo" src="../images/client.png" alt = "/"/>
              <h4 class ="UiTitle" >Employer:</h4> 
              <p>{{item.employer}}</p>
            </v-col>

            <v-col lg="3" md="6" sm="12" >
              <img class="UiLogo" src="../images/date.png" alt = "/"/>
              <h4 class ="UiTitle" > Date: </h4> 
              <p> {{ item.date }}</p>
            </v-col>

            <v-col lg="3" md="6" sm="12" >
              <img class="UiLogo" src="../images/services.png" alt = "/"/>
              <h4 class ="UiTitle" >MyRole: </h4> 
              <p>{{item.role}}</p>
            </v-col>  
        </v-row>

      </v-col>  
    </v-row> 

   </v-row> 
 
  </v-container>
</div>

</template>

<script>
export default {
  components: {},
  data() {
    return {
      Content:[
        {title:'IranPed',
        other:'The purpose of this project is to inform about the International congress of Pediatrics.Due to the coronavirus pandemic, the conference is scheduled to hold virtually.Rayan Pajouh company has provided them a platform to manage their content dynamically.Also This website displays information inboth Persian and English.',
        src:require("../images/iranped.png")
        },
        {title:'Virtual Service',
        other:'According to international standards of e - learning and educational needs, Tehran University of Medical Sciences has managed to present part of its educational programs in the form of online courses.In this project, I have attended several meeting to comperhend what exactly our costumers want.As a member of front - end web developers, I was corporatingfor applying their claims to interactive visual design',
         src:require("../images/virtual.png")
        },
        {title:'Arman',
        other:'Arman is a MOOCs(Massive Open Online Courses) for "Massive and Modern National Computer Training.Massive refers to the unlimited registration of individuals.The purpose of this project is to provide high quality and credible education system for students and graduates.',
         src:require("../images/arman.png")
        },
      ],
      Descript:[
        {employer:"Children's Medical Center-Tehran",team:'Rayan Pajouh Salamat',date:'October 27, 2019 - March 19, 2020', role:'Ui designer'},
        
      ],
      
    };
  },
  methods: {}
};
</script>

<style>

</style>
