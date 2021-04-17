<template>
<v-container >
    <v-row>
        <v-col lg="3" md="3" sm="12" v-on:click="activeSegment0">
            <p>All </p>
        </v-col>
        <v-col lg="3" md="3" sm="12" v-on:click="activeSegment1() ; filterImages()">
            <p>Posters </p>
        </v-col>
        <v-col lg="3" md="3" sm="12" v-on:click="activeSegment2">
            <p>Drawings </p>
        </v-col>
        <v-col lg="3" md="3" sm="12" v-on:click="activeSegment3">
            <p>Art Installation </p>
        </v-col>
    </v-row>

    <v-row>
        <v-col lg="12" md="12" sm="12">
            <div v-if="type === 0">
                <p class="otherProjectsParagraph">
                    Doing artistic work gives me a great deal of pleasure.
                </p>
            </div>
            <div v-else-if="type === 1" >
                <p class="otherProjectsParagraph">
                    These are some of my handmade
                    posters which demonstrate a special meaning.
                </p>
            </div>
            <div v-else-if="type === 2">
                <p class="otherProjectsParagraph">
                    I love to express my imagination in sketches and drawings. </p>
            </div>
            <div v-else-if="type === 3">
                <p class="otherProjectsParagraph">
                    It was a group project to design an intractive space.A performance was also design
                    to disoriented the meaning of human body </p>
            </div>
        </v-col>
    </v-row>

    <!-- <v-row>

       <v-col lg="4" md="4" sm="12" class="imageGallery" v-for="item in images" :key="item.id">
             <div>
                 <img   :src="item.src"/>
            </div>

        </v-col>

    </v-row> -->
    <v-row>
        <div  v-if="type === 0" class="allImagesInGallery">
         <v-col lg="4" md="4" sm="12" class="imageGallery" v-for="item in images" :key="item.id" >
             <div>
                 <img   :src="item.src"/>
            </div>
        </v-col>
        </div>
      
        <v-col lg="4" md="4" sm="12" class="imageGallery" v-for="item in filterImages" :key="item.id" v-else-if="type === 1">
             <div>
                 <img   :src="item.src"/>
            </div>
        </v-col>

        <v-col lg="4" md="4" sm="12" class="imageGallery" v-for="item in filterImagesTwo" :key="item.id" v-else-if="type === 2">
             <div>
                 <img   :src="item.src"/>
            </div>
        </v-col>

    </v-row>
</v-container>
</template>

<script>

export default {
    data() {
        return {
            
            images:[
                {id:1, src:require("../images/Art/1.jpg"), isCompleted:true},
                {id:1, src:require("../images/Art/2.jpg"), isCompleted:true},
                {id:1, src:require("../images/Art/3.jpg"), isCompleted:true}, 
                {id:1, src:require("../images/Art/4.jpg"), isCompleted:false},
                {id:1, src:require("../images/Art/5.jpg"), isCompleted:false},
                {id:2, src:require("../images/Art/6.jpg")},
                {id:2, src:require("../images/Art/7.jpg")}, 
                {id:2, src:require("../images/Art/8.jpg")}, 
                {id:2, src:require("../images/Art/14.jpg")},
                {id:3, src:require("../images/Art/10.jpg")},
                {id:3, src:require("../images/Art/11.jpg")}, 
                {id:3, src:require("../images/Art/12.jpg")},  
            ],
           
            type: 0,
        };
    },

    methods: {

        activeSegment0: function () {
            this.type = 0
        },
        activeSegment1: function () {
            this.type = 1; 
            //  return this.images.filter((img) =>{
            //      return img.id == 1
            //  })
        },
        activeSegment2: function () {
            this.type = 2
        },
        activeSegment3: function () {
            this.type = 3
        },
       
         
    },
    computed:{

        filterImages: function (){
             return this.images.filter((img) =>{
                 return img.id === 1
             })
         },

        filterImagesTwo: function (){
             return this.images.filter((img) =>{
                 return img.id === 2
             })
         },
         
    }
}
</script>

<style>
.section {

    min-height: 100vh;
  
}

.otherProjectsParagraph {
    text-align: center;
    font-family: montserrat, sans-serif;
}

.otherProjectsCategoryTitle {
    font-family: "Pacifico", cursive;
    color: #ffffff;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
    cursor: pointer;
}

.activeOtherProjectsCategoryTitle {
    color: #e22a6b;
    cursor: auto;
}

.otherProjectsCategory {
    border-bottom: solid 1px #e22a6b;
    border-radius: 5px;
}

.otherProjectsImageContainer {
    width: 100%;
    margin-top: 15px;
    margin-bottom: 15px;
    border-radius: 5px;
    box-shadow: 3px 3px 8px 0px rgba(253, 0, 118, 0.2);
    transition: all 300ms;
}

.otherProjectImage {
    width: 100%;
    border-radius: 5px;
}

.otherProjectsImageContainer:hover {
    border-radius: 8px;
    transform: scale(1.02);
    box-shadow: 3px 3px 8px 0px rgba(253, 0, 118, 0.5);
    cursor: pointer;
}
.allImagesInGallery{
    display: flex;
    flex-wrap: wrap;
}
</style>
