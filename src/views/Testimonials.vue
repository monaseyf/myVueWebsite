<template>

<div class="testimonials ">
    <div class="section" >
        
        <v-row>
            <v-col lg="4" md="4" sm="12">
                <v-card class="mx-auto" max-width="344" min-height="400px" outlined>
                    
                        
                            <v-img class="testimonials_icon" src="../images/ostadMashhadi.png"/>
                      
                        <v-list-item-content>
                            <v-card-title >
                            Mehdi Taheri
                            </v-card-title >
                            <v-card-text class="testimonials_quote">
                                She is really smart and industrious person.I can count on her,
                                when she is given a responsibility.She can comuinicate very well
                                with the customers which is really adorable.
                            </v-card-text >
                        </v-list-item-content>
                   
             </v-card> 
            </v-col>

             <v-col lg="4" md="4" sm="12">
                <v-card class="mx-auto" max-width="344" min-height="400px" outlined>
                    
                        
                            <v-img class="testimonials_icon" src="../images/ostadMashhadi.png"/>
                      
                        <v-list-item-content>
                            <v-card-title >
                            Mehdi Taheri
                            </v-card-title >
                            <v-card-text class="testimonials_quote">
                                She is really smart and industrious person.I can count on her,
                                when she is given a responsibility.She can comuinicate very well
                                with the customers which is really adorable.
                            </v-card-text >
                        </v-list-item-content>
                   
             </v-card> 
            </v-col>

             <v-col lg="4" md="4" sm="12">
                <v-card class="mx-auto" max-width="344" min-height="400px" outlined>
                    
                        
                            <v-img class="testimonials_icon" src="../images/ostadMashhadi.png"/>
                      
                        <v-list-item-content>
                            <v-card-title >
                            Mehdi Taheri
                            </v-card-title >
                            <v-card-text class="testimonials_quote">
                                She is really smart and industrious person.I can count on her,
                                when she is given a responsibility.She can comuinicate very well
                                with the customers which is really adorable.
                            </v-card-text >
                        </v-list-item-content>
                   
             </v-card> 
            </v-col>
        </v-row> 
    </div>
</div>
</template>
<script>
export default {
    data () {
      return {
        colors: [
          'green',
          'secondary',
          'yellow darken-4',
          'red lighten-2',
          'orange darken-1',
        ],
        cycle: false,
        slides: [
          'First',
          'Second',
          'Third',
          'Fourth',
          'Fifth',
        ],
      }
    },
  }
</script>
<style  >
.testimonials_quote {
    color: #848484;
    text-align: justify;
    font-family: montserrat, sans-serif;
    width: 90%;
    margin: auto;
}
.testimonials_icon{
    margin: 0px auto 50px;
    border-radius: 50%;
    max-height: 200px;
    max-width: 200px;
}
.testimonials {
    background-image: url("../images/blackBack.jpg");
    background-size: cover;
    width: 100%;
    min-height: 100vh;
}
</style>