import Vue from 'vue';
import { createVuetify } from 'vuetify';
import ipfsTheme from './theme';

const Vuetify = createVuetify();

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: false,
    themes: {
      dark: ipfsTheme,
      light: ipfsTheme,
    },
  },
});
