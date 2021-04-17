import "@fortawesome/fontawesome-free/css/all.css";
import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: "fa",
    },
    // theme: {
        
    //      themes: {
    //     //     light: {
    //     //         primary: "#41B883",
    //     //     },
    //         dark: {
    //             primary: "#34495E",
    //          },
    //     },

    // },
    theme: { dark: true },
});