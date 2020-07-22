import Vue from "vue";
import App from "./App.vue";
import { Button, Dialog } from "element-ui";

Vue.use(Button);
Vue.use(Dialog);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
