<template>
  <v-app>
    <v-app-bar app color="blue-gray" dark>
      <v-toolbar-title>Mona Seyf</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        v-for="link in links"
        :key="`${link.label}-header-link`"
        text
        rounded
        :to="link.url"
      >
        {{ link.label }}
      </v-btn>
     <v-btn @click="toggleTheme" text rounded>
        Toggle Theme
      </v-btn>
    </v-app-bar>
    <v-content dark>
      <router-view dark></router-view>
    </v-content>
 
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      links: [
        {
          label: "Home",
          url: "/",
        },
        {
          label: "About",
          url: "/About",
        },
        {
          label: "Skills",
          url: "/Skills",
        },
        {
          label: "Portfolio",
          url: "/Portfolio",
        },
      ],
    };
  },
  methods: {
    toggleTheme() {
      this.$vuetify.theme.themes.dark.anchor = "#41B883";
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
     beforeCreate() {
        console.log('beforeCreated()')
    },
    created() {
        console.log('created()')
    },
    beforeMount() {
        console.log('beforeMount()')
    },
    mounted() {
        console.log('mounted()')
    },
    beforeUpdate() {
        console.log('beforeUpdate()')
    },
    updated() {
        console.log('updated()')
    },
  },
};
</script>
