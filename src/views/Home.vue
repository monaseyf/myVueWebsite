<template>
<div class="home">

     <welcome/> 
     <About/>
     <Portfolio/>
    <Testimonials/>
    <ContactMe/>

</div>
</template>

<script>

import welcome from '../components/welcome.vue';
import About from './About.vue';
import Portfolio from './Portfolio.vue';
import Skills from './Skills.vue';
import Testimonials from './Testimonials.vue';
import ContactMe from './ContactMe.vue';


export default {
    name: "home",
    components: {
        welcome,
        About,
       Portfolio,
       Testimonials,
       ContactMe,

    },

    data() {

        return {

           
        }
    },

    methods: {
        
    }
};
</script>

<style scoped>
.home {
    min-height: 100%;
}
</style>
