<template>
<div class="home" v-intersect="showMoreContent">

     <welcome/> 
     <About v-if="loadNewContent"/>
     <Portfolio  />
     <Skills />
    <Testimonials />
    <ContactMe />

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
       Skills,
       Testimonials,
       ContactMe,

    },

    data() {

        return {
            loadNewContent: false,
           
        }
    },

    methods: {
        showMoreContent(entries) {
      this.loadNewContent = entries[0].isIntersecting
    },
    }
};
</script>

<style scoped>

</style>
