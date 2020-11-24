<template>
   <div>
      
     <ArchSample v-bind:Arch="Arch" ></ArchSample>
  
   </div>
</template>

<script>

import ArchSample from '../components/ArchSample.vue';

export default {

    components:{
       'ArchSample':ArchSample, 
    },

    data() {
            return {
                Arch: [
                        { id: 1, title: `final Project`, date: 2019,
                         src: require("../images/Arch/1.jpg"),},
                        { id: 2, title: `Iranian Art Musuem`, date: 2018, 
                        src: require("../images/Arch/11.jpg"),},
                        { id: 3, title: `Residential Complex`, date: 2019,
                         src: require("../images/Arch/17.jpg"),}, 
                       
                    ],
                
            }
        },
}
</script>
