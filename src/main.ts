/*
 * @Author: along
 * @Description: main
 * @Date: 2024-04-02 13:56:18
 * @LastEditors: along
 * @LastEditTime: 2024-04-02 17:23:02
 * @FilePath: /cxy-web-table/src/main.ts
 */
import { createApp } from 'vue';
import { createPinia } from 'pinia';

import '@/assets/css/iconfont.css';

import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const vuetify = createVuetify({
  components,
  directives,
});

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(vuetify);

app.mount('#app');
