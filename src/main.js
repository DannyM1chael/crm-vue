import Vue from "vue";
import Vuelidate from "vuelidate";
import firebase from "firebase";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import dateFilter from "@/filters/date.filter";
import currencyFilter from "@/filters/currency.filter";
import messagePlugin from "@/utils/message.plugin";
import Loader from "@/components/app/Loader";
import "materialize-css/dist/js/materialize.min";
import "firebase/auth";
import "firebase/database";

Vue.config.productionTip = false;
Vue.use(messagePlugin);
Vue.use(Vuelidate);
Vue.filter("date", dateFilter);
Vue.filter("currency", currencyFilter);
Vue.component("Loader", Loader);

const firebaseConfig = {
  apiKey: "AIzaSyDE8Iz5nO_Daf110fp5Qo6SA94EIXenCkc",
  authDomain: "crm-vue-fb.firebaseapp.com",
  projectId: "crm-vue-fb",
  storageBucket: "crm-vue-fb.appspot.com",
  messagingSenderId: "831752636201",
  appId: "1:831752636201:web:20ab43b423e71c3cb1d938",
};

firebase.initializeApp(firebaseConfig);

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount("#app");
  }
});
