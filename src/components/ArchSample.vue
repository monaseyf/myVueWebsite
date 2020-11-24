<template>
    <div >
       <v-container>
          <v-card v-for="item in Arch" :key="item.id" 
          class="mx-auto" max-width="600" style="margin-bottom:20px">

           <v-img v-bind:src="item.src" ></v-img>
            <v-card-title >
                {{item.title}}
            </v-card-title>
            <v-card-text >
                ID: {{item.id}}
                <br/>
                Age: {{item.date}}
              
            </v-card-text>
          </v-card> 
       </v-container>
               
    </div>
</template>

<script>

export default {
    props:['Arch'],

    data() {
            return {
               
            }
        },
}
</script>
<style scoped>


</style>